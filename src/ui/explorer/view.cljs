(ns ui.explorer.view
  (:require [ui.explorer.model :as model]
            [ui.styles :as styles]
            [ui.pages :as pages]))

(def dict-style
  (styles/style
   [:#explorer {:color "#e7e7e7" :font-size "13px"
                :min-height "4em" :max-height "100%" :overflow-y "auto"}
    [:.explorer-wrapper {:margin-left "-8px"}]
    [:.dict {:margin-left "2px"}]
    ;;[:.dir  {:padding-left "10px"}]
    [:.file {:padding-left "6px"}]

    [:.line [:&:hover {:cursor "pointer" :background-color "#37373d"}]]

    [:.file-ico {:margin-right "6px"}]
    [:.arrow  {:margin "6px" :font-size "10px"}]
    [:.folder {:margin-right "6px"}]
    [:.title {:font-size "calc(13px/1.2)"
              :position "sticky" :top "0" :background-color "#252526"
              :padding-left "17px" :height "32px" :display "flex" :align-items "center"}]]))


(defn work-tree [{:keys [child isDirectory] :as tree} & [padding]]
  (let [padding (+ padding 10)]
    (when child
      (reduce-kv
       (fn [acc k v]
         (conj acc
               [:div.directory1 {:key k}
                [:div.line {:style {"padding-left" (str padding "px")}}
                 (if (:isDirectory v)
                   [:span [:i.arrow.fas.fa-caret-right] [:i.folder.fas.fa-folder]]
                   [:span.file [:i.folder.far.fa-file]])
                 k]
                (work-tree v padding)]))
       [:div.dir]
       child))))

(pages/reg-subs-page
 model/index
 (fn [{:keys [dir]} params]
   [:div#explorer dict-style
    [:div.title "EXPLORER: /src"]

    [:div.explorer-wrapper
     [work-tree dir]]
    [:br]]))
