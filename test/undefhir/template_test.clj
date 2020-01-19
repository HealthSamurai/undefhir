(ns undefhir.template-test
  (:require [undefhir.template :as sut]
            [matcho.core :as matcho]
            [clojure.test :refer :all]))

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
