goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__70117 = coll;
var G__70118 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__70117,G__70118) : shadow.dom.lazy_native_coll_seq.call(null,G__70117,G__70118));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__70136 = arguments.length;
switch (G__70136) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__70142 = arguments.length;
switch (G__70142) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__70146 = arguments.length;
switch (G__70146) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__70149 = arguments.length;
switch (G__70149) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__70158 = arguments.length;
switch (G__70158) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__70160 = document;
var G__70161 = shadow.dom.dom_node(el);
return goog.dom.contains(G__70160,G__70161);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__70163 = shadow.dom.dom_node(parent);
var G__70164 = shadow.dom.dom_node(el);
return goog.dom.contains(G__70163,G__70164);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__70169 = shadow.dom.dom_node(el);
var G__70170 = cls;
return goog.dom.classlist.add(G__70169,G__70170);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__70172 = shadow.dom.dom_node(el);
var G__70173 = cls;
return goog.dom.classlist.remove(G__70172,G__70173);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__70178 = arguments.length;
switch (G__70178) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__70181 = shadow.dom.dom_node(el);
var G__70182 = cls;
return goog.dom.classlist.toggle(G__70181,G__70182);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e70191){if((e70191 instanceof Object)){
var e = e70191;
return console.log("didnt support attachEvent",el,e);
} else {
throw e70191;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__70194 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__70195 = null;
var count__70196 = (0);
var i__70197 = (0);
while(true){
if((i__70197 < count__70196)){
var el = chunk__70195.cljs$core$IIndexed$_nth$arity$2(null,i__70197);
var handler_71022__$1 = ((function (seq__70194,chunk__70195,count__70196,i__70197,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__70194,chunk__70195,count__70196,i__70197,el))
;
var G__70207_71023 = el;
var G__70208_71024 = cljs.core.name(ev);
var G__70209_71025 = handler_71022__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__70207_71023,G__70208_71024,G__70209_71025) : shadow.dom.dom_listen.call(null,G__70207_71023,G__70208_71024,G__70209_71025));


var G__71028 = seq__70194;
var G__71029 = chunk__70195;
var G__71030 = count__70196;
var G__71031 = (i__70197 + (1));
seq__70194 = G__71028;
chunk__70195 = G__71029;
count__70196 = G__71030;
i__70197 = G__71031;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70194);
if(temp__5735__auto__){
var seq__70194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70194__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70194__$1);
var G__71032 = cljs.core.chunk_rest(seq__70194__$1);
var G__71033 = c__4609__auto__;
var G__71034 = cljs.core.count(c__4609__auto__);
var G__71035 = (0);
seq__70194 = G__71032;
chunk__70195 = G__71033;
count__70196 = G__71034;
i__70197 = G__71035;
continue;
} else {
var el = cljs.core.first(seq__70194__$1);
var handler_71036__$1 = ((function (seq__70194,chunk__70195,count__70196,i__70197,el,seq__70194__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__70194,chunk__70195,count__70196,i__70197,el,seq__70194__$1,temp__5735__auto__))
;
var G__70212_71037 = el;
var G__70213_71038 = cljs.core.name(ev);
var G__70214_71039 = handler_71036__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__70212_71037,G__70213_71038,G__70214_71039) : shadow.dom.dom_listen.call(null,G__70212_71037,G__70213_71038,G__70214_71039));


var G__71040 = cljs.core.next(seq__70194__$1);
var G__71041 = null;
var G__71042 = (0);
var G__71043 = (0);
seq__70194 = G__71040;
chunk__70195 = G__71041;
count__70196 = G__71042;
i__70197 = G__71043;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__70221 = arguments.length;
switch (G__70221) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__70227 = shadow.dom.dom_node(el);
var G__70228 = cljs.core.name(ev);
var G__70229 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__70227,G__70228,G__70229) : shadow.dom.dom_listen.call(null,G__70227,G__70228,G__70229));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__70231 = shadow.dom.dom_node(el);
var G__70232 = cljs.core.name(ev);
var G__70233 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__70231,G__70232,G__70233) : shadow.dom.dom_listen_remove.call(null,G__70231,G__70232,G__70233));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__70235 = cljs.core.seq(events);
var chunk__70236 = null;
var count__70237 = (0);
var i__70238 = (0);
while(true){
if((i__70238 < count__70237)){
var vec__70247 = chunk__70236.cljs$core$IIndexed$_nth$arity$2(null,i__70238);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70247,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__71045 = seq__70235;
var G__71046 = chunk__70236;
var G__71047 = count__70237;
var G__71048 = (i__70238 + (1));
seq__70235 = G__71045;
chunk__70236 = G__71046;
count__70237 = G__71047;
i__70238 = G__71048;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70235);
if(temp__5735__auto__){
var seq__70235__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70235__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70235__$1);
var G__71051 = cljs.core.chunk_rest(seq__70235__$1);
var G__71052 = c__4609__auto__;
var G__71053 = cljs.core.count(c__4609__auto__);
var G__71054 = (0);
seq__70235 = G__71051;
chunk__70236 = G__71052;
count__70237 = G__71053;
i__70238 = G__71054;
continue;
} else {
var vec__70254 = cljs.core.first(seq__70235__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70254,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__71055 = cljs.core.next(seq__70235__$1);
var G__71056 = null;
var G__71057 = (0);
var G__71058 = (0);
seq__70235 = G__71055;
chunk__70236 = G__71056;
count__70237 = G__71057;
i__70238 = G__71058;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__70258 = cljs.core.seq(styles);
var chunk__70259 = null;
var count__70260 = (0);
var i__70261 = (0);
while(true){
if((i__70261 < count__70260)){
var vec__70280 = chunk__70259.cljs$core$IIndexed$_nth$arity$2(null,i__70261);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70280,(1),null);
var G__70283_71059 = dom;
var G__70284_71060 = cljs.core.name(k);
var G__70285_71061 = (((v == null))?"":v);
goog.style.setStyle(G__70283_71059,G__70284_71060,G__70285_71061);


var G__71062 = seq__70258;
var G__71063 = chunk__70259;
var G__71064 = count__70260;
var G__71065 = (i__70261 + (1));
seq__70258 = G__71062;
chunk__70259 = G__71063;
count__70260 = G__71064;
i__70261 = G__71065;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70258);
if(temp__5735__auto__){
var seq__70258__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70258__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70258__$1);
var G__71066 = cljs.core.chunk_rest(seq__70258__$1);
var G__71067 = c__4609__auto__;
var G__71068 = cljs.core.count(c__4609__auto__);
var G__71069 = (0);
seq__70258 = G__71066;
chunk__70259 = G__71067;
count__70260 = G__71068;
i__70261 = G__71069;
continue;
} else {
var vec__70288 = cljs.core.first(seq__70258__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70288,(1),null);
var G__70291_71070 = dom;
var G__70292_71071 = cljs.core.name(k);
var G__70293_71072 = (((v == null))?"":v);
goog.style.setStyle(G__70291_71070,G__70292_71071,G__70293_71072);


var G__71073 = cljs.core.next(seq__70258__$1);
var G__71074 = null;
var G__71075 = (0);
var G__71076 = (0);
seq__70258 = G__71073;
chunk__70259 = G__71074;
count__70260 = G__71075;
i__70261 = G__71076;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__70296_71077 = key;
var G__70296_71078__$1 = (((G__70296_71077 instanceof cljs.core.Keyword))?G__70296_71077.fqn:null);
switch (G__70296_71078__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_71084 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_71084,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_71084,"aria-");
}
})())){
el.setAttribute(ks_71084,value);
} else {
(el[ks_71084] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__70305 = shadow.dom.dom_node(el);
var G__70306 = cls;
return goog.dom.classlist.contains(G__70305,G__70306);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__70318){
var map__70320 = p__70318;
var map__70320__$1 = (((((!((map__70320 == null))))?(((((map__70320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70320):map__70320);
var props = map__70320__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70320__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__70325 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70325,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70325,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70325,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__70329 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__70329,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__70329;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__70336 = arguments.length;
switch (G__70336) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__70341){
var vec__70346 = p__70341;
var seq__70347 = cljs.core.seq(vec__70346);
var first__70348 = cljs.core.first(seq__70347);
var seq__70347__$1 = cljs.core.next(seq__70347);
var nn = first__70348;
var first__70348__$1 = cljs.core.first(seq__70347__$1);
var seq__70347__$2 = cljs.core.next(seq__70347__$1);
var np = first__70348__$1;
var nc = seq__70347__$2;
var node = vec__70346;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70354 = nn;
var G__70355 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__70354,G__70355) : create_fn.call(null,G__70354,G__70355));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70356 = nn;
var G__70357 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__70356,G__70357) : create_fn.call(null,G__70356,G__70357));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__70363 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70363,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70363,(1),null);
var seq__70367_71110 = cljs.core.seq(node_children);
var chunk__70368_71111 = null;
var count__70369_71112 = (0);
var i__70370_71113 = (0);
while(true){
if((i__70370_71113 < count__70369_71112)){
var child_struct_71114 = chunk__70368_71111.cljs$core$IIndexed$_nth$arity$2(null,i__70370_71113);
var children_71115 = shadow.dom.dom_node(child_struct_71114);
if(cljs.core.seq_QMARK_(children_71115)){
var seq__70414_71116 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_71115));
var chunk__70416_71117 = null;
var count__70417_71118 = (0);
var i__70418_71119 = (0);
while(true){
if((i__70418_71119 < count__70417_71118)){
var child_71121 = chunk__70416_71117.cljs$core$IIndexed$_nth$arity$2(null,i__70418_71119);
if(cljs.core.truth_(child_71121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71121);


var G__71122 = seq__70414_71116;
var G__71123 = chunk__70416_71117;
var G__71124 = count__70417_71118;
var G__71125 = (i__70418_71119 + (1));
seq__70414_71116 = G__71122;
chunk__70416_71117 = G__71123;
count__70417_71118 = G__71124;
i__70418_71119 = G__71125;
continue;
} else {
var G__71126 = seq__70414_71116;
var G__71127 = chunk__70416_71117;
var G__71128 = count__70417_71118;
var G__71129 = (i__70418_71119 + (1));
seq__70414_71116 = G__71126;
chunk__70416_71117 = G__71127;
count__70417_71118 = G__71128;
i__70418_71119 = G__71129;
continue;
}
} else {
var temp__5735__auto___71130 = cljs.core.seq(seq__70414_71116);
if(temp__5735__auto___71130){
var seq__70414_71131__$1 = temp__5735__auto___71130;
if(cljs.core.chunked_seq_QMARK_(seq__70414_71131__$1)){
var c__4609__auto___71132 = cljs.core.chunk_first(seq__70414_71131__$1);
var G__71133 = cljs.core.chunk_rest(seq__70414_71131__$1);
var G__71134 = c__4609__auto___71132;
var G__71135 = cljs.core.count(c__4609__auto___71132);
var G__71136 = (0);
seq__70414_71116 = G__71133;
chunk__70416_71117 = G__71134;
count__70417_71118 = G__71135;
i__70418_71119 = G__71136;
continue;
} else {
var child_71137 = cljs.core.first(seq__70414_71131__$1);
if(cljs.core.truth_(child_71137)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71137);


var G__71138 = cljs.core.next(seq__70414_71131__$1);
var G__71139 = null;
var G__71140 = (0);
var G__71141 = (0);
seq__70414_71116 = G__71138;
chunk__70416_71117 = G__71139;
count__70417_71118 = G__71140;
i__70418_71119 = G__71141;
continue;
} else {
var G__71142 = cljs.core.next(seq__70414_71131__$1);
var G__71143 = null;
var G__71144 = (0);
var G__71145 = (0);
seq__70414_71116 = G__71142;
chunk__70416_71117 = G__71143;
count__70417_71118 = G__71144;
i__70418_71119 = G__71145;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_71115);
}


var G__71146 = seq__70367_71110;
var G__71147 = chunk__70368_71111;
var G__71148 = count__70369_71112;
var G__71149 = (i__70370_71113 + (1));
seq__70367_71110 = G__71146;
chunk__70368_71111 = G__71147;
count__70369_71112 = G__71148;
i__70370_71113 = G__71149;
continue;
} else {
var temp__5735__auto___71150 = cljs.core.seq(seq__70367_71110);
if(temp__5735__auto___71150){
var seq__70367_71152__$1 = temp__5735__auto___71150;
if(cljs.core.chunked_seq_QMARK_(seq__70367_71152__$1)){
var c__4609__auto___71153 = cljs.core.chunk_first(seq__70367_71152__$1);
var G__71154 = cljs.core.chunk_rest(seq__70367_71152__$1);
var G__71155 = c__4609__auto___71153;
var G__71156 = cljs.core.count(c__4609__auto___71153);
var G__71157 = (0);
seq__70367_71110 = G__71154;
chunk__70368_71111 = G__71155;
count__70369_71112 = G__71156;
i__70370_71113 = G__71157;
continue;
} else {
var child_struct_71158 = cljs.core.first(seq__70367_71152__$1);
var children_71159 = shadow.dom.dom_node(child_struct_71158);
if(cljs.core.seq_QMARK_(children_71159)){
var seq__70424_71161 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_71159));
var chunk__70426_71162 = null;
var count__70427_71163 = (0);
var i__70428_71164 = (0);
while(true){
if((i__70428_71164 < count__70427_71163)){
var child_71168 = chunk__70426_71162.cljs$core$IIndexed$_nth$arity$2(null,i__70428_71164);
if(cljs.core.truth_(child_71168)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71168);


var G__71169 = seq__70424_71161;
var G__71170 = chunk__70426_71162;
var G__71171 = count__70427_71163;
var G__71172 = (i__70428_71164 + (1));
seq__70424_71161 = G__71169;
chunk__70426_71162 = G__71170;
count__70427_71163 = G__71171;
i__70428_71164 = G__71172;
continue;
} else {
var G__71174 = seq__70424_71161;
var G__71175 = chunk__70426_71162;
var G__71176 = count__70427_71163;
var G__71177 = (i__70428_71164 + (1));
seq__70424_71161 = G__71174;
chunk__70426_71162 = G__71175;
count__70427_71163 = G__71176;
i__70428_71164 = G__71177;
continue;
}
} else {
var temp__5735__auto___71178__$1 = cljs.core.seq(seq__70424_71161);
if(temp__5735__auto___71178__$1){
var seq__70424_71179__$1 = temp__5735__auto___71178__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70424_71179__$1)){
var c__4609__auto___71180 = cljs.core.chunk_first(seq__70424_71179__$1);
var G__71182 = cljs.core.chunk_rest(seq__70424_71179__$1);
var G__71183 = c__4609__auto___71180;
var G__71184 = cljs.core.count(c__4609__auto___71180);
var G__71185 = (0);
seq__70424_71161 = G__71182;
chunk__70426_71162 = G__71183;
count__70427_71163 = G__71184;
i__70428_71164 = G__71185;
continue;
} else {
var child_71187 = cljs.core.first(seq__70424_71179__$1);
if(cljs.core.truth_(child_71187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71187);


var G__71189 = cljs.core.next(seq__70424_71179__$1);
var G__71190 = null;
var G__71191 = (0);
var G__71192 = (0);
seq__70424_71161 = G__71189;
chunk__70426_71162 = G__71190;
count__70427_71163 = G__71191;
i__70428_71164 = G__71192;
continue;
} else {
var G__71198 = cljs.core.next(seq__70424_71179__$1);
var G__71199 = null;
var G__71200 = (0);
var G__71201 = (0);
seq__70424_71161 = G__71198;
chunk__70426_71162 = G__71199;
count__70427_71163 = G__71200;
i__70428_71164 = G__71201;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_71159);
}


var G__71202 = cljs.core.next(seq__70367_71152__$1);
var G__71203 = null;
var G__71204 = (0);
var G__71205 = (0);
seq__70367_71110 = G__71202;
chunk__70368_71111 = G__71203;
count__70369_71112 = G__71204;
i__70370_71113 = G__71205;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__70455 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__70455);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__70460 = cljs.core.seq(node);
var chunk__70461 = null;
var count__70462 = (0);
var i__70463 = (0);
while(true){
if((i__70463 < count__70462)){
var n = chunk__70461.cljs$core$IIndexed$_nth$arity$2(null,i__70463);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__71209 = seq__70460;
var G__71210 = chunk__70461;
var G__71211 = count__70462;
var G__71212 = (i__70463 + (1));
seq__70460 = G__71209;
chunk__70461 = G__71210;
count__70462 = G__71211;
i__70463 = G__71212;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70460);
if(temp__5735__auto__){
var seq__70460__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70460__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70460__$1);
var G__71213 = cljs.core.chunk_rest(seq__70460__$1);
var G__71214 = c__4609__auto__;
var G__71215 = cljs.core.count(c__4609__auto__);
var G__71216 = (0);
seq__70460 = G__71213;
chunk__70461 = G__71214;
count__70462 = G__71215;
i__70463 = G__71216;
continue;
} else {
var n = cljs.core.first(seq__70460__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__71222 = cljs.core.next(seq__70460__$1);
var G__71223 = null;
var G__71224 = (0);
var G__71225 = (0);
seq__70460 = G__71222;
chunk__70461 = G__71223;
count__70462 = G__71224;
i__70463 = G__71225;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__70480 = shadow.dom.dom_node(new$);
var G__70481 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__70480,G__70481);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__70487 = arguments.length;
switch (G__70487) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__70497 = arguments.length;
switch (G__70497) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__70511 = arguments.length;
switch (G__70511) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___71248 = arguments.length;
var i__4790__auto___71249 = (0);
while(true){
if((i__4790__auto___71249 < len__4789__auto___71248)){
args__4795__auto__.push((arguments[i__4790__auto___71249]));

var G__71250 = (i__4790__auto___71249 + (1));
i__4790__auto___71249 = G__71250;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__70555_71251 = cljs.core.seq(nodes);
var chunk__70556_71252 = null;
var count__70557_71253 = (0);
var i__70558_71254 = (0);
while(true){
if((i__70558_71254 < count__70557_71253)){
var node_71256 = chunk__70556_71252.cljs$core$IIndexed$_nth$arity$2(null,i__70558_71254);
fragment.appendChild(shadow.dom._to_dom(node_71256));


var G__71257 = seq__70555_71251;
var G__71258 = chunk__70556_71252;
var G__71259 = count__70557_71253;
var G__71260 = (i__70558_71254 + (1));
seq__70555_71251 = G__71257;
chunk__70556_71252 = G__71258;
count__70557_71253 = G__71259;
i__70558_71254 = G__71260;
continue;
} else {
var temp__5735__auto___71262 = cljs.core.seq(seq__70555_71251);
if(temp__5735__auto___71262){
var seq__70555_71263__$1 = temp__5735__auto___71262;
if(cljs.core.chunked_seq_QMARK_(seq__70555_71263__$1)){
var c__4609__auto___71264 = cljs.core.chunk_first(seq__70555_71263__$1);
var G__71265 = cljs.core.chunk_rest(seq__70555_71263__$1);
var G__71266 = c__4609__auto___71264;
var G__71267 = cljs.core.count(c__4609__auto___71264);
var G__71268 = (0);
seq__70555_71251 = G__71265;
chunk__70556_71252 = G__71266;
count__70557_71253 = G__71267;
i__70558_71254 = G__71268;
continue;
} else {
var node_71269 = cljs.core.first(seq__70555_71263__$1);
fragment.appendChild(shadow.dom._to_dom(node_71269));


var G__71270 = cljs.core.next(seq__70555_71263__$1);
var G__71271 = null;
var G__71272 = (0);
var G__71273 = (0);
seq__70555_71251 = G__71270;
chunk__70556_71252 = G__71271;
count__70557_71253 = G__71272;
i__70558_71254 = G__71273;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq70540){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70540));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__70592_71278 = cljs.core.seq(scripts);
var chunk__70593_71279 = null;
var count__70594_71280 = (0);
var i__70595_71281 = (0);
while(true){
if((i__70595_71281 < count__70594_71280)){
var vec__70622_71282 = chunk__70593_71279.cljs$core$IIndexed$_nth$arity$2(null,i__70595_71281);
var script_tag_71283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70622_71282,(0),null);
var script_body_71284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70622_71282,(1),null);
eval(script_body_71284);


var G__71285 = seq__70592_71278;
var G__71286 = chunk__70593_71279;
var G__71287 = count__70594_71280;
var G__71288 = (i__70595_71281 + (1));
seq__70592_71278 = G__71285;
chunk__70593_71279 = G__71286;
count__70594_71280 = G__71287;
i__70595_71281 = G__71288;
continue;
} else {
var temp__5735__auto___71289 = cljs.core.seq(seq__70592_71278);
if(temp__5735__auto___71289){
var seq__70592_71290__$1 = temp__5735__auto___71289;
if(cljs.core.chunked_seq_QMARK_(seq__70592_71290__$1)){
var c__4609__auto___71291 = cljs.core.chunk_first(seq__70592_71290__$1);
var G__71292 = cljs.core.chunk_rest(seq__70592_71290__$1);
var G__71293 = c__4609__auto___71291;
var G__71294 = cljs.core.count(c__4609__auto___71291);
var G__71295 = (0);
seq__70592_71278 = G__71292;
chunk__70593_71279 = G__71293;
count__70594_71280 = G__71294;
i__70595_71281 = G__71295;
continue;
} else {
var vec__70632_71297 = cljs.core.first(seq__70592_71290__$1);
var script_tag_71298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70632_71297,(0),null);
var script_body_71299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70632_71297,(1),null);
eval(script_body_71299);


var G__71300 = cljs.core.next(seq__70592_71290__$1);
var G__71301 = null;
var G__71302 = (0);
var G__71303 = (0);
seq__70592_71278 = G__71300;
chunk__70593_71279 = G__71301;
count__70594_71280 = G__71302;
i__70595_71281 = G__71303;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__70636){
var vec__70637 = p__70636;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70637,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70637,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__70655 = shadow.dom.dom_node(el);
var G__70656 = cls;
return goog.dom.getAncestorByClass(G__70655,G__70656);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__70661 = arguments.length;
switch (G__70661) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__70664 = shadow.dom.dom_node(el);
var G__70665 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__70664,G__70665);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__70667 = shadow.dom.dom_node(el);
var G__70668 = cljs.core.name(tag);
var G__70669 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__70667,G__70668,G__70669);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__70671 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__70671);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__70674 = shadow.dom.dom_node(dom);
var G__70675 = value;
return goog.dom.forms.setValue(G__70674,G__70675);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__70684 = cljs.core.seq(style_keys);
var chunk__70685 = null;
var count__70686 = (0);
var i__70687 = (0);
while(true){
if((i__70687 < count__70686)){
var it = chunk__70685.cljs$core$IIndexed$_nth$arity$2(null,i__70687);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71311 = seq__70684;
var G__71312 = chunk__70685;
var G__71313 = count__70686;
var G__71314 = (i__70687 + (1));
seq__70684 = G__71311;
chunk__70685 = G__71312;
count__70686 = G__71313;
i__70687 = G__71314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70684);
if(temp__5735__auto__){
var seq__70684__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70684__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70684__$1);
var G__71319 = cljs.core.chunk_rest(seq__70684__$1);
var G__71320 = c__4609__auto__;
var G__71321 = cljs.core.count(c__4609__auto__);
var G__71322 = (0);
seq__70684 = G__71319;
chunk__70685 = G__71320;
count__70686 = G__71321;
i__70687 = G__71322;
continue;
} else {
var it = cljs.core.first(seq__70684__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71324 = cljs.core.next(seq__70684__$1);
var G__71325 = null;
var G__71326 = (0);
var G__71327 = (0);
seq__70684 = G__71324;
chunk__70685 = G__71325;
count__70686 = G__71326;
i__70687 = G__71327;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k70696,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__70706 = k70696;
var G__70706__$1 = (((G__70706 instanceof cljs.core.Keyword))?G__70706.fqn:null);
switch (G__70706__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70696,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__70710){
var vec__70711 = p__70710;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70711,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70711,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70695){
var self__ = this;
var G__70695__$1 = this;
return (new cljs.core.RecordIter((0),G__70695__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__70725 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__70725(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70697,other70698){
var self__ = this;
var this70697__$1 = this;
return (((!((other70698 == null)))) && ((this70697__$1.constructor === other70698.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70697__$1.x,other70698.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70697__$1.y,other70698.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70697__$1.__extmap,other70698.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__70695){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__70727 = cljs.core.keyword_identical_QMARK_;
var expr__70728 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__70730 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__70731 = expr__70728;
return (pred__70727.cljs$core$IFn$_invoke$arity$2 ? pred__70727.cljs$core$IFn$_invoke$arity$2(G__70730,G__70731) : pred__70727.call(null,G__70730,G__70731));
})())){
return (new shadow.dom.Coordinate(G__70695,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70732 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__70733 = expr__70728;
return (pred__70727.cljs$core$IFn$_invoke$arity$2 ? pred__70727.cljs$core$IFn$_invoke$arity$2(G__70732,G__70733) : pred__70727.call(null,G__70732,G__70733));
})())){
return (new shadow.dom.Coordinate(self__.x,G__70695,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__70695),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__70695){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__70695,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__70699){
var extmap__4478__auto__ = (function (){var G__70740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70699,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__70699)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70740);
} else {
return G__70740;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__70699),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__70699),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__70743 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__70743);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__70746 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__70746);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__70747 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__70747);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k70749,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__70753 = k70749;
var G__70753__$1 = (((G__70753 instanceof cljs.core.Keyword))?G__70753.fqn:null);
switch (G__70753__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70749,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__70754){
var vec__70755 = p__70754;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70755,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70755,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70748){
var self__ = this;
var G__70748__$1 = this;
return (new cljs.core.RecordIter((0),G__70748__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__70759 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__70759(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70750,other70751){
var self__ = this;
var this70750__$1 = this;
return (((!((other70751 == null)))) && ((this70750__$1.constructor === other70751.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70750__$1.w,other70751.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70750__$1.h,other70751.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70750__$1.__extmap,other70751.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__70748){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__70768 = cljs.core.keyword_identical_QMARK_;
var expr__70769 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__70772 = new cljs.core.Keyword(null,"w","w",354169001);
var G__70773 = expr__70769;
return (pred__70768.cljs$core$IFn$_invoke$arity$2 ? pred__70768.cljs$core$IFn$_invoke$arity$2(G__70772,G__70773) : pred__70768.call(null,G__70772,G__70773));
})())){
return (new shadow.dom.Size(G__70748,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70774 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__70775 = expr__70769;
return (pred__70768.cljs$core$IFn$_invoke$arity$2 ? pred__70768.cljs$core$IFn$_invoke$arity$2(G__70774,G__70775) : pred__70768.call(null,G__70774,G__70775));
})())){
return (new shadow.dom.Size(self__.w,G__70748,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__70748),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__70748){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__70748,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__70752){
var extmap__4478__auto__ = (function (){var G__70783 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70752,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__70752)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70783);
} else {
return G__70783;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__70752),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__70752),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__70789 = shadow.dom.dom_node(el);
return goog.style.getSize(G__70789);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__71423 = (i + (1));
var G__71424 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__71423;
ret = G__71424;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70809){
var vec__70810 = p__70809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70810,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__70818 = arguments.length;
switch (G__70818) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__70829_71442 = new_node;
var G__70830_71443 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__70829_71442,G__70830_71443);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__70831_71445 = new_node;
var G__70832_71446 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__70831_71445,G__70832_71446);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__71449 = ps;
var G__71450 = (i + (1));
el__$1 = G__71449;
i = G__71450;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__70840 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__70840);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__70844 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__70844);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__70845 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__70845);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__70851 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70851,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70851,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70851,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__70854_71462 = cljs.core.seq(props);
var chunk__70855_71463 = null;
var count__70856_71464 = (0);
var i__70857_71465 = (0);
while(true){
if((i__70857_71465 < count__70856_71464)){
var vec__70864_71466 = chunk__70855_71463.cljs$core$IIndexed$_nth$arity$2(null,i__70857_71465);
var k_71467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70864_71466,(0),null);
var v_71468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70864_71466,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_71467);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71467),v_71468);


var G__71470 = seq__70854_71462;
var G__71471 = chunk__70855_71463;
var G__71472 = count__70856_71464;
var G__71473 = (i__70857_71465 + (1));
seq__70854_71462 = G__71470;
chunk__70855_71463 = G__71471;
count__70856_71464 = G__71472;
i__70857_71465 = G__71473;
continue;
} else {
var temp__5735__auto___71474 = cljs.core.seq(seq__70854_71462);
if(temp__5735__auto___71474){
var seq__70854_71475__$1 = temp__5735__auto___71474;
if(cljs.core.chunked_seq_QMARK_(seq__70854_71475__$1)){
var c__4609__auto___71476 = cljs.core.chunk_first(seq__70854_71475__$1);
var G__71477 = cljs.core.chunk_rest(seq__70854_71475__$1);
var G__71478 = c__4609__auto___71476;
var G__71479 = cljs.core.count(c__4609__auto___71476);
var G__71480 = (0);
seq__70854_71462 = G__71477;
chunk__70855_71463 = G__71478;
count__70856_71464 = G__71479;
i__70857_71465 = G__71480;
continue;
} else {
var vec__70867_71483 = cljs.core.first(seq__70854_71475__$1);
var k_71484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867_71483,(0),null);
var v_71485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867_71483,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_71484);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71484),v_71485);


var G__71488 = cljs.core.next(seq__70854_71475__$1);
var G__71489 = null;
var G__71490 = (0);
var G__71491 = (0);
seq__70854_71462 = G__71488;
chunk__70855_71463 = G__71489;
count__70856_71464 = G__71490;
i__70857_71465 = G__71491;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__70878 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70878,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70878,(1),null);
var seq__70881_71497 = cljs.core.seq(node_children);
var chunk__70883_71498 = null;
var count__70884_71499 = (0);
var i__70885_71500 = (0);
while(true){
if((i__70885_71500 < count__70884_71499)){
var child_struct_71502 = chunk__70883_71498.cljs$core$IIndexed$_nth$arity$2(null,i__70885_71500);
if((!((child_struct_71502 == null)))){
if(typeof child_struct_71502 === 'string'){
var text_71503 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71503),child_struct_71502].join(''));
} else {
var children_71504 = shadow.dom.svg_node(child_struct_71502);
if(cljs.core.seq_QMARK_(children_71504)){
var seq__70915_71507 = cljs.core.seq(children_71504);
var chunk__70917_71508 = null;
var count__70918_71509 = (0);
var i__70919_71510 = (0);
while(true){
if((i__70919_71510 < count__70918_71509)){
var child_71512 = chunk__70917_71508.cljs$core$IIndexed$_nth$arity$2(null,i__70919_71510);
if(cljs.core.truth_(child_71512)){
node.appendChild(child_71512);


var G__71513 = seq__70915_71507;
var G__71514 = chunk__70917_71508;
var G__71515 = count__70918_71509;
var G__71516 = (i__70919_71510 + (1));
seq__70915_71507 = G__71513;
chunk__70917_71508 = G__71514;
count__70918_71509 = G__71515;
i__70919_71510 = G__71516;
continue;
} else {
var G__71520 = seq__70915_71507;
var G__71521 = chunk__70917_71508;
var G__71522 = count__70918_71509;
var G__71523 = (i__70919_71510 + (1));
seq__70915_71507 = G__71520;
chunk__70917_71508 = G__71521;
count__70918_71509 = G__71522;
i__70919_71510 = G__71523;
continue;
}
} else {
var temp__5735__auto___71524 = cljs.core.seq(seq__70915_71507);
if(temp__5735__auto___71524){
var seq__70915_71525__$1 = temp__5735__auto___71524;
if(cljs.core.chunked_seq_QMARK_(seq__70915_71525__$1)){
var c__4609__auto___71528 = cljs.core.chunk_first(seq__70915_71525__$1);
var G__71529 = cljs.core.chunk_rest(seq__70915_71525__$1);
var G__71530 = c__4609__auto___71528;
var G__71531 = cljs.core.count(c__4609__auto___71528);
var G__71532 = (0);
seq__70915_71507 = G__71529;
chunk__70917_71508 = G__71530;
count__70918_71509 = G__71531;
i__70919_71510 = G__71532;
continue;
} else {
var child_71537 = cljs.core.first(seq__70915_71525__$1);
if(cljs.core.truth_(child_71537)){
node.appendChild(child_71537);


var G__71538 = cljs.core.next(seq__70915_71525__$1);
var G__71539 = null;
var G__71541 = (0);
var G__71542 = (0);
seq__70915_71507 = G__71538;
chunk__70917_71508 = G__71539;
count__70918_71509 = G__71541;
i__70919_71510 = G__71542;
continue;
} else {
var G__71546 = cljs.core.next(seq__70915_71525__$1);
var G__71547 = null;
var G__71548 = (0);
var G__71549 = (0);
seq__70915_71507 = G__71546;
chunk__70917_71508 = G__71547;
count__70918_71509 = G__71548;
i__70919_71510 = G__71549;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71504);
}
}


var G__71550 = seq__70881_71497;
var G__71551 = chunk__70883_71498;
var G__71552 = count__70884_71499;
var G__71553 = (i__70885_71500 + (1));
seq__70881_71497 = G__71550;
chunk__70883_71498 = G__71551;
count__70884_71499 = G__71552;
i__70885_71500 = G__71553;
continue;
} else {
var G__71555 = seq__70881_71497;
var G__71556 = chunk__70883_71498;
var G__71557 = count__70884_71499;
var G__71558 = (i__70885_71500 + (1));
seq__70881_71497 = G__71555;
chunk__70883_71498 = G__71556;
count__70884_71499 = G__71557;
i__70885_71500 = G__71558;
continue;
}
} else {
var temp__5735__auto___71559 = cljs.core.seq(seq__70881_71497);
if(temp__5735__auto___71559){
var seq__70881_71560__$1 = temp__5735__auto___71559;
if(cljs.core.chunked_seq_QMARK_(seq__70881_71560__$1)){
var c__4609__auto___71561 = cljs.core.chunk_first(seq__70881_71560__$1);
var G__71562 = cljs.core.chunk_rest(seq__70881_71560__$1);
var G__71563 = c__4609__auto___71561;
var G__71564 = cljs.core.count(c__4609__auto___71561);
var G__71565 = (0);
seq__70881_71497 = G__71562;
chunk__70883_71498 = G__71563;
count__70884_71499 = G__71564;
i__70885_71500 = G__71565;
continue;
} else {
var child_struct_71566 = cljs.core.first(seq__70881_71560__$1);
if((!((child_struct_71566 == null)))){
if(typeof child_struct_71566 === 'string'){
var text_71567 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71567),child_struct_71566].join(''));
} else {
var children_71568 = shadow.dom.svg_node(child_struct_71566);
if(cljs.core.seq_QMARK_(children_71568)){
var seq__70927_71569 = cljs.core.seq(children_71568);
var chunk__70929_71570 = null;
var count__70930_71571 = (0);
var i__70931_71572 = (0);
while(true){
if((i__70931_71572 < count__70930_71571)){
var child_71573 = chunk__70929_71570.cljs$core$IIndexed$_nth$arity$2(null,i__70931_71572);
if(cljs.core.truth_(child_71573)){
node.appendChild(child_71573);


var G__71574 = seq__70927_71569;
var G__71575 = chunk__70929_71570;
var G__71576 = count__70930_71571;
var G__71577 = (i__70931_71572 + (1));
seq__70927_71569 = G__71574;
chunk__70929_71570 = G__71575;
count__70930_71571 = G__71576;
i__70931_71572 = G__71577;
continue;
} else {
var G__71578 = seq__70927_71569;
var G__71579 = chunk__70929_71570;
var G__71580 = count__70930_71571;
var G__71581 = (i__70931_71572 + (1));
seq__70927_71569 = G__71578;
chunk__70929_71570 = G__71579;
count__70930_71571 = G__71580;
i__70931_71572 = G__71581;
continue;
}
} else {
var temp__5735__auto___71582__$1 = cljs.core.seq(seq__70927_71569);
if(temp__5735__auto___71582__$1){
var seq__70927_71583__$1 = temp__5735__auto___71582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70927_71583__$1)){
var c__4609__auto___71584 = cljs.core.chunk_first(seq__70927_71583__$1);
var G__71585 = cljs.core.chunk_rest(seq__70927_71583__$1);
var G__71586 = c__4609__auto___71584;
var G__71587 = cljs.core.count(c__4609__auto___71584);
var G__71588 = (0);
seq__70927_71569 = G__71585;
chunk__70929_71570 = G__71586;
count__70930_71571 = G__71587;
i__70931_71572 = G__71588;
continue;
} else {
var child_71589 = cljs.core.first(seq__70927_71583__$1);
if(cljs.core.truth_(child_71589)){
node.appendChild(child_71589);


var G__71590 = cljs.core.next(seq__70927_71583__$1);
var G__71591 = null;
var G__71592 = (0);
var G__71593 = (0);
seq__70927_71569 = G__71590;
chunk__70929_71570 = G__71591;
count__70930_71571 = G__71592;
i__70931_71572 = G__71593;
continue;
} else {
var G__71594 = cljs.core.next(seq__70927_71583__$1);
var G__71595 = null;
var G__71596 = (0);
var G__71597 = (0);
seq__70927_71569 = G__71594;
chunk__70929_71570 = G__71595;
count__70930_71571 = G__71596;
i__70931_71572 = G__71597;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71568);
}
}


var G__71598 = cljs.core.next(seq__70881_71560__$1);
var G__71599 = null;
var G__71600 = (0);
var G__71601 = (0);
seq__70881_71497 = G__71598;
chunk__70883_71498 = G__71599;
count__70884_71499 = G__71600;
i__70885_71500 = G__71601;
continue;
} else {
var G__71605 = cljs.core.next(seq__70881_71560__$1);
var G__71606 = null;
var G__71607 = (0);
var G__71608 = (0);
seq__70881_71497 = G__71605;
chunk__70883_71498 = G__71606;
count__70884_71499 = G__71607;
i__70885_71500 = G__71608;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__70938_71612 = shadow.dom._to_svg;
var G__70940_71613 = "string";
var G__70941_71614 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__70938_71612,G__70940_71613,G__70941_71614);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__70949_71617 = shadow.dom._to_svg;
var G__70950_71618 = "null";
var G__70951_71619 = (function (_){
return null;
});
goog.object.set(G__70949_71617,G__70950_71618,G__70951_71619);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___71620 = arguments.length;
var i__4790__auto___71621 = (0);
while(true){
if((i__4790__auto___71621 < len__4789__auto___71620)){
args__4795__auto__.push((arguments[i__4790__auto___71621]));

var G__71622 = (i__4790__auto___71621 + (1));
i__4790__auto___71621 = G__71622;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq70954){
var G__70955 = cljs.core.first(seq70954);
var seq70954__$1 = cljs.core.next(seq70954);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70955,seq70954__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__70964 = arguments.length;
switch (G__70964) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__70968_71626 = shadow.dom.dom_node(el);
var G__70969_71627 = cljs.core.name(event);
var G__70970_71628 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__70968_71626,G__70969_71627,G__70970_71628) : shadow.dom.dom_listen.call(null,G__70968_71626,G__70969_71627,G__70970_71628));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__47540__auto___71631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47541__auto__ = (function (){var switch__47439__auto__ = (function (state_70977){
var state_val_70978 = (state_70977[(1)]);
if((state_val_70978 === (1))){
var state_70977__$1 = state_70977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70977__$1,(2),once_or_cleanup);
} else {
if((state_val_70978 === (2))){
var inst_70974 = (state_70977[(2)]);
var inst_70975 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_70977__$1 = (function (){var statearr_70981 = state_70977;
(statearr_70981[(7)] = inst_70974);

return statearr_70981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70977__$1,inst_70975);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47440__auto__ = null;
var shadow$dom$state_machine__47440__auto____0 = (function (){
var statearr_70982 = [null,null,null,null,null,null,null,null];
(statearr_70982[(0)] = shadow$dom$state_machine__47440__auto__);

(statearr_70982[(1)] = (1));

return statearr_70982;
});
var shadow$dom$state_machine__47440__auto____1 = (function (state_70977){
while(true){
var ret_value__47441__auto__ = (function (){try{while(true){
var result__47442__auto__ = switch__47439__auto__(state_70977);
if(cljs.core.keyword_identical_QMARK_(result__47442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47442__auto__;
}
break;
}
}catch (e70983){if((e70983 instanceof Object)){
var ex__47443__auto__ = e70983;
var statearr_70984_71632 = state_70977;
(statearr_70984_71632[(5)] = ex__47443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71633 = state_70977;
state_70977 = G__71633;
continue;
} else {
return ret_value__47441__auto__;
}
break;
}
});
shadow$dom$state_machine__47440__auto__ = function(state_70977){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47440__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47440__auto____1.call(this,state_70977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47440__auto____0;
shadow$dom$state_machine__47440__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47440__auto____1;
return shadow$dom$state_machine__47440__auto__;
})()
})();
var state__47542__auto__ = (function (){var statearr_70987 = (f__47541__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47541__auto__.cljs$core$IFn$_invoke$arity$0() : f__47541__auto__.call(null));
(statearr_70987[(6)] = c__47540__auto___71631);

return statearr_70987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47542__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
