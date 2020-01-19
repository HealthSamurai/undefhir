(ns bxb.core-test
  (:require [clojure.test      :refer [deftest is testing]]
            [clojure.java.jdbc :as jdbc]
            [clj-yaml.core :as yaml]
            [cheshire.core :as json]
            [pg.core :as pg]
            [jute.core :as jute]
            [clj-pg.honey :as db]
            [matcho.core :as matcho]
            [clojure.java.io :as io]))

(deftest hash
  (time (doseq [i (range 1000000)] (re-rand.core/re-hash "123456789")))
  (time (doseq [i (range 1000000)] (re-rand.core/re-hash "a861ec3c-6c69-467e-8ff5-f907007ac276")))


  (println (re-rand.core/re-hash "1: A/ a!Ф@ы" "1"))
  (println (re-rand.core/re-hash "1: A/ a!Ф@ы" "2"))
  (println (re-rand.core/re-hash "1: A/ a!Ф@ы" "3"))
  (println (re-rand.core/re-hash "1: A/ a!Ф@ы" "foo1"))

  (println (re-rand.core/re-hash "12345678"))
  (println (re-rand.core/re-hash "12 34 5678" "marat"))
  (println (re-rand.core/re-hash "1234 56788383-12" "niquola"))
  (println (re-rand.core/re-hash "12345678" "viktor"))

  ((jute/compile (yaml/parse-string (slurp (io/resource "HumanName.yaml")))) {:fn rand-nth
                                                                              :dict {:animals ["Dog" "Rabbit" "Bird"]
                                                                                     :colors ["white" "blue"]}
                                                                              :name {:family "Testov"
                                                                                     :given ["Test" "Testovich"]}})

  ((jute/compile (yaml/parse-string (slurp (io/resource "ContactPoint.yaml")))) {:anonEmail (fn [] "random@email.com") 
                                                                                 :anonPhone (fn [] "88005553555")
                                                                                 :dict {:animals ["Dog" "Rabbit" "Bird"]
                                                                                        :colors ["white" "blue"]}
                                                                                 :telecom {:value "testov@mail.com"
                                                                                           :system "email"}})

  #_(deftest bxb
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


      ))
