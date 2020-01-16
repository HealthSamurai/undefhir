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

(defn *char-range
  [from to]
  (map char
    (range (int (first from))
           (inc (int (first to))))))

(def magic-ids
  {\1 (vec (*char-range "A" "Z"))
   \2 (vec (*char-range "a" "z"))
   \3 (vec (*char-range "1" "9"))
   \4 (vec (*char-range "А" "Я"))
   \5 (vec (*char-range "а" "я"))})

(defn *abs [x] (max x (- x)))
(defn *hash-rnd [h i] (*abs (+ h (or i 1))))

(defn *rnd-choice
  [h tp i]
  (if (coll? tp)
    (tp (rem (*hash-rnd h i) (count tp)))
    tp))

(defn *hash [p base]
  (let [h (hash base)]
    (loop [s "", i 0, [t & rst] p]
      (if (or t rst)
        (recur (str s (*rnd-choice h t i) ) (inc i) rst)
        s))))

(defn tpl [s]
  (reduce
   (fn [acc ch]
     (let [code (int ch)]
       (cond
         (and (>= code 65) (<= code 90))
         (conj acc (magic-ids \1))
         (and (>= code 97) (<= code 122))
         (conj acc (magic-ids \2))
         (and (>= code 48) (<= code 57))
         (conj acc (magic-ids \3))
         (and (>= code 1040) (<= code 1071))
         (conj acc (magic-ids \4))
         (and (>= code 1072) (<= code 1103))
         (conj acc (magic-ids \5))
         :else
         (conj acc ch))))
   [] s))

(defn *re-hash [s & [salt]]
  (*hash (tpl s) s))

(comment
  (tpl "123:qwe")
  (*re-hash "12AабZ 34")
  )
