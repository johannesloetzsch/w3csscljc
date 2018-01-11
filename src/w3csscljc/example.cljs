(ns w3csscljc.example
  (:require [w3csscljc.features.ajax+markdown.core :refer [md-container]]
            [w3csscljc.features.tabs.example :refer [tabs-example]]
            [w3csscljc.features.debug.example :refer [debug-example debug-example-usage]]
            [w3csscljc.features.tabs.simple :refer [->tabs]]
            [domina :as dom]
            [domina.css :as css]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(enable-console-print!)


(defn example-page []
  (let [content [{:id "tab-main-intro"
                  :title "INTRO.md"
                  :content (md-container "INTRO.md" "md-intro")}
                 {:id "tab-main-tabs"
                  :title "tabs"
                  :content (tabs-example)}
                 {:id "tab-main-debug"
                  :title "debug"
                  :content (debug-example)}
                 {:id "tab-main-readme"
                  :title "README.md"
                  :content (md-container "README.md" "md-readme")}]]
      (dom/set-text! (css/sel "body") "")
      (dom/append! (css/sel "body") (html (->tabs {:class "tab-main"
                                                   :tabs content})))
      (debug-example-usage)))

(example-page)
