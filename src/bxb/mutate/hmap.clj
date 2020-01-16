(ns bxb.mutate.hmap
  (:require [bxb.misc :as misc]
            [clojure.data :refer [diff]]
            [bxb.misc :refer [dissoc-in single-elem? assoc-in-vec]]))

(defn match? [m1 m2]
  (= m1 (last (diff m1 m2))))

(defn find-match [pattern s]
  (cond
    (map? s)
    (recur pattern [s])

    (sequential? s)
    (let [results
          (keep-indexed
           (fn [i m] (when (match? pattern m) i))
           s)]
      (cond
        (empty? results)
        (count s)

        (single-elem? results)
        (first results)

        :else
        (throw (Exception. "there is more than one match in vector"))))

    :else
    0))

(defn resolve-path [path data-source]
  (mapv (fn [pt] (pt data-source))
        path))

(defn const-fn [constant]
  (constantly constant))

(defn get-fn [path]
  (fn [src dest] (get-in src (resolve-path path src))))

(defn search-fn [path value]
  (fn [src]
    (let [get-value (get-fn path)]
      (find-match value (get-value src src)))))

(let [data-source {:a [{:f 2, :v 1} {:f 1, :v 2} {:f 0, :v 3}]}]
  ((get-fn [(const-fn :a)
            (search-fn (map const-fn [:a]) {:f 1})])
   data-source data-source))

(defn map-fn [src-path dest-path mutations]
  (fn [src dest]
    (let [dest-p (resolve-path dest-path dest)
          src-p  (resolve-path src-path  src)
          mut-fn (partial misc/mutate mutations)]
      (if-let [data (get-in src src-p)]
        (-> dest
            (assoc-in dest-p (mapv mut-fn data))
            (cond->
                (not= src-p dest-p)
              (dissoc-in src-p)))
        dest))))

(defn assoc-fn [path get-value]
  (fn [src dest]
    (let [p (resolve-path path dest)]
      (if (not-any? nil? p)
        (assoc-in-vec dest p (get-value src dest))
        dest))))

(defn dissoc-fn
  ([path]
   (fn [src dest]
     (let [p (resolve-path path dest)]
       (if (not-any? nil? p)
         (dissoc-in dest p)
         dest))))
  ([path value] ; TODO: match dissocing value with provided value
   (dissoc-fn path)))

(def fns
  {:const-fn  const-fn
   :search-fn search-fn
   :map-fn    map-fn
   :get-fn    get-fn
   :assoc-fn  assoc-fn
   :dissoc-fn dissoc-fn})
