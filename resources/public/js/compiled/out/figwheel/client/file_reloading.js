// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30083__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30083__auto__){
return or__30083__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30083__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39404_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39404_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39405 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39406 = null;
var count__39407 = (0);
var i__39408 = (0);
while(true){
if((i__39408 < count__39407)){
var n = cljs.core._nth.call(null,chunk__39406,i__39408);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39409 = seq__39405;
var G__39410 = chunk__39406;
var G__39411 = count__39407;
var G__39412 = (i__39408 + (1));
seq__39405 = G__39409;
chunk__39406 = G__39410;
count__39407 = G__39411;
i__39408 = G__39412;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39405);
if(temp__5457__auto__){
var seq__39405__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39405__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39405__$1);
var G__39413 = cljs.core.chunk_rest.call(null,seq__39405__$1);
var G__39414 = c__31014__auto__;
var G__39415 = cljs.core.count.call(null,c__31014__auto__);
var G__39416 = (0);
seq__39405 = G__39413;
chunk__39406 = G__39414;
count__39407 = G__39415;
i__39408 = G__39416;
continue;
} else {
var n = cljs.core.first.call(null,seq__39405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39417 = cljs.core.next.call(null,seq__39405__$1);
var G__39418 = null;
var G__39419 = (0);
var G__39420 = (0);
seq__39405 = G__39417;
chunk__39406 = G__39418;
count__39407 = G__39419;
i__39408 = G__39420;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__39421){
var vec__39422 = p__39421;
var _ = cljs.core.nth.call(null,vec__39422,(0),null);
var v = cljs.core.nth.call(null,vec__39422,(1),null);
var and__30071__auto__ = v;
if(cljs.core.truth_(and__30071__auto__)){
return v.call(null,dep);
} else {
return and__30071__auto__;
}
}),cljs.core.filter.call(null,(function (p__39425){
var vec__39426 = p__39425;
var k = cljs.core.nth.call(null,vec__39426,(0),null);
var v = cljs.core.nth.call(null,vec__39426,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39438_39446 = cljs.core.seq.call(null,deps);
var chunk__39439_39447 = null;
var count__39440_39448 = (0);
var i__39441_39449 = (0);
while(true){
if((i__39441_39449 < count__39440_39448)){
var dep_39450 = cljs.core._nth.call(null,chunk__39439_39447,i__39441_39449);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_39450;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39450));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39450,(depth + (1)),state);
} else {
}

var G__39451 = seq__39438_39446;
var G__39452 = chunk__39439_39447;
var G__39453 = count__39440_39448;
var G__39454 = (i__39441_39449 + (1));
seq__39438_39446 = G__39451;
chunk__39439_39447 = G__39452;
count__39440_39448 = G__39453;
i__39441_39449 = G__39454;
continue;
} else {
var temp__5457__auto___39455 = cljs.core.seq.call(null,seq__39438_39446);
if(temp__5457__auto___39455){
var seq__39438_39456__$1 = temp__5457__auto___39455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39438_39456__$1)){
var c__31014__auto___39457 = cljs.core.chunk_first.call(null,seq__39438_39456__$1);
var G__39458 = cljs.core.chunk_rest.call(null,seq__39438_39456__$1);
var G__39459 = c__31014__auto___39457;
var G__39460 = cljs.core.count.call(null,c__31014__auto___39457);
var G__39461 = (0);
seq__39438_39446 = G__39458;
chunk__39439_39447 = G__39459;
count__39440_39448 = G__39460;
i__39441_39449 = G__39461;
continue;
} else {
var dep_39462 = cljs.core.first.call(null,seq__39438_39456__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_39462;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39462));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39462,(depth + (1)),state);
} else {
}

var G__39463 = cljs.core.next.call(null,seq__39438_39456__$1);
var G__39464 = null;
var G__39465 = (0);
var G__39466 = (0);
seq__39438_39446 = G__39463;
chunk__39439_39447 = G__39464;
count__39440_39448 = G__39465;
i__39441_39449 = G__39466;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39442){
var vec__39443 = p__39442;
var seq__39444 = cljs.core.seq.call(null,vec__39443);
var first__39445 = cljs.core.first.call(null,seq__39444);
var seq__39444__$1 = cljs.core.next.call(null,seq__39444);
var x = first__39445;
var xs = seq__39444__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39443,seq__39444,first__39445,seq__39444__$1,x,xs,get_deps__$1){
return (function (p1__39429_SHARP_){
return clojure.set.difference.call(null,p1__39429_SHARP_,x);
});})(vec__39443,seq__39444,first__39445,seq__39444__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39467 = cljs.core.seq.call(null,provides);
var chunk__39468 = null;
var count__39469 = (0);
var i__39470 = (0);
while(true){
if((i__39470 < count__39469)){
var prov = cljs.core._nth.call(null,chunk__39468,i__39470);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39471_39479 = cljs.core.seq.call(null,requires);
var chunk__39472_39480 = null;
var count__39473_39481 = (0);
var i__39474_39482 = (0);
while(true){
if((i__39474_39482 < count__39473_39481)){
var req_39483 = cljs.core._nth.call(null,chunk__39472_39480,i__39474_39482);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39483,prov);

var G__39484 = seq__39471_39479;
var G__39485 = chunk__39472_39480;
var G__39486 = count__39473_39481;
var G__39487 = (i__39474_39482 + (1));
seq__39471_39479 = G__39484;
chunk__39472_39480 = G__39485;
count__39473_39481 = G__39486;
i__39474_39482 = G__39487;
continue;
} else {
var temp__5457__auto___39488 = cljs.core.seq.call(null,seq__39471_39479);
if(temp__5457__auto___39488){
var seq__39471_39489__$1 = temp__5457__auto___39488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39471_39489__$1)){
var c__31014__auto___39490 = cljs.core.chunk_first.call(null,seq__39471_39489__$1);
var G__39491 = cljs.core.chunk_rest.call(null,seq__39471_39489__$1);
var G__39492 = c__31014__auto___39490;
var G__39493 = cljs.core.count.call(null,c__31014__auto___39490);
var G__39494 = (0);
seq__39471_39479 = G__39491;
chunk__39472_39480 = G__39492;
count__39473_39481 = G__39493;
i__39474_39482 = G__39494;
continue;
} else {
var req_39495 = cljs.core.first.call(null,seq__39471_39489__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39495,prov);

var G__39496 = cljs.core.next.call(null,seq__39471_39489__$1);
var G__39497 = null;
var G__39498 = (0);
var G__39499 = (0);
seq__39471_39479 = G__39496;
chunk__39472_39480 = G__39497;
count__39473_39481 = G__39498;
i__39474_39482 = G__39499;
continue;
}
} else {
}
}
break;
}

var G__39500 = seq__39467;
var G__39501 = chunk__39468;
var G__39502 = count__39469;
var G__39503 = (i__39470 + (1));
seq__39467 = G__39500;
chunk__39468 = G__39501;
count__39469 = G__39502;
i__39470 = G__39503;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39467);
if(temp__5457__auto__){
var seq__39467__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39467__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39467__$1);
var G__39504 = cljs.core.chunk_rest.call(null,seq__39467__$1);
var G__39505 = c__31014__auto__;
var G__39506 = cljs.core.count.call(null,c__31014__auto__);
var G__39507 = (0);
seq__39467 = G__39504;
chunk__39468 = G__39505;
count__39469 = G__39506;
i__39470 = G__39507;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39467__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39475_39508 = cljs.core.seq.call(null,requires);
var chunk__39476_39509 = null;
var count__39477_39510 = (0);
var i__39478_39511 = (0);
while(true){
if((i__39478_39511 < count__39477_39510)){
var req_39512 = cljs.core._nth.call(null,chunk__39476_39509,i__39478_39511);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39512,prov);

var G__39513 = seq__39475_39508;
var G__39514 = chunk__39476_39509;
var G__39515 = count__39477_39510;
var G__39516 = (i__39478_39511 + (1));
seq__39475_39508 = G__39513;
chunk__39476_39509 = G__39514;
count__39477_39510 = G__39515;
i__39478_39511 = G__39516;
continue;
} else {
var temp__5457__auto___39517__$1 = cljs.core.seq.call(null,seq__39475_39508);
if(temp__5457__auto___39517__$1){
var seq__39475_39518__$1 = temp__5457__auto___39517__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39475_39518__$1)){
var c__31014__auto___39519 = cljs.core.chunk_first.call(null,seq__39475_39518__$1);
var G__39520 = cljs.core.chunk_rest.call(null,seq__39475_39518__$1);
var G__39521 = c__31014__auto___39519;
var G__39522 = cljs.core.count.call(null,c__31014__auto___39519);
var G__39523 = (0);
seq__39475_39508 = G__39520;
chunk__39476_39509 = G__39521;
count__39477_39510 = G__39522;
i__39478_39511 = G__39523;
continue;
} else {
var req_39524 = cljs.core.first.call(null,seq__39475_39518__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39524,prov);

var G__39525 = cljs.core.next.call(null,seq__39475_39518__$1);
var G__39526 = null;
var G__39527 = (0);
var G__39528 = (0);
seq__39475_39508 = G__39525;
chunk__39476_39509 = G__39526;
count__39477_39510 = G__39527;
i__39478_39511 = G__39528;
continue;
}
} else {
}
}
break;
}

var G__39529 = cljs.core.next.call(null,seq__39467__$1);
var G__39530 = null;
var G__39531 = (0);
var G__39532 = (0);
seq__39467 = G__39529;
chunk__39468 = G__39530;
count__39469 = G__39531;
i__39470 = G__39532;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39533_39537 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39534_39538 = null;
var count__39535_39539 = (0);
var i__39536_39540 = (0);
while(true){
if((i__39536_39540 < count__39535_39539)){
var ns_39541 = cljs.core._nth.call(null,chunk__39534_39538,i__39536_39540);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39541);

var G__39542 = seq__39533_39537;
var G__39543 = chunk__39534_39538;
var G__39544 = count__39535_39539;
var G__39545 = (i__39536_39540 + (1));
seq__39533_39537 = G__39542;
chunk__39534_39538 = G__39543;
count__39535_39539 = G__39544;
i__39536_39540 = G__39545;
continue;
} else {
var temp__5457__auto___39546 = cljs.core.seq.call(null,seq__39533_39537);
if(temp__5457__auto___39546){
var seq__39533_39547__$1 = temp__5457__auto___39546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39533_39547__$1)){
var c__31014__auto___39548 = cljs.core.chunk_first.call(null,seq__39533_39547__$1);
var G__39549 = cljs.core.chunk_rest.call(null,seq__39533_39547__$1);
var G__39550 = c__31014__auto___39548;
var G__39551 = cljs.core.count.call(null,c__31014__auto___39548);
var G__39552 = (0);
seq__39533_39537 = G__39549;
chunk__39534_39538 = G__39550;
count__39535_39539 = G__39551;
i__39536_39540 = G__39552;
continue;
} else {
var ns_39553 = cljs.core.first.call(null,seq__39533_39547__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39553);

var G__39554 = cljs.core.next.call(null,seq__39533_39547__$1);
var G__39555 = null;
var G__39556 = (0);
var G__39557 = (0);
seq__39533_39537 = G__39554;
chunk__39534_39538 = G__39555;
count__39535_39539 = G__39556;
i__39536_39540 = G__39557;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30083__auto__ = goog.require__;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39558__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39559__i = 0, G__39559__a = new Array(arguments.length -  0);
while (G__39559__i < G__39559__a.length) {G__39559__a[G__39559__i] = arguments[G__39559__i + 0]; ++G__39559__i;}
  args = new cljs.core.IndexedSeq(G__39559__a,0,null);
} 
return G__39558__delegate.call(this,args);};
G__39558.cljs$lang$maxFixedArity = 0;
G__39558.cljs$lang$applyTo = (function (arglist__39560){
var args = cljs.core.seq(arglist__39560);
return G__39558__delegate(args);
});
G__39558.cljs$core$IFn$_invoke$arity$variadic = G__39558__delegate;
return G__39558;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__39561_SHARP_,p2__39562_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39561_SHARP_)].join('')),p2__39562_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__39563_SHARP_,p2__39564_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39563_SHARP_)].join(''),p2__39564_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39565 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39565.addCallback(((function (G__39565){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39565))
);

G__39565.addErrback(((function (G__39565){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39565))
);

return G__39565;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39566){if((e39566 instanceof Error)){
var e = e39566;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39566;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39567){if((e39567 instanceof Error)){
var e = e39567;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39567;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39568 = cljs.core._EQ_;
var expr__39569 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39568.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39569))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39568.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39569))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39568.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39569))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39568,expr__39569){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39568,expr__39569))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39571,callback){
var map__39572 = p__39571;
var map__39572__$1 = ((((!((map__39572 == null)))?((((map__39572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39572):map__39572);
var file_msg = map__39572__$1;
var request_url = cljs.core.get.call(null,map__39572__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30083__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39572,map__39572__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39572,map__39572__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__){
return (function (state_39612){
var state_val_39613 = (state_39612[(1)]);
if((state_val_39613 === (7))){
var inst_39608 = (state_39612[(2)]);
var state_39612__$1 = state_39612;
var statearr_39614_39641 = state_39612__$1;
(statearr_39614_39641[(2)] = inst_39608);

(statearr_39614_39641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (1))){
var state_39612__$1 = state_39612;
var statearr_39615_39642 = state_39612__$1;
(statearr_39615_39642[(2)] = null);

(statearr_39615_39642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (4))){
var inst_39576 = (state_39612[(7)]);
var inst_39576__$1 = (state_39612[(2)]);
var state_39612__$1 = (function (){var statearr_39616 = state_39612;
(statearr_39616[(7)] = inst_39576__$1);

return statearr_39616;
})();
if(cljs.core.truth_(inst_39576__$1)){
var statearr_39617_39643 = state_39612__$1;
(statearr_39617_39643[(1)] = (5));

} else {
var statearr_39618_39644 = state_39612__$1;
(statearr_39618_39644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (15))){
var inst_39590 = (state_39612[(8)]);
var inst_39593 = (state_39612[(9)]);
var inst_39595 = inst_39593.call(null,inst_39590);
var state_39612__$1 = state_39612;
var statearr_39619_39645 = state_39612__$1;
(statearr_39619_39645[(2)] = inst_39595);

(statearr_39619_39645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (13))){
var inst_39602 = (state_39612[(2)]);
var state_39612__$1 = state_39612;
var statearr_39620_39646 = state_39612__$1;
(statearr_39620_39646[(2)] = inst_39602);

(statearr_39620_39646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (6))){
var state_39612__$1 = state_39612;
var statearr_39621_39647 = state_39612__$1;
(statearr_39621_39647[(2)] = null);

(statearr_39621_39647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (17))){
var inst_39599 = (state_39612[(2)]);
var state_39612__$1 = state_39612;
var statearr_39622_39648 = state_39612__$1;
(statearr_39622_39648[(2)] = inst_39599);

(statearr_39622_39648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (3))){
var inst_39610 = (state_39612[(2)]);
var state_39612__$1 = state_39612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39612__$1,inst_39610);
} else {
if((state_val_39613 === (12))){
var state_39612__$1 = state_39612;
var statearr_39623_39649 = state_39612__$1;
(statearr_39623_39649[(2)] = null);

(statearr_39623_39649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (2))){
var state_39612__$1 = state_39612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39612__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39613 === (11))){
var inst_39581 = (state_39612[(10)]);
var inst_39588 = figwheel.client.file_reloading.blocking_load.call(null,inst_39581);
var state_39612__$1 = state_39612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39612__$1,(14),inst_39588);
} else {
if((state_val_39613 === (9))){
var inst_39581 = (state_39612[(10)]);
var state_39612__$1 = state_39612;
if(cljs.core.truth_(inst_39581)){
var statearr_39624_39650 = state_39612__$1;
(statearr_39624_39650[(1)] = (11));

} else {
var statearr_39625_39651 = state_39612__$1;
(statearr_39625_39651[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (5))){
var inst_39576 = (state_39612[(7)]);
var inst_39582 = (state_39612[(11)]);
var inst_39581 = cljs.core.nth.call(null,inst_39576,(0),null);
var inst_39582__$1 = cljs.core.nth.call(null,inst_39576,(1),null);
var state_39612__$1 = (function (){var statearr_39626 = state_39612;
(statearr_39626[(10)] = inst_39581);

(statearr_39626[(11)] = inst_39582__$1);

return statearr_39626;
})();
if(cljs.core.truth_(inst_39582__$1)){
var statearr_39627_39652 = state_39612__$1;
(statearr_39627_39652[(1)] = (8));

} else {
var statearr_39628_39653 = state_39612__$1;
(statearr_39628_39653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (14))){
var inst_39581 = (state_39612[(10)]);
var inst_39593 = (state_39612[(9)]);
var inst_39590 = (state_39612[(2)]);
var inst_39591 = console.log("Loading!",inst_39581);
var inst_39592 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39593__$1 = cljs.core.get.call(null,inst_39592,inst_39581);
var state_39612__$1 = (function (){var statearr_39629 = state_39612;
(statearr_39629[(12)] = inst_39591);

(statearr_39629[(8)] = inst_39590);

(statearr_39629[(9)] = inst_39593__$1);

return statearr_39629;
})();
if(cljs.core.truth_(inst_39593__$1)){
var statearr_39630_39654 = state_39612__$1;
(statearr_39630_39654[(1)] = (15));

} else {
var statearr_39631_39655 = state_39612__$1;
(statearr_39631_39655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (16))){
var inst_39590 = (state_39612[(8)]);
var inst_39597 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39590);
var state_39612__$1 = state_39612;
var statearr_39632_39656 = state_39612__$1;
(statearr_39632_39656[(2)] = inst_39597);

(statearr_39632_39656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (10))){
var inst_39604 = (state_39612[(2)]);
var state_39612__$1 = (function (){var statearr_39633 = state_39612;
(statearr_39633[(13)] = inst_39604);

return statearr_39633;
})();
var statearr_39634_39657 = state_39612__$1;
(statearr_39634_39657[(2)] = null);

(statearr_39634_39657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39613 === (8))){
var inst_39582 = (state_39612[(11)]);
var inst_39584 = console.log("Evaling!",inst_39582);
var inst_39585 = eval(inst_39582);
var state_39612__$1 = (function (){var statearr_39635 = state_39612;
(statearr_39635[(14)] = inst_39584);

return statearr_39635;
})();
var statearr_39636_39658 = state_39612__$1;
(statearr_39636_39658[(2)] = inst_39585);

(statearr_39636_39658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36156__auto__))
;
return ((function (switch__36066__auto__,c__36156__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36067__auto__ = null;
var figwheel$client$file_reloading$state_machine__36067__auto____0 = (function (){
var statearr_39637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39637[(0)] = figwheel$client$file_reloading$state_machine__36067__auto__);

(statearr_39637[(1)] = (1));

return statearr_39637;
});
var figwheel$client$file_reloading$state_machine__36067__auto____1 = (function (state_39612){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_39612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e39638){if((e39638 instanceof Object)){
var ex__36070__auto__ = e39638;
var statearr_39639_39659 = state_39612;
(statearr_39639_39659[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39660 = state_39612;
state_39612 = G__39660;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36067__auto__ = function(state_39612){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36067__auto____1.call(this,state_39612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36067__auto____0;
figwheel$client$file_reloading$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36067__auto____1;
return figwheel$client$file_reloading$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__))
})();
var state__36158__auto__ = (function (){var statearr_39640 = f__36157__auto__.call(null);
(statearr_39640[(6)] = c__36156__auto__);

return statearr_39640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__))
);

return c__36156__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39662 = arguments.length;
switch (G__39662) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39664,callback){
var map__39665 = p__39664;
var map__39665__$1 = ((((!((map__39665 == null)))?((((map__39665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39665):map__39665);
var file_msg = map__39665__$1;
var namespace = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39665,map__39665__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39665,map__39665__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39667){
var map__39668 = p__39667;
var map__39668__$1 = ((((!((map__39668 == null)))?((((map__39668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39668):map__39668);
var file_msg = map__39668__$1;
var namespace = cljs.core.get.call(null,map__39668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39670){
var map__39671 = p__39670;
var map__39671__$1 = ((((!((map__39671 == null)))?((((map__39671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39671):map__39671);
var file_msg = map__39671__$1;
var namespace = cljs.core.get.call(null,map__39671__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30071__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30071__auto__){
var or__30083__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30071__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39673,callback){
var map__39674 = p__39673;
var map__39674__$1 = ((((!((map__39674 == null)))?((((map__39674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39674):map__39674);
var file_msg = map__39674__$1;
var request_url = cljs.core.get.call(null,map__39674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36156__auto___39724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___39724,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___39724,out){
return (function (state_39709){
var state_val_39710 = (state_39709[(1)]);
if((state_val_39710 === (1))){
var inst_39683 = cljs.core.seq.call(null,files);
var inst_39684 = cljs.core.first.call(null,inst_39683);
var inst_39685 = cljs.core.next.call(null,inst_39683);
var inst_39686 = files;
var state_39709__$1 = (function (){var statearr_39711 = state_39709;
(statearr_39711[(7)] = inst_39685);

(statearr_39711[(8)] = inst_39686);

(statearr_39711[(9)] = inst_39684);

return statearr_39711;
})();
var statearr_39712_39725 = state_39709__$1;
(statearr_39712_39725[(2)] = null);

(statearr_39712_39725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (2))){
var inst_39686 = (state_39709[(8)]);
var inst_39692 = (state_39709[(10)]);
var inst_39691 = cljs.core.seq.call(null,inst_39686);
var inst_39692__$1 = cljs.core.first.call(null,inst_39691);
var inst_39693 = cljs.core.next.call(null,inst_39691);
var inst_39694 = (inst_39692__$1 == null);
var inst_39695 = cljs.core.not.call(null,inst_39694);
var state_39709__$1 = (function (){var statearr_39713 = state_39709;
(statearr_39713[(11)] = inst_39693);

(statearr_39713[(10)] = inst_39692__$1);

return statearr_39713;
})();
if(inst_39695){
var statearr_39714_39726 = state_39709__$1;
(statearr_39714_39726[(1)] = (4));

} else {
var statearr_39715_39727 = state_39709__$1;
(statearr_39715_39727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (3))){
var inst_39707 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39709__$1,inst_39707);
} else {
if((state_val_39710 === (4))){
var inst_39692 = (state_39709[(10)]);
var inst_39697 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39692);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39709__$1,(7),inst_39697);
} else {
if((state_val_39710 === (5))){
var inst_39703 = cljs.core.async.close_BANG_.call(null,out);
var state_39709__$1 = state_39709;
var statearr_39716_39728 = state_39709__$1;
(statearr_39716_39728[(2)] = inst_39703);

(statearr_39716_39728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (6))){
var inst_39705 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
var statearr_39717_39729 = state_39709__$1;
(statearr_39717_39729[(2)] = inst_39705);

(statearr_39717_39729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (7))){
var inst_39693 = (state_39709[(11)]);
var inst_39699 = (state_39709[(2)]);
var inst_39700 = cljs.core.async.put_BANG_.call(null,out,inst_39699);
var inst_39686 = inst_39693;
var state_39709__$1 = (function (){var statearr_39718 = state_39709;
(statearr_39718[(12)] = inst_39700);

(statearr_39718[(8)] = inst_39686);

return statearr_39718;
})();
var statearr_39719_39730 = state_39709__$1;
(statearr_39719_39730[(2)] = null);

(statearr_39719_39730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__36156__auto___39724,out))
;
return ((function (switch__36066__auto__,c__36156__auto___39724,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto____0 = (function (){
var statearr_39720 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39720[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto__);

(statearr_39720[(1)] = (1));

return statearr_39720;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto____1 = (function (state_39709){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_39709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e39721){if((e39721 instanceof Object)){
var ex__36070__auto__ = e39721;
var statearr_39722_39731 = state_39709;
(statearr_39722_39731[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39732 = state_39709;
state_39709 = G__39732;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto__ = function(state_39709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto____1.call(this,state_39709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___39724,out))
})();
var state__36158__auto__ = (function (){var statearr_39723 = f__36157__auto__.call(null);
(statearr_39723[(6)] = c__36156__auto___39724);

return statearr_39723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___39724,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39733,opts){
var map__39734 = p__39733;
var map__39734__$1 = ((((!((map__39734 == null)))?((((map__39734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39734):map__39734);
var eval_body = cljs.core.get.call(null,map__39734__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39734__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30071__auto__ = eval_body;
if(cljs.core.truth_(and__30071__auto__)){
return typeof eval_body === 'string';
} else {
return and__30071__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39736){var e = e39736;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39737_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39737_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39738){
var vec__39739 = p__39738;
var k = cljs.core.nth.call(null,vec__39739,(0),null);
var v = cljs.core.nth.call(null,vec__39739,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39742){
var vec__39743 = p__39742;
var k = cljs.core.nth.call(null,vec__39743,(0),null);
var v = cljs.core.nth.call(null,vec__39743,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39749,p__39750){
var map__39751 = p__39749;
var map__39751__$1 = ((((!((map__39751 == null)))?((((map__39751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39751):map__39751);
var opts = map__39751__$1;
var before_jsload = cljs.core.get.call(null,map__39751__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39751__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39751__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39752 = p__39750;
var map__39752__$1 = ((((!((map__39752 == null)))?((((map__39752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39752):map__39752);
var msg = map__39752__$1;
var files = cljs.core.get.call(null,map__39752__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39752__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39752__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39906){
var state_val_39907 = (state_39906[(1)]);
if((state_val_39907 === (7))){
var inst_39769 = (state_39906[(7)]);
var inst_39767 = (state_39906[(8)]);
var inst_39766 = (state_39906[(9)]);
var inst_39768 = (state_39906[(10)]);
var inst_39774 = cljs.core._nth.call(null,inst_39767,inst_39769);
var inst_39775 = figwheel.client.file_reloading.eval_body.call(null,inst_39774,opts);
var inst_39776 = (inst_39769 + (1));
var tmp39908 = inst_39767;
var tmp39909 = inst_39766;
var tmp39910 = inst_39768;
var inst_39766__$1 = tmp39909;
var inst_39767__$1 = tmp39908;
var inst_39768__$1 = tmp39910;
var inst_39769__$1 = inst_39776;
var state_39906__$1 = (function (){var statearr_39911 = state_39906;
(statearr_39911[(7)] = inst_39769__$1);

(statearr_39911[(8)] = inst_39767__$1);

(statearr_39911[(11)] = inst_39775);

(statearr_39911[(9)] = inst_39766__$1);

(statearr_39911[(10)] = inst_39768__$1);

return statearr_39911;
})();
var statearr_39912_39995 = state_39906__$1;
(statearr_39912_39995[(2)] = null);

(statearr_39912_39995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (20))){
var inst_39809 = (state_39906[(12)]);
var inst_39817 = figwheel.client.file_reloading.sort_files.call(null,inst_39809);
var state_39906__$1 = state_39906;
var statearr_39913_39996 = state_39906__$1;
(statearr_39913_39996[(2)] = inst_39817);

(statearr_39913_39996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (27))){
var state_39906__$1 = state_39906;
var statearr_39914_39997 = state_39906__$1;
(statearr_39914_39997[(2)] = null);

(statearr_39914_39997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (1))){
var inst_39758 = (state_39906[(13)]);
var inst_39755 = before_jsload.call(null,files);
var inst_39756 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39757 = (function (){return ((function (inst_39758,inst_39755,inst_39756,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39746_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39746_SHARP_);
});
;})(inst_39758,inst_39755,inst_39756,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39758__$1 = cljs.core.filter.call(null,inst_39757,files);
var inst_39759 = cljs.core.not_empty.call(null,inst_39758__$1);
var state_39906__$1 = (function (){var statearr_39915 = state_39906;
(statearr_39915[(14)] = inst_39756);

(statearr_39915[(15)] = inst_39755);

(statearr_39915[(13)] = inst_39758__$1);

return statearr_39915;
})();
if(cljs.core.truth_(inst_39759)){
var statearr_39916_39998 = state_39906__$1;
(statearr_39916_39998[(1)] = (2));

} else {
var statearr_39917_39999 = state_39906__$1;
(statearr_39917_39999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (24))){
var state_39906__$1 = state_39906;
var statearr_39918_40000 = state_39906__$1;
(statearr_39918_40000[(2)] = null);

(statearr_39918_40000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (39))){
var inst_39859 = (state_39906[(16)]);
var state_39906__$1 = state_39906;
var statearr_39919_40001 = state_39906__$1;
(statearr_39919_40001[(2)] = inst_39859);

(statearr_39919_40001[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (46))){
var inst_39901 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39920_40002 = state_39906__$1;
(statearr_39920_40002[(2)] = inst_39901);

(statearr_39920_40002[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (4))){
var inst_39803 = (state_39906[(2)]);
var inst_39804 = cljs.core.List.EMPTY;
var inst_39805 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39804);
var inst_39806 = (function (){return ((function (inst_39803,inst_39804,inst_39805,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39747_SHARP_){
var and__30071__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39747_SHARP_);
if(cljs.core.truth_(and__30071__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39747_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39747_SHARP_)));
} else {
return and__30071__auto__;
}
});
;})(inst_39803,inst_39804,inst_39805,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39807 = cljs.core.filter.call(null,inst_39806,files);
var inst_39808 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39809 = cljs.core.concat.call(null,inst_39807,inst_39808);
var state_39906__$1 = (function (){var statearr_39921 = state_39906;
(statearr_39921[(12)] = inst_39809);

(statearr_39921[(17)] = inst_39803);

(statearr_39921[(18)] = inst_39805);

return statearr_39921;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39922_40003 = state_39906__$1;
(statearr_39922_40003[(1)] = (16));

} else {
var statearr_39923_40004 = state_39906__$1;
(statearr_39923_40004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (15))){
var inst_39793 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39924_40005 = state_39906__$1;
(statearr_39924_40005[(2)] = inst_39793);

(statearr_39924_40005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (21))){
var inst_39819 = (state_39906[(19)]);
var inst_39819__$1 = (state_39906[(2)]);
var inst_39820 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39819__$1);
var state_39906__$1 = (function (){var statearr_39925 = state_39906;
(statearr_39925[(19)] = inst_39819__$1);

return statearr_39925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39906__$1,(22),inst_39820);
} else {
if((state_val_39907 === (31))){
var inst_39904 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39906__$1,inst_39904);
} else {
if((state_val_39907 === (32))){
var inst_39859 = (state_39906[(16)]);
var inst_39864 = inst_39859.cljs$lang$protocol_mask$partition0$;
var inst_39865 = (inst_39864 & (64));
var inst_39866 = inst_39859.cljs$core$ISeq$;
var inst_39867 = (cljs.core.PROTOCOL_SENTINEL === inst_39866);
var inst_39868 = (inst_39865) || (inst_39867);
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39868)){
var statearr_39926_40006 = state_39906__$1;
(statearr_39926_40006[(1)] = (35));

} else {
var statearr_39927_40007 = state_39906__$1;
(statearr_39927_40007[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (40))){
var inst_39881 = (state_39906[(20)]);
var inst_39880 = (state_39906[(2)]);
var inst_39881__$1 = cljs.core.get.call(null,inst_39880,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39882 = cljs.core.get.call(null,inst_39880,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39883 = cljs.core.not_empty.call(null,inst_39881__$1);
var state_39906__$1 = (function (){var statearr_39928 = state_39906;
(statearr_39928[(21)] = inst_39882);

(statearr_39928[(20)] = inst_39881__$1);

return statearr_39928;
})();
if(cljs.core.truth_(inst_39883)){
var statearr_39929_40008 = state_39906__$1;
(statearr_39929_40008[(1)] = (41));

} else {
var statearr_39930_40009 = state_39906__$1;
(statearr_39930_40009[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (33))){
var state_39906__$1 = state_39906;
var statearr_39931_40010 = state_39906__$1;
(statearr_39931_40010[(2)] = false);

(statearr_39931_40010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (13))){
var inst_39779 = (state_39906[(22)]);
var inst_39783 = cljs.core.chunk_first.call(null,inst_39779);
var inst_39784 = cljs.core.chunk_rest.call(null,inst_39779);
var inst_39785 = cljs.core.count.call(null,inst_39783);
var inst_39766 = inst_39784;
var inst_39767 = inst_39783;
var inst_39768 = inst_39785;
var inst_39769 = (0);
var state_39906__$1 = (function (){var statearr_39932 = state_39906;
(statearr_39932[(7)] = inst_39769);

(statearr_39932[(8)] = inst_39767);

(statearr_39932[(9)] = inst_39766);

(statearr_39932[(10)] = inst_39768);

return statearr_39932;
})();
var statearr_39933_40011 = state_39906__$1;
(statearr_39933_40011[(2)] = null);

(statearr_39933_40011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (22))){
var inst_39822 = (state_39906[(23)]);
var inst_39819 = (state_39906[(19)]);
var inst_39827 = (state_39906[(24)]);
var inst_39823 = (state_39906[(25)]);
var inst_39822__$1 = (state_39906[(2)]);
var inst_39823__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39822__$1);
var inst_39824 = (function (){var all_files = inst_39819;
var res_SINGLEQUOTE_ = inst_39822__$1;
var res = inst_39823__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39822,inst_39819,inst_39827,inst_39823,inst_39822__$1,inst_39823__$1,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39748_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39748_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39822,inst_39819,inst_39827,inst_39823,inst_39822__$1,inst_39823__$1,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39825 = cljs.core.filter.call(null,inst_39824,inst_39822__$1);
var inst_39826 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39827__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39826);
var inst_39828 = cljs.core.not_empty.call(null,inst_39827__$1);
var state_39906__$1 = (function (){var statearr_39934 = state_39906;
(statearr_39934[(23)] = inst_39822__$1);

(statearr_39934[(24)] = inst_39827__$1);

(statearr_39934[(25)] = inst_39823__$1);

(statearr_39934[(26)] = inst_39825);

return statearr_39934;
})();
if(cljs.core.truth_(inst_39828)){
var statearr_39935_40012 = state_39906__$1;
(statearr_39935_40012[(1)] = (23));

} else {
var statearr_39936_40013 = state_39906__$1;
(statearr_39936_40013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (36))){
var state_39906__$1 = state_39906;
var statearr_39937_40014 = state_39906__$1;
(statearr_39937_40014[(2)] = false);

(statearr_39937_40014[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (41))){
var inst_39881 = (state_39906[(20)]);
var inst_39885 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39886 = cljs.core.map.call(null,inst_39885,inst_39881);
var inst_39887 = cljs.core.pr_str.call(null,inst_39886);
var inst_39888 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39887)].join('');
var inst_39889 = figwheel.client.utils.log.call(null,inst_39888);
var state_39906__$1 = state_39906;
var statearr_39938_40015 = state_39906__$1;
(statearr_39938_40015[(2)] = inst_39889);

(statearr_39938_40015[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (43))){
var inst_39882 = (state_39906[(21)]);
var inst_39892 = (state_39906[(2)]);
var inst_39893 = cljs.core.not_empty.call(null,inst_39882);
var state_39906__$1 = (function (){var statearr_39939 = state_39906;
(statearr_39939[(27)] = inst_39892);

return statearr_39939;
})();
if(cljs.core.truth_(inst_39893)){
var statearr_39940_40016 = state_39906__$1;
(statearr_39940_40016[(1)] = (44));

} else {
var statearr_39941_40017 = state_39906__$1;
(statearr_39941_40017[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (29))){
var inst_39822 = (state_39906[(23)]);
var inst_39819 = (state_39906[(19)]);
var inst_39827 = (state_39906[(24)]);
var inst_39823 = (state_39906[(25)]);
var inst_39825 = (state_39906[(26)]);
var inst_39859 = (state_39906[(16)]);
var inst_39855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39858 = (function (){var all_files = inst_39819;
var res_SINGLEQUOTE_ = inst_39822;
var res = inst_39823;
var files_not_loaded = inst_39825;
var dependencies_that_loaded = inst_39827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39859,inst_39855,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39857){
var map__39942 = p__39857;
var map__39942__$1 = ((((!((map__39942 == null)))?((((map__39942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39942):map__39942);
var namespace = cljs.core.get.call(null,map__39942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39859,inst_39855,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39859__$1 = cljs.core.group_by.call(null,inst_39858,inst_39825);
var inst_39861 = (inst_39859__$1 == null);
var inst_39862 = cljs.core.not.call(null,inst_39861);
var state_39906__$1 = (function (){var statearr_39944 = state_39906;
(statearr_39944[(28)] = inst_39855);

(statearr_39944[(16)] = inst_39859__$1);

return statearr_39944;
})();
if(inst_39862){
var statearr_39945_40018 = state_39906__$1;
(statearr_39945_40018[(1)] = (32));

} else {
var statearr_39946_40019 = state_39906__$1;
(statearr_39946_40019[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (44))){
var inst_39882 = (state_39906[(21)]);
var inst_39895 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39882);
var inst_39896 = cljs.core.pr_str.call(null,inst_39895);
var inst_39897 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39896)].join('');
var inst_39898 = figwheel.client.utils.log.call(null,inst_39897);
var state_39906__$1 = state_39906;
var statearr_39947_40020 = state_39906__$1;
(statearr_39947_40020[(2)] = inst_39898);

(statearr_39947_40020[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (6))){
var inst_39800 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39948_40021 = state_39906__$1;
(statearr_39948_40021[(2)] = inst_39800);

(statearr_39948_40021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (28))){
var inst_39825 = (state_39906[(26)]);
var inst_39852 = (state_39906[(2)]);
var inst_39853 = cljs.core.not_empty.call(null,inst_39825);
var state_39906__$1 = (function (){var statearr_39949 = state_39906;
(statearr_39949[(29)] = inst_39852);

return statearr_39949;
})();
if(cljs.core.truth_(inst_39853)){
var statearr_39950_40022 = state_39906__$1;
(statearr_39950_40022[(1)] = (29));

} else {
var statearr_39951_40023 = state_39906__$1;
(statearr_39951_40023[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (25))){
var inst_39823 = (state_39906[(25)]);
var inst_39839 = (state_39906[(2)]);
var inst_39840 = cljs.core.not_empty.call(null,inst_39823);
var state_39906__$1 = (function (){var statearr_39952 = state_39906;
(statearr_39952[(30)] = inst_39839);

return statearr_39952;
})();
if(cljs.core.truth_(inst_39840)){
var statearr_39953_40024 = state_39906__$1;
(statearr_39953_40024[(1)] = (26));

} else {
var statearr_39954_40025 = state_39906__$1;
(statearr_39954_40025[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (34))){
var inst_39875 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39875)){
var statearr_39955_40026 = state_39906__$1;
(statearr_39955_40026[(1)] = (38));

} else {
var statearr_39956_40027 = state_39906__$1;
(statearr_39956_40027[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (17))){
var state_39906__$1 = state_39906;
var statearr_39957_40028 = state_39906__$1;
(statearr_39957_40028[(2)] = recompile_dependents);

(statearr_39957_40028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (3))){
var state_39906__$1 = state_39906;
var statearr_39958_40029 = state_39906__$1;
(statearr_39958_40029[(2)] = null);

(statearr_39958_40029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (12))){
var inst_39796 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39959_40030 = state_39906__$1;
(statearr_39959_40030[(2)] = inst_39796);

(statearr_39959_40030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (2))){
var inst_39758 = (state_39906[(13)]);
var inst_39765 = cljs.core.seq.call(null,inst_39758);
var inst_39766 = inst_39765;
var inst_39767 = null;
var inst_39768 = (0);
var inst_39769 = (0);
var state_39906__$1 = (function (){var statearr_39960 = state_39906;
(statearr_39960[(7)] = inst_39769);

(statearr_39960[(8)] = inst_39767);

(statearr_39960[(9)] = inst_39766);

(statearr_39960[(10)] = inst_39768);

return statearr_39960;
})();
var statearr_39961_40031 = state_39906__$1;
(statearr_39961_40031[(2)] = null);

(statearr_39961_40031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (23))){
var inst_39822 = (state_39906[(23)]);
var inst_39819 = (state_39906[(19)]);
var inst_39827 = (state_39906[(24)]);
var inst_39823 = (state_39906[(25)]);
var inst_39825 = (state_39906[(26)]);
var inst_39830 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39832 = (function (){var all_files = inst_39819;
var res_SINGLEQUOTE_ = inst_39822;
var res = inst_39823;
var files_not_loaded = inst_39825;
var dependencies_that_loaded = inst_39827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39830,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39831){
var map__39962 = p__39831;
var map__39962__$1 = ((((!((map__39962 == null)))?((((map__39962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39962):map__39962);
var request_url = cljs.core.get.call(null,map__39962__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39830,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39833 = cljs.core.reverse.call(null,inst_39827);
var inst_39834 = cljs.core.map.call(null,inst_39832,inst_39833);
var inst_39835 = cljs.core.pr_str.call(null,inst_39834);
var inst_39836 = figwheel.client.utils.log.call(null,inst_39835);
var state_39906__$1 = (function (){var statearr_39964 = state_39906;
(statearr_39964[(31)] = inst_39830);

return statearr_39964;
})();
var statearr_39965_40032 = state_39906__$1;
(statearr_39965_40032[(2)] = inst_39836);

(statearr_39965_40032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (35))){
var state_39906__$1 = state_39906;
var statearr_39966_40033 = state_39906__$1;
(statearr_39966_40033[(2)] = true);

(statearr_39966_40033[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (19))){
var inst_39809 = (state_39906[(12)]);
var inst_39815 = figwheel.client.file_reloading.expand_files.call(null,inst_39809);
var state_39906__$1 = state_39906;
var statearr_39967_40034 = state_39906__$1;
(statearr_39967_40034[(2)] = inst_39815);

(statearr_39967_40034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (11))){
var state_39906__$1 = state_39906;
var statearr_39968_40035 = state_39906__$1;
(statearr_39968_40035[(2)] = null);

(statearr_39968_40035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (9))){
var inst_39798 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39969_40036 = state_39906__$1;
(statearr_39969_40036[(2)] = inst_39798);

(statearr_39969_40036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (5))){
var inst_39769 = (state_39906[(7)]);
var inst_39768 = (state_39906[(10)]);
var inst_39771 = (inst_39769 < inst_39768);
var inst_39772 = inst_39771;
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39772)){
var statearr_39970_40037 = state_39906__$1;
(statearr_39970_40037[(1)] = (7));

} else {
var statearr_39971_40038 = state_39906__$1;
(statearr_39971_40038[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (14))){
var inst_39779 = (state_39906[(22)]);
var inst_39788 = cljs.core.first.call(null,inst_39779);
var inst_39789 = figwheel.client.file_reloading.eval_body.call(null,inst_39788,opts);
var inst_39790 = cljs.core.next.call(null,inst_39779);
var inst_39766 = inst_39790;
var inst_39767 = null;
var inst_39768 = (0);
var inst_39769 = (0);
var state_39906__$1 = (function (){var statearr_39972 = state_39906;
(statearr_39972[(7)] = inst_39769);

(statearr_39972[(8)] = inst_39767);

(statearr_39972[(32)] = inst_39789);

(statearr_39972[(9)] = inst_39766);

(statearr_39972[(10)] = inst_39768);

return statearr_39972;
})();
var statearr_39973_40039 = state_39906__$1;
(statearr_39973_40039[(2)] = null);

(statearr_39973_40039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (45))){
var state_39906__$1 = state_39906;
var statearr_39974_40040 = state_39906__$1;
(statearr_39974_40040[(2)] = null);

(statearr_39974_40040[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (26))){
var inst_39822 = (state_39906[(23)]);
var inst_39819 = (state_39906[(19)]);
var inst_39827 = (state_39906[(24)]);
var inst_39823 = (state_39906[(25)]);
var inst_39825 = (state_39906[(26)]);
var inst_39842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39844 = (function (){var all_files = inst_39819;
var res_SINGLEQUOTE_ = inst_39822;
var res = inst_39823;
var files_not_loaded = inst_39825;
var dependencies_that_loaded = inst_39827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39842,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39843){
var map__39975 = p__39843;
var map__39975__$1 = ((((!((map__39975 == null)))?((((map__39975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39975):map__39975);
var namespace = cljs.core.get.call(null,map__39975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39975__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39842,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39845 = cljs.core.map.call(null,inst_39844,inst_39823);
var inst_39846 = cljs.core.pr_str.call(null,inst_39845);
var inst_39847 = figwheel.client.utils.log.call(null,inst_39846);
var inst_39848 = (function (){var all_files = inst_39819;
var res_SINGLEQUOTE_ = inst_39822;
var res = inst_39823;
var files_not_loaded = inst_39825;
var dependencies_that_loaded = inst_39827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39842,inst_39844,inst_39845,inst_39846,inst_39847,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39819,inst_39827,inst_39823,inst_39825,inst_39842,inst_39844,inst_39845,inst_39846,inst_39847,state_val_39907,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39849 = setTimeout(inst_39848,(10));
var state_39906__$1 = (function (){var statearr_39977 = state_39906;
(statearr_39977[(33)] = inst_39847);

(statearr_39977[(34)] = inst_39842);

return statearr_39977;
})();
var statearr_39978_40041 = state_39906__$1;
(statearr_39978_40041[(2)] = inst_39849);

(statearr_39978_40041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (16))){
var state_39906__$1 = state_39906;
var statearr_39979_40042 = state_39906__$1;
(statearr_39979_40042[(2)] = reload_dependents);

(statearr_39979_40042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (38))){
var inst_39859 = (state_39906[(16)]);
var inst_39877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39859);
var state_39906__$1 = state_39906;
var statearr_39980_40043 = state_39906__$1;
(statearr_39980_40043[(2)] = inst_39877);

(statearr_39980_40043[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (30))){
var state_39906__$1 = state_39906;
var statearr_39981_40044 = state_39906__$1;
(statearr_39981_40044[(2)] = null);

(statearr_39981_40044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (10))){
var inst_39779 = (state_39906[(22)]);
var inst_39781 = cljs.core.chunked_seq_QMARK_.call(null,inst_39779);
var state_39906__$1 = state_39906;
if(inst_39781){
var statearr_39982_40045 = state_39906__$1;
(statearr_39982_40045[(1)] = (13));

} else {
var statearr_39983_40046 = state_39906__$1;
(statearr_39983_40046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (18))){
var inst_39813 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39813)){
var statearr_39984_40047 = state_39906__$1;
(statearr_39984_40047[(1)] = (19));

} else {
var statearr_39985_40048 = state_39906__$1;
(statearr_39985_40048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (42))){
var state_39906__$1 = state_39906;
var statearr_39986_40049 = state_39906__$1;
(statearr_39986_40049[(2)] = null);

(statearr_39986_40049[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (37))){
var inst_39872 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39987_40050 = state_39906__$1;
(statearr_39987_40050[(2)] = inst_39872);

(statearr_39987_40050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (8))){
var inst_39766 = (state_39906[(9)]);
var inst_39779 = (state_39906[(22)]);
var inst_39779__$1 = cljs.core.seq.call(null,inst_39766);
var state_39906__$1 = (function (){var statearr_39988 = state_39906;
(statearr_39988[(22)] = inst_39779__$1);

return statearr_39988;
})();
if(inst_39779__$1){
var statearr_39989_40051 = state_39906__$1;
(statearr_39989_40051[(1)] = (10));

} else {
var statearr_39990_40052 = state_39906__$1;
(statearr_39990_40052[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36066__auto__,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto____0 = (function (){
var statearr_39991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39991[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto__);

(statearr_39991[(1)] = (1));

return statearr_39991;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto____1 = (function (state_39906){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_39906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e39992){if((e39992 instanceof Object)){
var ex__36070__auto__ = e39992;
var statearr_39993_40053 = state_39906;
(statearr_39993_40053[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40054 = state_39906;
state_39906 = G__40054;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto__ = function(state_39906){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto____1.call(this,state_39906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36158__auto__ = (function (){var statearr_39994 = f__36157__auto__.call(null);
(statearr_39994[(6)] = c__36156__auto__);

return statearr_39994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__,map__39751,map__39751__$1,opts,before_jsload,on_jsload,reload_dependents,map__39752,map__39752__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36156__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40057,link){
var map__40058 = p__40057;
var map__40058__$1 = ((((!((map__40058 == null)))?((((map__40058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40058):map__40058);
var file = cljs.core.get.call(null,map__40058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__40058,map__40058__$1,file){
return (function (p1__40055_SHARP_,p2__40056_SHARP_){
if(cljs.core._EQ_.call(null,p1__40055_SHARP_,p2__40056_SHARP_)){
return p1__40055_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__40058,map__40058__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40061){
var map__40062 = p__40061;
var map__40062__$1 = ((((!((map__40062 == null)))?((((map__40062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40062):map__40062);
var match_length = cljs.core.get.call(null,map__40062__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40062__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40060_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40060_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40064_SHARP_,p2__40065_SHARP_){
return cljs.core.assoc.call(null,p1__40064_SHARP_,cljs.core.get.call(null,p2__40065_SHARP_,key),p2__40065_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_40066 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40066);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40066);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40067,p__40068){
var map__40069 = p__40067;
var map__40069__$1 = ((((!((map__40069 == null)))?((((map__40069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40069):map__40069);
var on_cssload = cljs.core.get.call(null,map__40069__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40070 = p__40068;
var map__40070__$1 = ((((!((map__40070 == null)))?((((map__40070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40070):map__40070);
var files_msg = map__40070__$1;
var files = cljs.core.get.call(null,map__40070__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1515638892313
