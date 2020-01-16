(ns bxb.mutate.sql
  (:require [honeysql.core    :as hsql]
            [bxb.misc :as misc]))

(defn resolve-path [path src]
  (mapv (fn [pt] (pt src))
        path))

(defn const-fn [constant]
  (constantly ((if (keyword? constant) name str) constant)))

(defn search-fn [path value]
  (fn [src]
    {:select [[(hsql/call :-  (hsql/inline :ordinality) (hsql/inline 1)) :idx]]
     :from   [[(hsql/call :jsonb_array_elements
                          (hsql/call "#>" src (resolve-path path src))) "WITH ORDINALITY"]]
     :where  ["@>" :value value]}))

(defn map-fn [src-path dest-path mutations]
  (fn [src dest] dest)) ; TODO

(defn get-fn [path]
  (fn [src dest]
    (hsql/call
     "#>"
     src
     (resolve-path path src))))

(defn assoc-fn [path get-value]
  (fn [src dest]  ; TODO: replace arrays, reassign on scalars
    (loop [path   (resolve-path path src)
           result (get-value src dest)]
      (if-let [lp (peek path)]
        (let [path (pop path)]
          (recur path
                 (hsql/call :jsonb_set
                            (if (seq path)
                              (hsql/call :coalesce
                                         (hsql/call "#>" src path)
                                         (hsql/raw "'{}'::jsonb"))
                              dest)
                            (hsql/call :arr [lp])
                            (hsql/call :cast result :jsonb))))
        result))))

(defn dissoc-fn
  ([path]
   (fn [src dest] ; TODO: Remove [], {} and [{}]
     (hsql/call
      "#-"
      dest
      (resolve-path path dest))))
  ([path value]
   (dissoc-fn path))) ; TODO: match dissocing value with provided

(def fns
  {:const-fn  const-fn
   :search-fn search-fn
   :map-fn    map-fn
   :get-fn    get-fn
   :assoc-fn  assoc-fn
   :dissoc-fn dissoc-fn})
