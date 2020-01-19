(ns undefhir.template
  (:require [jute.core :as jute]))


(defn compile-template [{:keys [literal file build-in] :as template-spec}]
  (jute/compile literal))

