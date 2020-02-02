goog.provide('rewrite_clj.node.meta');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.whitespace');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.meta.MetaNode = (function (tag,prefix,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.meta.MetaNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k62900,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__62920 = k62900;
var G__62920__$1 = (((G__62920 instanceof cljs.core.Keyword))?G__62920.fqn:null);
switch (G__62920__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62900,else__4442__auto__);

}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__62926){
var vec__62928 = p__62926;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62928,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62928,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#rewrite-clj.node.meta.MetaNode{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62899){
var self__ = this;
var G__62899__$1 = this;
return (new cljs.core.RecordIter((0),G__62899__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__62941 = (function (coll__4436__auto__){
return (1501447658 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__62941(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62901,other62902){
var self__ = this;
var this62901__$1 = this;
return (((!((other62902 == null)))) && ((this62901__$1.constructor === other62902.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62901__$1.tag,other62902.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62901__$1.prefix,other62902.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62901__$1.children,other62902.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62901__$1.__extmap,other62902.__extmap)));
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var vec__62953 = rewrite_clj.node.protocols.sexprs(self__.children);
var mta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62953,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62953,(1),null);
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:false):false)){
} else {
throw (new Error(["Assert failed: ",["cannot attach metadata to: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join(''),"\n","(implements? IWithMeta data)"].join('')));
}

return cljs.core.with_meta(data,((cljs.core.map_QMARK_(mta))?mta:cljs.core.PersistentArrayMap.createAsIfByAssoc([mta,true])));
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__62899){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__62989 = cljs.core.keyword_identical_QMARK_;
var expr__62990 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__62992 = new cljs.core.Keyword(null,"tag","tag",-1290361223);
var G__62993 = expr__62990;
return (pred__62989.cljs$core$IFn$_invoke$arity$2 ? pred__62989.cljs$core$IFn$_invoke$arity$2(G__62992,G__62993) : pred__62989.call(null,G__62992,G__62993));
})())){
return (new rewrite_clj.node.meta.MetaNode(G__62899,self__.prefix,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62994 = new cljs.core.Keyword(null,"prefix","prefix",-265908465);
var G__62995 = expr__62990;
return (pred__62989.cljs$core$IFn$_invoke$arity$2 ? pred__62989.cljs$core$IFn$_invoke$arity$2(G__62994,G__62995) : pred__62989.call(null,G__62994,G__62995));
})())){
return (new rewrite_clj.node.meta.MetaNode(self__.tag,G__62899,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__63002 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__63003 = expr__62990;
return (pred__62989.cljs$core$IFn$_invoke$arity$2 ? pred__62989.cljs$core$IFn$_invoke$arity$2(G__63002,G__63003) : pred__62989.call(null,G__63002,G__63003));
})())){
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,G__62899,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__62899),null));
}
}
}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__62899){
var self__ = this;
var this__4438__auto____$1 = this;
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,G__62899,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(rewrite_clj.node.meta.MetaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.meta.MetaNode.cljs$lang$type = true);

(rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.meta/MetaNode",null,(1),null));
}));

(rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"rewrite-clj.node.meta/MetaNode");
}));

/**
 * Positional factory function for rewrite-clj.node.meta/MetaNode.
 */
rewrite_clj.node.meta.__GT_MetaNode = (function rewrite_clj$node$meta$__GT_MetaNode(tag,prefix,children){
return (new rewrite_clj.node.meta.MetaNode(tag,prefix,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.meta/MetaNode, taking a map of keywords to field values.
 */
rewrite_clj.node.meta.map__GT_MetaNode = (function rewrite_clj$node$meta$map__GT_MetaNode(G__62909){
var extmap__4478__auto__ = (function (){var G__63033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62909,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__62909)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63033);
} else {
return G__63033;
}
})();
return (new rewrite_clj.node.meta.MetaNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__62909),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__62909),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__62909),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

/**
 * Create node representing a form and its metadata.
 */
rewrite_clj.node.meta.meta_node = (function rewrite_clj$node$meta$meta_node(var_args){
var G__63035 = arguments.length;
switch (G__63035) {
case 1:
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_clj.node.protocols.assert_sexpr_count(children,(2));

return rewrite_clj.node.meta.__GT_MetaNode(new cljs.core.Keyword(null,"meta","meta",1499536964),"^",children);
}));

(rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces((1)),data], null));
}));

(rewrite_clj.node.meta.meta_node.cljs$lang$maxFixedArity = 2);

/**
 * Create node representing a form and its metadata using the
 * `#^` prefix.
 */
rewrite_clj.node.meta.raw_meta_node = (function rewrite_clj$node$meta$raw_meta_node(var_args){
var G__63041 = arguments.length;
switch (G__63041) {
case 1:
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_clj.node.protocols.assert_sexpr_count(children,(2));

return rewrite_clj.node.meta.__GT_MetaNode(new cljs.core.Keyword(null,"meta*","meta*",-949431606),"#^",children);
}));

(rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces((1)),data], null));
}));

(rewrite_clj.node.meta.raw_meta_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.meta.js.map
