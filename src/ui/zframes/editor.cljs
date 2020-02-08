(ns ui.zframes.editor
  (:require [jslib.monaco :as monaco]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [jslib.monaco.yaml ]
            [jslib.icons ]))

(def monaco-editor (.-editor js/monaco))
;;(def monaco-languages (helpers/get js/monaco "languages"))

(defn create [dom-element options override]

  (.create monaco-editor  dom-element  (clj->js options) (clj->js override) ))

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
        component-will-receive-props (fn [this [_ cfg]]
                                      (when-some [ref @*ref]
                                        ;;(println "----->>> " (:value cfg))
                                        (.setValue (aget this "editor") (:value cfg))
                                        #_(let [props  (r/props this)
                                              opts   (-> (assoc config :value (:value cfg)) (merge props) (assoc :editorWillMount (partial editor-will-mount this)))
                                              editor (create ref opts {})]
                                          (aset this "editor" editor)
                                          (.layout editor)
                                          ;;(.layout editor (clj->js {:width "100px" :height "100px"}))
                                          (editor-did-mount this editor)
                                          ))
                                      )

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
         ;;                          (when-some [editor (aget this "editor")]
         ;;                            (dispose editor)

         ;;                            (when-some [model (get-model editor)]
         ;;                              (dispose model)))

         ;;                          (when-some [sub (aget this "__subscription")]
         ;;                            (dispose sub)))

        render                 (fn [_]
                                 [:div.monaco-editor-wrapper {:ref assign-ref}])]
    (fn [config]
      (r/create-class
        {:display-name           "monaco-editor"
         :component-did-mount    component-did-mount
         :component-did-update   component-did-update
         :UNSAFE_component-will-receive-props component-will-receive-props
         ;;:component-will-unmount component-will-unmount
         :render                 render}))))

(defn edd []
  (let [cnt (rf/subscribe [:xhr/response :ui.explorer.model/file ])]
    (fn []
      [editor   {;;:width               "300px"
                 ;;:height              "300px"
                 :value               (get-in @cnt [:data :file-content]) 
                 ;;:defaultValue        (get-in @cnt [:data :file-content])
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
                 :overrideServices    {}}])))
