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
  [stream-spec cb out-stream]
  (future
    (with-open [writer (io/writer out-stream)]
      (let [write-fn (fn [e]
                       (let [res {:foo "marat"
                                  :d (System/currentTimeMillis)
                                  :n (keys e)}]
                         (json/generate-stream res  writer)
                         (.write writer  "\n")))]
        (doall (map write-fn (json/parsed-seq (io/reader "test/resources/stream_test.json"))))))
    (.close out-stream)))

(defn run-input-stream
  "Receive data"
  [spec in-stream]
  (let [f (FileOutputStream. "test/resources/out.test22")]
   (deref (future
            (loop [b (.read in-stream)]
              (when (> b -1)
                (.write f b)
                (recur (.read in-stream))))))))

(comment
  ;; PIPE
  (def foo (future
             (let [out-stream (PipedOutputStream.)
                   in-stream (PipedInputStream. out-stream)]
               (run-output-stream {} {} out-stream)
               (run-input-stream  {} in-stream))))

  (let [f (FileOutputStream. "test/resources/out.test")]
    (.write f  101)
    )

  (def s (json/parsed-seq (io/reader "test/resources/stream_test.json")))

  )
