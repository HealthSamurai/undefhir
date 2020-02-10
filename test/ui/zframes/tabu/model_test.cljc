(ns ui.zframes.tabu.model-test
  (:require [ui.zframes.tabu.model :as sut]
            [day8.re-frame.test :as rf-test]
            [re-frame.core :as rf]
            [matcho.core :refer [match]]
            #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :as t :include-macros true])))


(def tabs (rf/subscribe [::sut/tabular]) )

(deftest tabu
  (rf-test/run-test-sync
   (rf/dispatch [::sut/init])
   (testing "Add tab"
     (testing "Add first tab"
       (rf/dispatch [::sut/add {:id "test"}])
       (match @tabs
              [{:id "test" :active true}]))

     (testing "Add second tab"
       (rf/dispatch [::sut/add {:id "another tab"}])
       (match @tabs
              [{:id "test" :active nil?}
               {:id "another tab" :active true}]))

     (testing "Add existing tab"
       ;; Should not change count of tabs
       ;; but make existing tab active
       (rf/dispatch [::sut/add {:id "test"}])
       (match @tabs #(= 2 (count %)))
       (match @tabs
              [{:id "test" :active true}
               {:id "another tab" :active nil?}])))

   (testing "Tab select"
     (rf/dispatch [::sut/select {:id  "test"}])
     (match @tabs
            [{:id "test" :active true}
             {:id "another tab" :active nil?}]))))
