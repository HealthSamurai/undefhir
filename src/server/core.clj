(ns server.core
  (:require [clojure.java.io :as io]
            [route-map.core :as rm]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.params :refer [wrap-params]]
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
                      {:path (.getPath file)
                       :isDirectory (.isDirectory file)})))
        {})))

(defn workspace [req]
  {:status 200
   :body (file-tree "test")})

(defn read-file [req]
  {:status 200
   :body {:file-content (slurp (io/file (get-in req  [:params "file"])))}})

(defn write-file [req]
  {:status 200
   :body {:file-content (slurp (io/file (get-in req  [:params "file"])))}})

(def routes
  {"api" {"v1" {"workspace" {:GET workspace
                             "file" {:GET read-file
                                     :POST write-file}}}}})

(defn handler [{meth :request-method uri :uri :as req}]
  (if-let [res (rm/match [meth uri] routes)]
    ((:match res)  (update-in req [:params] merge (:params req)))
    {:status 404 :body {:error  "Not found"}}))

(def app
  (-> handler
      wrap-params
      wrap-json-response
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :put :post :delete])))

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
