!function(){"use strict";var t,e,n={526:function(t){t.exports=window.ctEvents},73:function(t){t.exports=window.jQuery},907:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},199:function(t,e,n){function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n.d(e,{Z:function(){return r}})},433:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(907);var o=n(199),i=n(181);function u(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||(0,o.Z)(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(907);function o(t,e){if(t){if("string"==typeof t)return(0,r.Z)(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))},o.u=function(t){return t+"."+{12:"cbb5c226319014d56d1c",64:"d72747f291b893439aeb",806:"386bac6351ac5c90110e",985:"44a905941679894649cf"}[t]+".js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t={},e="blocksy-companion:",o.l=function(n,r,i,u){if(t[n])t[n].push(r);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var f=l[p];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+i),a.src=n),t[n]=[r];var d=function(e,r){a.onerror=a.onload=null,clearTimeout(s);var o=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(r)})),e)return e(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){var t={179:0};o.f.j=function(e,n){var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));n.push(r[2]=i);var u=o.p+o.u(e),a=new Error;o.l(u,(function(n){if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}}),"chunk-"+e,e)}};var e=function(e,n){var r,i,[u,a,c]=n,l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)c(o)}for(e&&e(n);l<u.length;l++)i=u[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0},n=globalThis.webpackChunkblocksy_companion=globalThis.webpackChunkblocksy_companion||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),function(){var t=o(433),e=window.ctFrontend,n=o(526),r=o.n(n),i=!1,u=['[data-popup-mode*="page_load"]','[data-popup-mode*="after_x_time"]','[data-popup-mode*="after_x_pages"]','[data-popup-mode*="exit_intent"]','[data-popup-mode*="element_reveal"]','[data-popup-mode*="element_click"]','[data-popup-mode*="after_inactivity"]'],a=function(){u.map((function(t){document.querySelector(t)&&(i||(i=!0,o.e(64).then(o.bind(o,64)).then((function(t){(0,t.handleTriggers)()}))))})),document.querySelector('[data-popup-mode^="scroll"]')&&Promise.all([o.e(12),o.e(985)]).then(o.bind(o,985)).then((function(t){(0,t.handleScrollModePopups)()}))},c=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Promise.all([o.e(12),o.e(806)]).then(o.bind(o,12)).then((function(t){return t.openMicroPopup.apply(void 0,e)}))};window.blocksyOpenMicroPopup=c;var l=function(t){var e=null;try{e=document.querySelector(t.getAttribute("href"))}catch(t){return null}return e},p=function(){(0,t.Z)(document.querySelectorAll('[href*="ct-popup-"]')).map((function(t){t.hasClickListener||l(t)&&(t.hasClickListener=!0,t.addEventListener("click",(function(e){e.preventDefault();var n=l(t);if(n){var r={};t.dataset.postId&&(r.postId=t.dataset.postId),c(n,r)}})))}))},f=!1;(0,e.registerDynamicChunk)("blocksy_pro_micro_popups",{mount:function(){f||(f=!0,a()),p()},openMicroPopup:c}),r().on("blocksy:frontend:init",(function(){p()}))}()}();