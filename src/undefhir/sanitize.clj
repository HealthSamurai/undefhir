(ns undefhir.sanitize
  (:require [honeysql.core    :as hsql]
            [cheshire.core :as json]
            [pg.core :as pg]
            [clj-pg.honey :as db]
            [clojure.set :as set]
            [clojure.data.generators :as gen]
            [clojure.string :as str]
            [clojure.java.jdbc :as jdbc]
            [undefhir.re-hash :as ur]
            [undefhir.pipe :as pipe]
            [undefhir.utils :refer :all]))

(def hash-id ur/re-hash )
(defonce db (atom nil))

(def *given  ["a" , "b"] #_(str/split-lines (slurp "given")))
(def *family ["a" , "b"] #_(str/split-lines (slurp "family")))
(def *patron ["a" , "b"] #_(str/split-lines (slurp "patronymic")))

(def db-spec
    {:dbtype   "postgresql"
     ;;:database "testbox"
     :database "trytest"
     ;; :database "anontry"
     :host     "localhost"
     :port     "5439"
     :user     "postgres"
     :password "postgres"})

(defn connect-db [] (reset! db (pg/connection db-spec)))

(defn truncate! [ids]
  (doseq [id ids]
    (print ".")
    (db/exec! @db (str "truncate table " id)))
  (println ""))

(defn truncate-history [& [skip]]
  (let [rt-types (set (map :id (db/query @db "select id from entity where resource#>>'{type}'='resource'")))
        rt-types (set/difference rt-types skip)
        ids (mapv hx-table-name rt-types)]
    (println "Trucate histoty: ")
    (truncate! ids)
    (println "Truncate history done.")))

(defn truncate [tables]
  (let [tables (map table-name tables)]
    (println "Trucate resource: ")
    (truncate! tables)
    (println "Truncate resource done.")))

(defmulti randomize (fn [key value] key))

(defmethod randomize :default [_ value] value)

(defmethod randomize
  :rnd-birthDate
  [_ value]
  (.format
    (java.text.SimpleDateFormat. "yyyy-MM-dd")
    (gen/date #inst "1990-01-16T00:00:00.000-00:00")))

(defmethod randomize
  :rnd-humanName
  [_ value]
  (-> value
      (assoc-in [0 :given 0] (rand-nth *given))
      (assoc-in [0 :given 1] (rand-nth *patron))
      (assoc-in [0 :family] (rand-nth *family))))

(defmethod randomize
  :rnd-telecom
  [_ value]
  (mapv (fn [el]
          (let [system (:system el)]
            (cond-> el
              (= system "email")
              (assoc :value (str (rand-str 7) "@" (rand-str 4) "." (rand-nth ["ru" "com" "net" "io"])))
              :else
              (assoc :value (rand-nmb 10))))) value))

(defmethod randomize
  :rnd-identifiers
  [_ value]
  (map #(update % :value hash-id) value))

(defn skip-list [spec]
  (set/union
   (set ["OperationOutcome"])
   (set (map name (:skip  spec)))
   (set (map :id (db/query @db " select id from entity where resource->>'type' = 'resource' and resource->>'isMeta' = 'true'")))))

(defn leave [l]
  (println "Delete unused data" )
  (doseq [[rt rule] l]
    ;;(println "Leave " rt " where  resource @@ " rule)
    (db/exec! @db (str "delete from " (table-name rt) " where not (resource @@ '" rule "');") )
    (println "."))
  (println "Done."))

(defn mk-anon-fn [rt an-spec]
  (let [transforms (merge {:identifier :rnd-identifiers}
                          (get an-spec rt))]
    (fn [row]
      (update row :resource
              (fn [r]
                (reduce-kv
                 (fn [resource k transform-fn]
                   (update resource k (partial randomize transform-fn)))
                 r transforms))))))

(defn anonymify-refs [resource]
  (clojure.walk/prewalk
   (fn [x]
     (cond
       (and (:id x) (:resourceType x))
       (update x :id hash-id)

       (and
        (get-in x [:identifier :value])
        (get-in x [:identifier :system]))
       (update-in x [:identifier :value] hash-id)
       :else x))
   resource))

(defn anon-row [row]
  (-> row
      (update :id  hash-id)
      (update :resource anonymify-refs)))

(defn anonymify [{an :anon :as spec} skip]
  (println "Anonymify data:")
  (doseq [[rt an-spec] an]
    (println "Anonymify:  " (name rt))
    (let [an-fn (mk-anon-fn rt an)]
      ;; TODO:
      (db/exec! @db (str "drop table  IF EXISTS " (tmp-table-name :Patient) ))
      (db/exec! @db (str "create table " (tmp-table-name rt) " as table " (table-name rt) " with no data;"))
      (pipe/piped-loader db-spec
                    (str "select * from " (table-name rt))
                    #(-> % anon-row an-fn)
                    (tmp-table-name rt))))

  (let [tail (set/difference
              (set (map :id (db/query @db "select id from entity where resource#>>'{type}'='resource'")))
              skip
              (set (map name (keys an))))]
    (doseq [rt tail]
      (println "Anonymify " rt)
      (db/exec! @db (str "drop table if exists "  (tmp-table-name rt) ))
      (db/exec! @db (str "create table " (tmp-table-name rt) " as table " (table-name rt) " with no data;"))
      (pipe/piped-loader db-spec
                    (str "select * from " (table-name rt))
                    #(-> % anon-row)
                    (tmp-table-name rt))
      (println ""))))
