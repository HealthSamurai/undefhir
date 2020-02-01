(ns ^:figwheel-hooks ui.core
  (:require [reagent.core :as reagent]
            [ui.layout :as layout]
            [re-frame.core :as rf]))

(defn current-page []
  layout/layout)

(defn mount-root []
  (rf/dispatch-sync [::initialize])
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn ^:after-load re-render [] (mount-root))
