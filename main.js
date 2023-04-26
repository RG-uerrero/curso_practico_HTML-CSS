const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function toggleCarritoAside(){
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
}

const productList = [];
productList.push ({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push ({
  name: 'Pantalla',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push ({
  name: 'Pc',
  price: 930,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.append(productImgCart);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.append(productCard);
  }
};

renderProducts(productList);