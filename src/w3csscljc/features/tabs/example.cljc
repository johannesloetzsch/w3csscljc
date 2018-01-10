(ns w3csscljc.features.tabs.example
  (:require [w3csscljc.features.tabs.simple :refer [->tabs]]))

(defn tabs-example []
  (->tabs {:class "tab-example"
           :tabs [{:id "tab-example-1"
                   :title "first"
                   :content "1"}
                  {:id "tab-example-2"
                   :title "second"
                   :content "2"}
                  {:id "tab-example-3"
                   :title "third"
                   :content "3"}]}))
