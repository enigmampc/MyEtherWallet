(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c705f28"],{"55e2":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"verify-content-container"},[s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("common.signature"))+":")]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),s("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),s("div",{staticClass:"the-form signature"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{placeholder:e.verifyMessageLabel,name:"signature"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),s("div",[""!==e.message&&!0===e.showMessage?s("p",{staticClass:"success-message"},[e._v(" "+e._s(JSON.parse(e.message).address)+" "+e._s(e.$t("verifyMessage.message.address-signed"))+": "),JSON.parse(e.message).msg.length>20?s("br"):e._e(),s("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("signature")?s("p",[e._v(" "+e._s(e.$t("verifyMessage.message.validation-fail"))+" ")]):e._e()])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.errors.has("signature")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v(" "+e._s(e.$t("verifyMessage.title"))+" ")])])])])},n=[],r=s("f29f"),i=r["a"],c=(s("5d22"),s("2877")),o=Object(c["a"])(i,a,n,!1,null,"2eed43d3",null),l=o.exports;s.d(t,"a",(function(){return l}))},"5d22":function(e,t,s){"use strict";var a=s("8778"),n=s.n(a);n.a},8778:function(e,t,s){},"922a":function(e,t,s){"use strict";var a=s("bd1a"),n=s.n(a);n.a},bb65:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("interface-container-title",{attrs:{title:e.$t("verifyMessage.title")}}),s("verify-message-input"),s("div",{staticClass:"content-container"},[s("div",{staticClass:"submit-button-container"},[s("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[],r=s("539d"),i=s("55c1"),c=s("55e2"),o={name:"VerifyMessage",components:{"interface-bottom-text":r["a"],"interface-container-title":i["a"],"verify-message-input":c["a"]}},l=o,u=(s("922a"),s("2877")),d=Object(u["a"])(l,a,n,!1,null,"977a0ce8",null),f=d.exports;s.d(t,"default",(function(){return f}))},bd1a:function(e,t,s){},f29f:function(e,t,s){"use strict";(function(e){s("a4d3"),s("4de4"),s("fb6a"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("25f0"),s("5319"),s("159b");var a=s("fc11"),n=s("ce96"),r=s("2f62"),i=s("b671");function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(s,!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t["a"]={props:{signature:{type:String,default:""}},data:function(){return{message:this.signature,showMessage:!1,verifyMessageLabel:'\n      {\n        "address": "0xdecaf9cd2367cdbb726e904cd6397edfcae6068d",\n        "msg": "no one is giving away free ETH",\n        "sig":\n          "0xfd53681a1bbbdbd6074a884e628540f129c57\n          634c055f91d45615c943db446fb0acc35ef34bf9\n          05a78b634d4a88769b80432b4714ba2b19e2fda9\n          814a95a1dbb1b",\n        "version": "3",\n        "signer": "MEW"\n      }\n    '}},computed:o({},Object(r["b"])(["web3"])),watch:{message:function(e){this.message=e},signature:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.showMessage=!1,this.message=""},verifyMessage:function(){try{var t=JSON.parse(this.message),s=Object(i["hashPersonalMessage"])(n["d"].toBuffer(t.msg)),a=e.from(t.sig.replace("0x",""),"hex");if(65!==a.length)return void n["e"].responseHandler("".concat(this.$t("errorsGlobal.something-went-wrong")),n["e"].ERROR);a[64]=0===a[64]||1===a[64]?a[64]+27:a[64],"1"===t.version&&(s=this.web3.utils.sha3(t.msg));var r=Object(i["ecrecover"])(s,a[64],a.slice(0,32),a.slice(32,64));t.address.replace("0x","")!==Object(i["pubToAddress"])(r).toString("hex")?(this.deleteInput(),this.showMessage=!1,n["e"].responseHandler("".concat(this.$t("errorsGlobal.signer-address-different")),n["e"].ERROR)):this.showMessage=!0}catch(c){this.deleteInput(),n["e"].responseHandler(c,n["e"].ERROR)}}}}}).call(this,s("1c35").Buffer)}}]);
//# sourceMappingURL=chunk-0c705f28.412b227d.js.map