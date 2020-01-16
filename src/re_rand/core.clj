(ns re-rand.core
  (:use re-rand.parser.rules))

(defn re-rand
  "Returns a random string that matches the regular expression."
  [re base]
  (let [[generator not-matched] ((pattern base) re)]
    (if (empty? not-matched)
      (first-if-single (generator)))))


(defn into-regex [string]
  (reduce
   (fn [acc ch]
     (let [code (int ch)]
       (cond
         (and (>= code 65) (<= code 90))
         (str acc "[A-Z]")
         (and (>= code 97) (<= code 122))
         (str acc "[a-z]")
         (and (>= code 48) (<= code 57))
         (str acc "[1-9]")
         (and (>= code 1040) (<= code 1071))
         (str acc "[А-Я]")
         (and (>= code 1072) (<= code 1103))
         (str acc "[а-я]")
         :else
         (str acc ch))))
   ""
   string))

(defn re-hash [s]
  (re-rand (into-regex s) s))


(comment
  (re-hash "12ЯабZ 34")
  
  )
