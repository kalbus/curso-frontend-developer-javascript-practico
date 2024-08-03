const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenu = document.querySelector('.navbar-shopping-cart');
const asideMyOrder = document.querySelector('.product-detail');

// Si hace click en el menu del email, hacer toggle del desktop menu
emailMenu.addEventListener('click', toggleMenu); 
burgerMenu.addEventListener('click', toggleMobileMenu);
carMenu.addEventListener('click', toggleasideMyOrder);


function toggleMenu() {
   isasideMyOrderActive = !asideMyOrder.classList.contains('inactive');

   if (isasideMyOrderActive) {
    asideMyOrder.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    isasideMyOrderActive = !asideMyOrder.classList.contains('inactive');

    if (isasideMyOrderActive) {
        asideMyOrder.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleasideMyOrder() {
    isDesktopMenuActive = !desktopMenu.classList.contains('inactive');
    isMobileMenuActive = !mobileMenu.classList.contains('inactive');

    if (isDesktopMenuActive) {
        desktopMenu.classList.add('inactive');
    }

    if (isMobileMenuActive) {
        mobileMenu.classList.add('inactive');
    }

    asideMyOrder.classList.toggle('inactive');
}