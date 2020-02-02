goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___72567 = arguments.length;
var i__4790__auto___72568 = (0);
while(true){
if((i__4790__auto___72568 < len__4789__auto___72567)){
args__4795__auto__.push((arguments[i__4790__auto___72568]));

var G__72569 = (i__4790__auto___72568 + (1));
i__4790__auto___72568 = G__72569;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq72398){
var G__72399 = cljs.core.first(seq72398);
var seq72398__$1 = cljs.core.next(seq72398);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72399,seq72398__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__72410){
var map__72412 = p__72410;
var map__72412__$1 = (((((!((map__72412 == null))))?(((((map__72412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72412):map__72412);
var src = map__72412__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72412__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72412__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__72415 = cljs.core.seq(sources);
var chunk__72416 = null;
var count__72417 = (0);
var i__72418 = (0);
while(true){
if((i__72418 < count__72417)){
var map__72425 = chunk__72416.cljs$core$IIndexed$_nth$arity$2(null,i__72418);
var map__72425__$1 = (((((!((map__72425 == null))))?(((((map__72425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72425):map__72425);
var src = map__72425__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72425__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72425__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72425__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e72427){var e_72570 = e72427;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_72570);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_72570.message)].join('')));
}

var G__72571 = seq__72415;
var G__72572 = chunk__72416;
var G__72573 = count__72417;
var G__72574 = (i__72418 + (1));
seq__72415 = G__72571;
chunk__72416 = G__72572;
count__72417 = G__72573;
i__72418 = G__72574;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72415);
if(temp__5735__auto__){
var seq__72415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72415__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72415__$1);
var G__72575 = cljs.core.chunk_rest(seq__72415__$1);
var G__72576 = c__4609__auto__;
var G__72577 = cljs.core.count(c__4609__auto__);
var G__72578 = (0);
seq__72415 = G__72575;
chunk__72416 = G__72576;
count__72417 = G__72577;
i__72418 = G__72578;
continue;
} else {
var map__72430 = cljs.core.first(seq__72415__$1);
var map__72430__$1 = (((((!((map__72430 == null))))?(((((map__72430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72430):map__72430);
var src = map__72430__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72430__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72430__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72430__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72430__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e72432){var e_72579 = e72432;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_72579);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_72579.message)].join('')));
}

var G__72580 = cljs.core.next(seq__72415__$1);
var G__72581 = null;
var G__72582 = (0);
var G__72583 = (0);
seq__72415 = G__72580;
chunk__72416 = G__72581;
count__72417 = G__72582;
i__72418 = G__72583;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__72433 = cljs.core.seq(js_requires);
var chunk__72434 = null;
var count__72435 = (0);
var i__72436 = (0);
while(true){
if((i__72436 < count__72435)){
var js_ns = chunk__72434.cljs$core$IIndexed$_nth$arity$2(null,i__72436);
var require_str_72584 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_72584);


var G__72585 = seq__72433;
var G__72586 = chunk__72434;
var G__72587 = count__72435;
var G__72588 = (i__72436 + (1));
seq__72433 = G__72585;
chunk__72434 = G__72586;
count__72435 = G__72587;
i__72436 = G__72588;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72433);
if(temp__5735__auto__){
var seq__72433__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72433__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72433__$1);
var G__72589 = cljs.core.chunk_rest(seq__72433__$1);
var G__72590 = c__4609__auto__;
var G__72591 = cljs.core.count(c__4609__auto__);
var G__72592 = (0);
seq__72433 = G__72589;
chunk__72434 = G__72590;
count__72435 = G__72591;
i__72436 = G__72592;
continue;
} else {
var js_ns = cljs.core.first(seq__72433__$1);
var require_str_72593 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_72593);


var G__72594 = cljs.core.next(seq__72433__$1);
var G__72595 = null;
var G__72596 = (0);
var G__72597 = (0);
seq__72433 = G__72594;
chunk__72434 = G__72595;
count__72435 = G__72596;
i__72436 = G__72597;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__72439 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__72439) : callback.call(null,G__72439));
} else {
var G__72440 = shadow.cljs.devtools.client.env.files_url();
var G__72441 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__72442 = "POST";
var G__72443 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__72444 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__72440,G__72441,G__72442,G__72443,G__72444);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__72446){
var map__72447 = p__72446;
var map__72447__$1 = (((((!((map__72447 == null))))?(((((map__72447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72447):map__72447);
var msg = map__72447__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72447__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72447__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__72449 = info;
var map__72449__$1 = (((((!((map__72449 == null))))?(((((map__72449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72449):map__72449);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72449__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72449__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72451(s__72452){
return (new cljs.core.LazySeq(null,(function (){
var s__72452__$1 = s__72452;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72452__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__72457 = cljs.core.first(xs__6292__auto__);
var map__72457__$1 = (((((!((map__72457 == null))))?(((((map__72457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72457):map__72457);
var src = map__72457__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72457__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72457__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__72452__$1,map__72457,map__72457__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__72449,map__72449__$1,sources,compiled,map__72447,map__72447__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72451_$_iter__72453(s__72454){
return (new cljs.core.LazySeq(null,((function (s__72452__$1,map__72457,map__72457__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__72449,map__72449__$1,sources,compiled,map__72447,map__72447__$1,msg,info,reload_info){
return (function (){
var s__72454__$1 = s__72454;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__72454__$1);
if(temp__5735__auto____$1){
var s__72454__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72454__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72454__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72456 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72455 = (0);
while(true){
if((i__72455 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72455);
cljs.core.chunk_append(b__72456,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__72598 = (i__72455 + (1));
i__72455 = G__72598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72456),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72451_$_iter__72453(cljs.core.chunk_rest(s__72454__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72456),null);
}
} else {
var warning = cljs.core.first(s__72454__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72451_$_iter__72453(cljs.core.rest(s__72454__$2)));
}
} else {
return null;
}
break;
}
});})(s__72452__$1,map__72457,map__72457__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__72449,map__72449__$1,sources,compiled,map__72447,map__72447__$1,msg,info,reload_info))
,null,null));
});})(s__72452__$1,map__72457,map__72457__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__72449,map__72449__$1,sources,compiled,map__72447,map__72447__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72451(cljs.core.rest(s__72452__$1)));
} else {
var G__72599 = cljs.core.rest(s__72452__$1);
s__72452__$1 = G__72599;
continue;
}
} else {
var G__72600 = cljs.core.rest(s__72452__$1);
s__72452__$1 = G__72600;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__72459_72601 = cljs.core.seq(warnings);
var chunk__72460_72602 = null;
var count__72461_72603 = (0);
var i__72462_72604 = (0);
while(true){
if((i__72462_72604 < count__72461_72603)){
var map__72467_72605 = chunk__72460_72602.cljs$core$IIndexed$_nth$arity$2(null,i__72462_72604);
var map__72467_72606__$1 = (((((!((map__72467_72605 == null))))?(((((map__72467_72605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72467_72605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72467_72605):map__72467_72605);
var w_72607 = map__72467_72606__$1;
var msg_72608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72467_72606__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_72609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72467_72606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_72610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72467_72606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_72611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72467_72606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_72611)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_72609),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_72610),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_72608__$1)].join(''));


var G__72612 = seq__72459_72601;
var G__72613 = chunk__72460_72602;
var G__72614 = count__72461_72603;
var G__72615 = (i__72462_72604 + (1));
seq__72459_72601 = G__72612;
chunk__72460_72602 = G__72613;
count__72461_72603 = G__72614;
i__72462_72604 = G__72615;
continue;
} else {
var temp__5735__auto___72616 = cljs.core.seq(seq__72459_72601);
if(temp__5735__auto___72616){
var seq__72459_72617__$1 = temp__5735__auto___72616;
if(cljs.core.chunked_seq_QMARK_(seq__72459_72617__$1)){
var c__4609__auto___72618 = cljs.core.chunk_first(seq__72459_72617__$1);
var G__72619 = cljs.core.chunk_rest(seq__72459_72617__$1);
var G__72620 = c__4609__auto___72618;
var G__72621 = cljs.core.count(c__4609__auto___72618);
var G__72622 = (0);
seq__72459_72601 = G__72619;
chunk__72460_72602 = G__72620;
count__72461_72603 = G__72621;
i__72462_72604 = G__72622;
continue;
} else {
var map__72469_72623 = cljs.core.first(seq__72459_72617__$1);
var map__72469_72624__$1 = (((((!((map__72469_72623 == null))))?(((((map__72469_72623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72469_72623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72469_72623):map__72469_72623);
var w_72625 = map__72469_72624__$1;
var msg_72626__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72469_72624__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_72627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72469_72624__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_72628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72469_72624__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_72629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72469_72624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_72629)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_72627),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_72628),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_72626__$1)].join(''));


var G__72630 = cljs.core.next(seq__72459_72617__$1);
var G__72631 = null;
var G__72632 = (0);
var G__72633 = (0);
seq__72459_72601 = G__72630;
chunk__72460_72602 = G__72631;
count__72461_72603 = G__72632;
i__72462_72604 = G__72633;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__72471){
var map__72472 = p__72471;
var map__72472__$1 = (((((!((map__72472 == null))))?(((((map__72472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72472):map__72472);
var src = map__72472__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72472__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72472__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__72474){
var map__72475 = p__72474;
var map__72475__$1 = (((((!((map__72475 == null))))?(((((map__72475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72475):map__72475);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72475__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__72477){
var map__72478 = p__72477;
var map__72478__$1 = (((((!((map__72478 == null))))?(((((map__72478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72478):map__72478);
var rc = map__72478__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72478__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__72445_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__72445_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__72481){
var map__72482 = p__72481;
var map__72482__$1 = (((((!((map__72482 == null))))?(((((map__72482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72482):map__72482);
var msg = map__72482__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72482__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__72484 = cljs.core.seq(updates);
var chunk__72486 = null;
var count__72487 = (0);
var i__72488 = (0);
while(true){
if((i__72488 < count__72487)){
var path = chunk__72486.cljs$core$IIndexed$_nth$arity$2(null,i__72488);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__72515_72634 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__72518_72635 = null;
var count__72519_72636 = (0);
var i__72520_72637 = (0);
while(true){
if((i__72520_72637 < count__72519_72636)){
var node_72638 = chunk__72518_72635.cljs$core$IIndexed$_nth$arity$2(null,i__72520_72637);
var path_match_72639 = shadow.cljs.devtools.client.browser.match_paths(node_72638.getAttribute("href"),path);
if(cljs.core.truth_(path_match_72639)){
var new_link_72640 = (function (){var G__72525 = node_72638.cloneNode(true);
G__72525.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_72639),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72525;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_72639], 0));

goog.dom.insertSiblingAfter(new_link_72640,node_72638);

goog.dom.removeNode(node_72638);


var G__72641 = seq__72515_72634;
var G__72642 = chunk__72518_72635;
var G__72643 = count__72519_72636;
var G__72644 = (i__72520_72637 + (1));
seq__72515_72634 = G__72641;
chunk__72518_72635 = G__72642;
count__72519_72636 = G__72643;
i__72520_72637 = G__72644;
continue;
} else {
var G__72645 = seq__72515_72634;
var G__72646 = chunk__72518_72635;
var G__72647 = count__72519_72636;
var G__72648 = (i__72520_72637 + (1));
seq__72515_72634 = G__72645;
chunk__72518_72635 = G__72646;
count__72519_72636 = G__72647;
i__72520_72637 = G__72648;
continue;
}
} else {
var temp__5735__auto___72649 = cljs.core.seq(seq__72515_72634);
if(temp__5735__auto___72649){
var seq__72515_72650__$1 = temp__5735__auto___72649;
if(cljs.core.chunked_seq_QMARK_(seq__72515_72650__$1)){
var c__4609__auto___72651 = cljs.core.chunk_first(seq__72515_72650__$1);
var G__72652 = cljs.core.chunk_rest(seq__72515_72650__$1);
var G__72653 = c__4609__auto___72651;
var G__72654 = cljs.core.count(c__4609__auto___72651);
var G__72655 = (0);
seq__72515_72634 = G__72652;
chunk__72518_72635 = G__72653;
count__72519_72636 = G__72654;
i__72520_72637 = G__72655;
continue;
} else {
var node_72656 = cljs.core.first(seq__72515_72650__$1);
var path_match_72657 = shadow.cljs.devtools.client.browser.match_paths(node_72656.getAttribute("href"),path);
if(cljs.core.truth_(path_match_72657)){
var new_link_72658 = (function (){var G__72526 = node_72656.cloneNode(true);
G__72526.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_72657),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72526;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_72657], 0));

goog.dom.insertSiblingAfter(new_link_72658,node_72656);

goog.dom.removeNode(node_72656);


var G__72659 = cljs.core.next(seq__72515_72650__$1);
var G__72660 = null;
var G__72661 = (0);
var G__72662 = (0);
seq__72515_72634 = G__72659;
chunk__72518_72635 = G__72660;
count__72519_72636 = G__72661;
i__72520_72637 = G__72662;
continue;
} else {
var G__72663 = cljs.core.next(seq__72515_72650__$1);
var G__72664 = null;
var G__72665 = (0);
var G__72666 = (0);
seq__72515_72634 = G__72663;
chunk__72518_72635 = G__72664;
count__72519_72636 = G__72665;
i__72520_72637 = G__72666;
continue;
}
}
} else {
}
}
break;
}


var G__72667 = seq__72484;
var G__72668 = chunk__72486;
var G__72669 = count__72487;
var G__72670 = (i__72488 + (1));
seq__72484 = G__72667;
chunk__72486 = G__72668;
count__72487 = G__72669;
i__72488 = G__72670;
continue;
} else {
var G__72671 = seq__72484;
var G__72672 = chunk__72486;
var G__72673 = count__72487;
var G__72674 = (i__72488 + (1));
seq__72484 = G__72671;
chunk__72486 = G__72672;
count__72487 = G__72673;
i__72488 = G__72674;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72484);
if(temp__5735__auto__){
var seq__72484__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72484__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72484__$1);
var G__72675 = cljs.core.chunk_rest(seq__72484__$1);
var G__72676 = c__4609__auto__;
var G__72677 = cljs.core.count(c__4609__auto__);
var G__72678 = (0);
seq__72484 = G__72675;
chunk__72486 = G__72676;
count__72487 = G__72677;
i__72488 = G__72678;
continue;
} else {
var path = cljs.core.first(seq__72484__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__72527_72679 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__72530_72680 = null;
var count__72531_72681 = (0);
var i__72532_72682 = (0);
while(true){
if((i__72532_72682 < count__72531_72681)){
var node_72683 = chunk__72530_72680.cljs$core$IIndexed$_nth$arity$2(null,i__72532_72682);
var path_match_72684 = shadow.cljs.devtools.client.browser.match_paths(node_72683.getAttribute("href"),path);
if(cljs.core.truth_(path_match_72684)){
var new_link_72685 = (function (){var G__72537 = node_72683.cloneNode(true);
G__72537.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_72684),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72537;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_72684], 0));

goog.dom.insertSiblingAfter(new_link_72685,node_72683);

goog.dom.removeNode(node_72683);


var G__72686 = seq__72527_72679;
var G__72687 = chunk__72530_72680;
var G__72688 = count__72531_72681;
var G__72689 = (i__72532_72682 + (1));
seq__72527_72679 = G__72686;
chunk__72530_72680 = G__72687;
count__72531_72681 = G__72688;
i__72532_72682 = G__72689;
continue;
} else {
var G__72690 = seq__72527_72679;
var G__72691 = chunk__72530_72680;
var G__72692 = count__72531_72681;
var G__72693 = (i__72532_72682 + (1));
seq__72527_72679 = G__72690;
chunk__72530_72680 = G__72691;
count__72531_72681 = G__72692;
i__72532_72682 = G__72693;
continue;
}
} else {
var temp__5735__auto___72694__$1 = cljs.core.seq(seq__72527_72679);
if(temp__5735__auto___72694__$1){
var seq__72527_72695__$1 = temp__5735__auto___72694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72527_72695__$1)){
var c__4609__auto___72696 = cljs.core.chunk_first(seq__72527_72695__$1);
var G__72697 = cljs.core.chunk_rest(seq__72527_72695__$1);
var G__72698 = c__4609__auto___72696;
var G__72699 = cljs.core.count(c__4609__auto___72696);
var G__72700 = (0);
seq__72527_72679 = G__72697;
chunk__72530_72680 = G__72698;
count__72531_72681 = G__72699;
i__72532_72682 = G__72700;
continue;
} else {
var node_72701 = cljs.core.first(seq__72527_72695__$1);
var path_match_72702 = shadow.cljs.devtools.client.browser.match_paths(node_72701.getAttribute("href"),path);
if(cljs.core.truth_(path_match_72702)){
var new_link_72703 = (function (){var G__72538 = node_72701.cloneNode(true);
G__72538.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_72702),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72538;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_72702], 0));

goog.dom.insertSiblingAfter(new_link_72703,node_72701);

goog.dom.removeNode(node_72701);


var G__72704 = cljs.core.next(seq__72527_72695__$1);
var G__72705 = null;
var G__72706 = (0);
var G__72707 = (0);
seq__72527_72679 = G__72704;
chunk__72530_72680 = G__72705;
count__72531_72681 = G__72706;
i__72532_72682 = G__72707;
continue;
} else {
var G__72708 = cljs.core.next(seq__72527_72695__$1);
var G__72709 = null;
var G__72710 = (0);
var G__72711 = (0);
seq__72527_72679 = G__72708;
chunk__72530_72680 = G__72709;
count__72531_72681 = G__72710;
i__72532_72682 = G__72711;
continue;
}
}
} else {
}
}
break;
}


var G__72712 = cljs.core.next(seq__72484__$1);
var G__72713 = null;
var G__72714 = (0);
var G__72715 = (0);
seq__72484 = G__72712;
chunk__72486 = G__72713;
count__72487 = G__72714;
i__72488 = G__72715;
continue;
} else {
var G__72716 = cljs.core.next(seq__72484__$1);
var G__72717 = null;
var G__72718 = (0);
var G__72719 = (0);
seq__72484 = G__72716;
chunk__72486 = G__72717;
count__72487 = G__72718;
i__72488 = G__72719;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__72539){
var map__72540 = p__72539;
var map__72540__$1 = (((((!((map__72540 == null))))?(((((map__72540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72540):map__72540);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72540__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__72542,done){
var map__72543 = p__72542;
var map__72543__$1 = (((((!((map__72543 == null))))?(((((map__72543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72543):map__72543);
var msg = map__72543__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72543__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72543__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72543__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__72545){
var map__72546 = p__72545;
var map__72546__$1 = (((((!((map__72546 == null))))?(((((map__72546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72546):map__72546);
var src = map__72546__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72546__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e72548){var e = e72548;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__72549,done){
var map__72550 = p__72549;
var map__72550__$1 = (((((!((map__72550 == null))))?(((((map__72550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72550):map__72550);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72550__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72550__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__72552){
var map__72553 = p__72552;
var map__72553__$1 = (((((!((map__72553 == null))))?(((((map__72553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72553):map__72553);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72553__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72553__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__72555,done){
var map__72556 = p__72555;
var map__72556__$1 = (((((!((map__72556 == null))))?(((((map__72556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72556):map__72556);
var msg = map__72556__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72556__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__72558_72720 = type;
var G__72558_72721__$1 = (((G__72558_72720 instanceof cljs.core.Keyword))?G__72558_72720.fqn:null);
switch (G__72558_72721__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__72559 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__72560 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__72561 = "POST";
var G__72562 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__72563 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__72559,G__72560,G__72561,G__72562,G__72563);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__72565 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__72564 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__72564.cljs$core$IFn$_invoke$arity$1 ? fexpr__72564.cljs$core$IFn$_invoke$arity$1(G__72565) : fexpr__72564.call(null,G__72565));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e72566){var e = e72566;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___72723 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___72723)){
var s_72724 = temp__5735__auto___72723;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_72724.onclose = (function (e){
return null;
}));

s_72724.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
