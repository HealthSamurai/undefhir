(ns bxb.core
  (:require [bxb.sanitize :refer :all]))

(defn process [spec]
  (println "-----------------------------------------------")
  (println " Run sanitizing")
  (println "-----------------------------------------------")

  (let [skip (skip-list spec)]
    (if (:truncate-history spec)
      (truncate-history skip)
      (println "Truncate history skipped"))

    (if-let [names (:truncate-tables spec)]
      (truncate names)
      (println "Truncate tables skipped"))

    (when-let  [l (:leave spec)]
      (leave l))

    (when-let  [an (:anon spec)]
      (anonymify spec skip))
    (println "-----------------------------------------------")
    (println " Done")
    (println "-----------------------------------------------")

    ))

(comment
  (hash-id "DoctorProf_1.2.643.5.1.13.13.12.2.21.1550_1187")
  )

(def mutate-pt
  (mk-anon-fn :Patient {:Patient {:birthDate :rnd-birthDate
                                  :name      :rnd-humanName
                                  :telecom   :rnd-telecom}}))
(def pt-pipe
  #(-> % anon-row mutate-pt))

(comment
  (pt-pipe {:id "12" :resource {}})

  (bxb.pipe/piped-loader bxb.sanitize/db-spec "select * from patient" pt-pipe "tmp_patient")

  )
