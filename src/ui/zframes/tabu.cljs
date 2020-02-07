(ns ui.zframes.tabu
  (:require [ui.styles :as s]
            [re-frame.core :as rf]))

(defn tabular []
  (let [tabs (rf/subscribe [::tabs])]
    (fn []
      [:div#tabu
       (for [t tabs] ^{:key (:id t)}
         [:div.tab (:title t)])])))
