(ns ui.app-styles
  (:require [ui.styles :as styles]))

(def layout
  (styles/style
   [:#app
    [:#layout {:display "grid" :width "100vw" :height "100vh"
               :grid-template-rows "[header] 32px [content] calc(100% - 32px)"
               :grid-template-columns "[top-nav] 50px [list] 270px [code] auto"}
     [:#logo        {:grid-area "header / top-nav / span 1 / span 1"} ]
     [:#top-nav     {:grid-area "header / top-nav / span 1 / span 3"}]
     [:#entity-list {:background-color "#252526"}]
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
