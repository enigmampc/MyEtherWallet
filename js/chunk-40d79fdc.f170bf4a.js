(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d79fdc"],{1488:function(t,e,a){},"7f58":function(t,e,a){"use strict";var i=a("bc56"),s=a.n(i);s.a},"8e13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v(" "+t._s(t.$t("common.having-issues"))+" "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("common.help-center")))])]):t._e()])},s=[],n={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},r=n,o=(a("7f58"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"16b84c17",null),l=c.exports;a.d(e,"a",(function(){return l}))},bbb7:function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-cdp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.finishMigration,expression:"!finishMigration"}],staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMaker.cdp-portal")))]),a("p",{staticClass:"cdp-id"},[t._v(" "+t._s(t.$t("dappsMaker.position-label",{value:t.cdpIdDisplay}))+" ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.liquid-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.what-is-dashes")}})],1):t._e()]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v(" "+t._s(t.$t("common.currency.usd"))+" ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.current-price"))+"("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),a("div",[t._v(" "+t._s(t.ethPriceDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidation-penalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(t._s(t.$t("dappsMaker.collateral-ratio")))]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.what-is-dashes")}})],1):t._e()]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.minimum-ratio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.stability-fee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.eth-collateral")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.deposited")))]),a("div",[t._v(" "+t._s(t.ethCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.eth")))])]),a("div",[t._v(" "+t._s(t.pethCollateral)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.peth")))]),t._v(" / "+t._s(t.usdCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showDeposit}},[t._v(" "+t._s(t.$t("dappsMaker.deposit"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.max-withdraw")))]),a("div",[t._v(" "+t._s(t.maxEthDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.eth")))])]),a("div",[t._v(" "+t._s(t.maxPethDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.peth")))]),t._v(" / "+t._s(t.maxUsdDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showWithdraw}},[t._v(" "+t._s(t.$t("dappsMaker.withdraw"))+" > ")])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.dai-position")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.generated")))]),a("div",[t._v(" "+t._s(t.debtValue)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.dai")))])]),a("div",[t._v(" "+t._s(t.debtValueDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showPayback}},[t._v(" "+t._s(t.$t("dappsMaker.payback"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.max-available")))]),a("div",[t._v(" "+t._s(t.maxDai)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.dai")))])]),a("div",[t._v(" "+t._s(t.maxUsd)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showGenerate}},[t._v(" "+t._s(t.$t("dappsMaker.generate"))+" > ")])])])])])])]),a("help-link")],1)},n=[],r=(a("a4d3"),a("4de4"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ddb0"),a("96cf"),a("fc11")),o=a("2f62"),c=a("8e13"),l=a("c16c"),u=a("901e"),d=a.n(u);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h=function(t){return new d.a(t)},f={components:{"help-link":c["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},valuesUpdated:{type:Number,default:0},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}},ethPrice:{type:d.a,default:h(0)},pethPrice:{type:d.a,default:h(0)},liquidationPenalty:{type:d.a,default:h(0)},stabilityFee:{type:d.a,default:h(0)},liquidationRatio:{type:d.a,default:h(0)},wethToPethRatio:{type:d.a,default:h(0)},pethMin:{type:d.a,default:h(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}}},data:function(){return{activeCdp:{},loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:h(0),maxWithDraw:h(0),maxWithDrawUSD:h(0),maxPethDraw:h(0),maxEthDraw:h(0)}},computed:v({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{noProxy:function(){return!!this.activeCdp&&this.activeCdp.noProxy},finishMigration:function(){return!!this.activeCdp&&this.activeCdp.needToFinishMigrating},collateralRatioColoring:function(){return this.values?this.values.collateralRatio>=2?"green":this.values.collateralRatio>=1.75&&this.values.collateralRatio<2?"orange":"red":""},liquidationPriceDisplay:function(){if(this.values){var t=Object(l["d"])(this.values.liquidationPrice,2);return new d.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.values?Object(l["c"])(this.values.collateralRatio):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.values?Object(l["d"])(Object(l["e"])(this.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.values?Object(l["d"])(Object(l["e"])(this.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.values?Object(l["d"])(Object(l["e"])(this.stabilityFee)):"--"},ethPriceDisplay:function(){return this.values?Object(l["d"])(this.ethPrice,2):"--"},maxPethDrawDisplay:function(){return this.values?Object(l["d"])(this.values.maxPethDraw,5):"--"},zeroDebt:function(){return h(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.values?this.values.maxEthDraw:"--"},maxUsdDrawDisplay:function(){return this.values?Object(l["d"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.values?Object(l["d"])(this.values.ethCollateral,5,!0):"--"},pethCollateral:function(){return this.values?Object(l["d"])(this.values.pethCollateral,5,!0):"--"},usdCollateral:function(){return this.values?Object(l["d"])(this.values.usdCollateral,2):"--"},debtValueDisplay:function(){return this.values?Object(l["d"])(this.values.debtValue,2):"--"},debtValue:function(){return this.values?this.values.debtValue:"--"},maxDai:function(){return this.values?this.values.maxDai:"--"},maxUsd:function(){return this.values?Object(l["d"])(this.values.maxDai,2):"--"}}),watch:(i={},Object(r["a"])(i,"activeCdp.ready",(function(){this.isReady()})),Object(r["a"])(i,"openCloseModal",(function(t){t&&this.showClose()})),Object(r["a"])(i,"openMoveModal",(function(t){t&&this.showMove()})),i),mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.activeCdp={},this.cdpId=this.$route.params.cdpId,this.makerActive&&(this.loaded=!0,this.cdpId&&this.$emit("activeCdpId",this.cdpId));case 3:case"end":return t.stop()}}),null,this)},methods:{showDeposit:function(){this.$emit("showDeposit")},showWithdraw:function(){this.$emit("showWithdraw")},showPayback:function(){this.$emit("showPayback")},showGenerate:function(){this.$emit("showGenerate")},displayPercentValue:l["e"],displayFixedValue:l["d"],isReady:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}))}}},b=f,m=(a("e1e1"),a("2877")),_=Object(m["a"])(b,s,n,!1,null,"31d5b677",null),y=_.exports;e["default"]=y},bc56:function(t,e,a){},c16c:function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"g",(function(){return p})),a.d(e,"a",(function(){return v})),a.d(e,"b",(function(){return h}));a("b680"),a("d3b7"),a("e25e"),a("25f0");var i=a("901e"),s=a.n(i),n=function(t){return new s.a(t)},r=function(t,e,a){return n(t).times(n(e)).div(n(a))};function o(t){return s.a.isBigNumber(t)||(t=new s.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return s.a.isBigNumber(t)||(t=new s.a(t)),!isFinite(t)||isNaN(t)?"--":a?t.toFixed(e,s.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=c(o(t),e,a);return isFinite(i)&&new s.a(i).gt(0)?i:"--"}function u(t,e,a,i){return r(n(t),n(e),n(a)).minus(n(i))}function d(t,e,a,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return n(t).minus(r(n(e).plus(.001),n(a),n(i))).minus(n(s).times(1))}function p(t,e,a,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return n(t).minus(r(n(e),n(a),n(i))).minus(n(s).times(1))}function v(t,e,a){return r(n(a),t,e)}function h(t,e,a,i){for(var s=parseInt(a),o=s;o>0;o--){var c=r(o,t,e).lte(n(i));if(c)return o}for(var l=100;l>0;l--){var u=r(l/100,t,e).lte(n(i));if(u)return l/100}return 0}},e1e1:function(t,e,a){"use strict";var i=a("1488"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-40d79fdc.f170bf4a.js.map