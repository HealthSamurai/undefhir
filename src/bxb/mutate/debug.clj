(ns bxb.mutate.debug)

(defn debug-fn [k]
  (partial list k))

(def fns
  {:const-fn  (debug-fn :const-fn)
   :search-fn (debug-fn :search-fn)
   :map-fn    (debug-fn :map-fn)
   :get-fn    (debug-fn :get-fn)
   :assoc-fn  (debug-fn :assoc-fn)
   :dissoc-fn (debug-fn :dissoc-fn)})
