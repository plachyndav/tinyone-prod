!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){"use strict";var n=document.querySelector(".js-button"),o=document.querySelector(".js-menu");n.addEventListener("click",function(e){e.preventDefault(),o.classList.toggle("main-nav__list--closed")});var i=document.querySelectorAll(".js-icon"),c=document.querySelectorAll(".js-slider-item");document.querySelectorAll(".js-toggle").forEach(function(t,r,n){t.addEventListener("click",function(e){e.preventDefault(),n.forEach(function(e){e.classList.remove("slider__toggle--active")}),t.classList.add("slider__toggle--active"),c.forEach(function(e){e.classList.remove("slider__item--active")}),c[r].classList.add("slider__item--active"),i.forEach(function(e){e.classList.remove("slider__img-wrapper--active")}),i[r].classList.add("slider__img-wrapper--active")})})},function(e,t,r){}]);