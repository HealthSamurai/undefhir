(ns undefhir.dictionary
  (:require [clojure.string :as str]
            [simple-progress.bar :as spb]
            [clojure.java.io :as io]
            [clj-yaml.core :as yaml]
            [cheshire.core :as json]
            [clojure.data.csv :as csv]
            [clj-pg.honey :as pg]))

(defn file-dictionary [file]
  (str/split-lines (slurp file)))

(defn build-query [[statement & args] cache]
  (reduce
   (fn [acc v]
     (conj acc ((keyword v) cache)))
   [statement] args))

(defn query-dictionary [db query cache]
  (let [query (cond (string? query) query
                    (vector? query) (build-query query cache)
                    :else (throw (Exception. (str "Can`t create query from: " query))))]
    (mapcat vals (pg/query db query))))

(defn load-dictionary [db {:keys [file query literal] :as d} & [ dictionary-cache]]
  (try 
    (cond
      file    (file-dictionary file)
      query   (query-dictionary db query dictionary-cache)
      literal literal
      :else   (throw (Exception. (str "Undefined dictionary type: " (keys d) ". Expected 'file', 'literal' or 'query'"))))
    (catch Exception e
      (throw (Exception. (str "Can`t load dictionary: " (.getMessage e)))))))

(defn load-dictionaries [db dict & [cb]]
  (reduce
   (fn [acc {n :name :as d}]
     (let [acc (assoc acc (keyword n) (load-dictionary db d acc))]
       (when cb (cb)) ;; For ui progress bar
       acc))
   {}
   dict))

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

;; UI
(defn ui-load-dictionaries [db dict]
  (println "Load dictionaries:")
  (let [bar (spb/mk-progress-bar (count dict))
        result (load-dictionaries db dict bar)]
    (println) (println)
    result))

(defn debug
  [{manifest :manifest
    db :db/connection
    d :dictionary f :output :as opts}]
  (if f
    (formatter ((keyword d) (load-dictionaries db (:dictionary manifest))) f)

    (let [dbg ((keyword d) (ui-load-dictionaries db (:dictionary manifest)))
          dictionaty-source (first (filter #(= d (:name %))  (:dictionary manifest)))]
      (println "Debug dictionary: " d)
      (println "Source: " dictionaty-source)
      (println "Result: " )
      (println dbg))))
