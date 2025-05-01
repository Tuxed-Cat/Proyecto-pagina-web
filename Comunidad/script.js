document.addEventListener('DOMContentLoaded', function() {
  // Referencias a elementos del DOM
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');
  const communityBtn = document.getElementById('community-btn');
  const communitySubmenu = document.getElementById('community-submenu');
  
  // Verificar si estamos en la página de comunidad
  const currentPage = window.location.pathname.split('/').pop();
  
  if (currentPage === 'comunidad.html' || 
      currentPage === 'historial.html' || 
      currentPage === 'puntos.html' || 
      currentPage === 'miembros.html' || 
      currentPage === 'subir.html') {
    
    // Activar el menú de comunidad
    communityBtn.classList.add('active');
    
    // Expandir la barra lateral para páginas de comunidad
    sidebar.classList.add('expanded');
    
    // Mostrar el submenu solo en páginas internas
    if (currentPage !== 'comunidad.html') {
      communitySubmenu.classList.add('active');
      
      // Activar el ítem de submenu correspondiente
      const submenuItems = document.querySelectorAll('.submenu-item');
      submenuItems.forEach(item => {
        if (item.dataset.page === currentPage) {
          item.classList.add('active');
        }
      });
    }
  }
  
  // Event listener para el botón de toggle (las tres líneas)
  // Importante: reemplazamos cualquier handler existente
  toggleBtn.onclick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Toggle para la barra lateral
    if (sidebar.classList.contains('expanded')) {
      sidebar.classList.remove('expanded');
      // También cerramos el submenu de comunidad cuando se colapsa la barra
      communitySubmenu.classList.remove('active');
    } else {
      sidebar.classList.add('expanded');
    }
  };
  
  // Event listener para el botón de comunidad
  communityBtn.onclick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Si la barra lateral no está expandida, primero expandirla
    if (!sidebar.classList.contains('expanded')) {
      sidebar.classList.add('expanded');
    }
    
    // Toggle para el submenu de comunidad
    communitySubmenu.classList.toggle('active');
    communityBtn.classList.toggle('active');
  };
  
  // Configurar los items del submenu
  const submenuItems = document.querySelectorAll('.submenu-item');
  submenuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      
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

// Cerrar sidebar si se clickea afuera (en móviles)
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');
  const communityBtn = document.getElementById('community-btn');
  const communitySubmenu = document.getElementById('community-submenu');

  // Si el clic fue en el botón de toggle o en el botón de comunidad, no hacemos nada
  if (event.target === toggleBtn || event.target === communityBtn) {
    return;
  }

  // Si se hizo clic fuera de la barra lateral y del submenú
  if (!sidebar.contains(event.target) && !communitySubmenu.contains(event.target)) {
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