
(ns re-rand.parser.tools)

(defn match
  "Create a rule to match a regular expression."
  [re]
  (fn [src & [i]]
    (let [m (re-matcher re src)]
      (if (.lookingAt m)
        [(re-groups m)
         (.substring src (.end m))]))))

(defn observe
  "Creates a rule, but doesn't reduce the source if it matches."
  [re]
  (let [f (match re)]
    (fn [src]
      (let [[m _] (f src)] 
        [m src]))))

(defn attach
  "Attach a function to transform the result of a rule."
  [rule f]
  (fn [src & [i]]
    (if-let [[grps src] (rule src i)]
      (do
        ;(println "f: " f)
        ;(println "i: " i)
        ;(println "frps: " grps)
        [(f grps i) src]))))

(defn series
  "Create a new rule out of a series of individual rules."
  [& rules]
  (fn [src & [i]]
    (reduce
      (fn [[xs s] rule]
        (if (seq s)
          (if-let [[x s] (rule s)]
            [(conj xs x) s])))
      [[] src]
      rules)))

(defn choice
  "Create a new rule by returning the first rule that matches."
  [& rules]
  (fn [src & [i]]
    ;;(println "i: " i)
    (some
      (fn [rule] (rule src i))
      rules)))

(defn many
  "Match zero or more for a rule."
  [rule]
  (fn [src & _]
    (loop [xs [], src src , i 0]
      ;;(println "i: " i)
      ;;(println "rule: " rule)
      (if-let [[x src] (rule src i)]
        (recur (conj xs x) src (inc i))
        [xs src]))))

(defmacro forward
  "Use a rule from a var that has yet to be defined."
  [rule]
  `(fn [src#] (~rule src#)))
