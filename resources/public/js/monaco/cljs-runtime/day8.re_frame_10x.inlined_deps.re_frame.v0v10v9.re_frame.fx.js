goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__61839 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61840 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61840);

try{try{var seq__61841 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61842 = null;
var count__61843 = (0);
var i__61844 = (0);
while(true){
if((i__61844 < count__61843)){
var vec__61857 = chunk__61842.cljs$core$IIndexed$_nth$arity$2(null,i__61844);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61857,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61857,(1),null);
var temp__5733__auto___61911 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61911)){
var effect_fn_61912 = temp__5733__auto___61911;
(effect_fn_61912.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61912.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61912.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61913 = seq__61841;
var G__61914 = chunk__61842;
var G__61915 = count__61843;
var G__61916 = (i__61844 + (1));
seq__61841 = G__61913;
chunk__61842 = G__61914;
count__61843 = G__61915;
i__61844 = G__61916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61841);
if(temp__5735__auto__){
var seq__61841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61841__$1);
var G__61917 = cljs.core.chunk_rest(seq__61841__$1);
var G__61918 = c__4609__auto__;
var G__61919 = cljs.core.count(c__4609__auto__);
var G__61920 = (0);
seq__61841 = G__61917;
chunk__61842 = G__61918;
count__61843 = G__61919;
i__61844 = G__61920;
continue;
} else {
var vec__61861 = cljs.core.first(seq__61841__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61861,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61861,(1),null);
var temp__5733__auto___61921 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61921)){
var effect_fn_61922 = temp__5733__auto___61921;
(effect_fn_61922.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61922.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61922.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61923 = cljs.core.next(seq__61841__$1);
var G__61924 = null;
var G__61925 = (0);
var G__61926 = (0);
seq__61841 = G__61923;
chunk__61842 = G__61924;
count__61843 = G__61925;
i__61844 = G__61926;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__61546__auto___61927 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__61547__auto___61928 = (end__61546__auto___61927 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61547__auto___61928,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__61546__auto___61927);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61839);
}} else {
var seq__61864 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61865 = null;
var count__61866 = (0);
var i__61867 = (0);
while(true){
if((i__61867 < count__61866)){
var vec__61875 = chunk__61865.cljs$core$IIndexed$_nth$arity$2(null,i__61867);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61875,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61875,(1),null);
var temp__5733__auto___61929 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61929)){
var effect_fn_61930 = temp__5733__auto___61929;
(effect_fn_61930.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61930.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61930.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61931 = seq__61864;
var G__61932 = chunk__61865;
var G__61933 = count__61866;
var G__61934 = (i__61867 + (1));
seq__61864 = G__61931;
chunk__61865 = G__61932;
count__61866 = G__61933;
i__61867 = G__61934;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61864);
if(temp__5735__auto__){
var seq__61864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61864__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61864__$1);
var G__61937 = cljs.core.chunk_rest(seq__61864__$1);
var G__61938 = c__4609__auto__;
var G__61939 = cljs.core.count(c__4609__auto__);
var G__61940 = (0);
seq__61864 = G__61937;
chunk__61865 = G__61938;
count__61866 = G__61939;
i__61867 = G__61940;
continue;
} else {
var vec__61883 = cljs.core.first(seq__61864__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61883,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61883,(1),null);
var temp__5733__auto___61942 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61942)){
var effect_fn_61943 = temp__5733__auto___61942;
(effect_fn_61943.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61943.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61943.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61944 = cljs.core.next(seq__61864__$1);
var G__61945 = null;
var G__61946 = (0);
var G__61947 = (0);
seq__61864 = G__61944;
chunk__61865 = G__61945;
count__61866 = G__61946;
i__61867 = G__61947;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__61887 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61888 = null;
var count__61889 = (0);
var i__61890 = (0);
while(true){
if((i__61890 < count__61889)){
var map__61895 = chunk__61888.cljs$core$IIndexed$_nth$arity$2(null,i__61890);
var map__61895__$1 = (((((!((map__61895 == null))))?(((((map__61895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61895):map__61895);
var effect = map__61895__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61895__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61895__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__61887,chunk__61888,count__61889,i__61890,map__61895,map__61895__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__61887,chunk__61888,count__61889,i__61890,map__61895,map__61895__$1,effect,ms,dispatch))
,ms);
}


var G__61952 = seq__61887;
var G__61953 = chunk__61888;
var G__61954 = count__61889;
var G__61955 = (i__61890 + (1));
seq__61887 = G__61952;
chunk__61888 = G__61953;
count__61889 = G__61954;
i__61890 = G__61955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61887);
if(temp__5735__auto__){
var seq__61887__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61887__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61887__$1);
var G__61956 = cljs.core.chunk_rest(seq__61887__$1);
var G__61957 = c__4609__auto__;
var G__61958 = cljs.core.count(c__4609__auto__);
var G__61959 = (0);
seq__61887 = G__61956;
chunk__61888 = G__61957;
count__61889 = G__61958;
i__61890 = G__61959;
continue;
} else {
var map__61898 = cljs.core.first(seq__61887__$1);
var map__61898__$1 = (((((!((map__61898 == null))))?(((((map__61898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61898):map__61898);
var effect = map__61898__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61898__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61898__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__61887,chunk__61888,count__61889,i__61890,map__61898,map__61898__$1,effect,ms,dispatch,seq__61887__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__61887,chunk__61888,count__61889,i__61890,map__61898,map__61898__$1,effect,ms,dispatch,seq__61887__$1,temp__5735__auto__))
,ms);
}


var G__61972 = cljs.core.next(seq__61887__$1);
var G__61973 = null;
var G__61974 = (0);
var G__61975 = (0);
seq__61887 = G__61972;
chunk__61888 = G__61973;
count__61889 = G__61974;
i__61890 = G__61975;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__61900 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61901 = null;
var count__61902 = (0);
var i__61903 = (0);
while(true){
if((i__61903 < count__61902)){
var event = chunk__61901.cljs$core$IIndexed$_nth$arity$2(null,i__61903);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__61980 = seq__61900;
var G__61981 = chunk__61901;
var G__61982 = count__61902;
var G__61983 = (i__61903 + (1));
seq__61900 = G__61980;
chunk__61901 = G__61981;
count__61902 = G__61982;
i__61903 = G__61983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61900);
if(temp__5735__auto__){
var seq__61900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61900__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61900__$1);
var G__61984 = cljs.core.chunk_rest(seq__61900__$1);
var G__61985 = c__4609__auto__;
var G__61986 = cljs.core.count(c__4609__auto__);
var G__61987 = (0);
seq__61900 = G__61984;
chunk__61901 = G__61985;
count__61902 = G__61986;
i__61903 = G__61987;
continue;
} else {
var event = cljs.core.first(seq__61900__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__61988 = cljs.core.next(seq__61900__$1);
var G__61989 = null;
var G__61990 = (0);
var G__61991 = (0);
seq__61900 = G__61988;
chunk__61901 = G__61989;
count__61902 = G__61990;
i__61903 = G__61991;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61904 = cljs.core.seq(value);
var chunk__61905 = null;
var count__61906 = (0);
var i__61907 = (0);
while(true){
if((i__61907 < count__61906)){
var event = chunk__61905.cljs$core$IIndexed$_nth$arity$2(null,i__61907);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__61992 = seq__61904;
var G__61993 = chunk__61905;
var G__61994 = count__61906;
var G__61995 = (i__61907 + (1));
seq__61904 = G__61992;
chunk__61905 = G__61993;
count__61906 = G__61994;
i__61907 = G__61995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61904);
if(temp__5735__auto__){
var seq__61904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61904__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61904__$1);
var G__61996 = cljs.core.chunk_rest(seq__61904__$1);
var G__61997 = c__4609__auto__;
var G__61998 = cljs.core.count(c__4609__auto__);
var G__61999 = (0);
seq__61904 = G__61996;
chunk__61905 = G__61997;
count__61906 = G__61998;
i__61907 = G__61999;
continue;
} else {
var event = cljs.core.first(seq__61904__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__62001 = cljs.core.next(seq__61904__$1);
var G__62002 = null;
var G__62003 = (0);
var G__62004 = (0);
seq__61904 = G__62001;
chunk__61905 = G__62002;
count__61906 = G__62003;
i__61907 = G__62004;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.js.map
