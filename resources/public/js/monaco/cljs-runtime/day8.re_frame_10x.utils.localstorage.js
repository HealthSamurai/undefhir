goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__66864 = arguments.length;
switch (G__66864) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__66866 = cljs.core.seq(Object.keys(localStorage));
var chunk__66867 = null;
var count__66868 = (0);
var i__66869 = (0);
while(true){
if((i__66869 < count__66868)){
var k = chunk__66867.cljs$core$IIndexed$_nth$arity$2(null,i__66869);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__66911 = seq__66866;
var G__66912 = chunk__66867;
var G__66913 = count__66868;
var G__66914 = (i__66869 + (1));
seq__66866 = G__66911;
chunk__66867 = G__66912;
count__66868 = G__66913;
i__66869 = G__66914;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66866);
if(temp__5735__auto__){
var seq__66866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66866__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66866__$1);
var G__66919 = cljs.core.chunk_rest(seq__66866__$1);
var G__66920 = c__4609__auto__;
var G__66921 = cljs.core.count(c__4609__auto__);
var G__66922 = (0);
seq__66866 = G__66919;
chunk__66867 = G__66920;
count__66868 = G__66921;
i__66869 = G__66922;
continue;
} else {
var k = cljs.core.first(seq__66866__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__66935 = cljs.core.next(seq__66866__$1);
var G__66936 = null;
var G__66937 = (0);
var G__66938 = (0);
seq__66866 = G__66935;
chunk__66867 = G__66936;
count__66868 = G__66937;
i__66869 = G__66938;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
