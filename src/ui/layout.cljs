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
   ;;{:href "#/dictionary" :ico :i.entity-lnk.ptbl.fas.fa-list         :attr {:title "Dictionaries"}}
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
   [:.entity-nav  {:background-color "#333"}
    [:a {:text-decoration "none"}]
    [:.entity-lnk {:padding "10px" :text-align "center" :width "50px" :height "50px"
                   :display "flex" :align-items "center"
                   :justify-content "center" :border-left "2px solid transparent"
                   :font-size "25px" :color "#8c8c8c"}
     [:&.active {:color "white" :border-left "2px solid white"}]
     [:&.active-right {:color "white" :border-right "2px solid white"}]
     [:&:hover {:color "white"}]]] ))

(defn main-navigation []
  (let [navigation (rf/subscribe [::navigation])]
    (fn []
      (let [items @navigation]
        [:div#entity-nav.entity-nav entity-nav-styles
         (for [i items] ^{:key (:href i)}
           [:a {:href (:href i)} [(:ico i) (:attr i)]])]))))

(def outline-style
  (styles/style
   [:.outline {:background-color "#252526"
               :color "#cccccc"
               :font-size "14px"}
    [:.fn {:width "12px" :margin-right "3px"}]
    [:.functions {:padding-left "17px"
                  :padding-top "3px"}]
    [:.header {:height "32px"
                :vertical-align "middle"
                :padding "8px 17px"
                :font-size "11px"}]]))


(def outline-state
  {:fns [{:name "randPatientName"
          :params ["foo" "bar"]}
         {:name "randPatientAddress"}
         {:name "randPhone"}
         {:name "randEmail"}
         {:name "PatientTransform"}]})

(defn functions [{fns :fns}]
  [:div.functions
   (for [f fns] ^{:key (:name f)}
     [:div [:img.fn {:src "/img/fn.svg"}] (:name f)])])

(defn outline []
  [:div.outline outline-style
   [:div.header "OUTLINE"]
   [functions outline-state]
   ])

(defn layout [page]
  [:div#layout app-styles/layout app-styles/app
   [:div#top-nav.top-nav]
   [:div#logo.logo [:i.fas.fa-fire]]
   [main-navigation]
   [:div#entity-list page]
   [:div#editor
    [:div#editor-area
     [:div.editor-view
      [tabu/tabular]
      [editor/edd]]
     [outline]]]
   [:div#outline.entity-nav
    [:span.active-right.entity-lnk.ptbl.fas.fa-list {:title "Outline"}]]])
