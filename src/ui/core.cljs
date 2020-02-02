(ns ^:figwheel-hooks ui.core
  (:require [reagent.core :as reagent]
            [ui.layout :as layout]
            [ui.pages :as pages]
            [ui.routes :as routes]

            [ui.zframes.routing]
            [ui.zframes.xhr]
            [ui.dictionary.view]
            [ui.explorer.view]
            [re-frame.core :as rf]))

(rf/reg-event-fx
 ::initialize
 [(rf/inject-cofx :window-location)]
 (fn [{location :location db :db} _]
   {:db (assoc db
               :xhr {:config {:base-url "http://localhost:9090"}}
               :route-map/routes routes/routes)
    :route-map/start {}}))

(defn not-found-page []
  [:h1 "Not found"])

(defn current-page []
  (let [route  (rf/subscribe [:route-map/current-route])]
    (fn []
      (let [page (get @pages/pages (:match @route))
            params (:params @route)]
        [layout/layout
         (if page
           [page params]
           [not-found-page])]))))

(defn mount-root []
  (rf/dispatch-sync [::initialize])
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn ^:after-load re-render [] (mount-root))
