let cart = [];

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    alert(productName + " cart में जोड़ दिया गया");
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    let message = "आपका Cart:\n\n";

    savedCart.forEach(item => {
        message += item.name + " - " + item.price + "\n";
    });

    alert(message);
}
