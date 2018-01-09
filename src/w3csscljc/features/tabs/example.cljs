(ns w3csscljc.features.tabs.example
  (:require [w3csscljc.features.tabs.simple :refer [->tabs]]
            [hiccups.runtime :as hiccupsrt]
            [domina :as dom]
            [domina.css :as css])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(defn example-hiccup []
  (let [tabs {:class "tab-main"
              :tabs [{:id "tab-main-1"
                      :title "first"
                      :content "1"}
                     {:id "tab-main-2"
                      :title "second"
                      :content "2"}
                     {:id "tab-main-3"
                      :title "third"
                      :content "3"}]}]
       (->tabs tabs)))

(defn example-page []
  (dom/set-text! (css/sel "body") "")
  (dom/append! (css/sel "body") (html (example-hiccup))))
