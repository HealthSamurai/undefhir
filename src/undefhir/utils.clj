(ns undefhir.utils
  (:require [clojure.string :as str]
            [simple-progress.bar :as spb]
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
      (println e)
      (throw (Exception. (str "Can`t load dictionary: " (.getMessage e)))))))


(defn load-dictionaries [db dict]
  (let [bar (spb/mk-progress-bar (count dict))]
    (reduce
     (fn [acc {n :name :as d}]
       (bar)
       (assoc acc (keyword n) (load-dictionary db d acc)))
     {} dict)))


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
