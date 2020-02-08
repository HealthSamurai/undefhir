(ns ui.zframes.tabu.view
  (:require [ui.styles :as s]
            [ui.zframes.tabu.model :as model]
            [re-frame.core :as rf]))

(def style
  (s/style
   [:#tabu {:height "32px"
            :align-items "center"
            :display "flex"
            :background-color "#252526"}
    [:.tab {:background-color "#2d2d2d"
            :display "flex" :align-items "center" :height "100%"
            :font-size "13px" :color "#ffffff80"
            :user-select "none"
            :padding "0 15px" :margin-right "2px"}
     [:&.active {:background-color "#1e1e1e" :color "#fff"
                 :border-top "1px solid #0e639ccc"}]
     [:&:hover {:cursor "pointer"
                :background-color "#252526" :color "#fff"}]]]))


(defn tabular []
  (let [tabs (rf/subscribe [::model/tabular])]
    (fn []
      [:div#tabu style
       (for [t @tabs] ^{:key (:id t)}
         [:div.tab
          {:on-click #(rf/dispatch [::model/select t])

           :class (if (:active t) "active")}
          (:title t)])])))
