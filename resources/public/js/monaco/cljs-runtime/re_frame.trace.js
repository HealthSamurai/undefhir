goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__66172){
var map__66173 = p__66172;
var map__66173__$1 = (((((!((map__66173 == null))))?(((((map__66173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66173):map__66173);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__66181_66243 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__66182_66244 = null;
var count__66183_66245 = (0);
var i__66184_66246 = (0);
while(true){
if((i__66184_66246 < count__66183_66245)){
var vec__66203_66250 = chunk__66182_66244.cljs$core$IIndexed$_nth$arity$2(null,i__66184_66246);
var k_66251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66203_66250,(0),null);
var cb_66252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66203_66250,(1),null);
try{var G__66207_66254 = cljs.core.deref(re_frame.trace.traces);
(cb_66252.cljs$core$IFn$_invoke$arity$1 ? cb_66252.cljs$core$IFn$_invoke$arity$1(G__66207_66254) : cb_66252.call(null,G__66207_66254));
}catch (e66206){var e_66258 = e66206;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_66251,"while storing",cljs.core.deref(re_frame.trace.traces),e_66258], 0));
}

var G__66262 = seq__66181_66243;
var G__66263 = chunk__66182_66244;
var G__66264 = count__66183_66245;
var G__66265 = (i__66184_66246 + (1));
seq__66181_66243 = G__66262;
chunk__66182_66244 = G__66263;
count__66183_66245 = G__66264;
i__66184_66246 = G__66265;
continue;
} else {
var temp__5735__auto___66266 = cljs.core.seq(seq__66181_66243);
if(temp__5735__auto___66266){
var seq__66181_66270__$1 = temp__5735__auto___66266;
if(cljs.core.chunked_seq_QMARK_(seq__66181_66270__$1)){
var c__4609__auto___66271 = cljs.core.chunk_first(seq__66181_66270__$1);
var G__66272 = cljs.core.chunk_rest(seq__66181_66270__$1);
var G__66273 = c__4609__auto___66271;
var G__66274 = cljs.core.count(c__4609__auto___66271);
var G__66275 = (0);
seq__66181_66243 = G__66272;
chunk__66182_66244 = G__66273;
count__66183_66245 = G__66274;
i__66184_66246 = G__66275;
continue;
} else {
var vec__66208_66279 = cljs.core.first(seq__66181_66270__$1);
var k_66280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66208_66279,(0),null);
var cb_66281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66208_66279,(1),null);
try{var G__66212_66287 = cljs.core.deref(re_frame.trace.traces);
(cb_66281.cljs$core$IFn$_invoke$arity$1 ? cb_66281.cljs$core$IFn$_invoke$arity$1(G__66212_66287) : cb_66281.call(null,G__66212_66287));
}catch (e66211){var e_66288 = e66211;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_66280,"while storing",cljs.core.deref(re_frame.trace.traces),e_66288], 0));
}

var G__66292 = cljs.core.next(seq__66181_66270__$1);
var G__66293 = null;
var G__66294 = (0);
var G__66295 = (0);
seq__66181_66243 = G__66292;
chunk__66182_66244 = G__66293;
count__66183_66245 = G__66294;
i__66184_66246 = G__66295;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
