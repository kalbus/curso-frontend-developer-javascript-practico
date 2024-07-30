const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Si hace click en el menu del email, hacer toggle del desktop menu
emailMenu.addEventListener('click', toggleMenu); 
burgerMenu.addEventListener('click', toggleMobileMenu);


function toggleMenu() {
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}