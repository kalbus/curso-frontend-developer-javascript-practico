const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenu = document.querySelector('.navbar-shopping-cart');
const asideMyOrder = document.querySelector('.my-order');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// Si hace click en el menu del email, hacer toggle del desktop menu
emailMenu.addEventListener('click', toggleMenu); 
burgerMenu.addEventListener('click', toggleMobileMenu);
carMenu.addEventListener('click', toggleasideMyOrder);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

// Toggle con if
function toggleMenu() {
   const isasideMyOrderActive = !asideMyOrder.classList.contains('inactive');
   const isProductDetailActive = !productDetail.classList.contains('inactive');

   if (isasideMyOrderActive) {
    asideMyOrder.classList.add('inactive');
   }

   if (isProductDetailActive) {
    productDetail.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

// Toggle con if
function toggleMobileMenu() {
    const isasideMyOrderActive = !asideMyOrder.classList.contains('inactive');
    const isProductDetailActive = !productDetail.classList.contains('inactive');

    if (isasideMyOrderActive) {
        asideMyOrder.classList.add('inactive');
    }

    if (isProductDetailActive) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

// Toggle sin if
function toggleasideMyOrder() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    asideMyOrder.classList.toggle('inactive');
}

function openProductDetail() {
    asideMyOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info-card">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

productList = [];

productList.push({
    name: 'Bike',
    price: 200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Mouse',
    price: 80,
    img: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600'  
})
productList.push({
    name: 'Headphones',
    price: 100,
    img: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600' 
})
productList.push({
    name: 'Laptop',
    price: 600,
    img: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Poster',
    price: 40,
    img: 'https://images.pexels.com/photos/6430730/pexels-photo-6430730.jpeg?auto=compress&cs=tinysrgb&w=600'  
})
productList.push({
    name: 'Radio',
    price: 120,
    img: 'https://images.pexels.com/photos/3199028/pexels-photo-3199028.jpeg' 
})

function showProducts (list) {
    for (product of list) {
        
        /*Product Card: Image and product information*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        /*Product Image*/
        const productImg = document.createElement('img');
        productImg.classList.add('product-card-image');
        productImg.src = product.img;
        
        /*Product Info: Details and figure */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info-card');

        /*Details*/
        const details = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        /*Figure*/
        const figure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.src = './icons/bt_add_to_cart.svg';

        /*appendChild para mostrar contenido en la pag*/
        figure.appendChild(imgFigure);
        details.appendChild(productPrice);
        details.appendChild(productName);
        
        productInfo.appendChild(details);
        productInfo.appendChild(figure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

        //console.log(productImg);
        productImg.addEventListener('click', openProductDetail);
    }
}

showProducts(productList);