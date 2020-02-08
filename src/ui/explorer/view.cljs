(ns ui.explorer.view
  (:require [ui.explorer.model :as model]
            [ui.zframes.tabu.model :as tabu]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [ui.styles :as styles]
            [jslib.icons :as icons]
            [ui.pages :as pages]))

(def dict-style
  (styles/style
   [:#explorer {:color "#e7e7e7" :font-size "13px"
                :min-height "4em" :max-height "100%" :overflow-y "auto"}
    [:.explorer-wrapper {:margin-left "-8px"}]
    [:.dict {:margin-left "2px"}]
    [:.file {:padding-left "15px"}
     [:&.fa-file {:padding-right "5px"}]]

    [:.line [:&:hover {:cursor "pointer" :background-color "#37373d"}]]

    [:.file-ico {:margin-right "6px"}]
    [:.arrow  {:margin "6px" :font-size "10px"}]
    [:.folder {:margin-right "6px"}]
    [:.title {:font-size "calc(13px/1.2)"
              :display "flex"
              :position "sticky" :top "0" :background-color "#252526"
              :padding-left "17px" :height "32px" :align-items "center"}
     [:.actions {:padding-right "10px"}
      [:i {:padding "0 4px"}
       [:&:hover {:color "white"}]]]]]))

(defn file-icon [file-name]
  [:span.file {:class (or (.getClassWithColor js/FileIcons file-name) "far fa-file")}])

(defn work-tree [{:keys [child isDirectory] :as tree} & [padding]]
  (let [padding (+ padding 10)]
    (when child
      (reduce-kv
       (fn [acc k v]
         (conj acc
               [:div.line
                {:key k
                 :style {"paddingLeft" (str padding "px")}
                 :on-click (fn [e]
                             (if (:isDirectory v)
                               (println "dir")
                               (do
                                 (rf/dispatch [::tabu/add {:id  (:path v)
                                                           :title [:span (file-icon k) k]}])
                                 (rf/dispatch [::model/open-file (:path v)]))))}
                (if (:isDirectory v)
                  [:span [:i.arrow.fas.fa-caret-right] [:i.folder.fas.fa-folder]]
                  (file-icon k))
                k]
               (work-tree v padding)))
       [:div.dir]
       child))))

(pages/reg-subs-page
 model/index
 (fn [{:keys [dir]} params]
   [:div#explorer dict-style
    [:div.title
     [:div.desc.grow "EXPLORER: /src "]
     [:div.actions
      [:i.ptbl.fas.fa-redo-alt {:title "Reload"}]
      [:i.ptbl.fas.fa-search {:title "search"}]] ]

    [:div.explorer-wrapper
     [work-tree dir]]
    [:br]]))
