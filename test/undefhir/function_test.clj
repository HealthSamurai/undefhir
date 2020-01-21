(ns undefhir.function-test
  (:require [undefhir.function :as sut]
            [test-db :as tdb]
            [jute.core :as jute]
            [matcho.core :as matcho]
            [clojure.test :refer :all]))

(tdb/ensure-db)
(def db (tdb/get-db))

(deftest fns

  (def f (sut/compile-fn {:$body "fffffoo"}))
  (def p (sut/compile-fn {:$fn ["f" "a" "b"] :$body {:f "$ f()" :a "$ a" :b "$ b"}}))

  (def c (jute/compile {:result "$ fns.p(fns.f, 12, \"23\")"}))
  (matcho/match
   (c {:fns {:p p :f f}})
   {:result {:f "fffffoo" :a 12 :b "23"}})

  (def fns
    (sut/load-fns
     {:myFn1 {:desc "My super puper fn"
              :$body {:a "a" :b "b"}}
      :myFn2 {:$body {:foo "bar"}}}))

  (matcho/match
   ((jute/compile {:testMyFn1 "$ fns.myFn1()"
                   :testMyFn2 "$ fns.myFn2()"})
    {:fns fns})

   {:testMyFn1 {:a "a" :b "b"}
    :testMyFn2 {:foo "bar"}}))

(deftest debug
  (testing "Debug"
    (def dbg {:fns
              {:debug
               {:$body {:foo "bar"}}}})

    (sut/debug {:manifest dbg
                :output "yaml"
                :function "debug"})

    ))
