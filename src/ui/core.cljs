(ns ^:figwheel-hooks ui.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

(defn current-page []
  (fn [] [:h1 "Hello undefhire"]))

(defn mount-root []
  (rf/dispatch-sync [::initialize])
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn ^:after-load re-render [] (mount-root))
