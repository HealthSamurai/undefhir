goog.provide('monaco.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('monaco.helpers');
var module$monaco=shadow.js.require("module$monaco", {});
monaco.core.monaco_editor = monaco.helpers.get.cljs$core$IFn$_invoke$arity$2(module$monaco,"editor");
monaco.core.monaco_languages = monaco.helpers.get.cljs$core$IFn$_invoke$arity$2(module$monaco,"languages");
monaco.core.create = (function monaco$core$create(dom_element,options,override){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_editor,"create",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_element,options,override], 0));
});
monaco.core.define_theme = (function monaco$core$define_theme(theme_name,theme_data){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_editor,"defineTheme",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theme_name,theme_data], 0));
});
monaco.core.focus = (function monaco$core$focus(editor){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(editor,"focus");
});
monaco.core.set_model_language = (function monaco$core$set_model_language(model,language_id){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_editor,"setModelLanguage",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([model,language_id], 0));
});
monaco.core.set_theme = (function monaco$core$set_theme(theme_name){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_editor,"setTheme",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theme_name], 0));
});
monaco.core.dispose = (function monaco$core$dispose(disposable){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(disposable,"dispose");
});
monaco.core.get_value = (function monaco$core$get_value(editor){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(editor,"getValue");
});
monaco.core.get_model = (function monaco$core$get_model(editor){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(editor,"getModel");
});
monaco.core.on_did_change_model = (function monaco$core$on_did_change_model(editor,listener){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(editor,"onDidChangeModel",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([listener], 0));
});
monaco.core.on_did_change_model_content = (function monaco$core$on_did_change_model_content(editor,listener){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(editor,"onDidChangeModelContent",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([listener], 0));
});
monaco.core.layout = (function monaco$core$layout(editor){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(editor,"layout");
});
monaco.core.push_undo_stop = (function monaco$core$push_undo_stop(editor){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(editor,"pushUndoStop");
});
monaco.core.update_options = (function monaco$core$update_options(editor,options){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(editor,"updateOptions",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
});
monaco.core.get_model_value = (function monaco$core$get_model_value(model){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(model,"getValue");
});
monaco.core.get_full_model_range = (function monaco$core$get_full_model_range(model){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(model,"getFullModelRange");
});
monaco.core.push_edit_operations = (function monaco$core$push_edit_operations(model,before_cursor_state,edit_operations){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(model,"pushEditOperations",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([before_cursor_state,edit_operations], 0));
});
monaco.core.editor = (function monaco$core$editor(config){
var _STAR_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var assign_ref = (function (component){
return cljs.core.reset_BANG_(_STAR_ref,component);
});
var editor_did_mount = (function (this$,editor){
var props = reagent.core.props(this$);
var temp__5739__auto___70989 = new cljs.core.Keyword(null,"editorDidMount","editorDidMount",1539700689).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5739__auto___70989 == null)){
} else {
var f_70991 = temp__5739__auto___70989;
(f_70991.cljs$core$IFn$_invoke$arity$2 ? f_70991.cljs$core$IFn$_invoke$arity$2(editor,module$monaco) : f_70991.call(null,editor,module$monaco));
}

return monaco.helpers.set(this$,"__subscription",monaco.core.on_did_change_model_content(editor,(function (event){
if(cljs.core.truth_(monaco.helpers.get.cljs$core$IFn$_invoke$arity$2(this$,"__preventTriggerChangeEvent"))){
return null;
} else {
var temp__5739__auto__ = new cljs.core.Keyword(null,"onChange","onChange",-312891301).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
var G__70947 = monaco.core.get_value(editor);
var G__70948 = event;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__70947,G__70948) : f.call(null,G__70947,G__70948));
}
}
})));
});
var editor_will_mount = (function (this$,_){
var props = reagent.core.props(this$);
var temp__5739__auto__ = new cljs.core.Keyword(null,"editorWillMount","editorWillMount",1161721384).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
var or__4185__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(module$monaco) : f.call(null,module$monaco));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY);
}
}
});
var component_did_mount = (function (this$){
var temp__5739__auto__ = cljs.core.deref(_STAR_ref);
if((temp__5739__auto__ == null)){
return null;
} else {
var ref = temp__5739__auto__;
var props = reagent.core.props(this$);
var opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,props], 0)),new cljs.core.Keyword(null,"editorWillMount","editorWillMount",1161721384),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(editor_will_mount,this$));
var editor = monaco.core.create(ref,opts,cljs.core.PersistentArrayMap.EMPTY);
monaco.helpers.set(this$,"editor",editor);

return editor_did_mount(this$,editor);
}
});
var component_did_update = (function (this$,old_argv){
var editor = monaco.helpers.get.cljs$core$IFn$_invoke$arity$2(this$,"editor");
var old_props = cljs.core.second(old_argv);
var props = reagent.core.props(this$);
var model = monaco.core.get_model(editor);
var model_value = monaco.core.get_model_value(model);
var map__70959 = props;
var map__70959__$1 = (((((!((map__70959 == null))))?(((((map__70959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70959):map__70959);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70959__$1,new cljs.core.Keyword(null,"value","value",305978217));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70959__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70959__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70959__$1,new cljs.core.Keyword(null,"options","options",99638489));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70959__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70959__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_((function (){var and__4174__auto__ = value;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,model_value);
} else {
return and__4174__auto__;
}
})())){
monaco.helpers.set(this$,"__preventTriggerChangeEvent ",true);

monaco.core.push_undo_stop(editor);

monaco.core.push_edit_operations(model,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),value,new cljs.core.Keyword(null,"range","range",1639692286),monaco.core.get_full_model_range(model)], null)], null));

monaco.core.push_undo_stop(editor);

monaco.helpers.set(this$,"__preventTriggerChangeEvent ",false);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(language,new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(old_props))){
monaco.core.set_model_language(model,language);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(old_props))){
monaco.core.set_theme(theme);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(old_props))){
monaco.core.update_options(editor,options);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(width,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(old_props))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(height,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(old_props))))){
return monaco.core.layout(editor);
} else {
return null;
}
});
var component_will_unmount = (function (this$){
var temp__5739__auto___71003 = monaco.helpers.get.cljs$core$IFn$_invoke$arity$2(this$,"editor");
if((temp__5739__auto___71003 == null)){
} else {
var editor_71004 = temp__5739__auto___71003;
monaco.core.dispose(editor_71004);

var temp__5739__auto___71005__$1 = monaco.core.get_model(editor_71004);
if((temp__5739__auto___71005__$1 == null)){
} else {
var model_71007 = temp__5739__auto___71005__$1;
monaco.core.dispose(model_71007);
}
}

var temp__5739__auto__ = monaco.helpers.get.cljs$core$IFn$_invoke$arity$2(this$,"__subscription");
if((temp__5739__auto__ == null)){
return null;
} else {
var sub = temp__5739__auto__;
return monaco.core.dispose(sub);
}
});
var render = (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.monaco-editor-wrapper","div.monaco-editor-wrapper",-1345913512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),assign_ref], null)], null);
});
return (function (_){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"monaco-editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),component_did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),component_did_update,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),component_will_unmount,new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
});
});

//# sourceMappingURL=monaco.core.js.map
