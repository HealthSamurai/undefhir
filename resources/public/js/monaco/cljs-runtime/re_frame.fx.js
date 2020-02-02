goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__66519 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__66520 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__66520);

try{try{var seq__66521 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66522 = null;
var count__66523 = (0);
var i__66524 = (0);
while(true){
if((i__66524 < count__66523)){
var vec__66531 = chunk__66522.cljs$core$IIndexed$_nth$arity$2(null,i__66524);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66531,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66531,(1),null);
var temp__5733__auto___66594 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66594)){
var effect_fn_66599 = temp__5733__auto___66594;
(effect_fn_66599.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66599.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66599.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66601 = seq__66521;
var G__66602 = chunk__66522;
var G__66603 = count__66523;
var G__66604 = (i__66524 + (1));
seq__66521 = G__66601;
chunk__66522 = G__66602;
count__66523 = G__66603;
i__66524 = G__66604;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66521);
if(temp__5735__auto__){
var seq__66521__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66521__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66521__$1);
var G__66605 = cljs.core.chunk_rest(seq__66521__$1);
var G__66606 = c__4609__auto__;
var G__66607 = cljs.core.count(c__4609__auto__);
var G__66608 = (0);
seq__66521 = G__66605;
chunk__66522 = G__66606;
count__66523 = G__66607;
i__66524 = G__66608;
continue;
} else {
var vec__66535 = cljs.core.first(seq__66521__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66535,(1),null);
var temp__5733__auto___66614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66614)){
var effect_fn_66628 = temp__5733__auto___66614;
(effect_fn_66628.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66628.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66628.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66631 = cljs.core.next(seq__66521__$1);
var G__66632 = null;
var G__66633 = (0);
var G__66634 = (0);
seq__66521 = G__66631;
chunk__66522 = G__66632;
count__66523 = G__66633;
i__66524 = G__66634;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__66139__auto___66637 = re_frame.interop.now();
var duration__66140__auto___66638 = (end__66139__auto___66637 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66140__auto___66638,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__66139__auto___66637);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__66519);
}} else {
var seq__66538 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66539 = null;
var count__66540 = (0);
var i__66541 = (0);
while(true){
if((i__66541 < count__66540)){
var vec__66553 = chunk__66539.cljs$core$IIndexed$_nth$arity$2(null,i__66541);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66553,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66553,(1),null);
var temp__5733__auto___66645 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66645)){
var effect_fn_66646 = temp__5733__auto___66645;
(effect_fn_66646.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66646.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66646.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66647 = seq__66538;
var G__66648 = chunk__66539;
var G__66649 = count__66540;
var G__66650 = (i__66541 + (1));
seq__66538 = G__66647;
chunk__66539 = G__66648;
count__66540 = G__66649;
i__66541 = G__66650;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66538);
if(temp__5735__auto__){
var seq__66538__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66538__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66538__$1);
var G__66651 = cljs.core.chunk_rest(seq__66538__$1);
var G__66652 = c__4609__auto__;
var G__66653 = cljs.core.count(c__4609__auto__);
var G__66654 = (0);
seq__66538 = G__66651;
chunk__66539 = G__66652;
count__66540 = G__66653;
i__66541 = G__66654;
continue;
} else {
var vec__66557 = cljs.core.first(seq__66538__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66557,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66557,(1),null);
var temp__5733__auto___66655 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66655)){
var effect_fn_66658 = temp__5733__auto___66655;
(effect_fn_66658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66659 = cljs.core.next(seq__66538__$1);
var G__66660 = null;
var G__66661 = (0);
var G__66662 = (0);
seq__66538 = G__66659;
chunk__66539 = G__66660;
count__66540 = G__66661;
i__66541 = G__66662;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__66563 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__66564 = null;
var count__66565 = (0);
var i__66566 = (0);
while(true){
if((i__66566 < count__66565)){
var map__66572 = chunk__66564.cljs$core$IIndexed$_nth$arity$2(null,i__66566);
var map__66572__$1 = (((((!((map__66572 == null))))?(((((map__66572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66572):map__66572);
var effect = map__66572__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66572__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66572__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__66563,chunk__66564,count__66565,i__66566,map__66572,map__66572__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__66563,chunk__66564,count__66565,i__66566,map__66572,map__66572__$1,effect,ms,dispatch))
,ms);
}


var G__66668 = seq__66563;
var G__66669 = chunk__66564;
var G__66670 = count__66565;
var G__66671 = (i__66566 + (1));
seq__66563 = G__66668;
chunk__66564 = G__66669;
count__66565 = G__66670;
i__66566 = G__66671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66563);
if(temp__5735__auto__){
var seq__66563__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66563__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66563__$1);
var G__66672 = cljs.core.chunk_rest(seq__66563__$1);
var G__66673 = c__4609__auto__;
var G__66674 = cljs.core.count(c__4609__auto__);
var G__66675 = (0);
seq__66563 = G__66672;
chunk__66564 = G__66673;
count__66565 = G__66674;
i__66566 = G__66675;
continue;
} else {
var map__66574 = cljs.core.first(seq__66563__$1);
var map__66574__$1 = (((((!((map__66574 == null))))?(((((map__66574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66574):map__66574);
var effect = map__66574__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66574__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66574__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__66563,chunk__66564,count__66565,i__66566,map__66574,map__66574__$1,effect,ms,dispatch,seq__66563__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__66563,chunk__66564,count__66565,i__66566,map__66574,map__66574__$1,effect,ms,dispatch,seq__66563__$1,temp__5735__auto__))
,ms);
}


var G__66681 = cljs.core.next(seq__66563__$1);
var G__66682 = null;
var G__66683 = (0);
var G__66684 = (0);
seq__66563 = G__66681;
chunk__66564 = G__66682;
count__66565 = G__66683;
i__66566 = G__66684;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__66577 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__66578 = null;
var count__66579 = (0);
var i__66580 = (0);
while(true){
if((i__66580 < count__66579)){
var event = chunk__66578.cljs$core$IIndexed$_nth$arity$2(null,i__66580);
re_frame.router.dispatch(event);


var G__66697 = seq__66577;
var G__66698 = chunk__66578;
var G__66699 = count__66579;
var G__66700 = (i__66580 + (1));
seq__66577 = G__66697;
chunk__66578 = G__66698;
count__66579 = G__66699;
i__66580 = G__66700;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66577);
if(temp__5735__auto__){
var seq__66577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66577__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66577__$1);
var G__66701 = cljs.core.chunk_rest(seq__66577__$1);
var G__66702 = c__4609__auto__;
var G__66703 = cljs.core.count(c__4609__auto__);
var G__66704 = (0);
seq__66577 = G__66701;
chunk__66578 = G__66702;
count__66579 = G__66703;
i__66580 = G__66704;
continue;
} else {
var event = cljs.core.first(seq__66577__$1);
re_frame.router.dispatch(event);


var G__66705 = cljs.core.next(seq__66577__$1);
var G__66706 = null;
var G__66707 = (0);
var G__66708 = (0);
seq__66577 = G__66705;
chunk__66578 = G__66706;
count__66579 = G__66707;
i__66580 = G__66708;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__66583 = cljs.core.seq(value);
var chunk__66584 = null;
var count__66585 = (0);
var i__66586 = (0);
while(true){
if((i__66586 < count__66585)){
var event = chunk__66584.cljs$core$IIndexed$_nth$arity$2(null,i__66586);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__66709 = seq__66583;
var G__66710 = chunk__66584;
var G__66711 = count__66585;
var G__66712 = (i__66586 + (1));
seq__66583 = G__66709;
chunk__66584 = G__66710;
count__66585 = G__66711;
i__66586 = G__66712;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66583);
if(temp__5735__auto__){
var seq__66583__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66583__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66583__$1);
var G__66713 = cljs.core.chunk_rest(seq__66583__$1);
var G__66714 = c__4609__auto__;
var G__66715 = cljs.core.count(c__4609__auto__);
var G__66716 = (0);
seq__66583 = G__66713;
chunk__66584 = G__66714;
count__66585 = G__66715;
i__66586 = G__66716;
continue;
} else {
var event = cljs.core.first(seq__66583__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__66718 = cljs.core.next(seq__66583__$1);
var G__66719 = null;
var G__66720 = (0);
var G__66721 = (0);
seq__66583 = G__66718;
chunk__66584 = G__66719;
count__66585 = G__66720;
i__66586 = G__66721;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
