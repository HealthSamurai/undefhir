(ns ui.layout
  (:require [ui.styles :as styles]
            [reagent.core :as r]
            [monaco.helpers :as helpers]
            [jslib.monaco :as monaco]

            [clojure.string :as str]
            [re-frame.core :as rf]))


(def core-styles
  (styles/style
   [:#app
    {:font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif;"}
    
    [:.editor-area {:height "300px"}]
    [:.ptbl [:&:hover {:cursor "pointer"}]]
    [:.grow {:flex-grow "1"}]

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

(def monaco-editor (.-editor js/monaco))
;;(def monaco-languages (helpers/get js/monaco "languages"))

(defn create [dom-element options override]
  (.create monaco-editor  dom-element  options override)
  )


(defn editor [config]
  (let [*ref                   (atom nil)
        assign-ref             (fn [component] (reset! *ref component))

        editor-did-mount       (fn [this editor]
                                 (let [props (r/props this)]
                                   (when-some [f (:editorDidMount props)]
                                     (f editor js/monaco))
                                   #_(aset this "__subscription"
                                     (on-did-change-model-content editor
                                       (fn [event]
                                         (when-not (helpers/get this "__preventTriggerChangeEvent")
                                           (when-some [f (:onChange props)]
                                             (f (get-value editor) event))))))))

        editor-will-mount      (fn [this _]
                                 (let [props (r/props this)]
                                   (when-some [f (:editorWillMount props)]
                                     (or (f js/monaco) {}))))

        component-did-mount    (fn [this]
                                 (when-some [ref @*ref]
                                   (let [props  (r/props this)
                                         opts   (-> config (merge props) (assoc :editorWillMount (partial editor-will-mount this)))
                                         editor (create ref opts config)]
                                     (aset this "editor" editor)
                                     #_(.layout editor)
                                     ;;(.layout editor (clj->js {:width "100px" :height "100px"}))
                                     ;;(editor-did-mount this editor)
                                     )))

        ;; component-did-update   (fn [this old-argv]
        ;;                          (let [editor      (helpers/get this "editor")
        ;;                                old-props   (second old-argv)
        ;;                                props       (r/props this)
        ;;                                model       (get-model editor)
        ;;                                model-value (get-model-value model)
        ;;                                {:keys [value theme language options width height]} props]

        ;;                            (when (and value (not= value model-value))
        ;;                              (helpers/set this "__preventTriggerChangeEvent " true)
        ;;                              (push-undo-stop editor)
        ;;                              (push-edit-operations model [] [{:text value, :range (get-full-model-range model)}])
        ;;                              (push-undo-stop editor)
        ;;                              (helpers/set this "__preventTriggerChangeEvent " false))

        ;;                            (when (not= language (:language old-props))
        ;;                              (set-model-language model language))

        ;;                            (when (not= theme (:theme old-props))
        ;;                              (set-theme theme))

        ;;                            (when (not= options (:options old-props))
        ;;                              (update-options editor options))

        ;;                            (when (or (not= width (:width old-props))
        ;;                                    (not= height (:height old-props)))
        ;;                              (layout editor))))

        ;; component-will-unmount (fn [this]
        ;;                          (when-some [editor (helpers/get this "editor")]
        ;;                            (dispose editor)

        ;;                            (when-some [model (get-model editor)]
        ;;                              (dispose model)))

        ;;                          (when-some [sub (helpers/get this "__subscription")]
        ;;                            (dispose sub)))

        render                 (fn [_]
                                 [:div.monaco-editor-wrapper {:ref assign-ref}])]
    (fn [_]
      (r/create-class
        {:display-name           "monaco-editor"
         :component-did-mount    component-did-mount
         ;;:component-did-update   component-did-update
         ;;:component-will-unmount component-will-unmount
         :render                 render}))))

(defn layout [page]
  [:div#layout core-styles
   [:div#top-nav]
   [:div#logo
    [:i.fas.fa-fire]]
   [main-navigation]
   [:div#entity-list page]
   [:div#editor
    [:div.editor-area
     [editor  {:width               "300px"
               :height              "300px"
               :value               "hello world" 
               :defaultValue        "init"
               :language            "custom"
               :theme               "custom"
               :minimap             {:enabled true}
               :autoIndent          true
               :selectOnLineNumbers true
               :roundedSelection    false
               :readOnly            false
               :cursorStyle         "line"
               :automaticLayout     false
               ;;:editorDidMount      (fn [editor monaco] (monaco/focus editor))
               ;;:editorWillMount     (fn [monaco])
               ;;:onChange            (fn [new-value event] (rf/dispatch [::set-value new-value]))
               :overrideServices    {}}]]]])
