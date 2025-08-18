function myMenuFunction() {
            var i = document.getElementById("navMenu");

            if(i.className === "nav-menu") {
                i.className += " responsive";
            } else {
             i.className = "nav-menu";
            }
        }







        var a = document.getElementById("loginBtn");
        var b = document.getElementById("registerBtn");
        var x = document.getElementById("login");
        var y = document.getElementById("register");


        function login() {
            // x.style.left = "200px"
            // y.style.right = "-520px"
            a.className += " white-btn"
            b.className += "btn-1";
             x.style.opacity = 1;
             y.style.opacity = 0;
            // b.style.opacity = 0;

        }

        function register() {
            // x.style.left = "-1000px"
            // y.style.right = "-80px"
            a.className = "btn-1"
            a.className += " white-btn";
             x.style.opacity = 0;
             y.style.opacity = 1;
        }

const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    else return("something went wrong, make sure that ${selector} is typed correctly")
}


const bodyElement = document.body;
const themeToggleBtn = selectElement ('#theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
   bodyElement.classList.toggle('light-theme');
});




const formOpenBtn = document.getElementById('search-icon');
const formCloseBtn = document.getElementById('form-close-btn');
const searchFormContainer = document.getElementById('search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});


let availableKeywords = [
    'Manchester United',
    'Bruno Fernandes',
    'Home Jersey',
    'Away Jersey',
    'Third Jersey',
    'Onana',
    'Ruben Amorin',
    'Marcus Rashford',
    'Isaac Sylvester',
    'Diogo Dalot',
    'Kobie Mainoo',
    'Joshua',
    'Leny Yoro',

];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
       console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = ' ';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";

    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = " ";
}

// Declare and initialize variables at the top
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct'); // Ensure this exists in HTML
let listCartHTML = document.querySelector('.listCart'); // Ensure this exists in HTML
let iconCartSpan = document.querySelector('.icon-cart span'); // Ensure this exists in HTML




let listProducts = [];
let carts = []; // Initialize carts array


iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
const addDataToHTML = () => {
  if (!listProductHTML) {
    console.error('Container .listProduct not found!');
    return;
  }
  // Clear existing content
  listProductHTML.innerHTML = '';
  if (listProducts.length > 0) {
    listProducts.forEach(product => {
      // Create the main div
      let newProduct = document.createElement('div');
      newProduct.classList.add('item');
      
      // Create and append img
      let img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;
      newProduct.appendChild(img);
      // Create and append h3
      let h3 = document.createElement('h3');
      h3.textContent = product.name;
      newProduct.appendChild(h3);
      // Create and append p for price
      let p = document.createElement('p');
      p.classList.add('price');
      p.textContent = `${product.price} $`;
      newProduct.appendChild(p);
      // Create and append button
    let button = document.createElement('button');
    button.classList.add('addToCart');
    button.textContent = 'Add to Cart';
    button.dataset.id = product.id; // Pass product id as data attribute
    newProduct.appendChild(button);
      // Append the new product div to the list
      listProductHTML.appendChild(newProduct);
    });
  } else {
    console.log('No products to display');
    listProductHTML.textContent = 'No products available.';
  }
};


listProductHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('addToCart')) {
    const productId = positionClick.dataset.id;
    addToCart(productId);
  }
})

const addToCart = (productId) => {
  let  positionThisProductInCart = carts.findIndex((value) => value.product_id == productId);

  if(carts.length <= 0){
    carts = [{
      product_id: productId,
      quantity: 1 // Initialize quantity
    }]
   }else if(positionThisProductInCart < 0){
    carts.push({
      product_id: productId,
      quantity: 1 // Initialize quantity
    });
  }else{
    carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
  }

   addCartToHTML();
   addCartToMemory();

}

const addCartToMemory = () => {
  localStorage.setItem('cart', JSON.stringify(carts));
}

const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  carts.forEach(cart => {
    totalQuantity += cart.quantity;
  });

  if(carts.length > 0) {
    carts.forEach(cart => {
      let product = listProducts.find(p => p.id == cart.product_id);
      if (!product) return;
      let newCart = document.createElement('div');
      newCart.classList.add('item');

      // Image
      let img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;
      newCart.appendChild(img);

      // Name
      let h3 = document.createElement('h3');
      h3.textContent = product.name;
      newCart.appendChild(h3);

      // Price
      let p = document.createElement('p');
      p.classList.add('price');
      p.textContent = `${product.price} $`;
      newCart.appendChild(p);

  // Quantity
  let qty = document.createElement('p');
  qty.classList.add('quantity');
  qty.textContent = `Quantity: ${cart.quantity}`;
  newCart.appendChild(qty);

  // Remove button
  let removeBtn = document.createElement('button');
  removeBtn.classList.add('removeFromCart');
  removeBtn.textContent = 'Remove';
  removeBtn.dataset.id = cart.product_id;
  newCart.appendChild(removeBtn);

  // Append to cart list
  listCartHTML.appendChild(newCart);
// Remove item from cart
const removeFromCart = (productId) => {
  carts = carts.filter(cart => cart.product_id != productId);
  addCartToMemory();
  addCartToHTML();
}

// Listen for remove button clicks in cart
listCartHTML.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeFromCart')) {
    const productId = event.target.dataset.id;
    removeFromCart(productId);
  }
});
    });
  }
  iconCartSpan.textContent = totalQuantity; // Update cart icon with total quantity
};


const initApp = () => {
  // Get data from JSON
  fetch('products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      listProducts = data;
      console.log('Fetched Products:', listProducts); // Verify the data
      addDataToHTML(); // Call the function after data is fetched

      // Load cart from local storage if available
      if(localStorage.getItem('cart')) {
        carts = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML(); // Update cart display
      }
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      listProductHTML.textContent = 'Failed to load products.';
    
    });

   
};
// Ensure DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', initApp);