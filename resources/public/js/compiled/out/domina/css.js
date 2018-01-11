// Compiled by ClojureScript 1.9.946 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var G__32941 = arguments.length;
switch (G__32941) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css32942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css32942 = (function (base,expr,meta32943){
this.base = base;
this.expr = expr;
this.meta32943 = meta32943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.css.t_domina$css32942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32944,meta32943__$1){
var self__ = this;
var _32944__$1 = this;
return (new domina.css.t_domina$css32942(self__.base,self__.expr,meta32943__$1));
});

domina.css.t_domina$css32942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32944){
var self__ = this;
var _32944__$1 = this;
return self__.meta32943;
});

domina.css.t_domina$css32942.prototype.domina$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

domina.css.t_domina$css32942.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__32938_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__32938_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t_domina$css32942.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__32939_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__32939_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t_domina$css32942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta32943","meta32943",-430825744,null)], null);
});

domina.css.t_domina$css32942.cljs$lang$type = true;

domina.css.t_domina$css32942.cljs$lang$ctorStr = "domina.css/t_domina$css32942";

domina.css.t_domina$css32942.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"domina.css/t_domina$css32942");
});

domina.css.__GT_t_domina$css32942 = (function domina$css$__GT_t_domina$css32942(base__$1,expr__$1,meta32943){
return (new domina.css.t_domina$css32942(base__$1,expr__$1,meta32943));
});

}

return (new domina.css.t_domina$css32942(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=css.js.map?rel=1515638882831
