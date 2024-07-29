const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Si hace click en el menu del email, hacer toggle del desktop menu
emailMenu.addEventListener('click', toggleMenu); 

function toggleMenu() {
   desktopMenu.classList.toggle('inactive');
}