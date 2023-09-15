function e(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}(()=>{let e={openModalBtnProduct:document.querySelectorAll(".product-modal-open"),closeModalBtnProduct:document.querySelector(".product-modal-close"),modal:document.querySelector(".product-modal")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtnProduct.forEach(e=>e.addEventListener("click",o)),e.closeModalBtnProduct.addEventListener("click",o)})(),(()=>{let e={openModalBtn:document.querySelector(".modal-buy-now-open"),openModalBtnMobile:document.querySelector(".modal-buy-now-open-mobile"),closeModalBtn:document.querySelector(".modal-buy-now-close"),modal:document.querySelector("[id=modal-buy-now]")};function o(){e.modal?e.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}e.openModalBtn?(console.log("refs.openModalBtn",e.openModalBtn),e.openModalBtn.addEventListener("click",o)):console.error("openModalBtn element not found!"),e.openModalBtnMobile?(console.log("refs.openModalBtn",e.openModalBtn),e.openModalBtnMobile.addEventListener("click",o)):console.error("openModalBtn element not found!"),e.closeModalBtn?(console.log("closeModalBtn",e.closeModalBtn),e.closeModalBtn.addEventListener("click",o)):console.error("closeModalBtn element not found!"),e.modal||console.error("modal element not found!")})(),(()=>{let e={openModalBtn:document.querySelector(".modal-read-more-open"),closeModalBtn:document.querySelector(".modal-read-more-close"),modal:document.querySelector(".modal-read-more")};function o(){e.modal?e.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}e.openModalBtn?e.openModalBtn.addEventListener("click",o):console.error("openModalBtn element not found!"),e.closeModalBtn?e.closeModalBtn.addEventListener("click",o):console.error("closeModalBtn element not found!"),e.modal||console.error("modal element not found!")})(),(()=>{let e={openModalBtn:document.querySelector(".modal-our-locations-open"),closeModalBtn:document.querySelector(".modal-our-locations-close"),modal:document.querySelector(".modal-our-locations")};function o(){e.modal?e.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}e.openModalBtn?e.openModalBtn.addEventListener("click",o):console.error("openModalBtn element not found!"),e.closeModalBtn?(console.log("closeModalBtn",e.closeModalBtn),e.closeModalBtn.addEventListener("click",o)):console.error("closeModalBtn element not found!"),e.modal||console.error("modal element not found!")})(),(()=>{let e={openModalBtn:document.querySelector(".modal-franchise-open"),closeModalBtn:document.querySelector(".modal-franchise-close"),modal:document.querySelector(".modal-franchise")};function o(){e.modal?e.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}e.openModalBtn?e.openModalBtn.addEventListener("click",o):console.error("openModalBtn element not found!"),e.closeModalBtn?(console.log("closeModalBtn",e.closeModalBtn),e.closeModalBtn.addEventListener("click",o)):console.error("closeModalBtn element not found!"),e.modal||console.error("modal element not found!")})();// 1. Import the functions
var o={};e(o,"disableBodyScroll",()=>g),e(o,"clearAllBodyScrollLocks",()=>B),e(o,"enableBodyScroll",()=>M);// Older browsers don't support event options, feature detect it.
// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
var n=!1;if("undefined"!=typeof window){var t={get passive(){n=!0;return}};window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),d=[],r=!1,c=-1,a=void 0,i=void 0,s=void 0,u=function(e){return d.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},m=function(e){var o=e||window.event;return(// For the case whereby consumers adds a touchmove event listener to document.
// Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
// in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
// the touchmove event on document will break.
!!u(o.target)||o.touches.length>1||(o.preventDefault&&o.preventDefault(),!1))},p=function(e){// If previousBodyPaddingRight is already set, don't set it again.
if(void 0===s){var o=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(o&&n>0){var t=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=t+n+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")},f=function(){void 0!==s&&(document.body.style.paddingRight=s,// Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
// can be set again.
s=void 0),void 0!==a&&(document.body.style.overflow=a,// Restore previousBodyOverflowSetting to undefined
// so setOverflowHidden knows it can be set again.
a=void 0)},v=function(){if(void 0!==i){// Convert the position from "px" to Int
var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);// Restore styles
document.body.style.position=i.position,document.body.style.top=i.top,document.body.style.left=i.left,// Restore scroll
window.scrollTo(o,e),i=void 0}},y=function(e,o){var n=e.targetTouches[0].clientY-c;return!u(e.target)&&(o&&0===o.scrollTop&&n>0?m(e):o&&o.scrollHeight-o.scrollTop<=o.clientHeight&&n<0?m(e):(e.stopPropagation(),!0))},g=function(e,o){// targetElement must be provided
if(!e){// eslint-disable-next-line no-console
console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}d.some(function(o){return o.targetElement===e})||(d=[].concat(function(e){if(!Array.isArray(e))return Array.from(e);for(var o=0,n=Array(e.length);o<e.length;o++)n[o]=e[o];return n}(d),[{targetElement:e,options:o||{}}]),l?window.requestAnimationFrame(function(){// If previousBodyPosition is already set, don't set it again.
if(void 0===i){i={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};// Update the dom inside an animation frame 
var e=window,o=e.scrollY,n=e.scrollX,t=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-n,setTimeout(function(){return window.requestAnimationFrame(function(){// Attempt to check if the bottom bar appeared due to the position change
var e=t-window.innerHeight;e&&o>=t&&(document.body.style.top=-(o+e))})},300)}}):p(o),!l||(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(o){1===o.targetTouches.length&&y(o,e)},r||(document.addEventListener("touchmove",m,n?{passive:!1}:void 0),r=!0)))},B=function(){l&&(// Clear all locks ontouchstart/ontouchmove handlers, and the references.
d.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),r&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),r=!1),// Reset initial clientY.
c=-1),l?v():f(),d=[]},M=function(e){if(!e){// eslint-disable-next-line no-console
console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}d=d.filter(function(o){return o.targetElement!==e}),l&&(e.ontouchstart=null,e.ontouchmove=null,r&&0===d.length&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),r=!1)),l?v():f()};(()=>{let e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu");// Validate and log errors for missing elements
if(!e){console.error("Mobile menu element not found.");return}if(!n){console.error("Open menu button element not found.");return}if(!t){console.error("Close menu button element not found.");return}let l=()=>{let t="true"===n.getAttribute("aria-expanded")||"false";n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");let l=t?"enableBodyScroll":"disableBodyScroll";o[l](document.body)};n.addEventListener("click",l),t.addEventListener("click",l),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),o.enableBodyScroll(document.body))})})(),document.addEventListener("DOMContentLoaded",()=>{try{new Swiper(".swiper",{// Optional parameters
direction:"horizontal",loop:!0,// If we need pagination
pagination:{el:".swiper-pagination",clickable:!0},// Navigation arrows
navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},// And if we need scrollbar
scrollbar:{el:".swiper-scrollbar"}})}catch(e){console.error(e)}});//# sourceMappingURL=index.5bc3e6b3.js.map

//# sourceMappingURL=index.5bc3e6b3.js.map