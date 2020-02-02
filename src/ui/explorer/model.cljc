(ns ui.explorer.model
  (:require [re-frame.core :as rf]))

(def index ::index)

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase params]]
   {:xhr/fetch {:uri "/workspace"
                :req-id pid}}))

(rf/reg-sub
 index
 (fn [db [pid]]
   {:directory
    [{:name "core" :resource "AdministrativeGender.yam"}
     {:name "fns" :resource "v2 Marital Status.yaml"}
     {:name "streams" :resource "Observation.yaml"}
     ]}))
