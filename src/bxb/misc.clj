(ns bxb.misc
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.edn :as edn]))

(defn mutate [mutations data]
  (reduce #(%2 data %1)
          data
          mutations))

(defn hsql-subs [[sql & args :as a]]
  (reduce (fn [s arg] (str/replace-first s #"\?"
                                        (cond
                                          (string? arg) (str \' arg \')
                                          :else (str arg))))
   sql
   args))

(defn assoc-in-vec [m [k & ks :as keys] v]
  (cond
    (or (nil? v)
        (empty? keys))
    m

    (and (nil? m)
         (integer? k)
         (zero? k))
    (if ks
      [(assoc-in-vec (get m k) ks v)]
      [v])

    (or (map? m)
        (sequential? m)
        (and (nil? m) (keyword? k)))
    (if ks
      (assoc m k (assoc-in-vec (get m k) ks v))
      (assoc m k v))

    (and (identity m)
         (not (or (sequential? m)
                  (map? m))))
    (recur nil keys v)

    :else
    m))

(defn vec-remove
  "remove elem in coll
   Credit: https://stackoverflow.com/a/18319708/6179231"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defn single-elem? [s]
  (and (seq s)
       (empty? (rest s))))

(defn key? [x]
  (or (keyword? x)
      (integer? x)
      (string?  x)))

(defmacro p [data]
  `(do ;(println (str ~(resolve data) \:))
     (clojure.pprint/pprint ~data)
     ~data))

(defn dissocv [m & ks]
  (cond
    (map? m)
    (apply dissoc m ks)

    (sequential? m)
    (reduce vec-remove (vec m) ks)

    :else m))

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure.
  Credit: https://stackoverflow.com/a/14488425/6179231"
  ([m [k & ks :as keys]]
   (if ks
     (if-let [nextmap (get m k)]
       (let [newmap (dissoc-in nextmap ks)]
         (if (seq newmap)
           (assoc m k newmap)
           (dissocv m k)))
       m)
     (dissocv m k))))

(defn load-edn
  "Load edn from an io/reader source (filename or io/resource).
  Credit: https://clojuredocs.org/clojure.edn/read#example-5a68f384e4b09621d9f53a79"
  [source]
  (try
    (with-open [r (io/reader source)]
      (edn/read (java.io.PushbackReader. r)))

    (catch java.io.IOException e
      (printf "Couldn't open '%s': %s\n" source (.getMessage e)))
    (catch RuntimeException e
      (printf "Error parsing edn file '%s': %s\n" source (.getMessage e)))))

(defn keepcat
  "mapcat : map :: keepcat : keep"
  ([] (comp (keep identity) cat))
  ([f] (comp (keep f) cat))
  ([f & colls] (apply concat (apply keep f colls))))
