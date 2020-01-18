(ns undefhir.core
  (:require [cli-matic.core :as cli])
  (:gen-class))

(def configuration
  {:app         {:command     "UndeFHIR"
                 :description "A command-line tool for anonimify and minify Aidbox FHIR database."
                 :version     "0.0.1"}})

(defn -main [& arg]
  (cli/run-cmd arg configuration))
