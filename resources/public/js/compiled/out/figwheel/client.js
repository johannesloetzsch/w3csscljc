// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e41169){if((e41169 instanceof Error)){
var e = e41169;
return "Error: Unable to stringify";
} else {
throw e41169;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41172 = arguments.length;
switch (G__41172) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41170_SHARP_){
if(typeof p1__41170_SHARP_ === 'string'){
return p1__41170_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41170_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41175 = arguments.length;
var i__31363__auto___41176 = (0);
while(true){
if((i__31363__auto___41176 < len__31362__auto___41175)){
args__31369__auto__.push((arguments[i__31363__auto___41176]));

var G__41177 = (i__31363__auto___41176 + (1));
i__31363__auto___41176 = G__41177;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41174){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41174));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41179 = arguments.length;
var i__31363__auto___41180 = (0);
while(true){
if((i__31363__auto___41180 < len__31362__auto___41179)){
args__31369__auto__.push((arguments[i__31363__auto___41180]));

var G__41181 = (i__31363__auto___41180 + (1));
i__31363__auto___41180 = G__41181;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41178){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41178));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41182){
var map__41183 = p__41182;
var map__41183__$1 = ((((!((map__41183 == null)))?((((map__41183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41183):map__41183);
var message = cljs.core.get.call(null,map__41183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41183__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30083__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30071__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30071__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30071__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36156__auto___41262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___41262,ch){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___41262,ch){
return (function (state_41234){
var state_val_41235 = (state_41234[(1)]);
if((state_val_41235 === (7))){
var inst_41230 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41236_41263 = state_41234__$1;
(statearr_41236_41263[(2)] = inst_41230);

(statearr_41236_41263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (1))){
var state_41234__$1 = state_41234;
var statearr_41237_41264 = state_41234__$1;
(statearr_41237_41264[(2)] = null);

(statearr_41237_41264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (4))){
var inst_41187 = (state_41234[(7)]);
var inst_41187__$1 = (state_41234[(2)]);
var state_41234__$1 = (function (){var statearr_41238 = state_41234;
(statearr_41238[(7)] = inst_41187__$1);

return statearr_41238;
})();
if(cljs.core.truth_(inst_41187__$1)){
var statearr_41239_41265 = state_41234__$1;
(statearr_41239_41265[(1)] = (5));

} else {
var statearr_41240_41266 = state_41234__$1;
(statearr_41240_41266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (15))){
var inst_41194 = (state_41234[(8)]);
var inst_41209 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41194);
var inst_41210 = cljs.core.first.call(null,inst_41209);
var inst_41211 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41210);
var inst_41212 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41211)].join('');
var inst_41213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41212);
var state_41234__$1 = state_41234;
var statearr_41241_41267 = state_41234__$1;
(statearr_41241_41267[(2)] = inst_41213);

(statearr_41241_41267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (13))){
var inst_41218 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41242_41268 = state_41234__$1;
(statearr_41242_41268[(2)] = inst_41218);

(statearr_41242_41268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (6))){
var state_41234__$1 = state_41234;
var statearr_41243_41269 = state_41234__$1;
(statearr_41243_41269[(2)] = null);

(statearr_41243_41269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (17))){
var inst_41216 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41244_41270 = state_41234__$1;
(statearr_41244_41270[(2)] = inst_41216);

(statearr_41244_41270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (3))){
var inst_41232 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41234__$1,inst_41232);
} else {
if((state_val_41235 === (12))){
var inst_41193 = (state_41234[(9)]);
var inst_41207 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41193,opts);
var state_41234__$1 = state_41234;
if(cljs.core.truth_(inst_41207)){
var statearr_41245_41271 = state_41234__$1;
(statearr_41245_41271[(1)] = (15));

} else {
var statearr_41246_41272 = state_41234__$1;
(statearr_41246_41272[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (2))){
var state_41234__$1 = state_41234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41234__$1,(4),ch);
} else {
if((state_val_41235 === (11))){
var inst_41194 = (state_41234[(8)]);
var inst_41199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41200 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41194);
var inst_41201 = cljs.core.async.timeout.call(null,(1000));
var inst_41202 = [inst_41200,inst_41201];
var inst_41203 = (new cljs.core.PersistentVector(null,2,(5),inst_41199,inst_41202,null));
var state_41234__$1 = state_41234;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41234__$1,(14),inst_41203);
} else {
if((state_val_41235 === (9))){
var inst_41194 = (state_41234[(8)]);
var inst_41220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41221 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41194);
var inst_41222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41221);
var inst_41223 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41222)].join('');
var inst_41224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41223);
var state_41234__$1 = (function (){var statearr_41247 = state_41234;
(statearr_41247[(10)] = inst_41220);

return statearr_41247;
})();
var statearr_41248_41273 = state_41234__$1;
(statearr_41248_41273[(2)] = inst_41224);

(statearr_41248_41273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (5))){
var inst_41187 = (state_41234[(7)]);
var inst_41189 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41190 = (new cljs.core.PersistentArrayMap(null,2,inst_41189,null));
var inst_41191 = (new cljs.core.PersistentHashSet(null,inst_41190,null));
var inst_41192 = figwheel.client.focus_msgs.call(null,inst_41191,inst_41187);
var inst_41193 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41192);
var inst_41194 = cljs.core.first.call(null,inst_41192);
var inst_41195 = figwheel.client.autoload_QMARK_.call(null);
var state_41234__$1 = (function (){var statearr_41249 = state_41234;
(statearr_41249[(8)] = inst_41194);

(statearr_41249[(9)] = inst_41193);

return statearr_41249;
})();
if(cljs.core.truth_(inst_41195)){
var statearr_41250_41274 = state_41234__$1;
(statearr_41250_41274[(1)] = (8));

} else {
var statearr_41251_41275 = state_41234__$1;
(statearr_41251_41275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (14))){
var inst_41205 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41252_41276 = state_41234__$1;
(statearr_41252_41276[(2)] = inst_41205);

(statearr_41252_41276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (16))){
var state_41234__$1 = state_41234;
var statearr_41253_41277 = state_41234__$1;
(statearr_41253_41277[(2)] = null);

(statearr_41253_41277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (10))){
var inst_41226 = (state_41234[(2)]);
var state_41234__$1 = (function (){var statearr_41254 = state_41234;
(statearr_41254[(11)] = inst_41226);

return statearr_41254;
})();
var statearr_41255_41278 = state_41234__$1;
(statearr_41255_41278[(2)] = null);

(statearr_41255_41278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (8))){
var inst_41193 = (state_41234[(9)]);
var inst_41197 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41193,opts);
var state_41234__$1 = state_41234;
if(cljs.core.truth_(inst_41197)){
var statearr_41256_41279 = state_41234__$1;
(statearr_41256_41279[(1)] = (11));

} else {
var statearr_41257_41280 = state_41234__$1;
(statearr_41257_41280[(1)] = (12));

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
});})(c__36156__auto___41262,ch))
;
return ((function (switch__36066__auto__,c__36156__auto___41262,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36067__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36067__auto____0 = (function (){
var statearr_41258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41258[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36067__auto__);

(statearr_41258[(1)] = (1));

return statearr_41258;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36067__auto____1 = (function (state_41234){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_41234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e41259){if((e41259 instanceof Object)){
var ex__36070__auto__ = e41259;
var statearr_41260_41281 = state_41234;
(statearr_41260_41281[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41282 = state_41234;
state_41234 = G__41282;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36067__auto__ = function(state_41234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36067__auto____1.call(this,state_41234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36067__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36067__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___41262,ch))
})();
var state__36158__auto__ = (function (){var statearr_41261 = f__36157__auto__.call(null);
(statearr_41261[(6)] = c__36156__auto___41262);

return statearr_41261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___41262,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41283_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41283_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41285 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41285){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41284){if((e41284 instanceof Error)){
var e = e41284;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41285], null));
} else {
var e = e41284;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41285))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41286){
var map__41287 = p__41286;
var map__41287__$1 = ((((!((map__41287 == null)))?((((map__41287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41287):map__41287);
var opts = map__41287__$1;
var build_id = cljs.core.get.call(null,map__41287__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41287,map__41287__$1,opts,build_id){
return (function (p__41289){
var vec__41290 = p__41289;
var seq__41291 = cljs.core.seq.call(null,vec__41290);
var first__41292 = cljs.core.first.call(null,seq__41291);
var seq__41291__$1 = cljs.core.next.call(null,seq__41291);
var map__41293 = first__41292;
var map__41293__$1 = ((((!((map__41293 == null)))?((((map__41293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41293):map__41293);
var msg = map__41293__$1;
var msg_name = cljs.core.get.call(null,map__41293__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41291__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41290,seq__41291,first__41292,seq__41291__$1,map__41293,map__41293__$1,msg,msg_name,_,map__41287,map__41287__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41290,seq__41291,first__41292,seq__41291__$1,map__41293,map__41293__$1,msg,msg_name,_,map__41287,map__41287__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41287,map__41287__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41295){
var vec__41296 = p__41295;
var seq__41297 = cljs.core.seq.call(null,vec__41296);
var first__41298 = cljs.core.first.call(null,seq__41297);
var seq__41297__$1 = cljs.core.next.call(null,seq__41297);
var map__41299 = first__41298;
var map__41299__$1 = ((((!((map__41299 == null)))?((((map__41299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41299):map__41299);
var msg = map__41299__$1;
var msg_name = cljs.core.get.call(null,map__41299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41297__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41301){
var map__41302 = p__41301;
var map__41302__$1 = ((((!((map__41302 == null)))?((((map__41302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41302):map__41302);
var on_compile_warning = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41302,map__41302__$1,on_compile_warning,on_compile_fail){
return (function (p__41304){
var vec__41305 = p__41304;
var seq__41306 = cljs.core.seq.call(null,vec__41305);
var first__41307 = cljs.core.first.call(null,seq__41306);
var seq__41306__$1 = cljs.core.next.call(null,seq__41306);
var map__41308 = first__41307;
var map__41308__$1 = ((((!((map__41308 == null)))?((((map__41308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41308):map__41308);
var msg = map__41308__$1;
var msg_name = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41306__$1;
var pred__41310 = cljs.core._EQ_;
var expr__41311 = msg_name;
if(cljs.core.truth_(pred__41310.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41311))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41310.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41311))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41302,map__41302__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__,msg_hist,msg_names,msg){
return (function (state_41400){
var state_val_41401 = (state_41400[(1)]);
if((state_val_41401 === (7))){
var inst_41320 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41320)){
var statearr_41402_41449 = state_41400__$1;
(statearr_41402_41449[(1)] = (8));

} else {
var statearr_41403_41450 = state_41400__$1;
(statearr_41403_41450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (20))){
var inst_41394 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41404_41451 = state_41400__$1;
(statearr_41404_41451[(2)] = inst_41394);

(statearr_41404_41451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (27))){
var inst_41390 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41405_41452 = state_41400__$1;
(statearr_41405_41452[(2)] = inst_41390);

(statearr_41405_41452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (1))){
var inst_41313 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41313)){
var statearr_41406_41453 = state_41400__$1;
(statearr_41406_41453[(1)] = (2));

} else {
var statearr_41407_41454 = state_41400__$1;
(statearr_41407_41454[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (24))){
var inst_41392 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41408_41455 = state_41400__$1;
(statearr_41408_41455[(2)] = inst_41392);

(statearr_41408_41455[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (4))){
var inst_41398 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41400__$1,inst_41398);
} else {
if((state_val_41401 === (15))){
var inst_41396 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41409_41456 = state_41400__$1;
(statearr_41409_41456[(2)] = inst_41396);

(statearr_41409_41456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (21))){
var inst_41349 = (state_41400[(2)]);
var inst_41350 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41351 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41350);
var state_41400__$1 = (function (){var statearr_41410 = state_41400;
(statearr_41410[(7)] = inst_41349);

return statearr_41410;
})();
var statearr_41411_41457 = state_41400__$1;
(statearr_41411_41457[(2)] = inst_41351);

(statearr_41411_41457[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (31))){
var inst_41379 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41379)){
var statearr_41412_41458 = state_41400__$1;
(statearr_41412_41458[(1)] = (34));

} else {
var statearr_41413_41459 = state_41400__$1;
(statearr_41413_41459[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (32))){
var inst_41388 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41414_41460 = state_41400__$1;
(statearr_41414_41460[(2)] = inst_41388);

(statearr_41414_41460[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (33))){
var inst_41375 = (state_41400[(2)]);
var inst_41376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41377 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41376);
var state_41400__$1 = (function (){var statearr_41415 = state_41400;
(statearr_41415[(8)] = inst_41375);

return statearr_41415;
})();
var statearr_41416_41461 = state_41400__$1;
(statearr_41416_41461[(2)] = inst_41377);

(statearr_41416_41461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (13))){
var inst_41334 = figwheel.client.heads_up.clear.call(null);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(16),inst_41334);
} else {
if((state_val_41401 === (22))){
var inst_41355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41356 = figwheel.client.heads_up.append_warning_message.call(null,inst_41355);
var state_41400__$1 = state_41400;
var statearr_41417_41462 = state_41400__$1;
(statearr_41417_41462[(2)] = inst_41356);

(statearr_41417_41462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (36))){
var inst_41386 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41418_41463 = state_41400__$1;
(statearr_41418_41463[(2)] = inst_41386);

(statearr_41418_41463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (29))){
var inst_41366 = (state_41400[(2)]);
var inst_41367 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41368 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41367);
var state_41400__$1 = (function (){var statearr_41419 = state_41400;
(statearr_41419[(9)] = inst_41366);

return statearr_41419;
})();
var statearr_41420_41464 = state_41400__$1;
(statearr_41420_41464[(2)] = inst_41368);

(statearr_41420_41464[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (6))){
var inst_41315 = (state_41400[(10)]);
var state_41400__$1 = state_41400;
var statearr_41421_41465 = state_41400__$1;
(statearr_41421_41465[(2)] = inst_41315);

(statearr_41421_41465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (28))){
var inst_41362 = (state_41400[(2)]);
var inst_41363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41364 = figwheel.client.heads_up.display_warning.call(null,inst_41363);
var state_41400__$1 = (function (){var statearr_41422 = state_41400;
(statearr_41422[(11)] = inst_41362);

return statearr_41422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(29),inst_41364);
} else {
if((state_val_41401 === (25))){
var inst_41360 = figwheel.client.heads_up.clear.call(null);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(28),inst_41360);
} else {
if((state_val_41401 === (34))){
var inst_41381 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(37),inst_41381);
} else {
if((state_val_41401 === (17))){
var inst_41340 = (state_41400[(2)]);
var inst_41341 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41342 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41341);
var state_41400__$1 = (function (){var statearr_41423 = state_41400;
(statearr_41423[(12)] = inst_41340);

return statearr_41423;
})();
var statearr_41424_41466 = state_41400__$1;
(statearr_41424_41466[(2)] = inst_41342);

(statearr_41424_41466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (3))){
var inst_41332 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41332)){
var statearr_41425_41467 = state_41400__$1;
(statearr_41425_41467[(1)] = (13));

} else {
var statearr_41426_41468 = state_41400__$1;
(statearr_41426_41468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (12))){
var inst_41328 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41427_41469 = state_41400__$1;
(statearr_41427_41469[(2)] = inst_41328);

(statearr_41427_41469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (2))){
var inst_41315 = (state_41400[(10)]);
var inst_41315__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41400__$1 = (function (){var statearr_41428 = state_41400;
(statearr_41428[(10)] = inst_41315__$1);

return statearr_41428;
})();
if(cljs.core.truth_(inst_41315__$1)){
var statearr_41429_41470 = state_41400__$1;
(statearr_41429_41470[(1)] = (5));

} else {
var statearr_41430_41471 = state_41400__$1;
(statearr_41430_41471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (23))){
var inst_41358 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41358)){
var statearr_41431_41472 = state_41400__$1;
(statearr_41431_41472[(1)] = (25));

} else {
var statearr_41432_41473 = state_41400__$1;
(statearr_41432_41473[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (35))){
var state_41400__$1 = state_41400;
var statearr_41433_41474 = state_41400__$1;
(statearr_41433_41474[(2)] = null);

(statearr_41433_41474[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (19))){
var inst_41353 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41353)){
var statearr_41434_41475 = state_41400__$1;
(statearr_41434_41475[(1)] = (22));

} else {
var statearr_41435_41476 = state_41400__$1;
(statearr_41435_41476[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (11))){
var inst_41324 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41436_41477 = state_41400__$1;
(statearr_41436_41477[(2)] = inst_41324);

(statearr_41436_41477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (9))){
var inst_41326 = figwheel.client.heads_up.clear.call(null);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(12),inst_41326);
} else {
if((state_val_41401 === (5))){
var inst_41317 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41400__$1 = state_41400;
var statearr_41437_41478 = state_41400__$1;
(statearr_41437_41478[(2)] = inst_41317);

(statearr_41437_41478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (14))){
var inst_41344 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41344)){
var statearr_41438_41479 = state_41400__$1;
(statearr_41438_41479[(1)] = (18));

} else {
var statearr_41439_41480 = state_41400__$1;
(statearr_41439_41480[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (26))){
var inst_41370 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41370)){
var statearr_41440_41481 = state_41400__$1;
(statearr_41440_41481[(1)] = (30));

} else {
var statearr_41441_41482 = state_41400__$1;
(statearr_41441_41482[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (16))){
var inst_41336 = (state_41400[(2)]);
var inst_41337 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41338 = figwheel.client.heads_up.display_exception.call(null,inst_41337);
var state_41400__$1 = (function (){var statearr_41442 = state_41400;
(statearr_41442[(13)] = inst_41336);

return statearr_41442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(17),inst_41338);
} else {
if((state_val_41401 === (30))){
var inst_41372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41373 = figwheel.client.heads_up.display_warning.call(null,inst_41372);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(33),inst_41373);
} else {
if((state_val_41401 === (10))){
var inst_41330 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41443_41483 = state_41400__$1;
(statearr_41443_41483[(2)] = inst_41330);

(statearr_41443_41483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (18))){
var inst_41346 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41347 = figwheel.client.heads_up.display_exception.call(null,inst_41346);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(21),inst_41347);
} else {
if((state_val_41401 === (37))){
var inst_41383 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41444_41484 = state_41400__$1;
(statearr_41444_41484[(2)] = inst_41383);

(statearr_41444_41484[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (8))){
var inst_41322 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(11),inst_41322);
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
});})(c__36156__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36066__auto__,c__36156__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto____0 = (function (){
var statearr_41445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41445[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto__);

(statearr_41445[(1)] = (1));

return statearr_41445;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto____1 = (function (state_41400){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_41400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e41446){if((e41446 instanceof Object)){
var ex__36070__auto__ = e41446;
var statearr_41447_41485 = state_41400;
(statearr_41447_41485[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41486 = state_41400;
state_41400 = G__41486;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto__ = function(state_41400){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto____1.call(this,state_41400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__,msg_hist,msg_names,msg))
})();
var state__36158__auto__ = (function (){var statearr_41448 = f__36157__auto__.call(null);
(statearr_41448[(6)] = c__36156__auto__);

return statearr_41448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__,msg_hist,msg_names,msg))
);

return c__36156__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36156__auto___41515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___41515,ch){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___41515,ch){
return (function (state_41501){
var state_val_41502 = (state_41501[(1)]);
if((state_val_41502 === (1))){
var state_41501__$1 = state_41501;
var statearr_41503_41516 = state_41501__$1;
(statearr_41503_41516[(2)] = null);

(statearr_41503_41516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (2))){
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41501__$1,(4),ch);
} else {
if((state_val_41502 === (3))){
var inst_41499 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41501__$1,inst_41499);
} else {
if((state_val_41502 === (4))){
var inst_41489 = (state_41501[(7)]);
var inst_41489__$1 = (state_41501[(2)]);
var state_41501__$1 = (function (){var statearr_41504 = state_41501;
(statearr_41504[(7)] = inst_41489__$1);

return statearr_41504;
})();
if(cljs.core.truth_(inst_41489__$1)){
var statearr_41505_41517 = state_41501__$1;
(statearr_41505_41517[(1)] = (5));

} else {
var statearr_41506_41518 = state_41501__$1;
(statearr_41506_41518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (5))){
var inst_41489 = (state_41501[(7)]);
var inst_41491 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41489);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41501__$1,(8),inst_41491);
} else {
if((state_val_41502 === (6))){
var state_41501__$1 = state_41501;
var statearr_41507_41519 = state_41501__$1;
(statearr_41507_41519[(2)] = null);

(statearr_41507_41519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (7))){
var inst_41497 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41508_41520 = state_41501__$1;
(statearr_41508_41520[(2)] = inst_41497);

(statearr_41508_41520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (8))){
var inst_41493 = (state_41501[(2)]);
var state_41501__$1 = (function (){var statearr_41509 = state_41501;
(statearr_41509[(8)] = inst_41493);

return statearr_41509;
})();
var statearr_41510_41521 = state_41501__$1;
(statearr_41510_41521[(2)] = null);

(statearr_41510_41521[(1)] = (2));


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
});})(c__36156__auto___41515,ch))
;
return ((function (switch__36066__auto__,c__36156__auto___41515,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36067__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36067__auto____0 = (function (){
var statearr_41511 = [null,null,null,null,null,null,null,null,null];
(statearr_41511[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36067__auto__);

(statearr_41511[(1)] = (1));

return statearr_41511;
});
var figwheel$client$heads_up_plugin_$_state_machine__36067__auto____1 = (function (state_41501){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_41501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e41512){if((e41512 instanceof Object)){
var ex__36070__auto__ = e41512;
var statearr_41513_41522 = state_41501;
(statearr_41513_41522[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41523 = state_41501;
state_41501 = G__41523;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36067__auto__ = function(state_41501){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36067__auto____1.call(this,state_41501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36067__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36067__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___41515,ch))
})();
var state__36158__auto__ = (function (){var statearr_41514 = f__36157__auto__.call(null);
(statearr_41514[(6)] = c__36156__auto___41515);

return statearr_41514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___41515,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__){
return (function (state_41529){
var state_val_41530 = (state_41529[(1)]);
if((state_val_41530 === (1))){
var inst_41524 = cljs.core.async.timeout.call(null,(3000));
var state_41529__$1 = state_41529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41529__$1,(2),inst_41524);
} else {
if((state_val_41530 === (2))){
var inst_41526 = (state_41529[(2)]);
var inst_41527 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41529__$1 = (function (){var statearr_41531 = state_41529;
(statearr_41531[(7)] = inst_41526);

return statearr_41531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41529__$1,inst_41527);
} else {
return null;
}
}
});})(c__36156__auto__))
;
return ((function (switch__36066__auto__,c__36156__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36067__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36067__auto____0 = (function (){
var statearr_41532 = [null,null,null,null,null,null,null,null];
(statearr_41532[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36067__auto__);

(statearr_41532[(1)] = (1));

return statearr_41532;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36067__auto____1 = (function (state_41529){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_41529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e41533){if((e41533 instanceof Object)){
var ex__36070__auto__ = e41533;
var statearr_41534_41536 = state_41529;
(statearr_41534_41536[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41537 = state_41529;
state_41529 = G__41537;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36067__auto__ = function(state_41529){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36067__auto____1.call(this,state_41529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36067__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36067__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__))
})();
var state__36158__auto__ = (function (){var statearr_41535 = f__36157__auto__.call(null);
(statearr_41535[(6)] = c__36156__auto__);

return statearr_41535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__))
);

return c__36156__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__,figwheel_version,temp__5457__auto__){
return (function (state_41544){
var state_val_41545 = (state_41544[(1)]);
if((state_val_41545 === (1))){
var inst_41538 = cljs.core.async.timeout.call(null,(2000));
var state_41544__$1 = state_41544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41544__$1,(2),inst_41538);
} else {
if((state_val_41545 === (2))){
var inst_41540 = (state_41544[(2)]);
var inst_41541 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41542 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41541);
var state_41544__$1 = (function (){var statearr_41546 = state_41544;
(statearr_41546[(7)] = inst_41540);

return statearr_41546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41544__$1,inst_41542);
} else {
return null;
}
}
});})(c__36156__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__36066__auto__,c__36156__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto____0 = (function (){
var statearr_41547 = [null,null,null,null,null,null,null,null];
(statearr_41547[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto__);

(statearr_41547[(1)] = (1));

return statearr_41547;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto____1 = (function (state_41544){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_41544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e41548){if((e41548 instanceof Object)){
var ex__36070__auto__ = e41548;
var statearr_41549_41551 = state_41544;
(statearr_41549_41551[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41552 = state_41544;
state_41544 = G__41552;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto__ = function(state_41544){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto____1.call(this,state_41544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__,figwheel_version,temp__5457__auto__))
})();
var state__36158__auto__ = (function (){var statearr_41550 = f__36157__auto__.call(null);
(statearr_41550[(6)] = c__36156__auto__);

return statearr_41550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__,figwheel_version,temp__5457__auto__))
);

return c__36156__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41553){
var map__41554 = p__41553;
var map__41554__$1 = ((((!((map__41554 == null)))?((((map__41554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41554):map__41554);
var file = cljs.core.get.call(null,map__41554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41554__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41554__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41556 = "";
var G__41556__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41556),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41556);
var G__41556__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41556__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41556__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = line;
if(cljs.core.truth_(and__30071__auto__)){
return column;
} else {
return and__30071__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41556__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41556__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41557){
var map__41558 = p__41557;
var map__41558__$1 = ((((!((map__41558 == null)))?((((map__41558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41558):map__41558);
var ed = map__41558__$1;
var formatted_exception = cljs.core.get.call(null,map__41558__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41558__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41558__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41560_41564 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41561_41565 = null;
var count__41562_41566 = (0);
var i__41563_41567 = (0);
while(true){
if((i__41563_41567 < count__41562_41566)){
var msg_41568 = cljs.core._nth.call(null,chunk__41561_41565,i__41563_41567);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41568);

var G__41569 = seq__41560_41564;
var G__41570 = chunk__41561_41565;
var G__41571 = count__41562_41566;
var G__41572 = (i__41563_41567 + (1));
seq__41560_41564 = G__41569;
chunk__41561_41565 = G__41570;
count__41562_41566 = G__41571;
i__41563_41567 = G__41572;
continue;
} else {
var temp__5457__auto___41573 = cljs.core.seq.call(null,seq__41560_41564);
if(temp__5457__auto___41573){
var seq__41560_41574__$1 = temp__5457__auto___41573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41560_41574__$1)){
var c__31014__auto___41575 = cljs.core.chunk_first.call(null,seq__41560_41574__$1);
var G__41576 = cljs.core.chunk_rest.call(null,seq__41560_41574__$1);
var G__41577 = c__31014__auto___41575;
var G__41578 = cljs.core.count.call(null,c__31014__auto___41575);
var G__41579 = (0);
seq__41560_41564 = G__41576;
chunk__41561_41565 = G__41577;
count__41562_41566 = G__41578;
i__41563_41567 = G__41579;
continue;
} else {
var msg_41580 = cljs.core.first.call(null,seq__41560_41574__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41580);

var G__41581 = cljs.core.next.call(null,seq__41560_41574__$1);
var G__41582 = null;
var G__41583 = (0);
var G__41584 = (0);
seq__41560_41564 = G__41581;
chunk__41561_41565 = G__41582;
count__41562_41566 = G__41583;
i__41563_41567 = G__41584;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41585){
var map__41586 = p__41585;
var map__41586__$1 = ((((!((map__41586 == null)))?((((map__41586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41586):map__41586);
var w = map__41586__$1;
var message = cljs.core.get.call(null,map__41586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30071__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30071__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41588 = cljs.core.seq.call(null,plugins);
var chunk__41589 = null;
var count__41590 = (0);
var i__41591 = (0);
while(true){
if((i__41591 < count__41590)){
var vec__41592 = cljs.core._nth.call(null,chunk__41589,i__41591);
var k = cljs.core.nth.call(null,vec__41592,(0),null);
var plugin = cljs.core.nth.call(null,vec__41592,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41598 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41588,chunk__41589,count__41590,i__41591,pl_41598,vec__41592,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41598.call(null,msg_hist);
});})(seq__41588,chunk__41589,count__41590,i__41591,pl_41598,vec__41592,k,plugin))
);
} else {
}

var G__41599 = seq__41588;
var G__41600 = chunk__41589;
var G__41601 = count__41590;
var G__41602 = (i__41591 + (1));
seq__41588 = G__41599;
chunk__41589 = G__41600;
count__41590 = G__41601;
i__41591 = G__41602;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41588);
if(temp__5457__auto__){
var seq__41588__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41588__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__41588__$1);
var G__41603 = cljs.core.chunk_rest.call(null,seq__41588__$1);
var G__41604 = c__31014__auto__;
var G__41605 = cljs.core.count.call(null,c__31014__auto__);
var G__41606 = (0);
seq__41588 = G__41603;
chunk__41589 = G__41604;
count__41590 = G__41605;
i__41591 = G__41606;
continue;
} else {
var vec__41595 = cljs.core.first.call(null,seq__41588__$1);
var k = cljs.core.nth.call(null,vec__41595,(0),null);
var plugin = cljs.core.nth.call(null,vec__41595,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41607 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41588,chunk__41589,count__41590,i__41591,pl_41607,vec__41595,k,plugin,seq__41588__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41607.call(null,msg_hist);
});})(seq__41588,chunk__41589,count__41590,i__41591,pl_41607,vec__41595,k,plugin,seq__41588__$1,temp__5457__auto__))
);
} else {
}

var G__41608 = cljs.core.next.call(null,seq__41588__$1);
var G__41609 = null;
var G__41610 = (0);
var G__41611 = (0);
seq__41588 = G__41608;
chunk__41589 = G__41609;
count__41590 = G__41610;
i__41591 = G__41611;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__41613 = arguments.length;
switch (G__41613) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41614_41619 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41615_41620 = null;
var count__41616_41621 = (0);
var i__41617_41622 = (0);
while(true){
if((i__41617_41622 < count__41616_41621)){
var msg_41623 = cljs.core._nth.call(null,chunk__41615_41620,i__41617_41622);
figwheel.client.socket.handle_incoming_message.call(null,msg_41623);

var G__41624 = seq__41614_41619;
var G__41625 = chunk__41615_41620;
var G__41626 = count__41616_41621;
var G__41627 = (i__41617_41622 + (1));
seq__41614_41619 = G__41624;
chunk__41615_41620 = G__41625;
count__41616_41621 = G__41626;
i__41617_41622 = G__41627;
continue;
} else {
var temp__5457__auto___41628 = cljs.core.seq.call(null,seq__41614_41619);
if(temp__5457__auto___41628){
var seq__41614_41629__$1 = temp__5457__auto___41628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41614_41629__$1)){
var c__31014__auto___41630 = cljs.core.chunk_first.call(null,seq__41614_41629__$1);
var G__41631 = cljs.core.chunk_rest.call(null,seq__41614_41629__$1);
var G__41632 = c__31014__auto___41630;
var G__41633 = cljs.core.count.call(null,c__31014__auto___41630);
var G__41634 = (0);
seq__41614_41619 = G__41631;
chunk__41615_41620 = G__41632;
count__41616_41621 = G__41633;
i__41617_41622 = G__41634;
continue;
} else {
var msg_41635 = cljs.core.first.call(null,seq__41614_41629__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41635);

var G__41636 = cljs.core.next.call(null,seq__41614_41629__$1);
var G__41637 = null;
var G__41638 = (0);
var G__41639 = (0);
seq__41614_41619 = G__41636;
chunk__41615_41620 = G__41637;
count__41616_41621 = G__41638;
i__41617_41622 = G__41639;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31369__auto__ = [];
var len__31362__auto___41644 = arguments.length;
var i__31363__auto___41645 = (0);
while(true){
if((i__31363__auto___41645 < len__31362__auto___41644)){
args__31369__auto__.push((arguments[i__31363__auto___41645]));

var G__41646 = (i__31363__auto___41645 + (1));
i__31363__auto___41645 = G__41646;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41641){
var map__41642 = p__41641;
var map__41642__$1 = ((((!((map__41642 == null)))?((((map__41642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41642):map__41642);
var opts = map__41642__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41640){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41640));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41647){if((e41647 instanceof Error)){
var e = e41647;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41647;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41648){
var map__41649 = p__41648;
var map__41649__$1 = ((((!((map__41649 == null)))?((((map__41649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41649):map__41649);
var msg_name = cljs.core.get.call(null,map__41649__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515638895209
