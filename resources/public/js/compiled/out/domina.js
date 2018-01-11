// Compiled by ClojureScript 1.9.946 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_32512 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_32513 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_32514 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_32514,opt_wrapper_32512,table_section_wrapper_32513,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_32512,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_32513,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_32513,cell_wrapper_32514,table_section_wrapper_32513,table_section_wrapper_32513]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__30071__auto__ = div.firstChild;
if(cljs.core.truth_(and__30071__auto__)){
return div.firstChild.childNodes;
} else {
return and__30071__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__32515 = cljs.core.seq.call(null,tbody);
var chunk__32516 = null;
var count__32517 = (0);
var i__32518 = (0);
while(true){
if((i__32518 < count__32517)){
var child = cljs.core._nth.call(null,chunk__32516,i__32518);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__32519 = seq__32515;
var G__32520 = chunk__32516;
var G__32521 = count__32517;
var G__32522 = (i__32518 + (1));
seq__32515 = G__32519;
chunk__32516 = G__32520;
count__32517 = G__32521;
i__32518 = G__32522;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32515);
if(temp__5457__auto__){
var seq__32515__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32515__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__32515__$1);
var G__32523 = cljs.core.chunk_rest.call(null,seq__32515__$1);
var G__32524 = c__31014__auto__;
var G__32525 = cljs.core.count.call(null,c__31014__auto__);
var G__32526 = (0);
seq__32515 = G__32523;
chunk__32516 = G__32524;
count__32517 = G__32525;
i__32518 = G__32526;
continue;
} else {
var child = cljs.core.first.call(null,seq__32515__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__32527 = cljs.core.next.call(null,seq__32515__$1);
var G__32528 = null;
var G__32529 = (0);
var G__32530 = (0);
seq__32515 = G__32527;
chunk__32516 = G__32528;
count__32517 = G__32529;
i__32518 = G__32530;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__32531 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__32531,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__32531,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__32531,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__32534 = wrapper.lastChild;
var G__32535 = (level - (1));
wrapper = G__32534;
level = G__32535;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__30071__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__30071__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__30071__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__30816__auto__ = (((content == null))?null:content);
var m__30817__auto__ = (domina.nodes[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,content);
} else {
var m__30817__auto____$1 = (domina.nodes["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__30816__auto__ = (((nodeseq == null))?null:nodeseq);
var m__30817__auto__ = (domina.single_node[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,nodeseq);
} else {
var m__30817__auto____$1 = (domina.single_node["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__31369__auto__ = [];
var len__31362__auto___32537 = arguments.length;
var i__31363__auto___32538 = (0);
while(true){
if((i__31363__auto___32538 < len__31362__auto___32537)){
args__31369__auto__.push((arguments[i__31363__auto___32538]));

var G__32539 = (i__31363__auto___32538 + (1));
i__31363__auto___32538 = G__32539;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq32536){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32536));
});

domina.log = (function domina$log(var_args){
var args__31369__auto__ = [];
var len__31362__auto___32541 = arguments.length;
var i__31363__auto___32542 = (0);
while(true){
if((i__31363__auto___32542 < len__31362__auto___32541)){
args__31369__auto__.push((arguments[i__31363__auto___32542]));

var G__32543 = (i__31363__auto___32542 + (1));
i__31363__auto___32542 = G__32543;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq32540){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32540));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__31369__auto__ = [];
var len__31362__auto___32545 = arguments.length;
var i__31363__auto___32546 = (0);
while(true){
if((i__31363__auto___32546 < len__31362__auto___32545)){
args__31369__auto__.push((arguments[i__31363__auto___32546]));

var G__32547 = (i__31363__auto___32546 + (1));
i__31363__auto___32546 = G__32547;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq32544){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32544));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__32548_SHARP_){
return p1__32548_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__32549_SHARP_,p2__32550_SHARP_){
return goog.dom.insertChildAt(p1__32549_SHARP_,p2__32550_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__32552_SHARP_,p2__32551_SHARP_){
return goog.dom.insertSiblingBefore(p2__32551_SHARP_,p1__32552_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__32554_SHARP_,p2__32553_SHARP_){
return goog.dom.insertSiblingAfter(p2__32553_SHARP_,p1__32554_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__32556_SHARP_,p2__32555_SHARP_){
return goog.dom.replaceNode(p2__32555_SHARP_,p1__32556_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___32564 = arguments.length;
var i__31363__auto___32565 = (0);
while(true){
if((i__31363__auto___32565 < len__31362__auto___32564)){
args__31369__auto__.push((arguments[i__31363__auto___32565]));

var G__32566 = (i__31363__auto___32565 + (1));
i__31363__auto___32565 = G__32566;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((2) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31370__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__32560_32567 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32561_32568 = null;
var count__32562_32569 = (0);
var i__32563_32570 = (0);
while(true){
if((i__32563_32570 < count__32562_32569)){
var n_32571 = cljs.core._nth.call(null,chunk__32561_32568,i__32563_32570);
goog.style.setStyle(n_32571,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__32572 = seq__32560_32567;
var G__32573 = chunk__32561_32568;
var G__32574 = count__32562_32569;
var G__32575 = (i__32563_32570 + (1));
seq__32560_32567 = G__32572;
chunk__32561_32568 = G__32573;
count__32562_32569 = G__32574;
i__32563_32570 = G__32575;
continue;
} else {
var temp__5457__auto___32576 = cljs.core.seq.call(null,seq__32560_32567);
if(temp__5457__auto___32576){
var seq__32560_32577__$1 = temp__5457__auto___32576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32560_32577__$1)){
var c__31014__auto___32578 = cljs.core.chunk_first.call(null,seq__32560_32577__$1);
var G__32579 = cljs.core.chunk_rest.call(null,seq__32560_32577__$1);
var G__32580 = c__31014__auto___32578;
var G__32581 = cljs.core.count.call(null,c__31014__auto___32578);
var G__32582 = (0);
seq__32560_32567 = G__32579;
chunk__32561_32568 = G__32580;
count__32562_32569 = G__32581;
i__32563_32570 = G__32582;
continue;
} else {
var n_32583 = cljs.core.first.call(null,seq__32560_32577__$1);
goog.style.setStyle(n_32583,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__32584 = cljs.core.next.call(null,seq__32560_32577__$1);
var G__32585 = null;
var G__32586 = (0);
var G__32587 = (0);
seq__32560_32567 = G__32584;
chunk__32561_32568 = G__32585;
count__32562_32569 = G__32586;
i__32563_32570 = G__32587;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq32557){
var G__32558 = cljs.core.first.call(null,seq32557);
var seq32557__$1 = cljs.core.next.call(null,seq32557);
var G__32559 = cljs.core.first.call(null,seq32557__$1);
var seq32557__$2 = cljs.core.next.call(null,seq32557__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32558,G__32559,seq32557__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___32595 = arguments.length;
var i__31363__auto___32596 = (0);
while(true){
if((i__31363__auto___32596 < len__31362__auto___32595)){
args__31369__auto__.push((arguments[i__31363__auto___32596]));

var G__32597 = (i__31363__auto___32596 + (1));
i__31363__auto___32596 = G__32597;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((2) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31370__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__32591_32598 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32592_32599 = null;
var count__32593_32600 = (0);
var i__32594_32601 = (0);
while(true){
if((i__32594_32601 < count__32593_32600)){
var n_32602 = cljs.core._nth.call(null,chunk__32592_32599,i__32594_32601);
n_32602.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__32603 = seq__32591_32598;
var G__32604 = chunk__32592_32599;
var G__32605 = count__32593_32600;
var G__32606 = (i__32594_32601 + (1));
seq__32591_32598 = G__32603;
chunk__32592_32599 = G__32604;
count__32593_32600 = G__32605;
i__32594_32601 = G__32606;
continue;
} else {
var temp__5457__auto___32607 = cljs.core.seq.call(null,seq__32591_32598);
if(temp__5457__auto___32607){
var seq__32591_32608__$1 = temp__5457__auto___32607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32591_32608__$1)){
var c__31014__auto___32609 = cljs.core.chunk_first.call(null,seq__32591_32608__$1);
var G__32610 = cljs.core.chunk_rest.call(null,seq__32591_32608__$1);
var G__32611 = c__31014__auto___32609;
var G__32612 = cljs.core.count.call(null,c__31014__auto___32609);
var G__32613 = (0);
seq__32591_32598 = G__32610;
chunk__32592_32599 = G__32611;
count__32593_32600 = G__32612;
i__32594_32601 = G__32613;
continue;
} else {
var n_32614 = cljs.core.first.call(null,seq__32591_32608__$1);
n_32614.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__32615 = cljs.core.next.call(null,seq__32591_32608__$1);
var G__32616 = null;
var G__32617 = (0);
var G__32618 = (0);
seq__32591_32598 = G__32615;
chunk__32592_32599 = G__32616;
count__32593_32600 = G__32617;
i__32594_32601 = G__32618;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq32588){
var G__32589 = cljs.core.first.call(null,seq32588);
var seq32588__$1 = cljs.core.next.call(null,seq32588);
var G__32590 = cljs.core.first.call(null,seq32588__$1);
var seq32588__$2 = cljs.core.next.call(null,seq32588__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32589,G__32590,seq32588__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__32619_32623 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32620_32624 = null;
var count__32621_32625 = (0);
var i__32622_32626 = (0);
while(true){
if((i__32622_32626 < count__32621_32625)){
var n_32627 = cljs.core._nth.call(null,chunk__32620_32624,i__32622_32626);
n_32627.removeAttribute(cljs.core.name.call(null,name));

var G__32628 = seq__32619_32623;
var G__32629 = chunk__32620_32624;
var G__32630 = count__32621_32625;
var G__32631 = (i__32622_32626 + (1));
seq__32619_32623 = G__32628;
chunk__32620_32624 = G__32629;
count__32621_32625 = G__32630;
i__32622_32626 = G__32631;
continue;
} else {
var temp__5457__auto___32632 = cljs.core.seq.call(null,seq__32619_32623);
if(temp__5457__auto___32632){
var seq__32619_32633__$1 = temp__5457__auto___32632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32619_32633__$1)){
var c__31014__auto___32634 = cljs.core.chunk_first.call(null,seq__32619_32633__$1);
var G__32635 = cljs.core.chunk_rest.call(null,seq__32619_32633__$1);
var G__32636 = c__31014__auto___32634;
var G__32637 = cljs.core.count.call(null,c__31014__auto___32634);
var G__32638 = (0);
seq__32619_32623 = G__32635;
chunk__32620_32624 = G__32636;
count__32621_32625 = G__32637;
i__32622_32626 = G__32638;
continue;
} else {
var n_32639 = cljs.core.first.call(null,seq__32619_32633__$1);
n_32639.removeAttribute(cljs.core.name.call(null,name));

var G__32640 = cljs.core.next.call(null,seq__32619_32633__$1);
var G__32641 = null;
var G__32642 = (0);
var G__32643 = (0);
seq__32619_32623 = G__32640;
chunk__32620_32624 = G__32641;
count__32621_32625 = G__32642;
i__32622_32626 = G__32643;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__32644 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__32644,(0),null);
var v = cljs.core.nth.call(null,vec__32644,(1),null);
if(cljs.core.truth_((function (){var and__30071__auto__ = k;
if(cljs.core.truth_(and__30071__auto__)){
return v;
} else {
return and__30071__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__32647_SHARP_){
var attr = attrs.item(p1__32647_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__32648_32658 = cljs.core.seq.call(null,styles);
var chunk__32649_32659 = null;
var count__32650_32660 = (0);
var i__32651_32661 = (0);
while(true){
if((i__32651_32661 < count__32650_32660)){
var vec__32652_32662 = cljs.core._nth.call(null,chunk__32649_32659,i__32651_32661);
var name_32663 = cljs.core.nth.call(null,vec__32652_32662,(0),null);
var value_32664 = cljs.core.nth.call(null,vec__32652_32662,(1),null);
domina.set_style_BANG_.call(null,content,name_32663,value_32664);

var G__32665 = seq__32648_32658;
var G__32666 = chunk__32649_32659;
var G__32667 = count__32650_32660;
var G__32668 = (i__32651_32661 + (1));
seq__32648_32658 = G__32665;
chunk__32649_32659 = G__32666;
count__32650_32660 = G__32667;
i__32651_32661 = G__32668;
continue;
} else {
var temp__5457__auto___32669 = cljs.core.seq.call(null,seq__32648_32658);
if(temp__5457__auto___32669){
var seq__32648_32670__$1 = temp__5457__auto___32669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32648_32670__$1)){
var c__31014__auto___32671 = cljs.core.chunk_first.call(null,seq__32648_32670__$1);
var G__32672 = cljs.core.chunk_rest.call(null,seq__32648_32670__$1);
var G__32673 = c__31014__auto___32671;
var G__32674 = cljs.core.count.call(null,c__31014__auto___32671);
var G__32675 = (0);
seq__32648_32658 = G__32672;
chunk__32649_32659 = G__32673;
count__32650_32660 = G__32674;
i__32651_32661 = G__32675;
continue;
} else {
var vec__32655_32676 = cljs.core.first.call(null,seq__32648_32670__$1);
var name_32677 = cljs.core.nth.call(null,vec__32655_32676,(0),null);
var value_32678 = cljs.core.nth.call(null,vec__32655_32676,(1),null);
domina.set_style_BANG_.call(null,content,name_32677,value_32678);

var G__32679 = cljs.core.next.call(null,seq__32648_32670__$1);
var G__32680 = null;
var G__32681 = (0);
var G__32682 = (0);
seq__32648_32658 = G__32679;
chunk__32649_32659 = G__32680;
count__32650_32660 = G__32681;
i__32651_32661 = G__32682;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__32683_32693 = cljs.core.seq.call(null,attrs);
var chunk__32684_32694 = null;
var count__32685_32695 = (0);
var i__32686_32696 = (0);
while(true){
if((i__32686_32696 < count__32685_32695)){
var vec__32687_32697 = cljs.core._nth.call(null,chunk__32684_32694,i__32686_32696);
var name_32698 = cljs.core.nth.call(null,vec__32687_32697,(0),null);
var value_32699 = cljs.core.nth.call(null,vec__32687_32697,(1),null);
domina.set_attr_BANG_.call(null,content,name_32698,value_32699);

var G__32700 = seq__32683_32693;
var G__32701 = chunk__32684_32694;
var G__32702 = count__32685_32695;
var G__32703 = (i__32686_32696 + (1));
seq__32683_32693 = G__32700;
chunk__32684_32694 = G__32701;
count__32685_32695 = G__32702;
i__32686_32696 = G__32703;
continue;
} else {
var temp__5457__auto___32704 = cljs.core.seq.call(null,seq__32683_32693);
if(temp__5457__auto___32704){
var seq__32683_32705__$1 = temp__5457__auto___32704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32683_32705__$1)){
var c__31014__auto___32706 = cljs.core.chunk_first.call(null,seq__32683_32705__$1);
var G__32707 = cljs.core.chunk_rest.call(null,seq__32683_32705__$1);
var G__32708 = c__31014__auto___32706;
var G__32709 = cljs.core.count.call(null,c__31014__auto___32706);
var G__32710 = (0);
seq__32683_32693 = G__32707;
chunk__32684_32694 = G__32708;
count__32685_32695 = G__32709;
i__32686_32696 = G__32710;
continue;
} else {
var vec__32690_32711 = cljs.core.first.call(null,seq__32683_32705__$1);
var name_32712 = cljs.core.nth.call(null,vec__32690_32711,(0),null);
var value_32713 = cljs.core.nth.call(null,vec__32690_32711,(1),null);
domina.set_attr_BANG_.call(null,content,name_32712,value_32713);

var G__32714 = cljs.core.next.call(null,seq__32683_32705__$1);
var G__32715 = null;
var G__32716 = (0);
var G__32717 = (0);
seq__32683_32693 = G__32714;
chunk__32684_32694 = G__32715;
count__32685_32695 = G__32716;
i__32686_32696 = G__32717;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__32718_32722 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32719_32723 = null;
var count__32720_32724 = (0);
var i__32721_32725 = (0);
while(true){
if((i__32721_32725 < count__32720_32724)){
var node_32726 = cljs.core._nth.call(null,chunk__32719_32723,i__32721_32725);
goog.dom.classes.add(node_32726,class$);

var G__32727 = seq__32718_32722;
var G__32728 = chunk__32719_32723;
var G__32729 = count__32720_32724;
var G__32730 = (i__32721_32725 + (1));
seq__32718_32722 = G__32727;
chunk__32719_32723 = G__32728;
count__32720_32724 = G__32729;
i__32721_32725 = G__32730;
continue;
} else {
var temp__5457__auto___32731 = cljs.core.seq.call(null,seq__32718_32722);
if(temp__5457__auto___32731){
var seq__32718_32732__$1 = temp__5457__auto___32731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32718_32732__$1)){
var c__31014__auto___32733 = cljs.core.chunk_first.call(null,seq__32718_32732__$1);
var G__32734 = cljs.core.chunk_rest.call(null,seq__32718_32732__$1);
var G__32735 = c__31014__auto___32733;
var G__32736 = cljs.core.count.call(null,c__31014__auto___32733);
var G__32737 = (0);
seq__32718_32722 = G__32734;
chunk__32719_32723 = G__32735;
count__32720_32724 = G__32736;
i__32721_32725 = G__32737;
continue;
} else {
var node_32738 = cljs.core.first.call(null,seq__32718_32732__$1);
goog.dom.classes.add(node_32738,class$);

var G__32739 = cljs.core.next.call(null,seq__32718_32732__$1);
var G__32740 = null;
var G__32741 = (0);
var G__32742 = (0);
seq__32718_32722 = G__32739;
chunk__32719_32723 = G__32740;
count__32720_32724 = G__32741;
i__32721_32725 = G__32742;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__32743_32747 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32744_32748 = null;
var count__32745_32749 = (0);
var i__32746_32750 = (0);
while(true){
if((i__32746_32750 < count__32745_32749)){
var node_32751 = cljs.core._nth.call(null,chunk__32744_32748,i__32746_32750);
goog.dom.classes.remove(node_32751,class$);

var G__32752 = seq__32743_32747;
var G__32753 = chunk__32744_32748;
var G__32754 = count__32745_32749;
var G__32755 = (i__32746_32750 + (1));
seq__32743_32747 = G__32752;
chunk__32744_32748 = G__32753;
count__32745_32749 = G__32754;
i__32746_32750 = G__32755;
continue;
} else {
var temp__5457__auto___32756 = cljs.core.seq.call(null,seq__32743_32747);
if(temp__5457__auto___32756){
var seq__32743_32757__$1 = temp__5457__auto___32756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32743_32757__$1)){
var c__31014__auto___32758 = cljs.core.chunk_first.call(null,seq__32743_32757__$1);
var G__32759 = cljs.core.chunk_rest.call(null,seq__32743_32757__$1);
var G__32760 = c__31014__auto___32758;
var G__32761 = cljs.core.count.call(null,c__31014__auto___32758);
var G__32762 = (0);
seq__32743_32747 = G__32759;
chunk__32744_32748 = G__32760;
count__32745_32749 = G__32761;
i__32746_32750 = G__32762;
continue;
} else {
var node_32763 = cljs.core.first.call(null,seq__32743_32757__$1);
goog.dom.classes.remove(node_32763,class$);

var G__32764 = cljs.core.next.call(null,seq__32743_32757__$1);
var G__32765 = null;
var G__32766 = (0);
var G__32767 = (0);
seq__32743_32747 = G__32764;
chunk__32744_32748 = G__32765;
count__32745_32749 = G__32766;
i__32746_32750 = G__32767;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__32768_32772 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32769_32773 = null;
var count__32770_32774 = (0);
var i__32771_32775 = (0);
while(true){
if((i__32771_32775 < count__32770_32774)){
var node_32776 = cljs.core._nth.call(null,chunk__32769_32773,i__32771_32775);
goog.dom.classes.toggle(node_32776,class$);

var G__32777 = seq__32768_32772;
var G__32778 = chunk__32769_32773;
var G__32779 = count__32770_32774;
var G__32780 = (i__32771_32775 + (1));
seq__32768_32772 = G__32777;
chunk__32769_32773 = G__32778;
count__32770_32774 = G__32779;
i__32771_32775 = G__32780;
continue;
} else {
var temp__5457__auto___32781 = cljs.core.seq.call(null,seq__32768_32772);
if(temp__5457__auto___32781){
var seq__32768_32782__$1 = temp__5457__auto___32781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32768_32782__$1)){
var c__31014__auto___32783 = cljs.core.chunk_first.call(null,seq__32768_32782__$1);
var G__32784 = cljs.core.chunk_rest.call(null,seq__32768_32782__$1);
var G__32785 = c__31014__auto___32783;
var G__32786 = cljs.core.count.call(null,c__31014__auto___32783);
var G__32787 = (0);
seq__32768_32772 = G__32784;
chunk__32769_32773 = G__32785;
count__32770_32774 = G__32786;
i__32771_32775 = G__32787;
continue;
} else {
var node_32788 = cljs.core.first.call(null,seq__32768_32782__$1);
goog.dom.classes.toggle(node_32788,class$);

var G__32789 = cljs.core.next.call(null,seq__32768_32782__$1);
var G__32790 = null;
var G__32791 = (0);
var G__32792 = (0);
seq__32768_32772 = G__32789;
chunk__32769_32773 = G__32790;
count__32770_32774 = G__32791;
i__32771_32775 = G__32792;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_32797__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__32793_32798 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32794_32799 = null;
var count__32795_32800 = (0);
var i__32796_32801 = (0);
while(true){
if((i__32796_32801 < count__32795_32800)){
var node_32802 = cljs.core._nth.call(null,chunk__32794_32799,i__32796_32801);
goog.dom.classes.set(node_32802,classes_32797__$1);

var G__32803 = seq__32793_32798;
var G__32804 = chunk__32794_32799;
var G__32805 = count__32795_32800;
var G__32806 = (i__32796_32801 + (1));
seq__32793_32798 = G__32803;
chunk__32794_32799 = G__32804;
count__32795_32800 = G__32805;
i__32796_32801 = G__32806;
continue;
} else {
var temp__5457__auto___32807 = cljs.core.seq.call(null,seq__32793_32798);
if(temp__5457__auto___32807){
var seq__32793_32808__$1 = temp__5457__auto___32807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32793_32808__$1)){
var c__31014__auto___32809 = cljs.core.chunk_first.call(null,seq__32793_32808__$1);
var G__32810 = cljs.core.chunk_rest.call(null,seq__32793_32808__$1);
var G__32811 = c__31014__auto___32809;
var G__32812 = cljs.core.count.call(null,c__31014__auto___32809);
var G__32813 = (0);
seq__32793_32798 = G__32810;
chunk__32794_32799 = G__32811;
count__32795_32800 = G__32812;
i__32796_32801 = G__32813;
continue;
} else {
var node_32814 = cljs.core.first.call(null,seq__32793_32808__$1);
goog.dom.classes.set(node_32814,classes_32797__$1);

var G__32815 = cljs.core.next.call(null,seq__32793_32808__$1);
var G__32816 = null;
var G__32817 = (0);
var G__32818 = (0);
seq__32793_32798 = G__32815;
chunk__32794_32799 = G__32816;
count__32795_32800 = G__32817;
i__32796_32801 = G__32818;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__32819_32823 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32820_32824 = null;
var count__32821_32825 = (0);
var i__32822_32826 = (0);
while(true){
if((i__32822_32826 < count__32821_32825)){
var node_32827 = cljs.core._nth.call(null,chunk__32820_32824,i__32822_32826);
goog.dom.setTextContent(node_32827,value);

var G__32828 = seq__32819_32823;
var G__32829 = chunk__32820_32824;
var G__32830 = count__32821_32825;
var G__32831 = (i__32822_32826 + (1));
seq__32819_32823 = G__32828;
chunk__32820_32824 = G__32829;
count__32821_32825 = G__32830;
i__32822_32826 = G__32831;
continue;
} else {
var temp__5457__auto___32832 = cljs.core.seq.call(null,seq__32819_32823);
if(temp__5457__auto___32832){
var seq__32819_32833__$1 = temp__5457__auto___32832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32819_32833__$1)){
var c__31014__auto___32834 = cljs.core.chunk_first.call(null,seq__32819_32833__$1);
var G__32835 = cljs.core.chunk_rest.call(null,seq__32819_32833__$1);
var G__32836 = c__31014__auto___32834;
var G__32837 = cljs.core.count.call(null,c__31014__auto___32834);
var G__32838 = (0);
seq__32819_32823 = G__32835;
chunk__32820_32824 = G__32836;
count__32821_32825 = G__32837;
i__32822_32826 = G__32838;
continue;
} else {
var node_32839 = cljs.core.first.call(null,seq__32819_32833__$1);
goog.dom.setTextContent(node_32839,value);

var G__32840 = cljs.core.next.call(null,seq__32819_32833__$1);
var G__32841 = null;
var G__32842 = (0);
var G__32843 = (0);
seq__32819_32823 = G__32840;
chunk__32820_32824 = G__32841;
count__32821_32825 = G__32842;
i__32822_32826 = G__32843;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__32844_32848 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32845_32849 = null;
var count__32846_32850 = (0);
var i__32847_32851 = (0);
while(true){
if((i__32847_32851 < count__32846_32850)){
var node_32852 = cljs.core._nth.call(null,chunk__32845_32849,i__32847_32851);
goog.dom.forms.setValue(node_32852,value);

var G__32853 = seq__32844_32848;
var G__32854 = chunk__32845_32849;
var G__32855 = count__32846_32850;
var G__32856 = (i__32847_32851 + (1));
seq__32844_32848 = G__32853;
chunk__32845_32849 = G__32854;
count__32846_32850 = G__32855;
i__32847_32851 = G__32856;
continue;
} else {
var temp__5457__auto___32857 = cljs.core.seq.call(null,seq__32844_32848);
if(temp__5457__auto___32857){
var seq__32844_32858__$1 = temp__5457__auto___32857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32844_32858__$1)){
var c__31014__auto___32859 = cljs.core.chunk_first.call(null,seq__32844_32858__$1);
var G__32860 = cljs.core.chunk_rest.call(null,seq__32844_32858__$1);
var G__32861 = c__31014__auto___32859;
var G__32862 = cljs.core.count.call(null,c__31014__auto___32859);
var G__32863 = (0);
seq__32844_32848 = G__32860;
chunk__32845_32849 = G__32861;
count__32846_32850 = G__32862;
i__32847_32851 = G__32863;
continue;
} else {
var node_32864 = cljs.core.first.call(null,seq__32844_32858__$1);
goog.dom.forms.setValue(node_32864,value);

var G__32865 = cljs.core.next.call(null,seq__32844_32858__$1);
var G__32866 = null;
var G__32867 = (0);
var G__32868 = (0);
seq__32844_32848 = G__32865;
chunk__32845_32849 = G__32866;
count__32846_32850 = G__32867;
i__32847_32851 = G__32868;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_32874 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__32870_32875 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32871_32876 = null;
var count__32872_32877 = (0);
var i__32873_32878 = (0);
while(true){
if((i__32873_32878 < count__32872_32877)){
var node_32879 = cljs.core._nth.call(null,chunk__32871_32876,i__32873_32878);
node_32879.innerHTML = value_32874;

var G__32880 = seq__32870_32875;
var G__32881 = chunk__32871_32876;
var G__32882 = count__32872_32877;
var G__32883 = (i__32873_32878 + (1));
seq__32870_32875 = G__32880;
chunk__32871_32876 = G__32881;
count__32872_32877 = G__32882;
i__32873_32878 = G__32883;
continue;
} else {
var temp__5457__auto___32884 = cljs.core.seq.call(null,seq__32870_32875);
if(temp__5457__auto___32884){
var seq__32870_32885__$1 = temp__5457__auto___32884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32870_32885__$1)){
var c__31014__auto___32886 = cljs.core.chunk_first.call(null,seq__32870_32885__$1);
var G__32887 = cljs.core.chunk_rest.call(null,seq__32870_32885__$1);
var G__32888 = c__31014__auto___32886;
var G__32889 = cljs.core.count.call(null,c__31014__auto___32886);
var G__32890 = (0);
seq__32870_32875 = G__32887;
chunk__32871_32876 = G__32888;
count__32872_32877 = G__32889;
i__32873_32878 = G__32890;
continue;
} else {
var node_32891 = cljs.core.first.call(null,seq__32870_32885__$1);
node_32891.innerHTML = value_32874;

var G__32892 = cljs.core.next.call(null,seq__32870_32885__$1);
var G__32893 = null;
var G__32894 = (0);
var G__32895 = (0);
seq__32870_32875 = G__32892;
chunk__32871_32876 = G__32893;
count__32872_32877 = G__32894;
i__32873_32878 = G__32895;
continue;
}
} else {
}
}
break;
}
}catch (e32869){if((e32869 instanceof Error)){
var e_32896 = e32869;
domina.replace_children_BANG_.call(null,content,value_32874);
} else {
throw e32869;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__32898 = arguments.length;
switch (G__32898) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__30071__auto__ = bubble;
if(cljs.core.truth_(and__30071__auto__)){
return (value == null);
} else {
return and__30071__auto__;
}
})())){
var temp__5457__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__30083__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__32902_32906 = cljs.core.seq.call(null,children);
var chunk__32903_32907 = null;
var count__32904_32908 = (0);
var i__32905_32909 = (0);
while(true){
if((i__32905_32909 < count__32904_32908)){
var child_32910 = cljs.core._nth.call(null,chunk__32903_32907,i__32905_32909);
frag.appendChild(child_32910);

var G__32911 = seq__32902_32906;
var G__32912 = chunk__32903_32907;
var G__32913 = count__32904_32908;
var G__32914 = (i__32905_32909 + (1));
seq__32902_32906 = G__32911;
chunk__32903_32907 = G__32912;
count__32904_32908 = G__32913;
i__32905_32909 = G__32914;
continue;
} else {
var temp__5457__auto___32915 = cljs.core.seq.call(null,seq__32902_32906);
if(temp__5457__auto___32915){
var seq__32902_32916__$1 = temp__5457__auto___32915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32902_32916__$1)){
var c__31014__auto___32917 = cljs.core.chunk_first.call(null,seq__32902_32916__$1);
var G__32918 = cljs.core.chunk_rest.call(null,seq__32902_32916__$1);
var G__32919 = c__31014__auto___32917;
var G__32920 = cljs.core.count.call(null,c__31014__auto___32917);
var G__32921 = (0);
seq__32902_32906 = G__32918;
chunk__32903_32907 = G__32919;
count__32904_32908 = G__32920;
i__32905_32909 = G__32921;
continue;
} else {
var child_32922 = cljs.core.first.call(null,seq__32902_32916__$1);
frag.appendChild(child_32922);

var G__32923 = cljs.core.next.call(null,seq__32902_32916__$1);
var G__32924 = null;
var G__32925 = (0);
var G__32926 = (0);
seq__32902_32906 = G__32923;
chunk__32903_32907 = G__32924;
count__32904_32908 = G__32925;
i__32905_32909 = G__32926;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__32900_SHARP_,p2__32901_SHARP_){
return f.call(null,p1__32900_SHARP_,p2__32901_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__32928 = arguments.length;
switch (G__32928) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__32931 = arguments.length;
switch (G__32931) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__30071__auto__ = obj;
if(cljs.core.truth_(and__30071__auto__)){
var and__30071__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__30071__auto____$1){
return obj.length;
} else {
return and__30071__auto____$1;
}
} else {
return and__30071__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.DomContent,"string",true);

goog.object.set(domina.nodes,"string",(function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

goog.object.set(domina.single_node,"string",(function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

goog.object.set(domina.DomContent,"_",true);

goog.object.set(domina.nodes,"_",(function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

goog.object.set(domina.single_node,"_",(function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1515638882713
