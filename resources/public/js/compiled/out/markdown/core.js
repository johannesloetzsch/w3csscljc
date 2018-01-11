// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__34240){
var map__34241 = p__34240;
var map__34241__$1 = ((((!((map__34241 == null)))?((((map__34241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34241):map__34241);
var replacement_transformers = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__34241,map__34241__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_34243 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__34244 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_34243,map__34241,map__34241__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__34247,transformer){
var vec__34248 = p__34247;
var text = cljs.core.nth.call(null,vec__34248,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__34248,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_34243,map__34241,map__34241__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__30083__auto__ = replacement_transformers;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__34244,(0),null);
var new_state = cljs.core.nth.call(null,vec__34244,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_34243;
}});
;})(map__34241,map__34241__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__31369__auto__ = [];
var len__31362__auto___34253 = arguments.length;
var i__31363__auto___34254 = (0);
while(true){
if((i__31363__auto___34254 < len__31362__auto___34253)){
args__31369__auto__.push((arguments[i__31363__auto___34254]));

var G__34255 = (i__31363__auto___34254 + (1));
i__31363__auto___34254 = G__34255;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq34251){
var G__34252 = cljs.core.first.call(null,seq34251);
var seq34251__$1 = cljs.core.next.call(null,seq34251);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__34252,seq34251__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34256_34260 = cljs.core.seq.call(null,lines);
var chunk__34257_34261 = null;
var count__34258_34262 = (0);
var i__34259_34263 = (0);
while(true){
if((i__34259_34263 < count__34258_34262)){
var line_34264 = cljs.core._nth.call(null,chunk__34257_34261,i__34259_34263);
markdown.links.parse_reference_link.call(null,line_34264,references);

var G__34265 = seq__34256_34260;
var G__34266 = chunk__34257_34261;
var G__34267 = count__34258_34262;
var G__34268 = (i__34259_34263 + (1));
seq__34256_34260 = G__34265;
chunk__34257_34261 = G__34266;
count__34258_34262 = G__34267;
i__34259_34263 = G__34268;
continue;
} else {
var temp__5457__auto___34269 = cljs.core.seq.call(null,seq__34256_34260);
if(temp__5457__auto___34269){
var seq__34256_34270__$1 = temp__5457__auto___34269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34256_34270__$1)){
var c__31014__auto___34271 = cljs.core.chunk_first.call(null,seq__34256_34270__$1);
var G__34272 = cljs.core.chunk_rest.call(null,seq__34256_34270__$1);
var G__34273 = c__31014__auto___34271;
var G__34274 = cljs.core.count.call(null,c__31014__auto___34271);
var G__34275 = (0);
seq__34256_34260 = G__34272;
chunk__34257_34261 = G__34273;
count__34258_34262 = G__34274;
i__34259_34263 = G__34275;
continue;
} else {
var line_34276 = cljs.core.first.call(null,seq__34256_34270__$1);
markdown.links.parse_reference_link.call(null,line_34276,references);

var G__34277 = cljs.core.next.call(null,seq__34256_34270__$1);
var G__34278 = null;
var G__34279 = (0);
var G__34280 = (0);
seq__34256_34260 = G__34277;
chunk__34257_34261 = G__34278;
count__34258_34262 = G__34279;
i__34259_34263 = G__34280;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__34281_34285 = cljs.core.seq.call(null,lines);
var chunk__34282_34286 = null;
var count__34283_34287 = (0);
var i__34284_34288 = (0);
while(true){
if((i__34284_34288 < count__34283_34287)){
var line_34289 = cljs.core._nth.call(null,chunk__34282_34286,i__34284_34288);
markdown.links.parse_footnote_link.call(null,line_34289,footnotes);

var G__34290 = seq__34281_34285;
var G__34291 = chunk__34282_34286;
var G__34292 = count__34283_34287;
var G__34293 = (i__34284_34288 + (1));
seq__34281_34285 = G__34290;
chunk__34282_34286 = G__34291;
count__34283_34287 = G__34292;
i__34284_34288 = G__34293;
continue;
} else {
var temp__5457__auto___34294 = cljs.core.seq.call(null,seq__34281_34285);
if(temp__5457__auto___34294){
var seq__34281_34295__$1 = temp__5457__auto___34294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34281_34295__$1)){
var c__31014__auto___34296 = cljs.core.chunk_first.call(null,seq__34281_34295__$1);
var G__34297 = cljs.core.chunk_rest.call(null,seq__34281_34295__$1);
var G__34298 = c__31014__auto___34296;
var G__34299 = cljs.core.count.call(null,c__31014__auto___34296);
var G__34300 = (0);
seq__34281_34285 = G__34297;
chunk__34282_34286 = G__34298;
count__34283_34287 = G__34299;
i__34284_34288 = G__34300;
continue;
} else {
var line_34301 = cljs.core.first.call(null,seq__34281_34295__$1);
markdown.links.parse_footnote_link.call(null,line_34301,footnotes);

var G__34302 = cljs.core.next.call(null,seq__34281_34295__$1);
var G__34303 = null;
var G__34304 = (0);
var G__34305 = (0);
seq__34281_34285 = G__34302;
chunk__34282_34286 = G__34303;
count__34283_34287 = G__34304;
i__34284_34288 = G__34305;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__34307 = cljs.core.split_with.call(null,(function (p1__34306_SHARP_){
return cljs.core.not_empty.call(null,p1__34306_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__34307,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__34307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_34310 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_34311 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_34310,_STAR_formatter_STAR_34311){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_34310,_STAR_formatter_STAR_34311))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__34312 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__34312,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__34312,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__34318_34325 = lines__$1;
var vec__34319_34326 = G__34318_34325;
var seq__34320_34327 = cljs.core.seq.call(null,vec__34319_34326);
var first__34321_34328 = cljs.core.first.call(null,seq__34320_34327);
var seq__34320_34329__$1 = cljs.core.next.call(null,seq__34320_34327);
var line_34330 = first__34321_34328;
var more_34331 = seq__34320_34329__$1;
var state_34332 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__34318_34333__$1 = G__34318_34325;
var state_34334__$1 = state_34332;
while(true){
var vec__34322_34335 = G__34318_34333__$1;
var seq__34323_34336 = cljs.core.seq.call(null,vec__34322_34335);
var first__34324_34337 = cljs.core.first.call(null,seq__34323_34336);
var seq__34323_34338__$1 = cljs.core.next.call(null,seq__34323_34336);
var line_34339__$1 = first__34324_34337;
var more_34340__$1 = seq__34323_34338__$1;
var state_34341__$2 = state_34334__$1;
var line_34342__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_34341__$2))?"":line_34339__$1);
var state_34343__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34341__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34341__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_34341__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_34341__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_34341__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_34340__$1))){
var G__34344 = more_34340__$1;
var G__34345 = cljs.core.assoc.call(null,transformer.call(null,html,line_34342__$2,cljs.core.first.call(null,more_34340__$1),cljs.core.dissoc.call(null,state_34343__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_34342__$2));
G__34318_34333__$1 = G__34344;
state_34334__$1 = G__34345;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_34343__$3))),line_34342__$2,"",cljs.core.assoc.call(null,state_34343__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_34311;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_34310;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__31369__auto__ = [];
var len__31362__auto___34348 = arguments.length;
var i__31363__auto___34349 = (0);
while(true){
if((i__31363__auto___34349 < len__31362__auto___34348)){
args__31369__auto__.push((arguments[i__31363__auto___34349]));

var G__34350 = (i__31363__auto___34349 + (1));
i__31363__auto___34349 = G__34350;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq34346){
var G__34347 = cljs.core.first.call(null,seq34346);
var seq34346__$1 = cljs.core.next.call(null,seq34346);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__34347,seq34346__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__31369__auto__ = [];
var len__31362__auto___34353 = arguments.length;
var i__31363__auto___34354 = (0);
while(true){
if((i__31363__auto___34354 < len__31362__auto___34353)){
args__31369__auto__.push((arguments[i__31363__auto___34354]));

var G__34355 = (i__31363__auto___34354 + (1));
i__31363__auto___34354 = G__34355;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq34351){
var G__34352 = cljs.core.first.call(null,seq34351);
var seq34351__$1 = cljs.core.next.call(null,seq34351);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__34352,seq34351__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__31369__auto__ = [];
var len__31362__auto___34357 = arguments.length;
var i__31363__auto___34358 = (0);
while(true){
if((i__31363__auto___34358 < len__31362__auto___34357)){
args__31369__auto__.push((arguments[i__31363__auto___34358]));

var G__34359 = (i__31363__auto___34358 + (1));
i__31363__auto___34358 = G__34359;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq34356){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34356));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__31369__auto__ = [];
var len__31362__auto___34361 = arguments.length;
var i__31363__auto___34362 = (0);
while(true){
if((i__31363__auto___34362 < len__31362__auto___34361)){
args__31369__auto__.push((arguments[i__31363__auto___34362]));

var G__34363 = (i__31363__auto___34362 + (1));
i__31363__auto___34362 = G__34363;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq34360){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34360));
});


//# sourceMappingURL=core.js.map?rel=1515638885478
