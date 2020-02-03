goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('clojure.string');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mount_count !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mount_count = (0);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_mount_count = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$next_mount_count(){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mount_count = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mount_count + (1)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.fake_raf = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_tick = (((!(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.is_client)))?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.fake_raf:(function (){var w = window;
var or__4185__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var or__4185__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__4185__auto____$3)){
return or__4185__auto____$3;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.fake_raf;
}
}
}
}
})());
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.compare_mount_order = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.run_queue = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$run_queue(a){
a.sort(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.compare_mount_order);

var n__4666__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
var c_57542 = (a[i]);
if((c_57542["cljsIsDirty"]) === true){
(c_57542["forceUpdate"])();
} else {
}

var G__57547 = (i + (1));
i = G__57547;
continue;
} else {
return null;
}
break;
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.ratom_flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$ratom_flush(){
return null;
});
}

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.run_funs = (function (k){
var self__ = this;
var this$ = this;
var temp__5739__auto__ = (this$[k]);
if((temp__5739__auto__ == null)){
return null;
} else {
var fs = temp__5739__auto__;
(this$[k] = null);

var n__4666__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
var fexpr__57532_57558 = (fs[i]);
(fexpr__57532_57558.cljs$core$IFn$_invoke$arity$0 ? fexpr__57532_57558.cljs$core$IFn$_invoke$arity$0() : fexpr__57532_57558.call(null));

var G__57560 = (i + (1));
i = G__57560;
continue;
} else {
return null;
}
break;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
return this$.run_funs("afterRender");
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
return this$.enqueue("componentQueue",c);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

var G__57540 = (function (){
return this$.run_queues();
});
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__57540) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_tick.call(null,G__57540));
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.run_funs("beforeFlush");

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.ratom_flush();

var temp__5739__auto___57561 = (this$["componentQueue"]);
if((temp__5739__auto___57561 == null)){
} else {
var cs_57565 = temp__5739__auto___57561;
(this$["componentQueue"] = null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.run_queue(cs_57565);
}

return this$.flush_after_render();
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.enqueue = (function (k,f){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

if(((this$[k]) == null)){
(this$[k] = []);
} else {
}

(this$[k]).push(f);

return this$.schedule();
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("beforeFlush",f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("afterRender",f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.batching/RenderQueue");

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.batching/RenderQueue.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.__GT_RenderQueue = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.__GT_RenderQueue(false);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.flush_queues();
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush_after_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$flush_after_render(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.flush_after_render();
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.queue_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$queue_render(c){
if(cljs.core.truth_((c["cljsIsDirty"]))){
return null;
} else {
(c["cljsIsDirty"] = true);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.queue_render(c);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.do_before_flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$do_before_flush(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.add_before_flush(f);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.do_after_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$do_after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.add_after_render(f);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.schedule = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$batching$schedule(){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.js.map
