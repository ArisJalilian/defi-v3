(this.webpackJsonpdefi_v2=this.webpackJsonpdefi_v2||[]).push([[46],{3668:function(e,t,n){var r=n(1),a=n(331),o=n(57),i=n(34),s=n(378);e.exports=function(){function e(t,n,r){function a(i,s){if(!n[i]){if(!t[i]){if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[i]={exports:{}};t[i][0].call(l.exports,(function(e){return a(t[i][1][e]||e)}),l,l.exports,e,t,n,r)}return n[i].exports}for(var o=!1,i=0;i<r.length;i++)a(r[i]);return a}return e}()({1:[function(e,t,n){var r=Object.create||R,a=Object.keys||O,o=Function.prototype.bind||w;function i(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=r(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0;var s,c=10;try{var l={};Object.defineProperty&&Object.defineProperty(l,"x",{value:0}),s=0===l.x}catch(S){s=!1}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function d(e,t,n){if(t)e.call(n);else for(var r=e.length,a=A(e,r),o=0;o<r;++o)a[o].call(n)}function f(e,t,n,r){if(t)e.call(n,r);else for(var a=e.length,o=A(e,a),i=0;i<a;++i)o[i].call(n,r)}function p(e,t,n,r,a){if(t)e.call(n,r,a);else for(var o=e.length,i=A(e,o),s=0;s<o;++s)i[s].call(n,r,a)}function E(e,t,n,r,a,o){if(t)e.call(n,r,a,o);else for(var i=e.length,s=A(e,i),c=0;c<i;++c)s[c].call(n,r,a,o)}function h(e,t,n,r){if(t)e.apply(n,r);else for(var a=e.length,o=A(e,a),i=0;i<a;++i)o[i].apply(n,r)}function m(e,t,n,a){var o,i,s;if("function"!==typeof n)throw new TypeError('"listener" argument must be a function');if((i=e._events)?(i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]):(i=e._events=r(null),e._eventsCount=0),s){if("function"===typeof s?s=i[t]=a?[n,s]:[s,n]:a?s.unshift(n):s.push(n),!s.warned&&(o=u(e))&&o>0&&s.length>o){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,"object"===typeof console&&console.warn&&console.warn("%s: %s",c.name,c.message)}}else s=i[t]=n,++e._eventsCount;return e}function y(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},a=o.call(y,r);return a.listener=n,r.wrapFn=a,a}function g(e,t,n){var r=e._events;if(!r)return[];var a=r[t];return a?"function"===typeof a?n?[a.listener||a]:[a]:n?T(a):A(a,a.length):[]}function N(e){var t=this._events;if(t){var n=t[e];if("function"===typeof n)return 1;if(n)return n.length}return 0}function _(e,t){for(var n=t,r=n+1,a=e.length;r<a;n+=1,r+=1)e[n]=e[r];e.pop()}function A(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function T(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function R(e){var t=function(){};return t.prototype=e,new t}function O(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n}function w(e){var t=this;return function(){return t.apply(e,arguments)}}s?Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!==typeof e||e<0||e!==e)throw new TypeError('"defaultMaxListeners" must be a positive number');c=e}}):i.defaultMaxListeners=c,i.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){var t,n,r,a,o,i,s="error"===e;if(i=this._events)s=s&&null==i.error;else if(!s)return!1;if(s){if(arguments.length>1&&(t=arguments[1]),t instanceof Error)throw t;var c=new Error('Unhandled "error" event. ('+t+")");throw c.context=t,c}if(!(n=i[e]))return!1;var l="function"===typeof n;switch(r=arguments.length){case 1:d(n,l,this);break;case 2:f(n,l,this,arguments[1]);break;case 3:p(n,l,this,arguments[1],arguments[2]);break;case 4:E(n,l,this,arguments[1],arguments[2],arguments[3]);break;default:for(a=new Array(r-1),o=1;o<r;o++)a[o-1]=arguments[o];h(n,l,this,a)}return!0},i.prototype.addListener=function(e,t){return m(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return m(this,e,t,!0)},i.prototype.once=function(e,t){if("function"!==typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,v(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){if("function"!==typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,v(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,a,o,i,s;if("function"!==typeof t)throw new TypeError('"listener" argument must be a function');if(!(a=this._events))return this;if(!(n=a[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=r(null):(delete a[e],a.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():_(n,o),1===n.length&&(a[e]=n[0]),a.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.removeAllListeners=function(e){var t,n,o;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=r(null),this._eventsCount=0):n[e]&&(0===--this._eventsCount?this._events=r(null):delete n[e]),this;if(0===arguments.length){var i,s=a(n);for(o=0;o<s.length;++o)"removeListener"!==(i=s[o])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=r(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},i.prototype.listeners=function(e){return g(this,e,!0)},i.prototype.rawListeners=function(e){return g(this,e,!1)},i.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):N.call(e,t)},i.prototype.listenerCount=N,i.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]}},{}],2:[function(e,t,n){"use strict";var r="%[a-f0-9]{2}",a=new RegExp(r,"gi"),o=new RegExp("("+r+")+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function s(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(a),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(a);return e}}function c(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(l){var r=s(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="\ufffd";for(var a=Object.keys(t),i=0;i<a.length;i++){var c=a[i];e=e.replace(new RegExp(c,"g"),t[c])}return e}t.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return c(e)}}},{}],3:[function(e,t,n){"use strict";var r=e("strict-uri-encode"),a=e("decode-uri-component"),c=e("split-on-first"),l=function(e){return null===e||void 0===e};function u(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(s(n),null===r?[[p(t,e),"[",a,"]"].join("")]:[[p(t,e),"[",p(a,e),"]=",p(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(s(n),null===r?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[p(t,e),"=",p(r,e)].join("")]:[[n,p(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(s(n),null===r?[p(t,e)]:[[p(t,e),"=",p(r,e)].join("")])}}}}function d(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var a="string"===typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map((function(t){return E(t,e)})):null===n?n:E(n,e);r[t]=a};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}function f(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function E(e,t){return t.decode?a(e):e}function h(e){return Array.isArray(e)?e.sort():"object"===typeof e?h(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function m(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}function v(e){var t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function N(e,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=d(t),r=Object.create(null);if("string"!==typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;var a,s=i(e.split("&"));try{for(s.s();!(a=s.n()).done;){var l=a.value,u=c(t.decode?l.replace(/\+/g," "):l,"="),p=o(u,2),m=p[0],y=p[1];y=void 0===y?null:["comma","separator"].includes(t.arrayFormat)?y:E(y,t),n(E(m,t),y,r)}}catch(w){s.e(w)}finally{s.f()}for(var v=0,N=Object.keys(r);v<N.length;v++){var _=N[v],A=r[_];if("object"===typeof A&&null!==A)for(var T=0,R=Object.keys(A);T<R.length;T++){var O=R[T];A[O]=g(A[O],t)}else r[_]=g(A,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=h(n):e[t]=n,e}),Object.create(null))}n.extract=v,n.parse=N,n.stringify=function(e,t){if(!e)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&l(e[n])||t.skipEmptyString&&""===e[n]},r=u(t),a={},o=0,i=Object.keys(e);o<i.length;o++){var s=i[o];n(s)||(a[s]=e[s])}var c=Object.keys(a);return!1!==t.sort&&c.sort(t.sort),c.map((function(n){var a=e[n];return void 0===a?"":null===a?p(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):p(n,t)+"="+p(a,t)})).filter((function(e){return e.length>0})).join("&")},n.parseUrl=function(e,t){return{url:m(e).split("?")[0]||"",query:N(v(e),t)}},n.stringifyUrl=function(e,t){var r=m(e.url).split("?")[0]||"",a=n.extract(e.url),o=n.parse(a),i=y(e.url),s=Object.assign(o,e.query),c=n.stringify(s,t);return c&&(c="?".concat(c)),"".concat(r).concat(c).concat(i)}},{"decode-uri-component":2,"split-on-first":4,"strict-uri-encode":5}],4:[function(e,t,n){"use strict";t.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},{}],5:[function(e,t,n){"use strict";t.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},{}],6:[function(e,t,n){"use strict";function r(e,t,n){return"\n/* Modal Content/Box */\n.transak_close {\n    float: right;\n      animation: 5s transak_fadeIn;\n      animation-fill-mode: forwards;\n      visibility: hidden;\n    transition: 0.5s;\n    position: absolute;\n    right: -5px;\n    width: 35px;\n    margin-top: -15px;\n    height: 35px;\n    font-weight: bold;\n    z-index: 1;\n    background: white;\n    color: #".concat(e,";\n    border-radius: 50%;\n}\n\n@keyframes transak_fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n   visibility: hidden;\n    opacity: 0;\n  }\n  100% {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n.transak_close:hover,\n.transak_close:focus {\n  color: white;\n  background: #").concat(e,";\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.transak_modal {\n  display: block;\n  width: ").concat(n,";\n  max-width: 500px;\n  height: ").concat(t,";\n  max-height: 100%;\n  position: fixed;\n  z-index: 100;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n      border: none;\n    border-radius: 2%;\n    margin: 0px auto;\n    display: block;\n}\n.transak_closed {\n  display: none;\n}\n\n#transakOnOffRampWidget{\n min-height: ").concat(t,"; \n    position: absolute; \n    border: none; \n    border-radius: 2%; \n    margin: 0px auto; \n    display: block;\n}\n\n.transak_modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  \n  background: rgba(0, 0, 0, 0.6);\n}\n\n.transak_modal-content{\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.transak_modal .close-button {\n  position: absolute;\n  z-index: 1;\n  top: 10px;\n  right: 20px;\n  background: black;\n  color: white;\n  padding: 5px 10px;\n  font-size: 1.3rem;\n}\n\n.transak_transakContainer{\n    height: 100%;\n    width:100%;\n}\n\n#transakFiatOnOffRamp{\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n\n@media all and (max-width: ").concat(n,") {\n  .transak_modal {\n    height: 100%;\n    max-height:").concat(t,";\n    top: 53%;\n  }\n}\n\n@media all and (max-height: ").concat(t,") and (max-width: ").concat(n,") {\n    #transakOnOffRampWidget{\n    padding-bottom: 15px;\n    }\n}\n")}Object.defineProperty(n,"__esModule",{value:!0}),n.getCSS=r},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.closeSVGIcon=void 0;var r='<svg version="1.1" fill="currentColor" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">\n<g>\n\t<g id="_x31_0_23_">\n\t\t<g>\n\t\t\t<path d="M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306c168.988,0,306-137.012,306-306S475.008,0,306,0z M414.19,387.147\n\t\t\t\tc7.478,7.478,7.478,19.584,0,27.043c-7.479,7.478-19.584,7.478-27.043,0l-81.032-81.033l-81.588,81.588\n\t\t\t\tc-7.535,7.516-19.737,7.516-27.253,0c-7.535-7.535-7.535-19.737,0-27.254l81.587-81.587l-81.033-81.033\n\t\t\t\tc-7.478-7.478-7.478-19.584,0-27.042c7.478-7.478,19.584-7.478,27.042,0l81.033,81.033l82.181-82.18\n\t\t\t\tc7.535-7.535,19.736-7.535,27.253,0c7.535,7.535,7.535,19.737,0,27.253l-82.181,82.181L414.19,387.147z"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>';n.closeSVGIcon=r},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={SOMETHING_WRONG:"[Transak SDK] => Oops something went wrong please try again. Contact us at hello@transak.com",ENTER_API_KEY:"[Transak SDK] => Please enter your API Key",NOT_INITIALIZED_PROPERLY:"[Transak SDK] => Transak SDK is not initialized properly"};n.default=r},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={TRANSAK_WIDGET_INITIALISED:"TRANSAK_WIDGET_INITIALISED",TRANSAK_WIDGET_OPEN:"TRANSAK_WIDGET_OPEN",TRANSAK_WIDGET_CLOSE_REQUEST:"TRANSAK_WIDGET_CLOSE_REQUEST",TRANSAK_WIDGET_CLOSE:"TRANSAK_WIDGET_CLOSE",TRANSAK_ORDER_CREATED:"TRANSAK_ORDER_CREATED",TRANSAK_ORDER_CANCELLED:"TRANSAK_ORDER_CANCELLED",TRANSAK_ORDER_FAILED:"TRANSAK_ORDER_FAILED",TRANSAK_ORDER_SUCCESSFUL:"TRANSAK_ORDER_SUCCESSFUL"};n.default=r},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={ENVIRONMENT:{STAGING:{FRONTEND:"https://staging-global.transak.com",BACKEND:"https://staging-api.transak.com/api/v1",NAME:"STAGING"},LOCAL_DEVELOPMENT:{FRONTEND:"http://localhost:3000",BACKEND:"http://localhost:8292/api/v2",NAME:"LOCAL_DEVELOPMENT"},DEVELOPMENT:{FRONTEND:"https://development-global.transak.com",BACKEND:"https://development-api.transak.com/api/v2",NAME:"DEVELOPMENT"},PRODUCTION:{FRONTEND:"https://global.transak.com",BACKEND:"https://api.transak.com/api/v1",NAME:"PRODUCTION"}},STATUS:{INIT:"init",TRANSAK_INITIALISED:"transak_initialised"}};n.default=r},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"config",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"errorsLang",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"EVENTS",{enumerable:!0,get:function(){return o.default}});var r=i(e("./globalConfig")),a=i(e("./errors")),o=i(e("./events"));function i(e){return e&&e.__esModule?e:{default:e}}},{"./errors":8,"./events":9,"./globalConfig":10}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("events")),i=e("./constants"),s=(e("./utils/generalUtil"),e("./assets/svg")),c=e("./assets/css"),l=u(e("query-string"));function u(e){return e&&e.__esModule?e:{default:e}}var d=new o.default.EventEmitter;function f(e){this.partnerData=e,this.isInitialised=!1,this.EVENTS=i.EVENTS,this.ALL_EVENTS="*",this.ERROR="TRANSAK_ERROR"}function p(e){return E.apply(this,arguments)}function E(){return(E=a(r.mark((function e(t){var n,a,o,s,c;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},a="development",o="",s="100%",c="100%",!t){e.next=49;break}if(!t.apiKey){e.next=46;break}t.environment&&i.config.ENVIRONMENT[t.environment]&&(a=i.config.ENVIRONMENT[t.environment].NAME),e.prev=4,a=a.toUpperCase(),n.apiKey=t.apiKey,t.cryptoCurrencyCode&&(n.cryptoCurrencyCode=t.cryptoCurrencyCode),t.defaultCryptoCurrency&&(n.defaultCryptoCurrency=t.defaultCryptoCurrency),t.walletAddress&&(n.walletAddress=t.walletAddress),t.themeColor&&(n.themeColor=t.themeColor.replace("#","")),t.walletAddress&&(n.walletAddress=t.walletAddress),t.fiatAmount&&(n.fiatAmount=t.fiatAmount),t.defaultFiatAmount&&(n.defaultFiatAmount=t.defaultFiatAmount),t.defaultCryptoAmount&&(n.defaultCryptoAmount=t.defaultCryptoAmount),t.walletAddressesData&&(t.walletAddressesData.networks||t.walletAddressesData.coins)&&(n.walletAddressesData={},t.walletAddressesData.networks&&(n.walletAddressesData.networks=t.walletAddressesData.networks),t.walletAddressesData.coins&&(n.walletAddressesData.coins=t.walletAddressesData.coins),n.walletAddressesData=JSON.stringify(n.walletAddressesData)),t.fiatCurrency&&(n.fiatCurrency=t.fiatCurrency),t.countryCode&&(n.countryCode=t.countryCode),t.paymentMethod&&(n.paymentMethod=t.paymentMethod),t.defaultPaymentMethod&&(n.defaultPaymentMethod=t.defaultPaymentMethod),t.isAutoFillUserData&&(n.isAutoFillUserData=t.isAutoFillUserData),t.isFeeCalculationHidden&&(n.isFeeCalculationHidden=t.isFeeCalculationHidden),t.disablePaymentMethods&&(n.disablePaymentMethods=t.disablePaymentMethods),t.email&&(n.email=t.email),t.userData&&(n.userData=JSON.stringify(t.userData)),t.partnerOrderId&&(n.partnerOrderId=t.partnerOrderId),t.partnerCustomerId&&(n.partnerCustomerId=t.partnerCustomerId),t.exchangeScreenTitle&&(n.exchangeScreenTitle=t.exchangeScreenTitle),t.hideMenu&&(n.hideMenu=t.hideMenu),t.accessToken&&(n.accessToken=t.accessToken),t.hideExchangeScreen&&(n.hideExchangeScreen=t.hideExchangeScreen),t.isDisableCrypto&&(n.isDisableCrypto=t.isDisableCrypto),t.redirectURL&&(n.redirectURL=t.redirectURL),t.hostURL&&(n.hostURL=t.hostURL?t.hostURL:window.location.origin),t.disableWalletAddressForm&&(n.disableWalletAddressForm=t.disableWalletAddressForm),t.cryptoCurrencyList&&(n.cryptoCurrencyList=t.cryptoCurrencyList.split(",")),t.networks&&(n.networks=t.networks.split(",")),t.defaultNetwork&&(n.defaultNetwork=t.defaultNetwork),o=l.default.stringify(n,{arrayFormat:"comma"}),e.next=44;break;case 41:throw e.prev=41,e.t0=e.catch(4),e.t0;case 44:e.next=47;break;case 46:throw i.errorsLang.ENTER_API_KEY;case 47:t.widgetWidth&&(s=t.widgetWidth),t.widgetHeight&&(c=t.widgetHeight);case 49:return e.abrupt("return",{width:s,height:c,partnerData:n,url:"".concat(i.config.ENVIRONMENT[a].FRONTEND,"?").concat(o)});case 50:case"end":return e.stop()}}),e,null,[[4,41]])})))).apply(this,arguments)}function h(e,t,n){return m.apply(this,arguments)}function m(){return(m=a(r.mark((function e(t,n,a){var o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.createElement("style");case 2:if((o=e.sent).innerHTML=(0,c.getCSS)(t,a,n),!(i=document.getElementById("transakFiatOnOffRamp"))){e.next=8;break}return e.next=8,i.appendChild(o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var t;if(e.origin===i.config.ENVIRONMENT.LOCAL_DEVELOPMENT.FRONTEND?t=i.config.ENVIRONMENT.LOCAL_DEVELOPMENT.NAME:e.origin===i.config.ENVIRONMENT.PRODUCTION.FRONTEND?t=i.config.ENVIRONMENT.PRODUCTION.NAME:e.origin===i.config.ENVIRONMENT.STAGING.FRONTEND?t=i.config.ENVIRONMENT.STAGING.NAME:e.origin===i.config.ENVIRONMENT.DEVELOPMENT.FRONTEND&&(t=i.config.ENVIRONMENT.DEVELOPMENT.NAME),t&&e&&e.data&&e.data.event_id)switch(e.data.event_id){case i.EVENTS.TRANSAK_WIDGET_CLOSE:d.emit(i.EVENTS.TRANSAK_WIDGET_CLOSE,{status:!0,eventName:i.EVENTS.TRANSAK_WIDGET_CLOSE}),document.documentElement.style.overflow="scroll",document.body.scroll="yes";var n=document.getElementById("transakFiatOnOffRamp");n&&n.style&&(n.style.display="none",n.innerHTML="",n.remove());break;case i.EVENTS.TRANSAK_ORDER_CREATED:d.emit(i.EVENTS.TRANSAK_ORDER_CREATED,{status:e.data.data,eventName:i.EVENTS.TRANSAK_ORDER_CREATED});break;case i.EVENTS.TRANSAK_ORDER_CANCELLED:d.emit(i.EVENTS.TRANSAK_ORDER_CANCELLED,{status:e.data.data,eventName:i.EVENTS.TRANSAK_ORDER_CANCELLED});break;case i.EVENTS.TRANSAK_ORDER_FAILED:d.emit(i.EVENTS.TRANSAK_ORDER_FAILED,{status:e.data.data,eventName:i.EVENTS.TRANSAK_ORDER_FAILED});break;case i.EVENTS.TRANSAK_ORDER_SUCCESSFUL:d.emit(i.EVENTS.TRANSAK_ORDER_SUCCESSFUL,{status:e.data.data,eventName:i.EVENTS.TRANSAK_ORDER_SUCCESSFUL});break;case i.EVENTS.TRANSAK_WIDGET_OPEN:d.emit(i.EVENTS.TRANSAK_WIDGET_OPEN,{status:!0,eventName:i.EVENTS.TRANSAK_WIDGET_OPEN})}}f.prototype.on=function(e,t){if(e===this.ALL_EVENTS)for(var n in i.EVENTS)d.on(i.EVENTS[n],t);i.EVENTS[e]&&d.on(e,t),e===this.ERROR&&d.on(this.ERROR,t)},f.prototype.init=function(){this.modal(this)},f.prototype.close=a(r.mark((function e(){var t;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=document.getElementById("transakFiatOnOffRamp"))||!t.style){e.next=6;break}return t.style.display="none",t.innerHTML="",e.next=6,t.remove();case 6:case"end":return e.stop()}}),e)}))),f.prototype.closeRequest=function(){var e=document.getElementById("transakOnOffRampWidget");e&&e.contentWindow.postMessage({event_id:i.EVENTS.TRANSAK_WIDGET_CLOSE_REQUEST,data:!0},"*")},f.prototype.modal=a(r.mark((function e(){var t,n,a,o,c,l,u,f,E=this;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.partnerData){e.next=29;break}return e.next=4,p(this.partnerData);case 4:return t=e.sent,n=t.url,a=t.width,o=t.height,t.partnerData,(c=document.createElement("div")).id="transakFiatOnOffRamp",c.innerHTML='<div class="transak_modal-overlay" id="transak_modal-overlay"></div><div class="transak_modal" id="transak_modal"><div class="transak_modal-content"><span class="transak_close">'.concat(s.closeSVGIcon,'</span><div class="transakContainer"><iframe id="transakOnOffRampWidget" src="').concat(n,'" style="width: ').concat(a,"; height: ").concat(o,'"></iframe></div></div></div>'),(l=document.getElementsByTagName("body"))||(l=document.getElementsByTagName("html")),l||(l=document.getElementsByTagName("div")),e.next=17,l[0].appendChild(c);case 17:return e.next=19,h(this.partnerData.themeColor,a,o);case 19:u=document.getElementById("transakFiatOnOffRamp"),f=document.getElementsByClassName("transak_close")[0],document.documentElement.style.overflow="hidden",document.body.scroll="no",u&&u.style&&(u.style.display="block"),this.isInitialised=!0,d.emit(i.EVENTS.TRANSAK_WIDGET_INITIALISED,{status:!0,eventName:i.EVENTS.TRANSAK_WIDGET_INITIALISED}),f.onclick=function(){return E.closeRequest()},window.onclick=function(e){e.target===document.getElementById("transak_modal-overlay")&&E.closeRequest()},window.addEventListener?window.addEventListener("message",y):window.attachEvent("onmessage",y);case 29:e.next=34;break;case 31:throw e.prev=31,e.t0=e.catch(0),e.t0;case 34:case"end":return e.stop()}}),e,this,[[0,31]])})));var v=f;n.default=v},{"./assets/css":6,"./assets/svg":7,"./constants":11,"./utils/generalUtil":13,events:1,"query-string":3}],13:[function(e,t,n){"use strict";function r(e,t){if("object"==typeof e){var n=[];for(var r in e)n.push(r+"="+(t?encodeURIComponent(e[r]):e[r]));return n.join("&")}console.warn("error occur")}Object.defineProperty(n,"__esModule",{value:!0}),n.UrlEncode=r,n.default=void 0;var a={UrlEncode:r};n.default=a},{}]},{},[12])(12)}}]);
//# sourceMappingURL=46.fd0e1e8c.chunk.js.map