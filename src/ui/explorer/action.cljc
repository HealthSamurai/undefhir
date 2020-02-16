(ns ui.explorer.action
  (:require [ui.explorer.model :as model]
            [re-frame.core :as rf]
            [ui.styles :as styles]
            [clojure.string :as str]))

(defn context-menu [path node]
  [:div.actions
   {:on-click #(println "111111111111111")}
   [:i.fas.fas.fa-ellipsis-h]
   [:div.ctx-menu
    [:div.itm {:on-click #(rf/dispatch [::new-file path])} "Nev File"]
    [:div.itm "Nev Folder"]
    [:div.itm "Delete"]]])

(rf/reg-event-fx
 ::new-file
 (fn [_ [_ dir]]
   {:dispatch
    [:ui.zframes.modal/modal
     {:title "New file"
      :body [:div
             [:div.mb-3.mt-2
              [:i.fas.fa-folder] [:span.ml-2 (str (name dir) "/")]]
             [:input.u-input {:placeholder "File name"
                              :type "text"
                              :name "file"
                              :auto-focus "autofocus"} ]
             [:div.bottom.flex
              [:div.grow]
              [:div.btn.btn-primary "OK"]]]}]}))
