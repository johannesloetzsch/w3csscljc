# w3csscljc

A Clojure(script) library designed to help building responsive websites using [W3.CSS](https://www.w3schools.com/w3css/)

For every feature a function is provided, that allows creation of hiccup/html with w3.css features from simple datastructures.

    [w3csscljc-edn] --> [hiccup] --> [html+w3css]

## Example

### Online

[Online Demo](https://rawgit.com/johannesloetzsch/w3csscljc/compiled/resources/public/index.html)

### Local

```shell
> git clone https://github.com/johannesloetzsch/w3csscljc
> lein repl
```
[http://localhost:3449/](http://localhost:3449/)

## Usage in your project

[![Clojars Project](http://clojars.org/w3csscljc/latest-version.svg)](http://clojars.org/w3csscljc)

```clojure
(require '[w3csscljc.features.tabs.simple :refer [->tabs]])
(->tabs {:class "tab-example"
         :tabs [{:id "tab-example-1"
                 :title "first"
                 :content "…"}
                {:id "tab-example-2"
                 :title "second"
                 :content "…"}
                {:id "tab-example-3"
                 :title "third"
                 :content "…"}]})
```
