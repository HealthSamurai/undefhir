(ns undefhir.utils
  (:require [clojure.string :as str]
            [clj-pg.honey :as pg]))

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
