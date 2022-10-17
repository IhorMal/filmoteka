const refs = {
  overlay: document.querySelector('.modal-footer-overlay'),
  modalFooter: document.querySelector('.modal-footer'),
  modalBtnClose: document.querySelector('.js-modal-close')
};

export function openModalFooter() {
  refs.overlay.classList.add('active');
  refs.modalFooter.classList.add('active');
  document.body.classList.add('modal-is-open');
  onModalOpen();
}

function onModalOpen() {
  document.body.addEventListener('keydown', closeModalOnEsc);
  refs.overlay.addEventListener('click', closeModal);
  refs.modalBtnClose.addEventListener('click', closeModal);
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  document.querySelector('.modal-footer.active').classList.remove('active');
  document.querySelector('.modal-footer-overlay').classList.remove('active');
  document.body.classList.remove('modal-is-open');
}
