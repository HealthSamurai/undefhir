(ns bxb.honey
  (:refer-clojure :exclude [update])
  (:require [clojure.string :as str]
            [honeysql.core    :as hsql]
            [cheshire.core :as json]
            [honeysql.format :as sqlf]))

(sqlf/register-clause! :returning 230)

(defmethod sqlf/format-clause :returning [[_ fields] sql-map]
  (str "RETURNING "
       (when (:modifiers sql-map)
         (str (sqlf/space-join (map (comp clojure.string/upper-case name)
                                    (:modifiers sql-map)))
              " "))
       (sqlf/comma-join (map sqlf/to-sql fields))))

(sqlf/register-clause! :create-table 1)

(defmethod sqlf/format-clause :create-table [[_ tbl-name] sql-map]
  (str "CREATE TABLE " (sqlf/to-sql tbl-name)))


(sqlf/register-clause! :columns 2)

(defmethod sqlf/format-clause :columns [[_ cols] sql-map]
  (str "("
       (str/join ", " (map #(str/join " " (map name %)) cols))
       ")"))

(sqlf/register-clause! :inherits 3)

(defmethod sqlf/format-clause :inherits [[_ tbls] sql-map]
  (when tbls (str " INHERITS (" (str/join "," (map name tbls)) ")")))


(defmethod sqlf/format-clause :drop-table [[_ tbl-name] sql-map]
  (str "DROP TABLE " (when (:if-exists sql-map) " IF EXISTS ") (sqlf/to-sql tbl-name)))

(sqlf/register-clause! :drop-table 1)

;; UPSERT (from https://github.com/nilenso/honeysql-postgres/)

(sqlf/register-clause! :do-update-set 235)
(sqlf/register-clause! :do-update-set! 235)
(sqlf/register-clause! :do-nothing 235)
(sqlf/register-clause! :upsert 225)

(defmethod sqlf/format-clause :on-conflict-constraint [[_ k] _]
  (let [get-first #(if (sequential? %)
                     (first %)
                     %)]
    (str "ON CONFLICT ON CONSTRAINT " (-> k
                                          get-first
                                          sqlf/to-sql))))

(defmethod sqlf/format-clause :on-conflict [[_ ids] _]
  (let [comma-join-args #(if (nil? %)
                           ""
                           (->> %
                                (map sqlf/to-sql)
                                sqlf/comma-join
                                sqlf/paren-wrap))]
    (str "ON CONFLICT " (comma-join-args ids))))

(defmethod sqlf/format-clause :do-nothing [_ _]
  "DO NOTHING")

(defmethod sqlf/format-clause :do-update-set! [[_ values] _]
  (str "DO UPDATE SET " (sqlf/comma-join (for [[k v] values]
                                           (str (sqlf/to-sql k) " = " (sqlf/to-sql v))))))

(defmethod sqlf/format-clause :do-update-set [[_ values] _]
  (str "DO UPDATE SET "
       (sqlf/comma-join (map #(str (sqlf/to-sql %) " = EXCLUDED." (sqlf/to-sql %))
                             values))))

(defn- format-upsert-clause [upsert]
  (let [ks (keys upsert)]
    (map #(sqlf/format-clause % (find upsert %)) upsert)))

(defmethod sqlf/format-clause :upsert [[_ upsert] _]
  (sqlf/space-join (format-upsert-clause upsert)))

;; END UPSERT

(defmethod sqlf/fn-handler "ilike" [_ col qstr]
  (str (sqlf/to-sql col) " ilike " (sqlf/to-sql qstr)))

(doseq [op ["@@" "&&" "->" "->>" "?" "?|" "?&"]]
  (defmethod sqlf/fn-handler op [_ col qstr]
    (str (sqlf/to-sql col) " " (name op) " " (sqlf/to-sql qstr))))

(doseq [op ["@>" "<@" "||"]]
  (defmethod sqlf/fn-handler op [_ col qstr]
    (str/join " "
              [(-> col
                   (cond-> (map? col) json/generate-string)
                   sqlf/to-sql)
               (name op)
               (-> qstr
                   (cond-> (map? qstr) json/generate-string)
                   sqlf/to-sql)])))

(doseq [op ["#>>" "#>" "#-"]]
  (defmethod sqlf/fn-handler op [_ col qstr]
    (str/join " "
              [(sqlf/to-sql col)
               (name op)
               (->> qstr
                    (map #(hsql/call :cast % :TEXT))
                    (hsql/call :arr)
                    sqlf/to-sql)])))

(defmethod sqlf/fn-handler "arr" [_ els]
  (str "ARRAY" \[ (str/join ", " (map sqlf/to-sql els)) \]))

(defmethod sqlf/fn-handler "::" [_ x t]
  (str (sqlf/to-sql x) "::" (sqlf/to-sql t)))

(defmethod sqlf/fn-handler "not-ilike" [_ col qstr]
  (str (sqlf/to-sql col) " not ilike " (sqlf/to-sql qstr)))

(defn jsonb-selector [v]
  (let [[_ col op path] (re-find #"(.+)(#>>|#>)(.+)" v)
        path (str/replace path "." ",")]
    (str (sqlf/to-sql (keyword col)) op "'{" path "}'")))

(defmethod sqlf/format-clause :|| [[_ v] _]
  (if (= (count v) 2)
    (str (sqlf/to-sql (first v)) " || " (sqlf/to-sql (second v)))
    (throw (Exception. "Wrong number of arguments"))))

(defmethod sqlf/format-clause :jsonb [[_ v] _]
  (if (keyword? v)
    (jsonb-selector (name v))
    (str (sqlf/add-anon-param (json/generate-string v)) "::jsonb")))
