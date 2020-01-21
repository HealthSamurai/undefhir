(ns undefhir.template
  (:require [jute.core :as jute]
            [clj-yaml.core :as yaml]
            [simple-progress.bar :as spb]
            [cheshire.core :as json]))

(def root-fns
  {:randFoo #(str "foo from rand foo")})

(defn compile-fn [{:keys [$fn $body] :as f}]
  (let [body (jute/compile $body)]
    (fn [& args]
      (body (merge root-fns (zipmap (mapv keyword $fn) args))))))

(defn load-fns [fns & [cb]]
  (reduce-kv
   (fn [acc k v]
     (let [acc (assoc acc (keyword k) (compile-fn v))]
       (when cb (cb))
       acc))
   {}
   fns))

(defn formatter [e f]
  (case f
    "json" (json/generate-stream e *out*)
    "yaml" (println (yaml/generate-string e))
    (throw (Exception. (str "Unsupported output format: " f)))))

(defn ui-load-fns [fns]
  (println "Load functions:")
  (let [bar (spb/mk-progress-bar (count fns))
        result (load-fns fns bar)]
    (println) (println)
    result))

(defn debug
  [{manifest :manifest
    i :input o :output f :function :as opts}]
  (if o
    (let [func (get (load-fns (:fns manifest)) (keyword f))
          res (if i
                (apply func i)
                (func))]
      (formatter res o))

    (let [func (get (ui-load-fns (:fns manifest)) (keyword f))
          res (if i
                (apply func i)
                (func))]
      (println "Debug: " f)
      (println "Input params: ")
      (println i "\n")
      (println "Result: ")
      (println res))))
