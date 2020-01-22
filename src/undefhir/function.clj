(ns undefhir.function
  (:require [jute.core :as jute]
            [clojure.data.generators :as gen]
            [simple-progress.bar :as spb]
            [undefhir.utils :as u]))

(defn rand-birthDate []
  (.format
   (java.text.SimpleDateFormat. "yyyy-MM-dd")
   (gen/date #inst "1990-01-16T00:00:00.000-00:00")))

(defn rand-email []
  (str (u/rand-str 7) "@" (u/rand-str 4) "." (rand-nth ["ru" "com" "net" "io"])))

(defn rand-phone []
  (u/rand-nmb 10))

(def root-fns
  "Preset of build-in functions"
  {:randBirthDate rand-birthDate
   :randEmail rand-email
   :randPhone rand-phone})


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

(defn ui-load-fns [fns]
  (println "Load functions:")
  (let [bar (spb/mk-progress-bar (count fns))
        result (load-fns fns bar)]
    (println) (println)
    result))

(defn debug
  [{manifest :manifest
    input-file :input-file i :input output-format :output f :function :as opts}]
  (if output-format
    (let [func ((keyword f) (load-fns (:fns manifest)))
          res (if input-file
                (map (partial apply func) input-file)
                (apply func i))]
      (u/formatter res output-format))

    (let [func ((keyword f) (ui-load-fns (:fns manifest)))
          res (if input-file
                (map (partial apply func) input-file)
                (apply func i))]
      (println "Debug: " f)
      ;; (println "Input params: ")
      ;; (println i "\n")
      (println "Result: ")
      (println res))))
