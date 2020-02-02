(ns ui.explorer.view
  (:require [ui.explorer.model :as model]
            [ui.styles :as styles]
            [ui.pages :as pages]))

(def dict-style
  (styles/style
   [:#dictionary {:color "#e7e7e7" :font-size "13px"}
    [:.dict {:margin-left "2px"}]
    [:.file {:padding "2px 0 2px 24px"}
     [:&:hover {:cursor "pointer"
                :background-color "#37373d"}]]
    [:.file-ico {:margin-right "6px"}]
    [:.arrow  {:margin "6px" :font-size "10px"}]
    [:.folder {:margin-right "6px"}]
    [:.title {:font-size "calc(13px/1.2)"
              :margin-left "17px" :height "32px" :display "flex" :align-items "center"}]]))

(pages/reg-subs-page
 model/index
 (fn [{:keys [dictionary]} params]
   [:div#dictionary dict-style
    [:div.title "EXPLORER"]
    [:div.dict
       [:i.arrow.fas.fa-caret-right]
       [:i.folder.fas.fa-folder] "workspace"
     (for [d dictionary] ^{:key (:name d)}
       [:div.file [:i.file-ico.far.fa-file] (:name d)])]


    

    (:page subs)]))
