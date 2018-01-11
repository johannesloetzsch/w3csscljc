(ns w3csscljc.features.fixed-footer.example
  (:require [w3csscljc.features.fixed-footer.simple :refer [->fixed+footer]]))

(defn n*str [n s]
  (apply str (for [i (range n)] s)))

(defn fixed+footer-example []
  (->fixed+footer [:div {:style "height: 100%; overflow: scroll"
                         :class "w3-green"}
                        (n*str 100 "fixed content and scrolling inside of it … ")]
                  [:div {:class "w3-light-green"}
                        (n*str 10 "footer … ")]))
