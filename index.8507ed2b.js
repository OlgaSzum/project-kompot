(()=>{let o={openModalBtnProduct:document.querySelector("[product-modal-open]"),closeModalBtnProduct:document.querySelector("[product-modal-close]"),modal:document.querySelector("[product-modal]")};function e(){o.modal.classList.toggle("is-hidden")}o.openModalBtnProduct.addEventListener("click",e),o.closeModalBtnProduct.addEventListener("click",e)})(),// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();
(()=>{let o={openModalBtn:document.querySelector("[modal-read-more-open]"),closeModalBtn:document.querySelector("[modal-read-more-close]"),modal:document.querySelector("[modal-read-more]")};function e(){o.modal?o.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}o.openModalBtn?o.openModalBtn.addEventListener("click",e):console.error("openModalBtn element not found!"),o.closeModalBtn?o.closeModalBtn.addEventListener("click",e):console.error("closeModalBtn element not found!"),o.modal||console.error("modal element not found!")})(),(()=>{let o={openModalBtn:document.querySelector("[modal-our-locations-open]"),closeModalBtn:document.querySelector("[modal-our-locations-close]"),modal:document.querySelector("[modal-our-locations]")};function e(){o.modal?o.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}o.openModalBtn?o.openModalBtn.addEventListener("click",e):console.error("openModalBtn element not found!"),o.closeModalBtn?(console.log("closeModalBtn",o.closeModalBtn),o.closeModalBtn.addEventListener("click",e)):console.error("closeModalBtn element not found!"),o.modal||console.error("modal element not found!")})(),(()=>{let o={openModalBtn:document.querySelector("[modal-franchise-open]"),closeModalBtn:document.querySelector("[modal-franchise-close]"),modal:document.querySelector("[modal-franchise]")};function e(){o.modal?o.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}o.openModalBtn?o.openModalBtn.addEventListener("click",e):console.error("openModalBtn element not found!"),o.closeModalBtn?(console.log("closeModalBtn",o.closeModalBtn),o.closeModalBtn.addEventListener("click",e)):console.error("closeModalBtn element not found!"),o.modal||console.error("modal element not found!")})(),(()=>{let o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),l=()=>{let n="true"===e.getAttribute("aria-expanded");e.setAttribute("aria-expanded",!n),o.classList.toggle("is-open");let l=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};e.addEventListener("click",l),n.addEventListener("click",l);// Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
})(),document.addEventListener("DOMContentLoaded",()=>{try{new Swiper(".swiper",{// Optional parameters
direction:"horizontal",loop:!0,// If we need pagination
pagination:{el:".swiper-pagination",clickable:!0},// Navigation arrows
navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},// And if we need scrollbar
scrollbar:{el:".swiper-scrollbar"}})}catch(o){console.error(o)}});//# sourceMappingURL=index.8507ed2b.js.map

//# sourceMappingURL=index.8507ed2b.js.map