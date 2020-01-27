(ns undefhir.core
  (:require [cli-matic.core :as cli]
            [pg.core :as pg]
            [clj-yaml.core :as yaml]
            [undefhir.template :as template]
            [undefhir.function :as function]
            [undefhir.dictionary :as dictionary])
  (:gen-class))

(defn clinit
  "Init db connection and prepare args"
  [args]
  (-> args
      (assoc :manifest (clojure.walk/keywordize-keys (if (string? (:file args))
                                                       (-> (:file args) slurp yaml/parse-string)
                                                       (:file args))))
      (assoc :db/connection (pg/connection (pg/db-spec-from-env)))))

(defn debug [{d :dictionary f :function :as arg}]
  (try
    (cond-> (clinit arg)
      d dictionary/debug
      f function/debug)
    (catch Exception e (println (.getMessage e)))))

(def configuration
  {:app         {:command     "undefhir"
                 :description "A command-line tool for anonimify and minify Aidbox FHIR database."
                 :version     "0.0.1"}

   :global-opts [{:option "file" :short "f" :as  "undefhir file path" :type :yamlfile :default "./undefhir.yaml"}]

   :commands    [{:command     "debug"
                  :description "debug dictionary and functions"
                  :opts [{:option "dictionary" :short "d" :as "debug specified dictionary" :type :string}
                         {:option "output" :short "o" :as "format of output json|yaml|csv"  :type :string}
                         {:option "function" :short "f" :as "function name" :type :string}
                         {:option "input" :short "i" :as "input argument" :type :string :multiple true}
                         {:option "input-file"  :short "I" :as "input file argument" :type :yamlfile}]
                  :runs  debug}]})

(defn -main [& arg]
  (cli/run-cmd arg configuration))
