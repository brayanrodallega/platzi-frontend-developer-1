//* Menu Desktop ----------------------------------------------------

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

//* Menu Mobile ------------------------------------------------------

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

burguerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

//* Shopping cart --------------------------------------------------

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  } else if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }

  const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");

  if (isProductDetailOpen) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}


//* Product Detail
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function openProductDetailAside() {

    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//* Shopping card -------------------------------------------------------------------
const cardsContainer = document.querySelector('.card-container');

//* Product List:
const productList = [];

productList.push({
  name: "Bike",
  price: "120",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Car",
  price: "200",
  image:
    "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Motorcycle",
  price: "80",
  image:
    "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
    
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigureDiv = document.createElement('div');
        const productInfoFigure = document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productIcon);
    
        productInfoFigureDiv.append(productInfoFigure);
    
        productInfo.append(productInfoDiv, productInfoFigureDiv);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);