goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$start_trace(p__61566){
var map__61567 = p__61566;
var map__61567__$1 = (((((!((map__61567 == null))))?(((((map__61567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61567):map__61567);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$tracing_cb_debounced(){
var seq__61569_61596 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs));
var chunk__61570_61597 = null;
var count__61571_61598 = (0);
var i__61572_61599 = (0);
while(true){
if((i__61572_61599 < count__61571_61598)){
var vec__61583_61600 = chunk__61570_61597.cljs$core$IIndexed$_nth$arity$2(null,i__61572_61599);
var k_61601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61583_61600,(0),null);
var cb_61602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61583_61600,(1),null);
try{var G__61587_61603 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces);
(cb_61602.cljs$core$IFn$_invoke$arity$1 ? cb_61602.cljs$core$IFn$_invoke$arity$1(G__61587_61603) : cb_61602.call(null,G__61587_61603));
}catch (e61586){var e_61604 = e61586;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61601,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces),e_61604], 0));
}

var G__61605 = seq__61569_61596;
var G__61606 = chunk__61570_61597;
var G__61607 = count__61571_61598;
var G__61608 = (i__61572_61599 + (1));
seq__61569_61596 = G__61605;
chunk__61570_61597 = G__61606;
count__61571_61598 = G__61607;
i__61572_61599 = G__61608;
continue;
} else {
var temp__5735__auto___61609 = cljs.core.seq(seq__61569_61596);
if(temp__5735__auto___61609){
var seq__61569_61610__$1 = temp__5735__auto___61609;
if(cljs.core.chunked_seq_QMARK_(seq__61569_61610__$1)){
var c__4609__auto___61611 = cljs.core.chunk_first(seq__61569_61610__$1);
var G__61612 = cljs.core.chunk_rest(seq__61569_61610__$1);
var G__61613 = c__4609__auto___61611;
var G__61614 = cljs.core.count(c__4609__auto___61611);
var G__61615 = (0);
seq__61569_61596 = G__61612;
chunk__61570_61597 = G__61613;
count__61571_61598 = G__61614;
i__61572_61599 = G__61615;
continue;
} else {
var vec__61588_61616 = cljs.core.first(seq__61569_61610__$1);
var k_61617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61588_61616,(0),null);
var cb_61618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61588_61616,(1),null);
try{var G__61592_61619 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces);
(cb_61618.cljs$core$IFn$_invoke$arity$1 ? cb_61618.cljs$core$IFn$_invoke$arity$1(G__61592_61619) : cb_61618.call(null,G__61592_61619));
}catch (e61591){var e_61620 = e61591;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61617,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces),e_61620], 0));
}

var G__61621 = cljs.core.next(seq__61569_61610__$1);
var G__61622 = null;
var G__61623 = (0);
var G__61624 = (0);
seq__61569_61596 = G__61621;
chunk__61570_61597 = G__61622;
count__61571_61598 = G__61623;
i__61572_61599 = G__61624;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.js.map
