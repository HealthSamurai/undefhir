(ns ui.explorer.model
  (:require [re-frame.core :as rf]
            [ui.zframes.editor.model :as editor]))

(def index ::index)

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase params]]
   {:xhr/fetch {:uri "/api/v1/workspace"
                :req-id pid}}))

(rf/reg-sub
 index
 :<- [:pages/data index]
 :<- [:xhr/response index]
 (fn [[page {dirs :data }] [pid]]
   {:dir dirs}))

(rf/reg-event-fx
 ::open-file 
 ;; TODO: check if file already open
 (fn [{db :db} [_ file]]
   {:xhr/fetch {:uri "/api/v1/workspace/file"
                :params  {:file file}
                :req-id   ::file
                :success  {:event ::create-editor-model
                           :params {:file file}}}}))


(rf/reg-event-fx
 ::create-editor-model
 (fn [{db :db} [_ {{value :file-content} :data {{{file :file} :params} :success} :request :as resp}]]
   {:dispatch-n [[::editor/create-model file {:value value :language "yaml"}]
                 [::editor/set-model file]]}))
