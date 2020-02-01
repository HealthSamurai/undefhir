(ns ^:figwheel-no-load ui.dev
  (:require [ui.core :as core]
            [re-frisk.core :refer [enable-re-frisk!]]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)
(enable-re-frisk! #_{:width "800px", :height "500px", :x 0, :y 0})
(core/mount-root)
