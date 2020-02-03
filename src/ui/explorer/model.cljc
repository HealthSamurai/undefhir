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
 :<- [:pages/data index]
 :<- [:xhr/response index]
 (fn [[page {dirs :data }] [pid]]
   {:dir dirs}))

(rf/reg-event-fx
 ::open-file 
 (fn [{db :db} [_ file]]
   {:xhr/fetch {:uri "/workspace/file"
                :params  {:file file}
                :req-id ::file}}))
