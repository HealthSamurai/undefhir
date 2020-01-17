(ns undefhir.utils-test
  (:require [undefhir.utils :as sut]
            [matcho.core :as matcho]
            [clojure.test :refer :all]))

(deftest dictionary-loader
  (def d {:file "test/resources/loader_test.txt"})

  (matcho/match
   (sut/load-dictionary d)
   ["foo" "bar"])


  )

