// Compiled by ClojureScript 1.9.946 {}
goog.provide('w3csscljc.features.debug.core');
goog.require('cljs.core');
goog.require('domina');
goog.require('hiccups.runtime');
w3csscljc.features.debug.core.debug_set_text_BANG_ = (function w3csscljc$features$debug$core$debug_set_text_BANG_(id,msg){
return domina.set_text_BANG_.call(null,domina.by_id.call(null,id),msg);
});
w3csscljc.features.debug.core.debug_prepend_BANG_ = (function w3csscljc$features$debug$core$debug_prepend_BANG_(id,msg){
return domina.prepend_BANG_.call(null,domina.by_id.call(null,id),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var x__31037__auto__ = msg;
return cljs.core._conj.call(null,(function (){var x__31037__auto____$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto____$1);
})(),x__31037__auto__);
})()))].join(''));
});
/**
 * TODO should call a method defined in the creator (debug-div) using either of the above methods
 */
w3csscljc.features.debug.core.debug_BANG_ = (function w3csscljc$features$debug$core$debug_BANG_(id,msg){
return w3csscljc.features.debug.core.debug_prepend_BANG_.call(null,id,msg);
});

//# sourceMappingURL=core.js.map?rel=1515638886375
