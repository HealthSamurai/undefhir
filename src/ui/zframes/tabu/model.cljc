(ns ui.zframes.tabu.model
  (:require [re-frame.core :as rf]))

(defn tab-exists? [tabs tab]
  (seq (filter #(= (:id tab) (:id %)) tabs)))

(defn select-tab
  [tabs {id :id :as tab}]
  (mapv
   #(if (= id (:id %))
      (assoc % :active true)
      (dissoc % :active))
   tabs))

(defn unselect-tabs [tabs]
  (mapv #(dissoc % :active) tabs))

(defn add-tab [tabs tab]
  (let [tab (assoc tab :active true)]
    (if (empty? tabs)
      [tab]
      (if (tab-exists? tabs tab)
        (select-tab tabs tab)
        (conj (unselect-tabs tabs) tab)))))

(rf/reg-event-fx
 ::add
 (fn [{db :db} [_ tab]]
   {:db (update db ::tabular add-tab tab)}))

(rf/reg-event-fx
 ::select
 (fn [{db :db} [_ tab]]
   {:db (update db ::tabular select-tab tab)}))

(rf/reg-event-db
 ::init
 (fn [db _]
   (assoc db ::tabular [])))

(rf/reg-sub
 ::tabular
 (fn [db _]
   (::tabular db)))
