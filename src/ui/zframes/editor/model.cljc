(ns ui.zframes.editor.model
  (:require [re-frame.core :as rf]
            #?(:cljs [jslib.monaco :as monaco])
            #?(:cljs [jslib.monaco.yaml ])
            ))

;; TODO: write great monaco externs
(def monaco-editor
  #?(:clj  {:fake "monaco class"} 
     :cljs (.-editor js/monaco)))

(rf/reg-event-db
 ::init
 ;; Just clear editor state for testing
 (fn [db _]
   (assoc db ::editor [])))

(rf/reg-event-db
 ::set-editor
 ;; Store editor state
 (fn [db [_ editor]]
   (assoc-in db [::editor :editor] editor)))


(rf/reg-event-db
 ::create-model
 ;; Store editor state
 (fn [db [_ id {:keys [value language] :as model}]]
   ;; Create monaco editor model
   (let [model #?(:cljs (.createModel monaco-editor value language)
                  :clj model)]
     (assoc-in db [::editor :model id] model))))

(rf/reg-fx
 ::set-model
 (fn [{:keys [editor model]}]
   #?(:cljs (.setModel editor model)
      :clj model)))

(rf/reg-event-fx
 ::set-model
 (fn [{db :db} [_ id]]
   (let [editor (get-in db [::editor :editor])
         model  (get-in db [::editor :model id])]
     {::set-model {:editor editor
                   :model model}})))


(rf/reg-sub
 ::model
 (fn [db [_ file-name]]
   (get-in db [::editor :model file-name])))

(rf/reg-sub
 ::editor
 (fn [db [_ file-name]]
   (get-in db [::editor :editor])))
