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
(()=>{let o={openModalBtn:document.querySelector("[modal-read-more-open]"),closeModalBtn:document.querySelector("[modal-read-more-close]"),modal:document.querySelector("[modal-read-more]")};function e(){o.modal?o.modal.classList.toggle("is-hidden"):console.error("modal element not found, cannot toggle modal!")}o.openModalBtn?o.openModalBtn.addEventListener("click",e):console.error("openModalBtn element not found!"),o.closeModalBtn?o.closeModalBtn.addEventListener("click",e):console.error("closeModalBtn element not found!"),o.modal||console.error("modal element not found!")})(),document.addEventListener("DOMContentLoaded",()=>{try{new Swiper(".swiper",{// Optional parameters
direction:"horizontal",loop:!0,// If we need pagination
pagination:{el:".swiper-pagination",clickable:!0},// Navigation arrows
navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},// And if we need scrollbar
scrollbar:{el:".swiper-scrollbar"}})}catch(o){console.error(o)}});//# sourceMappingURL=index.2bccbd29.js.map

//# sourceMappingURL=index.2bccbd29.js.map
