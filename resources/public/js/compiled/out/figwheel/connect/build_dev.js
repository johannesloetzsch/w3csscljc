// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('w3csscljc.example');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41653__delegate = function (x){
if(cljs.core.truth_(w3csscljc.example.on_js_reload)){
return cljs.core.apply.call(null,w3csscljc.example.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'w3csscljc.example/on-js-reload' is missing");
}
};
var G__41653 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41654__i = 0, G__41654__a = new Array(arguments.length -  0);
while (G__41654__i < G__41654__a.length) {G__41654__a[G__41654__i] = arguments[G__41654__i + 0]; ++G__41654__i;}
  x = new cljs.core.IndexedSeq(G__41654__a,0,null);
} 
return G__41653__delegate.call(this,x);};
G__41653.cljs$lang$maxFixedArity = 0;
G__41653.cljs$lang$applyTo = (function (arglist__41655){
var x = cljs.core.seq(arglist__41655);
return G__41653__delegate(x);
});
G__41653.cljs$core$IFn$_invoke$arity$variadic = G__41653__delegate;
return G__41653;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1515638895273
