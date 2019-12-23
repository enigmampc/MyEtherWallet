(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26dae546"],{"124d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"deploy-contract-container"},[a("interface-container-title",{attrs:{title:t.$t("contract.deploy")}}),a("div",{staticClass:"content-container"},[a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("contract.byte-code")))]),a("div",{staticClass:"copy-buttons"},[a("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInput("bytecode")}}},[t._v(" "+t._s(t.$t("common.clear"))+" ")]),a("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("bytecode")}}},[t._v(" "+t._s(t.$t("common.copy"))+" ")])])])]),a("div",{staticClass:"the-form byte-code"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bytecode,expression:"bytecode"}],ref:"bytecode",staticClass:"custom-textarea-1",domProps:{value:t.bytecode},on:{input:function(e){e.target.composing||(t.bytecode=e.target.value)}}}),t._v(" "),a("i",{class:[t.isValidByte?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("contract.abi-json-int")))]),a("div",{staticClass:"copy-buttons"},[a("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInput("abi")}}},[t._v(" "+t._s(t.$t("common.clear"))+" ")]),a("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v(" "+t._s(t.$t("common.copy"))+" ")])])])]),a("div",{staticClass:"the-form"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),t._v(" "),a("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),t.abiConstructor?a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(" "+t._s(t.$t("contract.constructor"))+" "+t._s(t.abiConstructor?"Inputs":"Input")+": ")])])]),t._l(t.abiConstructor.inputs,(function(e,n){return a("div",{key:e.name+n},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),a("div",{staticClass:"the-form contract-name"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(a){var n=t.inputs[e.name],i=a.target,s=!!i.checked;if(Array.isArray(n)){var r=null,o=t._i(n,r);i.checked?o<0&&t.$set(t.inputs,e.name,n.concat([r])):o>-1&&t.$set(t.inputs,e.name,n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.inputs,e.name,s)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(a){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(a){a.target.composing||t.$set(t.inputs,e.name,a.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?a("div",{staticClass:"bool-input-container"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(a){return t.$set(t.inputs,e.name,!0)}}}),a("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.true")))])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(a){return t.$set(t.inputs,e.name,!1)}}}),a("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.false")))])])]):t._e(),a("i",{class:[t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])}))],2):t._e(),null!==t.abiConstructor&&t.abiConstructor.payable?a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("contract.value-in-eth"))+":")])])]),a("div",{staticClass:"the-form contract-name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"value",attrs:{placeholder:t.$t("contract.value-in-eth"),step:"any"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]):t._e(),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("contract.name")))])])]),a("div",{staticClass:"the-form contract-name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractName,expression:"contractName"}],ref:"contractName",attrs:{placeholder:t.$t("contract.name-for-contract")},domProps:{value:t.contractName},on:{input:function(e){e.target.composing||(t.contractName=e.target.value)}}})])]),a("div",{staticClass:"submit-button-container"},[a("div",{staticClass:"buttons"},[a("div",{class:[t.allValid?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:t.confirmationModalOpen}},[t._v(" "+t._s(t.$t("contract.sign-tx"))+" ")])]),a("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.clear()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])])],1)},i=[],s=(a("a4d3"),a("4de4"),a("c740"),a("caad"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("25f0"),a("2532"),a("5319"),a("1276"),a("159b"),a("bf19"),a("96cf"),a("fc11")),r=a("55c1"),o=a("ce96"),c=a("70c1"),u=a.n(c),l=a("8d23"),d=a("901e"),p=a.n(d),m=a("8ded"),v=a.n(m),b=a("b671"),h=a("2f62");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"DeployContract",components:{"interface-container-title":r["a"]},data:function(){return{bytecode:"",abi:"",inputs:{},contractName:"",gasLimit:21e3,data:"",value:0}},computed:y({},Object(h["b"])(["gasPrice","web3","network"]),{isValidAbi:function(){return o["d"].isJson(this.abi)&&Array.isArray(JSON.parse(this.abi))},txValue:function(){return o["d"].sanitizeHex(u.a.toWei(this.value,"ether").toString(16))},abiConstructor:function(){var t=this,e=null;return this.isValidAbi&&JSON.parse(this.abi).forEach((function(t){"constructor"===t.type&&(e=t)})),e&&e.hasOwnProperty("inputs")&&e.inputs.forEach((function(e){"bool"===e.type&&(t.inputs[e.name]=!1)})),e},rawByteCode:function(){try{var t=JSON.parse(this.bytecode);if(t.object&&o["d"].validateHexString(t.object))return"0x"+t.object}catch(e){return this.bytecode}return null},isValidByte:function(){return this.rawByteCode&&"0x"===this.rawByteCode.substr(0,2)&&o["d"].validateHexString(this.rawByteCode)},txByteCode:function(){return o["d"].sanitizeHex(this.rawByteCode)},deployArgs:function(){var t=this,e=[];return this.abiConstructor&&this.abiConstructor.inputs.forEach((function(a){if(a.type.includes("[")&&a.type.includes("]")){var n=t.inputs.hasOwnProperty(a.name)?t.inputs[a.name].replace(/\s/g,""):"",i=n.split(",");e.push(i)}else e.push(t.inputs[a.name])})),e},txData:function(){return""!==this.abi?new this.web3.eth.Contract(JSON.parse(this.abi)).deploy({data:this.txByteCode,arguments:this.deployArgs}).encodeABI():"0x"},allValid:function(){var t=this,e=!0;return this.abiConstructor&&this.abiConstructor.inputs.forEach((function(a,n){t.isValidInput(t.deployArgs[n],t.getType(a.type).solidityType)||(e=!1)})),e&&this.isValidAbi&&this.isValidByte}}),methods:{clear:function(){this.bytecode="",this.abi="",this.contractName=""},isValidInput:o["d"].isContractArgValid,getType:o["d"].solidityType,sendTransaction:function(){var t,e,a,n,i,s;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(this.estimateGas());case 3:return t=this.web3,r.next=6,regeneratorRuntime.awrap(t.eth.getCoinbase());case 6:return e=r.sent,r.next=9,regeneratorRuntime.awrap(t.eth.getTransactionCount(e));case 9:a=r.sent,n=new l["Transaction"]({nonce:a,value:this.txValue,gasPrice:o["d"].sanitizeHex(u.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:o["d"].sanitizeHex(new p.a(this.gasLimit).toString(16)),data:this.txData}),i=n.toJSON(!0),delete i.to,i.from=e,this.web3.eth.sendTransaction(i).catch((function(t){o["e"].responseHandler(t,o["e"].WARN)})),s=Object(b["bufferToHex"])(Object(b["generateAddress"])(e,a)),this.pushContractToStore(s),this.clear(),r.next=23;break;case 20:r.prev=20,r.t0=r["catch"](0),o["e"].responseHandler(r.t0,!1);case 23:case"end":return r.stop()}}),null,this,[[0,20]])},pushContractToStore:function(t){var e=this,a=v.a.get("customContracts")||[],n=a.findIndex((function(t){return t.name.toLowerCase()===e.contractName.toLowerCase()}));if(-1===n){var i={abi:JSON.parse(this.abi),address:t,comment:"",name:this.contractName};a.push(i)}else a[n]={abi:JSON.parse(this.abi),address:t,comment:"",name:this.contractName};v.a.set("customContracts",a)},confirmationModalOpen:function(){this.sendTransaction(),window.scrollTo(0,0)},estimateGas:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.web3.eth.getCoinbase());case 2:return t=a.sent,e={from:t,data:this.txData,value:this.txValue},a.next=6,regeneratorRuntime.awrap(this.web3.eth.estimateGas(e).catch((function(t){o["e"].responseHandler(t,o["e"].WARN)})));case 6:this.gasLimit=a.sent;case 7:case"end":return a.stop()}}),null,this)},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this[t]=""}}},C=g,w=(a("8ec6e"),a("2877")),x=Object(w["a"])(C,n,i,!1,null,"dffc6530",null),_=x.exports;a.d(e,"default",(function(){return _}))},"8ec6e":function(t,e,a){"use strict";var n=a("92e0"),i=a.n(n);i.a},"92e0":function(t,e,a){}}]);
//# sourceMappingURL=chunk-26dae546.18b9d486.js.map