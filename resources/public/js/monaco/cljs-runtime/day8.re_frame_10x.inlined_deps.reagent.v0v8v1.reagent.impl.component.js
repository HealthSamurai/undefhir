goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component');
goog.require('cljs.core');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__60601 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__60602 = (i + (1));
m = G__60601;
i = G__60602;
continue;
} else {
return m;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$props_argv(c,p){
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5737__auto__;
return a;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_argv(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,(c["props"]));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_props(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__60472 = (p["children"]);
return module$node_modules$react$index.Children.toArray(G__60472);
})());
} else {
var v = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_children(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__60483 = c;
var G__60483__$1 = (((G__60483 == null))?null:G__60483.prototype);
if((G__60483__$1 == null)){
return null;
} else {
return (G__60483__$1["reagentRender"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__60487 = c;
var G__60487__$1 = (((G__60487 == null))?null:G__60487.prototype);
if((G__60487__$1 == null)){
return null;
} else {
return (G__60487__$1["render"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cached_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__60500 = n;
switch (G__60500) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__60617__delegate = function (args){
var G__60505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__60505) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.call(null,G__60505));
};
var G__60617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60618__i = 0, G__60618__a = new Array(arguments.length -  0);
while (G__60618__i < G__60618__a.length) {G__60618__a[G__60618__i] = arguments[G__60618__i + 0]; ++G__60618__i;}
  args = new cljs.core.IndexedSeq(G__60618__a,0,null);
} 
return G__60617__delegate.call(this,args);};
G__60617.cljs$lang$maxFixedArity = 0;
G__60617.cljs$lang$applyTo = (function (arglist__60619){
var args = cljs.core.seq(arglist__60619);
return G__60617__delegate(args);
});
G__60617.cljs$core$IFn$_invoke$arity$variadic = G__60617__delegate;
return G__60617;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__60620 = c;
c = G__60620;
continue;
} else {
return res;

}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__60512 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__60513 = c;
(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__60513);

try{var ok = [false];
try{var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.call(null)))].join(''));
} else {
}
}
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__60512);
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$render(){
var c = this;
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_non_reactive_STAR_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run_in_reaction((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render(c);
}),c,"cljsRatom",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.queue_render,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.custom_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper(key,f){
var G__60530 = key;
var G__60530__$1 = (((G__60530 instanceof cljs.core.Keyword))?G__60530.fqn:null);
switch (G__60530__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom(c),f.call(c,c));
});

break;
case "componentWillReceiveProps":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4185__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__4185__auto____$1 = noargv;
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e60542){var e = e60542;
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv(c),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "componentDidUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,oldprops));
});

break;
case "componentWillMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__60554_60626 = (c["cljsRatom"]);
if((G__60554_60626 == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_(G__60554_60626);
}

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_wrapper(key,f,name){
var wrap = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4174__auto__ = wrap;
if(cljs.core.truth_(and__4174__auto__)){
return f;
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4185__auto__ = wrap;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return f;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.memoize_1(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dash_to_camel);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.camelify_map_keys = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.add_obligatory = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.obligatory,fun_map], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_funs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$wrap_funs(fmap){
var renders_60632 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_60633 = cljs.core.first(cljs.core.vals(renders_60632));
if((cljs.core.count(renders_60632) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_60632))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_60633)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_60633], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4185__auto__ = render_fun;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(render_fun__$1);
}
})());
var name__$1 = (function (){var G__60568 = name;
switch (G__60568) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_wrapper(k,v,name__$1));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.static_fns)], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.map_to_js = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__60569 = o;
(G__60569[cljs.core.name(k)] = v);

return G__60569;
}),({}),m);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cljsify = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cljsify(body){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.map_to_js(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_funs(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.add_obligatory(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.camelify_map_keys(body))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var G__60573 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cljsify(body);
return module$node_modules$create_react_class$index(G__60573);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__60574 = fiber;
var G__60574__$1 = (((G__60574 == null))?null:(G__60574["type"]));
if((G__60574__$1 == null)){
return null;
} else {
return (G__60574__$1["displayName"]);
}
})();
var parent = (function (){var G__60575 = fiber;
if((G__60575 == null)){
return null;
} else {
return (G__60575["return"]);
}
})();
var path = (function (){var G__60576 = parent;
var G__60576__$1 = (((G__60576 == null))?null:(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__60576) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.call(null,G__60576)));
if((G__60576__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60576__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$component_path(c){
var temp__5733__auto__ = (function (){var or__4185__auto__ = (function (){var G__60578 = c;
if((G__60578 == null)){
return null;
} else {
return (G__60578["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__60579 = c;
if((G__60579 == null)){
return null;
} else {
return G__60579._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var fiber = temp__5733__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path(fiber);
} else {
var instance = (function (){var or__4185__auto__ = (function (){var G__60581 = c;
if((G__60581 == null)){
return null;
} else {
return (G__60581["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__60583 = c;
if((G__60583 == null)){
return null;
} else {
return G__60583._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4185__auto__ = (function (){var G__60585 = instance;
if((G__60585 == null)){
return null;
} else {
return (G__60585["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__60586 = instance;
if((G__60586 == null)){
return null;
} else {
return G__60586._currentElement;
}
}
})();
var name = (function (){var G__60587 = elem;
var G__60587__$1 = (((G__60587 == null))?null:(G__60587["type"]));
if((G__60587__$1 == null)){
return null;
} else {
return (G__60587__$1["displayName"]);
}
})();
var owner = (function (){var or__4185__auto__ = (function (){var G__60589 = elem;
if((G__60589 == null)){
return null;
} else {
return (G__60589["_owner"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__60590 = elem;
if((G__60590 == null)){
return null;
} else {
return G__60590._owner;
}
}
})();
var path = (function (){var G__60591 = owner;
var G__60591__$1 = (((G__60591 == null))?null:(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__60591) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.call(null,G__60591)));
if((G__60591__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60591__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$comp_name(){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4185__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__60594 = c;
var G__60594__$1 = (((G__60594 == null))?null:G__60594.constructor);
if((G__60594__$1 == null)){
return null;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(G__60594__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",n,")"].join('');
} else {
return "";
}

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fn_to_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_(f)) && ((!(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_(f)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class(withrender);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class(f,res);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$as_class(tag){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cached_react_class(tag);
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5737__auto__;
return cached_class;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reactify_component(comp){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.js.map
