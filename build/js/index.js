!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3)},function(e,t){function n(){let e=window.pageYOffset||document.documentElement.scrollTop;const t=document.querySelector(".main-nav");e>0?t.classList.add("main-nav_onscroll"):t.classList.remove("main-nav_onscroll")}window.addEventListener("scroll",n),window.addEventListener("load",n)},function(e,t){},function(e,t){let n=(e,t,n,r)=>{const o=new XMLHttpRequest;switch(o.addEventListener("readystatechange",()=>{4===o.readyState&&200===o.status&&r(response=o.response)}),t.match(/[\d|\w]+$/g)[0]){case"json":o.responseType="json"}switch(e){case"GET":t=`${t}?${n}`,n=""}o.open(e,t),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(n)};function r(e,t,n){const r=n.currentTarget,o=r.querySelector(".about-specialist__title"),c=r.querySelector(".about-specialist__text");o.innerHTML=`About ${e.match(/[^\s]+/)[0]}`,c.innerHTML=t.about;const s=r.getElementsByTagName("li");for(let e=0;e<s.length;e++){const n=s[e];n.classList.forEach(e=>{/contact-item__/.test(e)&&(contactName=e.replace(/contact-item__/,""),a=n.getElementsByTagName("a"),t.contacts.hasOwnProperty(contactName)?(n.style.display="",a[0].href=`${t.contacts[contactName]}`):(n.style.display="none",a[0].href="#"))})}r.classList.remove("about-specialist__wrap_hidden")}function o(e,t,n,o){card=o.target,function(e,t){cardParent=t.parentElement,coorCard=t.getBoundingClientRect(),coorCardPar=cardParent.getBoundingClientRect(),x=coorCard.left-coorCardPar.left+t.offsetWidth/2-e.offsetWidth/2,e.style.transform=`translateX(${x}px)`}(e,card);const a=card.querySelector(".team-card__name").innerHTML,c=t[`${a}`];n.addEventListener("transitionend",r.bind(null,a,c),{once:!0}),n.classList.add("about-specialist__wrap_hidden")}window.addEventListener("load",(function(){const e=document.querySelector(".ourteam"),t=e.querySelector(".about-specialist"),r=t.querySelector(".about-specialist__arrow"),a=t.querySelector(".about-specialist__wrap");n("GET","./json/ourteam.json","",t=>{const n=t;o(r,n,a,{target:e.querySelector(".team-card")}),e.addEventListener("focusin",o.bind(null,r,n,a))})}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9