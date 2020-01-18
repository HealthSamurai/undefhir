(ns undefhir.core
  (:require [cli-matic.core :as cli]
            [undefhir.utils :as utils])
  (:gen-class))

(defn add_numbers [{:keys [file] :as p}]
  (let [d [{:name "file"
            :file "test/resources/loader_test.txt"}
           {:name "oneof"
            :literal [1 5]}]]

    (utils/load-dictionaries nil d)))

(def configuration
  {:app         {:command     "UndeFHIR"
                 :description "A command-line tool for anonimify and minify Aidbox FHIR database."
                 :version     "0.0.1"}

   :global-opts [{:option  "file" :short "f" :as  "undefhir file path" :type :string :default "./undefhir.yaml"}]

   :commands    [{:command     "load-dictionaries"
                  :description "Load dictionaries from manifest"
                  :runs        add_numbers}]
   })

(defn -main [& arg]
  (cli/run-cmd arg configuration))
