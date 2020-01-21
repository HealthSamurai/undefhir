(ns undefhir.functions
  (:require
   [clojure.data.generators :as gen]
   [undefhir.utils :as uu]))

(defn rand-birthDate []
  (.format
   (java.text.SimpleDateFormat. "yyyy-MM-dd")
   (gen/date #inst "1990-01-16T00:00:00.000-00:00")))

(defn rand-email []
  (str (uu/rand-str 7) "@" (uu/rand-str 4) "." (rand-nth ["ru" "com" "net" "io"])))

(defn rand-phone []
  (uu/rand-nmb 10))

(def root-fns
  "Preset of build-in functions"
  {:randBirthDate rand-birthDate
   :randEmail rand-email
   :randPhone rand-phone})
