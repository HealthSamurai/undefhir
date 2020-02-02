(ns server.core
  (:require [clojure.java.io :as io]
            [clojure.string :as str])
  (:import [java.io File]))

(defn path-split [file]
  (str/split (.getPath file) (re-pattern File/separator)))

(defn mk-tree-path [pth]
  (mapcat (partial conj [:child]) pth))

(defn file-tree [base-path]
  (->> base-path io/file file-seq
       (reduce
        (fn [acc file]
          (let [path (path-split file)]
            (assoc-in acc
                      (mk-tree-path path)
                      {:isDirectory (.isDirectory file)})))
        {})))

(comment
  (clojure.pprint/pprint (file-tree "src")))
