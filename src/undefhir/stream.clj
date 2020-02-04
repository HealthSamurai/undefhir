(ns undefhir.stream
  (:require [clojure.java.io :as io]
            [cheshire.core :as json]
            [pg.core :as pg]
            [undefhir.utils :as uu]
            [clj-pg.honey :as honey]
            [clojure.java.jdbc :as jdbc]
            [clojure.string :as str])
  (:import (java.io FileInputStream FileOutputStream PipedOutputStream PipedInputStream)
           java.util.zip.GZIPInputStream
           (org.apache.commons.io IOUtils FileUtils)
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

(defonce t (atom nil))
(defn make-raw-connectoion
  "Make raw jdbc connection"
  [db-spec]
  (:connection (pg/connection db-spec)))

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn run-reader
  "Get data stream from spec, get callbackk and out-stram as interface"
  [{:keys [ file query db-spec] :as spec} cb out-stream]
  (future
    (with-open [writer (io/writer out-stream)]
      (let [write-fn (fn [r]
                (let [res (cb r)]
                  ;; TODO: generalize or move to JUTE fn
                  (.write writer (str (or (:id res) (uuid)) "\t" (:txid res) " \t" (:status res)  "\t"))
                  (json/generate-stream (:resource res) writer)
                  (.write writer  "\n")))]
        (cond
          file
          (doseq [e (json/parsed-seq (io/reader file))]
            (write-fn e))

          query
          (with-open [conn* (make-raw-connectoion db-spec)]
            (query-with-row-cb conn* query {:row-cb write-fn :fetch-size 100}))

          :else nil )))
    (spit "/tmp/timing-read" (str "Read time: "  (- (System/currentTimeMillis) @t )  ))
    (.close out-stream)))

(defn run-writer
  "Receive data"
  [{:keys [file query db-spec] :as spec} in-stream]
  (deref
   (future
     (cond
       ;; Primary - write to pg
       query (with-open [conn* (make-raw-connectoion db-spec)]
               (let [copy (CopyManager. conn*) ]
                 (.copyIn copy  query in-stream)))

       ;; File not used on pipe as ouput by perfomance reason
       ;; but stream file output can be used for testing and debug
       file (with-open [f (FileOutputStream. file)]
              (loop [b (.read in-stream )]
                (when (> b -1)
                  (.write f b)
                  (recur (.read in-stream ) ))))

       :esle nil)

     (spit "/tmp/timing-write" (str "Write time: "  (- (System/currentTimeMillis) @t )  )))))

(defn patient-transform [item]
  {:id (:id item)
   :txid (:txid item)
   :status (:status item)
   :resource {:d (System/currentTimeMillis)
              :birthDate  (get-in item [:resource :birthDate])
              :name  (get-in item [:resource :name])
              :gender  (get-in item [:resource :gender])}})

;; -h localhost -p 5439 -U postgres testbox
(def reader-db-spec
  {:host "localhost"
   :port "5441"
   :user "postgres"
   :database "undefhir"
   :password  "postgres"})

(def writer-db-spec
  {:host "localhost"
   :port "5441"
   :user "postgres"
   :database "trytest"
   :password  "postgres"})

(defn run-pipe [{:keys [reader writer fn] :as m}]
  (if-let [write-file (:file writer)]
    (run-reader reader fn (io/file write-file))

    (let [out-stream (PipedOutputStream.)
          in-stream (PipedInputStream. out-stream)]
        (run-reader reader fn out-stream)
        (run-writer writer in-stream))))

(defn tranform-id [resource]
  resource)

(defn generate-pipes [db-in target-db]
  (let [resources (map #(-> % :id (.toLowerCase) uu/table-name)
                       (honey/query
                        (pg/connection reader-db-spec)
                        "select id from entity where resource#>>'{type}'='resource' and resource#>>'{isMeta}' is null"))]
    (mapv (fn [el]
           {:reader {:query (str "select * from " el)
                     :db-spec db-in}
            :writer {:query (str "COPY " el " (id, txid, status, resource) FROM STDIN csv quote e'\\x01' delimiter e'\\t' ")
                     :db-spec target-db}
            :fn "ids-transform"}) resources)))

(def pipe
  {:reader {:query "select * from patient"
            :db-spec reader-db-spec}
   :writer {:query "COPY patient (id, txid, status, resource) FROM STDIN csv quote e'\\x01' delimiter e'\\t' "
            :db-spec writer-db-spec}
   :fn patient-transform})

(def pipe-to-file
  {:reader {:query "select * from patient"
            :db-spec reader-db-spec}
   :writer {:file "/tmp/ptout"}
   :fn patient-transform})


(comment
  ;; PIPE

  (do
    (reset! t (System/currentTimeMillis))
    (run-pipe pipe))

  (do
    (reset! t (System/currentTimeMillis))
    (run-pipe pipe-to-file))

  (future-cancel sql-foo)
  (do
    (reset! t (System/currentTimeMillis))
    (def sql-foo
      (let [out-stream (PipedOutputStream.)
            in-stream (PipedInputStream. out-stream)]
        (run-output-stream {:query "select *  from patient"
                            :db-spec reader-db}
                           transform1 out-stream)
        #_(run-input-stream  {:query  (str "COPY patient (id, txid, status, resource) FROM STDIN csv quote e'\\x01' delimiter e'\\t' ")
                              :db-spec writer-db}
                             in-stream))))
  )
