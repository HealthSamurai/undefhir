(ns undefhir.utils
  (:require [clojure.string :as str]))

(defn file-dictionary [file]
  (str/split-lines (slurp file)))

(defn query-dictionary [query]
  ["foo"])

(defn load-dictionary [{:keys [file query] :as d}]
  (try 
    (cond
      file  (file-dictionary file)
      query (query-dictionary query)
      :else  (throw (Exception. (str "Undefined dictionary type: " (keys d) ". Expected 'file' or 'query'"))))
    (catch Exception e
      (throw (Exception. (str "Can`t load dictionary: " (.getMessage e)))))))










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
