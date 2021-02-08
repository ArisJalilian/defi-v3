(this.webpackJsonpdefi_v2=this.webpackJsonpdefi_v2||[]).push([[43],{3994:function(e,t,a){"use strict";a.r(t),a.d(t,"AaveReaderContract",(function(){return A}));var n=a(40),r=a(1),s=a.n(r),c=a(9),o=a(20),u=a(15),i=a(47),d=a(17),p=a(23),l=a(24),m=a(167),h=a(95),y=a(38),b=a(94),f=a(71),v=a(280),A=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(e,n,r,s){var c,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.deployedBytecode;return Object(u.a)(this,a),(c=t.call(this,"AaveReader",a.ABI(),e,n,r,s,o))._methodABIIndex={},y.classUtils.bindAll(Object(i.a)(c),["_abiEncoderByFunctionSignature","address","_web3Wrapper"]),a.ABI().forEach((function(e,t){if("function"===e.type){var a=e;c._methodABIIndex[a.name]=t}})),c}return Object(d.a)(a,[{key:"getFunctionSignature",value:function(e){var t=this._methodABIIndex[e],n=a.ABI()[t];return Object(m.methodAbiToFunctionSignature)(n)}},{key:"getABIDecodedTransactionData",value:function(e,t){var a=this.getFunctionSignature(e);return this._lookupAbiEncoder(a).strictDecode(t)}},{key:"getABIDecodedReturnData",value:function(e,t){var a=this.getFunctionSignature(e);return this._lookupAbiEncoder(a).strictDecodeReturnValue(t)}},{key:"getSelector",value:function(e){var t=this.getFunctionSignature(e);return this._lookupAbiEncoder(t).getSelector()}},{key:"getBatchATokensData",value:function(e,t){var a=this;f.assert.isString("ethAccount",e),f.assert.isArray("reserves",t);var n="getBatchATokensData(address,address[])";return{callAsync:function(){var e=arguments,t=this;return Object(o.a)(s.a.mark((function r(){var o,u,i,d;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:{},u=e.length>1?e[1]:void 0,m.BaseContract._assertCallParams(o,u),r.next=5,a._performCallAsync(Object(c.a)(Object(c.a)({},o),{},{data:t.getABIEncodedTransactionData()}),u);case 5:return i=r.sent,d=a._lookupAbiEncoder(n),r.abrupt("return",d.strictDecodeReturnValue(i));case 8:case"end":return r.stop()}}),r)})))()},getABIEncodedTransactionData:function(){return a._strictEncodeArguments(n,[e.toLowerCase(),t])}}}}],[{key:"deployFrom0xArtifactAsync",value:function(){var e=Object(o.a)(s.a.mark((function e(t,n,r,c,o){var u,i,d,p,l,m,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.assert.doesConformToSchema("txDefaults",r,h.schemas.txDataSchema,[h.schemas.addressSchema,h.schemas.numberSchema,h.schemas.jsNumber]),void 0!==t.compilerOutput){e.next=3;break}throw new Error("Compiler output not found in the artifact file");case 3:if(u=y.providerUtils.standardizeOrThrow(n),i=t.compilerOutput.evm.bytecode.object,d=t.compilerOutput.abi,p={},void 0!==Object.keys(c))for(l=0,m=Object.keys(c);l<m.length;l++)b=m[l],p[b]=c[b].compilerOutput.abi;return e.abrupt("return",a.deployAsync(i,d,u,r,p,o));case 9:case"end":return e.stop()}}),e)})));return function(t,a,n,r,s){return e.apply(this,arguments)}}()},{key:"deployAsync",value:function(){var e=Object(o.a)(s.a.mark((function e(t,r,o,u,i,d){var p,l,A,g,k,B,w,O,D,S,_,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.assert.isHexString("bytecode",t),f.assert.doesConformToSchema("txDefaults",u,h.schemas.txDataSchema,[h.schemas.addressSchema,h.schemas.numberSchema,h.schemas.jsNumber]),p=y.providerUtils.standardizeOrThrow(o),l=m.BaseContract._lookupConstructorAbi(r),A=m.BaseContract._formatABIDataItemList(l.inputs,[d],m.BaseContract._bigNumberToString),g=Object(n.a)(A,1),d=g[0],k=new v.utils.Interface(r),B=k.deployFunction,w=B.encode(t,[d]),O=new b.Web3Wrapper(p),e.next=13,m.BaseContract._applyDefaultsToContractTxDataAsync(Object(c.a)({data:w},u),O.estimateGasAsync.bind(O));case 13:return D=e.sent,e.next=16,O.sendTransactionAsync(D);case 16:return S=e.sent,e.next=19,O.awaitTransactionSuccessAsync(S);case 19:return _=e.sent,(j=new a(_.contractAddress,p,u,i)).constructorArgs=[d],e.abrupt("return",j);case 23:case"end":return e.stop()}}),e)})));return function(t,a,n,r,s,c){return e.apply(this,arguments)}}()},{key:"ABI",value:function(){return[{constant:!0,inputs:[{name:"ethAccount",type:"address"},{name:"reserves",type:"address[]"}],name:"getBatchATokensData",outputs:[{name:"tokenData",type:"tuple[]",components:[{name:"reserveAddress",type:"address"},{name:"allowance",type:"uint256"},{name:"balance",type:"uint256"},{name:"balanceUnderlying",type:"uint256"},{name:"borrowBalance",type:"uint256"}]}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_lendingPoolAddressProvider",type:"address"}],outputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}]}}]),a}(m.BaseContract);A.deployedBytecode=void 0,A.contractName="AaveReader"}}]);
//# sourceMappingURL=43.8f9c352c.chunk.js.map