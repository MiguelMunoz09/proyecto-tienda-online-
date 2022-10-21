const navemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector ('.desktop-menu');
const hamburgermenu = document.querySelector ('.menu');
const mobilemenu = document.querySelector ('.mobile-menu')
const menucarritoIcon = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');
const cardscontainer = document.querySelector('.cards-container');
const productdetail = document.querySelector('.productdetail'); 
const productcloseicon = document.querySelector ('.product-close');



navemail.addEventListener ('click', toggleDesktopmenu );
hamburgermenu.addEventListener ('click', togglemobilemenu );
menucarritoIcon.addEventListener ('click', toogglecarritoicon);
productcloseicon.addEventListener ('click', productcloseiconaside);

function toggleDesktopmenu () {
    
    const isasideclose = aside.classList.contains ('inactive');

    if (!isasideclose) {
        asideclose.classList.add ('inactive');
        }

    desktopmenu.classList.toggle('inactive');
}

function togglemobilemenu (){
    const isasideclose = aside.classList.contains ('inactive');

    if (!isasideclose) {
        aside.classList.add ('inactive');
    }

    productcloseiconaside ();

    mobilemenu.classList.toggle ('inactive');

}

//aqui hay un bug, no funciona para cerrar el carrito y abrir el menu del correo

function toogglecarritoicon ( ) {
    const ismobilemenuclose = mobilemenu.classList.contains ('inactive');
    

        if (!ismobilemenuclose) {
        mobilemenu.classList.add ('inactive');
        }

         aside.classList.toggle ('inactive');

         if (desktopmenu) {
            desktopmenu.classList.add('inactive')
         }

         const productcloseicon = productdetail.classList.contains ('inactive');
    

         if (!productcloseicon) {
         productdetail.classList.add ('inactive');


         }
}


//lista de productos apartir de arrays

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function openproductdetailaside () {
   aside.classList.add('inactive');
   productdetail.classList.remove('inactive')
}


function productcloseiconaside (){
  productdetail.classList.add('inactive')
}

//funcion que permite agregar cards infinitas

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openproductdetailaside);



    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardscontainer.appendChild(productCard)
  }
}

renderProducts(productList);


//para conectar la imagen con el aside de detalles del producto




