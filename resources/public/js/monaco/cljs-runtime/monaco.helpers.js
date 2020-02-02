goog.provide('monaco.helpers');
goog.require('cljs.core');
goog.require('goog.object');
monaco.helpers.get = (function monaco$helpers$get(var_args){
var G__70821 = arguments.length;
switch (G__70821) {
case 2:
return monaco.helpers.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return monaco.helpers.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(monaco.helpers.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,key){
return monaco.helpers.get.cljs$core$IFn$_invoke$arity$3(obj,key,null);
}));

(monaco.helpers.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,key,default$){
return goog.object.get(obj,key,default$);
}));

(monaco.helpers.get.cljs$lang$maxFixedArity = 3);

monaco.helpers.get_in = (function monaco$helpers$get_in(var_args){
var G__70825 = arguments.length;
switch (G__70825) {
case 2:
return monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,path){
return monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$3(obj,path,null);
}));

(monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,path,default$){
var or__4185__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,obj,path);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(monaco.helpers.get_in.cljs$lang$maxFixedArity = 3);

monaco.helpers.set = (function monaco$helpers$set(obj,key,value){
return goog.object.set(obj,key,value);
});
monaco.helpers.call = (function monaco$helpers$call(var_args){
var G__70839 = arguments.length;
switch (G__70839) {
case 2:
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___70847 = arguments.length;
var i__4790__auto___70848 = (0);
while(true){
if((i__4790__auto___70848 < len__4789__auto___70847)){
args_arr__4810__auto__.push((arguments[i__4790__auto___70848]));

var G__70849 = (i__4790__auto___70848 + (1));
i__4790__auto___70848 = G__70849;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(monaco.helpers.call.cljs$core$IFn$_invoke$arity$2 = (function (obj,fn_name){
return cljs.core.js_invoke(obj,fn_name);
}));

(monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,fn_name,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,obj,fn_name,cljs.core.clj__GT_js(args));
}));

/** @this {Function} */
(monaco.helpers.call.cljs$lang$applyTo = (function (seq70836){
var G__70837 = cljs.core.first(seq70836);
var seq70836__$1 = cljs.core.next(seq70836);
var G__70838 = cljs.core.first(seq70836__$1);
var seq70836__$2 = cljs.core.next(seq70836__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70837,G__70838,seq70836__$2);
}));

(monaco.helpers.call.cljs$lang$maxFixedArity = (2));


//# sourceMappingURL=monaco.helpers.js.map
