(ns ui.zframes.tabu
  (:require [ui.styles :as s]
            [re-frame.core :as rf]))

(def style
  (s/style
   [:#tabu {:height "32px"
            :align-items "center"
            :display "flex"
            :background-color "#252526"}
    [:.tab {:background-color "#1e1e1e"
            :color "#ffffff80"
            :align-items "center"
            :display "flex"
            :font-size "13px"
            :height "100%"
            :padding "0 15px"}]]))


(defn tabular []
  (let [tabs (rf/subscribe [::tabular])]
    (fn []
      [:div#tabu style
       (for [t @tabs] ^{:key (:id t)}
         [:div.tab (:title t)])])))

(rf/reg-sub
 ::tabular
 (fn [db _]
   [{:title "hello.clj"
     :id "id"}]))
