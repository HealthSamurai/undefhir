(ns ui.explorer.model-test
  (:require [ui.explorer.model :as sut]
            [re-frame.core :as rf]
            [matcho.core :refer [match]]
            [day8.re-frame.test :as rf-test]
            #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :as t :include-macros true])))

(def state (rf/subscribe [::sut/explorer]))

(def path [:child :test :child :ui :child :zframes :child :tabu])

(deftest collapse-tree
  (rf-test/run-test-sync
   (rf/dispatch [::sut/index])
   (testing "Collapse"
     (rf/dispatch [::sut/collapse path])
     (println @state)
     (match @state (assoc-in @state (conj path :collapse) true)))))
