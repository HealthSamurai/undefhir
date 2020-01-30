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

(defn dispatch-format [file]
  (let [format (re-find #"\w+$" file)]
    (cond
      (= format "json")
      (json-dictionary file)
      (= format "csv")
      (csv-dictionary file)
      (= format "yaml")
      (yaml-dictionary file)
      (= format "txt")
      (file-dictionary file)
      :else
      (when-let [cnt (file-dictionary file)]
        cnt))))

(defn load-dictionary [db {:keys [file resource query literal build-in] f :format :as d} & [dictionary-cache]]
  (try
    (cond
      literal   literal
      build-in  (build-in-dictionary build-in)
      resource  (yaml-dictionary (io/resource resource))
      file      (dispatch-format file)
      query     (query-dictionary db query dictionary-cache)
      :else     (throw (Exception. (str "Undefined dictionary type: " (keys d) ". Expected 'yaml', 'build-in', 'file', 'literal' or 'query'"))))
    (catch Exception e
      (throw (Exception. (str "Can`t load dictionary: " (.getMessage e)))))))

(defn load-dictionaries [db {:keys [terminology dictionary]} & [cb]]
  (reduce
   (fn [acc {n :name :as d}]
     (let [acc (assoc acc  (name n) (load-dictionary db d acc))]
       (when cb (cb)) ;; For ui progress bar
       acc))
   {}
   (if terminology
     (concat dictionary u/term-names)
     dictionary)))

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
    (u/formatter (get (load-dictionaries db manifest) d) output-format)

    (let [dbg (get (ui-load-dictionaries db manifest) d)
          dictionaty-source (first (filter #(= d (:name %))  (:dictionary manifest)))]
      (println "Debug dictionary: " d)
      (println "Source: " dictionaty-source)
      (println "Result: " )
      (println dbg))))
