// ==========================
// Harshit Chemical Industry
// Website Script
// ==========================

// Cart Counter

let cart = 0;

const cartNumber = document.querySelector(".cart-btn span");
const cartButtons = document.querySelectorAll(".buy-btn");

cartButtons.forEach(button => {

button.addEventListener("click",()=>{

cart++;

cartNumber.innerText = cart;

button.innerText = "Added ✓";

setTimeout(()=>{

button.innerText = "Add to Cart";

},1000);

});

});


// Search Product

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(product=>{

let name = product.innerText.toLowerCase();

if(name.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}
// ==========================
// Scroll Animation
// ==========================

const cards = document.querySelectorAll(
".product-card, .category-card, .offer-box"
);

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen - 80){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});


// Initial Card Style

cards.forEach(card=>{

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "0.6s ease";

});


// Header Shadow

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.style.boxShadow =
"0 8px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,.08)";

}

});
// ==========================
// Mobile Menu
// ==========================

const navbar = document.querySelector(".navbar");

const header = document.querySelector(".header .container");

const menuBtn = document.createElement("button");

menuBtn.innerHTML = "☰";

menuBtn.className = "menu-btn";

header.appendChild(menuBtn);


menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});


// ==========================
// Order Button
// ==========================

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Product added to cart!");

});

});
// ==========================
// Simple Checkout System
// ==========================

let selectedProduct = "";

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card=>{

const button = card.querySelector(".buy-btn");

button.addEventListener("click",()=>{

selectedProduct = card.querySelector("h3").innerText;

console.log("Selected Product:", selectedProduct);

});

});


// Checkout Button Function

function checkout(){

if(selectedProduct === ""){

alert("Please select a product first");

}else{

alert(
"Your order for " 
+ selectedProduct 
+ " has been received!"
);

}

}
// ==========================
// Order Popup System
// ==========================

function openOrderForm(product){

let name = prompt("Enter Your Name");

let mobile = prompt("Enter Mobile Number");

let address = prompt("Enter Delivery Address");


if(name && mobile && address){

alert(
"
  // ==========================
// Payment Option
// ==========================

function payment(){

let option = prompt(
"Select Payment Method:\n1. Cash on Delivery\n2. Online Payment"
);

if(option == "1"){

alert("Cash on Delivery Selected ✅");

}

else if(option == "2"){

alert("Online Payment Selected. Payment Gateway Coming Soon.");

}

else{

alert("Please select a valid option");

}

}


// Checkout Button

const checkoutBtn = document.querySelector(".checkout-btn");

if(checkoutBtn){

checkoutBtn.addEventListener("click",()=>{

payment();

});

}
  // ==========================
// Direct Order System
// ==========================

let orders = [];

function addOrder(product){

let customerName = prompt("Enter Customer Name");

let phone = prompt("Enter Mobile Number");

let qty = prompt("Enter Quantity");


if(customerName && phone && qty){

let order = {

product: product,
name: customerName,
mobile: phone,
quantity: qty

};


orders.push(order);


alert(
"Order Placed Successfully ✅\n\n" +
"Product: " + product +
"\nQuantity: " + qty
);


console.log(orders);


}else{

alert("Please fill all details");

}

}


// Product Order Buttons

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.onclick = function(){

let product =
this.closest(".product-card")
.querySelector("h3").innerText;


addOrder(product);

};

});
  // ==========================
// Save Orders in Browser
// ==========================

function saveOrder(order){

let oldOrders = JSON.parse(
localStorage.getItem("orders")
) || [];


oldOrders.push(order);


localStorage.setItem(
"orders",
JSON.stringify(oldOrders)
);

}


// View Orders Function

function viewOrders(){

let data = JSON.parse(
localStorage.getItem("orders")
) || [];


if(data.length === 0){

alert("No Orders Found");

return;

}


console.log("All Orders:", data);


alert(
"Total Orders: " + data.length +
"\nCheck Browser Console"
);

}


// Connect With Add Order

function storeOrder(product,name,phone,qty){

let newOrder = {

product:product,
customer:name,
mobile:phone,
quantity:qty,
date:new Date().toLocaleString()

};


saveOrder(newOrder);

}
