(ns undefhir.template-test
  (:require [undefhir.template :as sut]
            [test-db :as tdb]
            [jute.core :as jute]
            [matcho.core :as matcho]
            [clojure.test :refer :all]))

(tdb/ensure-db)
(def db (tdb/get-db))

(deftest fns

  (def f (sut/compile-fn {:$body "fffffoo"}))
  (def p (sut/compile-fn {:$fn ["f" "a" "b"]
                          :$body
                          {:f "$ f()"
                           :a "$ a"
                           :foo "$ randFoo()"
                           :b "$ b"}}))

  (def c (jute/compile {:result "$ fns.p(fns.f, 12, \"23\")"}))
  (c {:fns {:p p :f f}})



  (def tpl {:$let {:fns {:myFn1 {:$fn [] :$body "foo"}}}
            :$body {:result "$ fns.myFn1()"}})

  (def c (jute/compile tpl))

  (c {})

  )

(deftest template
  (testing "Primitive"
    (def c (sut/compile-template {:literal {:foo "bar"}}))
    (matcho/match
     (c {:mar "tar"})
     {:foo "bar"})


    (def c (sut/compile-template {:literal {:foo {:$call "rand-nth" :$args [[1 2]]}}}))
    (matcho/match
     (c {:rand-nth rand-nth
         :mar "tar"})
     {:foo #(or (= 1 %) (= 2 %))}))

  (testing "Advanced"
    (def c
      (sut/compile-template
       {:literal {:resoruce {:gender "$ randNth(dictionary.fhirGender)"}}}))

    (c {:dictionary {:fhirGender ["male", "female", "other", "unknown"]}
        :resource {:gender "male"
                   :birthDate "1980-05-17"}})

    (matcho/match
     (c {:rand-nth rand-nth
         :dictionary {:fhir-gender ["male", "female", "other", "unknown"]}
         :resource {:gender "male"
                    :birthDate "1980-05-17"}})
     {:foo "bar"})

    )

  )
