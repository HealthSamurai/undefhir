goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70315){
var map__70316 = p__70315;
var map__70316__$1 = (((((!((map__70316 == null))))?(((((map__70316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70316):map__70316);
var m = map__70316__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70316__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70330_70542 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70331_70543 = null;
var count__70332_70544 = (0);
var i__70333_70545 = (0);
while(true){
if((i__70333_70545 < count__70332_70544)){
var f_70547 = chunk__70331_70543.cljs$core$IIndexed$_nth$arity$2(null,i__70333_70545);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70547], 0));


var G__70548 = seq__70330_70542;
var G__70549 = chunk__70331_70543;
var G__70550 = count__70332_70544;
var G__70551 = (i__70333_70545 + (1));
seq__70330_70542 = G__70548;
chunk__70331_70543 = G__70549;
count__70332_70544 = G__70550;
i__70333_70545 = G__70551;
continue;
} else {
var temp__5735__auto___70552 = cljs.core.seq(seq__70330_70542);
if(temp__5735__auto___70552){
var seq__70330_70553__$1 = temp__5735__auto___70552;
if(cljs.core.chunked_seq_QMARK_(seq__70330_70553__$1)){
var c__4609__auto___70554 = cljs.core.chunk_first(seq__70330_70553__$1);
var G__70559 = cljs.core.chunk_rest(seq__70330_70553__$1);
var G__70560 = c__4609__auto___70554;
var G__70561 = cljs.core.count(c__4609__auto___70554);
var G__70562 = (0);
seq__70330_70542 = G__70559;
chunk__70331_70543 = G__70560;
count__70332_70544 = G__70561;
i__70333_70545 = G__70562;
continue;
} else {
var f_70565 = cljs.core.first(seq__70330_70553__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70565], 0));


var G__70566 = cljs.core.next(seq__70330_70553__$1);
var G__70567 = null;
var G__70568 = (0);
var G__70569 = (0);
seq__70330_70542 = G__70566;
chunk__70331_70543 = G__70567;
count__70332_70544 = G__70568;
i__70333_70545 = G__70569;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70570 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70570], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70570)))?cljs.core.second(arglists_70570):arglists_70570)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70342_70576 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70343_70577 = null;
var count__70344_70578 = (0);
var i__70345_70579 = (0);
while(true){
if((i__70345_70579 < count__70344_70578)){
var vec__70379_70580 = chunk__70343_70577.cljs$core$IIndexed$_nth$arity$2(null,i__70345_70579);
var name_70581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70379_70580,(0),null);
var map__70382_70582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70379_70580,(1),null);
var map__70382_70583__$1 = (((((!((map__70382_70582 == null))))?(((((map__70382_70582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70382_70582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70382_70582):map__70382_70582);
var doc_70584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70382_70583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70382_70583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70581], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70585], 0));

if(cljs.core.truth_(doc_70584)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70584], 0));
} else {
}


var G__70588 = seq__70342_70576;
var G__70589 = chunk__70343_70577;
var G__70590 = count__70344_70578;
var G__70591 = (i__70345_70579 + (1));
seq__70342_70576 = G__70588;
chunk__70343_70577 = G__70589;
count__70344_70578 = G__70590;
i__70345_70579 = G__70591;
continue;
} else {
var temp__5735__auto___70596 = cljs.core.seq(seq__70342_70576);
if(temp__5735__auto___70596){
var seq__70342_70597__$1 = temp__5735__auto___70596;
if(cljs.core.chunked_seq_QMARK_(seq__70342_70597__$1)){
var c__4609__auto___70601 = cljs.core.chunk_first(seq__70342_70597__$1);
var G__70602 = cljs.core.chunk_rest(seq__70342_70597__$1);
var G__70603 = c__4609__auto___70601;
var G__70604 = cljs.core.count(c__4609__auto___70601);
var G__70605 = (0);
seq__70342_70576 = G__70602;
chunk__70343_70577 = G__70603;
count__70344_70578 = G__70604;
i__70345_70579 = G__70605;
continue;
} else {
var vec__70389_70606 = cljs.core.first(seq__70342_70597__$1);
var name_70607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70389_70606,(0),null);
var map__70392_70608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70389_70606,(1),null);
var map__70392_70609__$1 = (((((!((map__70392_70608 == null))))?(((((map__70392_70608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70392_70608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70392_70608):map__70392_70608);
var doc_70610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70392_70609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70392_70609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70607], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70611], 0));

if(cljs.core.truth_(doc_70610)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70610], 0));
} else {
}


var G__70617 = cljs.core.next(seq__70342_70597__$1);
var G__70618 = null;
var G__70619 = (0);
var G__70620 = (0);
seq__70342_70576 = G__70617;
chunk__70343_70577 = G__70618;
count__70344_70578 = G__70619;
i__70345_70579 = G__70620;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__70396 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70397 = null;
var count__70398 = (0);
var i__70399 = (0);
while(true){
if((i__70399 < count__70398)){
var role = chunk__70397.cljs$core$IIndexed$_nth$arity$2(null,i__70399);
var temp__5735__auto___70625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___70625__$1)){
var spec_70626 = temp__5735__auto___70625__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70626)], 0));
} else {
}


var G__70628 = seq__70396;
var G__70629 = chunk__70397;
var G__70630 = count__70398;
var G__70631 = (i__70399 + (1));
seq__70396 = G__70628;
chunk__70397 = G__70629;
count__70398 = G__70630;
i__70399 = G__70631;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__70396);
if(temp__5735__auto____$1){
var seq__70396__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70396__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70396__$1);
var G__70640 = cljs.core.chunk_rest(seq__70396__$1);
var G__70641 = c__4609__auto__;
var G__70642 = cljs.core.count(c__4609__auto__);
var G__70643 = (0);
seq__70396 = G__70640;
chunk__70397 = G__70641;
count__70398 = G__70642;
i__70399 = G__70643;
continue;
} else {
var role = cljs.core.first(seq__70396__$1);
var temp__5735__auto___70646__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___70646__$2)){
var spec_70648 = temp__5735__auto___70646__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70648)], 0));
} else {
}


var G__70649 = cljs.core.next(seq__70396__$1);
var G__70650 = null;
var G__70651 = (0);
var G__70652 = (0);
seq__70396 = G__70649;
chunk__70397 = G__70650;
count__70398 = G__70651;
i__70399 = G__70652;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__70657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70658 = cljs.core.ex_cause(t);
via = G__70657;
t = G__70658;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__70438 = datafied_throwable;
var map__70438__$1 = (((((!((map__70438 == null))))?(((((map__70438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70438):map__70438);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70438__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70438__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70438__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70439 = cljs.core.last(via);
var map__70439__$1 = (((((!((map__70439 == null))))?(((((map__70439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70439):map__70439);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70439__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70439__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70439__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70440 = data;
var map__70440__$1 = (((((!((map__70440 == null))))?(((((map__70440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70440):map__70440);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70440__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70440__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70440__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70441 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70441__$1 = (((((!((map__70441 == null))))?(((((map__70441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70441):map__70441);
var top_data = map__70441__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70448 = phase;
var G__70448__$1 = (((G__70448 instanceof cljs.core.Keyword))?G__70448.fqn:null);
switch (G__70448__$1) {
case "read-source":
var map__70449 = data;
var map__70449__$1 = (((((!((map__70449 == null))))?(((((map__70449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70449):map__70449);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70449__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70449__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70451 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70451__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70451,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70451);
var G__70451__$2 = (cljs.core.truth_((function (){var fexpr__70453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70453.cljs$core$IFn$_invoke$arity$1 ? fexpr__70453.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70453.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70451__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70451__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70451__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70456 = top_data;
var G__70456__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70456,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70456);
var G__70456__$2 = (cljs.core.truth_((function (){var fexpr__70457 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70457.cljs$core$IFn$_invoke$arity$1 ? fexpr__70457.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70457.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70456__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70456__$1);
var G__70456__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70456__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70456__$2);
var G__70456__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70456__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70456__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70456__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70456__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70464,(3),null);
var G__70467 = top_data;
var G__70467__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70467,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70467);
var G__70467__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70467__$1);
var G__70467__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70467__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70467__$2);
var G__70467__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70467__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70467__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70467__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70467__$4;
}

break;
case "execution":
var vec__70470 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70435_SHARP_){
var or__4185__auto__ = (p1__70435_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__70476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70476.cljs$core$IFn$_invoke$arity$1 ? fexpr__70476.cljs$core$IFn$_invoke$arity$1(p1__70435_SHARP_) : fexpr__70476.call(null,p1__70435_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__70478 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70478__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70478,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70478);
var G__70478__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70478__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70478__$1);
var G__70478__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70478__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70478__$2);
var G__70478__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70478__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70478__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70478__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70478__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70448__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70495){
var map__70496 = p__70495;
var map__70496__$1 = (((((!((map__70496 == null))))?(((((map__70496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70496):map__70496);
var triage_data = map__70496__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70496__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__70501 = phase;
var G__70501__$1 = (((G__70501 instanceof cljs.core.Keyword))?G__70501.fqn:null);
switch (G__70501__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__70502 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__70503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70504 = loc;
var G__70505 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70506_70720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70507_70721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70508_70722 = true;
var _STAR_print_fn_STAR__temp_val__70509_70723 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70508_70722);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70509_70723);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70491_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70491_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70507_70721);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70506_70720);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70502,G__70503,G__70504,G__70505) : format.call(null,G__70502,G__70503,G__70504,G__70505));

break;
case "macroexpansion":
var G__70512 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70513 = cause_type;
var G__70514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70515 = loc;
var G__70516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70512,G__70513,G__70514,G__70515,G__70516) : format.call(null,G__70512,G__70513,G__70514,G__70515,G__70516));

break;
case "compile-syntax-check":
var G__70517 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70518 = cause_type;
var G__70519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70520 = loc;
var G__70521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70517,G__70518,G__70519,G__70520,G__70521) : format.call(null,G__70517,G__70518,G__70519,G__70520,G__70521));

break;
case "compilation":
var G__70522 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70523 = cause_type;
var G__70524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70525 = loc;
var G__70526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70522,G__70523,G__70524,G__70525,G__70526) : format.call(null,G__70522,G__70523,G__70524,G__70525,G__70526));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70527 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70528 = symbol;
var G__70529 = loc;
var G__70530 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70531_70734 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70532_70735 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70533_70736 = true;
var _STAR_print_fn_STAR__temp_val__70534_70737 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70533_70736);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70534_70737);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70492_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70492_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70532_70735);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70531_70734);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70527,G__70528,G__70529,G__70530) : format.call(null,G__70527,G__70528,G__70529,G__70530));
} else {
var G__70535 = "Execution error%s at %s(%s).\n%s\n";
var G__70536 = cause_type;
var G__70537 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70538 = loc;
var G__70539 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70535,G__70536,G__70537,G__70538,G__70539) : format.call(null,G__70535,G__70536,G__70537,G__70538,G__70539));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70501__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
