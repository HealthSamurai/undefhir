(ns ui.layout
  (:require [ui.styles :as styles]))


(def core-styles
  (styles/style
   [:#app
    {:font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif;"}
    
    [:.ptbl [:&:hover {:cursor "pointer"}]]

    [:#layout {:display "grid"
               :width "100vw"
               :height "100vh"
               :grid-template-rows "[header] 32px [content] 100%"
               :grid-template-columns "[top-nav] 50px [list] 270px [code] auto"}
     [:#logo {:grid-area "header / top-nav / span 1 / span 1"
              :font-size "22px" :padding "2px" :width "50px"
              :margin-top "-2px" :text-align "center" :color "#19a6e4"} ]
     [:#top-nav {:grid-area "header / top-nav / span 1 / span 3"
                 :background-color "#3d3d3d"}]
     [:#entity-nav  {:background-color "#333"}
      [:.entity-lnk {:padding "10px"
                     :text-align "center"
                     :width "50px"
                     :height "50px"
                     :display "flex"
                     :align-items "center"
                     :justify-content "center"
                     :border-left "2px solid transparent"
                     :font-size "25px"
                     :color "#8c8c8c"}
       [:&.active {:color "white"
                   :border-left "2px solid white"}]
       [:&:hover {:color "white"}]]]
     [:#entity-list {:background-color "#252526"}]
     [:#editor      {:background-color "#1e1e1e"}]]]))

(defn layout [page]
  [:div#layout core-styles
   [:div:#top-nav]
   [:div:#logo
    [:i.fas.fa-fire]]
   [:div#entity-nav
    [:i.entity-lnk.ptbl.far.fa-file
     {:title "Explorer: /project/path"}]
    [:i.active.entity-lnk.ptbl.fas.fa-list
     {:title "Dictionaries"}]
    [:i.entity-lnk.ptbl.fas.fa-database
     {:title "Connections"}]
    [:i.entity-lnk.ptbl.fas.fa-stream
     {:title "Streams"}]]
   [:div#entity-list page]
   [:div#editor "3"]])
