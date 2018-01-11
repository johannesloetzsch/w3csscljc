// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36216 = arguments.length;
switch (G__36216) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36217 = (function (f,blockable,meta36218){
this.f = f;
this.blockable = blockable;
this.meta36218 = meta36218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36219,meta36218__$1){
var self__ = this;
var _36219__$1 = this;
return (new cljs.core.async.t_cljs$core$async36217(self__.f,self__.blockable,meta36218__$1));
});

cljs.core.async.t_cljs$core$async36217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36219){
var self__ = this;
var _36219__$1 = this;
return self__.meta36218;
});

cljs.core.async.t_cljs$core$async36217.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36217.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36218","meta36218",1448034492,null)], null);
});

cljs.core.async.t_cljs$core$async36217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36217";

cljs.core.async.t_cljs$core$async36217.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36217");
});

cljs.core.async.__GT_t_cljs$core$async36217 = (function cljs$core$async$__GT_t_cljs$core$async36217(f__$1,blockable__$1,meta36218){
return (new cljs.core.async.t_cljs$core$async36217(f__$1,blockable__$1,meta36218));
});

}

return (new cljs.core.async.t_cljs$core$async36217(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36223 = arguments.length;
switch (G__36223) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36226 = arguments.length;
switch (G__36226) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36229 = arguments.length;
switch (G__36229) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36231 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36231);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36231,ret){
return (function (){
return fn1.call(null,val_36231);
});})(val_36231,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36233 = arguments.length;
switch (G__36233) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31128__auto___36235 = n;
var x_36236 = (0);
while(true){
if((x_36236 < n__31128__auto___36235)){
(a[x_36236] = (0));

var G__36237 = (x_36236 + (1));
x_36236 = G__36237;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36238 = (i + (1));
i = G__36238;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36239 = (function (flag,meta36240){
this.flag = flag;
this.meta36240 = meta36240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36241,meta36240__$1){
var self__ = this;
var _36241__$1 = this;
return (new cljs.core.async.t_cljs$core$async36239(self__.flag,meta36240__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36241){
var self__ = this;
var _36241__$1 = this;
return self__.meta36240;
});})(flag))
;

cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36239.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36240","meta36240",-1696893342,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36239";

cljs.core.async.t_cljs$core$async36239.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36239");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36239 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36239(flag__$1,meta36240){
return (new cljs.core.async.t_cljs$core$async36239(flag__$1,meta36240));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36239(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36242 = (function (flag,cb,meta36243){
this.flag = flag;
this.cb = cb;
this.meta36243 = meta36243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36244,meta36243__$1){
var self__ = this;
var _36244__$1 = this;
return (new cljs.core.async.t_cljs$core$async36242(self__.flag,self__.cb,meta36243__$1));
});

cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36244){
var self__ = this;
var _36244__$1 = this;
return self__.meta36243;
});

cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36243","meta36243",-1189315507,null)], null);
});

cljs.core.async.t_cljs$core$async36242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36242";

cljs.core.async.t_cljs$core$async36242.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36242");
});

cljs.core.async.__GT_t_cljs$core$async36242 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36242(flag__$1,cb__$1,meta36243){
return (new cljs.core.async.t_cljs$core$async36242(flag__$1,cb__$1,meta36243));
});

}

return (new cljs.core.async.t_cljs$core$async36242(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36245_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36245_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36246_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36246_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30083__auto__ = wport;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36247 = (i + (1));
i = G__36247;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30083__auto__ = ret;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30071__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30071__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___36253 = arguments.length;
var i__31363__auto___36254 = (0);
while(true){
if((i__31363__auto___36254 < len__31362__auto___36253)){
args__31369__auto__.push((arguments[i__31363__auto___36254]));

var G__36255 = (i__31363__auto___36254 + (1));
i__31363__auto___36254 = G__36255;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36250){
var map__36251 = p__36250;
var map__36251__$1 = ((((!((map__36251 == null)))?((((map__36251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36251):map__36251);
var opts = map__36251__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36248){
var G__36249 = cljs.core.first.call(null,seq36248);
var seq36248__$1 = cljs.core.next.call(null,seq36248);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36249,seq36248__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36257 = arguments.length;
switch (G__36257) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36156__auto___36303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___36303){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___36303){
return (function (state_36281){
var state_val_36282 = (state_36281[(1)]);
if((state_val_36282 === (7))){
var inst_36277 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
var statearr_36283_36304 = state_36281__$1;
(statearr_36283_36304[(2)] = inst_36277);

(statearr_36283_36304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (1))){
var state_36281__$1 = state_36281;
var statearr_36284_36305 = state_36281__$1;
(statearr_36284_36305[(2)] = null);

(statearr_36284_36305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (4))){
var inst_36260 = (state_36281[(7)]);
var inst_36260__$1 = (state_36281[(2)]);
var inst_36261 = (inst_36260__$1 == null);
var state_36281__$1 = (function (){var statearr_36285 = state_36281;
(statearr_36285[(7)] = inst_36260__$1);

return statearr_36285;
})();
if(cljs.core.truth_(inst_36261)){
var statearr_36286_36306 = state_36281__$1;
(statearr_36286_36306[(1)] = (5));

} else {
var statearr_36287_36307 = state_36281__$1;
(statearr_36287_36307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (13))){
var state_36281__$1 = state_36281;
var statearr_36288_36308 = state_36281__$1;
(statearr_36288_36308[(2)] = null);

(statearr_36288_36308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (6))){
var inst_36260 = (state_36281[(7)]);
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36281__$1,(11),to,inst_36260);
} else {
if((state_val_36282 === (3))){
var inst_36279 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36281__$1,inst_36279);
} else {
if((state_val_36282 === (12))){
var state_36281__$1 = state_36281;
var statearr_36289_36309 = state_36281__$1;
(statearr_36289_36309[(2)] = null);

(statearr_36289_36309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (2))){
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36281__$1,(4),from);
} else {
if((state_val_36282 === (11))){
var inst_36270 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
if(cljs.core.truth_(inst_36270)){
var statearr_36290_36310 = state_36281__$1;
(statearr_36290_36310[(1)] = (12));

} else {
var statearr_36291_36311 = state_36281__$1;
(statearr_36291_36311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (9))){
var state_36281__$1 = state_36281;
var statearr_36292_36312 = state_36281__$1;
(statearr_36292_36312[(2)] = null);

(statearr_36292_36312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (5))){
var state_36281__$1 = state_36281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36293_36313 = state_36281__$1;
(statearr_36293_36313[(1)] = (8));

} else {
var statearr_36294_36314 = state_36281__$1;
(statearr_36294_36314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (14))){
var inst_36275 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
var statearr_36295_36315 = state_36281__$1;
(statearr_36295_36315[(2)] = inst_36275);

(statearr_36295_36315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (10))){
var inst_36267 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
var statearr_36296_36316 = state_36281__$1;
(statearr_36296_36316[(2)] = inst_36267);

(statearr_36296_36316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (8))){
var inst_36264 = cljs.core.async.close_BANG_.call(null,to);
var state_36281__$1 = state_36281;
var statearr_36297_36317 = state_36281__$1;
(statearr_36297_36317[(2)] = inst_36264);

(statearr_36297_36317[(1)] = (10));


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
});})(c__36156__auto___36303))
;
return ((function (switch__36066__auto__,c__36156__auto___36303){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_36298 = [null,null,null,null,null,null,null,null];
(statearr_36298[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_36298[(1)] = (1));

return statearr_36298;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_36281){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36299){if((e36299 instanceof Object)){
var ex__36070__auto__ = e36299;
var statearr_36300_36318 = state_36281;
(statearr_36300_36318[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36319 = state_36281;
state_36281 = G__36319;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_36281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_36281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___36303))
})();
var state__36158__auto__ = (function (){var statearr_36301 = f__36157__auto__.call(null);
(statearr_36301[(6)] = c__36156__auto___36303);

return statearr_36301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___36303))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36320){
var vec__36321 = p__36320;
var v = cljs.core.nth.call(null,vec__36321,(0),null);
var p = cljs.core.nth.call(null,vec__36321,(1),null);
var job = vec__36321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36156__auto___36492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___36492,res,vec__36321,v,p,job,jobs,results){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___36492,res,vec__36321,v,p,job,jobs,results){
return (function (state_36328){
var state_val_36329 = (state_36328[(1)]);
if((state_val_36329 === (1))){
var state_36328__$1 = state_36328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36328__$1,(2),res,v);
} else {
if((state_val_36329 === (2))){
var inst_36325 = (state_36328[(2)]);
var inst_36326 = cljs.core.async.close_BANG_.call(null,res);
var state_36328__$1 = (function (){var statearr_36330 = state_36328;
(statearr_36330[(7)] = inst_36325);

return statearr_36330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36328__$1,inst_36326);
} else {
return null;
}
}
});})(c__36156__auto___36492,res,vec__36321,v,p,job,jobs,results))
;
return ((function (switch__36066__auto__,c__36156__auto___36492,res,vec__36321,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_36328){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36332){if((e36332 instanceof Object)){
var ex__36070__auto__ = e36332;
var statearr_36333_36493 = state_36328;
(statearr_36333_36493[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36494 = state_36328;
state_36328 = G__36494;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_36328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_36328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___36492,res,vec__36321,v,p,job,jobs,results))
})();
var state__36158__auto__ = (function (){var statearr_36334 = f__36157__auto__.call(null);
(statearr_36334[(6)] = c__36156__auto___36492);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___36492,res,vec__36321,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36335){
var vec__36336 = p__36335;
var v = cljs.core.nth.call(null,vec__36336,(0),null);
var p = cljs.core.nth.call(null,vec__36336,(1),null);
var job = vec__36336;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31128__auto___36495 = n;
var __36496 = (0);
while(true){
if((__36496 < n__31128__auto___36495)){
var G__36339_36497 = type;
var G__36339_36498__$1 = (((G__36339_36497 instanceof cljs.core.Keyword))?G__36339_36497.fqn:null);
switch (G__36339_36498__$1) {
case "compute":
var c__36156__auto___36500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36496,c__36156__auto___36500,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (__36496,c__36156__auto___36500,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async){
return (function (state_36352){
var state_val_36353 = (state_36352[(1)]);
if((state_val_36353 === (1))){
var state_36352__$1 = state_36352;
var statearr_36354_36501 = state_36352__$1;
(statearr_36354_36501[(2)] = null);

(statearr_36354_36501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (2))){
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36352__$1,(4),jobs);
} else {
if((state_val_36353 === (3))){
var inst_36350 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36352__$1,inst_36350);
} else {
if((state_val_36353 === (4))){
var inst_36342 = (state_36352[(2)]);
var inst_36343 = process.call(null,inst_36342);
var state_36352__$1 = state_36352;
if(cljs.core.truth_(inst_36343)){
var statearr_36355_36502 = state_36352__$1;
(statearr_36355_36502[(1)] = (5));

} else {
var statearr_36356_36503 = state_36352__$1;
(statearr_36356_36503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (5))){
var state_36352__$1 = state_36352;
var statearr_36357_36504 = state_36352__$1;
(statearr_36357_36504[(2)] = null);

(statearr_36357_36504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (6))){
var state_36352__$1 = state_36352;
var statearr_36358_36505 = state_36352__$1;
(statearr_36358_36505[(2)] = null);

(statearr_36358_36505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (7))){
var inst_36348 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
var statearr_36359_36506 = state_36352__$1;
(statearr_36359_36506[(2)] = inst_36348);

(statearr_36359_36506[(1)] = (3));


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
});})(__36496,c__36156__auto___36500,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async))
;
return ((function (__36496,switch__36066__auto__,c__36156__auto___36500,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_36360 = [null,null,null,null,null,null,null];
(statearr_36360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_36360[(1)] = (1));

return statearr_36360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_36352){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36361){if((e36361 instanceof Object)){
var ex__36070__auto__ = e36361;
var statearr_36362_36507 = state_36352;
(statearr_36362_36507[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36508 = state_36352;
state_36352 = G__36508;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_36352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_36352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(__36496,switch__36066__auto__,c__36156__auto___36500,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async))
})();
var state__36158__auto__ = (function (){var statearr_36363 = f__36157__auto__.call(null);
(statearr_36363[(6)] = c__36156__auto___36500);

return statearr_36363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(__36496,c__36156__auto___36500,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async))
);


break;
case "async":
var c__36156__auto___36509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36496,c__36156__auto___36509,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (__36496,c__36156__auto___36509,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async){
return (function (state_36376){
var state_val_36377 = (state_36376[(1)]);
if((state_val_36377 === (1))){
var state_36376__$1 = state_36376;
var statearr_36378_36510 = state_36376__$1;
(statearr_36378_36510[(2)] = null);

(statearr_36378_36510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (2))){
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36376__$1,(4),jobs);
} else {
if((state_val_36377 === (3))){
var inst_36374 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36376__$1,inst_36374);
} else {
if((state_val_36377 === (4))){
var inst_36366 = (state_36376[(2)]);
var inst_36367 = async.call(null,inst_36366);
var state_36376__$1 = state_36376;
if(cljs.core.truth_(inst_36367)){
var statearr_36379_36511 = state_36376__$1;
(statearr_36379_36511[(1)] = (5));

} else {
var statearr_36380_36512 = state_36376__$1;
(statearr_36380_36512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (5))){
var state_36376__$1 = state_36376;
var statearr_36381_36513 = state_36376__$1;
(statearr_36381_36513[(2)] = null);

(statearr_36381_36513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (6))){
var state_36376__$1 = state_36376;
var statearr_36382_36514 = state_36376__$1;
(statearr_36382_36514[(2)] = null);

(statearr_36382_36514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (7))){
var inst_36372 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
var statearr_36383_36515 = state_36376__$1;
(statearr_36383_36515[(2)] = inst_36372);

(statearr_36383_36515[(1)] = (3));


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
});})(__36496,c__36156__auto___36509,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async))
;
return ((function (__36496,switch__36066__auto__,c__36156__auto___36509,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_36384 = [null,null,null,null,null,null,null];
(statearr_36384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_36384[(1)] = (1));

return statearr_36384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_36376){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36385){if((e36385 instanceof Object)){
var ex__36070__auto__ = e36385;
var statearr_36386_36516 = state_36376;
(statearr_36386_36516[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36517 = state_36376;
state_36376 = G__36517;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_36376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_36376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(__36496,switch__36066__auto__,c__36156__auto___36509,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async))
})();
var state__36158__auto__ = (function (){var statearr_36387 = f__36157__auto__.call(null);
(statearr_36387[(6)] = c__36156__auto___36509);

return statearr_36387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(__36496,c__36156__auto___36509,G__36339_36497,G__36339_36498__$1,n__31128__auto___36495,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36339_36498__$1)].join('')));

}

var G__36518 = (__36496 + (1));
__36496 = G__36518;
continue;
} else {
}
break;
}

var c__36156__auto___36519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___36519,jobs,results,process,async){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___36519,jobs,results,process,async){
return (function (state_36409){
var state_val_36410 = (state_36409[(1)]);
if((state_val_36410 === (1))){
var state_36409__$1 = state_36409;
var statearr_36411_36520 = state_36409__$1;
(statearr_36411_36520[(2)] = null);

(statearr_36411_36520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (2))){
var state_36409__$1 = state_36409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36409__$1,(4),from);
} else {
if((state_val_36410 === (3))){
var inst_36407 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36409__$1,inst_36407);
} else {
if((state_val_36410 === (4))){
var inst_36390 = (state_36409[(7)]);
var inst_36390__$1 = (state_36409[(2)]);
var inst_36391 = (inst_36390__$1 == null);
var state_36409__$1 = (function (){var statearr_36412 = state_36409;
(statearr_36412[(7)] = inst_36390__$1);

return statearr_36412;
})();
if(cljs.core.truth_(inst_36391)){
var statearr_36413_36521 = state_36409__$1;
(statearr_36413_36521[(1)] = (5));

} else {
var statearr_36414_36522 = state_36409__$1;
(statearr_36414_36522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (5))){
var inst_36393 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36409__$1 = state_36409;
var statearr_36415_36523 = state_36409__$1;
(statearr_36415_36523[(2)] = inst_36393);

(statearr_36415_36523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (6))){
var inst_36390 = (state_36409[(7)]);
var inst_36395 = (state_36409[(8)]);
var inst_36395__$1 = cljs.core.async.chan.call(null,(1));
var inst_36396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36397 = [inst_36390,inst_36395__$1];
var inst_36398 = (new cljs.core.PersistentVector(null,2,(5),inst_36396,inst_36397,null));
var state_36409__$1 = (function (){var statearr_36416 = state_36409;
(statearr_36416[(8)] = inst_36395__$1);

return statearr_36416;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36409__$1,(8),jobs,inst_36398);
} else {
if((state_val_36410 === (7))){
var inst_36405 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36417_36524 = state_36409__$1;
(statearr_36417_36524[(2)] = inst_36405);

(statearr_36417_36524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (8))){
var inst_36395 = (state_36409[(8)]);
var inst_36400 = (state_36409[(2)]);
var state_36409__$1 = (function (){var statearr_36418 = state_36409;
(statearr_36418[(9)] = inst_36400);

return statearr_36418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36409__$1,(9),results,inst_36395);
} else {
if((state_val_36410 === (9))){
var inst_36402 = (state_36409[(2)]);
var state_36409__$1 = (function (){var statearr_36419 = state_36409;
(statearr_36419[(10)] = inst_36402);

return statearr_36419;
})();
var statearr_36420_36525 = state_36409__$1;
(statearr_36420_36525[(2)] = null);

(statearr_36420_36525[(1)] = (2));


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
});})(c__36156__auto___36519,jobs,results,process,async))
;
return ((function (switch__36066__auto__,c__36156__auto___36519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_36421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_36421[(1)] = (1));

return statearr_36421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_36409){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36422){if((e36422 instanceof Object)){
var ex__36070__auto__ = e36422;
var statearr_36423_36526 = state_36409;
(statearr_36423_36526[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36527 = state_36409;
state_36409 = G__36527;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_36409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_36409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___36519,jobs,results,process,async))
})();
var state__36158__auto__ = (function (){var statearr_36424 = f__36157__auto__.call(null);
(statearr_36424[(6)] = c__36156__auto___36519);

return statearr_36424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___36519,jobs,results,process,async))
);


var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__,jobs,results,process,async){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__,jobs,results,process,async){
return (function (state_36462){
var state_val_36463 = (state_36462[(1)]);
if((state_val_36463 === (7))){
var inst_36458 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36464_36528 = state_36462__$1;
(statearr_36464_36528[(2)] = inst_36458);

(statearr_36464_36528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (20))){
var state_36462__$1 = state_36462;
var statearr_36465_36529 = state_36462__$1;
(statearr_36465_36529[(2)] = null);

(statearr_36465_36529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (1))){
var state_36462__$1 = state_36462;
var statearr_36466_36530 = state_36462__$1;
(statearr_36466_36530[(2)] = null);

(statearr_36466_36530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (4))){
var inst_36427 = (state_36462[(7)]);
var inst_36427__$1 = (state_36462[(2)]);
var inst_36428 = (inst_36427__$1 == null);
var state_36462__$1 = (function (){var statearr_36467 = state_36462;
(statearr_36467[(7)] = inst_36427__$1);

return statearr_36467;
})();
if(cljs.core.truth_(inst_36428)){
var statearr_36468_36531 = state_36462__$1;
(statearr_36468_36531[(1)] = (5));

} else {
var statearr_36469_36532 = state_36462__$1;
(statearr_36469_36532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (15))){
var inst_36440 = (state_36462[(8)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36462__$1,(18),to,inst_36440);
} else {
if((state_val_36463 === (21))){
var inst_36453 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36470_36533 = state_36462__$1;
(statearr_36470_36533[(2)] = inst_36453);

(statearr_36470_36533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (13))){
var inst_36455 = (state_36462[(2)]);
var state_36462__$1 = (function (){var statearr_36471 = state_36462;
(statearr_36471[(9)] = inst_36455);

return statearr_36471;
})();
var statearr_36472_36534 = state_36462__$1;
(statearr_36472_36534[(2)] = null);

(statearr_36472_36534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (6))){
var inst_36427 = (state_36462[(7)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36462__$1,(11),inst_36427);
} else {
if((state_val_36463 === (17))){
var inst_36448 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
if(cljs.core.truth_(inst_36448)){
var statearr_36473_36535 = state_36462__$1;
(statearr_36473_36535[(1)] = (19));

} else {
var statearr_36474_36536 = state_36462__$1;
(statearr_36474_36536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (3))){
var inst_36460 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36462__$1,inst_36460);
} else {
if((state_val_36463 === (12))){
var inst_36437 = (state_36462[(10)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36462__$1,(14),inst_36437);
} else {
if((state_val_36463 === (2))){
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36462__$1,(4),results);
} else {
if((state_val_36463 === (19))){
var state_36462__$1 = state_36462;
var statearr_36475_36537 = state_36462__$1;
(statearr_36475_36537[(2)] = null);

(statearr_36475_36537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (11))){
var inst_36437 = (state_36462[(2)]);
var state_36462__$1 = (function (){var statearr_36476 = state_36462;
(statearr_36476[(10)] = inst_36437);

return statearr_36476;
})();
var statearr_36477_36538 = state_36462__$1;
(statearr_36477_36538[(2)] = null);

(statearr_36477_36538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (9))){
var state_36462__$1 = state_36462;
var statearr_36478_36539 = state_36462__$1;
(statearr_36478_36539[(2)] = null);

(statearr_36478_36539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (5))){
var state_36462__$1 = state_36462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36479_36540 = state_36462__$1;
(statearr_36479_36540[(1)] = (8));

} else {
var statearr_36480_36541 = state_36462__$1;
(statearr_36480_36541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (14))){
var inst_36442 = (state_36462[(11)]);
var inst_36440 = (state_36462[(8)]);
var inst_36440__$1 = (state_36462[(2)]);
var inst_36441 = (inst_36440__$1 == null);
var inst_36442__$1 = cljs.core.not.call(null,inst_36441);
var state_36462__$1 = (function (){var statearr_36481 = state_36462;
(statearr_36481[(11)] = inst_36442__$1);

(statearr_36481[(8)] = inst_36440__$1);

return statearr_36481;
})();
if(inst_36442__$1){
var statearr_36482_36542 = state_36462__$1;
(statearr_36482_36542[(1)] = (15));

} else {
var statearr_36483_36543 = state_36462__$1;
(statearr_36483_36543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (16))){
var inst_36442 = (state_36462[(11)]);
var state_36462__$1 = state_36462;
var statearr_36484_36544 = state_36462__$1;
(statearr_36484_36544[(2)] = inst_36442);

(statearr_36484_36544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (10))){
var inst_36434 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36485_36545 = state_36462__$1;
(statearr_36485_36545[(2)] = inst_36434);

(statearr_36485_36545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (18))){
var inst_36445 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36486_36546 = state_36462__$1;
(statearr_36486_36546[(2)] = inst_36445);

(statearr_36486_36546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (8))){
var inst_36431 = cljs.core.async.close_BANG_.call(null,to);
var state_36462__$1 = state_36462;
var statearr_36487_36547 = state_36462__$1;
(statearr_36487_36547[(2)] = inst_36431);

(statearr_36487_36547[(1)] = (10));


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
});})(c__36156__auto__,jobs,results,process,async))
;
return ((function (switch__36066__auto__,c__36156__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_36488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__);

(statearr_36488[(1)] = (1));

return statearr_36488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1 = (function (state_36462){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36489){if((e36489 instanceof Object)){
var ex__36070__auto__ = e36489;
var statearr_36490_36548 = state_36462;
(statearr_36490_36548[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36549 = state_36462;
state_36462 = G__36549;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__ = function(state_36462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1.call(this,state_36462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__,jobs,results,process,async))
})();
var state__36158__auto__ = (function (){var statearr_36491 = f__36157__auto__.call(null);
(statearr_36491[(6)] = c__36156__auto__);

return statearr_36491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__,jobs,results,process,async))
);

return c__36156__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36551 = arguments.length;
switch (G__36551) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36554 = arguments.length;
switch (G__36554) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36557 = arguments.length;
switch (G__36557) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36156__auto___36606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___36606,tc,fc){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___36606,tc,fc){
return (function (state_36583){
var state_val_36584 = (state_36583[(1)]);
if((state_val_36584 === (7))){
var inst_36579 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36585_36607 = state_36583__$1;
(statearr_36585_36607[(2)] = inst_36579);

(statearr_36585_36607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (1))){
var state_36583__$1 = state_36583;
var statearr_36586_36608 = state_36583__$1;
(statearr_36586_36608[(2)] = null);

(statearr_36586_36608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (4))){
var inst_36560 = (state_36583[(7)]);
var inst_36560__$1 = (state_36583[(2)]);
var inst_36561 = (inst_36560__$1 == null);
var state_36583__$1 = (function (){var statearr_36587 = state_36583;
(statearr_36587[(7)] = inst_36560__$1);

return statearr_36587;
})();
if(cljs.core.truth_(inst_36561)){
var statearr_36588_36609 = state_36583__$1;
(statearr_36588_36609[(1)] = (5));

} else {
var statearr_36589_36610 = state_36583__$1;
(statearr_36589_36610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (13))){
var state_36583__$1 = state_36583;
var statearr_36590_36611 = state_36583__$1;
(statearr_36590_36611[(2)] = null);

(statearr_36590_36611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (6))){
var inst_36560 = (state_36583[(7)]);
var inst_36566 = p.call(null,inst_36560);
var state_36583__$1 = state_36583;
if(cljs.core.truth_(inst_36566)){
var statearr_36591_36612 = state_36583__$1;
(statearr_36591_36612[(1)] = (9));

} else {
var statearr_36592_36613 = state_36583__$1;
(statearr_36592_36613[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (3))){
var inst_36581 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36583__$1,inst_36581);
} else {
if((state_val_36584 === (12))){
var state_36583__$1 = state_36583;
var statearr_36593_36614 = state_36583__$1;
(statearr_36593_36614[(2)] = null);

(statearr_36593_36614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (2))){
var state_36583__$1 = state_36583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36583__$1,(4),ch);
} else {
if((state_val_36584 === (11))){
var inst_36560 = (state_36583[(7)]);
var inst_36570 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36583__$1,(8),inst_36570,inst_36560);
} else {
if((state_val_36584 === (9))){
var state_36583__$1 = state_36583;
var statearr_36594_36615 = state_36583__$1;
(statearr_36594_36615[(2)] = tc);

(statearr_36594_36615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (5))){
var inst_36563 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36564 = cljs.core.async.close_BANG_.call(null,fc);
var state_36583__$1 = (function (){var statearr_36595 = state_36583;
(statearr_36595[(8)] = inst_36563);

return statearr_36595;
})();
var statearr_36596_36616 = state_36583__$1;
(statearr_36596_36616[(2)] = inst_36564);

(statearr_36596_36616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (14))){
var inst_36577 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36597_36617 = state_36583__$1;
(statearr_36597_36617[(2)] = inst_36577);

(statearr_36597_36617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (10))){
var state_36583__$1 = state_36583;
var statearr_36598_36618 = state_36583__$1;
(statearr_36598_36618[(2)] = fc);

(statearr_36598_36618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (8))){
var inst_36572 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
if(cljs.core.truth_(inst_36572)){
var statearr_36599_36619 = state_36583__$1;
(statearr_36599_36619[(1)] = (12));

} else {
var statearr_36600_36620 = state_36583__$1;
(statearr_36600_36620[(1)] = (13));

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
});})(c__36156__auto___36606,tc,fc))
;
return ((function (switch__36066__auto__,c__36156__auto___36606,tc,fc){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_36601 = [null,null,null,null,null,null,null,null,null];
(statearr_36601[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_36601[(1)] = (1));

return statearr_36601;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_36583){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36602){if((e36602 instanceof Object)){
var ex__36070__auto__ = e36602;
var statearr_36603_36621 = state_36583;
(statearr_36603_36621[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36622 = state_36583;
state_36583 = G__36622;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_36583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_36583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___36606,tc,fc))
})();
var state__36158__auto__ = (function (){var statearr_36604 = f__36157__auto__.call(null);
(statearr_36604[(6)] = c__36156__auto___36606);

return statearr_36604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___36606,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__){
return (function (state_36643){
var state_val_36644 = (state_36643[(1)]);
if((state_val_36644 === (7))){
var inst_36639 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36645_36663 = state_36643__$1;
(statearr_36645_36663[(2)] = inst_36639);

(statearr_36645_36663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (1))){
var inst_36623 = init;
var state_36643__$1 = (function (){var statearr_36646 = state_36643;
(statearr_36646[(7)] = inst_36623);

return statearr_36646;
})();
var statearr_36647_36664 = state_36643__$1;
(statearr_36647_36664[(2)] = null);

(statearr_36647_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (4))){
var inst_36626 = (state_36643[(8)]);
var inst_36626__$1 = (state_36643[(2)]);
var inst_36627 = (inst_36626__$1 == null);
var state_36643__$1 = (function (){var statearr_36648 = state_36643;
(statearr_36648[(8)] = inst_36626__$1);

return statearr_36648;
})();
if(cljs.core.truth_(inst_36627)){
var statearr_36649_36665 = state_36643__$1;
(statearr_36649_36665[(1)] = (5));

} else {
var statearr_36650_36666 = state_36643__$1;
(statearr_36650_36666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (6))){
var inst_36630 = (state_36643[(9)]);
var inst_36623 = (state_36643[(7)]);
var inst_36626 = (state_36643[(8)]);
var inst_36630__$1 = f.call(null,inst_36623,inst_36626);
var inst_36631 = cljs.core.reduced_QMARK_.call(null,inst_36630__$1);
var state_36643__$1 = (function (){var statearr_36651 = state_36643;
(statearr_36651[(9)] = inst_36630__$1);

return statearr_36651;
})();
if(inst_36631){
var statearr_36652_36667 = state_36643__$1;
(statearr_36652_36667[(1)] = (8));

} else {
var statearr_36653_36668 = state_36643__$1;
(statearr_36653_36668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (3))){
var inst_36641 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36643__$1,inst_36641);
} else {
if((state_val_36644 === (2))){
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36643__$1,(4),ch);
} else {
if((state_val_36644 === (9))){
var inst_36630 = (state_36643[(9)]);
var inst_36623 = inst_36630;
var state_36643__$1 = (function (){var statearr_36654 = state_36643;
(statearr_36654[(7)] = inst_36623);

return statearr_36654;
})();
var statearr_36655_36669 = state_36643__$1;
(statearr_36655_36669[(2)] = null);

(statearr_36655_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (5))){
var inst_36623 = (state_36643[(7)]);
var state_36643__$1 = state_36643;
var statearr_36656_36670 = state_36643__$1;
(statearr_36656_36670[(2)] = inst_36623);

(statearr_36656_36670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (10))){
var inst_36637 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36657_36671 = state_36643__$1;
(statearr_36657_36671[(2)] = inst_36637);

(statearr_36657_36671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (8))){
var inst_36630 = (state_36643[(9)]);
var inst_36633 = cljs.core.deref.call(null,inst_36630);
var state_36643__$1 = state_36643;
var statearr_36658_36672 = state_36643__$1;
(statearr_36658_36672[(2)] = inst_36633);

(statearr_36658_36672[(1)] = (10));


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
});})(c__36156__auto__))
;
return ((function (switch__36066__auto__,c__36156__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36067__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36067__auto____0 = (function (){
var statearr_36659 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36659[(0)] = cljs$core$async$reduce_$_state_machine__36067__auto__);

(statearr_36659[(1)] = (1));

return statearr_36659;
});
var cljs$core$async$reduce_$_state_machine__36067__auto____1 = (function (state_36643){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36660){if((e36660 instanceof Object)){
var ex__36070__auto__ = e36660;
var statearr_36661_36673 = state_36643;
(statearr_36661_36673[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36674 = state_36643;
state_36643 = G__36674;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36067__auto__ = function(state_36643){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36067__auto____1.call(this,state_36643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36067__auto____0;
cljs$core$async$reduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36067__auto____1;
return cljs$core$async$reduce_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__))
})();
var state__36158__auto__ = (function (){var statearr_36662 = f__36157__auto__.call(null);
(statearr_36662[(6)] = c__36156__auto__);

return statearr_36662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__))
);

return c__36156__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__,f__$1){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__,f__$1){
return (function (state_36680){
var state_val_36681 = (state_36680[(1)]);
if((state_val_36681 === (1))){
var inst_36675 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36680__$1,(2),inst_36675);
} else {
if((state_val_36681 === (2))){
var inst_36677 = (state_36680[(2)]);
var inst_36678 = f__$1.call(null,inst_36677);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36680__$1,inst_36678);
} else {
return null;
}
}
});})(c__36156__auto__,f__$1))
;
return ((function (switch__36066__auto__,c__36156__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36067__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36067__auto____0 = (function (){
var statearr_36682 = [null,null,null,null,null,null,null];
(statearr_36682[(0)] = cljs$core$async$transduce_$_state_machine__36067__auto__);

(statearr_36682[(1)] = (1));

return statearr_36682;
});
var cljs$core$async$transduce_$_state_machine__36067__auto____1 = (function (state_36680){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36683){if((e36683 instanceof Object)){
var ex__36070__auto__ = e36683;
var statearr_36684_36686 = state_36680;
(statearr_36684_36686[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36687 = state_36680;
state_36680 = G__36687;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36067__auto__ = function(state_36680){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36067__auto____1.call(this,state_36680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36067__auto____0;
cljs$core$async$transduce_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36067__auto____1;
return cljs$core$async$transduce_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__,f__$1))
})();
var state__36158__auto__ = (function (){var statearr_36685 = f__36157__auto__.call(null);
(statearr_36685[(6)] = c__36156__auto__);

return statearr_36685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__,f__$1))
);

return c__36156__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36689 = arguments.length;
switch (G__36689) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__){
return (function (state_36714){
var state_val_36715 = (state_36714[(1)]);
if((state_val_36715 === (7))){
var inst_36696 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36716_36737 = state_36714__$1;
(statearr_36716_36737[(2)] = inst_36696);

(statearr_36716_36737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (1))){
var inst_36690 = cljs.core.seq.call(null,coll);
var inst_36691 = inst_36690;
var state_36714__$1 = (function (){var statearr_36717 = state_36714;
(statearr_36717[(7)] = inst_36691);

return statearr_36717;
})();
var statearr_36718_36738 = state_36714__$1;
(statearr_36718_36738[(2)] = null);

(statearr_36718_36738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (4))){
var inst_36691 = (state_36714[(7)]);
var inst_36694 = cljs.core.first.call(null,inst_36691);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36714__$1,(7),ch,inst_36694);
} else {
if((state_val_36715 === (13))){
var inst_36708 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36719_36739 = state_36714__$1;
(statearr_36719_36739[(2)] = inst_36708);

(statearr_36719_36739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (6))){
var inst_36699 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36699)){
var statearr_36720_36740 = state_36714__$1;
(statearr_36720_36740[(1)] = (8));

} else {
var statearr_36721_36741 = state_36714__$1;
(statearr_36721_36741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (3))){
var inst_36712 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36714__$1,inst_36712);
} else {
if((state_val_36715 === (12))){
var state_36714__$1 = state_36714;
var statearr_36722_36742 = state_36714__$1;
(statearr_36722_36742[(2)] = null);

(statearr_36722_36742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (2))){
var inst_36691 = (state_36714[(7)]);
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36691)){
var statearr_36723_36743 = state_36714__$1;
(statearr_36723_36743[(1)] = (4));

} else {
var statearr_36724_36744 = state_36714__$1;
(statearr_36724_36744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (11))){
var inst_36705 = cljs.core.async.close_BANG_.call(null,ch);
var state_36714__$1 = state_36714;
var statearr_36725_36745 = state_36714__$1;
(statearr_36725_36745[(2)] = inst_36705);

(statearr_36725_36745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (9))){
var state_36714__$1 = state_36714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36726_36746 = state_36714__$1;
(statearr_36726_36746[(1)] = (11));

} else {
var statearr_36727_36747 = state_36714__$1;
(statearr_36727_36747[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (5))){
var inst_36691 = (state_36714[(7)]);
var state_36714__$1 = state_36714;
var statearr_36728_36748 = state_36714__$1;
(statearr_36728_36748[(2)] = inst_36691);

(statearr_36728_36748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (10))){
var inst_36710 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36729_36749 = state_36714__$1;
(statearr_36729_36749[(2)] = inst_36710);

(statearr_36729_36749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (8))){
var inst_36691 = (state_36714[(7)]);
var inst_36701 = cljs.core.next.call(null,inst_36691);
var inst_36691__$1 = inst_36701;
var state_36714__$1 = (function (){var statearr_36730 = state_36714;
(statearr_36730[(7)] = inst_36691__$1);

return statearr_36730;
})();
var statearr_36731_36750 = state_36714__$1;
(statearr_36731_36750[(2)] = null);

(statearr_36731_36750[(1)] = (2));


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
});})(c__36156__auto__))
;
return ((function (switch__36066__auto__,c__36156__auto__){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_36732 = [null,null,null,null,null,null,null,null];
(statearr_36732[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_36732[(1)] = (1));

return statearr_36732;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_36714){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36733){if((e36733 instanceof Object)){
var ex__36070__auto__ = e36733;
var statearr_36734_36751 = state_36714;
(statearr_36734_36751[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36752 = state_36714;
state_36714 = G__36752;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_36714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_36714);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__))
})();
var state__36158__auto__ = (function (){var statearr_36735 = f__36157__auto__.call(null);
(statearr_36735[(6)] = c__36156__auto__);

return statearr_36735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__))
);

return c__36156__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30816__auto__ = (((_ == null))?null:_);
var m__30817__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,_);
} else {
var m__30817__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30817__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m);
} else {
var m__30817__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36753 = (function (ch,cs,meta36754){
this.ch = ch;
this.cs = cs;
this.meta36754 = meta36754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36755,meta36754__$1){
var self__ = this;
var _36755__$1 = this;
return (new cljs.core.async.t_cljs$core$async36753(self__.ch,self__.cs,meta36754__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36755){
var self__ = this;
var _36755__$1 = this;
return self__.meta36754;
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36754","meta36754",-520077578,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36753";

cljs.core.async.t_cljs$core$async36753.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36753");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36753 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36753(ch__$1,cs__$1,meta36754){
return (new cljs.core.async.t_cljs$core$async36753(ch__$1,cs__$1,meta36754));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36753(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__36156__auto___36975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___36975,cs,m,dchan,dctr,done){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___36975,cs,m,dchan,dctr,done){
return (function (state_36890){
var state_val_36891 = (state_36890[(1)]);
if((state_val_36891 === (7))){
var inst_36886 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36892_36976 = state_36890__$1;
(statearr_36892_36976[(2)] = inst_36886);

(statearr_36892_36976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (20))){
var inst_36789 = (state_36890[(7)]);
var inst_36801 = cljs.core.first.call(null,inst_36789);
var inst_36802 = cljs.core.nth.call(null,inst_36801,(0),null);
var inst_36803 = cljs.core.nth.call(null,inst_36801,(1),null);
var state_36890__$1 = (function (){var statearr_36893 = state_36890;
(statearr_36893[(8)] = inst_36802);

return statearr_36893;
})();
if(cljs.core.truth_(inst_36803)){
var statearr_36894_36977 = state_36890__$1;
(statearr_36894_36977[(1)] = (22));

} else {
var statearr_36895_36978 = state_36890__$1;
(statearr_36895_36978[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (27))){
var inst_36833 = (state_36890[(9)]);
var inst_36758 = (state_36890[(10)]);
var inst_36831 = (state_36890[(11)]);
var inst_36838 = (state_36890[(12)]);
var inst_36838__$1 = cljs.core._nth.call(null,inst_36831,inst_36833);
var inst_36839 = cljs.core.async.put_BANG_.call(null,inst_36838__$1,inst_36758,done);
var state_36890__$1 = (function (){var statearr_36896 = state_36890;
(statearr_36896[(12)] = inst_36838__$1);

return statearr_36896;
})();
if(cljs.core.truth_(inst_36839)){
var statearr_36897_36979 = state_36890__$1;
(statearr_36897_36979[(1)] = (30));

} else {
var statearr_36898_36980 = state_36890__$1;
(statearr_36898_36980[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (1))){
var state_36890__$1 = state_36890;
var statearr_36899_36981 = state_36890__$1;
(statearr_36899_36981[(2)] = null);

(statearr_36899_36981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (24))){
var inst_36789 = (state_36890[(7)]);
var inst_36808 = (state_36890[(2)]);
var inst_36809 = cljs.core.next.call(null,inst_36789);
var inst_36767 = inst_36809;
var inst_36768 = null;
var inst_36769 = (0);
var inst_36770 = (0);
var state_36890__$1 = (function (){var statearr_36900 = state_36890;
(statearr_36900[(13)] = inst_36768);

(statearr_36900[(14)] = inst_36770);

(statearr_36900[(15)] = inst_36769);

(statearr_36900[(16)] = inst_36808);

(statearr_36900[(17)] = inst_36767);

return statearr_36900;
})();
var statearr_36901_36982 = state_36890__$1;
(statearr_36901_36982[(2)] = null);

(statearr_36901_36982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (39))){
var state_36890__$1 = state_36890;
var statearr_36905_36983 = state_36890__$1;
(statearr_36905_36983[(2)] = null);

(statearr_36905_36983[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (4))){
var inst_36758 = (state_36890[(10)]);
var inst_36758__$1 = (state_36890[(2)]);
var inst_36759 = (inst_36758__$1 == null);
var state_36890__$1 = (function (){var statearr_36906 = state_36890;
(statearr_36906[(10)] = inst_36758__$1);

return statearr_36906;
})();
if(cljs.core.truth_(inst_36759)){
var statearr_36907_36984 = state_36890__$1;
(statearr_36907_36984[(1)] = (5));

} else {
var statearr_36908_36985 = state_36890__$1;
(statearr_36908_36985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (15))){
var inst_36768 = (state_36890[(13)]);
var inst_36770 = (state_36890[(14)]);
var inst_36769 = (state_36890[(15)]);
var inst_36767 = (state_36890[(17)]);
var inst_36785 = (state_36890[(2)]);
var inst_36786 = (inst_36770 + (1));
var tmp36902 = inst_36768;
var tmp36903 = inst_36769;
var tmp36904 = inst_36767;
var inst_36767__$1 = tmp36904;
var inst_36768__$1 = tmp36902;
var inst_36769__$1 = tmp36903;
var inst_36770__$1 = inst_36786;
var state_36890__$1 = (function (){var statearr_36909 = state_36890;
(statearr_36909[(13)] = inst_36768__$1);

(statearr_36909[(14)] = inst_36770__$1);

(statearr_36909[(18)] = inst_36785);

(statearr_36909[(15)] = inst_36769__$1);

(statearr_36909[(17)] = inst_36767__$1);

return statearr_36909;
})();
var statearr_36910_36986 = state_36890__$1;
(statearr_36910_36986[(2)] = null);

(statearr_36910_36986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (21))){
var inst_36812 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36914_36987 = state_36890__$1;
(statearr_36914_36987[(2)] = inst_36812);

(statearr_36914_36987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (31))){
var inst_36838 = (state_36890[(12)]);
var inst_36842 = done.call(null,null);
var inst_36843 = cljs.core.async.untap_STAR_.call(null,m,inst_36838);
var state_36890__$1 = (function (){var statearr_36915 = state_36890;
(statearr_36915[(19)] = inst_36842);

return statearr_36915;
})();
var statearr_36916_36988 = state_36890__$1;
(statearr_36916_36988[(2)] = inst_36843);

(statearr_36916_36988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (32))){
var inst_36832 = (state_36890[(20)]);
var inst_36833 = (state_36890[(9)]);
var inst_36830 = (state_36890[(21)]);
var inst_36831 = (state_36890[(11)]);
var inst_36845 = (state_36890[(2)]);
var inst_36846 = (inst_36833 + (1));
var tmp36911 = inst_36832;
var tmp36912 = inst_36830;
var tmp36913 = inst_36831;
var inst_36830__$1 = tmp36912;
var inst_36831__$1 = tmp36913;
var inst_36832__$1 = tmp36911;
var inst_36833__$1 = inst_36846;
var state_36890__$1 = (function (){var statearr_36917 = state_36890;
(statearr_36917[(20)] = inst_36832__$1);

(statearr_36917[(9)] = inst_36833__$1);

(statearr_36917[(22)] = inst_36845);

(statearr_36917[(21)] = inst_36830__$1);

(statearr_36917[(11)] = inst_36831__$1);

return statearr_36917;
})();
var statearr_36918_36989 = state_36890__$1;
(statearr_36918_36989[(2)] = null);

(statearr_36918_36989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (40))){
var inst_36858 = (state_36890[(23)]);
var inst_36862 = done.call(null,null);
var inst_36863 = cljs.core.async.untap_STAR_.call(null,m,inst_36858);
var state_36890__$1 = (function (){var statearr_36919 = state_36890;
(statearr_36919[(24)] = inst_36862);

return statearr_36919;
})();
var statearr_36920_36990 = state_36890__$1;
(statearr_36920_36990[(2)] = inst_36863);

(statearr_36920_36990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (33))){
var inst_36849 = (state_36890[(25)]);
var inst_36851 = cljs.core.chunked_seq_QMARK_.call(null,inst_36849);
var state_36890__$1 = state_36890;
if(inst_36851){
var statearr_36921_36991 = state_36890__$1;
(statearr_36921_36991[(1)] = (36));

} else {
var statearr_36922_36992 = state_36890__$1;
(statearr_36922_36992[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (13))){
var inst_36779 = (state_36890[(26)]);
var inst_36782 = cljs.core.async.close_BANG_.call(null,inst_36779);
var state_36890__$1 = state_36890;
var statearr_36923_36993 = state_36890__$1;
(statearr_36923_36993[(2)] = inst_36782);

(statearr_36923_36993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (22))){
var inst_36802 = (state_36890[(8)]);
var inst_36805 = cljs.core.async.close_BANG_.call(null,inst_36802);
var state_36890__$1 = state_36890;
var statearr_36924_36994 = state_36890__$1;
(statearr_36924_36994[(2)] = inst_36805);

(statearr_36924_36994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (36))){
var inst_36849 = (state_36890[(25)]);
var inst_36853 = cljs.core.chunk_first.call(null,inst_36849);
var inst_36854 = cljs.core.chunk_rest.call(null,inst_36849);
var inst_36855 = cljs.core.count.call(null,inst_36853);
var inst_36830 = inst_36854;
var inst_36831 = inst_36853;
var inst_36832 = inst_36855;
var inst_36833 = (0);
var state_36890__$1 = (function (){var statearr_36925 = state_36890;
(statearr_36925[(20)] = inst_36832);

(statearr_36925[(9)] = inst_36833);

(statearr_36925[(21)] = inst_36830);

(statearr_36925[(11)] = inst_36831);

return statearr_36925;
})();
var statearr_36926_36995 = state_36890__$1;
(statearr_36926_36995[(2)] = null);

(statearr_36926_36995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (41))){
var inst_36849 = (state_36890[(25)]);
var inst_36865 = (state_36890[(2)]);
var inst_36866 = cljs.core.next.call(null,inst_36849);
var inst_36830 = inst_36866;
var inst_36831 = null;
var inst_36832 = (0);
var inst_36833 = (0);
var state_36890__$1 = (function (){var statearr_36927 = state_36890;
(statearr_36927[(20)] = inst_36832);

(statearr_36927[(9)] = inst_36833);

(statearr_36927[(21)] = inst_36830);

(statearr_36927[(27)] = inst_36865);

(statearr_36927[(11)] = inst_36831);

return statearr_36927;
})();
var statearr_36928_36996 = state_36890__$1;
(statearr_36928_36996[(2)] = null);

(statearr_36928_36996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (43))){
var state_36890__$1 = state_36890;
var statearr_36929_36997 = state_36890__$1;
(statearr_36929_36997[(2)] = null);

(statearr_36929_36997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (29))){
var inst_36874 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36930_36998 = state_36890__$1;
(statearr_36930_36998[(2)] = inst_36874);

(statearr_36930_36998[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (44))){
var inst_36883 = (state_36890[(2)]);
var state_36890__$1 = (function (){var statearr_36931 = state_36890;
(statearr_36931[(28)] = inst_36883);

return statearr_36931;
})();
var statearr_36932_36999 = state_36890__$1;
(statearr_36932_36999[(2)] = null);

(statearr_36932_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (6))){
var inst_36822 = (state_36890[(29)]);
var inst_36821 = cljs.core.deref.call(null,cs);
var inst_36822__$1 = cljs.core.keys.call(null,inst_36821);
var inst_36823 = cljs.core.count.call(null,inst_36822__$1);
var inst_36824 = cljs.core.reset_BANG_.call(null,dctr,inst_36823);
var inst_36829 = cljs.core.seq.call(null,inst_36822__$1);
var inst_36830 = inst_36829;
var inst_36831 = null;
var inst_36832 = (0);
var inst_36833 = (0);
var state_36890__$1 = (function (){var statearr_36933 = state_36890;
(statearr_36933[(20)] = inst_36832);

(statearr_36933[(9)] = inst_36833);

(statearr_36933[(30)] = inst_36824);

(statearr_36933[(29)] = inst_36822__$1);

(statearr_36933[(21)] = inst_36830);

(statearr_36933[(11)] = inst_36831);

return statearr_36933;
})();
var statearr_36934_37000 = state_36890__$1;
(statearr_36934_37000[(2)] = null);

(statearr_36934_37000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (28))){
var inst_36849 = (state_36890[(25)]);
var inst_36830 = (state_36890[(21)]);
var inst_36849__$1 = cljs.core.seq.call(null,inst_36830);
var state_36890__$1 = (function (){var statearr_36935 = state_36890;
(statearr_36935[(25)] = inst_36849__$1);

return statearr_36935;
})();
if(inst_36849__$1){
var statearr_36936_37001 = state_36890__$1;
(statearr_36936_37001[(1)] = (33));

} else {
var statearr_36937_37002 = state_36890__$1;
(statearr_36937_37002[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (25))){
var inst_36832 = (state_36890[(20)]);
var inst_36833 = (state_36890[(9)]);
var inst_36835 = (inst_36833 < inst_36832);
var inst_36836 = inst_36835;
var state_36890__$1 = state_36890;
if(cljs.core.truth_(inst_36836)){
var statearr_36938_37003 = state_36890__$1;
(statearr_36938_37003[(1)] = (27));

} else {
var statearr_36939_37004 = state_36890__$1;
(statearr_36939_37004[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (34))){
var state_36890__$1 = state_36890;
var statearr_36940_37005 = state_36890__$1;
(statearr_36940_37005[(2)] = null);

(statearr_36940_37005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (17))){
var state_36890__$1 = state_36890;
var statearr_36941_37006 = state_36890__$1;
(statearr_36941_37006[(2)] = null);

(statearr_36941_37006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (3))){
var inst_36888 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36890__$1,inst_36888);
} else {
if((state_val_36891 === (12))){
var inst_36817 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36942_37007 = state_36890__$1;
(statearr_36942_37007[(2)] = inst_36817);

(statearr_36942_37007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (2))){
var state_36890__$1 = state_36890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36890__$1,(4),ch);
} else {
if((state_val_36891 === (23))){
var state_36890__$1 = state_36890;
var statearr_36943_37008 = state_36890__$1;
(statearr_36943_37008[(2)] = null);

(statearr_36943_37008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (35))){
var inst_36872 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36944_37009 = state_36890__$1;
(statearr_36944_37009[(2)] = inst_36872);

(statearr_36944_37009[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (19))){
var inst_36789 = (state_36890[(7)]);
var inst_36793 = cljs.core.chunk_first.call(null,inst_36789);
var inst_36794 = cljs.core.chunk_rest.call(null,inst_36789);
var inst_36795 = cljs.core.count.call(null,inst_36793);
var inst_36767 = inst_36794;
var inst_36768 = inst_36793;
var inst_36769 = inst_36795;
var inst_36770 = (0);
var state_36890__$1 = (function (){var statearr_36945 = state_36890;
(statearr_36945[(13)] = inst_36768);

(statearr_36945[(14)] = inst_36770);

(statearr_36945[(15)] = inst_36769);

(statearr_36945[(17)] = inst_36767);

return statearr_36945;
})();
var statearr_36946_37010 = state_36890__$1;
(statearr_36946_37010[(2)] = null);

(statearr_36946_37010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (11))){
var inst_36789 = (state_36890[(7)]);
var inst_36767 = (state_36890[(17)]);
var inst_36789__$1 = cljs.core.seq.call(null,inst_36767);
var state_36890__$1 = (function (){var statearr_36947 = state_36890;
(statearr_36947[(7)] = inst_36789__$1);

return statearr_36947;
})();
if(inst_36789__$1){
var statearr_36948_37011 = state_36890__$1;
(statearr_36948_37011[(1)] = (16));

} else {
var statearr_36949_37012 = state_36890__$1;
(statearr_36949_37012[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (9))){
var inst_36819 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36950_37013 = state_36890__$1;
(statearr_36950_37013[(2)] = inst_36819);

(statearr_36950_37013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (5))){
var inst_36765 = cljs.core.deref.call(null,cs);
var inst_36766 = cljs.core.seq.call(null,inst_36765);
var inst_36767 = inst_36766;
var inst_36768 = null;
var inst_36769 = (0);
var inst_36770 = (0);
var state_36890__$1 = (function (){var statearr_36951 = state_36890;
(statearr_36951[(13)] = inst_36768);

(statearr_36951[(14)] = inst_36770);

(statearr_36951[(15)] = inst_36769);

(statearr_36951[(17)] = inst_36767);

return statearr_36951;
})();
var statearr_36952_37014 = state_36890__$1;
(statearr_36952_37014[(2)] = null);

(statearr_36952_37014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (14))){
var state_36890__$1 = state_36890;
var statearr_36953_37015 = state_36890__$1;
(statearr_36953_37015[(2)] = null);

(statearr_36953_37015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (45))){
var inst_36880 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36954_37016 = state_36890__$1;
(statearr_36954_37016[(2)] = inst_36880);

(statearr_36954_37016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (26))){
var inst_36822 = (state_36890[(29)]);
var inst_36876 = (state_36890[(2)]);
var inst_36877 = cljs.core.seq.call(null,inst_36822);
var state_36890__$1 = (function (){var statearr_36955 = state_36890;
(statearr_36955[(31)] = inst_36876);

return statearr_36955;
})();
if(inst_36877){
var statearr_36956_37017 = state_36890__$1;
(statearr_36956_37017[(1)] = (42));

} else {
var statearr_36957_37018 = state_36890__$1;
(statearr_36957_37018[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (16))){
var inst_36789 = (state_36890[(7)]);
var inst_36791 = cljs.core.chunked_seq_QMARK_.call(null,inst_36789);
var state_36890__$1 = state_36890;
if(inst_36791){
var statearr_36958_37019 = state_36890__$1;
(statearr_36958_37019[(1)] = (19));

} else {
var statearr_36959_37020 = state_36890__$1;
(statearr_36959_37020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (38))){
var inst_36869 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36960_37021 = state_36890__$1;
(statearr_36960_37021[(2)] = inst_36869);

(statearr_36960_37021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (30))){
var state_36890__$1 = state_36890;
var statearr_36961_37022 = state_36890__$1;
(statearr_36961_37022[(2)] = null);

(statearr_36961_37022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (10))){
var inst_36768 = (state_36890[(13)]);
var inst_36770 = (state_36890[(14)]);
var inst_36778 = cljs.core._nth.call(null,inst_36768,inst_36770);
var inst_36779 = cljs.core.nth.call(null,inst_36778,(0),null);
var inst_36780 = cljs.core.nth.call(null,inst_36778,(1),null);
var state_36890__$1 = (function (){var statearr_36962 = state_36890;
(statearr_36962[(26)] = inst_36779);

return statearr_36962;
})();
if(cljs.core.truth_(inst_36780)){
var statearr_36963_37023 = state_36890__$1;
(statearr_36963_37023[(1)] = (13));

} else {
var statearr_36964_37024 = state_36890__$1;
(statearr_36964_37024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (18))){
var inst_36815 = (state_36890[(2)]);
var state_36890__$1 = state_36890;
var statearr_36965_37025 = state_36890__$1;
(statearr_36965_37025[(2)] = inst_36815);

(statearr_36965_37025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (42))){
var state_36890__$1 = state_36890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36890__$1,(45),dchan);
} else {
if((state_val_36891 === (37))){
var inst_36758 = (state_36890[(10)]);
var inst_36849 = (state_36890[(25)]);
var inst_36858 = (state_36890[(23)]);
var inst_36858__$1 = cljs.core.first.call(null,inst_36849);
var inst_36859 = cljs.core.async.put_BANG_.call(null,inst_36858__$1,inst_36758,done);
var state_36890__$1 = (function (){var statearr_36966 = state_36890;
(statearr_36966[(23)] = inst_36858__$1);

return statearr_36966;
})();
if(cljs.core.truth_(inst_36859)){
var statearr_36967_37026 = state_36890__$1;
(statearr_36967_37026[(1)] = (39));

} else {
var statearr_36968_37027 = state_36890__$1;
(statearr_36968_37027[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36891 === (8))){
var inst_36770 = (state_36890[(14)]);
var inst_36769 = (state_36890[(15)]);
var inst_36772 = (inst_36770 < inst_36769);
var inst_36773 = inst_36772;
var state_36890__$1 = state_36890;
if(cljs.core.truth_(inst_36773)){
var statearr_36969_37028 = state_36890__$1;
(statearr_36969_37028[(1)] = (10));

} else {
var statearr_36970_37029 = state_36890__$1;
(statearr_36970_37029[(1)] = (11));

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
});})(c__36156__auto___36975,cs,m,dchan,dctr,done))
;
return ((function (switch__36066__auto__,c__36156__auto___36975,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36067__auto__ = null;
var cljs$core$async$mult_$_state_machine__36067__auto____0 = (function (){
var statearr_36971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36971[(0)] = cljs$core$async$mult_$_state_machine__36067__auto__);

(statearr_36971[(1)] = (1));

return statearr_36971;
});
var cljs$core$async$mult_$_state_machine__36067__auto____1 = (function (state_36890){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_36890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e36972){if((e36972 instanceof Object)){
var ex__36070__auto__ = e36972;
var statearr_36973_37030 = state_36890;
(statearr_36973_37030[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37031 = state_36890;
state_36890 = G__37031;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36067__auto__ = function(state_36890){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36067__auto____1.call(this,state_36890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36067__auto____0;
cljs$core$async$mult_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36067__auto____1;
return cljs$core$async$mult_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___36975,cs,m,dchan,dctr,done))
})();
var state__36158__auto__ = (function (){var statearr_36974 = f__36157__auto__.call(null);
(statearr_36974[(6)] = c__36156__auto___36975);

return statearr_36974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___36975,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37033 = arguments.length;
switch (G__37033) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m);
} else {
var m__30817__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,state_map);
} else {
var m__30817__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,mode);
} else {
var m__30817__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___37045 = arguments.length;
var i__31363__auto___37046 = (0);
while(true){
if((i__31363__auto___37046 < len__31362__auto___37045)){
args__31369__auto__.push((arguments[i__31363__auto___37046]));

var G__37047 = (i__31363__auto___37046 + (1));
i__31363__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((3) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31370__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37039){
var map__37040 = p__37039;
var map__37040__$1 = ((((!((map__37040 == null)))?((((map__37040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37040):map__37040);
var opts = map__37040__$1;
var statearr_37042_37048 = state;
(statearr_37042_37048[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__37040,map__37040__$1,opts){
return (function (val){
var statearr_37043_37049 = state;
(statearr_37043_37049[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37040,map__37040__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_37044_37050 = state;
(statearr_37044_37050[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37035){
var G__37036 = cljs.core.first.call(null,seq37035);
var seq37035__$1 = cljs.core.next.call(null,seq37035);
var G__37037 = cljs.core.first.call(null,seq37035__$1);
var seq37035__$2 = cljs.core.next.call(null,seq37035__$1);
var G__37038 = cljs.core.first.call(null,seq37035__$2);
var seq37035__$3 = cljs.core.next.call(null,seq37035__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37036,G__37037,G__37038,seq37035__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37051 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta37052){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta37052 = meta37052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37053,meta37052__$1){
var self__ = this;
var _37053__$1 = this;
return (new cljs.core.async.t_cljs$core$async37051(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta37052__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37053){
var self__ = this;
var _37053__$1 = this;
return self__.meta37052;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta37052","meta37052",1478881298,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37051";

cljs.core.async.t_cljs$core$async37051.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async37051");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37051 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37051(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37052){
return (new cljs.core.async.t_cljs$core$async37051(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37052));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37051(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36156__auto___37215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37155){
var state_val_37156 = (state_37155[(1)]);
if((state_val_37156 === (7))){
var inst_37070 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37157_37216 = state_37155__$1;
(statearr_37157_37216[(2)] = inst_37070);

(statearr_37157_37216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (20))){
var inst_37082 = (state_37155[(7)]);
var state_37155__$1 = state_37155;
var statearr_37158_37217 = state_37155__$1;
(statearr_37158_37217[(2)] = inst_37082);

(statearr_37158_37217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (27))){
var state_37155__$1 = state_37155;
var statearr_37159_37218 = state_37155__$1;
(statearr_37159_37218[(2)] = null);

(statearr_37159_37218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (1))){
var inst_37057 = (state_37155[(8)]);
var inst_37057__$1 = calc_state.call(null);
var inst_37059 = (inst_37057__$1 == null);
var inst_37060 = cljs.core.not.call(null,inst_37059);
var state_37155__$1 = (function (){var statearr_37160 = state_37155;
(statearr_37160[(8)] = inst_37057__$1);

return statearr_37160;
})();
if(inst_37060){
var statearr_37161_37219 = state_37155__$1;
(statearr_37161_37219[(1)] = (2));

} else {
var statearr_37162_37220 = state_37155__$1;
(statearr_37162_37220[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (24))){
var inst_37106 = (state_37155[(9)]);
var inst_37115 = (state_37155[(10)]);
var inst_37129 = (state_37155[(11)]);
var inst_37129__$1 = inst_37106.call(null,inst_37115);
var state_37155__$1 = (function (){var statearr_37163 = state_37155;
(statearr_37163[(11)] = inst_37129__$1);

return statearr_37163;
})();
if(cljs.core.truth_(inst_37129__$1)){
var statearr_37164_37221 = state_37155__$1;
(statearr_37164_37221[(1)] = (29));

} else {
var statearr_37165_37222 = state_37155__$1;
(statearr_37165_37222[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (4))){
var inst_37073 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37073)){
var statearr_37166_37223 = state_37155__$1;
(statearr_37166_37223[(1)] = (8));

} else {
var statearr_37167_37224 = state_37155__$1;
(statearr_37167_37224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (15))){
var inst_37100 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37100)){
var statearr_37168_37225 = state_37155__$1;
(statearr_37168_37225[(1)] = (19));

} else {
var statearr_37169_37226 = state_37155__$1;
(statearr_37169_37226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (21))){
var inst_37105 = (state_37155[(12)]);
var inst_37105__$1 = (state_37155[(2)]);
var inst_37106 = cljs.core.get.call(null,inst_37105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37107 = cljs.core.get.call(null,inst_37105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37108 = cljs.core.get.call(null,inst_37105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37155__$1 = (function (){var statearr_37170 = state_37155;
(statearr_37170[(9)] = inst_37106);

(statearr_37170[(13)] = inst_37107);

(statearr_37170[(12)] = inst_37105__$1);

return statearr_37170;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37155__$1,(22),inst_37108);
} else {
if((state_val_37156 === (31))){
var inst_37137 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37137)){
var statearr_37171_37227 = state_37155__$1;
(statearr_37171_37227[(1)] = (32));

} else {
var statearr_37172_37228 = state_37155__$1;
(statearr_37172_37228[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (32))){
var inst_37114 = (state_37155[(14)]);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37155__$1,(35),out,inst_37114);
} else {
if((state_val_37156 === (33))){
var inst_37105 = (state_37155[(12)]);
var inst_37082 = inst_37105;
var state_37155__$1 = (function (){var statearr_37173 = state_37155;
(statearr_37173[(7)] = inst_37082);

return statearr_37173;
})();
var statearr_37174_37229 = state_37155__$1;
(statearr_37174_37229[(2)] = null);

(statearr_37174_37229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (13))){
var inst_37082 = (state_37155[(7)]);
var inst_37089 = inst_37082.cljs$lang$protocol_mask$partition0$;
var inst_37090 = (inst_37089 & (64));
var inst_37091 = inst_37082.cljs$core$ISeq$;
var inst_37092 = (cljs.core.PROTOCOL_SENTINEL === inst_37091);
var inst_37093 = (inst_37090) || (inst_37092);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37093)){
var statearr_37175_37230 = state_37155__$1;
(statearr_37175_37230[(1)] = (16));

} else {
var statearr_37176_37231 = state_37155__$1;
(statearr_37176_37231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (22))){
var inst_37114 = (state_37155[(14)]);
var inst_37115 = (state_37155[(10)]);
var inst_37113 = (state_37155[(2)]);
var inst_37114__$1 = cljs.core.nth.call(null,inst_37113,(0),null);
var inst_37115__$1 = cljs.core.nth.call(null,inst_37113,(1),null);
var inst_37116 = (inst_37114__$1 == null);
var inst_37117 = cljs.core._EQ_.call(null,inst_37115__$1,change);
var inst_37118 = (inst_37116) || (inst_37117);
var state_37155__$1 = (function (){var statearr_37177 = state_37155;
(statearr_37177[(14)] = inst_37114__$1);

(statearr_37177[(10)] = inst_37115__$1);

return statearr_37177;
})();
if(cljs.core.truth_(inst_37118)){
var statearr_37178_37232 = state_37155__$1;
(statearr_37178_37232[(1)] = (23));

} else {
var statearr_37179_37233 = state_37155__$1;
(statearr_37179_37233[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (36))){
var inst_37105 = (state_37155[(12)]);
var inst_37082 = inst_37105;
var state_37155__$1 = (function (){var statearr_37180 = state_37155;
(statearr_37180[(7)] = inst_37082);

return statearr_37180;
})();
var statearr_37181_37234 = state_37155__$1;
(statearr_37181_37234[(2)] = null);

(statearr_37181_37234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (29))){
var inst_37129 = (state_37155[(11)]);
var state_37155__$1 = state_37155;
var statearr_37182_37235 = state_37155__$1;
(statearr_37182_37235[(2)] = inst_37129);

(statearr_37182_37235[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (6))){
var state_37155__$1 = state_37155;
var statearr_37183_37236 = state_37155__$1;
(statearr_37183_37236[(2)] = false);

(statearr_37183_37236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (28))){
var inst_37125 = (state_37155[(2)]);
var inst_37126 = calc_state.call(null);
var inst_37082 = inst_37126;
var state_37155__$1 = (function (){var statearr_37184 = state_37155;
(statearr_37184[(15)] = inst_37125);

(statearr_37184[(7)] = inst_37082);

return statearr_37184;
})();
var statearr_37185_37237 = state_37155__$1;
(statearr_37185_37237[(2)] = null);

(statearr_37185_37237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (25))){
var inst_37151 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37186_37238 = state_37155__$1;
(statearr_37186_37238[(2)] = inst_37151);

(statearr_37186_37238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (34))){
var inst_37149 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37187_37239 = state_37155__$1;
(statearr_37187_37239[(2)] = inst_37149);

(statearr_37187_37239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (17))){
var state_37155__$1 = state_37155;
var statearr_37188_37240 = state_37155__$1;
(statearr_37188_37240[(2)] = false);

(statearr_37188_37240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (3))){
var state_37155__$1 = state_37155;
var statearr_37189_37241 = state_37155__$1;
(statearr_37189_37241[(2)] = false);

(statearr_37189_37241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (12))){
var inst_37153 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37155__$1,inst_37153);
} else {
if((state_val_37156 === (2))){
var inst_37057 = (state_37155[(8)]);
var inst_37062 = inst_37057.cljs$lang$protocol_mask$partition0$;
var inst_37063 = (inst_37062 & (64));
var inst_37064 = inst_37057.cljs$core$ISeq$;
var inst_37065 = (cljs.core.PROTOCOL_SENTINEL === inst_37064);
var inst_37066 = (inst_37063) || (inst_37065);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37066)){
var statearr_37190_37242 = state_37155__$1;
(statearr_37190_37242[(1)] = (5));

} else {
var statearr_37191_37243 = state_37155__$1;
(statearr_37191_37243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (23))){
var inst_37114 = (state_37155[(14)]);
var inst_37120 = (inst_37114 == null);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37120)){
var statearr_37192_37244 = state_37155__$1;
(statearr_37192_37244[(1)] = (26));

} else {
var statearr_37193_37245 = state_37155__$1;
(statearr_37193_37245[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (35))){
var inst_37140 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37140)){
var statearr_37194_37246 = state_37155__$1;
(statearr_37194_37246[(1)] = (36));

} else {
var statearr_37195_37247 = state_37155__$1;
(statearr_37195_37247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (19))){
var inst_37082 = (state_37155[(7)]);
var inst_37102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37082);
var state_37155__$1 = state_37155;
var statearr_37196_37248 = state_37155__$1;
(statearr_37196_37248[(2)] = inst_37102);

(statearr_37196_37248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (11))){
var inst_37082 = (state_37155[(7)]);
var inst_37086 = (inst_37082 == null);
var inst_37087 = cljs.core.not.call(null,inst_37086);
var state_37155__$1 = state_37155;
if(inst_37087){
var statearr_37197_37249 = state_37155__$1;
(statearr_37197_37249[(1)] = (13));

} else {
var statearr_37198_37250 = state_37155__$1;
(statearr_37198_37250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (9))){
var inst_37057 = (state_37155[(8)]);
var state_37155__$1 = state_37155;
var statearr_37199_37251 = state_37155__$1;
(statearr_37199_37251[(2)] = inst_37057);

(statearr_37199_37251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (5))){
var state_37155__$1 = state_37155;
var statearr_37200_37252 = state_37155__$1;
(statearr_37200_37252[(2)] = true);

(statearr_37200_37252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (14))){
var state_37155__$1 = state_37155;
var statearr_37201_37253 = state_37155__$1;
(statearr_37201_37253[(2)] = false);

(statearr_37201_37253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (26))){
var inst_37115 = (state_37155[(10)]);
var inst_37122 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37115);
var state_37155__$1 = state_37155;
var statearr_37202_37254 = state_37155__$1;
(statearr_37202_37254[(2)] = inst_37122);

(statearr_37202_37254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (16))){
var state_37155__$1 = state_37155;
var statearr_37203_37255 = state_37155__$1;
(statearr_37203_37255[(2)] = true);

(statearr_37203_37255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (38))){
var inst_37145 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37204_37256 = state_37155__$1;
(statearr_37204_37256[(2)] = inst_37145);

(statearr_37204_37256[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (30))){
var inst_37106 = (state_37155[(9)]);
var inst_37115 = (state_37155[(10)]);
var inst_37107 = (state_37155[(13)]);
var inst_37132 = cljs.core.empty_QMARK_.call(null,inst_37106);
var inst_37133 = inst_37107.call(null,inst_37115);
var inst_37134 = cljs.core.not.call(null,inst_37133);
var inst_37135 = (inst_37132) && (inst_37134);
var state_37155__$1 = state_37155;
var statearr_37205_37257 = state_37155__$1;
(statearr_37205_37257[(2)] = inst_37135);

(statearr_37205_37257[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (10))){
var inst_37057 = (state_37155[(8)]);
var inst_37078 = (state_37155[(2)]);
var inst_37079 = cljs.core.get.call(null,inst_37078,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37080 = cljs.core.get.call(null,inst_37078,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37081 = cljs.core.get.call(null,inst_37078,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37082 = inst_37057;
var state_37155__$1 = (function (){var statearr_37206 = state_37155;
(statearr_37206[(7)] = inst_37082);

(statearr_37206[(16)] = inst_37080);

(statearr_37206[(17)] = inst_37079);

(statearr_37206[(18)] = inst_37081);

return statearr_37206;
})();
var statearr_37207_37258 = state_37155__$1;
(statearr_37207_37258[(2)] = null);

(statearr_37207_37258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (18))){
var inst_37097 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37208_37259 = state_37155__$1;
(statearr_37208_37259[(2)] = inst_37097);

(statearr_37208_37259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (37))){
var state_37155__$1 = state_37155;
var statearr_37209_37260 = state_37155__$1;
(statearr_37209_37260[(2)] = null);

(statearr_37209_37260[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (8))){
var inst_37057 = (state_37155[(8)]);
var inst_37075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37057);
var state_37155__$1 = state_37155;
var statearr_37210_37261 = state_37155__$1;
(statearr_37210_37261[(2)] = inst_37075);

(statearr_37210_37261[(1)] = (10));


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
});})(c__36156__auto___37215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36066__auto__,c__36156__auto___37215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36067__auto__ = null;
var cljs$core$async$mix_$_state_machine__36067__auto____0 = (function (){
var statearr_37211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37211[(0)] = cljs$core$async$mix_$_state_machine__36067__auto__);

(statearr_37211[(1)] = (1));

return statearr_37211;
});
var cljs$core$async$mix_$_state_machine__36067__auto____1 = (function (state_37155){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37212){if((e37212 instanceof Object)){
var ex__36070__auto__ = e37212;
var statearr_37213_37262 = state_37155;
(statearr_37213_37262[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37263 = state_37155;
state_37155 = G__37263;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36067__auto__ = function(state_37155){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36067__auto____1.call(this,state_37155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36067__auto____0;
cljs$core$async$mix_$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36067__auto____1;
return cljs$core$async$mix_$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36158__auto__ = (function (){var statearr_37214 = f__36157__auto__.call(null);
(statearr_37214[(6)] = c__36156__auto___37215);

return statearr_37214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30817__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37265 = arguments.length;
switch (G__37265) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37269 = arguments.length;
switch (G__37269) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30083__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30083__auto__,mults){
return (function (p1__37267_SHARP_){
if(cljs.core.truth_(p1__37267_SHARP_.call(null,topic))){
return p1__37267_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37267_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30083__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37270 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37271){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37271 = meta37271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37272,meta37271__$1){
var self__ = this;
var _37272__$1 = this;
return (new cljs.core.async.t_cljs$core$async37270(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37271__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37272){
var self__ = this;
var _37272__$1 = this;
return self__.meta37271;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37271","meta37271",-633068127,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37270";

cljs.core.async.t_cljs$core$async37270.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async37270");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37270 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37271){
return (new cljs.core.async.t_cljs$core$async37270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37271));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37270(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36156__auto___37390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37390,mults,ensure_mult,p){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37390,mults,ensure_mult,p){
return (function (state_37344){
var state_val_37345 = (state_37344[(1)]);
if((state_val_37345 === (7))){
var inst_37340 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37346_37391 = state_37344__$1;
(statearr_37346_37391[(2)] = inst_37340);

(statearr_37346_37391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (20))){
var state_37344__$1 = state_37344;
var statearr_37347_37392 = state_37344__$1;
(statearr_37347_37392[(2)] = null);

(statearr_37347_37392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (1))){
var state_37344__$1 = state_37344;
var statearr_37348_37393 = state_37344__$1;
(statearr_37348_37393[(2)] = null);

(statearr_37348_37393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (24))){
var inst_37323 = (state_37344[(7)]);
var inst_37332 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37323);
var state_37344__$1 = state_37344;
var statearr_37349_37394 = state_37344__$1;
(statearr_37349_37394[(2)] = inst_37332);

(statearr_37349_37394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (4))){
var inst_37275 = (state_37344[(8)]);
var inst_37275__$1 = (state_37344[(2)]);
var inst_37276 = (inst_37275__$1 == null);
var state_37344__$1 = (function (){var statearr_37350 = state_37344;
(statearr_37350[(8)] = inst_37275__$1);

return statearr_37350;
})();
if(cljs.core.truth_(inst_37276)){
var statearr_37351_37395 = state_37344__$1;
(statearr_37351_37395[(1)] = (5));

} else {
var statearr_37352_37396 = state_37344__$1;
(statearr_37352_37396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (15))){
var inst_37317 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37353_37397 = state_37344__$1;
(statearr_37353_37397[(2)] = inst_37317);

(statearr_37353_37397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (21))){
var inst_37337 = (state_37344[(2)]);
var state_37344__$1 = (function (){var statearr_37354 = state_37344;
(statearr_37354[(9)] = inst_37337);

return statearr_37354;
})();
var statearr_37355_37398 = state_37344__$1;
(statearr_37355_37398[(2)] = null);

(statearr_37355_37398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (13))){
var inst_37299 = (state_37344[(10)]);
var inst_37301 = cljs.core.chunked_seq_QMARK_.call(null,inst_37299);
var state_37344__$1 = state_37344;
if(inst_37301){
var statearr_37356_37399 = state_37344__$1;
(statearr_37356_37399[(1)] = (16));

} else {
var statearr_37357_37400 = state_37344__$1;
(statearr_37357_37400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (22))){
var inst_37329 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
if(cljs.core.truth_(inst_37329)){
var statearr_37358_37401 = state_37344__$1;
(statearr_37358_37401[(1)] = (23));

} else {
var statearr_37359_37402 = state_37344__$1;
(statearr_37359_37402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (6))){
var inst_37275 = (state_37344[(8)]);
var inst_37323 = (state_37344[(7)]);
var inst_37325 = (state_37344[(11)]);
var inst_37323__$1 = topic_fn.call(null,inst_37275);
var inst_37324 = cljs.core.deref.call(null,mults);
var inst_37325__$1 = cljs.core.get.call(null,inst_37324,inst_37323__$1);
var state_37344__$1 = (function (){var statearr_37360 = state_37344;
(statearr_37360[(7)] = inst_37323__$1);

(statearr_37360[(11)] = inst_37325__$1);

return statearr_37360;
})();
if(cljs.core.truth_(inst_37325__$1)){
var statearr_37361_37403 = state_37344__$1;
(statearr_37361_37403[(1)] = (19));

} else {
var statearr_37362_37404 = state_37344__$1;
(statearr_37362_37404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (25))){
var inst_37334 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37363_37405 = state_37344__$1;
(statearr_37363_37405[(2)] = inst_37334);

(statearr_37363_37405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (17))){
var inst_37299 = (state_37344[(10)]);
var inst_37308 = cljs.core.first.call(null,inst_37299);
var inst_37309 = cljs.core.async.muxch_STAR_.call(null,inst_37308);
var inst_37310 = cljs.core.async.close_BANG_.call(null,inst_37309);
var inst_37311 = cljs.core.next.call(null,inst_37299);
var inst_37285 = inst_37311;
var inst_37286 = null;
var inst_37287 = (0);
var inst_37288 = (0);
var state_37344__$1 = (function (){var statearr_37364 = state_37344;
(statearr_37364[(12)] = inst_37288);

(statearr_37364[(13)] = inst_37287);

(statearr_37364[(14)] = inst_37285);

(statearr_37364[(15)] = inst_37286);

(statearr_37364[(16)] = inst_37310);

return statearr_37364;
})();
var statearr_37365_37406 = state_37344__$1;
(statearr_37365_37406[(2)] = null);

(statearr_37365_37406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (3))){
var inst_37342 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37344__$1,inst_37342);
} else {
if((state_val_37345 === (12))){
var inst_37319 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37366_37407 = state_37344__$1;
(statearr_37366_37407[(2)] = inst_37319);

(statearr_37366_37407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (2))){
var state_37344__$1 = state_37344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37344__$1,(4),ch);
} else {
if((state_val_37345 === (23))){
var state_37344__$1 = state_37344;
var statearr_37367_37408 = state_37344__$1;
(statearr_37367_37408[(2)] = null);

(statearr_37367_37408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (19))){
var inst_37275 = (state_37344[(8)]);
var inst_37325 = (state_37344[(11)]);
var inst_37327 = cljs.core.async.muxch_STAR_.call(null,inst_37325);
var state_37344__$1 = state_37344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37344__$1,(22),inst_37327,inst_37275);
} else {
if((state_val_37345 === (11))){
var inst_37299 = (state_37344[(10)]);
var inst_37285 = (state_37344[(14)]);
var inst_37299__$1 = cljs.core.seq.call(null,inst_37285);
var state_37344__$1 = (function (){var statearr_37368 = state_37344;
(statearr_37368[(10)] = inst_37299__$1);

return statearr_37368;
})();
if(inst_37299__$1){
var statearr_37369_37409 = state_37344__$1;
(statearr_37369_37409[(1)] = (13));

} else {
var statearr_37370_37410 = state_37344__$1;
(statearr_37370_37410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (9))){
var inst_37321 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37371_37411 = state_37344__$1;
(statearr_37371_37411[(2)] = inst_37321);

(statearr_37371_37411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (5))){
var inst_37282 = cljs.core.deref.call(null,mults);
var inst_37283 = cljs.core.vals.call(null,inst_37282);
var inst_37284 = cljs.core.seq.call(null,inst_37283);
var inst_37285 = inst_37284;
var inst_37286 = null;
var inst_37287 = (0);
var inst_37288 = (0);
var state_37344__$1 = (function (){var statearr_37372 = state_37344;
(statearr_37372[(12)] = inst_37288);

(statearr_37372[(13)] = inst_37287);

(statearr_37372[(14)] = inst_37285);

(statearr_37372[(15)] = inst_37286);

return statearr_37372;
})();
var statearr_37373_37412 = state_37344__$1;
(statearr_37373_37412[(2)] = null);

(statearr_37373_37412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (14))){
var state_37344__$1 = state_37344;
var statearr_37377_37413 = state_37344__$1;
(statearr_37377_37413[(2)] = null);

(statearr_37377_37413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (16))){
var inst_37299 = (state_37344[(10)]);
var inst_37303 = cljs.core.chunk_first.call(null,inst_37299);
var inst_37304 = cljs.core.chunk_rest.call(null,inst_37299);
var inst_37305 = cljs.core.count.call(null,inst_37303);
var inst_37285 = inst_37304;
var inst_37286 = inst_37303;
var inst_37287 = inst_37305;
var inst_37288 = (0);
var state_37344__$1 = (function (){var statearr_37378 = state_37344;
(statearr_37378[(12)] = inst_37288);

(statearr_37378[(13)] = inst_37287);

(statearr_37378[(14)] = inst_37285);

(statearr_37378[(15)] = inst_37286);

return statearr_37378;
})();
var statearr_37379_37414 = state_37344__$1;
(statearr_37379_37414[(2)] = null);

(statearr_37379_37414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (10))){
var inst_37288 = (state_37344[(12)]);
var inst_37287 = (state_37344[(13)]);
var inst_37285 = (state_37344[(14)]);
var inst_37286 = (state_37344[(15)]);
var inst_37293 = cljs.core._nth.call(null,inst_37286,inst_37288);
var inst_37294 = cljs.core.async.muxch_STAR_.call(null,inst_37293);
var inst_37295 = cljs.core.async.close_BANG_.call(null,inst_37294);
var inst_37296 = (inst_37288 + (1));
var tmp37374 = inst_37287;
var tmp37375 = inst_37285;
var tmp37376 = inst_37286;
var inst_37285__$1 = tmp37375;
var inst_37286__$1 = tmp37376;
var inst_37287__$1 = tmp37374;
var inst_37288__$1 = inst_37296;
var state_37344__$1 = (function (){var statearr_37380 = state_37344;
(statearr_37380[(12)] = inst_37288__$1);

(statearr_37380[(13)] = inst_37287__$1);

(statearr_37380[(14)] = inst_37285__$1);

(statearr_37380[(15)] = inst_37286__$1);

(statearr_37380[(17)] = inst_37295);

return statearr_37380;
})();
var statearr_37381_37415 = state_37344__$1;
(statearr_37381_37415[(2)] = null);

(statearr_37381_37415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (18))){
var inst_37314 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37382_37416 = state_37344__$1;
(statearr_37382_37416[(2)] = inst_37314);

(statearr_37382_37416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (8))){
var inst_37288 = (state_37344[(12)]);
var inst_37287 = (state_37344[(13)]);
var inst_37290 = (inst_37288 < inst_37287);
var inst_37291 = inst_37290;
var state_37344__$1 = state_37344;
if(cljs.core.truth_(inst_37291)){
var statearr_37383_37417 = state_37344__$1;
(statearr_37383_37417[(1)] = (10));

} else {
var statearr_37384_37418 = state_37344__$1;
(statearr_37384_37418[(1)] = (11));

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
});})(c__36156__auto___37390,mults,ensure_mult,p))
;
return ((function (switch__36066__auto__,c__36156__auto___37390,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37385[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37385[(1)] = (1));

return statearr_37385;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37344){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37386){if((e37386 instanceof Object)){
var ex__36070__auto__ = e37386;
var statearr_37387_37419 = state_37344;
(statearr_37387_37419[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37420 = state_37344;
state_37344 = G__37420;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37390,mults,ensure_mult,p))
})();
var state__36158__auto__ = (function (){var statearr_37388 = f__36157__auto__.call(null);
(statearr_37388[(6)] = c__36156__auto___37390);

return statearr_37388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37390,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37422 = arguments.length;
switch (G__37422) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37425 = arguments.length;
switch (G__37425) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37428 = arguments.length;
switch (G__37428) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__36156__auto___37495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37467){
var state_val_37468 = (state_37467[(1)]);
if((state_val_37468 === (7))){
var state_37467__$1 = state_37467;
var statearr_37469_37496 = state_37467__$1;
(statearr_37469_37496[(2)] = null);

(statearr_37469_37496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (1))){
var state_37467__$1 = state_37467;
var statearr_37470_37497 = state_37467__$1;
(statearr_37470_37497[(2)] = null);

(statearr_37470_37497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (4))){
var inst_37431 = (state_37467[(7)]);
var inst_37433 = (inst_37431 < cnt);
var state_37467__$1 = state_37467;
if(cljs.core.truth_(inst_37433)){
var statearr_37471_37498 = state_37467__$1;
(statearr_37471_37498[(1)] = (6));

} else {
var statearr_37472_37499 = state_37467__$1;
(statearr_37472_37499[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (15))){
var inst_37463 = (state_37467[(2)]);
var state_37467__$1 = state_37467;
var statearr_37473_37500 = state_37467__$1;
(statearr_37473_37500[(2)] = inst_37463);

(statearr_37473_37500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (13))){
var inst_37456 = cljs.core.async.close_BANG_.call(null,out);
var state_37467__$1 = state_37467;
var statearr_37474_37501 = state_37467__$1;
(statearr_37474_37501[(2)] = inst_37456);

(statearr_37474_37501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (6))){
var state_37467__$1 = state_37467;
var statearr_37475_37502 = state_37467__$1;
(statearr_37475_37502[(2)] = null);

(statearr_37475_37502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (3))){
var inst_37465 = (state_37467[(2)]);
var state_37467__$1 = state_37467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37467__$1,inst_37465);
} else {
if((state_val_37468 === (12))){
var inst_37453 = (state_37467[(8)]);
var inst_37453__$1 = (state_37467[(2)]);
var inst_37454 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37453__$1);
var state_37467__$1 = (function (){var statearr_37476 = state_37467;
(statearr_37476[(8)] = inst_37453__$1);

return statearr_37476;
})();
if(cljs.core.truth_(inst_37454)){
var statearr_37477_37503 = state_37467__$1;
(statearr_37477_37503[(1)] = (13));

} else {
var statearr_37478_37504 = state_37467__$1;
(statearr_37478_37504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (2))){
var inst_37430 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37431 = (0);
var state_37467__$1 = (function (){var statearr_37479 = state_37467;
(statearr_37479[(7)] = inst_37431);

(statearr_37479[(9)] = inst_37430);

return statearr_37479;
})();
var statearr_37480_37505 = state_37467__$1;
(statearr_37480_37505[(2)] = null);

(statearr_37480_37505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (11))){
var inst_37431 = (state_37467[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37467,(10),Object,null,(9));
var inst_37440 = chs__$1.call(null,inst_37431);
var inst_37441 = done.call(null,inst_37431);
var inst_37442 = cljs.core.async.take_BANG_.call(null,inst_37440,inst_37441);
var state_37467__$1 = state_37467;
var statearr_37481_37506 = state_37467__$1;
(statearr_37481_37506[(2)] = inst_37442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37467__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (9))){
var inst_37431 = (state_37467[(7)]);
var inst_37444 = (state_37467[(2)]);
var inst_37445 = (inst_37431 + (1));
var inst_37431__$1 = inst_37445;
var state_37467__$1 = (function (){var statearr_37482 = state_37467;
(statearr_37482[(7)] = inst_37431__$1);

(statearr_37482[(10)] = inst_37444);

return statearr_37482;
})();
var statearr_37483_37507 = state_37467__$1;
(statearr_37483_37507[(2)] = null);

(statearr_37483_37507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (5))){
var inst_37451 = (state_37467[(2)]);
var state_37467__$1 = (function (){var statearr_37484 = state_37467;
(statearr_37484[(11)] = inst_37451);

return statearr_37484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37467__$1,(12),dchan);
} else {
if((state_val_37468 === (14))){
var inst_37453 = (state_37467[(8)]);
var inst_37458 = cljs.core.apply.call(null,f,inst_37453);
var state_37467__$1 = state_37467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37467__$1,(16),out,inst_37458);
} else {
if((state_val_37468 === (16))){
var inst_37460 = (state_37467[(2)]);
var state_37467__$1 = (function (){var statearr_37485 = state_37467;
(statearr_37485[(12)] = inst_37460);

return statearr_37485;
})();
var statearr_37486_37508 = state_37467__$1;
(statearr_37486_37508[(2)] = null);

(statearr_37486_37508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (10))){
var inst_37435 = (state_37467[(2)]);
var inst_37436 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37467__$1 = (function (){var statearr_37487 = state_37467;
(statearr_37487[(13)] = inst_37435);

return statearr_37487;
})();
var statearr_37488_37509 = state_37467__$1;
(statearr_37488_37509[(2)] = inst_37436);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37467__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37468 === (8))){
var inst_37449 = (state_37467[(2)]);
var state_37467__$1 = state_37467;
var statearr_37489_37510 = state_37467__$1;
(statearr_37489_37510[(2)] = inst_37449);

(statearr_37489_37510[(1)] = (5));


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
});})(c__36156__auto___37495,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36066__auto__,c__36156__auto___37495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37490[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37490[(1)] = (1));

return statearr_37490;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37467){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37491){if((e37491 instanceof Object)){
var ex__36070__auto__ = e37491;
var statearr_37492_37511 = state_37467;
(statearr_37492_37511[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37512 = state_37467;
state_37467 = G__37512;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37495,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36158__auto__ = (function (){var statearr_37493 = f__36157__auto__.call(null);
(statearr_37493[(6)] = c__36156__auto___37495);

return statearr_37493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37495,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37515 = arguments.length;
switch (G__37515) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36156__auto___37569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37569,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37569,out){
return (function (state_37547){
var state_val_37548 = (state_37547[(1)]);
if((state_val_37548 === (7))){
var inst_37527 = (state_37547[(7)]);
var inst_37526 = (state_37547[(8)]);
var inst_37526__$1 = (state_37547[(2)]);
var inst_37527__$1 = cljs.core.nth.call(null,inst_37526__$1,(0),null);
var inst_37528 = cljs.core.nth.call(null,inst_37526__$1,(1),null);
var inst_37529 = (inst_37527__$1 == null);
var state_37547__$1 = (function (){var statearr_37549 = state_37547;
(statearr_37549[(7)] = inst_37527__$1);

(statearr_37549[(9)] = inst_37528);

(statearr_37549[(8)] = inst_37526__$1);

return statearr_37549;
})();
if(cljs.core.truth_(inst_37529)){
var statearr_37550_37570 = state_37547__$1;
(statearr_37550_37570[(1)] = (8));

} else {
var statearr_37551_37571 = state_37547__$1;
(statearr_37551_37571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (1))){
var inst_37516 = cljs.core.vec.call(null,chs);
var inst_37517 = inst_37516;
var state_37547__$1 = (function (){var statearr_37552 = state_37547;
(statearr_37552[(10)] = inst_37517);

return statearr_37552;
})();
var statearr_37553_37572 = state_37547__$1;
(statearr_37553_37572[(2)] = null);

(statearr_37553_37572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (4))){
var inst_37517 = (state_37547[(10)]);
var state_37547__$1 = state_37547;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37547__$1,(7),inst_37517);
} else {
if((state_val_37548 === (6))){
var inst_37543 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37554_37573 = state_37547__$1;
(statearr_37554_37573[(2)] = inst_37543);

(statearr_37554_37573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (3))){
var inst_37545 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37547__$1,inst_37545);
} else {
if((state_val_37548 === (2))){
var inst_37517 = (state_37547[(10)]);
var inst_37519 = cljs.core.count.call(null,inst_37517);
var inst_37520 = (inst_37519 > (0));
var state_37547__$1 = state_37547;
if(cljs.core.truth_(inst_37520)){
var statearr_37556_37574 = state_37547__$1;
(statearr_37556_37574[(1)] = (4));

} else {
var statearr_37557_37575 = state_37547__$1;
(statearr_37557_37575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (11))){
var inst_37517 = (state_37547[(10)]);
var inst_37536 = (state_37547[(2)]);
var tmp37555 = inst_37517;
var inst_37517__$1 = tmp37555;
var state_37547__$1 = (function (){var statearr_37558 = state_37547;
(statearr_37558[(11)] = inst_37536);

(statearr_37558[(10)] = inst_37517__$1);

return statearr_37558;
})();
var statearr_37559_37576 = state_37547__$1;
(statearr_37559_37576[(2)] = null);

(statearr_37559_37576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (9))){
var inst_37527 = (state_37547[(7)]);
var state_37547__$1 = state_37547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37547__$1,(11),out,inst_37527);
} else {
if((state_val_37548 === (5))){
var inst_37541 = cljs.core.async.close_BANG_.call(null,out);
var state_37547__$1 = state_37547;
var statearr_37560_37577 = state_37547__$1;
(statearr_37560_37577[(2)] = inst_37541);

(statearr_37560_37577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (10))){
var inst_37539 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37561_37578 = state_37547__$1;
(statearr_37561_37578[(2)] = inst_37539);

(statearr_37561_37578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (8))){
var inst_37527 = (state_37547[(7)]);
var inst_37528 = (state_37547[(9)]);
var inst_37526 = (state_37547[(8)]);
var inst_37517 = (state_37547[(10)]);
var inst_37531 = (function (){var cs = inst_37517;
var vec__37522 = inst_37526;
var v = inst_37527;
var c = inst_37528;
return ((function (cs,vec__37522,v,c,inst_37527,inst_37528,inst_37526,inst_37517,state_val_37548,c__36156__auto___37569,out){
return (function (p1__37513_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37513_SHARP_);
});
;})(cs,vec__37522,v,c,inst_37527,inst_37528,inst_37526,inst_37517,state_val_37548,c__36156__auto___37569,out))
})();
var inst_37532 = cljs.core.filterv.call(null,inst_37531,inst_37517);
var inst_37517__$1 = inst_37532;
var state_37547__$1 = (function (){var statearr_37562 = state_37547;
(statearr_37562[(10)] = inst_37517__$1);

return statearr_37562;
})();
var statearr_37563_37579 = state_37547__$1;
(statearr_37563_37579[(2)] = null);

(statearr_37563_37579[(1)] = (2));


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
});})(c__36156__auto___37569,out))
;
return ((function (switch__36066__auto__,c__36156__auto___37569,out){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37564[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37564[(1)] = (1));

return statearr_37564;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37547){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37565){if((e37565 instanceof Object)){
var ex__36070__auto__ = e37565;
var statearr_37566_37580 = state_37547;
(statearr_37566_37580[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37581 = state_37547;
state_37547 = G__37581;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37569,out))
})();
var state__36158__auto__ = (function (){var statearr_37567 = f__36157__auto__.call(null);
(statearr_37567[(6)] = c__36156__auto___37569);

return statearr_37567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37569,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37583 = arguments.length;
switch (G__37583) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36156__auto___37628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37628,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37628,out){
return (function (state_37607){
var state_val_37608 = (state_37607[(1)]);
if((state_val_37608 === (7))){
var inst_37589 = (state_37607[(7)]);
var inst_37589__$1 = (state_37607[(2)]);
var inst_37590 = (inst_37589__$1 == null);
var inst_37591 = cljs.core.not.call(null,inst_37590);
var state_37607__$1 = (function (){var statearr_37609 = state_37607;
(statearr_37609[(7)] = inst_37589__$1);

return statearr_37609;
})();
if(inst_37591){
var statearr_37610_37629 = state_37607__$1;
(statearr_37610_37629[(1)] = (8));

} else {
var statearr_37611_37630 = state_37607__$1;
(statearr_37611_37630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (1))){
var inst_37584 = (0);
var state_37607__$1 = (function (){var statearr_37612 = state_37607;
(statearr_37612[(8)] = inst_37584);

return statearr_37612;
})();
var statearr_37613_37631 = state_37607__$1;
(statearr_37613_37631[(2)] = null);

(statearr_37613_37631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (4))){
var state_37607__$1 = state_37607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37607__$1,(7),ch);
} else {
if((state_val_37608 === (6))){
var inst_37602 = (state_37607[(2)]);
var state_37607__$1 = state_37607;
var statearr_37614_37632 = state_37607__$1;
(statearr_37614_37632[(2)] = inst_37602);

(statearr_37614_37632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (3))){
var inst_37604 = (state_37607[(2)]);
var inst_37605 = cljs.core.async.close_BANG_.call(null,out);
var state_37607__$1 = (function (){var statearr_37615 = state_37607;
(statearr_37615[(9)] = inst_37604);

return statearr_37615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37607__$1,inst_37605);
} else {
if((state_val_37608 === (2))){
var inst_37584 = (state_37607[(8)]);
var inst_37586 = (inst_37584 < n);
var state_37607__$1 = state_37607;
if(cljs.core.truth_(inst_37586)){
var statearr_37616_37633 = state_37607__$1;
(statearr_37616_37633[(1)] = (4));

} else {
var statearr_37617_37634 = state_37607__$1;
(statearr_37617_37634[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (11))){
var inst_37584 = (state_37607[(8)]);
var inst_37594 = (state_37607[(2)]);
var inst_37595 = (inst_37584 + (1));
var inst_37584__$1 = inst_37595;
var state_37607__$1 = (function (){var statearr_37618 = state_37607;
(statearr_37618[(8)] = inst_37584__$1);

(statearr_37618[(10)] = inst_37594);

return statearr_37618;
})();
var statearr_37619_37635 = state_37607__$1;
(statearr_37619_37635[(2)] = null);

(statearr_37619_37635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (9))){
var state_37607__$1 = state_37607;
var statearr_37620_37636 = state_37607__$1;
(statearr_37620_37636[(2)] = null);

(statearr_37620_37636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (5))){
var state_37607__$1 = state_37607;
var statearr_37621_37637 = state_37607__$1;
(statearr_37621_37637[(2)] = null);

(statearr_37621_37637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (10))){
var inst_37599 = (state_37607[(2)]);
var state_37607__$1 = state_37607;
var statearr_37622_37638 = state_37607__$1;
(statearr_37622_37638[(2)] = inst_37599);

(statearr_37622_37638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37608 === (8))){
var inst_37589 = (state_37607[(7)]);
var state_37607__$1 = state_37607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37607__$1,(11),out,inst_37589);
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
});})(c__36156__auto___37628,out))
;
return ((function (switch__36066__auto__,c__36156__auto___37628,out){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37623[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37623[(1)] = (1));

return statearr_37623;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37607){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37624){if((e37624 instanceof Object)){
var ex__36070__auto__ = e37624;
var statearr_37625_37639 = state_37607;
(statearr_37625_37639[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37640 = state_37607;
state_37607 = G__37640;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37628,out))
})();
var state__36158__auto__ = (function (){var statearr_37626 = f__36157__auto__.call(null);
(statearr_37626[(6)] = c__36156__auto___37628);

return statearr_37626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37628,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37642 = (function (f,ch,meta37643){
this.f = f;
this.ch = ch;
this.meta37643 = meta37643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37644,meta37643__$1){
var self__ = this;
var _37644__$1 = this;
return (new cljs.core.async.t_cljs$core$async37642(self__.f,self__.ch,meta37643__$1));
});

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37644){
var self__ = this;
var _37644__$1 = this;
return self__.meta37643;
});

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37645 = (function (f,ch,meta37643,_,fn1,meta37646){
this.f = f;
this.ch = ch;
this.meta37643 = meta37643;
this._ = _;
this.fn1 = fn1;
this.meta37646 = meta37646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37647,meta37646__$1){
var self__ = this;
var _37647__$1 = this;
return (new cljs.core.async.t_cljs$core$async37645(self__.f,self__.ch,self__.meta37643,self__._,self__.fn1,meta37646__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37647){
var self__ = this;
var _37647__$1 = this;
return self__.meta37646;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37645.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37645.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37641_SHARP_){
return f1.call(null,(((p1__37641_SHARP_ == null))?null:self__.f.call(null,p1__37641_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37645.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37643","meta37643",-1381174832,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37642","cljs.core.async/t_cljs$core$async37642",-878267863,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37646","meta37646",-718974223,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37645";

cljs.core.async.t_cljs$core$async37645.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async37645");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37645 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37645(f__$1,ch__$1,meta37643__$1,___$2,fn1__$1,meta37646){
return (new cljs.core.async.t_cljs$core$async37645(f__$1,ch__$1,meta37643__$1,___$2,fn1__$1,meta37646));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37645(self__.f,self__.ch,self__.meta37643,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30071__auto__ = ret;
if(cljs.core.truth_(and__30071__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30071__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37643","meta37643",-1381174832,null)], null);
});

cljs.core.async.t_cljs$core$async37642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37642";

cljs.core.async.t_cljs$core$async37642.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async37642");
});

cljs.core.async.__GT_t_cljs$core$async37642 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37642(f__$1,ch__$1,meta37643){
return (new cljs.core.async.t_cljs$core$async37642(f__$1,ch__$1,meta37643));
});

}

return (new cljs.core.async.t_cljs$core$async37642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37648 = (function (f,ch,meta37649){
this.f = f;
this.ch = ch;
this.meta37649 = meta37649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37650,meta37649__$1){
var self__ = this;
var _37650__$1 = this;
return (new cljs.core.async.t_cljs$core$async37648(self__.f,self__.ch,meta37649__$1));
});

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37650){
var self__ = this;
var _37650__$1 = this;
return self__.meta37649;
});

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37649","meta37649",-1413720383,null)], null);
});

cljs.core.async.t_cljs$core$async37648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37648";

cljs.core.async.t_cljs$core$async37648.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async37648");
});

cljs.core.async.__GT_t_cljs$core$async37648 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37648(f__$1,ch__$1,meta37649){
return (new cljs.core.async.t_cljs$core$async37648(f__$1,ch__$1,meta37649));
});

}

return (new cljs.core.async.t_cljs$core$async37648(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37651 = (function (p,ch,meta37652){
this.p = p;
this.ch = ch;
this.meta37652 = meta37652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37653,meta37652__$1){
var self__ = this;
var _37653__$1 = this;
return (new cljs.core.async.t_cljs$core$async37651(self__.p,self__.ch,meta37652__$1));
});

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37653){
var self__ = this;
var _37653__$1 = this;
return self__.meta37652;
});

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37652","meta37652",-1362721552,null)], null);
});

cljs.core.async.t_cljs$core$async37651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37651";

cljs.core.async.t_cljs$core$async37651.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async37651");
});

cljs.core.async.__GT_t_cljs$core$async37651 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37651(p__$1,ch__$1,meta37652){
return (new cljs.core.async.t_cljs$core$async37651(p__$1,ch__$1,meta37652));
});

}

return (new cljs.core.async.t_cljs$core$async37651(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37655 = arguments.length;
switch (G__37655) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36156__auto___37695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37695,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37695,out){
return (function (state_37676){
var state_val_37677 = (state_37676[(1)]);
if((state_val_37677 === (7))){
var inst_37672 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37678_37696 = state_37676__$1;
(statearr_37678_37696[(2)] = inst_37672);

(statearr_37678_37696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (1))){
var state_37676__$1 = state_37676;
var statearr_37679_37697 = state_37676__$1;
(statearr_37679_37697[(2)] = null);

(statearr_37679_37697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (4))){
var inst_37658 = (state_37676[(7)]);
var inst_37658__$1 = (state_37676[(2)]);
var inst_37659 = (inst_37658__$1 == null);
var state_37676__$1 = (function (){var statearr_37680 = state_37676;
(statearr_37680[(7)] = inst_37658__$1);

return statearr_37680;
})();
if(cljs.core.truth_(inst_37659)){
var statearr_37681_37698 = state_37676__$1;
(statearr_37681_37698[(1)] = (5));

} else {
var statearr_37682_37699 = state_37676__$1;
(statearr_37682_37699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (6))){
var inst_37658 = (state_37676[(7)]);
var inst_37663 = p.call(null,inst_37658);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37663)){
var statearr_37683_37700 = state_37676__$1;
(statearr_37683_37700[(1)] = (8));

} else {
var statearr_37684_37701 = state_37676__$1;
(statearr_37684_37701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (3))){
var inst_37674 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37676__$1,inst_37674);
} else {
if((state_val_37677 === (2))){
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(4),ch);
} else {
if((state_val_37677 === (11))){
var inst_37666 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37685_37702 = state_37676__$1;
(statearr_37685_37702[(2)] = inst_37666);

(statearr_37685_37702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (9))){
var state_37676__$1 = state_37676;
var statearr_37686_37703 = state_37676__$1;
(statearr_37686_37703[(2)] = null);

(statearr_37686_37703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (5))){
var inst_37661 = cljs.core.async.close_BANG_.call(null,out);
var state_37676__$1 = state_37676;
var statearr_37687_37704 = state_37676__$1;
(statearr_37687_37704[(2)] = inst_37661);

(statearr_37687_37704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (10))){
var inst_37669 = (state_37676[(2)]);
var state_37676__$1 = (function (){var statearr_37688 = state_37676;
(statearr_37688[(8)] = inst_37669);

return statearr_37688;
})();
var statearr_37689_37705 = state_37676__$1;
(statearr_37689_37705[(2)] = null);

(statearr_37689_37705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (8))){
var inst_37658 = (state_37676[(7)]);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37676__$1,(11),out,inst_37658);
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
});})(c__36156__auto___37695,out))
;
return ((function (switch__36066__auto__,c__36156__auto___37695,out){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37690 = [null,null,null,null,null,null,null,null,null];
(statearr_37690[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37690[(1)] = (1));

return statearr_37690;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37676){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37691){if((e37691 instanceof Object)){
var ex__36070__auto__ = e37691;
var statearr_37692_37706 = state_37676;
(statearr_37692_37706[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37707 = state_37676;
state_37676 = G__37707;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37695,out))
})();
var state__36158__auto__ = (function (){var statearr_37693 = f__36157__auto__.call(null);
(statearr_37693[(6)] = c__36156__auto___37695);

return statearr_37693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37695,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37709 = arguments.length;
switch (G__37709) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36156__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto__){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto__){
return (function (state_37772){
var state_val_37773 = (state_37772[(1)]);
if((state_val_37773 === (7))){
var inst_37768 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37774_37812 = state_37772__$1;
(statearr_37774_37812[(2)] = inst_37768);

(statearr_37774_37812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (20))){
var inst_37738 = (state_37772[(7)]);
var inst_37749 = (state_37772[(2)]);
var inst_37750 = cljs.core.next.call(null,inst_37738);
var inst_37724 = inst_37750;
var inst_37725 = null;
var inst_37726 = (0);
var inst_37727 = (0);
var state_37772__$1 = (function (){var statearr_37775 = state_37772;
(statearr_37775[(8)] = inst_37727);

(statearr_37775[(9)] = inst_37724);

(statearr_37775[(10)] = inst_37726);

(statearr_37775[(11)] = inst_37725);

(statearr_37775[(12)] = inst_37749);

return statearr_37775;
})();
var statearr_37776_37813 = state_37772__$1;
(statearr_37776_37813[(2)] = null);

(statearr_37776_37813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (1))){
var state_37772__$1 = state_37772;
var statearr_37777_37814 = state_37772__$1;
(statearr_37777_37814[(2)] = null);

(statearr_37777_37814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (4))){
var inst_37713 = (state_37772[(13)]);
var inst_37713__$1 = (state_37772[(2)]);
var inst_37714 = (inst_37713__$1 == null);
var state_37772__$1 = (function (){var statearr_37778 = state_37772;
(statearr_37778[(13)] = inst_37713__$1);

return statearr_37778;
})();
if(cljs.core.truth_(inst_37714)){
var statearr_37779_37815 = state_37772__$1;
(statearr_37779_37815[(1)] = (5));

} else {
var statearr_37780_37816 = state_37772__$1;
(statearr_37780_37816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (15))){
var state_37772__$1 = state_37772;
var statearr_37784_37817 = state_37772__$1;
(statearr_37784_37817[(2)] = null);

(statearr_37784_37817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (21))){
var state_37772__$1 = state_37772;
var statearr_37785_37818 = state_37772__$1;
(statearr_37785_37818[(2)] = null);

(statearr_37785_37818[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (13))){
var inst_37727 = (state_37772[(8)]);
var inst_37724 = (state_37772[(9)]);
var inst_37726 = (state_37772[(10)]);
var inst_37725 = (state_37772[(11)]);
var inst_37734 = (state_37772[(2)]);
var inst_37735 = (inst_37727 + (1));
var tmp37781 = inst_37724;
var tmp37782 = inst_37726;
var tmp37783 = inst_37725;
var inst_37724__$1 = tmp37781;
var inst_37725__$1 = tmp37783;
var inst_37726__$1 = tmp37782;
var inst_37727__$1 = inst_37735;
var state_37772__$1 = (function (){var statearr_37786 = state_37772;
(statearr_37786[(8)] = inst_37727__$1);

(statearr_37786[(14)] = inst_37734);

(statearr_37786[(9)] = inst_37724__$1);

(statearr_37786[(10)] = inst_37726__$1);

(statearr_37786[(11)] = inst_37725__$1);

return statearr_37786;
})();
var statearr_37787_37819 = state_37772__$1;
(statearr_37787_37819[(2)] = null);

(statearr_37787_37819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (22))){
var state_37772__$1 = state_37772;
var statearr_37788_37820 = state_37772__$1;
(statearr_37788_37820[(2)] = null);

(statearr_37788_37820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (6))){
var inst_37713 = (state_37772[(13)]);
var inst_37722 = f.call(null,inst_37713);
var inst_37723 = cljs.core.seq.call(null,inst_37722);
var inst_37724 = inst_37723;
var inst_37725 = null;
var inst_37726 = (0);
var inst_37727 = (0);
var state_37772__$1 = (function (){var statearr_37789 = state_37772;
(statearr_37789[(8)] = inst_37727);

(statearr_37789[(9)] = inst_37724);

(statearr_37789[(10)] = inst_37726);

(statearr_37789[(11)] = inst_37725);

return statearr_37789;
})();
var statearr_37790_37821 = state_37772__$1;
(statearr_37790_37821[(2)] = null);

(statearr_37790_37821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (17))){
var inst_37738 = (state_37772[(7)]);
var inst_37742 = cljs.core.chunk_first.call(null,inst_37738);
var inst_37743 = cljs.core.chunk_rest.call(null,inst_37738);
var inst_37744 = cljs.core.count.call(null,inst_37742);
var inst_37724 = inst_37743;
var inst_37725 = inst_37742;
var inst_37726 = inst_37744;
var inst_37727 = (0);
var state_37772__$1 = (function (){var statearr_37791 = state_37772;
(statearr_37791[(8)] = inst_37727);

(statearr_37791[(9)] = inst_37724);

(statearr_37791[(10)] = inst_37726);

(statearr_37791[(11)] = inst_37725);

return statearr_37791;
})();
var statearr_37792_37822 = state_37772__$1;
(statearr_37792_37822[(2)] = null);

(statearr_37792_37822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (3))){
var inst_37770 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37772__$1,inst_37770);
} else {
if((state_val_37773 === (12))){
var inst_37758 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37793_37823 = state_37772__$1;
(statearr_37793_37823[(2)] = inst_37758);

(statearr_37793_37823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (2))){
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37772__$1,(4),in$);
} else {
if((state_val_37773 === (23))){
var inst_37766 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37794_37824 = state_37772__$1;
(statearr_37794_37824[(2)] = inst_37766);

(statearr_37794_37824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (19))){
var inst_37753 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37795_37825 = state_37772__$1;
(statearr_37795_37825[(2)] = inst_37753);

(statearr_37795_37825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (11))){
var inst_37738 = (state_37772[(7)]);
var inst_37724 = (state_37772[(9)]);
var inst_37738__$1 = cljs.core.seq.call(null,inst_37724);
var state_37772__$1 = (function (){var statearr_37796 = state_37772;
(statearr_37796[(7)] = inst_37738__$1);

return statearr_37796;
})();
if(inst_37738__$1){
var statearr_37797_37826 = state_37772__$1;
(statearr_37797_37826[(1)] = (14));

} else {
var statearr_37798_37827 = state_37772__$1;
(statearr_37798_37827[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (9))){
var inst_37760 = (state_37772[(2)]);
var inst_37761 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37772__$1 = (function (){var statearr_37799 = state_37772;
(statearr_37799[(15)] = inst_37760);

return statearr_37799;
})();
if(cljs.core.truth_(inst_37761)){
var statearr_37800_37828 = state_37772__$1;
(statearr_37800_37828[(1)] = (21));

} else {
var statearr_37801_37829 = state_37772__$1;
(statearr_37801_37829[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (5))){
var inst_37716 = cljs.core.async.close_BANG_.call(null,out);
var state_37772__$1 = state_37772;
var statearr_37802_37830 = state_37772__$1;
(statearr_37802_37830[(2)] = inst_37716);

(statearr_37802_37830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (14))){
var inst_37738 = (state_37772[(7)]);
var inst_37740 = cljs.core.chunked_seq_QMARK_.call(null,inst_37738);
var state_37772__$1 = state_37772;
if(inst_37740){
var statearr_37803_37831 = state_37772__$1;
(statearr_37803_37831[(1)] = (17));

} else {
var statearr_37804_37832 = state_37772__$1;
(statearr_37804_37832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (16))){
var inst_37756 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37805_37833 = state_37772__$1;
(statearr_37805_37833[(2)] = inst_37756);

(statearr_37805_37833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (10))){
var inst_37727 = (state_37772[(8)]);
var inst_37725 = (state_37772[(11)]);
var inst_37732 = cljs.core._nth.call(null,inst_37725,inst_37727);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37772__$1,(13),out,inst_37732);
} else {
if((state_val_37773 === (18))){
var inst_37738 = (state_37772[(7)]);
var inst_37747 = cljs.core.first.call(null,inst_37738);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37772__$1,(20),out,inst_37747);
} else {
if((state_val_37773 === (8))){
var inst_37727 = (state_37772[(8)]);
var inst_37726 = (state_37772[(10)]);
var inst_37729 = (inst_37727 < inst_37726);
var inst_37730 = inst_37729;
var state_37772__$1 = state_37772;
if(cljs.core.truth_(inst_37730)){
var statearr_37806_37834 = state_37772__$1;
(statearr_37806_37834[(1)] = (10));

} else {
var statearr_37807_37835 = state_37772__$1;
(statearr_37807_37835[(1)] = (11));

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
});})(c__36156__auto__))
;
return ((function (switch__36066__auto__,c__36156__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____0 = (function (){
var statearr_37808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37808[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__);

(statearr_37808[(1)] = (1));

return statearr_37808;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____1 = (function (state_37772){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37809){if((e37809 instanceof Object)){
var ex__36070__auto__ = e37809;
var statearr_37810_37836 = state_37772;
(statearr_37810_37836[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37837 = state_37772;
state_37772 = G__37837;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__ = function(state_37772){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____1.call(this,state_37772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36067__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto__))
})();
var state__36158__auto__ = (function (){var statearr_37811 = f__36157__auto__.call(null);
(statearr_37811[(6)] = c__36156__auto__);

return statearr_37811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto__))
);

return c__36156__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37839 = arguments.length;
switch (G__37839) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37842 = arguments.length;
switch (G__37842) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37845 = arguments.length;
switch (G__37845) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36156__auto___37892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37892,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37892,out){
return (function (state_37869){
var state_val_37870 = (state_37869[(1)]);
if((state_val_37870 === (7))){
var inst_37864 = (state_37869[(2)]);
var state_37869__$1 = state_37869;
var statearr_37871_37893 = state_37869__$1;
(statearr_37871_37893[(2)] = inst_37864);

(statearr_37871_37893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (1))){
var inst_37846 = null;
var state_37869__$1 = (function (){var statearr_37872 = state_37869;
(statearr_37872[(7)] = inst_37846);

return statearr_37872;
})();
var statearr_37873_37894 = state_37869__$1;
(statearr_37873_37894[(2)] = null);

(statearr_37873_37894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (4))){
var inst_37849 = (state_37869[(8)]);
var inst_37849__$1 = (state_37869[(2)]);
var inst_37850 = (inst_37849__$1 == null);
var inst_37851 = cljs.core.not.call(null,inst_37850);
var state_37869__$1 = (function (){var statearr_37874 = state_37869;
(statearr_37874[(8)] = inst_37849__$1);

return statearr_37874;
})();
if(inst_37851){
var statearr_37875_37895 = state_37869__$1;
(statearr_37875_37895[(1)] = (5));

} else {
var statearr_37876_37896 = state_37869__$1;
(statearr_37876_37896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (6))){
var state_37869__$1 = state_37869;
var statearr_37877_37897 = state_37869__$1;
(statearr_37877_37897[(2)] = null);

(statearr_37877_37897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (3))){
var inst_37866 = (state_37869[(2)]);
var inst_37867 = cljs.core.async.close_BANG_.call(null,out);
var state_37869__$1 = (function (){var statearr_37878 = state_37869;
(statearr_37878[(9)] = inst_37866);

return statearr_37878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37869__$1,inst_37867);
} else {
if((state_val_37870 === (2))){
var state_37869__$1 = state_37869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37869__$1,(4),ch);
} else {
if((state_val_37870 === (11))){
var inst_37849 = (state_37869[(8)]);
var inst_37858 = (state_37869[(2)]);
var inst_37846 = inst_37849;
var state_37869__$1 = (function (){var statearr_37879 = state_37869;
(statearr_37879[(10)] = inst_37858);

(statearr_37879[(7)] = inst_37846);

return statearr_37879;
})();
var statearr_37880_37898 = state_37869__$1;
(statearr_37880_37898[(2)] = null);

(statearr_37880_37898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (9))){
var inst_37849 = (state_37869[(8)]);
var state_37869__$1 = state_37869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37869__$1,(11),out,inst_37849);
} else {
if((state_val_37870 === (5))){
var inst_37849 = (state_37869[(8)]);
var inst_37846 = (state_37869[(7)]);
var inst_37853 = cljs.core._EQ_.call(null,inst_37849,inst_37846);
var state_37869__$1 = state_37869;
if(inst_37853){
var statearr_37882_37899 = state_37869__$1;
(statearr_37882_37899[(1)] = (8));

} else {
var statearr_37883_37900 = state_37869__$1;
(statearr_37883_37900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (10))){
var inst_37861 = (state_37869[(2)]);
var state_37869__$1 = state_37869;
var statearr_37884_37901 = state_37869__$1;
(statearr_37884_37901[(2)] = inst_37861);

(statearr_37884_37901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (8))){
var inst_37846 = (state_37869[(7)]);
var tmp37881 = inst_37846;
var inst_37846__$1 = tmp37881;
var state_37869__$1 = (function (){var statearr_37885 = state_37869;
(statearr_37885[(7)] = inst_37846__$1);

return statearr_37885;
})();
var statearr_37886_37902 = state_37869__$1;
(statearr_37886_37902[(2)] = null);

(statearr_37886_37902[(1)] = (2));


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
});})(c__36156__auto___37892,out))
;
return ((function (switch__36066__auto__,c__36156__auto___37892,out){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37887[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37887[(1)] = (1));

return statearr_37887;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37869){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37888){if((e37888 instanceof Object)){
var ex__36070__auto__ = e37888;
var statearr_37889_37903 = state_37869;
(statearr_37889_37903[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37904 = state_37869;
state_37869 = G__37904;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37892,out))
})();
var state__36158__auto__ = (function (){var statearr_37890 = f__36157__auto__.call(null);
(statearr_37890[(6)] = c__36156__auto___37892);

return statearr_37890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37892,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37906 = arguments.length;
switch (G__37906) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36156__auto___37972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___37972,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___37972,out){
return (function (state_37944){
var state_val_37945 = (state_37944[(1)]);
if((state_val_37945 === (7))){
var inst_37940 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
var statearr_37946_37973 = state_37944__$1;
(statearr_37946_37973[(2)] = inst_37940);

(statearr_37946_37973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (1))){
var inst_37907 = (new Array(n));
var inst_37908 = inst_37907;
var inst_37909 = (0);
var state_37944__$1 = (function (){var statearr_37947 = state_37944;
(statearr_37947[(7)] = inst_37909);

(statearr_37947[(8)] = inst_37908);

return statearr_37947;
})();
var statearr_37948_37974 = state_37944__$1;
(statearr_37948_37974[(2)] = null);

(statearr_37948_37974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (4))){
var inst_37912 = (state_37944[(9)]);
var inst_37912__$1 = (state_37944[(2)]);
var inst_37913 = (inst_37912__$1 == null);
var inst_37914 = cljs.core.not.call(null,inst_37913);
var state_37944__$1 = (function (){var statearr_37949 = state_37944;
(statearr_37949[(9)] = inst_37912__$1);

return statearr_37949;
})();
if(inst_37914){
var statearr_37950_37975 = state_37944__$1;
(statearr_37950_37975[(1)] = (5));

} else {
var statearr_37951_37976 = state_37944__$1;
(statearr_37951_37976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (15))){
var inst_37934 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
var statearr_37952_37977 = state_37944__$1;
(statearr_37952_37977[(2)] = inst_37934);

(statearr_37952_37977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (13))){
var state_37944__$1 = state_37944;
var statearr_37953_37978 = state_37944__$1;
(statearr_37953_37978[(2)] = null);

(statearr_37953_37978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (6))){
var inst_37909 = (state_37944[(7)]);
var inst_37930 = (inst_37909 > (0));
var state_37944__$1 = state_37944;
if(cljs.core.truth_(inst_37930)){
var statearr_37954_37979 = state_37944__$1;
(statearr_37954_37979[(1)] = (12));

} else {
var statearr_37955_37980 = state_37944__$1;
(statearr_37955_37980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (3))){
var inst_37942 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37944__$1,inst_37942);
} else {
if((state_val_37945 === (12))){
var inst_37908 = (state_37944[(8)]);
var inst_37932 = cljs.core.vec.call(null,inst_37908);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37944__$1,(15),out,inst_37932);
} else {
if((state_val_37945 === (2))){
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37944__$1,(4),ch);
} else {
if((state_val_37945 === (11))){
var inst_37924 = (state_37944[(2)]);
var inst_37925 = (new Array(n));
var inst_37908 = inst_37925;
var inst_37909 = (0);
var state_37944__$1 = (function (){var statearr_37956 = state_37944;
(statearr_37956[(7)] = inst_37909);

(statearr_37956[(8)] = inst_37908);

(statearr_37956[(10)] = inst_37924);

return statearr_37956;
})();
var statearr_37957_37981 = state_37944__$1;
(statearr_37957_37981[(2)] = null);

(statearr_37957_37981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (9))){
var inst_37908 = (state_37944[(8)]);
var inst_37922 = cljs.core.vec.call(null,inst_37908);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37944__$1,(11),out,inst_37922);
} else {
if((state_val_37945 === (5))){
var inst_37909 = (state_37944[(7)]);
var inst_37912 = (state_37944[(9)]);
var inst_37908 = (state_37944[(8)]);
var inst_37917 = (state_37944[(11)]);
var inst_37916 = (inst_37908[inst_37909] = inst_37912);
var inst_37917__$1 = (inst_37909 + (1));
var inst_37918 = (inst_37917__$1 < n);
var state_37944__$1 = (function (){var statearr_37958 = state_37944;
(statearr_37958[(12)] = inst_37916);

(statearr_37958[(11)] = inst_37917__$1);

return statearr_37958;
})();
if(cljs.core.truth_(inst_37918)){
var statearr_37959_37982 = state_37944__$1;
(statearr_37959_37982[(1)] = (8));

} else {
var statearr_37960_37983 = state_37944__$1;
(statearr_37960_37983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (14))){
var inst_37937 = (state_37944[(2)]);
var inst_37938 = cljs.core.async.close_BANG_.call(null,out);
var state_37944__$1 = (function (){var statearr_37962 = state_37944;
(statearr_37962[(13)] = inst_37937);

return statearr_37962;
})();
var statearr_37963_37984 = state_37944__$1;
(statearr_37963_37984[(2)] = inst_37938);

(statearr_37963_37984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (10))){
var inst_37928 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
var statearr_37964_37985 = state_37944__$1;
(statearr_37964_37985[(2)] = inst_37928);

(statearr_37964_37985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (8))){
var inst_37908 = (state_37944[(8)]);
var inst_37917 = (state_37944[(11)]);
var tmp37961 = inst_37908;
var inst_37908__$1 = tmp37961;
var inst_37909 = inst_37917;
var state_37944__$1 = (function (){var statearr_37965 = state_37944;
(statearr_37965[(7)] = inst_37909);

(statearr_37965[(8)] = inst_37908__$1);

return statearr_37965;
})();
var statearr_37966_37986 = state_37944__$1;
(statearr_37966_37986[(2)] = null);

(statearr_37966_37986[(1)] = (2));


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
});})(c__36156__auto___37972,out))
;
return ((function (switch__36066__auto__,c__36156__auto___37972,out){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_37967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37967[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_37967[(1)] = (1));

return statearr_37967;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_37944){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_37944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e37968){if((e37968 instanceof Object)){
var ex__36070__auto__ = e37968;
var statearr_37969_37987 = state_37944;
(statearr_37969_37987[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37988 = state_37944;
state_37944 = G__37988;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_37944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_37944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___37972,out))
})();
var state__36158__auto__ = (function (){var statearr_37970 = f__36157__auto__.call(null);
(statearr_37970[(6)] = c__36156__auto___37972);

return statearr_37970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___37972,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37990 = arguments.length;
switch (G__37990) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36156__auto___38060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36156__auto___38060,out){
return (function (){
var f__36157__auto__ = (function (){var switch__36066__auto__ = ((function (c__36156__auto___38060,out){
return (function (state_38032){
var state_val_38033 = (state_38032[(1)]);
if((state_val_38033 === (7))){
var inst_38028 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38034_38061 = state_38032__$1;
(statearr_38034_38061[(2)] = inst_38028);

(statearr_38034_38061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (1))){
var inst_37991 = [];
var inst_37992 = inst_37991;
var inst_37993 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38032__$1 = (function (){var statearr_38035 = state_38032;
(statearr_38035[(7)] = inst_37992);

(statearr_38035[(8)] = inst_37993);

return statearr_38035;
})();
var statearr_38036_38062 = state_38032__$1;
(statearr_38036_38062[(2)] = null);

(statearr_38036_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (4))){
var inst_37996 = (state_38032[(9)]);
var inst_37996__$1 = (state_38032[(2)]);
var inst_37997 = (inst_37996__$1 == null);
var inst_37998 = cljs.core.not.call(null,inst_37997);
var state_38032__$1 = (function (){var statearr_38037 = state_38032;
(statearr_38037[(9)] = inst_37996__$1);

return statearr_38037;
})();
if(inst_37998){
var statearr_38038_38063 = state_38032__$1;
(statearr_38038_38063[(1)] = (5));

} else {
var statearr_38039_38064 = state_38032__$1;
(statearr_38039_38064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (15))){
var inst_38022 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38040_38065 = state_38032__$1;
(statearr_38040_38065[(2)] = inst_38022);

(statearr_38040_38065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (13))){
var state_38032__$1 = state_38032;
var statearr_38041_38066 = state_38032__$1;
(statearr_38041_38066[(2)] = null);

(statearr_38041_38066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (6))){
var inst_37992 = (state_38032[(7)]);
var inst_38017 = inst_37992.length;
var inst_38018 = (inst_38017 > (0));
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_38018)){
var statearr_38042_38067 = state_38032__$1;
(statearr_38042_38067[(1)] = (12));

} else {
var statearr_38043_38068 = state_38032__$1;
(statearr_38043_38068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (3))){
var inst_38030 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38032__$1,inst_38030);
} else {
if((state_val_38033 === (12))){
var inst_37992 = (state_38032[(7)]);
var inst_38020 = cljs.core.vec.call(null,inst_37992);
var state_38032__$1 = state_38032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38032__$1,(15),out,inst_38020);
} else {
if((state_val_38033 === (2))){
var state_38032__$1 = state_38032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38032__$1,(4),ch);
} else {
if((state_val_38033 === (11))){
var inst_38000 = (state_38032[(10)]);
var inst_37996 = (state_38032[(9)]);
var inst_38010 = (state_38032[(2)]);
var inst_38011 = [];
var inst_38012 = inst_38011.push(inst_37996);
var inst_37992 = inst_38011;
var inst_37993 = inst_38000;
var state_38032__$1 = (function (){var statearr_38044 = state_38032;
(statearr_38044[(11)] = inst_38010);

(statearr_38044[(12)] = inst_38012);

(statearr_38044[(7)] = inst_37992);

(statearr_38044[(8)] = inst_37993);

return statearr_38044;
})();
var statearr_38045_38069 = state_38032__$1;
(statearr_38045_38069[(2)] = null);

(statearr_38045_38069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (9))){
var inst_37992 = (state_38032[(7)]);
var inst_38008 = cljs.core.vec.call(null,inst_37992);
var state_38032__$1 = state_38032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38032__$1,(11),out,inst_38008);
} else {
if((state_val_38033 === (5))){
var inst_38000 = (state_38032[(10)]);
var inst_37996 = (state_38032[(9)]);
var inst_37993 = (state_38032[(8)]);
var inst_38000__$1 = f.call(null,inst_37996);
var inst_38001 = cljs.core._EQ_.call(null,inst_38000__$1,inst_37993);
var inst_38002 = cljs.core.keyword_identical_QMARK_.call(null,inst_37993,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38003 = (inst_38001) || (inst_38002);
var state_38032__$1 = (function (){var statearr_38046 = state_38032;
(statearr_38046[(10)] = inst_38000__$1);

return statearr_38046;
})();
if(cljs.core.truth_(inst_38003)){
var statearr_38047_38070 = state_38032__$1;
(statearr_38047_38070[(1)] = (8));

} else {
var statearr_38048_38071 = state_38032__$1;
(statearr_38048_38071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (14))){
var inst_38025 = (state_38032[(2)]);
var inst_38026 = cljs.core.async.close_BANG_.call(null,out);
var state_38032__$1 = (function (){var statearr_38050 = state_38032;
(statearr_38050[(13)] = inst_38025);

return statearr_38050;
})();
var statearr_38051_38072 = state_38032__$1;
(statearr_38051_38072[(2)] = inst_38026);

(statearr_38051_38072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (10))){
var inst_38015 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38052_38073 = state_38032__$1;
(statearr_38052_38073[(2)] = inst_38015);

(statearr_38052_38073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (8))){
var inst_38000 = (state_38032[(10)]);
var inst_37996 = (state_38032[(9)]);
var inst_37992 = (state_38032[(7)]);
var inst_38005 = inst_37992.push(inst_37996);
var tmp38049 = inst_37992;
var inst_37992__$1 = tmp38049;
var inst_37993 = inst_38000;
var state_38032__$1 = (function (){var statearr_38053 = state_38032;
(statearr_38053[(7)] = inst_37992__$1);

(statearr_38053[(8)] = inst_37993);

(statearr_38053[(14)] = inst_38005);

return statearr_38053;
})();
var statearr_38054_38074 = state_38032__$1;
(statearr_38054_38074[(2)] = null);

(statearr_38054_38074[(1)] = (2));


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
});})(c__36156__auto___38060,out))
;
return ((function (switch__36066__auto__,c__36156__auto___38060,out){
return (function() {
var cljs$core$async$state_machine__36067__auto__ = null;
var cljs$core$async$state_machine__36067__auto____0 = (function (){
var statearr_38055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38055[(0)] = cljs$core$async$state_machine__36067__auto__);

(statearr_38055[(1)] = (1));

return statearr_38055;
});
var cljs$core$async$state_machine__36067__auto____1 = (function (state_38032){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__.call(null,state_38032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e38056){if((e38056 instanceof Object)){
var ex__36070__auto__ = e38056;
var statearr_38057_38075 = state_38032;
(statearr_38057_38075[(5)] = ex__36070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38076 = state_38032;
state_38032 = G__38076;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
cljs$core$async$state_machine__36067__auto__ = function(state_38032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36067__auto____1.call(this,state_38032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36067__auto____0;
cljs$core$async$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36067__auto____1;
return cljs$core$async$state_machine__36067__auto__;
})()
;})(switch__36066__auto__,c__36156__auto___38060,out))
})();
var state__36158__auto__ = (function (){var statearr_38058 = f__36157__auto__.call(null);
(statearr_38058[(6)] = c__36156__auto___38060);

return statearr_38058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36158__auto__);
});})(c__36156__auto___38060,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515638888777
