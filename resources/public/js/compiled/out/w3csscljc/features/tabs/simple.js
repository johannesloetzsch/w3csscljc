// Compiled by ClojureScript 1.9.946 {}
goog.provide('w3csscljc.features.tabs.simple');
goog.require('cljs.core');
goog.require('w3csscljc.features.tabs.core');
w3csscljc.features.tabs.simple.__GT_tabs = (function w3csscljc$features$tabs$simple$__GT_tabs(tabsdef){
var x__31037__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w3-bar tab-color"], null),(function (){var iter__30965__auto__ = (function w3csscljc$features$tabs$simple$__GT_tabs_$_iter__34804(s__34805){
return (new cljs.core.LazySeq(null,(function (){
var s__34805__$1 = s__34805;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34805__$1);
if(temp__5457__auto__){
var s__34805__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34805__$2)){
var c__30963__auto__ = cljs.core.chunk_first.call(null,s__34805__$2);
var size__30964__auto__ = cljs.core.count.call(null,c__30963__auto__);
var b__34807 = cljs.core.chunk_buffer.call(null,size__30964__auto__);
if((function (){var i__34806 = (0);
while(true){
if((i__34806 < size__30964__auto__)){
var tabdef = cljs.core._nth.call(null,c__30963__auto__,i__34806);
cljs.core.chunk_append.call(null,b__34807,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w3-bar-item w3-button",new cljs.core.Keyword(null,"onclick","onclick",1297553739),["w3csscljc.features.tabs.core.openTab(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(tabsdef)),"\",\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tabdef)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),")"].join('')], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tabdef)], null));

var G__34816 = (i__34806 + (1));
i__34806 = G__34816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34807),w3csscljc$features$tabs$simple$__GT_tabs_$_iter__34804.call(null,cljs.core.chunk_rest.call(null,s__34805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34807),null);
}
} else {
var tabdef = cljs.core.first.call(null,s__34805__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w3-bar-item w3-button",new cljs.core.Keyword(null,"onclick","onclick",1297553739),["w3csscljc.features.tabs.core.openTab(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(tabsdef)),"\",\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tabdef)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),")"].join('')], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tabdef)], null),w3csscljc$features$tabs$simple$__GT_tabs_$_iter__34804.call(null,cljs.core.rest.call(null,s__34805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30965__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(tabsdef));
})()], null);
return cljs.core._conj.call(null,(function (){var x__31037__auto____$1 = (function (){var iter__30965__auto__ = ((function (x__31037__auto__){
return (function w3csscljc$features$tabs$simple$__GT_tabs_$_iter__34812(s__34813){
return (new cljs.core.LazySeq(null,((function (x__31037__auto__){
return (function (){
var s__34813__$1 = s__34813;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34813__$1);
if(temp__5457__auto__){
var s__34813__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34813__$2)){
var c__30963__auto__ = cljs.core.chunk_first.call(null,s__34813__$2);
var size__30964__auto__ = cljs.core.count.call(null,c__30963__auto__);
var b__34815 = cljs.core.chunk_buffer.call(null,size__30964__auto__);
if((function (){var i__34814 = (0);
while(true){
if((i__34814 < size__30964__auto__)){
var tabdef = cljs.core._nth.call(null,c__30963__auto__,i__34814);
cljs.core.chunk_append.call(null,b__34815,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tabdef),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(tabsdef),new cljs.core.Keyword(null,"style","style",-496642736),["display:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tabdef),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(tabsdef)))))?"block":"none"))].join('')], null),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(tabdef)], null));

var G__34817 = (i__34814 + (1));
i__34814 = G__34817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34815),w3csscljc$features$tabs$simple$__GT_tabs_$_iter__34812.call(null,cljs.core.chunk_rest.call(null,s__34813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34815),null);
}
} else {
var tabdef = cljs.core.first.call(null,s__34813__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tabdef),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(tabsdef),new cljs.core.Keyword(null,"style","style",-496642736),["display:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tabdef),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(tabsdef)))))?"block":"none"))].join('')], null),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(tabdef)], null),w3csscljc$features$tabs$simple$__GT_tabs_$_iter__34812.call(null,cljs.core.rest.call(null,s__34813__$2)));
}
} else {
return null;
}
break;
}
});})(x__31037__auto__))
,null,null));
});})(x__31037__auto__))
;
return iter__30965__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(tabsdef));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto____$1);
})(),x__31037__auto__);
});

//# sourceMappingURL=simple.js.map?rel=1515638886428
