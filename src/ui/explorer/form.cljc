(ns ui.explorer.form
  (:require [re-frame.core :as rf]
            [ui.zenform.model :as zf]))

(def new-file-form-path [:form :new-file])
(def new-file-form-schema
  {:type :form
   :fields {:file-path {:type :string
                        :validators {:required {:message "File name is required"}}}}})


(rf/reg-event-fx
 ::new-file-init
 (fn [{db :db} [_ init]]
   {:dispatch [:zf/init new-file-form-path new-file-form-schema init]}))

(rf/reg-event-fx
 ::new-file-eval
 (fn [{db :db} [_ {:keys [success params]}]]
   (let [{:keys [errors value form]} (->> new-file-form-path (get-in db) zf/eval-form)]
     (merge
      {:db (assoc-in db new-file-form-path form)}
      (if (empty? errors)
        {:dispatch  [success value (when params params) ]}
        #?(:clj  (println errors)
           :cljs (.warn js/console "Form errors: " (clj->js errors))))))))
