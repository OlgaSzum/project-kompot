(()=>{let e={openModalBtnProduct:document.querySelector("[product-modal-open]"),closeModalBtnProduct:document.querySelector("[product-modal-close]"),modal:document.querySelector("[product-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtnProduct.addEventListener("click",o),e.closeModalBtnProduct.addEventListener("click",o)})(),new Swiper(".swiper",{// Optional parameters
direction:"horizontal",loop:!0,// If we need pagination
pagination:{el:".swiper-pagination",clickable:!0},// Navigation arrows
navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},// And if we need scrollbar
scrollbar:{el:".swiper-scrollbar"}}),(()=>{let e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),l=()=>{let t="true"===o.getAttribute("aria-expanded");o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");let l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};o.addEventListener("click",l),t.addEventListener("click",l);// Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
})();// import './js/modal-buy-now';
//# sourceMappingURL=index.2d780bad.js.map

//# sourceMappingURL=index.2d780bad.js.map
