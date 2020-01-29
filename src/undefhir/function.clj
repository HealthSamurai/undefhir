(ns undefhir.function
  (:require [jute.core :as jute]
            [clojure.data.generators :as gen]
            [simple-progress.bar :as spb]
            [clojure.string :as str]
            [cheshire.core :as json]
            [clj-yaml.core :as yaml]
            [undefhir.dictionary :as dictionary]
            [undefhir.utils :as u]
            [clojure.java.io :as io]))

(defn rand-birthDate []
  (.format
   (java.text.SimpleDateFormat. "yyyy-MM-dd")
   (gen/date #inst "1990-01-16T00:00:00.000-00:00")))

(defn rand-email []
  (str (u/rand-str 7) "@" (u/rand-str 4) "." (rand-nth ["ru" "com" "net" "io"])))

(defn rand-phone []
  (u/rand-nmb 10))

(defn dict [db {d :dictionary :as manifest}]
  (let [dictionaries (dictionary/load-dictionaries db d)]
    (fn [dict-name]
      (get dictionaries dict-name))))

(defn doRand [v strPath]
  (let [tp (get-in v [:type :id])]
    (cond
      (= "code" tp)
      (str "$ rand" tp "(\"" (get-in v [:valueSet :id]) "\", "  (str/join "." strPath) ")")
      :else
      (str "$ rand" tp "(" (str/join "." strPath) ")"))))

(defn tree2fhir [tree & [path]]
  (let [path (or path [])]
    (reduce-kv
     (fn [acc k v]
       (let [path (conj path k)
             strPath (map name path)]
         (assoc acc k (if (:attr v)
                        (if (:isCollection v)
                          {:$map (str "$ " (str/join "." strPath))
                           :$as "e"
                           :$body (tree2fhir v ["e"]) }
                          (tree2fhir v path))
                        (if (:isCollection v)
                          {:$map (str "$ " (str/join "." strPath))
                           :$as "e"
                           :$body (doRand v ["e"])}

                          (doRand v strPath))))))
     {}
     (:attr tree))))

(def set-of-fns
  "Preset of rand functions defined via just template"
  [{:name :randHumanName    :resource "HumanName.yaml"}
   {:name :randAddress      :resource "Address.yaml"}
   {:name :randContactPoint :resource "ContactPoint.yaml"}])

(defn load-from-file [{:keys [file resource] :as f}]
  (when (or file resource)
    (let [source (if file file (io/resource resource))]
                            (-> source slurp yaml/parse-string))))

(def root-fns
  "Preset of build-in functions"
  {:randBirthDate rand-birthDate
   :randEmail     rand-email
   :randNumber    u/rand-nmb
   :toJson        json/generate-string
   :toYaml        yaml/generate-string
   :randPhone     rand-phone
   :cljtreefhir   tree2fhir
   :dict          dict})

(defn compile-fn [{:keys [$fn $body file] :as f} & [cache]]
  (let [cnt (load-from-file f) ;;TODO
        body (if cnt
               (jute/compile (:$body cnt))
               (jute/compile $body))
        $fn (if cnt
              (:$fn cnt)
              $fn)]
    (fn [& args]
      (body (merge {:fns (merge root-fns cache)}
                   {:assocIn #(assoc-in %1 (map keyword %2) %3)
                    :first first
                    :spit spit
                    :second second
                    :toArray vector
                    :split #(clojure.string/split %1 (re-pattern %2))
                    :get get
                    :last last
                    :rest rest}
                   (zipmap (mapv keyword $fn) args))))))

(defn load-fns [{:keys [fns] :as manifest} & [cb]]
  (reduce
   (fn [acc {k :name :as v}]
     (let [acc (assoc acc (keyword k) (compile-fn v acc))]
       (when cb (cb)) ;; only for ui progressbar tick
       acc))
   {:dict (dict (:db/connection manifest) manifest)} ;;TODO
   (concat set-of-fns fns)))

(defn ui-load-fns [manifest]
  (println "Load functions:")
  (let [bar (spb/mk-progress-bar (count (:fns manifest)))
        result (load-fns manifest bar)]
    (println) (println)
    result))

(defn debug
  [{manifest :manifest
    db :db/connection
    input-file :input-file i :input output-format :output f :function :as opts}]
  (if output-format
    (let [func ((keyword f) (load-fns  (assoc manifest :db/connection db))) ;; TODO: fix
          res (if input-file
                (map (partial apply func) input-file)
                (apply func i))]
      (u/formatter res output-format))

    (let [func ((keyword f) (ui-load-fns (assoc manifest :db/connection db)))  ;; TODO: fix
          res (if input-file
                (map (partial apply func) input-file)
                (apply func i))]
      (println "Debug: " f)
      (println "Result: ")
      (println res))))
