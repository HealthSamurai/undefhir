(ns  bxb.unfolder
  (:require [instaparse.core :as insta]
            [clojure.core.logic :as l]
            [clojure.set :refer [union difference]]))

(def parse-regexp (insta/parser 
             "re = union | simple-re?
             union = re '|' simple-re
             simple-re = concat | base-re
             concat = simple-re base-re
             base-re = elementary-re | star | plus
             star = elementary-re '*'
             plus = elementary-re '+'
             elementary-re = group | char | '$' | any | set
             any = '.'
             group = '(' re ')'
             set = positive-set | negative-set
             positive-set = '['  set-items ']'
             negative-set = '[^' set-items ']'
             set-items = set-item*
             set-item = range | char
             range = char '-' char
             char = #'[^\\\\\\-\\[\\]]|\\.'" ))

(def printables (set (map char (range 32 127))))

(declare fns handle-first)

(defn handle-tree [q qto [ type & nodes]]
  (if (nil? nodes)
    [[q [""] qto]]
    ((fns type handle-first) q qto nodes)))

(defn star [q qto node & _]
  (cons [q [""] qto]
         (handle-tree q q (first node))))

(defn plus [q qto node & _ ] 
  (concat (handle-tree q qto (first node))
          (handle-tree qto qto (first node))))

(defn any-char [q qto & _] [[q (vec printables) qto]] )

(defn char-range [[c1 _ c2]]
  (let [extract-char (comp int first seq second)]
    (set (map char (range (extract-char c1) (inc (extract-char c2)))))))

(defn items [nodes]
  (union (mapcat
    (fn [[_ [type & ns]]]
      (if (= type :char)
        #{(first ns)}        
        (char-range ns)))
    (rest (second nodes)))))

(defn handle-set [q qto node & _] [[q (vec (items node)) qto]])

(defn handle-negset [q qto node & _] [[q (vec (difference printables (items node))) qto]])

(defn handle-char [q qto node & _] [[q (vec node) qto]] )

(defn handle-concat [q qto nodes] 
  (let [syms (for [x  (rest nodes)] (gensym q))]
    (mapcat handle-tree  (cons q syms) (concat syms [qto] ) nodes)
  ))

(defn handle-first [q qto [node & _]] (handle-tree q qto node))

(def fns {:concat handle-concat, :star star, :plus plus, :any any-char, :positive-set handle-set, :negative-set handle-negset, :char handle-char})

(defn parse-to-fsm [regex]
  (handle-tree 'q0 'ok (parse-regexp regex)))

(l/defne transition-membero
  [state trans newstate otransition]
  ([_ _ _ [state trans-set newstate]]
     (l/membero trans trans-set)))
 
(defn transitiono [state trans newstate transitions]
  (l/conde
   [(l/fresh [f] 
             (l/firsto transitions f)
             (transition-membero state trans newstate f))]
   [(l/fresh [r]
             (l/resto transitions r)
             (transitiono state trans newstate r))])
  )

(declare transitions)
 
;; Recognize a regexp finite state machine encoded in triplets [state, transition, next-state], adapted from a snippet made by Peteris Erins

(defn recognizeo
  ([input]
     (recognizeo 'q0 input))
  ([q input]
     (l/matche [input] ; start pattern matching on the input
        (['("")]
           (l/== q 'ok)) ; accept the empty string if we are in an accepting state
        ([[i . nput]]
           (l/fresh [qto]
                  (transitiono q i qto transitions) ; assert it must be what we transition to qto from q with input symbol i
                  (recognizeo qto nput)))))) ; recognize the remainder
 

(defn -unfold [regex] 
  (def transitions 
    (reverse ; recognizeo starts from 'ok, thus reversing the transitions makes it ~4 times faster
     (parse-to-fsm regex)))
  (map (partial apply str) (l/run* [q] (recognizeo q))))


(comment
  (-unfold #"[A-Z]{4}")

  )
