(ns ui.layout
  (:require [ui.app-styles :as app-styles]
            [ui.styles :as styles]
            [ui.zframes.editor.view :as editor]
            [ui.zframes.tabu.view :as tabu]
            [ui.zframes.modal :as modal]
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
    [:.subheader [:.arrow {:padding "0 5px"}]]
    [:.functions {:padding-top "3px"}]
    [:.fnn {:padding-left "23px"}
     [:&:hover {:cursor "pointer"
                :background-color "#37373d"}]]
    [:.header {:height "32px"
                :vertical-align "middle"
                :padding "8px 17px"
                :font-size "11px"}]]))


(def outline-state
  {:dicts  [{:name "Names"
             :params ["foo" "bar"]}
            {:name "Colors"}
            {:name "Phones"}]
   :fns [{:name "randPatientName"
          :params ["foo" "bar"]}
         {:name "randPatientAddress"}
         {:name "randPhone"}
         {:name "randEmail"}
         {:name "PatientTransform"}]})

(defn dicts [{dicts :dicts}]
  [:div.dicts
   [:div.subheader [:i.arrow.fas.fa-caret-right] [:img.fn {:src "/img/dict.svg"}] "Dictionaries"]
   [:div.functions-list
    (for [d dicts] ^{:key (:name d)}
      [:div.fnn [:img.fn {:src "/img/d.svg"}] (:name d)])]])

(defn functions [{fns :fns}]
  [:div.functions
   [:div.subheader [:i.arrow.fas.fa-caret-right] [:img.fn {:src "/img/fn.svg"}] "Functions"]
   [:div.functions-list
    (for [f fns] ^{:key (:name f)}
      [:div.fnn [:img.fn {:src "/img/f.svg"}] (:name f)])]])

(defn outline []
  [:div.outline outline-style
   [:div.header "OUTLINE"]
   [dicts outline-state]
   [functions outline-state]])

(defn layout [page]
  [:div
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
     [:span.active-right.entity-lnk.ptbl.fas.fa-list {:title "Outline"}]]]

   [modal/modal]
   ])
