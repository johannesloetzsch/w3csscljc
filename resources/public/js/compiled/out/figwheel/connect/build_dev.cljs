(ns figwheel.connect.build-dev (:require [w3csscljc.example] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/w3csscljc.example.on-js-reload (apply js/w3csscljc.example.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'w3csscljc.example/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://[[client-hostname]]:3449/figwheel-ws"})

