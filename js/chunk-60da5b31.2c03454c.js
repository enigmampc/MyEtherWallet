(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60da5b31"],{"102f":function(e,t,n){},1383:function(e,t,n){"use strict";var r=n("9a24"),s=n.n(r);function i(e,t,n){async function r(){const e={};return e[t]=t,e}async function i(t){return e.eth.sign(t)}async function a(){}return new s.a({processTransaction:(t,r)=>{return e.eth.sendTransaction(t).on("hash",e=>r(null,e)).then(e=>{n(e)}).catch(e=>r(e,null))},getAccounts:e=>{return r().then(t=>e(null,Object.values(t))).catch(t=>e(t,null))},signPersonalMessage:(e,t)=>{return i(e).then(e=>t(null,e)).catch(e=>t(e,null))},signTransaction:(e,t)=>{a(e).then(e=>t(null,e)).catch(e=>t(e,null))}})}t["a"]=function(e,t,n,r){const s=i(e,t,n,r);return e=>{e.service("accounts",!0).addAccountType("mew",async()=>{return t=await new Promise((e,n)=>s.getAccounts(r=>r?n(r):e(t))),{subprovider:s,address:t}})}}},1768:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"expanding-option",class:e.hidebottomborder?"hide-bottom-border":""},[n("div",{staticClass:"title-bar-container"},[n("div",{staticClass:"input-title"},[e._v(e._s(e.title))]),e.popover?n("popover",{attrs:{popcontent:e.popover}}):e._e(),""===e.buttonText||e.showEnable?e._e():n("div",{staticClass:"button-text"},[e._v(" "+e._s(e.buttonText)+" ")]),e.showEnable&&!e.expanded?n("div",{staticClass:"button-text"},[e._v(" "+e._s(e.buttonText)+" ")]):e._e(),e.showEnable&&e.expanded?n("div",{staticClass:"button-text"},[e._v(" "+e._s(e.$t("common.yes"))+" ")]):e._e(),n("div",{staticClass:"switch sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:e.optionExpanded}}),n("span",{staticClass:"slider round"})])])],1),n("div",{staticClass:"contnet-container",class:e.expanded?"expanded":""},[n("div",{staticClass:"content-block"},[e._t("default")],2)])])},s=[],i={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},a=i,o=(n("a158"),n("2877")),c=Object(o["a"])(a,r,s,!1,null,"0fe729f8",null),u=c.exports;n.d(t,"a",(function(){return u}))},"208f":function(e,t,n){"use strict";var r=n("8707").Buffer,s=n("d485").Transform,i=n("3fb5");e.exports=function(e){function t(t,n,r,i){s.call(this,i),this._rate=t,this._capacity=n,this._delimitedSuffix=r,this._options=i,this._state=new e,this._state.initialize(t,n),this._finalized=!1}return i(t,s),t.prototype._transform=function(e,t,n){var r=null;try{this.update(e,t)}catch(s){r=s}n(r)},t.prototype._flush=function(){},t.prototype._read=function(e){this.push(this.squeeze(e))},t.prototype.update=function(e,t){if(!r.isBuffer(e)&&"string"!==typeof e)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return r.isBuffer(e)||(e=r.from(e,t)),this._state.absorb(e),this},t.prototype.squeeze=function(e,t){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));var n=this._state.squeeze(e);return void 0!==t&&(n=n.toString(t)),n},t.prototype._resetState=function(){return this._state.initialize(this._rate,this._capacity),this},t.prototype._clone=function(){var e=new t(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(e._state),e._finalized=this._finalized,e},t}},"591e":function(e,t,n){"use strict";var r=n("8156");function s(){}e.exports=s,s.prototype.setEngine=function(e){var t=this;t.engine||(t.engine=e,e.on("block",(function(e){t.currentBlock=e})),e.on("start",(function(){t.start()})),e.on("stop",(function(){t.stop()})))},s.prototype.handleRequest=function(e,t,n){throw new Error("Subproviders should override `handleRequest`.")},s.prototype.emitPayload=function(e,t){var n=this;n.engine.sendAsync(r(e),t)},s.prototype.stop=function(){},s.prototype.start=function(){}},"780d":function(e,t,n){"use strict";var r=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];t.p1600=function(e){for(var t=0;t<24;++t){var n=e[0]^e[10]^e[20]^e[30]^e[40],s=e[1]^e[11]^e[21]^e[31]^e[41],i=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],o=e[4]^e[14]^e[24]^e[34]^e[44],c=e[5]^e[15]^e[25]^e[35]^e[45],u=e[6]^e[16]^e[26]^e[36]^e[46],f=e[7]^e[17]^e[27]^e[37]^e[47],d=e[8]^e[18]^e[28]^e[38]^e[48],l=e[9]^e[19]^e[29]^e[39]^e[49],p=d^(i<<1|a>>>31),h=l^(a<<1|i>>>31),g=e[0]^p,v=e[1]^h,y=e[10]^p,m=e[11]^h,_=e[20]^p,b=e[21]^h,w=e[30]^p,x=e[31]^h,S=e[40]^p,T=e[41]^h;p=n^(o<<1|c>>>31),h=s^(c<<1|o>>>31);var A=e[2]^p,P=e[3]^h,k=e[12]^p,C=e[13]^h,E=e[22]^p,L=e[23]^h,M=e[32]^p,R=e[33]^h,z=e[42]^p,B=e[43]^h;p=i^(u<<1|f>>>31),h=a^(f<<1|u>>>31);var K=e[4]^p,q=e[5]^h,U=e[14]^p,H=e[15]^h,N=e[24]^p,O=e[25]^h,G=e[34]^p,V=e[35]^h,I=e[44]^p,j=e[45]^h;p=o^(d<<1|l>>>31),h=c^(l<<1|d>>>31);var Z=e[6]^p,Y=e[7]^h,D=e[16]^p,F=e[17]^h,J=e[26]^p,$=e[27]^h,W=e[36]^p,X=e[37]^h,Q=e[46]^p,ee=e[47]^h;p=u^(n<<1|s>>>31),h=f^(s<<1|n>>>31);var te=e[8]^p,ne=e[9]^h,re=e[18]^p,se=e[19]^h,ie=e[28]^p,ae=e[29]^h,oe=e[38]^p,ce=e[39]^h,ue=e[48]^p,fe=e[49]^h,de=g,le=v,pe=m<<4|y>>>28,he=y<<4|m>>>28,ge=_<<3|b>>>29,ve=b<<3|_>>>29,ye=x<<9|w>>>23,me=w<<9|x>>>23,_e=S<<18|T>>>14,be=T<<18|S>>>14,we=A<<1|P>>>31,xe=P<<1|A>>>31,Se=C<<12|k>>>20,Te=k<<12|C>>>20,Ae=E<<10|L>>>22,Pe=L<<10|E>>>22,ke=R<<13|M>>>19,Ce=M<<13|R>>>19,Ee=z<<2|B>>>30,Le=B<<2|z>>>30,Me=q<<30|K>>>2,Re=K<<30|q>>>2,ze=U<<6|H>>>26,Be=H<<6|U>>>26,Ke=O<<11|N>>>21,qe=N<<11|O>>>21,Ue=G<<15|V>>>17,He=V<<15|G>>>17,Ne=j<<29|I>>>3,Oe=I<<29|j>>>3,Ge=Z<<28|Y>>>4,Ve=Y<<28|Z>>>4,Ie=F<<23|D>>>9,je=D<<23|F>>>9,Ze=J<<25|$>>>7,Ye=$<<25|J>>>7,De=W<<21|X>>>11,Fe=X<<21|W>>>11,Je=ee<<24|Q>>>8,$e=Q<<24|ee>>>8,We=te<<27|ne>>>5,Xe=ne<<27|te>>>5,Qe=re<<20|se>>>12,et=se<<20|re>>>12,tt=ae<<7|ie>>>25,nt=ie<<7|ae>>>25,rt=oe<<8|ce>>>24,st=ce<<8|oe>>>24,it=ue<<14|fe>>>18,at=fe<<14|ue>>>18;e[0]=de^~Se&Ke,e[1]=le^~Te&qe,e[10]=Ge^~Qe&ge,e[11]=Ve^~et&ve,e[20]=we^~ze&Ze,e[21]=xe^~Be&Ye,e[30]=We^~pe&Ae,e[31]=Xe^~he&Pe,e[40]=Me^~Ie&tt,e[41]=Re^~je&nt,e[2]=Se^~Ke&De,e[3]=Te^~qe&Fe,e[12]=Qe^~ge&ke,e[13]=et^~ve&Ce,e[22]=ze^~Ze&rt,e[23]=Be^~Ye&st,e[32]=pe^~Ae&Ue,e[33]=he^~Pe&He,e[42]=Ie^~tt&ye,e[43]=je^~nt&me,e[4]=Ke^~De&it,e[5]=qe^~Fe&at,e[14]=ge^~ke&Ne,e[15]=ve^~Ce&Oe,e[24]=Ze^~rt&_e,e[25]=Ye^~st&be,e[34]=Ae^~Ue&Je,e[35]=Pe^~He&$e,e[44]=tt^~ye&Ee,e[45]=nt^~me&Le,e[6]=De^~it&de,e[7]=Fe^~at&le,e[16]=ke^~Ne&Ge,e[17]=Ce^~Oe&Ve,e[26]=rt^~_e&we,e[27]=st^~be&xe,e[36]=Ue^~Je&We,e[37]=He^~$e&Xe,e[46]=ye^~Ee&Me,e[47]=me^~Le&Re,e[8]=it^~de&Se,e[9]=at^~le&Te,e[18]=Ne^~Ge&Qe,e[19]=Oe^~Ve&et,e[28]=_e^~we&ze,e[29]=be^~xe&Be,e[38]=Je^~We&pe,e[39]=$e^~Xe&he,e[48]=Ee^~Me&Ie,e[49]=Le^~Re&je,e[0]^=r[2*t],e[1]^=r[2*t+1]}}},7969:function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n("8f15"),i=n("2330"),a=n("f654"),o=n("a3ca"),c=n("399f"),u=n("98e6"),f=n("8707").Buffer;Object.assign(t,n("9a12")),t.MAX_INTEGER=new c("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),t.TWO_POW256=new c("10000000000000000000000000000000000000000000000000000000000000000",16),t.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",t.SHA3_NULL_S=t.KECCAK256_NULL_S,t.KECCAK256_NULL=f.from(t.KECCAK256_NULL_S,"hex"),t.SHA3_NULL=t.KECCAK256_NULL,t.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",t.SHA3_RLP_ARRAY_S=t.KECCAK256_RLP_ARRAY_S,t.KECCAK256_RLP_ARRAY=f.from(t.KECCAK256_RLP_ARRAY_S,"hex"),t.SHA3_RLP_ARRAY=t.KECCAK256_RLP_ARRAY,t.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",t.SHA3_RLP_S=t.KECCAK256_RLP_S,t.KECCAK256_RLP=f.from(t.KECCAK256_RLP_S,"hex"),t.SHA3_RLP=t.KECCAK256_RLP,t.BN=c,t.rlp=o,t.secp256k1=i,t.zeros=function(e){return f.allocUnsafe(e).fill(0)},t.zeroAddress=function(){var e=20,n=t.zeros(e);return t.bufferToHex(n)},t.setLengthLeft=t.setLength=function(e,n,r){var s=t.zeros(n);return e=t.toBuffer(e),r?e.length<n?(e.copy(s),s):e.slice(0,n):e.length<n?(e.copy(s,n-e.length),s):e.slice(-n)},t.setLengthRight=function(e,n){return t.setLength(e,n,!0)},t.unpad=t.stripZeros=function(e){e=t.stripHexPrefix(e);var n=e[0];while(e.length>0&&"0"===n.toString())e=e.slice(1),n=e[0];return e},t.toBuffer=function(e){if(!f.isBuffer(e))if(Array.isArray(e))e=f.from(e);else if("string"===typeof e)e=t.isHexString(e)?f.from(t.padToEven(t.stripHexPrefix(e)),"hex"):f.from(e);else if("number"===typeof e)e=t.intToBuffer(e);else if(null===e||void 0===e)e=f.allocUnsafe(0);else if(c.isBN(e))e=e.toArrayLike(f);else{if(!e.toArray)throw new Error("invalid type");e=f.from(e.toArray())}return e},t.bufferToInt=function(e){return new c(t.toBuffer(e)).toNumber()},t.bufferToHex=function(e){return e=t.toBuffer(e),"0x"+e.toString("hex")},t.fromSigned=function(e){return new c(e).fromTwos(256)},t.toUnsigned=function(e){return f.from(e.toTwos(256).toArray())},t.keccak=function(e,n){return e=t.toBuffer(e),n||(n=256),s("keccak"+n).update(e).digest()},t.keccak256=function(e){return t.keccak(e)},t.sha3=t.keccak,t.sha256=function(e){return e=t.toBuffer(e),u("sha256").update(e).digest()},t.ripemd160=function(e,n){e=t.toBuffer(e);var r=u("rmd160").update(e).digest();return!0===n?t.setLength(r,32):r},t.rlphash=function(e){return t.keccak(o.encode(e))},t.isValidPrivate=function(e){return i.privateKeyVerify(e)},t.isValidPublic=function(e,t){return 64===e.length?i.publicKeyVerify(f.concat([f.from([4]),e])):!!t&&i.publicKeyVerify(e)},t.pubToAddress=t.publicToAddress=function(e,n){return e=t.toBuffer(e),n&&64!==e.length&&(e=i.publicKeyConvert(e,!1).slice(1)),a(64===e.length),t.keccak(e).slice(-20)};var d=t.privateToPublic=function(e){return e=t.toBuffer(e),i.publicKeyCreate(e,!1).slice(1)};t.importPublic=function(e){return e=t.toBuffer(e),64!==e.length&&(e=i.publicKeyConvert(e,!1).slice(1)),e},t.ecsign=function(e,t){var n=i.sign(e,t),r={};return r.r=n.signature.slice(0,32),r.s=n.signature.slice(32,64),r.v=n.recovery+27,r},t.hashPersonalMessage=function(e){var n=t.toBuffer("Ethereum Signed Message:\n"+e.length.toString());return t.keccak(f.concat([n,e]))},t.ecrecover=function(e,n,r,s){var a=f.concat([t.setLength(r,32),t.setLength(s,32)],64),o=n-27;if(0!==o&&1!==o)throw new Error("Invalid signature v value");var c=i.recover(e,a,o);return i.publicKeyConvert(c,!1).slice(1)},t.toRpcSig=function(e,n,r){if(27!==e&&28!==e)throw new Error("Invalid recovery id");return t.bufferToHex(f.concat([t.setLengthLeft(n,32),t.setLengthLeft(r,32),t.toBuffer(e-27)]))},t.fromRpcSig=function(e){if(e=t.toBuffer(e),65!==e.length)throw new Error("Invalid signature length");var n=e[64];return n<27&&(n+=27),{v:n,r:e.slice(0,32),s:e.slice(32,64)}},t.privateToAddress=function(e){return t.publicToAddress(d(e))},t.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},t.isZeroAddress=function(e){var n=t.zeroAddress();return n===t.addHexPrefix(e)},t.toChecksumAddress=function(e){e=t.stripHexPrefix(e).toLowerCase();for(var n=t.keccak(e).toString("hex"),r="0x",s=0;s<e.length;s++)parseInt(n[s],16)>=8?r+=e[s].toUpperCase():r+=e[s];return r},t.isValidChecksumAddress=function(e){return t.isValidAddress(e)&&t.toChecksumAddress(e)===e},t.generateAddress=function(e,n){return e=t.toBuffer(e),n=new c(n),n=n.isZero()?null:f.from(n.toArray()),t.rlphash([e,n]).slice(-20)},t.isPrecompiled=function(e){var n=t.unpad(e);return 1===n.length&&n[0]>=1&&n[0]<=8},t.addHexPrefix=function(e){return"string"!==typeof e?e:t.isHexPrefixed(e)?e:"0x"+e},t.isValidSignature=function(e,t,n,r){var s=new c("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),i=new c("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);return 32===t.length&&32===n.length&&((27===e||28===e)&&(t=new c(t),n=new c(n),!(t.isZero()||t.gt(i)||n.isZero()||n.gt(i))&&(!1!==r||1!==new c(n).cmp(s))))},t.baToJSON=function(e){if(f.isBuffer(e))return"0x"+e.toString("hex");if(e instanceof Array){for(var n=[],r=0;r<e.length;r++)n.push(t.baToJSON(e[r]));return n}},t.defineProperties=function(e,n,s){if(e.raw=[],e._fields=[],e.toJSON=function(n){if(n){var r={};return e._fields.forEach((function(t){r[t]="0x"+e[t].toString("hex")})),r}return t.baToJSON(this.raw)},e.serialize=function(){return o.encode(e.raw)},n.forEach((function(n,r){function s(){return e.raw[r]}function i(s){s=t.toBuffer(s),"00"!==s.toString("hex")||n.allowZero||(s=f.allocUnsafe(0)),n.allowLess&&n.length?(s=t.stripZeros(s),a(n.length>=s.length,"The field "+n.name+" must not have more "+n.length+" bytes")):n.allowZero&&0===s.length||!n.length||a(n.length===s.length,"The field "+n.name+" must have byte length of "+n.length),e.raw[r]=s}e._fields.push(n.name),Object.defineProperty(e,n.name,{enumerable:!0,configurable:!0,get:s,set:i}),n.default&&(e[n.name]=n.default),n.alias&&Object.defineProperty(e,n.alias,{enumerable:!1,configurable:!0,set:i,get:s})})),s)if("string"===typeof s&&(s=f.from(t.stripHexPrefix(s),"hex")),f.isBuffer(s)&&(s=o.decode(s)),Array.isArray(s)){if(s.length>e._fields.length)throw new Error("wrong number of fields in data");s.forEach((function(n,r){e[e._fields[r]]=t.toBuffer(n)}))}else{if("object"!==("undefined"===typeof s?"undefined":r(s)))throw new Error("invalid data");var i=Object.keys(s);n.forEach((function(t){-1!==i.indexOf(t.name)&&(e[t.name]=s[t.name]),-1!==i.indexOf(t.alias)&&(e[t.alias]=s[t.alias])}))}}},"7ea8":function(e,t,n){"use strict";var r=n("8156");function s(e,t,n){e.sendAsync(r({method:"eth_estimateGas",params:[t]}),(function(e,t){if(e)return"no contract code at given address"===e.message?n(null,"0xcf08"):n(e);n(null,t.result)}))}e.exports=s},8156:function(e,t,n){"use strict";var r=n("ca46"),s=n("53a8");function i(e){return s({id:r(),jsonrpc:"2.0",params:[]},e)}e.exports=i},"8f15":function(e,t,n){"use strict";e.exports=n("eb29")(n("a009"))},"8f23":function(e,t,n){"use strict";var r=n("8707").Buffer,s=n("d485").Transform,i=n("3fb5");e.exports=function(e){function t(t,n,r,i,a){s.call(this,a),this._rate=t,this._capacity=n,this._delimitedSuffix=r,this._hashBitLength=i,this._options=a,this._state=new e,this._state.initialize(t,n),this._finalized=!1}return i(t,s),t.prototype._transform=function(e,t,n){var r=null;try{this.update(e,t)}catch(s){r=s}n(r)},t.prototype._flush=function(e){var t=null;try{this.push(this.digest())}catch(n){t=n}e(t)},t.prototype.update=function(e,t){if(!r.isBuffer(e)&&"string"!==typeof e)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return r.isBuffer(e)||(e=r.from(e,t)),this._state.absorb(e),this},t.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);var t=this._state.squeeze(this._hashBitLength/8);return void 0!==e&&(t=t.toString(e)),this._resetState(),t},t.prototype._resetState=function(){return this._state.initialize(this._rate,this._capacity),this},t.prototype._clone=function(){var e=new t(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(e._state),e._finalized=this._finalized,e},t}},"9a24":function(e,t,n){"use strict";var r=n("9758"),s=n("2969"),i=n("3022").inherits,a=n("7969"),o=n("1ed9"),c=n("53a8"),u=n("a1d9"),f=n("591e"),d=n("7ea8"),l=/^[0-9A-Fa-f]+$/g;function p(e){var t=this;t.nonceLock=u(1),e.getAccounts&&(t.getAccounts=e.getAccounts),e.processTransaction&&(t.processTransaction=e.processTransaction),e.processSignTransaction&&(t.processSignTransaction=e.processSignTransaction),e.processMessage&&(t.processMessage=e.processMessage),e.processPersonalMessage&&(t.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(t.processTypedMessage=e.processTypedMessage),t.approveTransaction=e.approveTransaction||t.autoApprove,t.approveMessage=e.approveMessage||t.autoApprove,t.approvePersonalMessage=e.approvePersonalMessage||t.autoApprove,t.approveTypedMessage=e.approveTypedMessage||t.autoApprove,t.signTransaction=e.signTransaction||_("signTransaction"),t.signMessage=e.signMessage||_("signMessage"),t.signPersonalMessage=e.signPersonalMessage||_("signPersonalMessage"),t.signTypedMessage=e.signTypedMessage||_("signTypedMessage"),e.recoverPersonalSignature&&(t.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(t.publishTransaction=e.publishTransaction),t.estimateGas=e.estimateGas||t.estimateGas,t.getGasPrice=e.getGasPrice||t.getGasPrice}function h(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}function g(e){return e.toLowerCase()}function v(e){var t=a.addHexPrefix(e),n=a.isValidAddress(t);return n}function y(e){var t=a.addHexPrefix(e),n=a.isValidAddress(t);return!n&&m(e)}function m(e){var t="string"===typeof e;if(!t)return!1;var n="0x"===e.slice(0,2);if(!n)return!1;var r=e.slice(2),s=r.match(l);return s}function _(e){return function(t,n){n(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=p,i(p,f),p.prototype.handleRequest=function(e,t,n){var s,i,a,o,u,f=this;switch(f._parityRequests={},f._parityRequestCount=0,e.method){case"eth_coinbase":return void f.getAccounts((function(e,t){if(e)return n(e);var r=t[0]||null;n(null,r)}));case"eth_accounts":return void f.getAccounts((function(e,t){if(e)return n(e);n(null,t)}));case"eth_sendTransaction":return s=e.params[0],void r([function(e){return f.validateTransaction(s,e)},function(e){return f.processTransaction(s,e)}],n);case"eth_signTransaction":return s=e.params[0],void r([function(e){return f.validateTransaction(s,e)},function(e){return f.processSignTransaction(s,e)}],n);case"eth_sign":return u=e.params[0],o=e.params[1],a=e.params[2]||{},i=c(a,{from:u,data:o}),void r([function(e){return f.validateMessage(i,e)},function(e){return f.processMessage(i,e)}],n);case"personal_sign":return function(){var t=e.params[0],s=e.params[1];if(y(s)&&v(t)){var d="The eth_personalSign method requires params ordered ";d+="[message, address]. This was previously handled incorrectly, ",d+="and has been corrected automatically. ",d+="Please switch this param order for smooth behavior in the future.",console.warn(d),u=e.params[0],o=e.params[1]}else o=e.params[0],u=e.params[1];a=e.params[2]||{},i=c(a,{from:u,data:o}),r([function(e){return f.validatePersonalMessage(i,e)},function(e){return f.processPersonalMessage(i,e)}],n)}();case"personal_ecRecover":return function(){o=e.params[0];var t=e.params[1];a=e.params[2]||{},i=c(a,{sig:t,data:o}),f.recoverPersonalSignature(i,n)}();case"eth_signTypedData":return o=e.params[0],u=e.params[1],a=e.params[2]||{},i=c(a,{from:u,data:o}),void r([function(e){return f.validateTypedMessage(i,e)},function(e){return f.processTypedMessage(i,e)}],n);case"parity_postTransaction":return s=e.params[0],void f.parityPostTransaction(s,n);case"parity_postSign":return u=e.params[0],o=e.params[1],void f.parityPostSign(u,o,n);case"parity_checkRequest":return function(){var t=e.params[0];f.parityCheckRequest(t,n)}();case"parity_defaultAccount":return void f.getAccounts((function(e,t){if(e)return n(e);var r=t[0]||null;n(null,r)}));default:return void t()}},p.prototype.getAccounts=function(e){e(null,[])},p.prototype.processTransaction=function(e,t){var n=this;r([function(t){return n.approveTransaction(e,t)},function(e,t){return n.checkApproval("transaction",e,t)},function(t){return n.finalizeAndSubmitTx(e,t)}],t)},p.prototype.processSignTransaction=function(e,t){var n=this;r([function(t){return n.approveTransaction(e,t)},function(e,t){return n.checkApproval("transaction",e,t)},function(t){return n.finalizeTx(e,t)}],t)},p.prototype.processMessage=function(e,t){var n=this;r([function(t){return n.approveMessage(e,t)},function(e,t){return n.checkApproval("message",e,t)},function(t){return n.signMessage(e,t)}],t)},p.prototype.processPersonalMessage=function(e,t){var n=this;r([function(t){return n.approvePersonalMessage(e,t)},function(e,t){return n.checkApproval("message",e,t)},function(t){return n.signPersonalMessage(e,t)}],t)},p.prototype.processTypedMessage=function(e,t){var n=this;r([function(t){return n.approveTypedMessage(e,t)},function(e,t){return n.checkApproval("message",e,t)},function(t){return n.signTypedMessage(e,t)}],t)},p.prototype.autoApprove=function(e,t){t(null,!0)},p.prototype.checkApproval=function(e,t,n){n(t?null:new Error("User denied "+e+" signature."))},p.prototype.parityPostTransaction=function(e,t){var n=this,r=n._parityRequestCount,s="0x".concat(r.toString(16));n._parityRequestCount++,n.emitPayload({method:"eth_sendTransaction",params:[e]},(function(e,t){if(e)n._parityRequests[s]={error:e};else{var r=t.result;n._parityRequests[s]=r}})),t(null,s)},p.prototype.parityPostSign=function(e,t,n){var r=this,s=r._parityRequestCount,i="0x".concat(s.toString(16));r._parityRequestCount++,r.emitPayload({method:"eth_sign",params:[e,t]},(function(e,t){if(e)r._parityRequests[i]={error:e};else{var n=t.result;r._parityRequests[i]=n}})),n(null,i)},p.prototype.parityCheckRequest=function(e,t){var n=this,r=n._parityRequests[e]||null;return r?r.error?t(r.error):void t(null,r):t(null,null)},p.prototype.recoverPersonalSignature=function(e,t){var n;try{n=o.recoverPersonalSignature(e)}catch(r){return t(r)}t(null,n)},p.prototype.validateTransaction=function(e,t){var n=this;if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));n.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error('Unknown address - unable to sign transaction for this address: "'.concat(e.from,'"')))}))},p.prototype.validateMessage=function(e,t){var n=this;if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));n.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))}))},p.prototype.validatePersonalMessage=function(e,t){var n=this;return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):m(e.data)?void n.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))})):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},p.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))}))},p.prototype.validateSender=function(e,t){var n=this;if(!e)return t(null,!1);n.getAccounts((function(n,r){if(n)return t(n);var s=-1!==r.map(g).indexOf(e.toLowerCase());t(null,s)}))},p.prototype.finalizeAndSubmitTx=function(e,t){var n=this;n.nonceLock.take((function(){r([n.fillInTxExtras.bind(n,e),n.signTransaction.bind(n),n.publishTransaction.bind(n)],(function(e,r){if(n.nonceLock.leave(),e)return t(e);t(null,r)}))}))},p.prototype.finalizeTx=function(e,t){var n=this;n.nonceLock.take((function(){r([n.fillInTxExtras.bind(n,e),n.signTransaction.bind(n)],(function(r,s){if(n.nonceLock.leave(),r)return t(r);t(null,{raw:s,tx:e})}))}))},p.prototype.publishTransaction=function(e,t){var n=this;n.emitPayload({method:"eth_sendRawTransaction",params:[e]},(function(e,n){if(e)return t(e);t(null,n.result)}))},p.prototype.estimateGas=function(e,t){var n=this;d(n.engine,e,t)},p.prototype.getGasPrice=function(e){var t=this;t.emitPayload({method:"eth_gasPrice",params:[]},(function(t,n){if(t)return e(t);e(null,n.result)}))},p.prototype.fillInTxExtras=function(e,t){var n=this,r=e.from,i={};void 0===e.gasPrice&&(i.gasPrice=n.getGasPrice.bind(n)),void 0===e.nonce&&(i.nonce=n.emitPayload.bind(n,{method:"eth_getTransactionCount",params:[r,"pending"]})),void 0===e.gas&&(i.gas=n.estimateGas.bind(n,h(e))),s(i,(function(n,r){if(n)return t(n);var s={};r.gasPrice&&(s.gasPrice=r.gasPrice),r.nonce&&(s.nonce=r.nonce.result),r.gas&&(s.gas=r.gas),t(null,c(e,s))}))}},a009:function(e,t,n){"use strict";var r=n("8707").Buffer,s=n("780d");function i(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}i.prototype.initialize=function(e,t){for(var n=0;n<50;++n)this.state[n]=0;this.blockSize=e/8,this.count=0,this.squeezing=!1},i.prototype.absorb=function(e){for(var t=0;t<e.length;++t)this.state[~~(this.count/4)]^=e[t]<<this.count%4*8,this.count+=1,this.count===this.blockSize&&(s.p1600(this.state),this.count=0)},i.prototype.absorbLastFewBits=function(e){this.state[~~(this.count/4)]^=e<<this.count%4*8,0!==(128&e)&&this.count===this.blockSize-1&&s.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<(this.blockSize-1)%4*8,s.p1600(this.state),this.count=0,this.squeezing=!0},i.prototype.squeeze=function(e){this.squeezing||this.absorbLastFewBits(1);for(var t=r.alloc(e),n=0;n<e;++n)t[n]=this.state[~~(this.count/4)]>>>this.count%4*8&255,this.count+=1,this.count===this.blockSize&&(s.p1600(this.state),this.count=0);return t},i.prototype.copy=function(e){for(var t=0;t<50;++t)e.state[t]=this.state[t];e.blockSize=this.blockSize,e.count=this.count,e.squeezing=this.squeezing},e.exports=i},a158:function(e,t,n){"use strict";var r=n("102f"),s=n.n(r);s.a},ca46:function(e,t,n){"use strict";var r=3;function s(){var e=(new Date).getTime()*Math.pow(10,r),t=Math.floor(Math.random()*Math.pow(10,r));return e+t}e.exports=s},eb29:function(e,t,n){"use strict";var r=n("8f23"),s=n("208f");e.exports=function(e){var t=r(e),n=s(e);return function(e,r){var s="string"===typeof e?e.toLowerCase():e;switch(s){case"keccak224":return new t(1152,448,null,224,r);case"keccak256":return new t(1088,512,null,256,r);case"keccak384":return new t(832,768,null,384,r);case"keccak512":return new t(576,1024,null,512,r);case"sha3-224":return new t(1152,448,6,224,r);case"sha3-256":return new t(1088,512,6,256,r);case"sha3-384":return new t(832,768,6,384,r);case"sha3-512":return new t(576,1024,6,512,r);case"shake128":return new n(1344,256,31,r);case"shake256":return new n(1088,512,31,r);default:throw new Error("Invald algorithm: "+e)}}}}}]);
//# sourceMappingURL=chunk-60da5b31.2c03454c.js.map