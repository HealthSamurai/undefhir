goog.provide('monaco.monarch');
goog.require('cljs.core');
goog.require('monaco.core');
goog.require('monaco.helpers');
monaco.monarch.get_encoded_language_id = (function monaco$monarch$get_encoded_language_id(language_id){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_languages,"getEncodedLanguageId",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_id], 0));
});
monaco.monarch.get_languages = (function monaco$monarch$get_languages(){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$2(monaco.core.monaco_languages,"getLanguages");
});
monaco.monarch.register = (function monaco$monarch$register(language){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_languages,"register",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language], 0));
});
monaco.monarch.set_monarch_tokens_provider = (function monaco$monarch$set_monarch_tokens_provider(language_id,language){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_languages,"setMonarchTokensProvider",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_id,language], 0));
});
monaco.monarch.register_completion_item_provider = (function monaco$monarch$register_completion_item_provider(language_id,provider){
return monaco.helpers.call.cljs$core$IFn$_invoke$arity$variadic(monaco.core.monaco_languages,"registerCompletionItemProvider",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_id,provider], 0));
});

//# sourceMappingURL=monaco.monarch.js.map
