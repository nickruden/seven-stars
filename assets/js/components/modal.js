function toggleModal(modalId, action = 'open') {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById('burger-menu-overlay');
  
  if (action === 'open') {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Обработчики для всех элементов с data-modal-id
document.querySelectorAll('[data-modal-id]').forEach(el => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    toggleModal(this.getAttribute('data-modal-id'));
  });
});

document.querySelectorAll('.my-modal__close').forEach(btn => {
  btn.addEventListener('click', () => toggleModal(btn.closest('.my-modal').id, 'close'));
});

document.getElementById('burger-menu-overlay').addEventListener('click', function() {
  document.querySelectorAll('.my-modal.active').forEach(modal => {
    toggleModal(modal.id, 'close');
  });
});