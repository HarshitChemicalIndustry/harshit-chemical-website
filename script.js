// ==============================
// Harshit Chemical Industry
// Shopping Cart
// ==============================

let cartCount = 0;

const cartNumber = document.querySelector(".cart-btn span");

const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {

button.addEventListener("click", () => {

cartCount++;

cartNumber.textContent = cartCount;

button.innerHTML = "✓ Added";

button.style.background = "#28a745";

setTimeout(() => {

button.innerHTML = "Add to Cart";

button.style.background = "#0a7f38";

},1000);

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
//
// Search Products
//

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

const products = document.querySelectorAll(".product-card");

products.forEach(product => {

const text = product.innerText.toLowerCase();

if (text.indexOf(value) > -1) {
product.style.display = "block";
} else {
product.style.display = "none";
}

});

});

}

//
// Header Shadow on Scroll
//

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

} else {

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

}

});

//
// Current Year in Footer (optional)
//

const year = document.querySelector("#year");

if (year) {
year.textContent = new Date().getFullYear();
}
