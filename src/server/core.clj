(ns server.core
  (:require [clojure.java.io :as io]
            [route-map.core :as rm]
            [ring.middleware.json :refer [wrap-json-response]]
            [org.httpkit.server :as server]
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

(defn workspace [req]
  {:status 200
   :body (file-tree "src")})

(def routes
  {"workspace"  {:GET workspace}})

(defn handler [{meth :request-method uri :uri :as req}]
  (if-let [res (rm/match [meth uri] routes)]
    ((:match res)  (update-in req [:params] merge (:params req)))
    {:status 404 :body {:error  "Not found"}}))

(def app 
  (-> handler
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
