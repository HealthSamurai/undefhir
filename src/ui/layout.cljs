(ns ui.layout
  (:require [ui.styles :as styles]
            [clojure.string :as str]
            [re-frame.core :as rf]))


(def core-styles
  (styles/style
   [:#app
    {:font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif;"}
    
    [:.ptbl [:&:hover {:cursor "pointer"}]]

    [:#layout {:display "grid"
               :width "100vw"
               :height "100vh"
               :grid-template-rows "[header] 32px [content] calc(100% - 32px)"
               :grid-template-columns "[top-nav] 50px [list] 270px [code] auto"}
     [:#logo {:grid-area "header / top-nav / span 1 / span 1"
              :font-size "22px" :padding "2px" :width "50px"
              :margin-top "-2px" :text-align "center" :color "#19a6e4"} ]
     [:#top-nav {:grid-area "header / top-nav / span 1 / span 3"
                 :background-color "#3d3d3d"}]
     [:#entity-nav  {:background-color "#333"}
      [:a {:text-decoration "none"}]
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

(def menu
  [{:href "#/explorer"   :ico :i.entity-lnk.ptbl.far.fa-file         :attr {:title "Explorer: /project/path"} }
   {:href "#/dictionary" :ico :i.entity-lnk.ptbl.fas.fa-list         :attr {:title "Dictionaries"}}
   {:href "#/connection" :ico :i.entity-lnk.ptbl.fas.fa-database     :attr {:title "Connections"}}
   {:href "#/stream"     :ico :i.entity-lnk.ptbl.fas.fa-stream       :attr {:title "Streams"}}])

(rf/reg-sub
 ::navigation
 :<- [:route-map/fragment]
 (fn [fragment _]
   (map
    (fn [i]
      (if (str/includes? (or fragment "#/") (:href i))
        (assoc-in i [:attr :class] "active")
        i))
    menu)))

(defn main-navigation []
  (let [navigation (rf/subscribe [::navigation])]
    (fn []
      (let [items @navigation]
        [:div#entity-nav
         (for [i items] ^{:key (:href i)}
           [:a {:href (:href i)} [(:ico i) (:attr i)]])]))))

(defn layout [page]
  [:div#layout core-styles
   [:div:#top-nav]
   [:div:#logo
    [:i.fas.fa-fire]]
   [main-navigation]
   [:div#entity-list page]
   [:div#editor "3"]])
