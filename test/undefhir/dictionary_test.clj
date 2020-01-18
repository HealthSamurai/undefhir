(ns undefhir.dictionary-test
  (:require [undefhir.dictionary :as sut]
            [matcho.core :as matcho]
            [test-db :as tdb]
            [clj-pg.honey :as pg]
            [clojure.test :refer :all]))

;; ndjons

(tdb/ensure-db)
(def db (tdb/get-db))

(defn test-fxt [f]
  (pg/execute db "
create table  if not exists ttl (t int); 
insert into ttl select i from  generate_series(1,5) as i; ")
  (f)
  (pg/execute db "drop table  ttl;"))

(use-fixtures :once test-fxt)

(deftest dictionary-loader
  (testing "Plain text"
    (def d {:file "test/resources/loader_test.txt"})
    (matcho/match
     (sut/load-dictionary db d)
     ["foo" "bar"]))


  (testing "CSV format"
    (def d {:csv "test/resources/dictionary/color.csv"})
    (matcho/match
     (sut/load-dictionary nil d)
     [["red"] ["green"] ["blue"]])


    (def d {:csv "test/resources/dictionary/color.csv"
            :format {:headers true}})
    (matcho/match
     (sut/load-dictionary nil d)
     [{"red" "green"} {"red" "blue"}])


    (def d {:csv "test/resources/dictionary/complex.csv"
            :format {:headers true}})
    (matcho/match
     (sut/load-dictionary nil d)
     [{"foo" "1" "bar" "2"}
      {"foo" "3" "bar" "4"}]))

  (testing "build-in"
    (def d {:build-in "names"})
    (matcho/match
     (sut/load-dictionary db d)
     ["Ivan" "Nikolay" "Marat"]))

  (testing "yaml"
    (def d {:yaml "test/resources/dictionary/color.yaml"})
    (matcho/match
     (sut/load-dictionary db d)
     ["Green" "Blue"]))


  (testing "query"
    (def d {:query "select t from ttl;"})
    (matcho/match
     (sut/load-dictionary db d)
     [1 2 3 4 5])

    (matcho/match
     (sut/build-query ["fooo ?" "bar"] {:mar [3] :bar [1 2]})
     ["fooo ?" [1 2]]))

  (testing "literal"
    (def d {:literal ["blue" "red"]})
    (matcho/match
     (sut/load-dictionary db d)
     ["blue" "red"]))


  (testing "multiple"
    (matcho/match
     (sut/load-dictionaries
      db
      [{:name "file"
        :file "test/resources/loader_test.txt"}
       {:name "oneof"
        :literal [1 5]}
       {:name "sql"
        :query ["select t from ttl where t  = any (?)" "oneof"]}] )
     {:file ["foo" "bar"], :oneof [1 5], :sql [1 5]})))
