// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30816__auto__ = (((value == null))?null:value);
var m__30817__auto__ = (devtools.format._header[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,value);
} else {
var m__30817__auto____$1 = (devtools.format._header["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30816__auto__ = (((value == null))?null:value);
var m__30817__auto__ = (devtools.format._has_body[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,value);
} else {
var m__30817__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30816__auto__ = (((value == null))?null:value);
var m__30817__auto__ = (devtools.format._body[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,value);
} else {
var m__30817__auto____$1 = (devtools.format._body["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41724 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41724["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41725 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41725["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41726 = temp__5455__auto____$2;
return (o41726["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41727 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41727["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41728 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41728["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41729 = temp__5455__auto____$2;
return (o41729["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41730 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41730["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41731 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41731["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41732 = temp__5455__auto____$2;
return (o41732["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41733 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41733["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41734 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41734["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41735 = temp__5455__auto____$2;
return (o41735["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41736 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41736["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41737 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41737["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41738 = temp__5455__auto____$2;
return (o41738["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41739 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41739["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41740 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41740["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41741 = temp__5455__auto____$2;
return (o41741["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41742 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41742["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41743 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41743["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41744 = temp__5455__auto____$2;
return (o41744["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41746 = arguments.length;
var i__31363__auto___41747 = (0);
while(true){
if((i__31363__auto___41747 < len__31362__auto___41746)){
args__31369__auto__.push((arguments[i__31363__auto___41747]));

var G__41748 = (i__31363__auto___41747 + (1));
i__31363__auto___41747 = G__41748;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq41745){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41745));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41750 = arguments.length;
var i__31363__auto___41751 = (0);
while(true){
if((i__31363__auto___41751 < len__31362__auto___41750)){
args__31369__auto__.push((arguments[i__31363__auto___41751]));

var G__41752 = (i__31363__auto___41751 + (1));
i__31363__auto___41751 = G__41752;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq41749){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41749));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41754 = arguments.length;
var i__31363__auto___41755 = (0);
while(true){
if((i__31363__auto___41755 < len__31362__auto___41754)){
args__31369__auto__.push((arguments[i__31363__auto___41755]));

var G__41756 = (i__31363__auto___41755 + (1));
i__31363__auto___41755 = G__41756;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq41753){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41753));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41758 = arguments.length;
var i__31363__auto___41759 = (0);
while(true){
if((i__31363__auto___41759 < len__31362__auto___41758)){
args__31369__auto__.push((arguments[i__31363__auto___41759]));

var G__41760 = (i__31363__auto___41759 + (1));
i__31363__auto___41759 = G__41760;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41757){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41757));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41762 = arguments.length;
var i__31363__auto___41763 = (0);
while(true){
if((i__31363__auto___41763 < len__31362__auto___41762)){
args__31369__auto__.push((arguments[i__31363__auto___41763]));

var G__41764 = (i__31363__auto___41763 + (1));
i__31363__auto___41763 = G__41764;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq41761){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41761));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41766 = arguments.length;
var i__31363__auto___41767 = (0);
while(true){
if((i__31363__auto___41767 < len__31362__auto___41766)){
args__31369__auto__.push((arguments[i__31363__auto___41767]));

var G__41768 = (i__31363__auto___41767 + (1));
i__31363__auto___41767 = G__41768;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq41765){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41765));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41770 = arguments.length;
var i__31363__auto___41771 = (0);
while(true){
if((i__31363__auto___41771 < len__31362__auto___41770)){
args__31369__auto__.push((arguments[i__31363__auto___41771]));

var G__41772 = (i__31363__auto___41771 + (1));
i__31363__auto___41771 = G__41772;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq41769){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41769));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41780 = arguments.length;
var i__31363__auto___41781 = (0);
while(true){
if((i__31363__auto___41781 < len__31362__auto___41780)){
args__31369__auto__.push((arguments[i__31363__auto___41781]));

var G__41782 = (i__31363__auto___41781 + (1));
i__31363__auto___41781 = G__41782;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41776){
var vec__41777 = p__41776;
var state_override = cljs.core.nth.call(null,vec__41777,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41777,state_override){
return (function (p1__41773_SHARP_){
return cljs.core.merge.call(null,p1__41773_SHARP_,state_override);
});})(vec__41777,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq41774){
var G__41775 = cljs.core.first.call(null,seq41774);
var seq41774__$1 = cljs.core.next.call(null,seq41774);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__41775,seq41774__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41784 = arguments.length;
var i__31363__auto___41785 = (0);
while(true){
if((i__31363__auto___41785 < len__31362__auto___41784)){
args__31369__auto__.push((arguments[i__31363__auto___41785]));

var G__41786 = (i__31363__auto___41785 + (1));
i__31363__auto___41785 = G__41786;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq41783){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41783));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41789 = arguments.length;
var i__31363__auto___41790 = (0);
while(true){
if((i__31363__auto___41790 < len__31362__auto___41789)){
args__31369__auto__.push((arguments[i__31363__auto___41790]));

var G__41791 = (i__31363__auto___41790 + (1));
i__31363__auto___41790 = G__41791;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41787){
var G__41788 = cljs.core.first.call(null,seq41787);
var seq41787__$1 = cljs.core.next.call(null,seq41787);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__41788,seq41787__$1);
});


//# sourceMappingURL=format.js.map?rel=1515638895572
