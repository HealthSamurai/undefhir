(ns pg.core
  (:require
   [clj-pg.pool :as pool]
   [clj-pg.honey :as pg]
   [honeysql.format :as sqlf]
   [clojure.walk]
   [clojure.string :as str]
   [clojure.java.jdbc :as jdbc]))

(defn env [v]
  (-> v (name)
      (str/upper-case)
      (str/replace #"-" "_")
      (System/getenv)))

(defn database-url [spec]
  (let [conn spec]
    (str "jdbc:postgresql://" (:host conn) ":" (or (:port! conn) (:port conn))
         "/" (:database conn)
         "?user=" (:user conn)
         "&password=" (:password conn) "&stringtype=unspecified")))

(defn datasource [spec]
  (let [ds-opts   (let [database-url (database-url spec)]
                    {:connection-timeout 30000
                     :idle-timeout 10000
                     :minimum-idle       0
                     :maximum-pool-size  30
                     :connection-init-sql "select 1"
                     :data-source.url   database-url})
        ds (pool/create-pool ds-opts)]
    {:datasource ds}))

(defn retry-datasource [db-spec max-retry & [timeout]]
  (loop [retry-num max-retry]
    (let [res (try (let [datasource (datasource db-spec)] (pg/query datasource "SELECT 1") datasource)
                   (catch Exception e
                     (println "Error while connecting to " (dissoc db-spec :password) " - " (.getMessage e))))]
      (cond
        res res

        (> 0 retry-num)
        (let [msg (str "Unable to connect to " (dissoc db-spec :password))]
          (println msg)
          (throw (Exception. msg)))

        :else (do
                (println "Retry connection to " (dissoc db-spec :password))
                (Thread/sleep (or timeout 2000))
                  (recur (dec retry-num)))))))

(defn shutdown [{conn :datasource}]
  (pool/close-pool conn))

(defn connection
  "open root connection"
  [db-spec]
  {:connection (jdbc/get-connection {:connection-uri (database-url db-spec)})})

(defn retry-connection
  "open root connection"
  [db-spec & [max-retry timeout]]
  (let [max-retry (or max-retry 20)]
    (loop [retry-num max-retry]
      (let [res (try (let [conn (connection db-spec)] (pg/query conn "SELECT 1") conn)
                     (catch Exception e
                       (println (str "Error while connecting to " (dissoc db-spec :password) " - " (.getMessage e)))))]
        (cond
          res res

          (> 0 retry-num)
          (let [msg (str "Unable to connect to " (dissoc db-spec :password))]
            (println msg)
            (throw (Exception. msg)))

          :else (do
                  (println "Retry connection to " (dissoc db-spec :password))
                  (Thread/sleep (or timeout 2000))
                  (recur (dec retry-num))))))))



(defn close-connection [conn]
  (.close (:connection conn)))

(defn with-connection
  [db-spec f]
  (with-open [c (:connection (connection db-spec))]
    (f {:connection c})))

(defn with-retry-connection
  [db-spec f & [max-retry timeout]]
  (with-open [c (:connection (retry-connection db-spec max-retry timeout))]
    (f {:connection c})))

(defn db-spec-from-env []
  (merge
   {:host (env :pghost)
    :port (env :pgport)
    :user (env :pguser)
    :database (env :pgdatabase)
    :password (env :pgpassword)}))

(defn user-exists? [db user]
  (let [user (if (map? user) (:user user) user)]
    (->> {:select [true] :from [:pg_catalog.pg_roles] :where [:= :rolname user]}
         (pg/query-value db)
         (some?))))


(defn create-user [db {user :user password :password}]
  (when-not (user-exists? db user)
    (pg/exec! db (format "CREATE USER %s WITH ENCRYPTED PASSWORD '%s'" user password))))

(defn drop-user [db {user :user}]
  (pg/exec! db (format "DROP USER IF EXISTS %s" user)))

(defn drop-database [db {dbname :database :as spec}]
  (pg/exec! db (format "DROP DATABASE IF EXISTS %s" dbname)))

(defn database-exists? [db dbname]
  (pg/database-exists? db dbname))

(defn create-database
  [db {dbname :database user :user}]
  (let [db-sql    (format "CREATE DATABASE %s OWNER %s" dbname user)
        grant-sql (format "GRANT ALL PRIVILEGES ON DATABASE %s TO %s" dbname user)]
    (when-not (pg/database-exists? db dbname)
      (pg/exec! db db-sql)
      (pg/exec! db grant-sql))))

(defn grant-privileges
  [db {dbname :database user :user}]
  (let [grant-sql (format "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to %s" user)]
    (when (pg/database-exists? db dbname)
      (pg/exec! db grant-sql))))

(defn ensure-database [conn {db-name :database :as  db-spec}]
  (when-not (database-exists? conn db-name)
    (pg/create-database conn db-name)))

(defn archive-db [db archive-name db-spec]
  ;; TODO: close jdbc connections
  ;; close other connections
  ;; SELECT pg_terminate_backend(pg_stat_activity.procpid) 
  ;; FROM pg_stat_get_activity(NULL::integer) 
  ;; WHERE datid=(SELECT oid from pg_database where datname = 'your_database');
  ;; remove from cache
  (jdbc/execute! db (format "ALTER DATABASE %s RENAME TO %s " (:dbname db-spec) archive-name)))

(defn archive-user [db archive-name db-spec]
  (jdbc/execute! db (format "ALTER USER %s RENAME TO %s " (:user db-spec) archive-name)))

(defmethod sqlf/fn-handler "<=>" [_ col qstr]
  (str (sqlf/to-sql col) " " "<=>" " " (sqlf/to-sql qstr)))


(comment

  (def conn (connection (spec-from-env)))

  conn
  (.close conn)

  (with-connection (spec-from-env)
    (fn [c]
      (jdbc/query c ["SELECT 1"])))

  (def rdb (retry-datasource (spec-from-env) 10 100))

  (jdbc/query rdb ["SELECT 1"])

  (shutdown rdb)

  db)
