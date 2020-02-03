(ns ui.dictionary.model
  (:require [re-frame.core :as rf]))

(def index ::index)

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase params]]
   {}))

(rf/reg-sub
 index
 (fn [db [pid]]
   {:dictionary
    [{:name "AdministrativeGender" :resource "AdministrativeGender.yam"}
     {:name "v2 Marital Status" :resource "v2 Marital Status.yaml"}
     {:name "Observation" :resource "Observation.yaml"}
     {:name "QuestionnaireItemOperator" :resource "QuestionnaireItemOperator.yaml"}
     {:name "MedicationStatementStatus" :resource "MedicationStatementStatus.yaml"}
     ]}))
