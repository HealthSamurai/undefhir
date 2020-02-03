goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__66824_67673 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__66825_67674 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66824_67673,G__66825_67674) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66824_67673,G__66825_67674));
var G__66826_67679 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__66827_67680 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66828_67681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66829_67682 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66826_67679,G__66827_67680,G__66828_67681,G__66829_67682) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66826_67679,G__66827_67680,G__66828_67681,G__66829_67682));
var G__66830_67691 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__66831_67692 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66832_67693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__66833_67694 = (function (panel_width_PERCENT_,p__66834){
var vec__66835 = p__66834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66835,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66835,(1),null);
return (((function (){var G__66838 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__66838);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66830_67691,G__66831_67692,G__66832_67693,G__66833_67694) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66830_67691,G__66831_67692,G__66832_67693,G__66833_67694));
var G__66839_67706 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__66840_67707 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66841_67708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66842_67709 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66839_67706,G__66840_67707,G__66841_67708,G__66842_67709) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66839_67706,G__66840_67707,G__66841_67708,G__66842_67709));
var G__66846_67712 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__66847_67713 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66848_67714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__66849_67715 = (function (width,p__66850){
var vec__66851 = p__66850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66851,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66851,(1),null);
return ((function (){var G__66854 = (width / n);
return Math.ceil(G__66854);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66846_67712,G__66847_67713,G__66848_67714,G__66849_67715) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66846_67712,G__66847_67713,G__66848_67714,G__66849_67715));
var G__66855_67728 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__66856_67729 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66857_67730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66858_67731 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66855_67728,G__66856_67729,G__66857_67730,G__66858_67731) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66855_67728,G__66856_67729,G__66857_67730,G__66858_67731));
var G__66859_67737 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__66860_67738 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66861_67739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66862_67740 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66859_67737,G__66860_67738,G__66861_67739,G__66862_67740) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66859_67737,G__66860_67738,G__66861_67739,G__66862_67740));
var G__66872_67745 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__66873_67746 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66874_67747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66875_67748 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66872_67745,G__66873_67746,G__66874_67747,G__66875_67748) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66872_67745,G__66873_67746,G__66874_67747,G__66875_67748));
var G__66876_67749 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__66877_67750 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66878_67751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66879_67752 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66876_67749,G__66877_67750,G__66878_67751,G__66879_67752) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66876_67749,G__66877_67750,G__66878_67751,G__66879_67752));
var G__66880_67753 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__66881_67754 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66882_67755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66883_67756 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66880_67753,G__66881_67754,G__66882_67755,G__66883_67756) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66880_67753,G__66881_67754,G__66882_67755,G__66883_67756));
var G__66884_67757 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__66885_67758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66886_67759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66887_67760 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66884_67757,G__66885_67758,G__66886_67759,G__66887_67760) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66884_67757,G__66885_67758,G__66886_67759,G__66887_67760));
var G__66891_67764 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__66892_67765 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66893_67766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66894_67767 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66891_67764,G__66892_67765,G__66893_67766,G__66894_67767) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66891_67764,G__66892_67765,G__66893_67766,G__66894_67767));
var G__66896_67769 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__66897_67770 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66898_67771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__66899_67772 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66896_67769,G__66897_67770,G__66898_67771,G__66899_67772) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66896_67769,G__66897_67770,G__66898_67771,G__66899_67772));
var G__66900_67773 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__66901_67774 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66900_67773,G__66901_67774) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66900_67773,G__66901_67774));
var G__66902_67782 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__66903_67783 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66904_67784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__66905_67785 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66902_67782,G__66903_67783,G__66904_67784,G__66905_67785) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66902_67782,G__66903_67783,G__66904_67784,G__66905_67785));
var G__66906_67792 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__66907_67793 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66908_67794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__66909_67795 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66906_67792,G__66907_67793,G__66908_67794,G__66909_67795) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66906_67792,G__66907_67793,G__66908_67794,G__66909_67795));
var G__66915_67797 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__66916_67798 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66917_67799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__66918_67800 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66910_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__66910_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__66910_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66915_67797,G__66916_67798,G__66917_67799,G__66918_67800) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66915_67797,G__66916_67798,G__66917_67799,G__66918_67800));
var G__66924_67801 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__66925_67802 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66926_67803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__66927_67804 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66924_67801,G__66925_67802,G__66926_67803,G__66927_67804) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66924_67801,G__66925_67802,G__66926_67803,G__66927_67804));
var G__66945_67805 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__66946_67806 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66947_67807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__66948_67808 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66945_67805,G__66946_67806,G__66947_67807,G__66948_67808) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66945_67805,G__66946_67806,G__66947_67807,G__66948_67808));
var G__66951_67809 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__66952_67810 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66953_67811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__66954_67812 = (function (expansions,p__66955){
var vec__66956 = p__66955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66956,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66956,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66951_67809,G__66952_67810,G__66953_67811,G__66954_67812) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66951_67809,G__66952_67810,G__66953_67811,G__66954_67812));
var G__66959_67813 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__66960_67814 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66961_67815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__66962_67816 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66959_67813,G__66960_67814,G__66961_67815,G__66962_67816) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66959_67813,G__66960_67814,G__66961_67815,G__66962_67816));
var G__66963_67817 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__66964_67818 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66963_67817,G__66964_67818) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66963_67817,G__66964_67818));
var G__66965_67825 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__66966_67826 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66965_67825,G__66966_67826) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66965_67825,G__66966_67826));
var G__66969_67827 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__66970_67828 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66969_67827,G__66970_67828) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66969_67827,G__66970_67828));
var G__66971_67829 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__66972_67830 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66971_67829,G__66972_67830) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66971_67829,G__66972_67830));
var G__66975_67832 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__66976_67833 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__66975_67832,G__66976_67833) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66975_67832,G__66976_67833));
var G__66979_67843 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__66980_67844 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66981_67845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__66982_67846 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66979_67843,G__66980_67844,G__66981_67845,G__66982_67846) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66979_67843,G__66980_67844,G__66981_67845,G__66982_67846));
var G__66983_67847 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__66984_67848 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66985_67849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__66986_67850 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__66983_67847,G__66984_67848,G__66985_67849,G__66986_67850) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66983_67847,G__66984_67848,G__66985_67849,G__66986_67850));
var G__66987_67851 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__66988_67852 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66989_67853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__66990_67854 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66991_67855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__66992_67856 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__66993_67857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__66994_67858 = (function (p__66995,_){
var vec__67000 = p__66995;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67000,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67000,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67000,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__66987_67851,G__66988_67852,G__66989_67853,G__66990_67854,G__66991_67855,G__66992_67856,G__66993_67857,G__66994_67858) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__66987_67851,G__66988_67852,G__66989_67853,G__66990_67854,G__66991_67855,G__66992_67856,G__66993_67857,G__66994_67858));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__67004,_){
var vec__67005 = p__67004;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67005,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67005,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__67009_67864 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__67010_67865 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67011_67866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67012_67867 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67013_67868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__67014_67869 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67009_67864,G__67010_67865,G__67011_67866,G__67012_67867,G__67013_67868,G__67014_67869) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67009_67864,G__67010_67865,G__67011_67866,G__67012_67867,G__67013_67868,G__67014_67869));
var G__67015_67873 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__67016_67874 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67017_67875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__67018_67876 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67019_67877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__67020_67878 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67015_67873,G__67016_67874,G__67017_67875,G__67018_67876,G__67019_67877,G__67020_67878) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67015_67873,G__67016_67874,G__67017_67875,G__67018_67876,G__67019_67877,G__67020_67878));
var G__67021_67887 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__67022_67888 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67023_67889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__67024_67890 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67021_67887,G__67022_67888,G__67023_67889,G__67024_67890) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67021_67887,G__67022_67888,G__67023_67889,G__67024_67890));
var G__67027_67892 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__67028_67893 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67027_67892,G__67028_67893) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67027_67892,G__67028_67893));
var G__67032_67894 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__67033_67895 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67032_67894,G__67033_67895) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67032_67894,G__67033_67895));
var G__67034_67896 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__67035_67897 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67036_67898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__67037_67899 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67034_67896,G__67035_67897,G__67036_67898,G__67037_67899) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67034_67896,G__67035_67897,G__67036_67898,G__67037_67899));
var G__67038_67901 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__67039_67902 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67038_67901,G__67039_67902) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67038_67901,G__67039_67902));
var G__67040_67903 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__67041_67904 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67042_67905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67043_67906 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67040_67903,G__67041_67904,G__67042_67905,G__67043_67906) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67040_67903,G__67041_67904,G__67042_67905,G__67043_67906));
var G__67044_67912 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__67045_67913 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67046_67914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67047_67915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67048_67916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__67049_67917 = (function (p__67050,_){
var vec__67051 = p__67050;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67051,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67051,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67044_67912,G__67045_67913,G__67046_67914,G__67047_67915,G__67048_67916,G__67049_67917) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67044_67912,G__67045_67913,G__67046_67914,G__67047_67915,G__67048_67916,G__67049_67917));
var G__67054_67929 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__67055_67930 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67056_67931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__67057_67932 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67054_67929,G__67055_67930,G__67056_67931,G__67057_67932) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67054_67929,G__67055_67930,G__67056_67931,G__67057_67932));
var G__67058_67936 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__67059_67937 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67060_67938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__67061_67939 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67058_67936,G__67059_67937,G__67060_67938,G__67061_67939) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67058_67936,G__67059_67937,G__67060_67938,G__67061_67939));
var G__67062_67945 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__67063_67946 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67064_67947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__67065_67948 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67062_67945,G__67063_67946,G__67064_67947,G__67065_67948) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67062_67945,G__67063_67946,G__67064_67947,G__67065_67948));
var G__67068_67958 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__67069_67959 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67070_67960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67071_67961 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67068_67958,G__67069_67959,G__67070_67960,G__67071_67961) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67068_67958,G__67069_67959,G__67070_67960,G__67071_67961));
var G__67072_67968 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__67073_67969 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67074_67970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67075_67971 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67072_67968,G__67073_67969,G__67074_67970,G__67075_67971) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67072_67968,G__67073_67969,G__67074_67970,G__67075_67971));
var G__67080_67984 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__67081_67985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67082_67986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__67083_67987 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67080_67984,G__67081_67985,G__67082_67986,G__67083_67987) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67080_67984,G__67081_67985,G__67082_67986,G__67083_67987));
var G__67084_67997 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__67085_67998 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67086_67999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67087_68000 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67084_67997,G__67085_67998,G__67086_67999,G__67087_68000) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67084_67997,G__67085_67998,G__67086_67999,G__67087_68000));
var G__67088_68006 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__67089_68007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67090_68008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__67091_68009 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67088_68006,G__67089_68007,G__67090_68008,G__67091_68009) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67088_68006,G__67089_68007,G__67090_68008,G__67091_68009));
var G__67093_68012 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__67094_68013 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67095_68014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__67096_68015 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67093_68012,G__67094_68013,G__67095_68014,G__67096_68015) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67093_68012,G__67094_68013,G__67095_68014,G__67096_68015));
var G__67098_68021 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__67099_68022 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67100_68023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__67101_68024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67102_68025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__67103_68026 = (function (p__67104){
var vec__67105 = p__67104;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67105,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67105,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67098_68021,G__67099_68022,G__67100_68023,G__67101_68024,G__67102_68025,G__67103_68026) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67098_68021,G__67099_68022,G__67100_68023,G__67101_68024,G__67102_68025,G__67103_68026));
var G__67112_68033 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__67113_68034 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67114_68035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__67115_68036 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67116_68037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__67117_68038 = (function (p__67118){
var vec__67119 = p__67118;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67119,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67119,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67112_68033,G__67113_68034,G__67114_68035,G__67115_68036,G__67116_68037,G__67117_68038) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67112_68033,G__67113_68034,G__67114_68035,G__67115_68036,G__67116_68037,G__67117_68038));
var G__67123_68040 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__67124_68041 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67125_68042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67126_68043 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67123_68040,G__67124_68041,G__67125_68042,G__67126_68043) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67123_68040,G__67124_68041,G__67125_68042,G__67126_68043));
var G__67130_68049 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__67131_68050 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67132_68051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67133_68052 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67129_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__67129_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__67129_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67130_68049,G__67131_68050,G__67132_68051,G__67133_68052) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67130_68049,G__67131_68050,G__67132_68051,G__67133_68052));
var G__67134_68054 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__67135_68055 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67136_68056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__67137_68057 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67134_68054,G__67135_68055,G__67136_68056,G__67137_68057) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67134_68054,G__67135_68055,G__67136_68056,G__67137_68057));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__67142 = arguments.length;
switch (G__67142) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___68059 = arguments.length;
var i__4790__auto___68060 = (0);
while(true){
if((i__4790__auto___68060 < len__4789__auto___68059)){
args_arr__4810__auto__.push((arguments[i__4790__auto___68060]));

var G__68061 = (i__4790__auto___68060 + (1));
i__4790__auto___68060 = G__68061;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq67139){
var G__67140 = cljs.core.first(seq67139);
var seq67139__$1 = cljs.core.next(seq67139);
var G__67141 = cljs.core.first(seq67139__$1);
var seq67139__$2 = cljs.core.next(seq67139__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67140,G__67141,seq67139__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__67152_68063 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__67153_68064 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67154_68065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__67155_68066 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67156_68067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67157_68068 = (function (p__67161,p__67162){
var vec__67171 = p__67161;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67171,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67171,(1),null);
var vec__67174 = p__67162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67174,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67174,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__67178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67178,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67178,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67152_68063,G__67153_68064,G__67154_68065,G__67155_68066,G__67156_68067,G__67157_68068) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67152_68063,G__67153_68064,G__67154_68065,G__67155_68066,G__67156_68067,G__67157_68068));
var G__67192_68089 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__67193_68090 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67194_68091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__67195_68092 = (function (match){
var map__67203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__67203__$1 = (((((!((map__67203 == null))))?(((((map__67203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67203):map__67203);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67203__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67203__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67203__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67203__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67192_68089,G__67193_68090,G__67194_68091,G__67195_68092) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67192_68089,G__67193_68090,G__67194_68091,G__67195_68092));
var G__67206_68115 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__67207_68116 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67208_68117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67209_68118 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67206_68115,G__67207_68116,G__67208_68117,G__67209_68118) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67206_68115,G__67207_68116,G__67208_68117,G__67209_68118));
var G__67214_68125 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__67215_68126 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67216_68127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67217_68128 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67214_68125,G__67215_68126,G__67216_68127,G__67217_68128) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67214_68125,G__67215_68126,G__67216_68127,G__67217_68128));
var G__67218_68129 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__67219_68130 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67218_68129,G__67219_68130) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67218_68129,G__67219_68130));
var G__67222_68134 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__67223_68135 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67224_68136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67225_68137 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67222_68134,G__67223_68135,G__67224_68136,G__67225_68137) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67222_68134,G__67223_68135,G__67224_68136,G__67225_68137));
var G__67230_68142 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__67231_68143 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67232_68144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67233_68145 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67230_68142,G__67231_68143,G__67232_68144,G__67233_68145) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67230_68142,G__67231_68143,G__67232_68144,G__67233_68145));
var G__67239_68147 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__67240_68148 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67241_68149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__67242_68150 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67239_68147,G__67240_68148,G__67241_68149,G__67242_68150) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67239_68147,G__67240_68148,G__67241_68149,G__67242_68150));
var G__67243_68153 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__67244_68154 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67245_68155 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__67246_68156 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67243_68153,G__67244_68154,G__67245_68155,G__67246_68156) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67243_68153,G__67244_68154,G__67245_68155,G__67246_68156));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__67247_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__67247_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__67290){
return cljs.core.coll_QMARK_(G__67290);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__67298){
return cljs.core.map_QMARK_(G__67298);
}),(function (G__67298){
return cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__67298){
return cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__67298){
return cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__67298){
return cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__67298){
return cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__67298){
return cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__67298){
return ((cljs.core.map_QMARK_(G__67298)) && (cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__67298,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__67383){
return cljs.core.coll_QMARK_(G__67383);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__67385 = sub_type;
var G__67385__$1 = (((G__67385 instanceof cljs.core.Keyword))?G__67385.fqn:null);
switch (G__67385__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__68229 = (exp - (1));
var G__68230 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__68231 = cljs.core.rest(order__$1);
exp = G__68229;
total = G__68230;
order__$1 = G__68231;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__67395 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__67395__$1 = (((G__67395 instanceof cljs.core.Keyword))?G__67395.fqn:null);
switch (G__67395__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__67400,p__67401){
var vec__67402 = p__67400;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(1),null);
var vec__67405 = p__67401;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67405,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__67419_68257 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__67420_68258 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67421_68259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__67422_68260 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67419_68257,G__67420_68258,G__67421_68259,G__67422_68260) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67419_68257,G__67420_68258,G__67421_68259,G__67422_68260));
var G__67428_68261 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__67429_68262 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67430_68263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__67431_68264 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67428_68261,G__67429_68262,G__67430_68263,G__67431_68264) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67428_68261,G__67429_68262,G__67430_68263,G__67431_68264));
var G__67434_68265 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__67435_68266 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67436_68267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__67437_68268 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67438_68269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__67439_68270 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67434_68265,G__67435_68266,G__67436_68267,G__67437_68268,G__67438_68269,G__67439_68270) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67434_68265,G__67435_68266,G__67436_68267,G__67437_68268,G__67438_68269,G__67439_68270));
var G__67441_68272 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__67442_68273 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67443_68274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__67444_68275 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67445_68276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__67446_68277 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67441_68272,G__67442_68273,G__67443_68274,G__67444_68275,G__67445_68276,G__67446_68277) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67441_68272,G__67442_68273,G__67443_68274,G__67444_68275,G__67445_68276,G__67446_68277));
var G__67452_68281 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__67453_68282 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67454_68283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__67455_68284 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67452_68281,G__67453_68282,G__67454_68283,G__67455_68284) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67452_68281,G__67453_68282,G__67454_68283,G__67455_68284));
var G__67457_68287 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__67458_68288 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67459_68289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__67460_68290 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67461_68291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__67462_68292 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67463_68293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__67464_68294 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67465_68295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__67466_68296 = (function (p__67467){
var vec__67468 = p__67467;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67468,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67468,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67468,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67468,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__67474 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__67474__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__67474):G__67474);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67477){
var map__67478 = p__67477;
var map__67478__$1 = (((((!((map__67478 == null))))?(((((map__67478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67478):map__67478);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67478__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67478__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__67474__$1);
} else {
return G__67474__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__67457_68287,G__67458_68288,G__67459_68289,G__67460_68290,G__67461_68291,G__67462_68292,G__67463_68293,G__67464_68294,G__67465_68295,G__67466_68296) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67457_68287,G__67458_68288,G__67459_68289,G__67460_68290,G__67461_68291,G__67462_68292,G__67463_68293,G__67464_68294,G__67465_68295,G__67466_68296));
var G__67487_68302 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__67488_68303 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67489_68304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__67490_68305 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67487_68302,G__67488_68303,G__67489_68304,G__67490_68305) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67487_68302,G__67488_68303,G__67489_68304,G__67490_68305));
var G__67493_68307 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__67494_68308 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67495_68309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__67496_68310 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67493_68307,G__67494_68308,G__67495_68309,G__67496_68310) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67493_68307,G__67494_68308,G__67495_68309,G__67496_68310));
var G__67500_68311 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__67501_68312 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67502_68313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__67503_68314 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67500_68311,G__67501_68312,G__67502_68313,G__67503_68314) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67500_68311,G__67501_68312,G__67502_68313,G__67503_68314));
var G__67504_68315 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__67505_68316 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67506_68317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__67507_68318 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67504_68315,G__67505_68316,G__67506_68317,G__67507_68318) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67504_68315,G__67505_68316,G__67506_68317,G__67507_68318));
var G__67508_68319 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__67509_68320 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67510_68321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__67511_68322 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67508_68319,G__67509_68320,G__67510_68321,G__67511_68322) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67508_68319,G__67509_68320,G__67510_68321,G__67511_68322));
var G__67512_68327 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__67513_68329 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67514_68330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__67515_68331 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67512_68327,G__67513_68329,G__67514_68330,G__67515_68331) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67512_68327,G__67513_68329,G__67514_68330,G__67515_68331));
var G__67521_68332 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__67522_68333 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67523_68334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__67524_68335 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67521_68332,G__67522_68333,G__67523_68334,G__67524_68335) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67521_68332,G__67522_68333,G__67523_68334,G__67524_68335));
var G__67525_68336 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__67526_68337 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67527_68338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__67528_68339 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67525_68336,G__67526_68337,G__67527_68338,G__67528_68339) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67525_68336,G__67526_68337,G__67527_68338,G__67528_68339));
var G__67529_68342 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__67530_68343 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67531_68344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__67532_68345 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67529_68342,G__67530_68343,G__67531_68344,G__67532_68345) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67529_68342,G__67530_68343,G__67531_68344,G__67532_68345));
var G__67533_68348 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__67534_68349 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67533_68348,G__67534_68349) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67533_68348,G__67534_68349));
var G__67536_68350 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__67537_68351 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67538_68352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__67539_68353 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67536_68350,G__67537_68351,G__67538_68352,G__67539_68353) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67536_68350,G__67537_68351,G__67538_68352,G__67539_68353));
var G__67546_68364 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__67547_68365 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67548_68366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__67549_68367 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67546_68364,G__67547_68365,G__67548_68366,G__67549_68367) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67546_68364,G__67547_68365,G__67548_68366,G__67549_68367));
var G__67555_68368 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__67556_68369 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67557_68370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__67558_68371 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67555_68368,G__67556_68369,G__67557_68370,G__67558_68371) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67555_68368,G__67556_68369,G__67557_68370,G__67558_68371));
var G__67560_68374 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__67561_68375 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67562_68376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__67563_68377 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67560_68374,G__67561_68375,G__67562_68376,G__67563_68377) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67560_68374,G__67561_68375,G__67562_68376,G__67563_68377));
var G__67567_68378 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__67568_68379 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67569_68380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__67570_68381 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67567_68378,G__67568_68379,G__67569_68380,G__67570_68381) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67567_68378,G__67568_68379,G__67569_68380,G__67570_68381));
var G__67580_68382 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__67581_68383 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67582_68384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__67583_68385 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67580_68382,G__67581_68383,G__67582_68384,G__67583_68385) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67580_68382,G__67581_68383,G__67582_68384,G__67583_68385));
var G__67610_68386 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__67611_68387 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67612_68388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__67613_68389 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67610_68386,G__67611_68387,G__67612_68388,G__67613_68389) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67610_68386,G__67611_68387,G__67612_68388,G__67613_68389));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__67615_68398 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__67616_68399 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67615_68398,G__67616_68399) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67615_68398,G__67616_68399));
var G__67621_68406 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__67622_68407 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67623_68408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__67624_68409 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67625_68410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__67626_68411 = (function (p__67627,_){
var vec__67628 = p__67627;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67628,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67628,(1),null);
var G__67631 = (window_width / char_width);
return Math.ceil(G__67631);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__67621_68406,G__67622_68407,G__67623_68408,G__67624_68409,G__67625_68410,G__67626_68411) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67621_68406,G__67622_68407,G__67623_68408,G__67624_68409,G__67625_68410,G__67626_68411));
var G__67637_68412 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__67638_68413 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67637_68412,G__67638_68413) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67637_68412,G__67638_68413));
var G__67644_68416 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__67645_68417 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67646_68418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__67647_68419 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67644_68416,G__67645_68417,G__67646_68418,G__67647_68419) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67644_68416,G__67645_68417,G__67646_68418,G__67647_68419));
var G__67651_68430 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__67652_68431 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67651_68430,G__67652_68431) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67651_68430,G__67652_68431));
var G__67659_68432 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__67660_68433 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__67661_68434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__67662_68435 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__67659_68432,G__67660_68433,G__67661_68434,G__67662_68435) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67659_68432,G__67660_68433,G__67661_68434,G__67662_68435));
var G__67663_68441 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__67664_68442 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__67663_68441,G__67664_68442) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__67663_68441,G__67664_68442));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
