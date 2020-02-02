goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__68650 = arguments.length;
switch (G__68650) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68654 = (function (f,blockable,meta68655){
this.f = f;
this.blockable = blockable;
this.meta68655 = meta68655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68656,meta68655__$1){
var self__ = this;
var _68656__$1 = this;
return (new cljs.core.async.t_cljs$core$async68654(self__.f,self__.blockable,meta68655__$1));
}));

(cljs.core.async.t_cljs$core$async68654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68656){
var self__ = this;
var _68656__$1 = this;
return self__.meta68655;
}));

(cljs.core.async.t_cljs$core$async68654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async68654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async68654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68655","meta68655",1881587138,null)], null);
}));

(cljs.core.async.t_cljs$core$async68654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68654");

(cljs.core.async.t_cljs$core$async68654.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async68654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68654.
 */
cljs.core.async.__GT_t_cljs$core$async68654 = (function cljs$core$async$__GT_t_cljs$core$async68654(f__$1,blockable__$1,meta68655){
return (new cljs.core.async.t_cljs$core$async68654(f__$1,blockable__$1,meta68655));
});

}

return (new cljs.core.async.t_cljs$core$async68654(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__68680 = arguments.length;
switch (G__68680) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__68684 = arguments.length;
switch (G__68684) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__68686 = arguments.length;
switch (G__68686) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_70129 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_70129) : fn1.call(null,val_70129));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_70129) : fn1.call(null,val_70129));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__68688 = arguments.length;
switch (G__68688) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___70131 = n;
var x_70133 = (0);
while(true){
if((x_70133 < n__4666__auto___70131)){
(a[x_70133] = x_70133);

var G__70134 = (x_70133 + (1));
x_70133 = G__70134;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68689 = (function (flag,meta68690){
this.flag = flag;
this.meta68690 = meta68690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68691,meta68690__$1){
var self__ = this;
var _68691__$1 = this;
return (new cljs.core.async.t_cljs$core$async68689(self__.flag,meta68690__$1));
}));

(cljs.core.async.t_cljs$core$async68689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68691){
var self__ = this;
var _68691__$1 = this;
return self__.meta68690;
}));

(cljs.core.async.t_cljs$core$async68689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async68689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async68689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68690","meta68690",1119720432,null)], null);
}));

(cljs.core.async.t_cljs$core$async68689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68689");

(cljs.core.async.t_cljs$core$async68689.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async68689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68689.
 */
cljs.core.async.__GT_t_cljs$core$async68689 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async68689(flag__$1,meta68690){
return (new cljs.core.async.t_cljs$core$async68689(flag__$1,meta68690));
});

}

return (new cljs.core.async.t_cljs$core$async68689(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68692 = (function (flag,cb,meta68693){
this.flag = flag;
this.cb = cb;
this.meta68693 = meta68693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68694,meta68693__$1){
var self__ = this;
var _68694__$1 = this;
return (new cljs.core.async.t_cljs$core$async68692(self__.flag,self__.cb,meta68693__$1));
}));

(cljs.core.async.t_cljs$core$async68692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68694){
var self__ = this;
var _68694__$1 = this;
return self__.meta68693;
}));

(cljs.core.async.t_cljs$core$async68692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async68692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async68692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68693","meta68693",506528103,null)], null);
}));

(cljs.core.async.t_cljs$core$async68692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68692");

(cljs.core.async.t_cljs$core$async68692.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async68692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68692.
 */
cljs.core.async.__GT_t_cljs$core$async68692 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async68692(flag__$1,cb__$1,meta68693){
return (new cljs.core.async.t_cljs$core$async68692(flag__$1,cb__$1,meta68693));
});

}

return (new cljs.core.async.t_cljs$core$async68692(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68695_SHARP_){
var G__68697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68695_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__68697) : fret.call(null,G__68697));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68696_SHARP_){
var G__68698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68696_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__68698) : fret.call(null,G__68698));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__70150 = (i + (1));
i = G__70150;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___70153 = arguments.length;
var i__4790__auto___70154 = (0);
while(true){
if((i__4790__auto___70154 < len__4789__auto___70153)){
args__4795__auto__.push((arguments[i__4790__auto___70154]));

var G__70156 = (i__4790__auto___70154 + (1));
i__4790__auto___70154 = G__70156;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68701){
var map__68702 = p__68701;
var map__68702__$1 = (((((!((map__68702 == null))))?(((((map__68702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68702):map__68702);
var opts = map__68702__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68699){
var G__68700 = cljs.core.first(seq68699);
var seq68699__$1 = cljs.core.next(seq68699);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68700,seq68699__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__68705 = arguments.length;
switch (G__68705) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47540__auto___70168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_68729){
var state_val_68730 = (state_68729[(1)]);
if((state_val_68730 === (7))){
var inst_68725 = (state_68729[(2)]);
var state_68729__$1 = state_68729;
var statearr_68731_70171 = state_68729__$1;
(statearr_68731_70171[(2)] = inst_68725);

(statearr_68731_70171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (1))){
var state_68729__$1 = state_68729;
var statearr_68732_70174 = state_68729__$1;
(statearr_68732_70174[(2)] = null);

(statearr_68732_70174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (4))){
var inst_68708 = (state_68729[(7)]);
var inst_68708__$1 = (state_68729[(2)]);
var inst_68709 = (inst_68708__$1 == null);
var state_68729__$1 = (function (){var statearr_68733 = state_68729;
(statearr_68733[(7)] = inst_68708__$1);

return statearr_68733;
})();
if(cljs.core.truth_(inst_68709)){
var statearr_68734_70176 = state_68729__$1;
(statearr_68734_70176[(1)] = (5));

} else {
var statearr_68735_70177 = state_68729__$1;
(statearr_68735_70177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (13))){
var state_68729__$1 = state_68729;
var statearr_68736_70179 = state_68729__$1;
(statearr_68736_70179[(2)] = null);

(statearr_68736_70179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (6))){
var inst_68708 = (state_68729[(7)]);
var state_68729__$1 = state_68729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68729__$1,(11),to,inst_68708);
} else {
if((state_val_68730 === (3))){
var inst_68727 = (state_68729[(2)]);
var state_68729__$1 = state_68729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68729__$1,inst_68727);
} else {
if((state_val_68730 === (12))){
var state_68729__$1 = state_68729;
var statearr_68737_70180 = state_68729__$1;
(statearr_68737_70180[(2)] = null);

(statearr_68737_70180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (2))){
var state_68729__$1 = state_68729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68729__$1,(4),from);
} else {
if((state_val_68730 === (11))){
var inst_68718 = (state_68729[(2)]);
var state_68729__$1 = state_68729;
if(cljs.core.truth_(inst_68718)){
var statearr_68738_70183 = state_68729__$1;
(statearr_68738_70183[(1)] = (12));

} else {
var statearr_68739_70184 = state_68729__$1;
(statearr_68739_70184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (9))){
var state_68729__$1 = state_68729;
var statearr_68740_70185 = state_68729__$1;
(statearr_68740_70185[(2)] = null);

(statearr_68740_70185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (5))){
var state_68729__$1 = state_68729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68741_70186 = state_68729__$1;
(statearr_68741_70186[(1)] = (8));

} else {
var statearr_68742_70187 = state_68729__$1;
(statearr_68742_70187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (14))){
var inst_68723 = (state_68729[(2)]);
var state_68729__$1 = state_68729;
var statearr_68743_70188 = state_68729__$1;
(statearr_68743_70188[(2)] = inst_68723);

(statearr_68743_70188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (10))){
var inst_68715 = (state_68729[(2)]);
var state_68729__$1 = state_68729;
var statearr_68744_70189 = state_68729__$1;
(statearr_68744_70189[(2)] = inst_68715);

(statearr_68744_70189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68730 === (8))){
var inst_68712 = cljs.core.async.close_BANG_(to);
var state_68729__$1 = state_68729;
var statearr_68745_70190 = state_68729__$1;
(statearr_68745_70190[(2)] = inst_68712);

(statearr_68745_70190[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_68746 = [null,null,null,null,null,null,null,null];
(statearr_68746[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_68746[(1)] = (1));

return statearr_68746;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_68729){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68729);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68747){if((e68747 instanceof Object)){
var ex__47443__auto__ = e68747;
var statearr_68748_70192 = state_68729;
(statearr_68748_70192[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70193 = state_68729;
state_68729 = G__70193;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_68729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_68729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_68749 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68749[(6)] = c__47540__auto___70168);

return statearr_68749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__68750){
var vec__68751 = p__68750;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68751,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68751,(1),null);
var job = vec__68751;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47540__auto___70198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_68758){
var state_val_68759 = (state_68758[(1)]);
if((state_val_68759 === (1))){
var state_68758__$1 = state_68758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68758__$1,(2),res,v);
} else {
if((state_val_68759 === (2))){
var inst_68755 = (state_68758[(2)]);
var inst_68756 = cljs.core.async.close_BANG_(res);
var state_68758__$1 = (function (){var statearr_68760 = state_68758;
(statearr_68760[(7)] = inst_68755);

return statearr_68760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68758__$1,inst_68756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0 = (function (){
var statearr_68761 = [null,null,null,null,null,null,null,null];
(statearr_68761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__);

(statearr_68761[(1)] = (1));

return statearr_68761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1 = (function (state_68758){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68758);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68762){if((e68762 instanceof Object)){
var ex__47443__auto__ = e68762;
var statearr_68763_70205 = state_68758;
(statearr_68763_70205[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70206 = state_68758;
state_68758 = G__70206;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = function(state_68758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1.call(this,state_68758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_68764 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68764[(6)] = c__47540__auto___70198);

return statearr_68764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__68765){
var vec__68766 = p__68765;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68766,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68766,(1),null);
var job = vec__68766;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___70210 = n;
var __70211 = (0);
while(true){
if((__70211 < n__4666__auto___70210)){
var G__68769_70215 = type;
var G__68769_70216__$1 = (((G__68769_70215 instanceof cljs.core.Keyword))?G__68769_70215.fqn:null);
switch (G__68769_70216__$1) {
case "compute":
var c__47540__auto___70218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__70211,c__47540__auto___70218,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async){
return (function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = ((function (__70211,c__47540__auto___70218,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async){
return (function (state_68782){
var state_val_68783 = (state_68782[(1)]);
if((state_val_68783 === (1))){
var state_68782__$1 = state_68782;
var statearr_68784_70219 = state_68782__$1;
(statearr_68784_70219[(2)] = null);

(statearr_68784_70219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68783 === (2))){
var state_68782__$1 = state_68782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68782__$1,(4),jobs);
} else {
if((state_val_68783 === (3))){
var inst_68780 = (state_68782[(2)]);
var state_68782__$1 = state_68782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68782__$1,inst_68780);
} else {
if((state_val_68783 === (4))){
var inst_68772 = (state_68782[(2)]);
var inst_68773 = process(inst_68772);
var state_68782__$1 = state_68782;
if(cljs.core.truth_(inst_68773)){
var statearr_68785_70222 = state_68782__$1;
(statearr_68785_70222[(1)] = (5));

} else {
var statearr_68786_70223 = state_68782__$1;
(statearr_68786_70223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68783 === (5))){
var state_68782__$1 = state_68782;
var statearr_68787_70224 = state_68782__$1;
(statearr_68787_70224[(2)] = null);

(statearr_68787_70224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68783 === (6))){
var state_68782__$1 = state_68782;
var statearr_68788_70225 = state_68782__$1;
(statearr_68788_70225[(2)] = null);

(statearr_68788_70225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68783 === (7))){
var inst_68778 = (state_68782[(2)]);
var state_68782__$1 = state_68782;
var statearr_68789_70226 = state_68782__$1;
(statearr_68789_70226[(2)] = inst_68778);

(statearr_68789_70226[(1)] = (3));


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
});})(__70211,c__47540__auto___70218,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async))
;
return ((function (__70211,switch__47439__auto__,c__47540__auto___70218,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0 = (function (){
var statearr_68790 = [null,null,null,null,null,null,null];
(statearr_68790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__);

(statearr_68790[(1)] = (1));

return statearr_68790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1 = (function (state_68782){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68782);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68791){if((e68791 instanceof Object)){
var ex__47443__auto__ = e68791;
var statearr_68792_70230 = state_68782;
(statearr_68792_70230[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70234 = state_68782;
state_68782 = G__70234;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = function(state_68782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1.call(this,state_68782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__;
})()
;})(__70211,switch__47439__auto__,c__47540__auto___70218,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async))
})();
var state__47542__auto__ = (function (){var statearr_68793 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68793[(6)] = c__47540__auto___70218);

return statearr_68793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
});})(__70211,c__47540__auto___70218,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async))
);


break;
case "async":
var c__47540__auto___70239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__70211,c__47540__auto___70239,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async){
return (function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = ((function (__70211,c__47540__auto___70239,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async){
return (function (state_68806){
var state_val_68807 = (state_68806[(1)]);
if((state_val_68807 === (1))){
var state_68806__$1 = state_68806;
var statearr_68808_70243 = state_68806__$1;
(statearr_68808_70243[(2)] = null);

(statearr_68808_70243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68807 === (2))){
var state_68806__$1 = state_68806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68806__$1,(4),jobs);
} else {
if((state_val_68807 === (3))){
var inst_68804 = (state_68806[(2)]);
var state_68806__$1 = state_68806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68806__$1,inst_68804);
} else {
if((state_val_68807 === (4))){
var inst_68796 = (state_68806[(2)]);
var inst_68797 = async(inst_68796);
var state_68806__$1 = state_68806;
if(cljs.core.truth_(inst_68797)){
var statearr_68809_70250 = state_68806__$1;
(statearr_68809_70250[(1)] = (5));

} else {
var statearr_68810_70251 = state_68806__$1;
(statearr_68810_70251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68807 === (5))){
var state_68806__$1 = state_68806;
var statearr_68811_70252 = state_68806__$1;
(statearr_68811_70252[(2)] = null);

(statearr_68811_70252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68807 === (6))){
var state_68806__$1 = state_68806;
var statearr_68812_70253 = state_68806__$1;
(statearr_68812_70253[(2)] = null);

(statearr_68812_70253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68807 === (7))){
var inst_68802 = (state_68806[(2)]);
var state_68806__$1 = state_68806;
var statearr_68813_70257 = state_68806__$1;
(statearr_68813_70257[(2)] = inst_68802);

(statearr_68813_70257[(1)] = (3));


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
});})(__70211,c__47540__auto___70239,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async))
;
return ((function (__70211,switch__47439__auto__,c__47540__auto___70239,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0 = (function (){
var statearr_68814 = [null,null,null,null,null,null,null];
(statearr_68814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__);

(statearr_68814[(1)] = (1));

return statearr_68814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1 = (function (state_68806){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68806);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68815){if((e68815 instanceof Object)){
var ex__47443__auto__ = e68815;
var statearr_68816_70265 = state_68806;
(statearr_68816_70265[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70269 = state_68806;
state_68806 = G__70269;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = function(state_68806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1.call(this,state_68806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__;
})()
;})(__70211,switch__47439__auto__,c__47540__auto___70239,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async))
})();
var state__47542__auto__ = (function (){var statearr_68817 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68817[(6)] = c__47540__auto___70239);

return statearr_68817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
});})(__70211,c__47540__auto___70239,G__68769_70215,G__68769_70216__$1,n__4666__auto___70210,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68769_70216__$1)].join('')));

}

var G__70270 = (__70211 + (1));
__70211 = G__70270;
continue;
} else {
}
break;
}

var c__47540__auto___70271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_68839){
var state_val_68840 = (state_68839[(1)]);
if((state_val_68840 === (7))){
var inst_68835 = (state_68839[(2)]);
var state_68839__$1 = state_68839;
var statearr_68841_70278 = state_68839__$1;
(statearr_68841_70278[(2)] = inst_68835);

(statearr_68841_70278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68840 === (1))){
var state_68839__$1 = state_68839;
var statearr_68842_70279 = state_68839__$1;
(statearr_68842_70279[(2)] = null);

(statearr_68842_70279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68840 === (4))){
var inst_68820 = (state_68839[(7)]);
var inst_68820__$1 = (state_68839[(2)]);
var inst_68821 = (inst_68820__$1 == null);
var state_68839__$1 = (function (){var statearr_68843 = state_68839;
(statearr_68843[(7)] = inst_68820__$1);

return statearr_68843;
})();
if(cljs.core.truth_(inst_68821)){
var statearr_68844_70286 = state_68839__$1;
(statearr_68844_70286[(1)] = (5));

} else {
var statearr_68845_70287 = state_68839__$1;
(statearr_68845_70287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68840 === (6))){
var inst_68825 = (state_68839[(8)]);
var inst_68820 = (state_68839[(7)]);
var inst_68825__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_68826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68827 = [inst_68820,inst_68825__$1];
var inst_68828 = (new cljs.core.PersistentVector(null,2,(5),inst_68826,inst_68827,null));
var state_68839__$1 = (function (){var statearr_68846 = state_68839;
(statearr_68846[(8)] = inst_68825__$1);

return statearr_68846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68839__$1,(8),jobs,inst_68828);
} else {
if((state_val_68840 === (3))){
var inst_68837 = (state_68839[(2)]);
var state_68839__$1 = state_68839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68839__$1,inst_68837);
} else {
if((state_val_68840 === (2))){
var state_68839__$1 = state_68839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68839__$1,(4),from);
} else {
if((state_val_68840 === (9))){
var inst_68832 = (state_68839[(2)]);
var state_68839__$1 = (function (){var statearr_68847 = state_68839;
(statearr_68847[(9)] = inst_68832);

return statearr_68847;
})();
var statearr_68848_70294 = state_68839__$1;
(statearr_68848_70294[(2)] = null);

(statearr_68848_70294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68840 === (5))){
var inst_68823 = cljs.core.async.close_BANG_(jobs);
var state_68839__$1 = state_68839;
var statearr_68849_70295 = state_68839__$1;
(statearr_68849_70295[(2)] = inst_68823);

(statearr_68849_70295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68840 === (8))){
var inst_68825 = (state_68839[(8)]);
var inst_68830 = (state_68839[(2)]);
var state_68839__$1 = (function (){var statearr_68850 = state_68839;
(statearr_68850[(10)] = inst_68830);

return statearr_68850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68839__$1,(9),results,inst_68825);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0 = (function (){
var statearr_68851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__);

(statearr_68851[(1)] = (1));

return statearr_68851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1 = (function (state_68839){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68839);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68852){if((e68852 instanceof Object)){
var ex__47443__auto__ = e68852;
var statearr_68853_70297 = state_68839;
(statearr_68853_70297[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70298 = state_68839;
state_68839 = G__70298;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = function(state_68839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1.call(this,state_68839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_68854 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68854[(6)] = c__47540__auto___70271);

return statearr_68854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


var c__47540__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_68892){
var state_val_68893 = (state_68892[(1)]);
if((state_val_68893 === (7))){
var inst_68888 = (state_68892[(2)]);
var state_68892__$1 = state_68892;
var statearr_68894_70299 = state_68892__$1;
(statearr_68894_70299[(2)] = inst_68888);

(statearr_68894_70299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (20))){
var state_68892__$1 = state_68892;
var statearr_68895_70300 = state_68892__$1;
(statearr_68895_70300[(2)] = null);

(statearr_68895_70300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (1))){
var state_68892__$1 = state_68892;
var statearr_68896_70301 = state_68892__$1;
(statearr_68896_70301[(2)] = null);

(statearr_68896_70301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (4))){
var inst_68857 = (state_68892[(7)]);
var inst_68857__$1 = (state_68892[(2)]);
var inst_68858 = (inst_68857__$1 == null);
var state_68892__$1 = (function (){var statearr_68897 = state_68892;
(statearr_68897[(7)] = inst_68857__$1);

return statearr_68897;
})();
if(cljs.core.truth_(inst_68858)){
var statearr_68898_70302 = state_68892__$1;
(statearr_68898_70302[(1)] = (5));

} else {
var statearr_68899_70303 = state_68892__$1;
(statearr_68899_70303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (15))){
var inst_68870 = (state_68892[(8)]);
var state_68892__$1 = state_68892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68892__$1,(18),to,inst_68870);
} else {
if((state_val_68893 === (21))){
var inst_68883 = (state_68892[(2)]);
var state_68892__$1 = state_68892;
var statearr_68900_70304 = state_68892__$1;
(statearr_68900_70304[(2)] = inst_68883);

(statearr_68900_70304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (13))){
var inst_68885 = (state_68892[(2)]);
var state_68892__$1 = (function (){var statearr_68901 = state_68892;
(statearr_68901[(9)] = inst_68885);

return statearr_68901;
})();
var statearr_68902_70307 = state_68892__$1;
(statearr_68902_70307[(2)] = null);

(statearr_68902_70307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (6))){
var inst_68857 = (state_68892[(7)]);
var state_68892__$1 = state_68892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68892__$1,(11),inst_68857);
} else {
if((state_val_68893 === (17))){
var inst_68878 = (state_68892[(2)]);
var state_68892__$1 = state_68892;
if(cljs.core.truth_(inst_68878)){
var statearr_68903_70308 = state_68892__$1;
(statearr_68903_70308[(1)] = (19));

} else {
var statearr_68904_70309 = state_68892__$1;
(statearr_68904_70309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (3))){
var inst_68890 = (state_68892[(2)]);
var state_68892__$1 = state_68892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68892__$1,inst_68890);
} else {
if((state_val_68893 === (12))){
var inst_68867 = (state_68892[(10)]);
var state_68892__$1 = state_68892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68892__$1,(14),inst_68867);
} else {
if((state_val_68893 === (2))){
var state_68892__$1 = state_68892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68892__$1,(4),results);
} else {
if((state_val_68893 === (19))){
var state_68892__$1 = state_68892;
var statearr_68905_70310 = state_68892__$1;
(statearr_68905_70310[(2)] = null);

(statearr_68905_70310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (11))){
var inst_68867 = (state_68892[(2)]);
var state_68892__$1 = (function (){var statearr_68906 = state_68892;
(statearr_68906[(10)] = inst_68867);

return statearr_68906;
})();
var statearr_68907_70311 = state_68892__$1;
(statearr_68907_70311[(2)] = null);

(statearr_68907_70311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (9))){
var state_68892__$1 = state_68892;
var statearr_68908_70312 = state_68892__$1;
(statearr_68908_70312[(2)] = null);

(statearr_68908_70312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (5))){
var state_68892__$1 = state_68892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68909_70313 = state_68892__$1;
(statearr_68909_70313[(1)] = (8));

} else {
var statearr_68910_70314 = state_68892__$1;
(statearr_68910_70314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (14))){
var inst_68870 = (state_68892[(8)]);
var inst_68870__$1 = (state_68892[(2)]);
var inst_68871 = (inst_68870__$1 == null);
var inst_68872 = cljs.core.not(inst_68871);
var state_68892__$1 = (function (){var statearr_68911 = state_68892;
(statearr_68911[(8)] = inst_68870__$1);

return statearr_68911;
})();
if(inst_68872){
var statearr_68912_70319 = state_68892__$1;
(statearr_68912_70319[(1)] = (15));

} else {
var statearr_68913_70321 = state_68892__$1;
(statearr_68913_70321[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (16))){
var state_68892__$1 = state_68892;
var statearr_68914_70323 = state_68892__$1;
(statearr_68914_70323[(2)] = false);

(statearr_68914_70323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (10))){
var inst_68864 = (state_68892[(2)]);
var state_68892__$1 = state_68892;
var statearr_68915_70324 = state_68892__$1;
(statearr_68915_70324[(2)] = inst_68864);

(statearr_68915_70324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (18))){
var inst_68875 = (state_68892[(2)]);
var state_68892__$1 = state_68892;
var statearr_68916_70328 = state_68892__$1;
(statearr_68916_70328[(2)] = inst_68875);

(statearr_68916_70328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68893 === (8))){
var inst_68861 = cljs.core.async.close_BANG_(to);
var state_68892__$1 = state_68892;
var statearr_68917_70334 = state_68892__$1;
(statearr_68917_70334[(2)] = inst_68861);

(statearr_68917_70334[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0 = (function (){
var statearr_68918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__);

(statearr_68918[(1)] = (1));

return statearr_68918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1 = (function (state_68892){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68892);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68919){if((e68919 instanceof Object)){
var ex__47443__auto__ = e68919;
var statearr_68920_70337 = state_68892;
(statearr_68920_70337[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70338 = state_68892;
state_68892 = G__70338;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__ = function(state_68892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1.call(this,state_68892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_68921 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68921[(6)] = c__47540__auto__);

return statearr_68921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));

return c__47540__auto__;
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
var G__68923 = arguments.length;
switch (G__68923) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__68925 = arguments.length;
switch (G__68925) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__68927 = arguments.length;
switch (G__68927) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47540__auto___70371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_68953){
var state_val_68954 = (state_68953[(1)]);
if((state_val_68954 === (7))){
var inst_68949 = (state_68953[(2)]);
var state_68953__$1 = state_68953;
var statearr_68955_70378 = state_68953__$1;
(statearr_68955_70378[(2)] = inst_68949);

(statearr_68955_70378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (1))){
var state_68953__$1 = state_68953;
var statearr_68956_70383 = state_68953__$1;
(statearr_68956_70383[(2)] = null);

(statearr_68956_70383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (4))){
var inst_68930 = (state_68953[(7)]);
var inst_68930__$1 = (state_68953[(2)]);
var inst_68931 = (inst_68930__$1 == null);
var state_68953__$1 = (function (){var statearr_68957 = state_68953;
(statearr_68957[(7)] = inst_68930__$1);

return statearr_68957;
})();
if(cljs.core.truth_(inst_68931)){
var statearr_68958_70385 = state_68953__$1;
(statearr_68958_70385[(1)] = (5));

} else {
var statearr_68959_70386 = state_68953__$1;
(statearr_68959_70386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (13))){
var state_68953__$1 = state_68953;
var statearr_68960_70387 = state_68953__$1;
(statearr_68960_70387[(2)] = null);

(statearr_68960_70387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (6))){
var inst_68930 = (state_68953[(7)]);
var inst_68936 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_68930) : p.call(null,inst_68930));
var state_68953__$1 = state_68953;
if(cljs.core.truth_(inst_68936)){
var statearr_68961_70388 = state_68953__$1;
(statearr_68961_70388[(1)] = (9));

} else {
var statearr_68962_70393 = state_68953__$1;
(statearr_68962_70393[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (3))){
var inst_68951 = (state_68953[(2)]);
var state_68953__$1 = state_68953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68953__$1,inst_68951);
} else {
if((state_val_68954 === (12))){
var state_68953__$1 = state_68953;
var statearr_68963_70395 = state_68953__$1;
(statearr_68963_70395[(2)] = null);

(statearr_68963_70395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (2))){
var state_68953__$1 = state_68953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68953__$1,(4),ch);
} else {
if((state_val_68954 === (11))){
var inst_68930 = (state_68953[(7)]);
var inst_68940 = (state_68953[(2)]);
var state_68953__$1 = state_68953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68953__$1,(8),inst_68940,inst_68930);
} else {
if((state_val_68954 === (9))){
var state_68953__$1 = state_68953;
var statearr_68964_70400 = state_68953__$1;
(statearr_68964_70400[(2)] = tc);

(statearr_68964_70400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (5))){
var inst_68933 = cljs.core.async.close_BANG_(tc);
var inst_68934 = cljs.core.async.close_BANG_(fc);
var state_68953__$1 = (function (){var statearr_68965 = state_68953;
(statearr_68965[(8)] = inst_68933);

return statearr_68965;
})();
var statearr_68966_70407 = state_68953__$1;
(statearr_68966_70407[(2)] = inst_68934);

(statearr_68966_70407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (14))){
var inst_68947 = (state_68953[(2)]);
var state_68953__$1 = state_68953;
var statearr_68967_70408 = state_68953__$1;
(statearr_68967_70408[(2)] = inst_68947);

(statearr_68967_70408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (10))){
var state_68953__$1 = state_68953;
var statearr_68968_70409 = state_68953__$1;
(statearr_68968_70409[(2)] = fc);

(statearr_68968_70409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68954 === (8))){
var inst_68942 = (state_68953[(2)]);
var state_68953__$1 = state_68953;
if(cljs.core.truth_(inst_68942)){
var statearr_68969_70410 = state_68953__$1;
(statearr_68969_70410[(1)] = (12));

} else {
var statearr_68970_70411 = state_68953__$1;
(statearr_68970_70411[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_68971 = [null,null,null,null,null,null,null,null,null];
(statearr_68971[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_68971[(1)] = (1));

return statearr_68971;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_68953){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68953);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e68972){if((e68972 instanceof Object)){
var ex__47443__auto__ = e68972;
var statearr_68973_70412 = state_68953;
(statearr_68973_70412[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70413 = state_68953;
state_68953 = G__70413;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_68953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_68953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_68974 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_68974[(6)] = c__47540__auto___70371);

return statearr_68974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47540__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_68995){
var state_val_68996 = (state_68995[(1)]);
if((state_val_68996 === (7))){
var inst_68991 = (state_68995[(2)]);
var state_68995__$1 = state_68995;
var statearr_68997_70420 = state_68995__$1;
(statearr_68997_70420[(2)] = inst_68991);

(statearr_68997_70420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (1))){
var inst_68975 = init;
var state_68995__$1 = (function (){var statearr_68998 = state_68995;
(statearr_68998[(7)] = inst_68975);

return statearr_68998;
})();
var statearr_68999_70421 = state_68995__$1;
(statearr_68999_70421[(2)] = null);

(statearr_68999_70421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (4))){
var inst_68978 = (state_68995[(8)]);
var inst_68978__$1 = (state_68995[(2)]);
var inst_68979 = (inst_68978__$1 == null);
var state_68995__$1 = (function (){var statearr_69000 = state_68995;
(statearr_69000[(8)] = inst_68978__$1);

return statearr_69000;
})();
if(cljs.core.truth_(inst_68979)){
var statearr_69001_70422 = state_68995__$1;
(statearr_69001_70422[(1)] = (5));

} else {
var statearr_69002_70423 = state_68995__$1;
(statearr_69002_70423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (6))){
var inst_68975 = (state_68995[(7)]);
var inst_68978 = (state_68995[(8)]);
var inst_68982 = (state_68995[(9)]);
var inst_68982__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_68975,inst_68978) : f.call(null,inst_68975,inst_68978));
var inst_68983 = cljs.core.reduced_QMARK_(inst_68982__$1);
var state_68995__$1 = (function (){var statearr_69003 = state_68995;
(statearr_69003[(9)] = inst_68982__$1);

return statearr_69003;
})();
if(inst_68983){
var statearr_69004_70430 = state_68995__$1;
(statearr_69004_70430[(1)] = (8));

} else {
var statearr_69005_70431 = state_68995__$1;
(statearr_69005_70431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (3))){
var inst_68993 = (state_68995[(2)]);
var state_68995__$1 = state_68995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68995__$1,inst_68993);
} else {
if((state_val_68996 === (2))){
var state_68995__$1 = state_68995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68995__$1,(4),ch);
} else {
if((state_val_68996 === (9))){
var inst_68982 = (state_68995[(9)]);
var inst_68975 = inst_68982;
var state_68995__$1 = (function (){var statearr_69006 = state_68995;
(statearr_69006[(7)] = inst_68975);

return statearr_69006;
})();
var statearr_69007_70432 = state_68995__$1;
(statearr_69007_70432[(2)] = null);

(statearr_69007_70432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (5))){
var inst_68975 = (state_68995[(7)]);
var state_68995__$1 = state_68995;
var statearr_69008_70433 = state_68995__$1;
(statearr_69008_70433[(2)] = inst_68975);

(statearr_69008_70433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (10))){
var inst_68989 = (state_68995[(2)]);
var state_68995__$1 = state_68995;
var statearr_69009_70436 = state_68995__$1;
(statearr_69009_70436[(2)] = inst_68989);

(statearr_69009_70436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68996 === (8))){
var inst_68982 = (state_68995[(9)]);
var inst_68985 = cljs.core.deref(inst_68982);
var state_68995__$1 = state_68995;
var statearr_69010_70437 = state_68995__$1;
(statearr_69010_70437[(2)] = inst_68985);

(statearr_69010_70437[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47440__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47440__auto____0 = (function (){
var statearr_69011 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69011[(0)] = cljs$core$async$reduce_$_state_machine__47440__auto__);

(statearr_69011[(1)] = (1));

return statearr_69011;
});
var cljs$core$async$reduce_$_state_machine__47440__auto____1 = (function (state_68995){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_68995);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69012){if((e69012 instanceof Object)){
var ex__47443__auto__ = e69012;
var statearr_69013_70443 = state_68995;
(statearr_69013_70443[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70445 = state_68995;
state_68995 = G__70445;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47440__auto__ = function(state_68995){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47440__auto____1.call(this,state_68995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47440__auto____0;
cljs$core$async$reduce_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47440__auto____1;
return cljs$core$async$reduce_$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69014 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69014[(6)] = c__47540__auto__);

return statearr_69014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));

return c__47540__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47540__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69020){
var state_val_69021 = (state_69020[(1)]);
if((state_val_69021 === (1))){
var inst_69015 = cljs.core.async.reduce(f__$1,init,ch);
var state_69020__$1 = state_69020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69020__$1,(2),inst_69015);
} else {
if((state_val_69021 === (2))){
var inst_69017 = (state_69020[(2)]);
var inst_69018 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_69017) : f__$1.call(null,inst_69017));
var state_69020__$1 = state_69020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69020__$1,inst_69018);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47440__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47440__auto____0 = (function (){
var statearr_69022 = [null,null,null,null,null,null,null];
(statearr_69022[(0)] = cljs$core$async$transduce_$_state_machine__47440__auto__);

(statearr_69022[(1)] = (1));

return statearr_69022;
});
var cljs$core$async$transduce_$_state_machine__47440__auto____1 = (function (state_69020){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69020);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69023){if((e69023 instanceof Object)){
var ex__47443__auto__ = e69023;
var statearr_69024_70452 = state_69020;
(statearr_69024_70452[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70454 = state_69020;
state_69020 = G__70454;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47440__auto__ = function(state_69020){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47440__auto____1.call(this,state_69020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47440__auto____0;
cljs$core$async$transduce_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47440__auto____1;
return cljs$core$async$transduce_$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69025 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69025[(6)] = c__47540__auto__);

return statearr_69025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));

return c__47540__auto__;
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
var G__69027 = arguments.length;
switch (G__69027) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47540__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69052){
var state_val_69053 = (state_69052[(1)]);
if((state_val_69053 === (7))){
var inst_69034 = (state_69052[(2)]);
var state_69052__$1 = state_69052;
var statearr_69054_70468 = state_69052__$1;
(statearr_69054_70468[(2)] = inst_69034);

(statearr_69054_70468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (1))){
var inst_69028 = cljs.core.seq(coll);
var inst_69029 = inst_69028;
var state_69052__$1 = (function (){var statearr_69055 = state_69052;
(statearr_69055[(7)] = inst_69029);

return statearr_69055;
})();
var statearr_69056_70469 = state_69052__$1;
(statearr_69056_70469[(2)] = null);

(statearr_69056_70469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (4))){
var inst_69029 = (state_69052[(7)]);
var inst_69032 = cljs.core.first(inst_69029);
var state_69052__$1 = state_69052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69052__$1,(7),ch,inst_69032);
} else {
if((state_val_69053 === (13))){
var inst_69046 = (state_69052[(2)]);
var state_69052__$1 = state_69052;
var statearr_69057_70473 = state_69052__$1;
(statearr_69057_70473[(2)] = inst_69046);

(statearr_69057_70473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (6))){
var inst_69037 = (state_69052[(2)]);
var state_69052__$1 = state_69052;
if(cljs.core.truth_(inst_69037)){
var statearr_69058_70475 = state_69052__$1;
(statearr_69058_70475[(1)] = (8));

} else {
var statearr_69059_70477 = state_69052__$1;
(statearr_69059_70477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (3))){
var inst_69050 = (state_69052[(2)]);
var state_69052__$1 = state_69052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69052__$1,inst_69050);
} else {
if((state_val_69053 === (12))){
var state_69052__$1 = state_69052;
var statearr_69060_70479 = state_69052__$1;
(statearr_69060_70479[(2)] = null);

(statearr_69060_70479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (2))){
var inst_69029 = (state_69052[(7)]);
var state_69052__$1 = state_69052;
if(cljs.core.truth_(inst_69029)){
var statearr_69061_70482 = state_69052__$1;
(statearr_69061_70482[(1)] = (4));

} else {
var statearr_69062_70483 = state_69052__$1;
(statearr_69062_70483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (11))){
var inst_69043 = cljs.core.async.close_BANG_(ch);
var state_69052__$1 = state_69052;
var statearr_69063_70484 = state_69052__$1;
(statearr_69063_70484[(2)] = inst_69043);

(statearr_69063_70484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (9))){
var state_69052__$1 = state_69052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69064_70486 = state_69052__$1;
(statearr_69064_70486[(1)] = (11));

} else {
var statearr_69065_70488 = state_69052__$1;
(statearr_69065_70488[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (5))){
var inst_69029 = (state_69052[(7)]);
var state_69052__$1 = state_69052;
var statearr_69066_70489 = state_69052__$1;
(statearr_69066_70489[(2)] = inst_69029);

(statearr_69066_70489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (10))){
var inst_69048 = (state_69052[(2)]);
var state_69052__$1 = state_69052;
var statearr_69067_70490 = state_69052__$1;
(statearr_69067_70490[(2)] = inst_69048);

(statearr_69067_70490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69053 === (8))){
var inst_69029 = (state_69052[(7)]);
var inst_69039 = cljs.core.next(inst_69029);
var inst_69029__$1 = inst_69039;
var state_69052__$1 = (function (){var statearr_69068 = state_69052;
(statearr_69068[(7)] = inst_69029__$1);

return statearr_69068;
})();
var statearr_69069_70493 = state_69052__$1;
(statearr_69069_70493[(2)] = null);

(statearr_69069_70493[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69070 = [null,null,null,null,null,null,null,null];
(statearr_69070[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69070[(1)] = (1));

return statearr_69070;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69052){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69052);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69071){if((e69071 instanceof Object)){
var ex__47443__auto__ = e69071;
var statearr_69072_70499 = state_69052;
(statearr_69072_70499[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70500 = state_69052;
state_69052 = G__70500;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69073 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69073[(6)] = c__47540__auto__);

return statearr_69073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));

return c__47540__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69074 = (function (ch,cs,meta69075){
this.ch = ch;
this.cs = cs;
this.meta69075 = meta69075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69076,meta69075__$1){
var self__ = this;
var _69076__$1 = this;
return (new cljs.core.async.t_cljs$core$async69074(self__.ch,self__.cs,meta69075__$1));
}));

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69076){
var self__ = this;
var _69076__$1 = this;
return self__.meta69075;
}));

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async69074.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async69074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69075","meta69075",746114848,null)], null);
}));

(cljs.core.async.t_cljs$core$async69074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69074");

(cljs.core.async.t_cljs$core$async69074.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69074.
 */
cljs.core.async.__GT_t_cljs$core$async69074 = (function cljs$core$async$mult_$___GT_t_cljs$core$async69074(ch__$1,cs__$1,meta69075){
return (new cljs.core.async.t_cljs$core$async69074(ch__$1,cs__$1,meta69075));
});

}

return (new cljs.core.async.t_cljs$core$async69074(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47540__auto___70541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69211){
var state_val_69212 = (state_69211[(1)]);
if((state_val_69212 === (7))){
var inst_69207 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69213_70546 = state_69211__$1;
(statearr_69213_70546[(2)] = inst_69207);

(statearr_69213_70546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (20))){
var inst_69110 = (state_69211[(7)]);
var inst_69122 = cljs.core.first(inst_69110);
var inst_69123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69122,(0),null);
var inst_69124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69122,(1),null);
var state_69211__$1 = (function (){var statearr_69214 = state_69211;
(statearr_69214[(8)] = inst_69123);

return statearr_69214;
})();
if(cljs.core.truth_(inst_69124)){
var statearr_69215_70563 = state_69211__$1;
(statearr_69215_70563[(1)] = (22));

} else {
var statearr_69216_70564 = state_69211__$1;
(statearr_69216_70564[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (27))){
var inst_69154 = (state_69211[(9)]);
var inst_69152 = (state_69211[(10)]);
var inst_69079 = (state_69211[(11)]);
var inst_69159 = (state_69211[(12)]);
var inst_69159__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_69152,inst_69154);
var inst_69160 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69159__$1,inst_69079,done);
var state_69211__$1 = (function (){var statearr_69217 = state_69211;
(statearr_69217[(12)] = inst_69159__$1);

return statearr_69217;
})();
if(cljs.core.truth_(inst_69160)){
var statearr_69218_70571 = state_69211__$1;
(statearr_69218_70571[(1)] = (30));

} else {
var statearr_69219_70572 = state_69211__$1;
(statearr_69219_70572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (1))){
var state_69211__$1 = state_69211;
var statearr_69220_70573 = state_69211__$1;
(statearr_69220_70573[(2)] = null);

(statearr_69220_70573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (24))){
var inst_69110 = (state_69211[(7)]);
var inst_69129 = (state_69211[(2)]);
var inst_69130 = cljs.core.next(inst_69110);
var inst_69088 = inst_69130;
var inst_69089 = null;
var inst_69090 = (0);
var inst_69091 = (0);
var state_69211__$1 = (function (){var statearr_69221 = state_69211;
(statearr_69221[(13)] = inst_69129);

(statearr_69221[(14)] = inst_69089);

(statearr_69221[(15)] = inst_69091);

(statearr_69221[(16)] = inst_69088);

(statearr_69221[(17)] = inst_69090);

return statearr_69221;
})();
var statearr_69222_70574 = state_69211__$1;
(statearr_69222_70574[(2)] = null);

(statearr_69222_70574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (39))){
var state_69211__$1 = state_69211;
var statearr_69226_70575 = state_69211__$1;
(statearr_69226_70575[(2)] = null);

(statearr_69226_70575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (4))){
var inst_69079 = (state_69211[(11)]);
var inst_69079__$1 = (state_69211[(2)]);
var inst_69080 = (inst_69079__$1 == null);
var state_69211__$1 = (function (){var statearr_69227 = state_69211;
(statearr_69227[(11)] = inst_69079__$1);

return statearr_69227;
})();
if(cljs.core.truth_(inst_69080)){
var statearr_69228_70586 = state_69211__$1;
(statearr_69228_70586[(1)] = (5));

} else {
var statearr_69229_70587 = state_69211__$1;
(statearr_69229_70587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (15))){
var inst_69089 = (state_69211[(14)]);
var inst_69091 = (state_69211[(15)]);
var inst_69088 = (state_69211[(16)]);
var inst_69090 = (state_69211[(17)]);
var inst_69106 = (state_69211[(2)]);
var inst_69107 = (inst_69091 + (1));
var tmp69223 = inst_69089;
var tmp69224 = inst_69088;
var tmp69225 = inst_69090;
var inst_69088__$1 = tmp69224;
var inst_69089__$1 = tmp69223;
var inst_69090__$1 = tmp69225;
var inst_69091__$1 = inst_69107;
var state_69211__$1 = (function (){var statearr_69230 = state_69211;
(statearr_69230[(14)] = inst_69089__$1);

(statearr_69230[(15)] = inst_69091__$1);

(statearr_69230[(16)] = inst_69088__$1);

(statearr_69230[(17)] = inst_69090__$1);

(statearr_69230[(18)] = inst_69106);

return statearr_69230;
})();
var statearr_69231_70612 = state_69211__$1;
(statearr_69231_70612[(2)] = null);

(statearr_69231_70612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (21))){
var inst_69133 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69235_70613 = state_69211__$1;
(statearr_69235_70613[(2)] = inst_69133);

(statearr_69235_70613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (31))){
var inst_69159 = (state_69211[(12)]);
var inst_69163 = done(null);
var inst_69164 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69159);
var state_69211__$1 = (function (){var statearr_69236 = state_69211;
(statearr_69236[(19)] = inst_69163);

return statearr_69236;
})();
var statearr_69237_70621 = state_69211__$1;
(statearr_69237_70621[(2)] = inst_69164);

(statearr_69237_70621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (32))){
var inst_69154 = (state_69211[(9)]);
var inst_69152 = (state_69211[(10)]);
var inst_69153 = (state_69211[(20)]);
var inst_69151 = (state_69211[(21)]);
var inst_69166 = (state_69211[(2)]);
var inst_69167 = (inst_69154 + (1));
var tmp69232 = inst_69152;
var tmp69233 = inst_69153;
var tmp69234 = inst_69151;
var inst_69151__$1 = tmp69234;
var inst_69152__$1 = tmp69232;
var inst_69153__$1 = tmp69233;
var inst_69154__$1 = inst_69167;
var state_69211__$1 = (function (){var statearr_69238 = state_69211;
(statearr_69238[(9)] = inst_69154__$1);

(statearr_69238[(22)] = inst_69166);

(statearr_69238[(10)] = inst_69152__$1);

(statearr_69238[(20)] = inst_69153__$1);

(statearr_69238[(21)] = inst_69151__$1);

return statearr_69238;
})();
var statearr_69239_70627 = state_69211__$1;
(statearr_69239_70627[(2)] = null);

(statearr_69239_70627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (40))){
var inst_69179 = (state_69211[(23)]);
var inst_69183 = done(null);
var inst_69184 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69179);
var state_69211__$1 = (function (){var statearr_69240 = state_69211;
(statearr_69240[(24)] = inst_69183);

return statearr_69240;
})();
var statearr_69241_70635 = state_69211__$1;
(statearr_69241_70635[(2)] = inst_69184);

(statearr_69241_70635[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (33))){
var inst_69170 = (state_69211[(25)]);
var inst_69172 = cljs.core.chunked_seq_QMARK_(inst_69170);
var state_69211__$1 = state_69211;
if(inst_69172){
var statearr_69242_70644 = state_69211__$1;
(statearr_69242_70644[(1)] = (36));

} else {
var statearr_69243_70645 = state_69211__$1;
(statearr_69243_70645[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (13))){
var inst_69100 = (state_69211[(26)]);
var inst_69103 = cljs.core.async.close_BANG_(inst_69100);
var state_69211__$1 = state_69211;
var statearr_69244_70647 = state_69211__$1;
(statearr_69244_70647[(2)] = inst_69103);

(statearr_69244_70647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (22))){
var inst_69123 = (state_69211[(8)]);
var inst_69126 = cljs.core.async.close_BANG_(inst_69123);
var state_69211__$1 = state_69211;
var statearr_69245_70653 = state_69211__$1;
(statearr_69245_70653[(2)] = inst_69126);

(statearr_69245_70653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (36))){
var inst_69170 = (state_69211[(25)]);
var inst_69174 = cljs.core.chunk_first(inst_69170);
var inst_69175 = cljs.core.chunk_rest(inst_69170);
var inst_69176 = cljs.core.count(inst_69174);
var inst_69151 = inst_69175;
var inst_69152 = inst_69174;
var inst_69153 = inst_69176;
var inst_69154 = (0);
var state_69211__$1 = (function (){var statearr_69246 = state_69211;
(statearr_69246[(9)] = inst_69154);

(statearr_69246[(10)] = inst_69152);

(statearr_69246[(20)] = inst_69153);

(statearr_69246[(21)] = inst_69151);

return statearr_69246;
})();
var statearr_69247_70654 = state_69211__$1;
(statearr_69247_70654[(2)] = null);

(statearr_69247_70654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (41))){
var inst_69170 = (state_69211[(25)]);
var inst_69186 = (state_69211[(2)]);
var inst_69187 = cljs.core.next(inst_69170);
var inst_69151 = inst_69187;
var inst_69152 = null;
var inst_69153 = (0);
var inst_69154 = (0);
var state_69211__$1 = (function (){var statearr_69248 = state_69211;
(statearr_69248[(27)] = inst_69186);

(statearr_69248[(9)] = inst_69154);

(statearr_69248[(10)] = inst_69152);

(statearr_69248[(20)] = inst_69153);

(statearr_69248[(21)] = inst_69151);

return statearr_69248;
})();
var statearr_69249_70660 = state_69211__$1;
(statearr_69249_70660[(2)] = null);

(statearr_69249_70660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (43))){
var state_69211__$1 = state_69211;
var statearr_69250_70662 = state_69211__$1;
(statearr_69250_70662[(2)] = null);

(statearr_69250_70662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (29))){
var inst_69195 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69251_70663 = state_69211__$1;
(statearr_69251_70663[(2)] = inst_69195);

(statearr_69251_70663[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (44))){
var inst_69204 = (state_69211[(2)]);
var state_69211__$1 = (function (){var statearr_69252 = state_69211;
(statearr_69252[(28)] = inst_69204);

return statearr_69252;
})();
var statearr_69253_70666 = state_69211__$1;
(statearr_69253_70666[(2)] = null);

(statearr_69253_70666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (6))){
var inst_69143 = (state_69211[(29)]);
var inst_69142 = cljs.core.deref(cs);
var inst_69143__$1 = cljs.core.keys(inst_69142);
var inst_69144 = cljs.core.count(inst_69143__$1);
var inst_69145 = cljs.core.reset_BANG_(dctr,inst_69144);
var inst_69150 = cljs.core.seq(inst_69143__$1);
var inst_69151 = inst_69150;
var inst_69152 = null;
var inst_69153 = (0);
var inst_69154 = (0);
var state_69211__$1 = (function (){var statearr_69254 = state_69211;
(statearr_69254[(9)] = inst_69154);

(statearr_69254[(10)] = inst_69152);

(statearr_69254[(20)] = inst_69153);

(statearr_69254[(30)] = inst_69145);

(statearr_69254[(29)] = inst_69143__$1);

(statearr_69254[(21)] = inst_69151);

return statearr_69254;
})();
var statearr_69255_70670 = state_69211__$1;
(statearr_69255_70670[(2)] = null);

(statearr_69255_70670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (28))){
var inst_69170 = (state_69211[(25)]);
var inst_69151 = (state_69211[(21)]);
var inst_69170__$1 = cljs.core.seq(inst_69151);
var state_69211__$1 = (function (){var statearr_69256 = state_69211;
(statearr_69256[(25)] = inst_69170__$1);

return statearr_69256;
})();
if(inst_69170__$1){
var statearr_69257_70672 = state_69211__$1;
(statearr_69257_70672[(1)] = (33));

} else {
var statearr_69258_70673 = state_69211__$1;
(statearr_69258_70673[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (25))){
var inst_69154 = (state_69211[(9)]);
var inst_69153 = (state_69211[(20)]);
var inst_69156 = (inst_69154 < inst_69153);
var inst_69157 = inst_69156;
var state_69211__$1 = state_69211;
if(cljs.core.truth_(inst_69157)){
var statearr_69259_70676 = state_69211__$1;
(statearr_69259_70676[(1)] = (27));

} else {
var statearr_69260_70677 = state_69211__$1;
(statearr_69260_70677[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (34))){
var state_69211__$1 = state_69211;
var statearr_69261_70678 = state_69211__$1;
(statearr_69261_70678[(2)] = null);

(statearr_69261_70678[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (17))){
var state_69211__$1 = state_69211;
var statearr_69262_70679 = state_69211__$1;
(statearr_69262_70679[(2)] = null);

(statearr_69262_70679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (3))){
var inst_69209 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69211__$1,inst_69209);
} else {
if((state_val_69212 === (12))){
var inst_69138 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69263_70681 = state_69211__$1;
(statearr_69263_70681[(2)] = inst_69138);

(statearr_69263_70681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (2))){
var state_69211__$1 = state_69211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69211__$1,(4),ch);
} else {
if((state_val_69212 === (23))){
var state_69211__$1 = state_69211;
var statearr_69264_70682 = state_69211__$1;
(statearr_69264_70682[(2)] = null);

(statearr_69264_70682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (35))){
var inst_69193 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69265_70683 = state_69211__$1;
(statearr_69265_70683[(2)] = inst_69193);

(statearr_69265_70683[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (19))){
var inst_69110 = (state_69211[(7)]);
var inst_69114 = cljs.core.chunk_first(inst_69110);
var inst_69115 = cljs.core.chunk_rest(inst_69110);
var inst_69116 = cljs.core.count(inst_69114);
var inst_69088 = inst_69115;
var inst_69089 = inst_69114;
var inst_69090 = inst_69116;
var inst_69091 = (0);
var state_69211__$1 = (function (){var statearr_69266 = state_69211;
(statearr_69266[(14)] = inst_69089);

(statearr_69266[(15)] = inst_69091);

(statearr_69266[(16)] = inst_69088);

(statearr_69266[(17)] = inst_69090);

return statearr_69266;
})();
var statearr_69267_70688 = state_69211__$1;
(statearr_69267_70688[(2)] = null);

(statearr_69267_70688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (11))){
var inst_69110 = (state_69211[(7)]);
var inst_69088 = (state_69211[(16)]);
var inst_69110__$1 = cljs.core.seq(inst_69088);
var state_69211__$1 = (function (){var statearr_69268 = state_69211;
(statearr_69268[(7)] = inst_69110__$1);

return statearr_69268;
})();
if(inst_69110__$1){
var statearr_69269_70689 = state_69211__$1;
(statearr_69269_70689[(1)] = (16));

} else {
var statearr_69270_70690 = state_69211__$1;
(statearr_69270_70690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (9))){
var inst_69140 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69271_70691 = state_69211__$1;
(statearr_69271_70691[(2)] = inst_69140);

(statearr_69271_70691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (5))){
var inst_69086 = cljs.core.deref(cs);
var inst_69087 = cljs.core.seq(inst_69086);
var inst_69088 = inst_69087;
var inst_69089 = null;
var inst_69090 = (0);
var inst_69091 = (0);
var state_69211__$1 = (function (){var statearr_69272 = state_69211;
(statearr_69272[(14)] = inst_69089);

(statearr_69272[(15)] = inst_69091);

(statearr_69272[(16)] = inst_69088);

(statearr_69272[(17)] = inst_69090);

return statearr_69272;
})();
var statearr_69273_70692 = state_69211__$1;
(statearr_69273_70692[(2)] = null);

(statearr_69273_70692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (14))){
var state_69211__$1 = state_69211;
var statearr_69274_70693 = state_69211__$1;
(statearr_69274_70693[(2)] = null);

(statearr_69274_70693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (45))){
var inst_69201 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69275_70694 = state_69211__$1;
(statearr_69275_70694[(2)] = inst_69201);

(statearr_69275_70694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (26))){
var inst_69143 = (state_69211[(29)]);
var inst_69197 = (state_69211[(2)]);
var inst_69198 = cljs.core.seq(inst_69143);
var state_69211__$1 = (function (){var statearr_69276 = state_69211;
(statearr_69276[(31)] = inst_69197);

return statearr_69276;
})();
if(inst_69198){
var statearr_69277_70700 = state_69211__$1;
(statearr_69277_70700[(1)] = (42));

} else {
var statearr_69278_70701 = state_69211__$1;
(statearr_69278_70701[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (16))){
var inst_69110 = (state_69211[(7)]);
var inst_69112 = cljs.core.chunked_seq_QMARK_(inst_69110);
var state_69211__$1 = state_69211;
if(inst_69112){
var statearr_69279_70702 = state_69211__$1;
(statearr_69279_70702[(1)] = (19));

} else {
var statearr_69280_70703 = state_69211__$1;
(statearr_69280_70703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (38))){
var inst_69190 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69281_70704 = state_69211__$1;
(statearr_69281_70704[(2)] = inst_69190);

(statearr_69281_70704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (30))){
var state_69211__$1 = state_69211;
var statearr_69282_70705 = state_69211__$1;
(statearr_69282_70705[(2)] = null);

(statearr_69282_70705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (10))){
var inst_69089 = (state_69211[(14)]);
var inst_69091 = (state_69211[(15)]);
var inst_69099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_69089,inst_69091);
var inst_69100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69099,(0),null);
var inst_69101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69099,(1),null);
var state_69211__$1 = (function (){var statearr_69283 = state_69211;
(statearr_69283[(26)] = inst_69100);

return statearr_69283;
})();
if(cljs.core.truth_(inst_69101)){
var statearr_69284_70707 = state_69211__$1;
(statearr_69284_70707[(1)] = (13));

} else {
var statearr_69285_70708 = state_69211__$1;
(statearr_69285_70708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (18))){
var inst_69136 = (state_69211[(2)]);
var state_69211__$1 = state_69211;
var statearr_69286_70709 = state_69211__$1;
(statearr_69286_70709[(2)] = inst_69136);

(statearr_69286_70709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (42))){
var state_69211__$1 = state_69211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69211__$1,(45),dchan);
} else {
if((state_val_69212 === (37))){
var inst_69170 = (state_69211[(25)]);
var inst_69179 = (state_69211[(23)]);
var inst_69079 = (state_69211[(11)]);
var inst_69179__$1 = cljs.core.first(inst_69170);
var inst_69180 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69179__$1,inst_69079,done);
var state_69211__$1 = (function (){var statearr_69287 = state_69211;
(statearr_69287[(23)] = inst_69179__$1);

return statearr_69287;
})();
if(cljs.core.truth_(inst_69180)){
var statearr_69288_70714 = state_69211__$1;
(statearr_69288_70714[(1)] = (39));

} else {
var statearr_69289_70715 = state_69211__$1;
(statearr_69289_70715[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69212 === (8))){
var inst_69091 = (state_69211[(15)]);
var inst_69090 = (state_69211[(17)]);
var inst_69093 = (inst_69091 < inst_69090);
var inst_69094 = inst_69093;
var state_69211__$1 = state_69211;
if(cljs.core.truth_(inst_69094)){
var statearr_69290_70716 = state_69211__$1;
(statearr_69290_70716[(1)] = (10));

} else {
var statearr_69291_70717 = state_69211__$1;
(statearr_69291_70717[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__47440__auto__ = null;
var cljs$core$async$mult_$_state_machine__47440__auto____0 = (function (){
var statearr_69292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69292[(0)] = cljs$core$async$mult_$_state_machine__47440__auto__);

(statearr_69292[(1)] = (1));

return statearr_69292;
});
var cljs$core$async$mult_$_state_machine__47440__auto____1 = (function (state_69211){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69211);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69293){if((e69293 instanceof Object)){
var ex__47443__auto__ = e69293;
var statearr_69294_70719 = state_69211;
(statearr_69294_70719[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70724 = state_69211;
state_69211 = G__70724;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47440__auto__ = function(state_69211){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47440__auto____1.call(this,state_69211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47440__auto____0;
cljs$core$async$mult_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47440__auto____1;
return cljs$core$async$mult_$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69295 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69295[(6)] = c__47540__auto___70541);

return statearr_69295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__69297 = arguments.length;
switch (G__69297) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___70738 = arguments.length;
var i__4790__auto___70739 = (0);
while(true){
if((i__4790__auto___70739 < len__4789__auto___70738)){
args__4795__auto__.push((arguments[i__4790__auto___70739]));

var G__70741 = (i__4790__auto___70739 + (1));
i__4790__auto___70739 = G__70741;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69302){
var map__69303 = p__69302;
var map__69303__$1 = (((((!((map__69303 == null))))?(((((map__69303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69303):map__69303);
var opts = map__69303__$1;
var statearr_69305_70742 = state;
(statearr_69305_70742[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_69306_70744 = state;
(statearr_69306_70744[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_69307_70745 = state;
(statearr_69307_70745[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69298){
var G__69299 = cljs.core.first(seq69298);
var seq69298__$1 = cljs.core.next(seq69298);
var G__69300 = cljs.core.first(seq69298__$1);
var seq69298__$2 = cljs.core.next(seq69298__$1);
var G__69301 = cljs.core.first(seq69298__$2);
var seq69298__$3 = cljs.core.next(seq69298__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69299,G__69300,G__69301,seq69298__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69308 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69309){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta69309 = meta69309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69310,meta69309__$1){
var self__ = this;
var _69310__$1 = this;
return (new cljs.core.async.t_cljs$core$async69308(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta69309__$1));
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69310){
var self__ = this;
var _69310__$1 = this;
return self__.meta69309;
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69308.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta69309","meta69309",281187320,null)], null);
}));

(cljs.core.async.t_cljs$core$async69308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69308");

(cljs.core.async.t_cljs$core$async69308.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69308.
 */
cljs.core.async.__GT_t_cljs$core$async69308 = (function cljs$core$async$mix_$___GT_t_cljs$core$async69308(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69309){
return (new cljs.core.async.t_cljs$core$async69308(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69309));
});

}

return (new cljs.core.async.t_cljs$core$async69308(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47540__auto___70758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69412){
var state_val_69413 = (state_69412[(1)]);
if((state_val_69413 === (7))){
var inst_69327 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
var statearr_69414_70760 = state_69412__$1;
(statearr_69414_70760[(2)] = inst_69327);

(statearr_69414_70760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (20))){
var inst_69339 = (state_69412[(7)]);
var state_69412__$1 = state_69412;
var statearr_69415_70761 = state_69412__$1;
(statearr_69415_70761[(2)] = inst_69339);

(statearr_69415_70761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (27))){
var state_69412__$1 = state_69412;
var statearr_69416_70762 = state_69412__$1;
(statearr_69416_70762[(2)] = null);

(statearr_69416_70762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (1))){
var inst_69314 = (state_69412[(8)]);
var inst_69314__$1 = calc_state();
var inst_69316 = (inst_69314__$1 == null);
var inst_69317 = cljs.core.not(inst_69316);
var state_69412__$1 = (function (){var statearr_69417 = state_69412;
(statearr_69417[(8)] = inst_69314__$1);

return statearr_69417;
})();
if(inst_69317){
var statearr_69418_70763 = state_69412__$1;
(statearr_69418_70763[(1)] = (2));

} else {
var statearr_69419_70764 = state_69412__$1;
(statearr_69419_70764[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (24))){
var inst_69386 = (state_69412[(9)]);
var inst_69363 = (state_69412[(10)]);
var inst_69372 = (state_69412[(11)]);
var inst_69386__$1 = (inst_69363.cljs$core$IFn$_invoke$arity$1 ? inst_69363.cljs$core$IFn$_invoke$arity$1(inst_69372) : inst_69363.call(null,inst_69372));
var state_69412__$1 = (function (){var statearr_69420 = state_69412;
(statearr_69420[(9)] = inst_69386__$1);

return statearr_69420;
})();
if(cljs.core.truth_(inst_69386__$1)){
var statearr_69421_70765 = state_69412__$1;
(statearr_69421_70765[(1)] = (29));

} else {
var statearr_69422_70766 = state_69412__$1;
(statearr_69422_70766[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (4))){
var inst_69330 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69330)){
var statearr_69423_70767 = state_69412__$1;
(statearr_69423_70767[(1)] = (8));

} else {
var statearr_69424_70771 = state_69412__$1;
(statearr_69424_70771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (15))){
var inst_69357 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69357)){
var statearr_69425_70776 = state_69412__$1;
(statearr_69425_70776[(1)] = (19));

} else {
var statearr_69426_70777 = state_69412__$1;
(statearr_69426_70777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (21))){
var inst_69362 = (state_69412[(12)]);
var inst_69362__$1 = (state_69412[(2)]);
var inst_69363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69362__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69362__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_69412__$1 = (function (){var statearr_69427 = state_69412;
(statearr_69427[(13)] = inst_69364);

(statearr_69427[(12)] = inst_69362__$1);

(statearr_69427[(10)] = inst_69363);

return statearr_69427;
})();
return cljs.core.async.ioc_alts_BANG_(state_69412__$1,(22),inst_69365);
} else {
if((state_val_69413 === (31))){
var inst_69394 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69394)){
var statearr_69428_70778 = state_69412__$1;
(statearr_69428_70778[(1)] = (32));

} else {
var statearr_69429_70779 = state_69412__$1;
(statearr_69429_70779[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (32))){
var inst_69371 = (state_69412[(14)]);
var state_69412__$1 = state_69412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69412__$1,(35),out,inst_69371);
} else {
if((state_val_69413 === (33))){
var inst_69362 = (state_69412[(12)]);
var inst_69339 = inst_69362;
var state_69412__$1 = (function (){var statearr_69430 = state_69412;
(statearr_69430[(7)] = inst_69339);

return statearr_69430;
})();
var statearr_69431_70780 = state_69412__$1;
(statearr_69431_70780[(2)] = null);

(statearr_69431_70780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (13))){
var inst_69339 = (state_69412[(7)]);
var inst_69346 = inst_69339.cljs$lang$protocol_mask$partition0$;
var inst_69347 = (inst_69346 & (64));
var inst_69348 = inst_69339.cljs$core$ISeq$;
var inst_69349 = (cljs.core.PROTOCOL_SENTINEL === inst_69348);
var inst_69350 = ((inst_69347) || (inst_69349));
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69350)){
var statearr_69432_70781 = state_69412__$1;
(statearr_69432_70781[(1)] = (16));

} else {
var statearr_69433_70782 = state_69412__$1;
(statearr_69433_70782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (22))){
var inst_69371 = (state_69412[(14)]);
var inst_69372 = (state_69412[(11)]);
var inst_69370 = (state_69412[(2)]);
var inst_69371__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69370,(0),null);
var inst_69372__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69370,(1),null);
var inst_69373 = (inst_69371__$1 == null);
var inst_69374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69372__$1,change);
var inst_69375 = ((inst_69373) || (inst_69374));
var state_69412__$1 = (function (){var statearr_69434 = state_69412;
(statearr_69434[(14)] = inst_69371__$1);

(statearr_69434[(11)] = inst_69372__$1);

return statearr_69434;
})();
if(cljs.core.truth_(inst_69375)){
var statearr_69435_70784 = state_69412__$1;
(statearr_69435_70784[(1)] = (23));

} else {
var statearr_69436_70785 = state_69412__$1;
(statearr_69436_70785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (36))){
var inst_69362 = (state_69412[(12)]);
var inst_69339 = inst_69362;
var state_69412__$1 = (function (){var statearr_69437 = state_69412;
(statearr_69437[(7)] = inst_69339);

return statearr_69437;
})();
var statearr_69438_70786 = state_69412__$1;
(statearr_69438_70786[(2)] = null);

(statearr_69438_70786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (29))){
var inst_69386 = (state_69412[(9)]);
var state_69412__$1 = state_69412;
var statearr_69439_70787 = state_69412__$1;
(statearr_69439_70787[(2)] = inst_69386);

(statearr_69439_70787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (6))){
var state_69412__$1 = state_69412;
var statearr_69440_70788 = state_69412__$1;
(statearr_69440_70788[(2)] = false);

(statearr_69440_70788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (28))){
var inst_69382 = (state_69412[(2)]);
var inst_69383 = calc_state();
var inst_69339 = inst_69383;
var state_69412__$1 = (function (){var statearr_69441 = state_69412;
(statearr_69441[(7)] = inst_69339);

(statearr_69441[(15)] = inst_69382);

return statearr_69441;
})();
var statearr_69442_70790 = state_69412__$1;
(statearr_69442_70790[(2)] = null);

(statearr_69442_70790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (25))){
var inst_69408 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
var statearr_69443_70791 = state_69412__$1;
(statearr_69443_70791[(2)] = inst_69408);

(statearr_69443_70791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (34))){
var inst_69406 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
var statearr_69444_70792 = state_69412__$1;
(statearr_69444_70792[(2)] = inst_69406);

(statearr_69444_70792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (17))){
var state_69412__$1 = state_69412;
var statearr_69445_70793 = state_69412__$1;
(statearr_69445_70793[(2)] = false);

(statearr_69445_70793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (3))){
var state_69412__$1 = state_69412;
var statearr_69446_70794 = state_69412__$1;
(statearr_69446_70794[(2)] = false);

(statearr_69446_70794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (12))){
var inst_69410 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69412__$1,inst_69410);
} else {
if((state_val_69413 === (2))){
var inst_69314 = (state_69412[(8)]);
var inst_69319 = inst_69314.cljs$lang$protocol_mask$partition0$;
var inst_69320 = (inst_69319 & (64));
var inst_69321 = inst_69314.cljs$core$ISeq$;
var inst_69322 = (cljs.core.PROTOCOL_SENTINEL === inst_69321);
var inst_69323 = ((inst_69320) || (inst_69322));
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69323)){
var statearr_69447_70795 = state_69412__$1;
(statearr_69447_70795[(1)] = (5));

} else {
var statearr_69448_70796 = state_69412__$1;
(statearr_69448_70796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (23))){
var inst_69371 = (state_69412[(14)]);
var inst_69377 = (inst_69371 == null);
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69377)){
var statearr_69449_70797 = state_69412__$1;
(statearr_69449_70797[(1)] = (26));

} else {
var statearr_69450_70798 = state_69412__$1;
(statearr_69450_70798[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (35))){
var inst_69397 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
if(cljs.core.truth_(inst_69397)){
var statearr_69451_70799 = state_69412__$1;
(statearr_69451_70799[(1)] = (36));

} else {
var statearr_69452_70800 = state_69412__$1;
(statearr_69452_70800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (19))){
var inst_69339 = (state_69412[(7)]);
var inst_69359 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69339);
var state_69412__$1 = state_69412;
var statearr_69453_70801 = state_69412__$1;
(statearr_69453_70801[(2)] = inst_69359);

(statearr_69453_70801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (11))){
var inst_69339 = (state_69412[(7)]);
var inst_69343 = (inst_69339 == null);
var inst_69344 = cljs.core.not(inst_69343);
var state_69412__$1 = state_69412;
if(inst_69344){
var statearr_69454_70806 = state_69412__$1;
(statearr_69454_70806[(1)] = (13));

} else {
var statearr_69455_70807 = state_69412__$1;
(statearr_69455_70807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (9))){
var inst_69314 = (state_69412[(8)]);
var state_69412__$1 = state_69412;
var statearr_69456_70808 = state_69412__$1;
(statearr_69456_70808[(2)] = inst_69314);

(statearr_69456_70808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (5))){
var state_69412__$1 = state_69412;
var statearr_69457_70813 = state_69412__$1;
(statearr_69457_70813[(2)] = true);

(statearr_69457_70813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (14))){
var state_69412__$1 = state_69412;
var statearr_69458_70814 = state_69412__$1;
(statearr_69458_70814[(2)] = false);

(statearr_69458_70814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (26))){
var inst_69372 = (state_69412[(11)]);
var inst_69379 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_69372);
var state_69412__$1 = state_69412;
var statearr_69459_70815 = state_69412__$1;
(statearr_69459_70815[(2)] = inst_69379);

(statearr_69459_70815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (16))){
var state_69412__$1 = state_69412;
var statearr_69460_70817 = state_69412__$1;
(statearr_69460_70817[(2)] = true);

(statearr_69460_70817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (38))){
var inst_69402 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
var statearr_69461_70820 = state_69412__$1;
(statearr_69461_70820[(2)] = inst_69402);

(statearr_69461_70820[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (30))){
var inst_69364 = (state_69412[(13)]);
var inst_69363 = (state_69412[(10)]);
var inst_69372 = (state_69412[(11)]);
var inst_69389 = cljs.core.empty_QMARK_(inst_69363);
var inst_69390 = (inst_69364.cljs$core$IFn$_invoke$arity$1 ? inst_69364.cljs$core$IFn$_invoke$arity$1(inst_69372) : inst_69364.call(null,inst_69372));
var inst_69391 = cljs.core.not(inst_69390);
var inst_69392 = ((inst_69389) && (inst_69391));
var state_69412__$1 = state_69412;
var statearr_69462_70822 = state_69412__$1;
(statearr_69462_70822[(2)] = inst_69392);

(statearr_69462_70822[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (10))){
var inst_69314 = (state_69412[(8)]);
var inst_69335 = (state_69412[(2)]);
var inst_69336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69335,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69335,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69335,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69339 = inst_69314;
var state_69412__$1 = (function (){var statearr_69463 = state_69412;
(statearr_69463[(16)] = inst_69337);

(statearr_69463[(17)] = inst_69336);

(statearr_69463[(7)] = inst_69339);

(statearr_69463[(18)] = inst_69338);

return statearr_69463;
})();
var statearr_69464_70823 = state_69412__$1;
(statearr_69464_70823[(2)] = null);

(statearr_69464_70823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (18))){
var inst_69354 = (state_69412[(2)]);
var state_69412__$1 = state_69412;
var statearr_69465_70826 = state_69412__$1;
(statearr_69465_70826[(2)] = inst_69354);

(statearr_69465_70826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (37))){
var state_69412__$1 = state_69412;
var statearr_69466_70827 = state_69412__$1;
(statearr_69466_70827[(2)] = null);

(statearr_69466_70827[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69413 === (8))){
var inst_69314 = (state_69412[(8)]);
var inst_69332 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69314);
var state_69412__$1 = state_69412;
var statearr_69467_70828 = state_69412__$1;
(statearr_69467_70828[(2)] = inst_69332);

(statearr_69467_70828[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__47440__auto__ = null;
var cljs$core$async$mix_$_state_machine__47440__auto____0 = (function (){
var statearr_69468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69468[(0)] = cljs$core$async$mix_$_state_machine__47440__auto__);

(statearr_69468[(1)] = (1));

return statearr_69468;
});
var cljs$core$async$mix_$_state_machine__47440__auto____1 = (function (state_69412){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69412);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69469){if((e69469 instanceof Object)){
var ex__47443__auto__ = e69469;
var statearr_69470_70833 = state_69412;
(statearr_69470_70833[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70834 = state_69412;
state_69412 = G__70834;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47440__auto__ = function(state_69412){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47440__auto____1.call(this,state_69412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47440__auto____0;
cljs$core$async$mix_$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47440__auto____1;
return cljs$core$async$mix_$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69471 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69471[(6)] = c__47540__auto___70758);

return statearr_69471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__69473 = arguments.length;
switch (G__69473) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__69476 = arguments.length;
switch (G__69476) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__69474_SHARP_){
if(cljs.core.truth_((p1__69474_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69474_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__69474_SHARP_.call(null,topic)))){
return p1__69474_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__69474_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69477 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta69478){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta69478 = meta69478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69479,meta69478__$1){
var self__ = this;
var _69479__$1 = this;
return (new cljs.core.async.t_cljs$core$async69477(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta69478__$1));
}));

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69479){
var self__ = this;
var _69479__$1 = this;
return self__.meta69478;
}));

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async69477.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async69477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta69478","meta69478",-1114857159,null)], null);
}));

(cljs.core.async.t_cljs$core$async69477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69477");

(cljs.core.async.t_cljs$core$async69477.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69477.
 */
cljs.core.async.__GT_t_cljs$core$async69477 = (function cljs$core$async$__GT_t_cljs$core$async69477(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69478){
return (new cljs.core.async.t_cljs$core$async69477(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69478));
});

}

return (new cljs.core.async.t_cljs$core$async69477(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47540__auto___70870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69551){
var state_val_69552 = (state_69551[(1)]);
if((state_val_69552 === (7))){
var inst_69547 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
var statearr_69553_70871 = state_69551__$1;
(statearr_69553_70871[(2)] = inst_69547);

(statearr_69553_70871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (20))){
var state_69551__$1 = state_69551;
var statearr_69554_70872 = state_69551__$1;
(statearr_69554_70872[(2)] = null);

(statearr_69554_70872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (1))){
var state_69551__$1 = state_69551;
var statearr_69555_70874 = state_69551__$1;
(statearr_69555_70874[(2)] = null);

(statearr_69555_70874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (24))){
var inst_69530 = (state_69551[(7)]);
var inst_69539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_69530);
var state_69551__$1 = state_69551;
var statearr_69556_70875 = state_69551__$1;
(statearr_69556_70875[(2)] = inst_69539);

(statearr_69556_70875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (4))){
var inst_69482 = (state_69551[(8)]);
var inst_69482__$1 = (state_69551[(2)]);
var inst_69483 = (inst_69482__$1 == null);
var state_69551__$1 = (function (){var statearr_69557 = state_69551;
(statearr_69557[(8)] = inst_69482__$1);

return statearr_69557;
})();
if(cljs.core.truth_(inst_69483)){
var statearr_69558_70876 = state_69551__$1;
(statearr_69558_70876[(1)] = (5));

} else {
var statearr_69559_70877 = state_69551__$1;
(statearr_69559_70877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (15))){
var inst_69524 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
var statearr_69560_70887 = state_69551__$1;
(statearr_69560_70887[(2)] = inst_69524);

(statearr_69560_70887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (21))){
var inst_69544 = (state_69551[(2)]);
var state_69551__$1 = (function (){var statearr_69561 = state_69551;
(statearr_69561[(9)] = inst_69544);

return statearr_69561;
})();
var statearr_69562_70888 = state_69551__$1;
(statearr_69562_70888[(2)] = null);

(statearr_69562_70888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (13))){
var inst_69506 = (state_69551[(10)]);
var inst_69508 = cljs.core.chunked_seq_QMARK_(inst_69506);
var state_69551__$1 = state_69551;
if(inst_69508){
var statearr_69563_70895 = state_69551__$1;
(statearr_69563_70895[(1)] = (16));

} else {
var statearr_69564_70896 = state_69551__$1;
(statearr_69564_70896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (22))){
var inst_69536 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
if(cljs.core.truth_(inst_69536)){
var statearr_69565_70897 = state_69551__$1;
(statearr_69565_70897[(1)] = (23));

} else {
var statearr_69566_70898 = state_69551__$1;
(statearr_69566_70898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (6))){
var inst_69530 = (state_69551[(7)]);
var inst_69482 = (state_69551[(8)]);
var inst_69532 = (state_69551[(11)]);
var inst_69530__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_69482) : topic_fn.call(null,inst_69482));
var inst_69531 = cljs.core.deref(mults);
var inst_69532__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69531,inst_69530__$1);
var state_69551__$1 = (function (){var statearr_69567 = state_69551;
(statearr_69567[(7)] = inst_69530__$1);

(statearr_69567[(11)] = inst_69532__$1);

return statearr_69567;
})();
if(cljs.core.truth_(inst_69532__$1)){
var statearr_69568_70899 = state_69551__$1;
(statearr_69568_70899[(1)] = (19));

} else {
var statearr_69569_70900 = state_69551__$1;
(statearr_69569_70900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (25))){
var inst_69541 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
var statearr_69570_70901 = state_69551__$1;
(statearr_69570_70901[(2)] = inst_69541);

(statearr_69570_70901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (17))){
var inst_69506 = (state_69551[(10)]);
var inst_69515 = cljs.core.first(inst_69506);
var inst_69516 = cljs.core.async.muxch_STAR_(inst_69515);
var inst_69517 = cljs.core.async.close_BANG_(inst_69516);
var inst_69518 = cljs.core.next(inst_69506);
var inst_69492 = inst_69518;
var inst_69493 = null;
var inst_69494 = (0);
var inst_69495 = (0);
var state_69551__$1 = (function (){var statearr_69571 = state_69551;
(statearr_69571[(12)] = inst_69517);

(statearr_69571[(13)] = inst_69494);

(statearr_69571[(14)] = inst_69492);

(statearr_69571[(15)] = inst_69493);

(statearr_69571[(16)] = inst_69495);

return statearr_69571;
})();
var statearr_69572_70902 = state_69551__$1;
(statearr_69572_70902[(2)] = null);

(statearr_69572_70902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (3))){
var inst_69549 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69551__$1,inst_69549);
} else {
if((state_val_69552 === (12))){
var inst_69526 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
var statearr_69573_70909 = state_69551__$1;
(statearr_69573_70909[(2)] = inst_69526);

(statearr_69573_70909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (2))){
var state_69551__$1 = state_69551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69551__$1,(4),ch);
} else {
if((state_val_69552 === (23))){
var state_69551__$1 = state_69551;
var statearr_69574_70910 = state_69551__$1;
(statearr_69574_70910[(2)] = null);

(statearr_69574_70910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (19))){
var inst_69482 = (state_69551[(8)]);
var inst_69532 = (state_69551[(11)]);
var inst_69534 = cljs.core.async.muxch_STAR_(inst_69532);
var state_69551__$1 = state_69551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69551__$1,(22),inst_69534,inst_69482);
} else {
if((state_val_69552 === (11))){
var inst_69492 = (state_69551[(14)]);
var inst_69506 = (state_69551[(10)]);
var inst_69506__$1 = cljs.core.seq(inst_69492);
var state_69551__$1 = (function (){var statearr_69575 = state_69551;
(statearr_69575[(10)] = inst_69506__$1);

return statearr_69575;
})();
if(inst_69506__$1){
var statearr_69576_70911 = state_69551__$1;
(statearr_69576_70911[(1)] = (13));

} else {
var statearr_69577_70912 = state_69551__$1;
(statearr_69577_70912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (9))){
var inst_69528 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
var statearr_69578_70913 = state_69551__$1;
(statearr_69578_70913[(2)] = inst_69528);

(statearr_69578_70913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (5))){
var inst_69489 = cljs.core.deref(mults);
var inst_69490 = cljs.core.vals(inst_69489);
var inst_69491 = cljs.core.seq(inst_69490);
var inst_69492 = inst_69491;
var inst_69493 = null;
var inst_69494 = (0);
var inst_69495 = (0);
var state_69551__$1 = (function (){var statearr_69579 = state_69551;
(statearr_69579[(13)] = inst_69494);

(statearr_69579[(14)] = inst_69492);

(statearr_69579[(15)] = inst_69493);

(statearr_69579[(16)] = inst_69495);

return statearr_69579;
})();
var statearr_69580_70914 = state_69551__$1;
(statearr_69580_70914[(2)] = null);

(statearr_69580_70914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (14))){
var state_69551__$1 = state_69551;
var statearr_69584_70921 = state_69551__$1;
(statearr_69584_70921[(2)] = null);

(statearr_69584_70921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (16))){
var inst_69506 = (state_69551[(10)]);
var inst_69510 = cljs.core.chunk_first(inst_69506);
var inst_69511 = cljs.core.chunk_rest(inst_69506);
var inst_69512 = cljs.core.count(inst_69510);
var inst_69492 = inst_69511;
var inst_69493 = inst_69510;
var inst_69494 = inst_69512;
var inst_69495 = (0);
var state_69551__$1 = (function (){var statearr_69585 = state_69551;
(statearr_69585[(13)] = inst_69494);

(statearr_69585[(14)] = inst_69492);

(statearr_69585[(15)] = inst_69493);

(statearr_69585[(16)] = inst_69495);

return statearr_69585;
})();
var statearr_69586_70922 = state_69551__$1;
(statearr_69586_70922[(2)] = null);

(statearr_69586_70922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (10))){
var inst_69494 = (state_69551[(13)]);
var inst_69492 = (state_69551[(14)]);
var inst_69493 = (state_69551[(15)]);
var inst_69495 = (state_69551[(16)]);
var inst_69500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_69493,inst_69495);
var inst_69501 = cljs.core.async.muxch_STAR_(inst_69500);
var inst_69502 = cljs.core.async.close_BANG_(inst_69501);
var inst_69503 = (inst_69495 + (1));
var tmp69581 = inst_69494;
var tmp69582 = inst_69492;
var tmp69583 = inst_69493;
var inst_69492__$1 = tmp69582;
var inst_69493__$1 = tmp69583;
var inst_69494__$1 = tmp69581;
var inst_69495__$1 = inst_69503;
var state_69551__$1 = (function (){var statearr_69587 = state_69551;
(statearr_69587[(17)] = inst_69502);

(statearr_69587[(13)] = inst_69494__$1);

(statearr_69587[(14)] = inst_69492__$1);

(statearr_69587[(15)] = inst_69493__$1);

(statearr_69587[(16)] = inst_69495__$1);

return statearr_69587;
})();
var statearr_69588_70923 = state_69551__$1;
(statearr_69588_70923[(2)] = null);

(statearr_69588_70923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (18))){
var inst_69521 = (state_69551[(2)]);
var state_69551__$1 = state_69551;
var statearr_69589_70924 = state_69551__$1;
(statearr_69589_70924[(2)] = inst_69521);

(statearr_69589_70924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69552 === (8))){
var inst_69494 = (state_69551[(13)]);
var inst_69495 = (state_69551[(16)]);
var inst_69497 = (inst_69495 < inst_69494);
var inst_69498 = inst_69497;
var state_69551__$1 = state_69551;
if(cljs.core.truth_(inst_69498)){
var statearr_69590_70925 = state_69551__$1;
(statearr_69590_70925[(1)] = (10));

} else {
var statearr_69591_70926 = state_69551__$1;
(statearr_69591_70926[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69592[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69592[(1)] = (1));

return statearr_69592;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69551){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69551);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69593){if((e69593 instanceof Object)){
var ex__47443__auto__ = e69593;
var statearr_69594_70933 = state_69551;
(statearr_69594_70933[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70934 = state_69551;
state_69551 = G__70934;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69595 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69595[(6)] = c__47540__auto___70870);

return statearr_69595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__69597 = arguments.length;
switch (G__69597) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__69599 = arguments.length;
switch (G__69599) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__69601 = arguments.length;
switch (G__69601) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47540__auto___70939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69640){
var state_val_69641 = (state_69640[(1)]);
if((state_val_69641 === (7))){
var state_69640__$1 = state_69640;
var statearr_69642_70942 = state_69640__$1;
(statearr_69642_70942[(2)] = null);

(statearr_69642_70942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (1))){
var state_69640__$1 = state_69640;
var statearr_69643_70943 = state_69640__$1;
(statearr_69643_70943[(2)] = null);

(statearr_69643_70943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (4))){
var inst_69604 = (state_69640[(7)]);
var inst_69606 = (inst_69604 < cnt);
var state_69640__$1 = state_69640;
if(cljs.core.truth_(inst_69606)){
var statearr_69644_70944 = state_69640__$1;
(statearr_69644_70944[(1)] = (6));

} else {
var statearr_69645_70945 = state_69640__$1;
(statearr_69645_70945[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (15))){
var inst_69636 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69646_70946 = state_69640__$1;
(statearr_69646_70946[(2)] = inst_69636);

(statearr_69646_70946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (13))){
var inst_69629 = cljs.core.async.close_BANG_(out);
var state_69640__$1 = state_69640;
var statearr_69647_70952 = state_69640__$1;
(statearr_69647_70952[(2)] = inst_69629);

(statearr_69647_70952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (6))){
var state_69640__$1 = state_69640;
var statearr_69648_70953 = state_69640__$1;
(statearr_69648_70953[(2)] = null);

(statearr_69648_70953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (3))){
var inst_69638 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69640__$1,inst_69638);
} else {
if((state_val_69641 === (12))){
var inst_69626 = (state_69640[(8)]);
var inst_69626__$1 = (state_69640[(2)]);
var inst_69627 = cljs.core.some(cljs.core.nil_QMARK_,inst_69626__$1);
var state_69640__$1 = (function (){var statearr_69649 = state_69640;
(statearr_69649[(8)] = inst_69626__$1);

return statearr_69649;
})();
if(cljs.core.truth_(inst_69627)){
var statearr_69650_70956 = state_69640__$1;
(statearr_69650_70956[(1)] = (13));

} else {
var statearr_69651_70957 = state_69640__$1;
(statearr_69651_70957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (2))){
var inst_69603 = cljs.core.reset_BANG_(dctr,cnt);
var inst_69604 = (0);
var state_69640__$1 = (function (){var statearr_69652 = state_69640;
(statearr_69652[(9)] = inst_69603);

(statearr_69652[(7)] = inst_69604);

return statearr_69652;
})();
var statearr_69653_70958 = state_69640__$1;
(statearr_69653_70958[(2)] = null);

(statearr_69653_70958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (11))){
var inst_69604 = (state_69640[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69640,(10),Object,null,(9));
var inst_69613 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_69604) : chs__$1.call(null,inst_69604));
var inst_69614 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_69604) : done.call(null,inst_69604));
var inst_69615 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69613,inst_69614);
var state_69640__$1 = state_69640;
var statearr_69654_70960 = state_69640__$1;
(statearr_69654_70960[(2)] = inst_69615);


cljs.core.async.impl.ioc_helpers.process_exception(state_69640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (9))){
var inst_69604 = (state_69640[(7)]);
var inst_69617 = (state_69640[(2)]);
var inst_69618 = (inst_69604 + (1));
var inst_69604__$1 = inst_69618;
var state_69640__$1 = (function (){var statearr_69655 = state_69640;
(statearr_69655[(10)] = inst_69617);

(statearr_69655[(7)] = inst_69604__$1);

return statearr_69655;
})();
var statearr_69656_70962 = state_69640__$1;
(statearr_69656_70962[(2)] = null);

(statearr_69656_70962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (5))){
var inst_69624 = (state_69640[(2)]);
var state_69640__$1 = (function (){var statearr_69657 = state_69640;
(statearr_69657[(11)] = inst_69624);

return statearr_69657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69640__$1,(12),dchan);
} else {
if((state_val_69641 === (14))){
var inst_69626 = (state_69640[(8)]);
var inst_69631 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_69626);
var state_69640__$1 = state_69640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69640__$1,(16),out,inst_69631);
} else {
if((state_val_69641 === (16))){
var inst_69633 = (state_69640[(2)]);
var state_69640__$1 = (function (){var statearr_69658 = state_69640;
(statearr_69658[(12)] = inst_69633);

return statearr_69658;
})();
var statearr_69659_70965 = state_69640__$1;
(statearr_69659_70965[(2)] = null);

(statearr_69659_70965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (10))){
var inst_69608 = (state_69640[(2)]);
var inst_69609 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_69640__$1 = (function (){var statearr_69660 = state_69640;
(statearr_69660[(13)] = inst_69608);

return statearr_69660;
})();
var statearr_69661_70966 = state_69640__$1;
(statearr_69661_70966[(2)] = inst_69609);


cljs.core.async.impl.ioc_helpers.process_exception(state_69640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (8))){
var inst_69622 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69662_70967 = state_69640__$1;
(statearr_69662_70967[(2)] = inst_69622);

(statearr_69662_70967[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69663[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69663[(1)] = (1));

return statearr_69663;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69640){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69640);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69664){if((e69664 instanceof Object)){
var ex__47443__auto__ = e69664;
var statearr_69665_70971 = state_69640;
(statearr_69665_70971[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70972 = state_69640;
state_69640 = G__70972;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69666 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69666[(6)] = c__47540__auto___70939);

return statearr_69666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__69669 = arguments.length;
switch (G__69669) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47540__auto___70980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69701){
var state_val_69702 = (state_69701[(1)]);
if((state_val_69702 === (7))){
var inst_69681 = (state_69701[(7)]);
var inst_69680 = (state_69701[(8)]);
var inst_69680__$1 = (state_69701[(2)]);
var inst_69681__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69680__$1,(0),null);
var inst_69682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69680__$1,(1),null);
var inst_69683 = (inst_69681__$1 == null);
var state_69701__$1 = (function (){var statearr_69703 = state_69701;
(statearr_69703[(7)] = inst_69681__$1);

(statearr_69703[(9)] = inst_69682);

(statearr_69703[(8)] = inst_69680__$1);

return statearr_69703;
})();
if(cljs.core.truth_(inst_69683)){
var statearr_69704_70985 = state_69701__$1;
(statearr_69704_70985[(1)] = (8));

} else {
var statearr_69705_70986 = state_69701__$1;
(statearr_69705_70986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (1))){
var inst_69670 = cljs.core.vec(chs);
var inst_69671 = inst_69670;
var state_69701__$1 = (function (){var statearr_69706 = state_69701;
(statearr_69706[(10)] = inst_69671);

return statearr_69706;
})();
var statearr_69707_70988 = state_69701__$1;
(statearr_69707_70988[(2)] = null);

(statearr_69707_70988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (4))){
var inst_69671 = (state_69701[(10)]);
var state_69701__$1 = state_69701;
return cljs.core.async.ioc_alts_BANG_(state_69701__$1,(7),inst_69671);
} else {
if((state_val_69702 === (6))){
var inst_69697 = (state_69701[(2)]);
var state_69701__$1 = state_69701;
var statearr_69708_70990 = state_69701__$1;
(statearr_69708_70990[(2)] = inst_69697);

(statearr_69708_70990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (3))){
var inst_69699 = (state_69701[(2)]);
var state_69701__$1 = state_69701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69701__$1,inst_69699);
} else {
if((state_val_69702 === (2))){
var inst_69671 = (state_69701[(10)]);
var inst_69673 = cljs.core.count(inst_69671);
var inst_69674 = (inst_69673 > (0));
var state_69701__$1 = state_69701;
if(cljs.core.truth_(inst_69674)){
var statearr_69710_70992 = state_69701__$1;
(statearr_69710_70992[(1)] = (4));

} else {
var statearr_69711_70993 = state_69701__$1;
(statearr_69711_70993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (11))){
var inst_69671 = (state_69701[(10)]);
var inst_69690 = (state_69701[(2)]);
var tmp69709 = inst_69671;
var inst_69671__$1 = tmp69709;
var state_69701__$1 = (function (){var statearr_69712 = state_69701;
(statearr_69712[(11)] = inst_69690);

(statearr_69712[(10)] = inst_69671__$1);

return statearr_69712;
})();
var statearr_69713_70994 = state_69701__$1;
(statearr_69713_70994[(2)] = null);

(statearr_69713_70994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (9))){
var inst_69681 = (state_69701[(7)]);
var state_69701__$1 = state_69701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69701__$1,(11),out,inst_69681);
} else {
if((state_val_69702 === (5))){
var inst_69695 = cljs.core.async.close_BANG_(out);
var state_69701__$1 = state_69701;
var statearr_69714_70995 = state_69701__$1;
(statearr_69714_70995[(2)] = inst_69695);

(statearr_69714_70995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (10))){
var inst_69693 = (state_69701[(2)]);
var state_69701__$1 = state_69701;
var statearr_69715_70996 = state_69701__$1;
(statearr_69715_70996[(2)] = inst_69693);

(statearr_69715_70996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (8))){
var inst_69681 = (state_69701[(7)]);
var inst_69682 = (state_69701[(9)]);
var inst_69680 = (state_69701[(8)]);
var inst_69671 = (state_69701[(10)]);
var inst_69685 = (function (){var cs = inst_69671;
var vec__69676 = inst_69680;
var v = inst_69681;
var c = inst_69682;
return (function (p1__69667_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__69667_SHARP_);
});
})();
var inst_69686 = cljs.core.filterv(inst_69685,inst_69671);
var inst_69671__$1 = inst_69686;
var state_69701__$1 = (function (){var statearr_69716 = state_69701;
(statearr_69716[(10)] = inst_69671__$1);

return statearr_69716;
})();
var statearr_69717_70997 = state_69701__$1;
(statearr_69717_70997[(2)] = null);

(statearr_69717_70997[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69718 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69718[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69718[(1)] = (1));

return statearr_69718;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69701){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69701);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69719){if((e69719 instanceof Object)){
var ex__47443__auto__ = e69719;
var statearr_69720_70998 = state_69701;
(statearr_69720_70998[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70999 = state_69701;
state_69701 = G__70999;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69721 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69721[(6)] = c__47540__auto___70980);

return statearr_69721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__69723 = arguments.length;
switch (G__69723) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47540__auto___71008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69747){
var state_val_69748 = (state_69747[(1)]);
if((state_val_69748 === (7))){
var inst_69729 = (state_69747[(7)]);
var inst_69729__$1 = (state_69747[(2)]);
var inst_69730 = (inst_69729__$1 == null);
var inst_69731 = cljs.core.not(inst_69730);
var state_69747__$1 = (function (){var statearr_69749 = state_69747;
(statearr_69749[(7)] = inst_69729__$1);

return statearr_69749;
})();
if(inst_69731){
var statearr_69750_71010 = state_69747__$1;
(statearr_69750_71010[(1)] = (8));

} else {
var statearr_69751_71011 = state_69747__$1;
(statearr_69751_71011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (1))){
var inst_69724 = (0);
var state_69747__$1 = (function (){var statearr_69752 = state_69747;
(statearr_69752[(8)] = inst_69724);

return statearr_69752;
})();
var statearr_69753_71013 = state_69747__$1;
(statearr_69753_71013[(2)] = null);

(statearr_69753_71013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (4))){
var state_69747__$1 = state_69747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69747__$1,(7),ch);
} else {
if((state_val_69748 === (6))){
var inst_69742 = (state_69747[(2)]);
var state_69747__$1 = state_69747;
var statearr_69754_71014 = state_69747__$1;
(statearr_69754_71014[(2)] = inst_69742);

(statearr_69754_71014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (3))){
var inst_69744 = (state_69747[(2)]);
var inst_69745 = cljs.core.async.close_BANG_(out);
var state_69747__$1 = (function (){var statearr_69755 = state_69747;
(statearr_69755[(9)] = inst_69744);

return statearr_69755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69747__$1,inst_69745);
} else {
if((state_val_69748 === (2))){
var inst_69724 = (state_69747[(8)]);
var inst_69726 = (inst_69724 < n);
var state_69747__$1 = state_69747;
if(cljs.core.truth_(inst_69726)){
var statearr_69756_71016 = state_69747__$1;
(statearr_69756_71016[(1)] = (4));

} else {
var statearr_69757_71017 = state_69747__$1;
(statearr_69757_71017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (11))){
var inst_69724 = (state_69747[(8)]);
var inst_69734 = (state_69747[(2)]);
var inst_69735 = (inst_69724 + (1));
var inst_69724__$1 = inst_69735;
var state_69747__$1 = (function (){var statearr_69758 = state_69747;
(statearr_69758[(8)] = inst_69724__$1);

(statearr_69758[(10)] = inst_69734);

return statearr_69758;
})();
var statearr_69759_71018 = state_69747__$1;
(statearr_69759_71018[(2)] = null);

(statearr_69759_71018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (9))){
var state_69747__$1 = state_69747;
var statearr_69760_71019 = state_69747__$1;
(statearr_69760_71019[(2)] = null);

(statearr_69760_71019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (5))){
var state_69747__$1 = state_69747;
var statearr_69761_71020 = state_69747__$1;
(statearr_69761_71020[(2)] = null);

(statearr_69761_71020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (10))){
var inst_69739 = (state_69747[(2)]);
var state_69747__$1 = state_69747;
var statearr_69762_71021 = state_69747__$1;
(statearr_69762_71021[(2)] = inst_69739);

(statearr_69762_71021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69748 === (8))){
var inst_69729 = (state_69747[(7)]);
var state_69747__$1 = state_69747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69747__$1,(11),out,inst_69729);
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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69763[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69763[(1)] = (1));

return statearr_69763;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69747){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69747);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69764){if((e69764 instanceof Object)){
var ex__47443__auto__ = e69764;
var statearr_69765_71026 = state_69747;
(statearr_69765_71026[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71027 = state_69747;
state_69747 = G__71027;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69766 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69766[(6)] = c__47540__auto___71008);

return statearr_69766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69768 = (function (f,ch,meta69769){
this.f = f;
this.ch = ch;
this.meta69769 = meta69769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69770,meta69769__$1){
var self__ = this;
var _69770__$1 = this;
return (new cljs.core.async.t_cljs$core$async69768(self__.f,self__.ch,meta69769__$1));
}));

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69770){
var self__ = this;
var _69770__$1 = this;
return self__.meta69769;
}));

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69771 = (function (f,ch,meta69769,_,fn1,meta69772){
this.f = f;
this.ch = ch;
this.meta69769 = meta69769;
this._ = _;
this.fn1 = fn1;
this.meta69772 = meta69772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69773,meta69772__$1){
var self__ = this;
var _69773__$1 = this;
return (new cljs.core.async.t_cljs$core$async69771(self__.f,self__.ch,self__.meta69769,self__._,self__.fn1,meta69772__$1));
}));

(cljs.core.async.t_cljs$core$async69771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69773){
var self__ = this;
var _69773__$1 = this;
return self__.meta69772;
}));

(cljs.core.async.t_cljs$core$async69771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async69771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__69767_SHARP_){
var G__69774 = (((p1__69767_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__69767_SHARP_) : self__.f.call(null,p1__69767_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__69774) : f1.call(null,G__69774));
});
}));

(cljs.core.async.t_cljs$core$async69771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69769","meta69769",-399193815,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async69768","cljs.core.async/t_cljs$core$async69768",260790361,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta69772","meta69772",-1297788636,null)], null);
}));

(cljs.core.async.t_cljs$core$async69771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69771");

(cljs.core.async.t_cljs$core$async69771.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69771.
 */
cljs.core.async.__GT_t_cljs$core$async69771 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69771(f__$1,ch__$1,meta69769__$1,___$2,fn1__$1,meta69772){
return (new cljs.core.async.t_cljs$core$async69771(f__$1,ch__$1,meta69769__$1,___$2,fn1__$1,meta69772));
});

}

return (new cljs.core.async.t_cljs$core$async69771(self__.f,self__.ch,self__.meta69769,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__69775 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__69775) : self__.f.call(null,G__69775));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async69768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69769","meta69769",-399193815,null)], null);
}));

(cljs.core.async.t_cljs$core$async69768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69768");

(cljs.core.async.t_cljs$core$async69768.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69768.
 */
cljs.core.async.__GT_t_cljs$core$async69768 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69768(f__$1,ch__$1,meta69769){
return (new cljs.core.async.t_cljs$core$async69768(f__$1,ch__$1,meta69769));
});

}

return (new cljs.core.async.t_cljs$core$async69768(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69776 = (function (f,ch,meta69777){
this.f = f;
this.ch = ch;
this.meta69777 = meta69777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69778,meta69777__$1){
var self__ = this;
var _69778__$1 = this;
return (new cljs.core.async.t_cljs$core$async69776(self__.f,self__.ch,meta69777__$1));
}));

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69778){
var self__ = this;
var _69778__$1 = this;
return self__.meta69777;
}));

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async69776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69777","meta69777",1287183153,null)], null);
}));

(cljs.core.async.t_cljs$core$async69776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69776");

(cljs.core.async.t_cljs$core$async69776.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69776.
 */
cljs.core.async.__GT_t_cljs$core$async69776 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async69776(f__$1,ch__$1,meta69777){
return (new cljs.core.async.t_cljs$core$async69776(f__$1,ch__$1,meta69777));
});

}

return (new cljs.core.async.t_cljs$core$async69776(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69779 = (function (p,ch,meta69780){
this.p = p;
this.ch = ch;
this.meta69780 = meta69780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69781,meta69780__$1){
var self__ = this;
var _69781__$1 = this;
return (new cljs.core.async.t_cljs$core$async69779(self__.p,self__.ch,meta69780__$1));
}));

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69781){
var self__ = this;
var _69781__$1 = this;
return self__.meta69780;
}));

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async69779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69780","meta69780",-843301963,null)], null);
}));

(cljs.core.async.t_cljs$core$async69779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69779");

(cljs.core.async.t_cljs$core$async69779.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async69779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69779.
 */
cljs.core.async.__GT_t_cljs$core$async69779 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async69779(p__$1,ch__$1,meta69780){
return (new cljs.core.async.t_cljs$core$async69779(p__$1,ch__$1,meta69780));
});

}

return (new cljs.core.async.t_cljs$core$async69779(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__69783 = arguments.length;
switch (G__69783) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47540__auto___71087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69804){
var state_val_69805 = (state_69804[(1)]);
if((state_val_69805 === (7))){
var inst_69800 = (state_69804[(2)]);
var state_69804__$1 = state_69804;
var statearr_69806_71088 = state_69804__$1;
(statearr_69806_71088[(2)] = inst_69800);

(statearr_69806_71088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (1))){
var state_69804__$1 = state_69804;
var statearr_69807_71090 = state_69804__$1;
(statearr_69807_71090[(2)] = null);

(statearr_69807_71090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (4))){
var inst_69786 = (state_69804[(7)]);
var inst_69786__$1 = (state_69804[(2)]);
var inst_69787 = (inst_69786__$1 == null);
var state_69804__$1 = (function (){var statearr_69808 = state_69804;
(statearr_69808[(7)] = inst_69786__$1);

return statearr_69808;
})();
if(cljs.core.truth_(inst_69787)){
var statearr_69809_71092 = state_69804__$1;
(statearr_69809_71092[(1)] = (5));

} else {
var statearr_69810_71093 = state_69804__$1;
(statearr_69810_71093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (6))){
var inst_69786 = (state_69804[(7)]);
var inst_69791 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_69786) : p.call(null,inst_69786));
var state_69804__$1 = state_69804;
if(cljs.core.truth_(inst_69791)){
var statearr_69811_71094 = state_69804__$1;
(statearr_69811_71094[(1)] = (8));

} else {
var statearr_69812_71095 = state_69804__$1;
(statearr_69812_71095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (3))){
var inst_69802 = (state_69804[(2)]);
var state_69804__$1 = state_69804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69804__$1,inst_69802);
} else {
if((state_val_69805 === (2))){
var state_69804__$1 = state_69804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69804__$1,(4),ch);
} else {
if((state_val_69805 === (11))){
var inst_69794 = (state_69804[(2)]);
var state_69804__$1 = state_69804;
var statearr_69813_71098 = state_69804__$1;
(statearr_69813_71098[(2)] = inst_69794);

(statearr_69813_71098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (9))){
var state_69804__$1 = state_69804;
var statearr_69814_71099 = state_69804__$1;
(statearr_69814_71099[(2)] = null);

(statearr_69814_71099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (5))){
var inst_69789 = cljs.core.async.close_BANG_(out);
var state_69804__$1 = state_69804;
var statearr_69815_71103 = state_69804__$1;
(statearr_69815_71103[(2)] = inst_69789);

(statearr_69815_71103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (10))){
var inst_69797 = (state_69804[(2)]);
var state_69804__$1 = (function (){var statearr_69816 = state_69804;
(statearr_69816[(8)] = inst_69797);

return statearr_69816;
})();
var statearr_69817_71104 = state_69804__$1;
(statearr_69817_71104[(2)] = null);

(statearr_69817_71104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69805 === (8))){
var inst_69786 = (state_69804[(7)]);
var state_69804__$1 = state_69804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69804__$1,(11),out,inst_69786);
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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69818 = [null,null,null,null,null,null,null,null,null];
(statearr_69818[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69818[(1)] = (1));

return statearr_69818;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69804){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69804);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69819){if((e69819 instanceof Object)){
var ex__47443__auto__ = e69819;
var statearr_69820_71108 = state_69804;
(statearr_69820_71108[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71109 = state_69804;
state_69804 = G__71109;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69821 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69821[(6)] = c__47540__auto___71087);

return statearr_69821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__69823 = arguments.length;
switch (G__69823) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47540__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69885){
var state_val_69886 = (state_69885[(1)]);
if((state_val_69886 === (7))){
var inst_69881 = (state_69885[(2)]);
var state_69885__$1 = state_69885;
var statearr_69887_71151 = state_69885__$1;
(statearr_69887_71151[(2)] = inst_69881);

(statearr_69887_71151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (20))){
var inst_69851 = (state_69885[(7)]);
var inst_69862 = (state_69885[(2)]);
var inst_69863 = cljs.core.next(inst_69851);
var inst_69837 = inst_69863;
var inst_69838 = null;
var inst_69839 = (0);
var inst_69840 = (0);
var state_69885__$1 = (function (){var statearr_69888 = state_69885;
(statearr_69888[(8)] = inst_69862);

(statearr_69888[(9)] = inst_69837);

(statearr_69888[(10)] = inst_69840);

(statearr_69888[(11)] = inst_69838);

(statearr_69888[(12)] = inst_69839);

return statearr_69888;
})();
var statearr_69889_71167 = state_69885__$1;
(statearr_69889_71167[(2)] = null);

(statearr_69889_71167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (1))){
var state_69885__$1 = state_69885;
var statearr_69890_71173 = state_69885__$1;
(statearr_69890_71173[(2)] = null);

(statearr_69890_71173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (4))){
var inst_69826 = (state_69885[(13)]);
var inst_69826__$1 = (state_69885[(2)]);
var inst_69827 = (inst_69826__$1 == null);
var state_69885__$1 = (function (){var statearr_69891 = state_69885;
(statearr_69891[(13)] = inst_69826__$1);

return statearr_69891;
})();
if(cljs.core.truth_(inst_69827)){
var statearr_69892_71181 = state_69885__$1;
(statearr_69892_71181[(1)] = (5));

} else {
var statearr_69893_71186 = state_69885__$1;
(statearr_69893_71186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (15))){
var state_69885__$1 = state_69885;
var statearr_69897_71188 = state_69885__$1;
(statearr_69897_71188[(2)] = null);

(statearr_69897_71188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (21))){
var state_69885__$1 = state_69885;
var statearr_69898_71197 = state_69885__$1;
(statearr_69898_71197[(2)] = null);

(statearr_69898_71197[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (13))){
var inst_69837 = (state_69885[(9)]);
var inst_69840 = (state_69885[(10)]);
var inst_69838 = (state_69885[(11)]);
var inst_69839 = (state_69885[(12)]);
var inst_69847 = (state_69885[(2)]);
var inst_69848 = (inst_69840 + (1));
var tmp69894 = inst_69837;
var tmp69895 = inst_69838;
var tmp69896 = inst_69839;
var inst_69837__$1 = tmp69894;
var inst_69838__$1 = tmp69895;
var inst_69839__$1 = tmp69896;
var inst_69840__$1 = inst_69848;
var state_69885__$1 = (function (){var statearr_69899 = state_69885;
(statearr_69899[(14)] = inst_69847);

(statearr_69899[(9)] = inst_69837__$1);

(statearr_69899[(10)] = inst_69840__$1);

(statearr_69899[(11)] = inst_69838__$1);

(statearr_69899[(12)] = inst_69839__$1);

return statearr_69899;
})();
var statearr_69900_71206 = state_69885__$1;
(statearr_69900_71206[(2)] = null);

(statearr_69900_71206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (22))){
var state_69885__$1 = state_69885;
var statearr_69901_71207 = state_69885__$1;
(statearr_69901_71207[(2)] = null);

(statearr_69901_71207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (6))){
var inst_69826 = (state_69885[(13)]);
var inst_69835 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_69826) : f.call(null,inst_69826));
var inst_69836 = cljs.core.seq(inst_69835);
var inst_69837 = inst_69836;
var inst_69838 = null;
var inst_69839 = (0);
var inst_69840 = (0);
var state_69885__$1 = (function (){var statearr_69902 = state_69885;
(statearr_69902[(9)] = inst_69837);

(statearr_69902[(10)] = inst_69840);

(statearr_69902[(11)] = inst_69838);

(statearr_69902[(12)] = inst_69839);

return statearr_69902;
})();
var statearr_69903_71208 = state_69885__$1;
(statearr_69903_71208[(2)] = null);

(statearr_69903_71208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (17))){
var inst_69851 = (state_69885[(7)]);
var inst_69855 = cljs.core.chunk_first(inst_69851);
var inst_69856 = cljs.core.chunk_rest(inst_69851);
var inst_69857 = cljs.core.count(inst_69855);
var inst_69837 = inst_69856;
var inst_69838 = inst_69855;
var inst_69839 = inst_69857;
var inst_69840 = (0);
var state_69885__$1 = (function (){var statearr_69904 = state_69885;
(statearr_69904[(9)] = inst_69837);

(statearr_69904[(10)] = inst_69840);

(statearr_69904[(11)] = inst_69838);

(statearr_69904[(12)] = inst_69839);

return statearr_69904;
})();
var statearr_69905_71217 = state_69885__$1;
(statearr_69905_71217[(2)] = null);

(statearr_69905_71217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (3))){
var inst_69883 = (state_69885[(2)]);
var state_69885__$1 = state_69885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69885__$1,inst_69883);
} else {
if((state_val_69886 === (12))){
var inst_69871 = (state_69885[(2)]);
var state_69885__$1 = state_69885;
var statearr_69906_71226 = state_69885__$1;
(statearr_69906_71226[(2)] = inst_69871);

(statearr_69906_71226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (2))){
var state_69885__$1 = state_69885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69885__$1,(4),in$);
} else {
if((state_val_69886 === (23))){
var inst_69879 = (state_69885[(2)]);
var state_69885__$1 = state_69885;
var statearr_69907_71228 = state_69885__$1;
(statearr_69907_71228[(2)] = inst_69879);

(statearr_69907_71228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (19))){
var inst_69866 = (state_69885[(2)]);
var state_69885__$1 = state_69885;
var statearr_69908_71229 = state_69885__$1;
(statearr_69908_71229[(2)] = inst_69866);

(statearr_69908_71229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (11))){
var inst_69837 = (state_69885[(9)]);
var inst_69851 = (state_69885[(7)]);
var inst_69851__$1 = cljs.core.seq(inst_69837);
var state_69885__$1 = (function (){var statearr_69909 = state_69885;
(statearr_69909[(7)] = inst_69851__$1);

return statearr_69909;
})();
if(inst_69851__$1){
var statearr_69910_71230 = state_69885__$1;
(statearr_69910_71230[(1)] = (14));

} else {
var statearr_69911_71232 = state_69885__$1;
(statearr_69911_71232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (9))){
var inst_69873 = (state_69885[(2)]);
var inst_69874 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_69885__$1 = (function (){var statearr_69912 = state_69885;
(statearr_69912[(15)] = inst_69873);

return statearr_69912;
})();
if(cljs.core.truth_(inst_69874)){
var statearr_69913_71233 = state_69885__$1;
(statearr_69913_71233[(1)] = (21));

} else {
var statearr_69914_71234 = state_69885__$1;
(statearr_69914_71234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (5))){
var inst_69829 = cljs.core.async.close_BANG_(out);
var state_69885__$1 = state_69885;
var statearr_69915_71238 = state_69885__$1;
(statearr_69915_71238[(2)] = inst_69829);

(statearr_69915_71238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (14))){
var inst_69851 = (state_69885[(7)]);
var inst_69853 = cljs.core.chunked_seq_QMARK_(inst_69851);
var state_69885__$1 = state_69885;
if(inst_69853){
var statearr_69916_71239 = state_69885__$1;
(statearr_69916_71239[(1)] = (17));

} else {
var statearr_69917_71240 = state_69885__$1;
(statearr_69917_71240[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (16))){
var inst_69869 = (state_69885[(2)]);
var state_69885__$1 = state_69885;
var statearr_69918_71241 = state_69885__$1;
(statearr_69918_71241[(2)] = inst_69869);

(statearr_69918_71241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69886 === (10))){
var inst_69840 = (state_69885[(10)]);
var inst_69838 = (state_69885[(11)]);
var inst_69845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_69838,inst_69840);
var state_69885__$1 = state_69885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69885__$1,(13),out,inst_69845);
} else {
if((state_val_69886 === (18))){
var inst_69851 = (state_69885[(7)]);
var inst_69860 = cljs.core.first(inst_69851);
var state_69885__$1 = state_69885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69885__$1,(20),out,inst_69860);
} else {
if((state_val_69886 === (8))){
var inst_69840 = (state_69885[(10)]);
var inst_69839 = (state_69885[(12)]);
var inst_69842 = (inst_69840 < inst_69839);
var inst_69843 = inst_69842;
var state_69885__$1 = state_69885;
if(cljs.core.truth_(inst_69843)){
var statearr_69919_71243 = state_69885__$1;
(statearr_69919_71243[(1)] = (10));

} else {
var statearr_69920_71244 = state_69885__$1;
(statearr_69920_71244[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47440__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47440__auto____0 = (function (){
var statearr_69921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69921[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47440__auto__);

(statearr_69921[(1)] = (1));

return statearr_69921;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47440__auto____1 = (function (state_69885){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69885);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69922){if((e69922 instanceof Object)){
var ex__47443__auto__ = e69922;
var statearr_69923_71255 = state_69885;
(statearr_69923_71255[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71261 = state_69885;
state_69885 = G__71261;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47440__auto__ = function(state_69885){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47440__auto____1.call(this,state_69885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47440__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47440__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69924 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69924[(6)] = c__47540__auto__);

return statearr_69924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));

return c__47540__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__69926 = arguments.length;
switch (G__69926) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__69928 = arguments.length;
switch (G__69928) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__69930 = arguments.length;
switch (G__69930) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47540__auto___71306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_69954){
var state_val_69955 = (state_69954[(1)]);
if((state_val_69955 === (7))){
var inst_69949 = (state_69954[(2)]);
var state_69954__$1 = state_69954;
var statearr_69956_71307 = state_69954__$1;
(statearr_69956_71307[(2)] = inst_69949);

(statearr_69956_71307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (1))){
var inst_69931 = null;
var state_69954__$1 = (function (){var statearr_69957 = state_69954;
(statearr_69957[(7)] = inst_69931);

return statearr_69957;
})();
var statearr_69958_71308 = state_69954__$1;
(statearr_69958_71308[(2)] = null);

(statearr_69958_71308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (4))){
var inst_69934 = (state_69954[(8)]);
var inst_69934__$1 = (state_69954[(2)]);
var inst_69935 = (inst_69934__$1 == null);
var inst_69936 = cljs.core.not(inst_69935);
var state_69954__$1 = (function (){var statearr_69959 = state_69954;
(statearr_69959[(8)] = inst_69934__$1);

return statearr_69959;
})();
if(inst_69936){
var statearr_69960_71316 = state_69954__$1;
(statearr_69960_71316[(1)] = (5));

} else {
var statearr_69961_71317 = state_69954__$1;
(statearr_69961_71317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (6))){
var state_69954__$1 = state_69954;
var statearr_69962_71323 = state_69954__$1;
(statearr_69962_71323[(2)] = null);

(statearr_69962_71323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (3))){
var inst_69951 = (state_69954[(2)]);
var inst_69952 = cljs.core.async.close_BANG_(out);
var state_69954__$1 = (function (){var statearr_69963 = state_69954;
(statearr_69963[(9)] = inst_69951);

return statearr_69963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69954__$1,inst_69952);
} else {
if((state_val_69955 === (2))){
var state_69954__$1 = state_69954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69954__$1,(4),ch);
} else {
if((state_val_69955 === (11))){
var inst_69934 = (state_69954[(8)]);
var inst_69943 = (state_69954[(2)]);
var inst_69931 = inst_69934;
var state_69954__$1 = (function (){var statearr_69964 = state_69954;
(statearr_69964[(10)] = inst_69943);

(statearr_69964[(7)] = inst_69931);

return statearr_69964;
})();
var statearr_69965_71329 = state_69954__$1;
(statearr_69965_71329[(2)] = null);

(statearr_69965_71329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (9))){
var inst_69934 = (state_69954[(8)]);
var state_69954__$1 = state_69954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69954__$1,(11),out,inst_69934);
} else {
if((state_val_69955 === (5))){
var inst_69934 = (state_69954[(8)]);
var inst_69931 = (state_69954[(7)]);
var inst_69938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69934,inst_69931);
var state_69954__$1 = state_69954;
if(inst_69938){
var statearr_69967_71337 = state_69954__$1;
(statearr_69967_71337[(1)] = (8));

} else {
var statearr_69968_71338 = state_69954__$1;
(statearr_69968_71338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (10))){
var inst_69946 = (state_69954[(2)]);
var state_69954__$1 = state_69954;
var statearr_69969_71339 = state_69954__$1;
(statearr_69969_71339[(2)] = inst_69946);

(statearr_69969_71339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69955 === (8))){
var inst_69931 = (state_69954[(7)]);
var tmp69966 = inst_69931;
var inst_69931__$1 = tmp69966;
var state_69954__$1 = (function (){var statearr_69970 = state_69954;
(statearr_69970[(7)] = inst_69931__$1);

return statearr_69970;
})();
var statearr_69971_71340 = state_69954__$1;
(statearr_69971_71340[(2)] = null);

(statearr_69971_71340[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_69972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69972[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_69972[(1)] = (1));

return statearr_69972;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_69954){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_69954);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e69973){if((e69973 instanceof Object)){
var ex__47443__auto__ = e69973;
var statearr_69974_71344 = state_69954;
(statearr_69974_71344[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71345 = state_69954;
state_69954 = G__71345;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_69954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_69954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_69975 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_69975[(6)] = c__47540__auto___71306);

return statearr_69975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__69977 = arguments.length;
switch (G__69977) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47540__auto___71350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_70015){
var state_val_70016 = (state_70015[(1)]);
if((state_val_70016 === (7))){
var inst_70011 = (state_70015[(2)]);
var state_70015__$1 = state_70015;
var statearr_70017_71351 = state_70015__$1;
(statearr_70017_71351[(2)] = inst_70011);

(statearr_70017_71351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (1))){
var inst_69978 = (new Array(n));
var inst_69979 = inst_69978;
var inst_69980 = (0);
var state_70015__$1 = (function (){var statearr_70018 = state_70015;
(statearr_70018[(7)] = inst_69980);

(statearr_70018[(8)] = inst_69979);

return statearr_70018;
})();
var statearr_70019_71356 = state_70015__$1;
(statearr_70019_71356[(2)] = null);

(statearr_70019_71356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (4))){
var inst_69983 = (state_70015[(9)]);
var inst_69983__$1 = (state_70015[(2)]);
var inst_69984 = (inst_69983__$1 == null);
var inst_69985 = cljs.core.not(inst_69984);
var state_70015__$1 = (function (){var statearr_70020 = state_70015;
(statearr_70020[(9)] = inst_69983__$1);

return statearr_70020;
})();
if(inst_69985){
var statearr_70021_71359 = state_70015__$1;
(statearr_70021_71359[(1)] = (5));

} else {
var statearr_70022_71360 = state_70015__$1;
(statearr_70022_71360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (15))){
var inst_70005 = (state_70015[(2)]);
var state_70015__$1 = state_70015;
var statearr_70023_71364 = state_70015__$1;
(statearr_70023_71364[(2)] = inst_70005);

(statearr_70023_71364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (13))){
var state_70015__$1 = state_70015;
var statearr_70024_71371 = state_70015__$1;
(statearr_70024_71371[(2)] = null);

(statearr_70024_71371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (6))){
var inst_69980 = (state_70015[(7)]);
var inst_70001 = (inst_69980 > (0));
var state_70015__$1 = state_70015;
if(cljs.core.truth_(inst_70001)){
var statearr_70025_71376 = state_70015__$1;
(statearr_70025_71376[(1)] = (12));

} else {
var statearr_70026_71377 = state_70015__$1;
(statearr_70026_71377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (3))){
var inst_70013 = (state_70015[(2)]);
var state_70015__$1 = state_70015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70015__$1,inst_70013);
} else {
if((state_val_70016 === (12))){
var inst_69979 = (state_70015[(8)]);
var inst_70003 = cljs.core.vec(inst_69979);
var state_70015__$1 = state_70015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70015__$1,(15),out,inst_70003);
} else {
if((state_val_70016 === (2))){
var state_70015__$1 = state_70015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70015__$1,(4),ch);
} else {
if((state_val_70016 === (11))){
var inst_69995 = (state_70015[(2)]);
var inst_69996 = (new Array(n));
var inst_69979 = inst_69996;
var inst_69980 = (0);
var state_70015__$1 = (function (){var statearr_70027 = state_70015;
(statearr_70027[(10)] = inst_69995);

(statearr_70027[(7)] = inst_69980);

(statearr_70027[(8)] = inst_69979);

return statearr_70027;
})();
var statearr_70028_71390 = state_70015__$1;
(statearr_70028_71390[(2)] = null);

(statearr_70028_71390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (9))){
var inst_69979 = (state_70015[(8)]);
var inst_69993 = cljs.core.vec(inst_69979);
var state_70015__$1 = state_70015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70015__$1,(11),out,inst_69993);
} else {
if((state_val_70016 === (5))){
var inst_69988 = (state_70015[(11)]);
var inst_69980 = (state_70015[(7)]);
var inst_69983 = (state_70015[(9)]);
var inst_69979 = (state_70015[(8)]);
var inst_69987 = (inst_69979[inst_69980] = inst_69983);
var inst_69988__$1 = (inst_69980 + (1));
var inst_69989 = (inst_69988__$1 < n);
var state_70015__$1 = (function (){var statearr_70029 = state_70015;
(statearr_70029[(11)] = inst_69988__$1);

(statearr_70029[(12)] = inst_69987);

return statearr_70029;
})();
if(cljs.core.truth_(inst_69989)){
var statearr_70030_71400 = state_70015__$1;
(statearr_70030_71400[(1)] = (8));

} else {
var statearr_70031_71401 = state_70015__$1;
(statearr_70031_71401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (14))){
var inst_70008 = (state_70015[(2)]);
var inst_70009 = cljs.core.async.close_BANG_(out);
var state_70015__$1 = (function (){var statearr_70033 = state_70015;
(statearr_70033[(13)] = inst_70008);

return statearr_70033;
})();
var statearr_70034_71407 = state_70015__$1;
(statearr_70034_71407[(2)] = inst_70009);

(statearr_70034_71407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (10))){
var inst_69999 = (state_70015[(2)]);
var state_70015__$1 = state_70015;
var statearr_70035_71408 = state_70015__$1;
(statearr_70035_71408[(2)] = inst_69999);

(statearr_70035_71408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70016 === (8))){
var inst_69988 = (state_70015[(11)]);
var inst_69979 = (state_70015[(8)]);
var tmp70032 = inst_69979;
var inst_69979__$1 = tmp70032;
var inst_69980 = inst_69988;
var state_70015__$1 = (function (){var statearr_70036 = state_70015;
(statearr_70036[(7)] = inst_69980);

(statearr_70036[(8)] = inst_69979__$1);

return statearr_70036;
})();
var statearr_70037_71413 = state_70015__$1;
(statearr_70037_71413[(2)] = null);

(statearr_70037_71413[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_70038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70038[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_70038[(1)] = (1));

return statearr_70038;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_70015){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_70015);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e70039){if((e70039 instanceof Object)){
var ex__47443__auto__ = e70039;
var statearr_70040_71419 = state_70015;
(statearr_70040_71419[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71421 = state_70015;
state_70015 = G__71421;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_70015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_70015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_70041 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_70041[(6)] = c__47540__auto___71350);

return statearr_70041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__70043 = arguments.length;
switch (G__70043) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47540__auto___71430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_70085){
var state_val_70086 = (state_70085[(1)]);
if((state_val_70086 === (7))){
var inst_70081 = (state_70085[(2)]);
var state_70085__$1 = state_70085;
var statearr_70087_71432 = state_70085__$1;
(statearr_70087_71432[(2)] = inst_70081);

(statearr_70087_71432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (1))){
var inst_70044 = [];
var inst_70045 = inst_70044;
var inst_70046 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70085__$1 = (function (){var statearr_70088 = state_70085;
(statearr_70088[(7)] = inst_70045);

(statearr_70088[(8)] = inst_70046);

return statearr_70088;
})();
var statearr_70089_71438 = state_70085__$1;
(statearr_70089_71438[(2)] = null);

(statearr_70089_71438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (4))){
var inst_70049 = (state_70085[(9)]);
var inst_70049__$1 = (state_70085[(2)]);
var inst_70050 = (inst_70049__$1 == null);
var inst_70051 = cljs.core.not(inst_70050);
var state_70085__$1 = (function (){var statearr_70090 = state_70085;
(statearr_70090[(9)] = inst_70049__$1);

return statearr_70090;
})();
if(inst_70051){
var statearr_70091_71444 = state_70085__$1;
(statearr_70091_71444[(1)] = (5));

} else {
var statearr_70092_71447 = state_70085__$1;
(statearr_70092_71447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (15))){
var inst_70075 = (state_70085[(2)]);
var state_70085__$1 = state_70085;
var statearr_70093_71448 = state_70085__$1;
(statearr_70093_71448[(2)] = inst_70075);

(statearr_70093_71448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (13))){
var state_70085__$1 = state_70085;
var statearr_70094_71451 = state_70085__$1;
(statearr_70094_71451[(2)] = null);

(statearr_70094_71451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (6))){
var inst_70045 = (state_70085[(7)]);
var inst_70070 = inst_70045.length;
var inst_70071 = (inst_70070 > (0));
var state_70085__$1 = state_70085;
if(cljs.core.truth_(inst_70071)){
var statearr_70095_71453 = state_70085__$1;
(statearr_70095_71453[(1)] = (12));

} else {
var statearr_70096_71455 = state_70085__$1;
(statearr_70096_71455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (3))){
var inst_70083 = (state_70085[(2)]);
var state_70085__$1 = state_70085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70085__$1,inst_70083);
} else {
if((state_val_70086 === (12))){
var inst_70045 = (state_70085[(7)]);
var inst_70073 = cljs.core.vec(inst_70045);
var state_70085__$1 = state_70085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70085__$1,(15),out,inst_70073);
} else {
if((state_val_70086 === (2))){
var state_70085__$1 = state_70085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70085__$1,(4),ch);
} else {
if((state_val_70086 === (11))){
var inst_70049 = (state_70085[(9)]);
var inst_70053 = (state_70085[(10)]);
var inst_70063 = (state_70085[(2)]);
var inst_70064 = [];
var inst_70065 = inst_70064.push(inst_70049);
var inst_70045 = inst_70064;
var inst_70046 = inst_70053;
var state_70085__$1 = (function (){var statearr_70097 = state_70085;
(statearr_70097[(11)] = inst_70063);

(statearr_70097[(7)] = inst_70045);

(statearr_70097[(8)] = inst_70046);

(statearr_70097[(12)] = inst_70065);

return statearr_70097;
})();
var statearr_70098_71469 = state_70085__$1;
(statearr_70098_71469[(2)] = null);

(statearr_70098_71469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (9))){
var inst_70045 = (state_70085[(7)]);
var inst_70061 = cljs.core.vec(inst_70045);
var state_70085__$1 = state_70085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70085__$1,(11),out,inst_70061);
} else {
if((state_val_70086 === (5))){
var inst_70046 = (state_70085[(8)]);
var inst_70049 = (state_70085[(9)]);
var inst_70053 = (state_70085[(10)]);
var inst_70053__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_70049) : f.call(null,inst_70049));
var inst_70054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70053__$1,inst_70046);
var inst_70055 = cljs.core.keyword_identical_QMARK_(inst_70046,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_70056 = ((inst_70054) || (inst_70055));
var state_70085__$1 = (function (){var statearr_70099 = state_70085;
(statearr_70099[(10)] = inst_70053__$1);

return statearr_70099;
})();
if(cljs.core.truth_(inst_70056)){
var statearr_70100_71482 = state_70085__$1;
(statearr_70100_71482[(1)] = (8));

} else {
var statearr_70101_71486 = state_70085__$1;
(statearr_70101_71486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (14))){
var inst_70078 = (state_70085[(2)]);
var inst_70079 = cljs.core.async.close_BANG_(out);
var state_70085__$1 = (function (){var statearr_70103 = state_70085;
(statearr_70103[(13)] = inst_70078);

return statearr_70103;
})();
var statearr_70104_71487 = state_70085__$1;
(statearr_70104_71487[(2)] = inst_70079);

(statearr_70104_71487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (10))){
var inst_70068 = (state_70085[(2)]);
var state_70085__$1 = state_70085;
var statearr_70105_71492 = state_70085__$1;
(statearr_70105_71492[(2)] = inst_70068);

(statearr_70105_71492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70086 === (8))){
var inst_70045 = (state_70085[(7)]);
var inst_70049 = (state_70085[(9)]);
var inst_70053 = (state_70085[(10)]);
var inst_70058 = inst_70045.push(inst_70049);
var tmp70102 = inst_70045;
var inst_70045__$1 = tmp70102;
var inst_70046 = inst_70053;
var state_70085__$1 = (function (){var statearr_70106 = state_70085;
(statearr_70106[(7)] = inst_70045__$1);

(statearr_70106[(14)] = inst_70058);

(statearr_70106[(8)] = inst_70046);

return statearr_70106;
})();
var statearr_70107_71501 = state_70085__$1;
(statearr_70107_71501[(2)] = null);

(statearr_70107_71501[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47440__auto__ = null;
var cljs$core$async$state_machine__47440__auto____0 = (function (){
var statearr_70108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70108[(0)] = cljs$core$async$state_machine__47440__auto__);

(statearr_70108[(1)] = (1));

return statearr_70108;
});
var cljs$core$async$state_machine__47440__auto____1 = (function (state_70085){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_70085);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e70109){if((e70109 instanceof Object)){
var ex__47443__auto__ = e70109;
var statearr_70110_71511 = state_70085;
(statearr_70110_71511[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71519 = state_70085;
state_70085 = G__71519;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
cljs$core$async$state_machine__47440__auto__ = function(state_70085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47440__auto____1.call(this,state_70085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47440__auto____0;
cljs$core$async$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47440__auto____1;
return cljs$core$async$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_70111 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_70111[(6)] = c__47540__auto___71430);

return statearr_70111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
