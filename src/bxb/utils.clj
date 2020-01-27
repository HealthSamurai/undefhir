(ns bxb.utils
  (:require [clojure.string :as str]
            [re-rand.core :as re-rand]))

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

(defn hash-id [s]
  (re-rand/re-hash s))
