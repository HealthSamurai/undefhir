(ns ui.explorer.view
  (:require [ui.explorer.model :as model]
            [ui.explorer.form :as form]
            [ui.zframes.tabu.model :as tabu]
            [ui.zframes.editor.model :as editor]
            [ui.zenform.core :as zform]
            [re-frame.core :as rf]
            [ui.styles :as styles]
            [jslib.icons :as icons]
            [ui.pages :as pages]
            [clojure.string :as str]))

(def dict-style
  (styles/style
   [:#explorer {:color "#e7e7e7" :font-size "13px"
                :min-height "4em" :max-height "100%" :overflow "hidden"}
    [:.explorer-wrapper {:margin-left "-8px" :height "calc(100vh - 65px)" :overflow-y "hidden"}
     [:&:hover {:overflow-y "scroll"}]]
    [:.dict {:margin-left "2px"}]
    [:.file {:padding-left "15px"
             :display "inline-block"
             :width "33px"}
     [:&.fa-file {:padding-right "5px"}]]

    [:.line
     {:height "22px" :align-items "center"}
     [:.actions {:display "none"}]
     [:&:hover {:cursor "pointer" :background-color "#37373d"}
      [:.actions {:color "#ffffff80"
                  :display "block" :margin-right "8px" :margin-top "3px"}
       [:.cnt {:display "none"}]
       [:.ctx-menu {:display "none"}]
       [:&:hover
        [:.fas {:color "white"}]
        [:.ctx-menu {:display "block"}]]]]]

    [:.actions {:padding-right "10px" :position "relative"}
     [:.ctx-menu {:position "absolute"
                  :max-width "290px"
                  :min-width "120px"
                  :right 0
                  :box-shadow "0px 1px 6px black"
                  :background-color "#252526"}
      [:.itm {:padding "5px 20px"
              :white-space "nowrap"}
       [:&:hover {:color "white"
                  :background-color "#094771"}]]]
     [:i {:padding "0 4px"}]]

    [:.dir
     [:.arrow {:transform "rotate(45deg)"}]
     [:&.collapsed [:.arrow {:transform "rotate(0deg)"}] ]]

    [:.file-ico {:margin-right "6px"}]
    [:.arrow  {:margin "6px" :font-size "10px"}]
    [:.folder {:margin-right "4px" :font-size "13px"}]
    [:.title {:font-size "calc(13px/1.2)"
              :display "flex"
              :position "sticky" :top "0" :background-color "#252526"
              :padding-left "17px" :height "32px" :align-items "center"}
     ]]))

(defn file-icon [file-name]
  [:span.file {:class (or (.getClassWithColor js/FileIcons file-name) "far fa-file")}])

(defn normalize-name [node]
  (-> node first name str/lower-case))

(defn sorted-tree [tree]
  (->> tree
       (reduce-kv
        (fn [acc k v]
          (update acc (if (:isDirectory v) 0 1) conj [k v]))
        [[] []])
       (map #(sort-by normalize-name %))
       (apply concat)))

(defn new-file-modal [dir]
  [:div
   [:div.mb-3.mt-2
    [:i.fas.fa-folder] [:span.ml-2 (str (name dir) "/")]]

   [zform/text-input
    form/new-file-form-path
    [:file-path]
    {:placeholder "File name"
     :type "text" :name "file"
     :auto-focus "autofocus"}]
   [:div.bottom.flex
    [:div.grow]
    [:div.btn.btn-primary {:on-click #(rf/dispatch [::model/new-file-form-submit ])} "OK"]]])

(defn context-menu [path node]
  [:div.actions
   {:on-click #(println "111111111111111")}
   [:i.fas.fas.fa-ellipsis-h]
   [:div.ctx-menu
    (if (:isDirectory node)
      [:div.itm
       {:on-click #(rf/dispatch [::model/new-file-modal path (new-file-modal path)])}
       "Nev File"])]])

(defn work-tree [{:keys [child isDirectory] :as tree} & [padding path]]
  (let [padding (+ padding 10)
        path (or path [])]
    (when child
      (reduce
       (fn [acc [k v]]
         (let [path (conj (conj path :child) k)]
           (conj acc
                 [:div.line.flex
                  [:div.grow
                   {:key k
                    :style {"paddingLeft" (str padding "px")}
                    :on-context-menu (fn [e]
                                       (.preventDefault e)
                                       (println "- right"))
                    :on-click (fn [e]
                                (if (:isDirectory v)
                                  (rf/dispatch [::model/collapse path])
                                  (do
                                    (rf/dispatch [::tabu/add {:id  (:path v)
                                                              :on-click [::editor/set-model (:path v)]
                                                              :title [:span (file-icon k) k]}])
                                    (rf/dispatch [::model/open-file (:path v)]))))}
                   (if (:isDirectory v)
                     [:span.dir {:class (if (:collapse v) "collapsed")}
                      [:i.arrow.fas.fa-caret-right] [:i.folder.fas.fa-folder]]
                     (file-icon k))
                   k]
                  [context-menu k v]]
                 (when-not (:collapse v)
                   (work-tree v padding path)))))
       [:div.dir]
       (sorted-tree child)))))

(defn workspace []
  (let [tree (rf/subscribe [::model/explorer])]
    (fn []
      [work-tree @tree])))

(pages/reg-subs-page
 model/index
 (fn [{:keys [root] :as db} params]
   [:div#explorer dict-style
    [:div.title
     [:div.desc.grow "EXPLORER: " root]
     [:div.actions
      [:i.ptbl.fas.fa-redo-alt {:title "Reload"}]
      [:i.ptbl.fas.fa-search {:title "search"}]] ]

    [:div.explorer-wrapper
     [workspace] [:br]]
    [:br]]))
