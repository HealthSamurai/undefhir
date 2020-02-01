(ns ui.styles
  (:require [garden.core :as garden]
            [garden.stylesheet :as stylesheet]))

(defn style [css]
  [:style (garden/css css)])

(def at-media stylesheet/at-media)
