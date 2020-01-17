(ns test-db
  (:require [pg.core :as pg]))

(def test-db-name "undefhir")
(def db-spec
    {:dbtype   "postgresql"
     :host     (or (System/getenv "PGHOST")     "localhost")
     :port     (or (System/getenv "PGPORT")     "5441")
     :database (or (System/getenv "PGDATABASE") "postgres")
     :user     (or (System/getenv "PGUSSER")    "postgres")
     :password (or (System/getenv "PGPASSWORD") "postgres")})

(defonce cache (atom nil))
(defn connect-db [& [spec]]
  (pg/connection (merge db-spec spec)))

(def tdb-spec (assoc db-spec :database test-db-name))

(defn ensure-db []
  (pg/with-connection db-spec
    (fn [db]
      (pg/ensure-database db tdb-spec))))

(defn get-db []
  (or @cache
      (reset! cache (pg/retry-connection tdb-spec))))

(comment
  (ensure-db)
  (reset! cash (pg/retry-connection db-spec))
  )
