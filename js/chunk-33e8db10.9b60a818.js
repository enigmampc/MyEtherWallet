(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33e8db10"],{"2ab9":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAAXNSR0IArs4c6QAAAVNJREFUaAXtmLFqAkEQhm8tFIS0KazTpE2lKdKkEAshdSBg4RukS5nWF1DTCD6Fha2dYmFvmTeI6c5vwy4sySYQrrmdnYGf3RtOmW//ueG4oqh5lGXZQBP0jnboruYlVysPwDEK48RFv9q/1vjXwM1CWreXCw3gYwTYpkRDv2UFDaxBCh24LrO9c3Z6HrgbbkU7rdCB1ep0jd+t/leaG2Ta3r+1t/HnyQ0X7Ifo0ucSWxvU+4w6kbo/yT0YY1ZfwMC2SBzQVeRmKSkLfeuBb7jYSiH7g2Np2yCnKL3DTaj36Fow/Qm2bji02iQGKOWh9UL9saFlYYcMrTVr+sHQtd+9FigWHyTv06d0BMAorLNZnU22rbWNXQ+zaBtrG6dwArk9s/abdB4vFbb7gH1CsZA1oPyjBuk0QisT1jk8+gYsF9YB22f4FR3RBvW8+7rqCfw8gTMZu333xRPRkQAAAABJRU5ErkJggg=="},4820:function(t,a,e){"use strict";var s=e("69b7"),i=e.n(s);i.a},"4ee6":function(t,a,e){"use strict";var s=e("d5bb"),i=e.n(s);i.a},5845:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"boundary"},[s("div",{staticClass:"grid-col-2 promo-cards"},[s("div",{staticClass:"card-block create-wallet",on:{click:t.migrateDai}},[s("div",{staticClass:"flex-col-vertical-center"},[s("div",{staticClass:"card-content"},[s("h2",{staticClass:"color-white"},[t._v(" "+t._s(t.$t("dappsMaker.migrate-old-dai-to-new-dai"))+" ")]),s("p",{staticClass:"button"},[t._v(" "+t._s(t.$t("dappsMaker.sai-to-dai"))+" "),s("img",{attrs:{src:e("2ab9")}})])])])]),s("div",{staticClass:"card-block unlock-wallet",on:{click:t.migrateCDP}},[s("div",{staticClass:"flex-col-vertical-center"},[s("div",{staticClass:"card-content"},[s("h2",{staticClass:"color-white"},[t._v(" "+t._s(t.$t("dappsMaker.migrate-single-collateral-to-multi-collateral"))+" ")]),s("p",{staticClass:"button"},[t._v(" "+t._s(t.$t("dappsMaker.migrate"))+" "),s("img",{attrs:{src:e("2ab9")}})])])])])]),s("div",{staticClass:"grid-col-2 promo-cards"},[s("div",{staticClass:"card-block create-wallet",on:{click:t.goToManage}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.makerActive,expression:"makerActive"}],staticClass:"flex-col-vertical-center"},[s("div",{staticClass:"card-content"},[s("h2",{staticClass:"color-white"},[t._v(" "+t._s(t.$t("dappsMaker.manage-your-vault"))+" ")]),s("p",{staticClass:"button"},[t._v(" "+t._s(t.$t("dappsMaker.manage"))+" "),s("img",{attrs:{src:e("2ab9")}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.makerActive,expression:"!makerActive"}],staticClass:"flex-col-vertical-center"},[s("loading-sign",{attrs:{loadingmessage1:t.loadingMessage,loadingmessage2:t.$t("dappsMaker.initial-loading-two")}})],1)]),s("div",{staticClass:"card-block unlock-wallet",on:{click:t.gotoCreate}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.makerActive,expression:"makerActive"}],staticClass:"flex-col-vertical-center"},[s("div",{staticClass:"card-content"},[s("h2",{staticClass:"color-white"},[t._v(t._s(t.$t("dappsMaker.create-a-vault")))]),s("p",{staticClass:"button"},[t._v(" "+t._s(t.$t("dappsMaker.create"))+" "),s("img",{attrs:{src:e("2ab9")}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.makerActive,expression:"!makerActive"}],staticClass:"flex-col-vertical-center"},[s("loading-sign",{attrs:{loadingmessage1:t.loadingMessage,loadingmessage2:t.$t("dappsMaker.initial-loading-two")}})],1)])]),s("div",{staticClass:"grid-col-2 promo-cards"},[s("div",{staticClass:"card-block unlock-wallet",on:{click:t.goToSave}},[s("div",{staticClass:"flex-col-vertical-center"},[s("div",{staticClass:"card-content"},[s("h2",{staticClass:"color-white"},[t._v(" "+t._s(t.$t("dappsMaker.dai-savings"))+" ")]),s("p",{staticClass:"button"},[t._v(" "+t._s(t.$t("dappsMaker.save"))+" "),s("img",{attrs:{src:e("2ab9")}})])])])])])])},i=[],r=(e("caad"),e("2532"),e("c1be")),o={components:{"loading-sign":r["a"]},props:{cdps:{type:Array,default:function(){return[]}},cdpsWithoutProxy:{type:Array,default:function(){return[]}},makerActive:{type:Boolean,default:!1},loadingState:{type:String,default:"none"}},data:function(){return{}},computed:{loadingMessage:function(){return this.loadingState},hasCdps:function(){return this.cdps.length>0},showManage:function(){return this.listCdps||this.cdps.length>=1&&this.cdpsWithoutProxy.length>=1},listCdps:function(){return this.cdps.length>1||this.cdpsWithoutProxy.length>1}},mounted:function(){},methods:{gotoCreate:function(){this.$route.path.includes("maker-dai")&&(this.makerActive?(this.activeValues=this.systemValues,this.$router.push({name:"create"})):(this.$emit("proceedtoCreateOrManage"),this.$emit("setAfterLoadPage","CREATE"),this.$router.push({name:"makerLoading"})))},migrateDai:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"migrateDAI"})},migrateCDP:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"migrateCDP"})},gotoLoading:function(){this.$emit("proceedtoCreateOrManage"),this.makerActive?this.goToManage():this.$router.push({name:"makerLoading"})},goToSave:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"save"})},goToManage:function(){this.$route.path.includes("maker-dai")&&(this.makerActive?1===this.cdps.length?this.$router.push({name:"manage",params:{cdpId:this.cdps[0]}}):1===this.cdpsWithoutProxy.length?this.$router.push({name:"migrate",params:{cdpId:this.cdpsWithoutProxy[0]}}):this.showManage?this.$router.push({name:"select"}):this.gotoCreate():(this.$emit("proceedtoCreateOrManage"),this.$emit("setAfterLoadPage","MANAGE"),this.$router.push({name:"makerLoading"})))}}},n=o,c=(e("4ee6"),e("2877")),l=Object(c["a"])(n,s,i,!1,null,"4e24a3b4",null),d=l.exports;a["default"]=d},"69b7":function(t,a,e){},c1be:function(t,a,e){"use strict";var s=function(t,a){var e=a._c;return e("div",[e("div",{class:[a.props.color,"loading-container","loading-sign"]},[a._m(0),""!=a.props.loadingmessage1?e("p",{staticClass:"loading-message1"},[a._v(" "+a._s(a.props.loadingmessage1)+" ")]):a._e(),""!=a.props.loadingmessage2?e("p",{staticClass:"loading-message2"},[a._v(" "+a._s(a.props.loadingmessage2)+" ")]):a._e()])])},i=[function(t,a){var e=a._c;return e("div",{staticClass:"lds-spinner"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])}],r={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},o=r,n=(e("4820"),e("2877")),c=Object(n["a"])(o,s,i,!0,null,"3944612c",null),l=c.exports;e.d(a,"a",(function(){return l}))},d5bb:function(t,a,e){}}]);
//# sourceMappingURL=chunk-33e8db10.9b60a818.js.map