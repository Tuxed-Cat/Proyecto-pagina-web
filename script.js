function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expanded');
}

// Para cerrar la sidebar si clickeas afuera
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');

  // Si la sidebar está expandida y el click NO es dentro de la sidebar ni en el botón
  if (sidebar.classList.contains('expanded') && 
      !sidebar.contains(event.target) && 
      event.target !== toggleBtn) {
    sidebar.classList.remove('expanded');
  }
});