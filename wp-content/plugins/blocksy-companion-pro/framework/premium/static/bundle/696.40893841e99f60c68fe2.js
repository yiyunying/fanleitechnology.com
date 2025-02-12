"use strict";(globalThis.webpackChunkblocksy_companion=globalThis.webpackChunkblocksy_companion||[]).push([[696],{696:function(e,t,o){o.r(t),o.d(t,{closeMicroPopup:function(){return I},openMicroPopup:function(){return B}});var n=o(572),r=o(785),c=o(526),i=o.n(c),a=o(806),s=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"],l=null,u=function(e){if(l){var t=(0,r.Z)(l.querySelectorAll(s.join(","))),o=t[0],n=t[t.length-1];"Tab"!==e.key&&9!==e.keyCode||(t.includes(document.activeElement)||(o.focus(),e.preventDefault()),e.shiftKey?document.activeElement===o&&(n.focus(),e.preventDefault()):document.activeElement===n&&(o.focus(),e.preventDefault()))}},d=function(e){if(!l||l===e){var t=e.querySelectorAll(s.join(","));0!==t.length&&(l=e,document.addEventListener("keydown",u),setTimeout((function(){t[0].focus()}),50))}},f=function(e){e.removeEventListener("keydown",u),l=null},p=function(){return window.ctFrontend&&window.ctFrontend.focusLockManager||(window.ctFrontend.focusLockManager={focusLockOn:d,focusLockOff:f}),window.ctFrontend.focusLockManager};var m=!1;if("undefined"!=typeof window){var y={get passive(){m=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var v="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),g=[],b=!1,w=-1,h=void 0,k=void 0,S=function(e){return g.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},O=function(e){var t=e||window.event;return!!S(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},L=function(){void 0!==k&&(document.body.style.paddingRight=k,k=void 0),void 0!==h&&(document.body.style.overflow=h,h=void 0)},E=function(e,t){if(e){if(!g.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};g=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(g),[o]),v?(e.ontouchstart=function(e){1===e.targetTouches.length&&(w=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-w;!S(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?O(e):e.stopPropagation())}(t,e)},b||(document.addEventListener("touchmove",O,m?{passive:!1}:void 0),b=!0)):function(e){if(void 0===k){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;t&&o>0&&(k=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===h&&(h=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},P="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),_=function(e){P?(v?(g.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),b&&(document.removeEventListener("touchmove",O,m?{passive:!1}:void 0),b=!1),w=-1):L(),g=[]):(document.body.style.overflow="",document.body.style.removeProperty("--scrollbar-width"))},j=function(e){if(P)e&&E(e,{allowTouchMove:function(e){return!!e.closest(".select2-container")}});else{var t=window.innerWidth-document.documentElement.clientWidth;t>0&&document.body.style.setProperty("--scrollbar-width","".concat(t,"px")),document.body.style.overflow="hidden"}},C=function(){return window.ctFrontend&&window.ctFrontend.scrollLockManager||(window.ctFrontend=window.ctFrontend||{},window.ctFrontend.scrollLockManager={enable:_,disable:j}),window.ctFrontend.scrollLockManager},D=o(73),T=o.n(D);function q(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?q(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):q(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({maybeCloseStrategies:{}},t),t.maybeCloseStrategies.button_click){var o=1e3*parseInt(t.maybeCloseStrategies.button_click.close_delay||0),r=t.maybeCloseStrategies.button_click.selector,c=e.querySelector(r);c&&!c.hasAdditionalCloseEvent&&(c.hasAdditionalCloseEvent=!0,c.addEventListener("click",(function(t){t.preventDefault(),I(e,{reason:"button_click",delay:o})})))}if(t.maybeCloseStrategies.form_submit){var i=e.querySelector("form"),a=1e3*parseInt(t.maybeCloseStrategies.form_submit.close_delay||0);if(i&&!i.hasAdditionalCloseEvent)if(i.hasAdditionalCloseEvent=!0,window.document.body.addEventListener("kb-form-success",(function(){I(e,{reason:"form_submit:kadence",delay:a})}),!1),i.matches(".wpforms-form"))T()(i).on("wpformsAjaxSubmitSuccess",(function(){I(e,{reason:"form_submit:wpforms",delay:a})}));else if(i.matches("form.frm-fluent-form"))T()(i).on("fluentform_submission_success",(function(t){I(e,{reason:"form_submit:fluentform",delay:a})}));else if(i.matches(".gform_anchor")||i.querySelector('[class*="gform_"]')){var s=i.id;s=parseInt(s.replace(/\D/g,"")),jQuery(document).on("gform_confirmation_loaded",(function(t,o){s===o&&I(e,{reason:"form_submit:gravityforms",delay:a})}))}else i.addEventListener("submit",(function(t){t.preventDefault(),I(e,{reason:"form_submit:default",delay:a})}))}};function M(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Z(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?M(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var F=function(e){27===e.keyCode&&(0,r.Z)(document.querySelectorAll(".ct-popup.active")).map((function(e){I(e)}))},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Z({unmount:!0,reason:"cancel",delay:0},t),setTimeout((function(){var o=e.id.replace("ct-popup-","");i().trigger("blocksy:micro-popups:close",o,e),localStorage.setItem("blocksyPastPopups",JSON.stringify(Z(Z({},(0,a.Q)()),{},(0,n.Z)({},o,Z(Z({},(0,a.Q)()[o]||{}),{},{pages:[location.href],closed:{reason:t.reason,timestamp:(new Date).getTime()}}))))),e.classList.toggle("active"),setTimeout((function(){var t=e.querySelector(".ct-dynamic-popup-content");t&&t.remove()}),500),p().focusLockOff(e),e.dataset.scrollLock&&C().enable(e.querySelector(".entry-content")),(0,r.Z)(e.querySelectorAll('iframe[src*="youtu"]')).map((function(e){e.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})),(0,r.Z)(e.querySelectorAll("video")).map((function(e){e.pause()})),(0,r.Z)(e.querySelectorAll('iframe:not([src*="youtu"])')).map((function(e){var t=e.src;e.src="",e.src=t})),document.removeEventListener("keyup",F),e.unmount&&t.unmount&&e.unmount()}),t.delay)},x=function(e){var t=e.id.replace("ct-popup-","");i().trigger("blocksy:micro-popups:open",t,e),i().trigger("blocksy:frontend:init"),e.classList.add("active"),localStorage.setItem("blocksyPastPopups",JSON.stringify(Z(Z({},(0,a.Q)()),{},(0,n.Z)({},t,Z(Z({},(0,a.Q)()[t]||{}),{},{pages:(0,r.Z)(((0,a.Q)()[t]||{}).pages||[]),closed:null}))))),p().focusLockOn(e),e.dataset.scrollLock&&C().disable(e.querySelector(".entry-content"));var o=e.querySelector(".ct-toggle-close");o&&!o.hasClickListener&&(o.hasClickListener=!0,e.querySelector(".ct-toggle-close").addEventListener("click",(function(t){t.preventDefault(),I(e)})));var c={};e.dataset.popupCloseStrategy&&(c=JSON.parse(e.dataset.popupCloseStrategy)),c.backdrop&&("yes"!==e.dataset.popupBackdrop||e.hasClickListener||(e.hasClickListener=!0,e.addEventListener("click",(function(t){"yes"===t.target.dataset.popupBackdrop&&(t.preventDefault(),I(e))})))),c.esc&&document.addEventListener("keyup",F),(c.form_submit||c.button_click)&&A(e,{maybeCloseStrategies:c})},Q=null,B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e.classList.contains("active"))I(e);else{if(!e.querySelector(".ct-popup-content")){var o=function(t){var o=document.createElement("div");o.innerHTML=t,o.querySelector(".entry-content")&&(e.querySelector("article").appendChild(o.querySelector(".entry-content")),e.querySelector("article").lastElementChild.classList.add("ct-dynamic-popup-content")),x(e)},c=e.id.replace("ct-popup-",""),i=(0,a.Q)()[c],s=e.dataset.cacheKey;if(s&&i&&i.content&&i.content.cacheKey===s)return void o(i.content.content);var l=new FormData,u=t.postId;if(!u){var d=(0,r.Z)(document.body.classList).find((function(e){return 0===e.indexOf("postid-")}));d&&(u=d.replace("postid-",""))}return l.append("popup_id",c),u&&l.append("post_id",u),Q&&Q.abort(),"AbortController"in window&&(Q=new AbortController),void fetch("".concat(ct_localizations.ajax_url,"?action=blc_retrieve_popup_content"),{method:"POST",body:l,signal:Q.signal}).then((function(e){return e.json()})).then((function(e){var t=e.success,r=e.data;t&&r&&r.content&&(s&&localStorage.setItem("blocksyPastPopups",JSON.stringify(Z(Z({},(0,a.Q)()),{},(0,n.Z)({},c,Z(Z({},(0,a.Q)()[c]||{}),{},{content:{content:r.content,cacheKey:s}}))))),o(r.content))}))}x(e)}}}}]);