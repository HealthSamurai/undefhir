goog.provide('monaco.example');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('monaco.core');
goog.require('monaco.monarch');
goog.require('monaco.helpers');
monaco.example.get_value = (function monaco$example$get_value(input){
return monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["target","value"], null));
});
monaco.example.register_BANG_ = (function monaco$example$register_BANG_(){
monaco.monarch.register(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"custom"], null));

monaco.monarch.set_monarch_tokens_provider("custom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokenizer","tokenizer",1801337391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\[error.*/,"custom-error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\[notice.*/,"custom-notice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\[info.*/,"custom-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\[[a-zA-Z 0-9:]+\]/,"custom-date"], null)], null)], null)], null));

monaco.monarch.register_completion_item_provider("custom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provideCompletionItems","provideCompletionItems",-499651463),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"simpleText",new cljs.core.Keyword(null,"insertText","insertText",95144598),"simpleText",new cljs.core.Keyword(null,"kind","kind",-717265803),monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$2(monaco.core.monaco_editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CompletionItemKind","Text"], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"testing",new cljs.core.Keyword(null,"insertText","insertText",95144598),"testing(${1:condition})",new cljs.core.Keyword(null,"insertTextRules","insertTextRules",-133238466),monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$2(monaco.core.monaco_editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CompletionItemKind","Keyword"], null)),new cljs.core.Keyword(null,"kind","kind",-717265803),monaco.helpers.get_in.cljs$core$IFn$_invoke$arity$2(monaco.core.monaco_editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CompletionItemInsertTextRule","InsertAsSnippet"], null))], null)], null)], null);
})], null));

return monaco.core.define_theme("custom",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base","base",185279322),"vs",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),false,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),"custom-info",new cljs.core.Keyword(null,"foreground","foreground",499022036),"808080"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),"custom-error",new cljs.core.Keyword(null,"foreground","foreground",499022036),"ff0000",new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),"bold"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),"custom-notice",new cljs.core.Keyword(null,"foreground","foreground",499022036),"ffa500"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),"custom-date",new cljs.core.Keyword(null,"foreground","foreground",499022036),"008800"], null)], null)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("monaco.example","init","monaco.example/init",-519310041),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"languages","languages",1471910331),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure","javascript","custom"], null),new cljs.core.Keyword(null,"themes","themes",-702786642),new cljs.core.PersistentArrayMap(null, 4, ["vs","Light","vs-dark","Dark","hc-black","High Contrast","custom","Custom"], null),new cljs.core.Keyword(null,"editor","editor",-989377770),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"autoIndent","autoIndent",418630853),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.Keyword(null,"editorWillMount","editorWillMount",1161721384),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"selectOnLineNumbers","selectOnLineNumbers",-1897298454),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"roundedSelection","roundedSelection",-595812085),new cljs.core.Keyword(null,"automaticLayout","automaticLayout",464261837),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"editorDidMount","editorDidMount",1539700689),new cljs.core.Keyword(null,"overrideServices","overrideServices",2140104307),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.Keyword(null,"cursorStyle","cursorStyle",1973875483),new cljs.core.Keyword(null,"height","height",1025178622)],[true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null),(function (monaco__$1){
return null;
}),"[Sun Mar 7 16:02:00 2004] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations\n[Sun Mar 7 16:02:00 2004] [info] Server built: Feb 27 2004 13:56:37\n[Sun Mar 7 16:02:00 2004] [notice] Accept mutex: sysvsem (Default: sysvsem)\n[Sun Mar 7 21:16:17 2004] [error] [client xx.xx.xx.xx] File does not exist: /home/httpd/twiki/view/Main/WebHome",true,"100%",false,false,"custom",(function (editor,monaco__$1){
return monaco.core.focus(editor);
}),cljs.core.PersistentArrayMap.EMPTY,false,"custom","",(function (new_value,event){
var G__71355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","set-value","monaco.example/set-value",1870411467),new_value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71355) : re_frame.core.dispatch.call(null,G__71355));
}),"line","100%"])], null);
}));
var G__71357_71505 = new cljs.core.Keyword("monaco.example","languages","monaco.example/languages",-186314694);
var G__71358_71506 = (function (db){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,clojure.string.capitalize(k));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"languages","languages",1471910331).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71357_71505,G__71358_71506) : re_frame.core.reg_sub.call(null,G__71357_71505,G__71358_71506));
var G__71361_71517 = new cljs.core.Keyword("monaco.example","themes","monaco.example/themes",521521707);
var G__71362_71518 = (function (db){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.val,new cljs.core.Keyword(null,"themes","themes",-702786642).cljs$core$IFn$_invoke$arity$1(db));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71361_71517,G__71362_71518) : re_frame.core.reg_sub.call(null,G__71361_71517,G__71362_71518));
var G__71368_71526 = new cljs.core.Keyword("monaco.example","editor","monaco.example/editor",678417047);
var G__71369_71527 = (function (db){
return new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71368_71526,G__71369_71527) : re_frame.core.reg_sub.call(null,G__71368_71526,G__71369_71527));
var G__71372_71533 = new cljs.core.Keyword("monaco.example","language","monaco.example/language",-1644086895);
var G__71373_71534 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__71374_71535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","editor","monaco.example/editor",678417047)], null);
var G__71375_71536 = (function (editor){
return new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(editor);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__71372_71533,G__71373_71534,G__71374_71535,G__71375_71536) : re_frame.core.reg_sub.call(null,G__71372_71533,G__71373_71534,G__71374_71535,G__71375_71536));
var G__71378_71540 = new cljs.core.Keyword("monaco.example","theme","monaco.example/theme",1455706061);
var G__71379_71543 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__71380_71544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","editor","monaco.example/editor",678417047)], null);
var G__71381_71545 = (function (editor){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(editor);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__71378_71540,G__71379_71543,G__71380_71544,G__71381_71545) : re_frame.core.reg_sub.call(null,G__71378_71540,G__71379_71543,G__71380_71544,G__71381_71545));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("monaco.example","set-theme","monaco.example/set-theme",1506169096),(function (db,p__71382){
var vec__71383 = p__71382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71383,(0),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71383,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),theme);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("monaco.example","set-language","monaco.example/set-language",939193852),(function (db,p__71386){
var vec__71387 = p__71386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71387,(0),null);
var language = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71387,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"language","language",-1591107564)], null),language);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("monaco.example","set-value","monaco.example/set-value",1870411467),(function (db,p__71391){
var vec__71392 = p__71391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71392,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71392,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}));
monaco.example.select_theme = (function monaco$example$select_theme(){
var theme = cljs.core.deref((function (){var G__71396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","theme","monaco.example/theme",1455706061)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71396) : re_frame.core.subscribe.call(null,G__71396));
})());
var themes = cljs.core.deref((function (){var G__71399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","themes","monaco.example/themes",521521707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71399) : re_frame.core.subscribe.call(null,G__71399));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-2","div.mr-2",234425641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Theme:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.mt-1.block","select.form-select.mt-1.block",-130350458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),theme,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71395_SHARP_){
var G__71402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","set-theme","monaco.example/set-theme",1506169096),monaco.example.get_value(p1__71395_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71402) : re_frame.core.dispatch.call(null,G__71402));
})], null)], null),(function (){var iter__4582__auto__ = (function monaco$example$select_theme_$_iter__71403(s__71404){
return (new cljs.core.LazySeq(null,(function (){
var s__71404__$1 = s__71404;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71404__$1);
if(temp__5735__auto__){
var s__71404__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71404__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71404__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71406 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71405 = (0);
while(true){
if((i__71405 < size__4581__auto__)){
var vec__71409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71405);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71409,(1),null);
cljs.core.chunk_append(b__71406,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__71611 = (i__71405 + (1));
i__71405 = G__71611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71406),monaco$example$select_theme_$_iter__71403(cljs.core.chunk_rest(s__71404__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71406),null);
}
} else {
var vec__71414 = cljs.core.first(s__71404__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71414,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),monaco$example$select_theme_$_iter__71403(cljs.core.rest(s__71404__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(themes);
})())], null);
});
monaco.example.select_language = (function monaco$example$select_language(){
var language = cljs.core.deref((function (){var G__71418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","language","monaco.example/language",-1644086895)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71418) : re_frame.core.subscribe.call(null,G__71418));
})());
var languages = cljs.core.deref((function (){var G__71420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","languages","monaco.example/languages",-186314694)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71420) : re_frame.core.subscribe.call(null,G__71420));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-2","div.mr-2",234425641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Language:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.mt-1.block","select.form-select.mt-1.block",-130350458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),language,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71417_SHARP_){
var G__71422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","set-language","monaco.example/set-language",939193852),monaco.example.get_value(p1__71417_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71422) : re_frame.core.dispatch.call(null,G__71422));
})], null)], null),(function (){var iter__4582__auto__ = (function monaco$example$select_language_$_iter__71425(s__71426){
return (new cljs.core.LazySeq(null,(function (){
var s__71426__$1 = s__71426;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71426__$1);
if(temp__5735__auto__){
var s__71426__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71426__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71426__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71428 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71427 = (0);
while(true){
if((i__71427 < size__4581__auto__)){
var vec__71434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71427);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71434,(1),null);
cljs.core.chunk_append(b__71428,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__71624 = (i__71427 + (1));
i__71427 = G__71624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71428),monaco$example$select_language_$_iter__71425(cljs.core.chunk_rest(s__71426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71428),null);
}
} else {
var vec__71439 = cljs.core.first(s__71426__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71439,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),monaco$example$select_language_$_iter__71425(cljs.core.rest(s__71426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(languages);
})())], null);
});
monaco.example.config = (function monaco$example$config(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-6.mb-10.flex.flex-auto.w-full","div.mt-6.mb-10.flex.flex-auto.w-full",843044926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [monaco.example.select_theme], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [monaco.example.select_language], null)], null);
});
monaco.example.header = (function monaco$example$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Monaco Editor"], null);
});
monaco.example.root = (function monaco$example$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.m-6","div.m-6",1084635428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [monaco.example.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [monaco.example.config], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [monaco.core.editor,cljs.core.deref((function (){var G__71454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","editor","monaco.example/editor",678417047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71454) : re_frame.core.subscribe.call(null,G__71454));
})())], null)], null);
});
/**
 * Mount root component.
 */
monaco.example.mount_root = (function monaco$example$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [monaco.example.root], null),monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(document,"getElementById",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["root"], 0)));
});
/**
 * Monaco UI initializer.
 */
monaco.example.init = (function monaco$example$init(){
monaco.example.register_BANG_();

var G__71461_71630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monaco.example","init","monaco.example/init",-519310041)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__71461_71630) : re_frame.core.dispatch_sync.call(null,G__71461_71630));

return monaco.example.mount_root();
});
goog.exportSymbol('monaco.example.init', monaco.example.init);

//# sourceMappingURL=monaco.example.js.map
