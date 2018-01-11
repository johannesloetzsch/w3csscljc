(defproject w3csscljc "0.1.0-SNAPSHOT"
  :description "simple responsive websites with w3css and clojure(script)"
  :url "https://github.com/johannesloetzsch/w3csscljc"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [hiccups "0.3.0"]
                 [domina "1.0.3"]
                 [cljs-ajax "0.7.3"]
                 [markdown-clj "1.0.2"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.14"]
            [lein-less "1.7.5"]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "w3csscljc.example/on-js-reload"
                           :websocket-host :js-client-host}
                :compiler {:main w3csscljc.example
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/w3csscljc.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/w3csscljc.js"
                           :main w3csscljc.example
                           :optimizations :advanced
                           :pretty-print false}}]}
                
  :figwheel {:server-ip "0.0.0.0"
             :css-dirs ["resources/public/css/compiled"]}
 
  :less {:source-paths ["resources/public/less"]
         :target-path "resources/public/css/compiled"}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.8"]
                                  [figwheel-sidecar "0.5.14"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
