(ns undefhir.template
  (:require [jute.core :as jute]))

(def root-fns
  {:randFoo #(str "foo from rand foo")})

(defn compile-fn [{:keys [$fn $body] :as f}]
  (let [body (jute/compile $body)]
    (fn [& args]
      (body (merge root-fns (zipmap (mapv keyword $fn) args))))))


(defn load-fns [fns]
  (reduce-kv
   (fn [acc k v]
     (assoc acc (keyword k) (compile-fn v)))
   {}
   fns))

(defn debug
  [{manifest :manifest
    i :input o :output f :function :as opts}]
  (let [fns-cache (load-fns (:fns manifest))
        fn-dbg ((keyword f) fns-cache)]
    (println "Debug: " f)
    (println "Input params: " i)
    (println "Result: " (if i
                          (apply fn-dbg i)
                          (fn-dbg)))))
