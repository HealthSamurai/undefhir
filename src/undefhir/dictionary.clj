(ns undefhir.dictionary
  (:require [clojure.string :as str]
            [simple-progress.bar :as spb]
            [clojure.java.io :as io]
            [clj-yaml.core :as yaml]
            [cheshire.core :as json]
            [undefhir.utils :as u]
            [clojure.data.csv :as csv]
            [clj-pg.honey :as pg]))

(defn file-dictionary [file]
  (str/split-lines (slurp file)))

(defn yaml-dictionary [file]
  (yaml/parse-string (slurp file)))

(defn csv-data->maps [csv-data]
  (map zipmap
       (->> (first csv-data)
            ;;(map keyword)
            repeat)
	  (rest csv-data)))

(defn csv-dictionary [file {:keys [headers] :as format}]
  (with-open [reader (io/reader file)]
    (doall
     (if headers
       (csv-data->maps (csv/read-csv reader))
       (csv/read-csv reader)))))

(defn json-dictionary [file]
  (json/parse-string (slurp file)))

(defn build-in-dictionary [resource-name]
  (str/split-lines (slurp (io/resource (str "dictionary/" resource-name)))))

(defn build-query [[statement & args] cache]
  (reduce
   (fn [acc v]
     (conj acc (get cache v)))
   [statement] args))

(defn query-dictionary [db query cache]
  (let [query (cond (string? query) query
                    (vector? query) (build-query query cache)
                    :else (throw (Exception. (str "Can`t create query from: " query))))]
    (vec (pg/query db query))))

(defn load-dictionary [db {:keys [csv json yaml file query literal build-in] f :format :as d} & [dictionary-cache]]
  (try
    (cond
      literal   literal
      build-in  (build-in-dictionary build-in)
      file      (file-dictionary file)
      csv       (csv-dictionary csv f)
      json      (json-dictionary json)
      yaml      (yaml-dictionary yaml)
      query     (query-dictionary db query dictionary-cache)
      :else     (throw (Exception. (str "Undefined dictionary type: " (keys d) ". Expected 'yaml', 'build-in', 'file', 'literal' or 'query'"))))
    (catch Exception e
      (throw (Exception. (str "Can`t load dictionary: " (.getMessage e)))))))

(defn load-dictionaries [db dict & [cb]]
  (reduce
   (fn [acc {n :name :as d}]
     (let [acc (assoc acc  (name n) (load-dictionary db d acc))]
       (when cb (cb)) ;; For ui progress bar
       acc))
   {}
   dict))

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
    d :dictionary output-format :output :as opts}]
  (if output-format
    (u/formatter (get (load-dictionaries db (:dictionary manifest)) d) output-format)

    (let [dbg (get (ui-load-dictionaries db (:dictionary manifest)) d)
          dictionaty-source (first (filter #(= d (:name %))  (:dictionary manifest)))]
      (println "Debug dictionary: " d)
      (println "Source: " dictionaty-source)
      (println "Result: " )
      (println dbg))))
