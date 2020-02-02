goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k59209,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__59221 = k59209;
var G__59221__$1 = (((G__59221 instanceof cljs.core.Keyword))?G__59221.fqn:null);
switch (G__59221__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59209,else__4442__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__59226){
var vec__59227 = p__59226;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59227,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59227,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.color.CSSColor{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59208){
var self__ = this;
var G__59208__$1 = this;
return (new cljs.core.RecordIter((0),G__59208__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__59246 = (function (coll__4436__auto__){
return (782025744 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__59246(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59210,other59211){
var self__ = this;
var this59210__$1 = this;
return (((!((other59211 == null)))) && ((this59210__$1.constructor === other59211.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.red,other59211.red)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.green,other59211.green)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.blue,other59211.blue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.hue,other59211.hue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.saturation,other59211.saturation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.lightness,other59211.lightness)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.alpha,other59211.alpha)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59210__$1.__extmap,other59211.__extmap)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__59208){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__59264 = cljs.core.keyword_identical_QMARK_;
var expr__59265 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__59269 = new cljs.core.Keyword(null,"red","red",-969428204);
var G__59270 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59269,G__59270) : pred__59264.call(null,G__59269,G__59270));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(G__59208,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59271 = new cljs.core.Keyword(null,"green","green",-945526839);
var G__59272 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59271,G__59272) : pred__59264.call(null,G__59271,G__59272));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,G__59208,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59273 = new cljs.core.Keyword(null,"blue","blue",-622100620);
var G__59274 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59273,G__59274) : pred__59264.call(null,G__59273,G__59274));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,G__59208,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59277 = new cljs.core.Keyword(null,"hue","hue",-508078848);
var G__59278 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59277,G__59278) : pred__59264.call(null,G__59277,G__59278));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,G__59208,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59279 = new cljs.core.Keyword(null,"saturation","saturation",-14247929);
var G__59280 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59279,G__59280) : pred__59264.call(null,G__59279,G__59280));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__59208,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59281 = new cljs.core.Keyword(null,"lightness","lightness",-2040901930);
var G__59282 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59281,G__59282) : pred__59264.call(null,G__59281,G__59282));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__59208,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59283 = new cljs.core.Keyword(null,"alpha","alpha",-1574982441);
var G__59284 = expr__59265;
return (pred__59264.cljs$core$IFn$_invoke$arity$2 ? pred__59264.cljs$core$IFn$_invoke$arity$2(G__59283,G__59284) : pred__59264.call(null,G__59283,G__59284));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__59208,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__59208),null));
}
}
}
}
}
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"red","red",-969428204),self__.red,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"green","green",-945526839),self__.green,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__59208){
var self__ = this;
var this__4438__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__59208,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.call = (function (unused__10010__auto__){
var self__ = this;
var self__ = this;
var G__59311 = (arguments.length - (1));
switch (G__59311) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.apply = (function (self__,args59217){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args59217)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.color/CSSColor",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.color/CSSColor");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.color/CSSColor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.__GT_CSSColor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.color/CSSColor, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.map__GT_CSSColor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$map__GT_CSSColor(G__59214){
var extmap__4478__auto__ = (function (){var G__59348 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59214,new cljs.core.Keyword(null,"red","red",-969428204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], 0));
if(cljs.core.record_QMARK_(G__59214)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59348);
} else {
return G__59348;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__59214),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__59214),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__59214),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__59214),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__59214),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__59214),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__59214),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rgb(var_args){
var G__59361 = arguments.length;
switch (G__59361) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__59363){
var vec__59364 = p__59363;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59364,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59364,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59364,(2),null);
var vs = vec__59364;
if(cljs.core.every_QMARK_((function (p1__59356_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_(p1__59356_SHARP_,(0),(255));
}),vs)){
var G__59367 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59367) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59367));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$lang$maxFixedArity = 3);

/**
 * Create an RGBA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rgba(var_args){
var G__59373 = arguments.length;
switch (G__59373) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__59374){
var vec__59375 = p__59374;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59375,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59375,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59375,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59375,(3),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_(a,(0),(1))){
var G__59378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59378) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59378));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgba.cljs$lang$maxFixedArity = 4);

/**
 * Create an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hsl(var_args){
var G__59382 = arguments.length;
switch (G__59382) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__59383){
var vec__59384 = p__59383;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59384,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59384,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59384,(2),null);
var vec__59387 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59380_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__59380_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__59380_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(1),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(2),null);
if(((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_(s__$1,(0),(100))) && (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_(l__$1,(0),(100))))){
var G__59391 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod(h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59391) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59391));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$lang$maxFixedArity = 3);

/**
 * Create an HSLA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hsla(var_args){
var G__59406 = arguments.length;
switch (G__59406) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__59409){
var vec__59411 = p__59409;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59411,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59411,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59411,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59411,(3),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_(a,(0),(1))){
var G__59414 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59414) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59414));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla.cljs$lang$maxFixedArity = 4);

/**
 * Return true if color is an RGB color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rgb_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null))));
});
/**
 * Return true if color is an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hsl_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null))));
});
/**
 * Return true if color is an HSLA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hsla_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null))));
});
/**
 * Return true if x is a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$color_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_QMARK_(x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl_QMARK_(x)));
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hex_QMARK_(x){
return cljs.core.boolean$(((typeof x === 'string')?cljs.core.re_matches(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_re,x):false));
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hex__GT_rgb(s){
var temp__5735__auto__ = cljs.core.re_matches(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__59428 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59428,(0),null);
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59428,(1),null);
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(hex)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59424_SHARP_){
return (new cljs.core.List(null,p1__59424_SHARP_,(new cljs.core.List(null,p1__59424_SHARP_,null,(1),null)),(2),null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hex], 0))):hex);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59425_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(p1__59425_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0));
}),cljs.core.re_seq(/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rgb__GT_hex(p__59436){
var map__59439 = p__59436;
var map__59439__$1 = (((((!((map__59439 == null))))?(((((map__59439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59439):map__59439);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%2s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0))], 0))," ","0");
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.trim_one = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb__GT_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rgb__GT_hsl(p__59453){
var map__59454 = p__59453;
var map__59454__$1 = (((((!((map__59454 == null))))?(((((map__59454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59454):map__59454);
var color = map__59454__$1;
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl_QMARK_(color)){
return color;
} else {
var vec__59461 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59448_SHARP_){
return (p1__59448_SHARP_ / (255));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59461,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59461,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59461,(2),null);
var mx = (function (){var x__4273__auto__ = (function (){var x__4273__auto__ = r;
var y__4274__auto__ = g;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var mn = (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = r;
var y__4277__auto__ = g;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = b;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__59466 = cljs.core._EQ_;
var expr__59467 = mx;
if(cljs.core.truth_((pred__59466.cljs$core$IFn$_invoke$arity$2 ? pred__59466.cljs$core$IFn$_invoke$arity$2(mn,expr__59467) : pred__59466.call(null,mn,expr__59467)))){
return (0);
} else {
if(cljs.core.truth_((pred__59466.cljs$core$IFn$_invoke$arity$2 ? pred__59466.cljs$core$IFn$_invoke$arity$2(r,expr__59467) : pred__59466.call(null,r,expr__59467)))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_((pred__59466.cljs$core$IFn$_invoke$arity$2 ? pred__59466.cljs$core$IFn$_invoke$arity$2(g,expr__59467) : pred__59466.call(null,g,expr__59467)))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_((pred__59466.cljs$core$IFn$_invoke$arity$2 ? pred__59466.cljs$core$IFn$_invoke$arity$2(b,expr__59467) : pred__59466.call(null,b,expr__59467)))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__59467)].join('')));
}
}
}
}
})();
var l = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.trim_one(((mx + mn) / (2)));
var s = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.trim_one(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$3(cljs.core.mod(h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hsl__GT_rgb(p__59481){
var map__59482 = p__59481;
var map__59482__$1 = (((((!((map__59482 == null))))?(((((map__59482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59482):map__59482);
var color = map__59482__$1;
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_QMARK_(color)){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__59491 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59475_SHARP_){
var G__59495 = (p1__59475_SHARP_ * (255));
return Math.round(G__59495);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59497 = m1;
var G__59498 = m2;
var G__59499 = (h + (1.0 / (3)));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__59497,G__59498,G__59499) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.call(null,G__59497,G__59498,G__59499));
})(),(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(m1,m2,h) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.call(null,m1,m2,h)),(function (){var G__59500 = m1;
var G__59501 = m2;
var G__59502 = (h - (1.0 / (3)));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__59500,G__59501,G__59502) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb.call(null,G__59500,G__59501,G__59502));
})()], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59491,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59491,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59491,(2),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hsl__GT_hex(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb__GT_hex(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl__GT_rgb(color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hex__GT_hsl(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb__GT_hsl(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_rgb(color));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip,(0),(100));
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.zero_to_one_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip,0.0,1.0);
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$as_hex(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb__GT_hex(x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl__GT_hex(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$as_rgb(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl__GT_rgb(x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_rgb(x);
} else {
if(typeof x === 'number'){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$as_hsl(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb__GT_hsl(x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_hsl(x);
} else {
if(typeof x === 'number'){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip.call(null,x)),(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip.call(null,x))], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Converts a color to HSLA. Assumes an alpha value of 1.00 unless one is
 *   currently set on color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hsla = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$as_hsla(color){
var current_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),1.0);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsla_QMARK_(color)){
return color;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hsl(color),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),current_alpha);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.restrict_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$restrict_rgb(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.make_color_operation = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation(op){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb_clip,op);
var a__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_rgb(a));
var b__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_rgb(b));
var G__59524 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59524) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59524));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__59813__delegate = function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op,day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2(a,b),more);
};
var G__59813 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__59814__i = 0, G__59814__a = new Array(arguments.length -  2);
while (G__59814__i < G__59814__a.length) {G__59814__a[G__59814__i] = arguments[G__59814__i + 2]; ++G__59814__i;}
  more = new cljs.core.IndexedSeq(G__59814__a,0,null);
} 
return G__59813__delegate.call(this,a,b,more);};
G__59813.cljs$lang$maxFixedArity = 2;
G__59813.cljs$lang$applyTo = (function (arglist__59815){
var a = cljs.core.first(arglist__59815);
arglist__59815 = cljs.core.next(arglist__59815);
var b = cljs.core.first(arglist__59815);
var more = cljs.core.rest(arglist__59815);
return G__59813__delegate(a,b,more);
});
G__59813.cljs$core$IFn$_invoke$arity$variadic = G__59813__delegate;
return G__59813;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__59818 = null;
if (arguments.length > 2) {
var G__59819__i = 0, G__59819__a = new Array(arguments.length -  2);
while (G__59819__i < G__59819__a.length) {G__59819__a[G__59819__i] = arguments[G__59819__i + 2]; ++G__59819__i;}
G__59818 = new cljs.core.IndexedSeq(G__59819__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__59818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__1;
day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__2;
day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.make_color_operation(cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.make_color_operation(cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.make_color_operation(cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_div = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.make_color_operation(cljs.core._SLASH_);
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$update_hsla_field(color,field,f,v){
var v__$1 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(v,v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hsla(color),field,f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rotate_hue = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$rotate_hue(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__59538_SHARP_){
return cljs.core.mod(p1__59538_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.saturate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$saturate(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.desaturate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$desaturate(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.lighten = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$lighten(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.darken = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$darken(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Decreases the alpha value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.transparentize = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$transparentize(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.zero_to_one_clip,cljs.core._),amount);
});
/**
 * Increases the alpha value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.opacify = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$opacify(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.zero_to_one_clip,cljs.core._PLUS_),amount);
});
/**
 * Return the inversion of a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.invert = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$invert(color){
var G__59549 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_rgb(color)], 0));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59549) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59549));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$mix(var_args){
var G__59558 = arguments.length;
switch (G__59558) {
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___59841 = arguments.length;
var i__4790__auto___59842 = (0);
while(true){
if((i__4790__auto___59842 < len__4789__auto___59841)){
args_arr__4810__auto__.push((arguments[i__4790__auto___59842]));

var G__59845 = (i__4790__auto___59842 + (1));
i__4790__auto___59842 = G__59845;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_rgb(color_1));
var c2 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_rgb(color_2));
var G__59564 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,c2], 0));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__59564) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_color.call(null,G__59564));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$core$IFn$_invoke$arity$2(color_1,color_2),more);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$lang$applyTo = (function (seq59555){
var G__59556 = cljs.core.first(seq59555);
var seq59555__$1 = cljs.core.next(seq59555);
var G__59557 = cljs.core.first(seq59555__$1);
var seq59555__$2 = cljs.core.next(seq59555__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59556,G__59557,seq59555__$2);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.mix.cljs$lang$maxFixedArity = (2));

/**
 * Return the complement of a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.complement = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$complement(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rotate_hue(color,(180));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hue_rotations(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59854 = arguments.length;
var i__4790__auto___59855 = (0);
while(true){
if((i__4790__auto___59855 < len__4789__auto___59854)){
args__4795__auto__.push((arguments[i__4790__auto___59855]));

var G__59856 = (i__4790__auto___59855 + (1));
i__4790__auto___59855 = G__59856;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rotate_hue,color),amounts);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$lang$applyTo = (function (seq59572){
var G__59573 = cljs.core.first(seq59572);
var seq59572__$1 = cljs.core.next(seq59572);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59573,seq59572__$1);
}));

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$analogous(var_args){
var G__59583 = arguments.length;
switch (G__59583) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous.cljs$core$IFn$_invoke$arity$2(color,true);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((30)) : sign.call(null,(30))),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((60)) : sign.call(null,(60)))], 0));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.analogous.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.triad = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$triad(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(120),(240)], 0));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$split_complement(var_args){
var G__59589 = arguments.length;
switch (G__59589) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2(color,(130));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip((1),(179),distance_from_complement);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),d,(- d)], 0));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.split_complement.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$tetrad(var_args){
var G__59594 = arguments.length;
switch (G__59594) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2(color,(90));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip((1),(90),(function (){var G__59597 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle);
return Math.abs(G__59597);
})());
var color_2 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rotate_hue(color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rotate_hue(color,(0)),day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.complement(color),color_2,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.complement(color_2)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.tetrad.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$shades(var_args){
var G__59599 = arguments.length;
switch (G__59599) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades.cljs$core$IFn$_invoke$arity$2(color,(10));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hsl(color);
var iter__4582__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$iter__59602(s__59603){
return (new cljs.core.LazySeq(null,(function (){
var s__59603__$1 = s__59603;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59603__$1);
if(temp__5735__auto__){
var s__59603__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59603__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59603__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59605 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59604 = (0);
while(true){
if((i__59604 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59604);
cljs.core.chunk_append(b__59605,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__59912 = (i__59604 + (1));
i__59604 = G__59912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59605),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$iter__59602(cljs.core.chunk_rest(s__59603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59605),null);
}
} else {
var i = cljs.core.first(s__59603__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$iter__59602(cljs.core.rest(s__59603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(function (){var G__59607 = (100.0 / step);
return Math.floor(G__59607);
})()));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.shades.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.ex_info_color_name = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$ex_info_color_name(n){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown color ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set(cljs.core.keys(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_color = cljs.core.memoize((function (k){
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1(k) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_hex.call(null,k));
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.from_name = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$from_name(n){
var temp__5733__auto__ = (function (){var G__59625 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1(G__59625) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.color_name__GT_color.call(null,G__59625));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var h = temp__5733__auto__;
return h;
} else {
throw day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.ex_info_color_name(n);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$scale_color_value(var_args){
var G__59629 = arguments.length;
switch (G__59629) {
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$2 = (function (value,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4(value,amount,(0),(100));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4 = (function (value,amount,min_val,max_val){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip(min_val,max_val,(value * ((1) + (amount / (100)))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value.cljs$lang$maxFixedArity = 4);

/**
 * Scales the lightness of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_lightness = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$scale_lightness(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value,amount);
});
/**
 * Scales the saturation of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_saturation = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$scale_saturation(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_color_value,amount);
});
/**
 * Scales the alpha of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.scale_alpha = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$scale_alpha(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(function (p1__59635_SHARP_,p2__59636_SHARP_){
var G__59639 = (p1__59635_SHARP_ * ((1) + (p2__59636_SHARP_ / (100))));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.zero_to_one_clip.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.zero_to_one_clip.cljs$core$IFn$_invoke$arity$1(G__59639) : day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.zero_to_one_clip.call(null,G__59639));
}),amount);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.decrown_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$decrown_hex(hex){
return clojure.string.replace(hex,/^#/,"");
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.crown_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find(/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.expand_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$expand_hex(hex){
var _ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.decrown_hex(hex);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),((_).length))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_,_], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),((_).length))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_long = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$hex__GT_long(hex){
return parseInt(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.expand_hex(clojure.string.replace(hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.long__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.weighted_mix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$color$weighted_mix(color_1,color_2,weight){
var vec__59648 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59647_SHARP_){
return (p1__59647_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59648,(0),null);
var weight_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59648,(1),null);
var vec__59651 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hex__GT_long,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(0),null);
var long_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.crown_hex(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.expand_hex(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.long__GT_hex(((long_1 * weight_1) + (long_2 * weight_2)))));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.js.map
