(ns re-rand.core)

(defn char-range
  [from to]
  (map char
    (range (int (first from))
           (inc (int (first to))))))

(def magic-ids
  {\1 (count (vec (char-range "A" "Z")))
   \2 (vec (char-range "a" "z"))
   \3 (vec (char-range "1" "9"))
   \4 (vec (char-range "А" "Я"))
   \5 (vec (char-range "а" "я"))})

(defn abs [x] (max x (- x)))
(defn hash-rnd [h i] (abs (+ h (or i 1))))

(defn rnd-choice
  [h magic-id i]
  (if-let [v (magic-ids magic-id)] 
    (v (rem (hash-rnd h i) (count v)))
    magic-id))

(defn get-magic-id [ch]
  (let [code (int ch)]
    (cond
      (and (>= code 65)   (<= code 90))        \1
      (and (>= code 97)   (<= code 122))       \2
      (and (>= code 48)   (<= code 57))        \3
      (and (>= code 1040) (<= code 1071))      \4
      (and (>= code 1072) (<= code 1103))      \5
      :else ch)))

(defn re-hash [base & [salt]]
  (let [h (hash base)]
    (loop [s "", i 0, [t & rst] base]
      (if (or t rst)
        (recur (str s  (rnd-choice h (get-magic-id t) i)) (inc i) rst)
        s))))
