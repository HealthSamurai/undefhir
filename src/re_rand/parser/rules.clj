;; Copyright (c) James Reeves. All rights reserved.
;; The use and distribution terms for this software are covered by the Eclipse
;; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php) which
;; can be found in the file epl-v10.html at the root of this distribution. By
;; using this software in any fashion, you are agreeing to be bound by the
;; terms of this license. You must not remove this notice, or any other, from
;; this software.

;; re-rand.parser.rules:
;;
;; Rules to parse a regular expression into a series of string generating
;; functions.

(ns re-rand.parser.rules
  (:use re-rand.parser.tools)
  (:use [clojure.set :only (difference)]))

(defn abs [x]
  (max x (- x)))

(defn hash-rnd [h i]
  (abs (+ h (or i 1))))

(defn rnd-choice
  [coll & [base i]]
  (let [v (vec coll)
        h (hash base)]
    (fn [coll & [base i]]
      (v (rem (hash-rnd h i) (count v))))))

(defn take-fn
  [n f] (take n (repeatedly f)))

(defn rnd-seq
  [f min max]
  (take-fn (+ (rand-int (- (inc max) min)) min) f))

(defn parse-int
  [n]
  (Integer/parseInt n))

(defn char-range
  [from to]
  (map char
    (range (int (first from))
           (inc (int (first to))))))

(def digits
  (char-range "0" "9"))

(def whitespace
  " \t\n\f\r")

(def alphanumeric
  (concat
    (char-range "A" "Z")
    (char-range "a" "z")
    digits))

(def valid-any-chars
  (concat
    alphanumeric
    "_-/+*=%()[]{}!?:;,. \t\n"))

(defn invert
  "Return a set of characters that do not contain any of chars."
  [chars]
  (difference (set valid-any-chars) (set chars)))

(defn first-if-single
  "If a collection has only one item, return that item."
  [coll]
  (if (next coll)
    coll
    (first coll)))

(defn combine-groups
  "Combine tokens into groups, using a function to determine how to merge two
  adjacent groups."
  [merge-func tokens]
  (reduce
    (fn [groups token]
      (if (vector? token)
        (apply vector
          (str (groups 0) (token 0))
          (merge-func (subvec groups 1) (subvec token 1)))
        (assoc groups 0
          (str (groups 0) token))))
    [""]
    tokens))

(def repeat-limit 20)

(def literal
  (attach
    (match #"[^\\{}.+*()\[\]^$]")
    (fn [x & [i]] (constantly x))))

(def any-char
  (attach
    (match #"\.")
    (fn [_ & [i]] #(rnd-choice valid-any-chars))))

(defn sequence-of-chars
  [src & [ i]]
  ;;(println "==========>>> " i)
  (let [f (match #"((\\.|[^\^\-\[\]\\])+)([^-]|$)")]
    (if-let [[[_ m _ s] src] (f src)]
      [(.replace m "\\" "")
       (str s src)])))

(def range-of-chars
  (attach
    (match #"(\\.|[^\^\-\[\]\\])-(\\.|[^\^\-\[\]\\])")
    (fn [[_ from to] & [i]] (char-range from to))))

(defn get-char-list
  [char-groups invert?]
  (let [chars (apply concat char-groups)]
    (if invert?
      (invert chars)
      chars)))

(defn char-class [base]
  (attach
    (series
      (match #"\[")
      (match #"\^?")
      (many (choice sequence-of-chars range-of-chars))
      (match #"\]"))
    (fn [[a invert? char-groups b] & [i]]
      (let [chars (get-char-list char-groups (seq invert?))]
        #((rnd-choice chars base i) chars base i)))))

(declare pattern)

(defn pattern [base]
  (attach (many (choice (char-class base)))
    (fn [fs i]
      #(combine-groups into (map (fn [f] (f)) fs)))))
