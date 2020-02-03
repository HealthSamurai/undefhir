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
    
    [:.editor-area {:max-height "100%"}]
    [:.ptbl [:&:hover {:cursor "pointer"}]]
    [:.grow {:flex-grow "1"}]
    [:.monaco-editor-wrapper {:height "100%"}]

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
  (.create monaco-editor  dom-element  (clj->js options) ))

(defn set-theme [theme-name]
  (.setTheme monaco-editor  theme-name))

(defn update-options [editor options]
  (.updateOptions editor  options))




(defn get-value [editor] (.getValue editor))

(defn get-model [editor] (.getModel editor))

(defn mlayout [editor] (.layout editor ))

(defn on-did-change-model [editor listener]
  (.onDidChangeModel editor  listener))

(defn on-did-change-model-content [editor listener]
  (.onDidChangeModelContent editor  listener))
(defn push-undo-stop [editor]
  (.pushUndoStop editor ))
(defn push-edit-operations [model before-cursor-state edit-operations]
  (.pushEditOperations model  before-cursor-state edit-operations))

(defn get-full-model-range [model]
  (.getFullModelRange model ))

(defn set-model-language [model language-id]
  (.setModelLanguage monaco-editor  model language-id))


(defn editor [config]
  (let [*ref                   (atom nil)
        assign-ref             (fn [component] (reset! *ref component))

        editor-did-mount       (fn [this editor]
                                 (let [props (r/props this)]
                                   (when-some [f (:editorDidMount props)]
                                     (f editor js/monaco))
                                   (aset this "__subscription"
                                     (on-did-change-model-content editor
                                       (fn [event]
                                         (when-not (aget this "__preventTriggerChangeEvent")
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
                                     (editor-did-mount this editor)
                                     )))

        component-did-update   (fn [this old-argv]
                                 (let [editor      (.-editor this)
                                       old-props   (second old-argv)
                                       props       (r/props this)
                                       model       (.getModel editor)
                                       model-value (.getValue model)
                                       {:keys [value theme language options width height]} props]

                                   (when (and value (not= value model-value))
                                     (aset this "__preventTriggerChangeEvent " true)
                                     (push-undo-stop editor)
                                     (push-edit-operations model [] [{:text value, :range (get-full-model-range model)}])
                                     (push-undo-stop editor)
                                     (aset this "__preventTriggerChangeEvent " false))

                                   (when (not= language (:language old-props))
                                     (set-model-language model language))

                                   (when (not= theme (:theme old-props))
                                     (set-theme theme))

                                   (when (not= options (:options old-props))
                                     (update-options editor options))

                                   (when (or (not= width (:width old-props))
                                           (not= height (:height old-props)))
                                     (mlayout editor))))

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
         :component-did-update   component-did-update
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
    [editor   {;;:width               "300px"
               ;;:height              "300px"
               :value               "hello world hello world hello\n 
hello world hello world hello world hello \n
world hello world hello world hello world\n 
ello world hello world hello world hello world hello world hello world hello world " 
               :defaultValue        "init"
               :language            "yaml"
               :theme               "vs-dark"
               :minimap             {:enabled true}
               :autoIndent          true
               :selectOnLineNumbers true
               :roundedSelection    false
               :readOnly            false
               :cursorStyle         "line"
               :automaticLayout     false
               :editorDidMount      (fn [editor monaco] (.focus editor))
               :editorWillMount     (fn [monaco])
               ;;:onChange            (fn [new-value event] (rf/dispatch [::set-value new-value]))
               :overrideServices    {}}]]])
