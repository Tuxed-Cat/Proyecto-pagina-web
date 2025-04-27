function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expanded');
}

// Cerrar sidebar si se clickea afuera (solo en móviles)
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');

  // Funciona solo si la pantalla es pequeña (por ejemplo, < 768px)
  if (window.innerWidth <= 768) {
    if (sidebar.classList.contains('expanded') && 
        !sidebar.contains(event.target) && 
        event.target !== toggleBtn) {
      sidebar.classList.remove('expanded');
    }
  }
});

//ventana emergente{
function openModal() {
  const modal = document.getElementById('notificationModal');
  modal.style.display = 'flex';
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
//}