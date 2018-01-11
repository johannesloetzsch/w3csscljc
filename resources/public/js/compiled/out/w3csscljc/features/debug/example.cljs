(ns w3csscljc.features.debug.example
  (:require [w3csscljc.features.debug.simple :refer [debug-div]]
            [w3csscljc.features.debug.core :refer [debug!]]))

(defn debug-example []
  (debug-div "debug"))

(defn debug-example-usage []
  (debug! "debug" "some debug message"))
