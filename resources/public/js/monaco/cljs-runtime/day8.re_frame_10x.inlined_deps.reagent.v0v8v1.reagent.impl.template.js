goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper = (function (){
});

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.template/NativeWrapper");

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.template/NativeWrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.__GT_NativeWrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$__GT_NativeWrapper(){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.valid_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$valid_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cache_get = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cached_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$cached_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(k)){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.js_val_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$kv_conv(o,k,v){
var G__60625 = o;
(G__60625[day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cached_prop_name(k)] = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value.call(null,v)));

return G__60625;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$convert_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__60744__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__60744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60745__i = 0, G__60745__a = new Array(arguments.length -  0);
while (G__60745__i < G__60745__a.length) {G__60745__a[G__60745__i] = arguments[G__60745__i + 0]; ++G__60745__i;}
  args = new cljs.core.IndexedSeq(G__60745__a,0,null);
} 
return G__60744__delegate.call(this,args);};
G__60744.cljs$lang$maxFixedArity = 0;
G__60744.cljs$lang$applyTo = (function (arglist__60746){
var args = cljs.core.seq(arglist__60746);
return G__60744__delegate(args);
});
G__60744.cljs$core$IFn$_invoke$arity$variadic = G__60744__delegate;
return G__60744;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.custom_prop_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cached_custom_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$cached_custom_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(k)){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.custom_prop_name_cache[cljs.core.name(k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.custom_kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$custom_kv_conv(o,k,v){
var G__60631 = o;
(G__60631[day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cached_custom_prop_name(k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value(v));

return G__60631;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_custom_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$convert_custom_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__60752__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__60752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60755__i = 0, G__60755__a = new Array(arguments.length -  0);
while (G__60755__i < G__60755__a.length) {G__60755__a[G__60755__i] = arguments[G__60755__i + 0]; ++G__60755__i;}
  args = new cljs.core.IndexedSeq(G__60755__a,0,null);
} 
return G__60752__delegate.call(this,args);};
G__60752.cljs$lang$maxFixedArity = 0;
G__60752.cljs$lang$applyTo = (function (arglist__60756){
var args = cljs.core.seq(arglist__60756);
return G__60752__delegate(args);
});
G__60752.cljs$core$IFn$_invoke$arity$variadic = G__60752__delegate;
return G__60752;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.oset = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$oset(o,k,v){
var G__60642 = (((o == null))?({}):o);
(G__60642[k] = v);

return G__60642;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.oget = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.set_id_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$set_id_class(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["class"]);
var G__60643 = props;
var G__60643__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60643,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__60643);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60643__$1,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var old_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if((old_class == null)){
return class$;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(old_class))?cljs.core.name(old_class):old_class))].join('');
}
})());
} else {
return G__60643__$1;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.stringify_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$stringify_class(p__60651){
var map__60652 = p__60651;
var map__60652__$1 = (((((!((map__60652 == null))))?(((((map__60652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60652):map__60652);
var props = map__60652__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60652__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_(c)){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(c)){
return cljs.core.name(c);
} else {
return c;
}
} else {
return null;
}
}),class$)));
} else {
return props;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$convert_props(props,id_class){
var props__$1 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.set_id_class(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.stringify_class(props),id_class);
if(cljs.core.truth_((id_class["custom"]))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value(props__$1);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.has_selection_api_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_node_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__60658){
var map__60659 = p__60658;
var map__60659__$1 = (((((!((map__60659 == null))))?(((((map__60659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60659):map__60659);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60659__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.do_after_render((function (){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_set_value.call(null,component));
}));
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_handle_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.do_after_render((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_render_setup = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((((!((jsprops == null))))?(function (){var and__4174__auto__ = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4174__auto__)){
return jsprops.hasOwnProperty("value");
} else {
return and__4174__auto__;
}
})():false))){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__60677 = jsprops;
(G__60677["defaultValue"] = value);

(G__60677["onChange"] = (function (p1__60672_SHARP_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_handle_change(this$,on_change,p1__60672_SHARP_);
}));

return G__60677;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_unmount = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$input_component_QMARK_(x){
var G__60680 = x;
switch (G__60680) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reagent_input_class = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_render_setup(this$,jsprops);

return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reagent_input = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$reagent_input(){
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reagent_input_class == null)){
(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reagent_input_class = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_spec));
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reagent_input_class;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.parse_tag = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$parse_tag(hiccup_tag){
var vec__60686 = cljs.core.next(cljs.core.re_matches(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60686,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60686,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60686,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "class": class$__$1, "custom": cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-"))});
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.try_get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e60694){var e = e60694;
return null;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.key_from_vec = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$key_from_vec(v){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5737__auto__;
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reag_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$reag_element(tag,v){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5739__auto___60817 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.key_from_vec(v);
if((temp__5739__auto___60817 == null)){
} else {
var key_60818 = temp__5739__auto___60817;
(jsprops["key"] = key_60818);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.fragment_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_prop_value(((hasprops)?props:null));
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5739__auto___60820 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.key_from_vec(argv);
if((temp__5739__auto___60820 == null)){
} else {
var key_60822 = temp__5739__auto___60820;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.oset(jsprops,"key",key_60822);
}

return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,module$node_modules$react$index.Fragment,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.call(null,argv,module$node_modules$react$index.Fragment,jsprops,first_child));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$adapt_react_class(c){
var G__60698 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.__GT_NativeWrapper();
(G__60698["name"] = c);

(G__60698["id"] = null);

(G__60698["class"] = null);

return G__60698;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.tag_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cached_parse = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$cached_parse(x){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.tag_name_cache,x);
if((temp__5737__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.tag_name_cache[x] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.parse_tag(x));
} else {
var s = temp__5737__auto__;
return s;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.native_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.input_component_QMARK_(comp)){
var G__60702 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__60702) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element.call(null,G__60702));
} else {
var key = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.oset(jsprops,"key",key));
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.str_coll = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(x);
var G__60704 = n;
switch (G__60704) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll));

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$hiccup_err(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60836 = arguments.length;
var i__4790__auto___60837 = (0);
while(true){
if((i__4790__auto___60837 < len__4789__auto___60836)){
args__4795__auto__.push((arguments[i__4790__auto___60837]));

var G__60838 = (i__4790__auto___60837 + (1));
i__4790__auto___60837 = G__60838;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.str_coll(v),"\n",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name()].join('');
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq60708){
var G__60709 = cljs.core.first(seq60708);
var seq60708__$1 = cljs.core.next(seq60708);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60709,seq60708__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.vec_to_elem = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.fragment_element(v);
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__60710 = pos;
switch (G__60710) {
case (-1):
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.native_element(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__60844 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
v = G__60844;
continue;

}
} else {
if((tag instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.NativeWrapper)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.native_element(tag,v,(1));
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.reag_element(tag,v);

}
}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$as_element(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4666__auto___60848 = a.length;
var i_60849 = (0);
while(true){
if((i_60849 < n__4666__auto___60848)){
(a[i_60849] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element((a[i_60849])));

var G__60850 = (i_60849 + (1));
i_60849 = G__60850;
continue;
} else {
}
break;
}

return a;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq_dev = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4666__auto___60852 = a.length;
var i_60853 = (0);
while(true){
if((i_60853 < n__4666__auto___60852)){
var val_60854 = (a[i_60853]);
if(((cljs.core.vector_QMARK_(val_60854)) && ((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.key_from_vec(val_60854) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_60853] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element(val_60854));

var G__60855 = (i_60853 + (1));
i_60853 = G__60855;
continue;
} else {
}
break;
}

return a;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq_check = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__60725 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.check_derefs((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.expand_seq_dev(x,ctx);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60725,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60725,(1),null);
if(cljs.core.truth_(derefed)){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.make_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__60731 = (cljs.core.count(argv) - first_child);
switch (G__60731) {
case (0):
return module$node_modules$react$index.createElement(comp,jsprops);

break;
case (1):
var G__60732 = comp;
var G__60733 = jsprops;
var G__60734 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return module$node_modules$react$index.createElement(G__60732,G__60733,G__60734);

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element(v));
} else {
}

return a;
}),[comp,jsprops],argv));

}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.js.map
