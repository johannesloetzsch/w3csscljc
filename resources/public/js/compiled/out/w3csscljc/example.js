// Compiled by ClojureScript 1.9.946 {}
goog.provide('w3csscljc.example');
goog.require('cljs.core');
goog.require('w3csscljc.features.ajax_PLUS_markdown.core');
goog.require('w3csscljc.features.tabs.example');
goog.require('w3csscljc.features.debug.example');
goog.require('w3csscljc.features.tabs.simple');
goog.require('domina');
goog.require('domina.css');
goog.require('hiccups.runtime');
cljs.core.enable_console_print_BANG_.call(null);
w3csscljc.example.example_page = (function w3csscljc$example$example_page(){
var content = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab-main-intro",new cljs.core.Keyword(null,"title","title",636505583),"INTRO.md",new cljs.core.Keyword(null,"content","content",15833224),w3csscljc.features.ajax_PLUS_markdown.core.md_container.call(null,"INTRO.md","md-intro")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab-main-tabs",new cljs.core.Keyword(null,"title","title",636505583),"tabs",new cljs.core.Keyword(null,"content","content",15833224),w3csscljc.features.tabs.example.tabs_example.call(null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab-main-debug",new cljs.core.Keyword(null,"title","title",636505583),"debug",new cljs.core.Keyword(null,"content","content",15833224),w3csscljc.features.debug.example.debug_example.call(null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab-main-readme",new cljs.core.Keyword(null,"title","title",636505583),"README.md",new cljs.core.Keyword(null,"content","content",15833224),w3csscljc.features.ajax_PLUS_markdown.core.md_container.call(null,"README.md","md-readme")], null)], null);
domina.set_text_BANG_.call(null,domina.css.sel.call(null,"body"),"");

domina.append_BANG_.call(null,domina.css.sel.call(null,"body"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,w3csscljc.features.tabs.simple.__GT_tabs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tab-main",new cljs.core.Keyword(null,"tabs","tabs",-779855354),content], null))))].join(''));

return w3csscljc.features.debug.example.debug_example_usage.call(null);
});
w3csscljc.example.example_page.call(null);

//# sourceMappingURL=example.js.map?rel=1515638886467
