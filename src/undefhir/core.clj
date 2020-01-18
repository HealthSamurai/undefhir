(ns undefhir.core
  (:require [cli-matic.core :as cli]
            [undefhir.dictionary :as dictionary])
  (:gen-class))

(defn clinit
  "Init db connection and prepare args"
  [args]
  (-> args
      (assoc :manifest (clojure.walk/keywordize-keys (:file args)))
      ;;(assoc :db/connection db-conn)
      ))

(defn debug [{d :dictionary :as arg}]
  (when d
    (dictionary/debug (clinit arg))))


(def configuration
  {:app         {:command     "UndeFHIR"
                 :description "A command-line tool for anonimify and minify Aidbox FHIR database."
                 :version     "0.0.1"}

   :global-opts [{:option  "file" :short "f" :as  "undefhir file path" :type :yamlfile :default "./undefhir.yaml"}]

   :commands    [{:command     "debug"
                  :description "debug dictionary, template ..."
                  :opts [{:option "dictionary" :short "d"
                          :as "debug specified dictionary" :type :string}
                         {:option "output" :short "o"
                          :as "just return dictionary entry in the given output format json|yaml|csv"  :type :string}]
                  :runs        debug}]
   })

(defn -main [& arg]
  (cli/run-cmd arg configuration))
