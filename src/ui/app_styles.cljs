(ns ui.app-styles
  (:require [ui.styles :as styles]))

(def layout
  (styles/style
   [:#app
    [:#layout {:display "grid" :width "100vw" :height "100vh"
               :grid-template-rows "[header] 32px [content] calc(100% - 32px)"
               :grid-template-columns "[top-nav] 50px [list] 270px [code] auto [outline] 50px" }
     [:#logo        {:grid-area "header / top-nav / span 1 / span 1"} ]
     [:#top-nav     {:grid-area "header / top-nav / span 1 / span 4"}]
     [:#outline     {:grid-area "content / outline / span 1 / span 1"}]
     [:#entity-list {:background-color "#252526"}]

     [:.editor-view {:max-width "calc(100vw - 660px)"}]
     [:#editor-area  {:display "grid" :width "calc(100vw - 370px)" :height "100%"
                      :grid-template-columns "[editor] auto [outline] 290px"
                      :grid-template-rows "100%" }]

     [:#editor      {:background-color "#1e1e1e"}]]]))

(def app 
  (styles/style
   [:.app
    {:font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif;"}

    [:.logo {:font-size "22px" :padding "2px" :width "50px"
             :margin-top "-2px" :color "#19a6e4" :text-align "center"}]
    [:.top-nav {:background-color "#3d3d3d"}]

    [:.ptbl [:&:hover {:cursor "pointer"}]]
    [:.grow {:flex-grow "1"}]
    [:.monaco-editor-wrapper {:height "calc(100% - 32px)"
                              :resize "vertical"
                              :overflow "auto"}]

    ])
  )
