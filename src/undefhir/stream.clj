(ns undefhir.stream
  (:require [clojure.java.io :as io]
            [cheshire.core :as json]
            [clojure.string :as str])
  (:import (java.io FileInputStream FileOutputStream PipedOutputStream PipedInputStream)
           java.util.zip.GZIPInputStream
           [java.sql BatchUpdateException DriverManager
            PreparedStatement ResultSet SQLException Statement Types]
           org.postgresql.PGConnection
           org.postgresql.copy.CopyManager))

(defn run-output-stream
  "Get data stream from spec, get callbackk and out-stram as interface"
  [{:keys [ file] :as spec} cb out-stream]
  (future
    (with-open [writer (io/writer out-stream)]
      (let [write-fn (fn [e]
                       (json/generate-stream (cb e)  writer)
                       (.write writer  "\n"))]
        (doseq [e (json/parsed-seq (io/reader file))]
          (write-fn e))))
    (.close out-stream)))

(defn run-input-stream
  "Receive data"
  [{:keys [file] :as spec} in-stream]
  (let [f (FileOutputStream. file)]
    (deref
     (future
       (loop [b (.read in-stream)]
         (when (> b -1)
           (.write f b)
           (recur (.read in-stream))))))))

(defn transform1 [item]
  {:name (get item "name")})

(defn transform2 [item]
  {:gender (get item "gender")})

;; TODO:
;; reader-stream
;; writer-stream

(comment
  ;; PIPE
  (future-cancel foo)
  (do
    (def foo1 (future
                (let [out-stream (PipedOutputStream.)
                      in-stream (PipedInputStream. out-stream)]
                  (run-output-stream {:file "/tmp/patient.json"} transform1 out-stream)
                  (run-input-stream  {:file "test/resources/out.test11"} in-stream))))

    (def foo2 (future
                (let [out-stream (PipedOutputStream.)
                      in-stream (PipedInputStream. out-stream)]
                  (run-output-stream {:file "/tmp/patient.json"} transform2 out-stream)
                  (run-input-stream  {:file "test/resources/out.test22"} in-stream)))))


  (let [f (FileOutputStream. "test/resources/out.test")]
    (.write f  101)
    )

  (def s (json/parsed-seq (io/reader "test/resources/stream_test.json")))

  )
