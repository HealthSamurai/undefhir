(ns undefhir.dictionary-test
  (:require [undefhir.utils :as sut]
            [matcho.core :as matcho]
            [test-db :as tdb]
            [clj-pg.honey :as pg]
            [clojure.test :refer :all]))


;; TODO: add  build_in  ndjons

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

  (def d {:file "test/resources/loader_test.txt"})
  (matcho/match
   (sut/load-dictionary db d)
   ["foo" "bar"])

  (def d {:query "select t from ttl;"})
  (matcho/match
   (sut/load-dictionary db d)
   [1 2 3 4 5])

  (def d {:literal ["blue" "red"]})
  (matcho/match
   (sut/load-dictionary db d)
   ["blue" "red"])

  (matcho/match
   (sut/build-query ["fooo ?" "bar"] {:mar [3] :bar [1 2]})
   ["fooo ?" [1 2]])

  (pg/query db ["select t from ttl where t = any (?)"  [1 2]  ])

  (matcho/match
   (sut/load-dictionaries
    db
    [{:name "file"
      :file "test/resources/loader_test.txt"}
     {:name "oneof"
      :literal [1 5]}
     {:name "sql"
      :query ["select t from ttl where t  = any (?)" "oneof"]}] )
   {:file ["foo" "bar"], :oneof [1 5], :sql [1 5]}))


(comment

  {:dictionary [{:name "file"
                 :file "test/resources/loader_test.txt"}
                {:name "oneof"
                 :literal [1 5]}
                {:name "sql"
                 :query ["select t from ttl where t in ?" "oneof"]}]}


  )
