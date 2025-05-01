document.addEventListener('DOMContentLoaded', function() {
  // Verificar si estamos en la página de comunidad
  const currentPage = window.location.pathname.split('/').pop();
  
  if (currentPage === 'comunidad.html' || 
      currentPage === 'historial.html' || 
      currentPage === 'puntos.html' || 
      currentPage === 'miembros.html' || 
      currentPage === 'subir.html') {
    
    // Activar el menú de comunidad
    const communityItem = document.getElementById('community-btn');
    communityItem.classList.add('active');
    
    // Mostrar el submenu
    const communitySubmenu = document.getElementById('community-submenu');
    communitySubmenu.classList.add('active');
    
    // Expandir la barra lateral
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('expanded');
    
    // Activar el ítem de submenu correspondiente
    if (currentPage !== 'comunidad.html') {
      const submenuItems = document.querySelectorAll('.submenu-item');
      submenuItems.forEach(item => {
        if (item.dataset.page === currentPage) {
          item.classList.add('active');
        }
      });
    }
  }
  
  // Configurar el botón de comunidad
  const communityBtn = document.getElementById('community-btn');
  communityBtn.addEventListener('click', toggleCommunityMenu);
  
  // Configurar los items del submenu
  const submenuItems = document.querySelectorAll('.submenu-item');
  submenuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remover clase active de todos los items
      submenuItems.forEach(i => i.classList.remove('active'));
      
      // Añadir clase active al item seleccionado
      this.classList.add('active');
      
      // Navegar a la página correspondiente
      if (this.dataset.page) {
        window.location.href = this.dataset.page;
      }
    });
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expanded');
}

function toggleCommunityMenu() {
  const communityItem = document.getElementById('community-btn');
  const communitySubmenu = document.getElementById('community-submenu');
  const sidebar = document.getElementById('sidebar');
  
  // Si la barra lateral no está expandida, primero expandirla
  if (!sidebar.classList.contains('expanded')) {
    sidebar.classList.add('expanded');
  }
  
  // Activar/desactivar el menu de comunidad
  communityItem.classList.toggle('active');
  communitySubmenu.classList.toggle('active');
}

// Cerrar sidebar si se clickea afuera (solo en móviles)
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');
  const communityBtn = document.getElementById('community-btn');
  const communitySubmenu = document.getElementById('community-submenu');

  // Si se hizo clic fuera de la barra lateral y del submenú
  if (!sidebar.contains(event.target) && 
      event.target !== toggleBtn &&
      !communitySubmenu.contains(event.target)) {
    
    // Si la pantalla es pequeña, cerrar todo
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('expanded');
      communityBtn.classList.remove('active');
      communitySubmenu.classList.remove('active');
    }
  }
});

//ventana emergente
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