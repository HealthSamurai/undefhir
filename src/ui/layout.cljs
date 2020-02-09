(ns ui.layout
  (:require [ui.app-styles :as app-styles]
            [ui.styles :as styles]
            [ui.zframes.editor.view :as editor]
            [ui.zframes.tabu.view :as tabu]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(def menu
  [{:href "#/explorer"   :ico :i.entity-lnk.ptbl.far.fa-file         :attr {:title "Explorer: /project/path"} }
   {:href "#/connection" :ico :i.entity-lnk.ptbl.fas.fa-database     :attr {:title "Connections"}}
   {:href "#/dictionary" :ico :i.entity-lnk.ptbl.fas.fa-list         :attr {:title "Dictionaries"}}
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

(def entity-nav-styles
  (styles/style
   [:#entity-nav  {:background-color "#333"}
    [:a {:text-decoration "none"}]
    [:.entity-lnk {:padding "10px" :text-align "center" :width "50px" :height "50px"
                   :display "flex" :align-items "center"
                   :justify-content "center" :border-left "2px solid transparent"
                   :font-size "25px" :color "#8c8c8c"}
     [:&.active {:color "white" :border-left "2px solid white"}]
     [:&:hover {:color "white"}]]] ))

(defn main-navigation []
  (let [navigation (rf/subscribe [::navigation])]
    (fn []
      (let [items @navigation]
        [:div#entity-nav entity-nav-styles
         (for [i items] ^{:key (:href i)}
           [:a {:href (:href i)} [(:ico i) (:attr i)]])]))))


(defn layout [page]
  [:div#layout app-styles/layout app-styles/app
   [:div#top-nav.top-nav]
   [:div#logo.logo [:i.fas.fa-fire]]
   [main-navigation]
   [:div#entity-list page]
   [:div#editor
    [tabu/tabular]
    [editor/edd]]])
