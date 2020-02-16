(ns server.core
  (:require [clojure.java.io :as io]
            [route-map.core :as rm]
            [cheshire.core :as json]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json :refer [wrap-json-response]]
            [org.httpkit.server :as server]
            [clojure.string :as str])
  (:import [java.io File]))

(defn path-split [file-path]
  (str/split file-path (re-pattern File/separator)))

(defn mk-tree-path [pth]
  (mapcat (partial conj [:child]) pth))

(defn file-tree [base-path]
  (->> base-path io/file file-seq rest
       (reduce
        (fn [acc file]
          (let [file-path (str/replace  (.getPath file) (re-pattern base-path) "")
                path (path-split file-path)]
            (assoc-in acc
                      (mk-tree-path path)
                      {:path file-path 
                       :isDirectory (.isDirectory file)})))
        {:root base-path})))

(defn workspace [{:keys [root] :as ctx}]
  (fn [req]
    {:status 200
     :body (file-tree root)}))

(defn read-file [{:keys [root] :as ctx}]
  (fn [req]
    {:status 200
     :body {:file-content (slurp (io/file (str root (get-in req  [:params "file"]))))}}))

(defn create-file [{:keys [root] :as ctx}]
  (fn [req]
    (let [body  (json/parse-string (slurp (:body req)) keyword)
          resp (spit (str root (:file-path body)) "" )]
      {:status 200
       :body {:status "ok"}})))

(defn write-file [{:keys [root] :as ctx}]
  (fn [req]
    (let [body  (json/parse-string (slurp (:body req)) keyword)
          resp (spit (str root (:file-path body)) (:file body) )]
      {:status 200
       :body {:status "ok"}})))

(def ctx
  {:root "test/resources/sample/"})

(def routes
  {"api" {"v1" {"workspace" {:GET (workspace ctx)
                             :POST (create-file ctx)
                             "file" {:GET (read-file ctx)
                                     :POST (write-file ctx)}}}}})

(defn handler [{meth :request-method uri :uri :as req}]
  (if-let [res (rm/match [meth uri] routes)]
    ((:match res)  (update-in req [:params] merge (:params req)))
    {:status 404 :body {:error  "Not found"}}))

(defn preflight
  [{meth :request-method hs :headers :as req}]
  (let [headers (get hs "access-control-request-headers")
        origin (get hs "origin")
        meth  (get hs "access-control-request-method")]
    {:status 200
     :headers {"Access-Control-Allow-Headers" headers
               "Access-Control-Allow-Methods" meth
               "Access-Control-Allow-Origin" origin
               "Access-Control-Allow-Credentials" "true"
               "Access-Control-Expose-Headers" "Location, Transaction-Meta, Content-Location, Category, Content-Type, X-total-count"}}))

(defn allow [resp req]
  (let [origin (get-in req [:headers "origin"])]
    (update resp :headers merge
            {"Access-Control-Allow-Origin" origin
             "Access-Control-Allow-Credentials" "true"
             "Access-Control-Expose-Headers" "Location, Content-Location, Category, Content-Type, X-total-count"})))


(defn mk-handler [dispatch]
  (fn [req]
    (if (= :options (:request-method req))
      (preflight req)
      (let [resp (dispatch req)]
        (-> resp (allow req))))))

(def app
  (-> handler
      mk-handler
      wrap-params
      wrap-json-response))

(defonce state (atom nil))

(defn stop-server []
  (when-not (nil? @state)
    (@state :timeout 100)
    (reset! state nil)))

(defn start-server []
  (reset! state (server/run-server app {:port 9090})))

(defn restart-server [] (stop-server) (start-server))

(comment
  (restart-server)
  (clojure.pprint/pprint (file-tree "src")))
