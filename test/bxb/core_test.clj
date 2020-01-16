(ns bxb.core-test
  (:require [clojure.test      :refer [deftest is testing]]
            [clojure.java.jdbc :as jdbc]
            [cheshire.core :as json]
            [pg.core :as pg]
            [clj-pg.honey :as db]
            [matcho.core :as matcho]
            [bxb.utils :as u]
            [bxb.core          :as sut]))

(deftest hash
  (time (doseq [i (range 10000)] (u/hash-id "123456789")))

  (u/hash-id "1234567")

  (re-rand.core/into-regex 123)

  )


(deftest bxb
  (bxb.sanitize/connect-db)

  (def email-test-data (assoc-in (db/query-first @bxb.sanitize/db "select * from patient limit 1") [:resource :telecom 0 :system] "email"))

  (def spec

    {:truncate-history true                                                      ;; If true - truncate history of data tables (skip meta tables and 'skip' specified)
     :skip             [:CodeSystem :Concept :Organization :Practitioner :PractitionerRole]  ;; Do nothing with this resources
     :truncate-tables  [:Transaction :IntegrationQueue :Session]

     ;;:leave {:Patient "identifier.#(system =  \"urn:identity:enp:Patient\" and value in (\"1651985062584760\", \"2167250889000119\", \"2150630846000030\", \"2152410818000161\", \"2152240829000169\") )'"}

     ;; If present - delete all data than does not match to given JSquery selector

     :leave {:Patient "identifier.#(system =  \"urn:identity:enp:Patient\" and value in (\"2177170831000058\") )"}


     :anon {:Patient {:birthDate :rnd-birthDate
                      :name      :rnd-humanName
                      :telecom   :rnd-telecom}}})

  (sut/process spec)

  (def anon-fn (sut/mk-anon-fn :Patient spec))

  (def patient-data (db/query-first @sut/db "select * from patient limit 1"))

  (matcho/match
   (anon-fn email-test-data)


   {:resource {:name [{:family "foo" :given ["1" "2"]}]
               :birthDate "1991-11-08"
               :telecom [{:system "phone" :value "9444444444"}]}})


  #_(matcho/match
   (sut/into-regex "1a2b3 c4d5E Z")
   "[1-9][a-z][1-9][a-z][1-9] [a-z][1-9][a-z][1-9][A-Z] [A-Z]")


  )
