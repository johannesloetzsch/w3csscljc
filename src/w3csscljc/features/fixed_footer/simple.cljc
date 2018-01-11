(ns w3csscljc.features.fixed-footer.simple)

(defn ->fixed+footer
  "use w3-col as content when you want width to be 100%"
  [content-fix content-footer]
  (list
    [:div {:class "w3-row"
           :style "position: fixed; height: 100%; width: 100%"}
          content-fix]
    [:div {:class "w3-row"
           :style "position: absolute; bottom: 0px; width: 100%"}
          content-footer]))
