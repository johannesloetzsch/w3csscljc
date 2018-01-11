(ns w3csscljc.features.ajax+markdown.core
  (:require [ajax.core :refer [GET]]
            [markdown.core :refer [md->html]]
            [domina :as dom]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(defn GETmd->innerHTML [url id]
  (GET url {:handler (fn [result]
                         (if result
                             (->> result
                                  md->html
                                  (set! (.-innerHTML (dom/by-id id))))))}))

(defn md-container [url id]
  [:div {:id id
         :onload (GETmd->innerHTML url id)}])
