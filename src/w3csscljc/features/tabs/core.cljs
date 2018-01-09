(ns w3csscljc.features.tabs.core
  (:require [domina :as dom]))

(defn ^:export openTab [cl id]
  (dom/set-style! (dom/by-class cl) "display" "none")
  (dom/set-style! (dom/by-id id) "display" "block"))
