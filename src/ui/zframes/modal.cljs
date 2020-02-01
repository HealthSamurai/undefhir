(ns zframes.modal
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
 :modal
 (fn [db [_ modal]]
   (assoc db :modal modal)))

(rf/reg-sub
 :modal
 (fn [db _]
   (:modal db)))

(defn modal []
  (let [modal* (rf/subscribe [:modal])]
    (fn []
      [:div.zmodal
       (when-let [modal @modal*]
         [:div {:style {:position "fixed"
                        :height "100%"
                        :top 0
                        :width "100%"
                        :background-color "rgba(0, 0, 0, 0.5)"
                        :z-index "99"}
                :on-click (when-not (:persistent modal) #(rf/dispatch [:modal nil]))}
          [:div#exampleModalCenter.modal-fade {:style {:transition "opacity .15s linear"}}
           [:div.modal-dialog.modal-dialog-centered {:role "document"
                                                     :style {:justify-content "center"}}
            [:div.modal-content.p-2 {:style {:width "auto"}}
             [:div.modal-header.border-0.pb-0
              [:h2.pt-2
               (:title modal)]
              [:button.close {:type "button"
                              :on-click #(do (when-let [close (:close modal)] (close))
                                             (rf/dispatch [:modal nil]))}
               [:span "×"]]]
             [:div.modal-body (:body modal)]
             [:div.btn-component>div.col-sm.pb-4

              (when-let [accept (:accept modal)]
                [:button.btn.save {:type "button"
                                          :on-click #(do (when-let [accept-fn (:fn accept)] (accept-fn))
                                                         (when-not (:validation modal)
                                                           (rf/dispatch [:modal nil])))}
                 (:text accept)])
              (when-let [cancel (:cancel modal)]
                [:button.btn.cancel {:type "button"
                                                           :on-click #(do (when-let [cancel-fn (:fn cancel)] (cancel-fn))
                                                           (rf/dispatch [:modal nil]))}
                 (:text cancel)])]]]]])])))

(defn confirm-delete [dispatch]
  {:title      "Подтвердите действие"
   :body       "Вы уверены что хотите удалить?"
   :accept     {:text "Да"
                :fn   (fn []
                        (rf/dispatch dispatch))}
   :cancel     {:text "Нет"}
   :persistent true})
