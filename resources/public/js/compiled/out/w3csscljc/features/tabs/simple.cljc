(ns w3csscljc.features.tabs.simple
  #?(:cljs (:require [w3csscljc.features.tabs.core]))
  )

(defn ->tabs [tabsdef]
  (list
    [:div {:class "w3-bar tab-color"}
      (for [tabdef (:tabs tabsdef)]
           [:button {:class "w3-bar-item w3-button"
                     :onclick (str "w3csscljc.features.tabs.core.openTab(\"" (:class tabsdef) "\",\"" (:id tabdef) \"")")}
                    (:title tabdef)])]

    (for [tabdef (:tabs tabsdef)]
         [:div {:id (:id tabdef)
                :class (:class tabsdef)
                :style (str "display:" (if (= (:id tabdef)
                                              (:id (first (:tabs tabsdef))))
                                           "block"
                                           "none"))}
               (:content tabdef)])))
