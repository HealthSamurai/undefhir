(ns undefhir.template-test
  (:require [undefhir.template :as sut]
            [test-db :as tdb]
            [jute.core :as jute]
            [matcho.core :as matcho]
            [clj-yaml.core :as yaml]
            [clojure.test :refer :all]
            [clojure.java.io :as io]))

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
    (def tmpl (yaml/parse-string (slurp (io/resource "HumanName.yaml"))))

    (assoc-in dbg [:fns (first (keys tmpl))] (get (update-in tmpl [(first (keys tmpl)) :$fn] vec) (first (keys tmpl))))

    (def dbg {:dictionary {:foo "fooo"}
              :fns
              {:debug
               {:$fn ["Patient"]
                :$body {:$if "$ Patient.use" :$then {:foo "$ Patient.use"}}}}})

    (sut/debug {:manifest (assoc-in dbg [:fns (first (keys tmpl))] (get (update-in tmpl [(first (keys tmpl)) :$fn] vec) (first (keys tmpl))))
                :function "randHumanName"
                :dictionary {:colors ["blue" "white"]}
                :input [[{:family "foo" :given [3]} {:family "foo" :given [3]}]]})

    ))

(comment

  (def tmpl (yaml/parse-string (slurp (io/resource "HumanName.yaml"))))

  )
