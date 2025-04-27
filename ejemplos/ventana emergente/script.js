function openModal() {
    const modal = document.getElementById('notificationModal');
    modal.style.display = 'flex'; // Flex para centrar contenido
  }
  
  function closeModal() {
    const modal = document.getElementById('notificationModal');
    modal.style.display = 'none';
  }
  
  // Opcional: cerrar modal clickeando fuera del contenido
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('notificationModal');
    if (event.target === modal) {
      closeModal();
    }
  });