(ns undefhir.utils-test
  (:require [undefhir.utils :as sut]
            [matcho.core :as matcho]
            [test-db :as tdb]
            [clj-pg.honey :as pg]
            [clojure.test :refer :all]))

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

  )

