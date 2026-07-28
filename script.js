const products = [
    { id: 1, name: "Phenyl (Black) - 5L", category: "Chemicals", price: 350, originalPrice: 400, unit: "5 Litre", img: "images/phenyl.jpg", fallback: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=300&q=80" },
    { id: 2, name: "White Phenyl - 5L", category: "Chemicals", price: 380, originalPrice: 450, unit: "5 Litre", img: "images/white_phenyl_5_litre.jpg", fallback: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&q=80" },
    { id: 3, name: "Toilet Cleaner - 1L", category: "Chemicals", price: 120, originalPrice: 150, unit: "1 Litre", img: "images/toilet_cleaner.jpg", fallback: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&q=80" },
    { id: 4, name: "Toilet Cleaner - 5L", category: "Chemicals", price: 450, originalPrice: 550, unit: "5 Litre", img: "images/toilet_cleaner_5_litre.jpg", fallback: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&q=80" },
    { id: 5, name: "Glass Cleaner", category: "Chemicals", price: 150, originalPrice: 180, unit: "500 ml", img: "images/glass_cleaner.jpg", fallback: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=300&q=80" },
    { id: 6, name: "Floor Cleaner", category: "Chemicals", price: 200, originalPrice: 250, unit: "1 Litre", img: "images/floor_cleaner.jpg", fallback: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=300&q=80" },
    { id: 7, name: "Dish Wash Liquid", category: "Chemicals", price: 110, originalPrice: 140, unit: "1 Litre", img: "images/dish_wash.jpg", fallback: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&q=80" },
    { id: 8, name: "Car & Bike Shampoo", category: "Chemicals", price: 250, originalPrice: 300, unit: "1 Litre", img: "images/car_bike_shampoo.jpg", fallback: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=300&q=80" },
    { id: 9, name: "Room Freshener - 5L", category: "Chemicals", price: 600, originalPrice: 750, unit: "5 Litre", img: "images/room_freshener_5_litre.jpg", fallback: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&q=80" },
    { id: 10, name: "21 Inch Floor Wiper", category: "Tools", price: 220, originalPrice: 280, unit: "1 Piece", img: "images/21_inch_floor_wiper.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80" },
    { id: 11, name: "Plastic Storage Bucket", category: "Tools", price: 300, originalPrice: 380, unit: "1 Piece", img: "images/multipurpose_plastic_storage_bucket_drum.jpg", fallback: "https://images.unsplash.com/photo-1583912267670-6575cb7529d8?w=300&q=80" },
    { id: 12, name: "Heavy Floor Brush", category: "Tools", price: 140, originalPrice: 180, unit: "1 Piece", img: "images/floor_brush.jpg", fallback: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&q=80" },
    { id: 13, name: "Toilet Cleaning Brush", category: "Tools", price: 90, originalPrice: 120, unit: "1 Piece", img: "images/toilet_brush.jpg", fallback: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&q=80" },
    { id: 14, name: "Microfiber Cleaning Cloth", category: "Tools", price: 60, originalPrice: 90, unit: "1 Piece", img: "images/microfiber_cloth.jpg", fallback: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=300&q=80" },
    { id: 15, name: "Dustbin Large", category: "Tools", price: 450, originalPrice: 550, unit: "1 Piece", img: "images/dustbin_large.jpg", fallback: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=300&q=80" }
];

let cart = [];

function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    if(items.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">No products found matching your search.</div>`;
        return;
    }
    items.forEach(p => {
        grid.innerHTML += `
            <div class="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition animate-fade">
                <div>
                    <div class="h-36 bg-slate-50 rounded-xl overflow-hidden relative mb-2">
                        <img src="${p.img}" onerror="this.onerror=null; this.src='${p.fallback}';" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full">${p.unit}</span>
                    </div>
                    <h3 class="font-bold text-slate-800 text-xs line-clamp-2 mb-1">${p.name}</h3>
                    <div class="flex items-center space-x-2 mb-2">
                        <span class="font-black text-slate-900 text-sm">₹${p.price}</span>
                        <span class="text-slate-400 text-xs line-through">₹${p.originalPrice}</span>
                    </div>
                </div>
                <button onclick="addToCart(${p.id})" class="w-full bg-orange-50 hover:bg-orange-600 text-orange-600 hover:text-white border border-orange-200 py-2 rounded-xl text-xs font-black transition flex items-center justify-center space-x-1">
                    <i class="fa-solid fa-plus text-[10px]"></i>
                    <span>ADD</span>
                </button>
            </div>
        `;
    });
}

function filterCat(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('bg-white', 'border', 'border-slate-200', 'text-slate-700');
    });
    btn.classList.remove('bg-white', 'border', 'border-slate-200', 'text-slate-700');
    btn.classList.add('bg-slate-900', 'text-white');

    if(cat === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        renderProducts(filtered);
    }
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').innerText = totalItems;
    
    const list = document.getElementById('cartItemsList');
    let subtotal = 0;
    list.innerHTML = '';

    if(cart.length === 0) {
        list.innerHTML = `<p class="text-slate-400 text-center py-6 text-sm">Your cart is empty.</p>`;
    } else {
        cart.forEach((item, index) => {
            let itemTotal = item.price * item.qty;
            subtotal += itemTotal;
            list.innerHTML += `
                <div class="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <div class="flex items-center space-x-3">
                        <img src="${item.img}" onerror="this.src='${item.fallback}'" class="w-12 h-12 object-cover rounded-lg">
                        <div>
                            <h4 class="font-bold text-xs text-slate-800">${item.name}</h4>
                            <p class="text-xs text-orange-600 font-bold">₹${itemTotal}</p>
                        </div>
                    </div>
                    <div class="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                        <button onclick="changeQty(${index}, -1)" class="px-2.5 py-1 text-slate-500 hover:bg-slate-100 text-xs">-</button>
                        <span class="px-2 font-bold text-xs">${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)" class="px-2.5 py-1 text-orange-600 hover:bg-slate-100 text-xs">+</button>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('subTotal').innerText = `₹${subtotal}`;
    document.getElementById('totalAmount').innerText = `₹${subtotal}`;
}

function changeQty(index, change) {
    cart[index].qty += change;
    if(cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    drawer.classList.toggle('hidden');
    updateCartUI();
}

function placeOrder() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const address = document.getElementById('address').value;
    if(!address.trim()) {
        alert("Please enter your delivery address.");
        return;
    }
    alert("Order Placed Successfully! Harshit Chemical Industry team will process your order right away.");
    cart = [];
    toggleCart();
    updateCartUI();
}

renderProducts(products);
     
