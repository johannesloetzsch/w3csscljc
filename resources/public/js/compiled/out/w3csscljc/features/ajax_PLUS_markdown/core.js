// Compiled by ClojureScript 1.9.946 {}
goog.provide('w3csscljc.features.ajax_PLUS_markdown.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('markdown.core');
goog.require('domina');
goog.require('hiccups.runtime');
w3csscljc.features.ajax_PLUS_markdown.core.GETmd__GT_innerHTML = (function w3csscljc$features$ajax_PLUS_markdown$core$GETmd__GT_innerHTML(url,id){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){
if(cljs.core.truth_(result)){
return domina.by_id.call(null,id).innerHTML = markdown.core.md__GT_html.call(null,result);
} else {
return null;
}
})], null));
});
w3csscljc.features.ajax_PLUS_markdown.core.md_container = (function w3csscljc$features$ajax_PLUS_markdown$core$md_container(url,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"onload","onload",113170835),w3csscljc.features.ajax_PLUS_markdown.core.GETmd__GT_innerHTML.call(null,url,id)], null)], null);
});

//# sourceMappingURL=core.js.map?rel=1515638886449
