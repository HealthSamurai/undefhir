(ns bxb.pipe
  (:require [honeysql.core    :as hsql]
            [cheshire.core :as json]
            [pg.core :as pg]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.java.jdbc :as jdbc])
  (:import (java.io FileInputStream PipedOutputStream PipedInputStream)
           java.util.zip.GZIPInputStream
           [java.sql BatchUpdateException DriverManager
            PreparedStatement ResultSet SQLException Statement Types]
           org.postgresql.PGConnection
           org.postgresql.copy.CopyManager))

(defn- make-name-unique
  [cols col-name n]
  (let [suffixed-name (if (= n 1) col-name (str col-name "_" n))]
    (if (apply distinct? suffixed-name cols)
      suffixed-name
      (recur cols col-name (inc n)))))

(defn- make-cols-unique
  [cols]
  (if (or (empty? cols) (apply distinct? cols))
    cols
    (reduce (fn [unique-cols col-name]
              (conj unique-cols (make-name-unique unique-cols col-name 1))) []  cols)))

(defn resultset-with-row-cb
  [^ResultSet rs {:keys [identifiers as-arrays? row-cb]
                  :or {identifiers str/lower-case}}]
  (let [rsmeta (.getMetaData rs)
        idxs (range 1 (inc (.getColumnCount rsmeta)))
        col-name-fn (if (= :cols-as-is as-arrays?) identity make-cols-unique)
        keys (->> idxs
                  (map (fn [^Integer i] (.getColumnLabel rsmeta i)))
                  col-name-fn
                  (map (comp keyword identifiers)))
        row-values (fn []
                     (map (fn [^Integer i]
                            (jdbc/result-set-read-column (.getObject rs i) rsmeta i)) idxs))
        records (fn thisfn []
                  (while (.next rs)
                    (if row-cb
                      (row-cb (zipmap keys (row-values)))
                      (cons (zipmap keys (row-values)) (lazy-seq (thisfn))))))]
    (records)))

(defn query-with-row-cb [conn q {fs :fetch-size :as opts}]
  (.setAutoCommit conn false)
  (with-open [st (.createStatement conn)]
    (.setFetchSize st (or fs 10000))
    (try
      (let [rs (.executeQuery st q)]
        (resultset-with-row-cb rs opts)
        (.close rs))
      (catch Exception e (println e))))
  (.setAutoCommit conn false))

(defn make-raw-connectoion
  "Make raw jdbc connection from aidbox hicary connecion"
  [db-spec]
  (:connection (pg.core/connection db-spec)))

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn piped-loader [box-state q transform-fn tbl]
  (println "Start")
  (let [tbl (str/lower-case (name tbl))
        _t (System/currentTimeMillis)
        out-stream (PipedOutputStream.)
        in-stream (PipedInputStream. out-stream)]

    (future
      (with-open [writer (io/writer out-stream)]
        (let [write-fn
              (fn [r]
                (let [res (transform-fn r)]
                  (.write writer (str (or (:id res) (uuid)) "\t" (:txid res) " \t" (:status res)  "\t"))
                  (json/generate-stream (:resource res) writer)
                  (.write writer  "\n")))]

          (with-open [conn* (make-raw-connectoion box-state)]
            (query-with-row-cb conn* q {:row-cb write-fn :fetch-size 1000}))))
      (.close out-stream))

    (deref
     (future
       (println "Start copy " tbl)
       (with-open [conn* (make-raw-connectoion box-state)]
         (let [copy (CopyManager. conn*) ]
           (.copyIn copy  (str "COPY " tbl " (id, txid, status, resource) FROM STDIN csv quote e'\\x01' delimiter e'\\t' ") in-stream)
           (let [total (- (System/currentTimeMillis) _t )]
             (println "Done copy " tbl " in " total "ms")
             {:status (str tbl " loaded in " total "ms")})))))))
