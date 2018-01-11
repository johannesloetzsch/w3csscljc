(ns w3csscljc.features.debug.core
  "till now this feature doesn't use w3css but will do so in future and should be usefull anyway…"
  (:require [domina :as dom]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(defn debug-set-text! [id msg]
  (dom/set-text! (dom/by-id id) msg))

(defn debug-prepend! [id msg]
  (dom/prepend! (dom/by-id id) (html (list msg
                                           [:hr]))))

(defn debug!
  "TODO should call a method defined in the creator (debug-div) using either of the above methods"
  [id msg]
    (debug-prepend! id msg))
