(ns ui.app-styles
  (:require [ui.styles :as styles]))

(def layout
  (styles/style
   [:#app
    ["::-webkit-scrollbar" {:width "10px" :height "3px"}]
    ["::-webkit-scrollbar-track" {:background "#333"}]
    ["::-webkit-scrollbar-thumb" {:background "#404040"}]
    ["::-webkit-scrollbar-thumb:hover" {:background "#555"}]
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

    ;; ------------------------------------
    [:.btn {:border-radius 0
            :font-size "11px"
            :transition "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}
     [:&:hover {:cursor "pointer"}]]
    [:.btn-primary {:background-color "#007acc"
                    :padding "4px 9px"
                    :min-width "65px"
                    :line-height "1em"}
     [:&:hover {:background-color "#1177bb"}]]
    [:.u-input {:background "rgb(60, 60, 60)"
                :color "rgb(204, 204, 204)"
                :padding "3px 5px"
                :width "100%"
                :border "none"}]

    ;; ------------------------------------
    [:.ptbl [:&:hover {:cursor "pointer"}]]
    [:.flex {:display "flex"}]
    [:.grow {:flex-grow "1"}]
    [:.monaco-editor-wrapper {:height "calc(100% - 32px)"
                              :resize "vertical"
                              :overflow "hidden"}]]))
