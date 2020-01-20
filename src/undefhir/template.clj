(ns undefhir.template
  (:require [jute.core :as jute]
            [test-db :as tdb]))

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

(defn compile-template [{:keys [literal file build-in] :as template-spec}]
  (jute/compile literal))

