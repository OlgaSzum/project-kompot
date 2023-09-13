(() => {
  const refs = {
    openModalBtnProduct: document.querySelectorAll('[product-modal-open]'),
    closeModalBtnProduct: document.querySelector('[product-modal-close]'),
    modal: document.querySelector('[product-modal]'),
  };

  refs.openModalBtnProduct.forEach(btn => btn.addEventListener('click', toggleModalProduct));
  refs.closeModalBtnProduct.addEventListener('click', toggleModalProduct);

  function toggleModalProduct() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
