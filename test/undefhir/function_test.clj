(ns undefhir.function-test
  (:require [undefhir.function :as sut]
            [test-db :as tdb]
            [jute.core :as jute]
            [clojure.java.io :as io]
            [matcho.core :as matcho]
            [clojure.test :refer :all]))

(tdb/ensure-db)
(def db (tdb/get-db))

(deftest fns

  (def f (sut/compile-fn {:$body "fffffoo"}))
  (def p (sut/compile-fn {:$fn ["f" "a" "b"] :$body {:f "$ f()" :a "$ a" :b "$ b"}}))

  (def c (jute/compile {:result "$ fns.p(fns.f, 12, \"23\")"}))
  (matcho/match
   (c {:fns {:p p :f f}})
   {:result {:f "fffffoo" :a 12 :b "23"}})

  (def fns
    (sut/load-fns
     {:fns
      [{:name :myFn1
        :desc "My super puper fn"
        :$body {:a "a" :b "b"}}
       {:name :myFn2
        :$body {:foo "bar"}}]}))

  (matcho/match
   ((jute/compile {:testMyFn1 "$ fns.myFn1()"
                   :testMyFn2 "$ fns.myFn2()"})
    {:fns fns})

   {:testMyFn1 {:a "a" :b "b"}
    :testMyFn2 {:foo "bar"}}))

(deftest fns-from-file
  (def F (sut/compile-fn {:file (.getPath (io/resource "TestFunc.yaml"))}))
  (matcho/match (F) {:foo "bar"})

  (def withArgs (sut/compile-fn {:file (.getPath (io/resource "TestFunc2.yaml"))}))

  (matcho/match (withArgs "foo1") {:bar "foo1"})

  (def fns
    (sut/load-fns
     {:fns
      [{:name :superbFunc
        :file (.getPath (io/resource "TestFunc.yaml"))}]}))

  (matcho/match ((jute/compile {:testFunc "$ fns.superbFunc()"}) {:fns fns}) {:testFunc {:foo "bar"}})

  )

(deftest function-dict
  (def manifest
    {:dictionary
     [{:name :integers
       :literal [1 2 3 4 5]}]
     :fns
     [{:name :test
       :$body {:intarray "$ fns.dict(\"integers\")"}}]})

  (def fns (sut/load-fns manifest))

  (matcho/match
   ((:test fns))
   {:intarray [1 2 3 4 5]}))

(deftest debug
  (testing "Debug"
    (def dbg {:fns
              [{:name :debug
                :$body {:foo "bar"}}]})

    (sut/debug {:manifest dbg
                :output "yaml"
                :function "debug"})

    ))

(defn mk-path [path]
  (mapcat (fn [p] [:attr (keyword p)]) path))


(defn flat2tree [attrs]
  (reduce
   (fn [acc attr]
     (assoc-in acc (mk-path (:path attr)) attr))
   {}
   attrs))

(defn tree2fhir [tree]
  (reduce-kv
   (fn [acc k v]
     (assoc acc k (if (:attr v)
                    (if (:coll v)
                      [(tree2fhir v)]
                      (tree2fhir v))
                    (if (:coll v)
                      [(:type v)]
                      (:type v)))))
   {}
   (:attr tree)))

(comment

  (def f [{:path ["birthdate"] :type :date}
          {:path ["deceased"]}
          {:path ["deceased" "date"] :type :date}
          {:path ["contact"] :coll true}
          {:path ["contact" "name"]  :type :HumanName}
          {:path ["contact" "mar" "foo"]}
          {:path ["contact" "mar" "foo" "bar"] :type :HumanName}])

  (tree2fhir (flat2tree f))

  {:attr {:contact {:coll true
                    :attr {:name {:type :HumanName}}}}}

  ;; contact:
  ;;   $map: $ contact
  ;;   $as:  e
  ;;   $body:
  ;;     name: $ text (e.name)

  (def f [{:p ["info"] }
          {:p ["info" "name" :type :humanName]}])

  ;; info:
  ;;   name: $ text (info.name)


  )
