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

let iconCart = document.querySelector('.iconCart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProduct = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
});





// const initApp = () => {
//   // get data from json
//   fetch('products.json')
//   .then(response => response.json())
//   .then(data => {
//     listProduct = data;
//     addDataToHTML();
//   })
// }

// initApp();

