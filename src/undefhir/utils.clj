(ns undefhir.utils
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [cheshire.core :as json]
            [clojure.data.csv :as csv]
            [clj-yaml.core :as yaml]
            [clj-pg.honey :as pg]))


(defn prepare-for-csv [e]
  (if (map? (first e))
    e
    (mapv #(conj [] %) e)))

(defn formatter [e f]
  (case f
    "json" (json/generate-stream e *out*)
    "yaml" (println (yaml/generate-string e))
    "csv"  (with-open [writer (io/writer *out*)]
             (csv/write-csv writer (prepare-for-csv e)))
    (throw (Exception. (str "Unsupported output format: " f)))))

(def term-names (->> (str (System/getProperty "user.dir") "/resources/fhir-term")
                     clojure.java.io/file
                     file-seq
                     rest
                     (map (fn [x]
                            (let [n (.getName x)]
                              {:name (str/replace n #"\.yaml" "")
                               :resource (str "fhir-term/" (.getName x))})))))

(defn table-name [resource-type]
  (str "\"" (str/replace (str/lower-case (name resource-type)) #"\." "__")  "\""))

(defn hx-table-name [resource-type]
  (str "\"" (str/replace (str/lower-case (name resource-type)) #"\." "__")   "_history\""))

(defn tmp-table-name [resource-type]
  (str "\"" "tmp_" (str/replace (str/lower-case (name resource-type)) #"\." "__")   "\""))

(defn rand-str [len]
  (.toLowerCase (apply str (take len (repeatedly #(char (+ (rand 26) 65)))))))

(defn rand-nmb [len]
  (apply str (take len (repeatedly #(char (+ (rand 10) 48))))))
