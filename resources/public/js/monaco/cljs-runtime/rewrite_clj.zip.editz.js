goog.provide('rewrite_clj.zip.editz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.utils');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.node');
goog.require('clojure.zip');
/**
 * Replace the node at the given location with one representing
 * the given value. (The value will be coerced to a node if
 * possible.)
 */
rewrite_clj.zip.editz.replace = (function rewrite_clj$zip$editz$replace(zloc,value){
return clojure.zip.replace(zloc,(rewrite_clj.node.coerce.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.coerce.cljs$core$IFn$_invoke$arity$1(value) : rewrite_clj.node.coerce.call(null,value)));
});
/**
 * Create s-expression from node, apply the function and create
 * node from the result.
 */
rewrite_clj.zip.editz.edit_node = (function rewrite_clj$zip$editz$edit_node(node,f){
var G__63784 = (function (){var G__63785 = (rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.sexpr.call(null,node));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63785) : f.call(null,G__63785));
})();
return (rewrite_clj.node.coerce.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.coerce.cljs$core$IFn$_invoke$arity$1(G__63784) : rewrite_clj.node.coerce.call(null,G__63784));
});
/**
 * Apply the given function to the s-expression at the given
 * location, using its result to replace the node there. (The
 * result will be coerced to a node if possible.)
 */
rewrite_clj.zip.editz.edit = (function rewrite_clj$zip$editz$edit(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63813 = arguments.length;
var i__4790__auto___63814 = (0);
while(true){
if((i__4790__auto___63814 < len__4789__auto___63813)){
args__4795__auto__.push((arguments[i__4790__auto___63814]));

var G__63815 = (i__4790__auto___63814 + (1));
i__4790__auto___63814 = G__63815;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(zloc,rewrite_clj.zip.editz.edit_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__63787_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__63787_SHARP_,args);
})], 0));
}));

(rewrite_clj.zip.editz.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.zip.editz.edit.cljs$lang$applyTo = (function (seq63788){
var G__63789 = cljs.core.first(seq63788);
var seq63788__$1 = cljs.core.next(seq63788);
var G__63790 = cljs.core.first(seq63788__$1);
var seq63788__$2 = cljs.core.next(seq63788__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63789,G__63790,seq63788__$2);
}));

/**
 * Splice the given node, i.e. merge its children into the current one
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace child afterwards.
 * 
 */
rewrite_clj.zip.editz.splice = (function rewrite_clj$zip$editz$splice(zloc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(zloc))){
var temp__5733__auto__ = cljs.core.seq(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace_QMARK_,cljs.core.reverse(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace_QMARK_,clojure.zip.children(zloc)))));
if(temp__5733__auto__){
var children = temp__5733__auto__;
var loc = rewrite_clj.zip.utils.remove_and_move_right(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.zip.insert_right,zloc,children));
var or__4185__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(loc);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return loc;
}
} else {
return rewrite_clj.zip.removez.remove(zloc);
}
} else {
return zloc;
}
});
rewrite_clj.zip.editz.edit_token = (function rewrite_clj$zip$editz$edit_token(zloc,str_fn){
var e = rewrite_clj.zip.base.sexpr(zloc);
var e_SINGLEQUOTE_ = ((typeof e === 'string')?(str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(e) : str_fn.call(null,e)):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__63798 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__63798) : str_fn.call(null,G__63798));
})()):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__63799 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__63799) : str_fn.call(null,G__63799));
})()):null)));
return clojure.zip.replace(zloc,(rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(e_SINGLEQUOTE_) : rewrite_clj.node.token_node.call(null,e_SINGLEQUOTE_)));
});
rewrite_clj.zip.editz.edit_multi_line = (function rewrite_clj$zip$editz$edit_multi_line(zloc,line_fn){
var n = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(clojure.zip.node(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(line_fn,cljs.core.vec));
return clojure.zip.replace(zloc,n);
});
rewrite_clj.zip.editz.prefix = (function rewrite_clj$zip$editz$prefix(zloc,s){
var G__63804 = rewrite_clj.zip.base.tag(zloc);
var G__63804__$1 = (((G__63804 instanceof cljs.core.Keyword))?G__63804.fqn:null);
switch (G__63804__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token(zloc,(function (p1__63802_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63802_SHARP_)].join('');
}));

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(function (p1__63803_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63803_SHARP_)].join('');
}));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63804__$1)].join('')));

}
});
rewrite_clj.zip.editz.suffix = (function rewrite_clj$zip$editz$suffix(zloc,s){
var G__63810 = rewrite_clj.zip.base.tag(zloc);
var G__63810__$1 = (((G__63810 instanceof cljs.core.Keyword))?G__63810.fqn:null);
switch (G__63810__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token(zloc,(function (p1__63808_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63808_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(lines),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63810__$1)].join('')));

}
});

//# sourceMappingURL=rewrite_clj.zip.editz.js.map
