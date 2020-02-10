(ns ui.explorer.model
  (:require [re-frame.core :as rf]
            [ui.zframes.editor.model :as editor]))

(def index ::index)

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase params]]
   {:xhr/fetch {:uri "/api/v1/workspace"
                :req-id pid
                :success {:event ::save-workspace}}}))

(rf/reg-event-fx
 ::save-workspace
 (fn [{db :db} [_ {data :data}]]
   {:db (assoc db ::explorer data)}))

(rf/reg-event-fx
 ::collapse
 (fn [{db :db} [_ path]]
   {:db (update-in db (cons ::explorer path)
                   (fn [el] (update el :collapse not)))}))

(rf/reg-sub
 ::explorer
 (fn [db _]
   (::explorer db)))

(rf/reg-sub
 index
 (fn [db _]
   {}))

(rf/reg-event-fx
 ::open-file
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
