/* ==========================================================
   Harshit Chemical Industry - Complete Production Ready Script
   ========================================================== */

// Complete Product Database (All requested products + extra)
const productsData = [
    {
        id: 1,
        name: "Room Spray Premium",
        category: "Housekeeping Products",
        price: 249,
        mrp: 399,
        discount: "38% OFF",
        rating: 4.8,
        stock: "In Stock",
        image: "images/products/room_spray.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&auto=format&fit=crop&q=80",
        description: "Long-lasting refreshing room spray with natural floral fragrance. Eliminates unpleasant odors instantly."
    },
    {
        id: 2,
        name: "Disinfectant Phenyl (5L)",
        category: "Chemical Products",
        price: 350,
        mrp: 500,
        discount: "30% OFF",
        rating: 4.9,
        stock: "In Stock",
        image: "images/products/phenyl.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?w=400&auto=format&fit=crop&q=80",
        description: "Heavy-duty white and black disinfectant phenyl. Kills 99.9% germs and keeps floors sparkling clean."
    },
    {
        id: 3,
        name: "Tiles Cleaner Liquid",
        category: "Cleaning Chemicals",
        price: 199,
        mrp: 299,
        discount: "33% OFF",
        rating: 4.7,
        stock: "In Stock",
        image: "images/products/tiles_cleaner.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&auto=format&fit=crop&q=80",
        description: "Powerful acid-based tiles and ceramic cleaner. Removes stubborn grease, dirt, and cement stains."
    },
    {
        id: 4,
        name: "Advanced Toilet Cleaner",
        category: "Cleaning Chemicals",
        price: 175,
        mrp: 250,
        discount: "30% OFF",
        rating: 4.8,
        stock: "In Stock",
        image: "images/products/toilet_cleaner.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&auto=format&fit=crop&q=80",
        description: "Thick gel formula that clings to bowl surfaces to remove yellowish tough stains and kill germs."
    },
    {
        id: 5,
        name: "Car Wash Shampoo",
        category: "Industrial Cleaning",
        price: 299,
        mrp: 450,
        discount: "34% OFF",
        rating: 4.6,
        stock: "In Stock",
        image: "images/products/car_wash.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&auto=format&fit=crop&q=80",
        description: "pH balanced rich foam car wash shampoo. Safe on paint and removes road grime effortlessly."
    },
    {
        id: 6,
        name: "Carpet Shampoo Cleaner",
        category: "Housekeeping Products",
        price: 450,
        mrp: 650,
        discount: "31% OFF",
        rating: 4.5,
        stock: "In Stock",
        image: "images/products/carpet_shampoo.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80",
        description: "Deep-cleaning carpet and upholstery shampoo. Lifts embedded dirt and restores fabric fiber brightness."
    },
    {
        id: 7,
        name: "Hard Spot Stain Cleaner",
        category: "Industrial Cleaning",
        price: 399,
        mrp: 599,
        discount: "33% OFF",
        rating: 4.9,
        stock: "In Stock",
        image: "images/products/hard_spot_cleaner.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&auto=format&fit=crop&q=80",
        description: "Specialized formulation for removing stubborn rust, water scale, and chemical stains from hard surfaces."
    },
    {
        id: 8,
        name: "Antibacterial Hand Wash (5L)",
        category: "Hotel Supplies",
        price: 599,
        mrp: 899,
        discount: "33% OFF",
        rating: 4.9,
        stock: "In Stock",
        image: "images/products/hand_wash.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80",
        description: "Moisturizing liquid hand wash with pleasant aroma. Gentle on hands, tough on bacteria."
    },
    {
        id: 9,
        name: "Dish Wash Liquid Gel",
        category: "Housekeeping Products",
        price: 210,
        mrp: 300,
        discount: "30% OFF",
        rating: 4.7,
        stock: "In Stock",
        image: "images/products/dish_wash.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&auto=format&fit=crop&q=80",
        description: "Lemon-infused grease cutting dishwash liquid. Cleans utensils quickly without leaving residue."
    },
    {
        id: 10,
        name: "Streak-Free Glass Cleaner",
        category: "Cleaning Chemicals",
        price: 180,
        mrp: 260,
        discount: "30% OFF",
        rating: 4.8,
        stock: "In Stock",
        image: "images/products/glass_cleaner.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80",
        description: "Ammonia-free glass and mirror cleaner. Delivers crystal clear, streak-free shining results."
    },
    {
        id: 11,
        name: "Professional Grass Broom",
        category: "Cleaning Tools",
        price: 120,
        mrp: 180,
        discount: "33% OFF",
        rating: 4.6,
        stock: "In Stock",
        image: "images/products/broom.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&auto=format&fit=crop&q=80",
        description: "High-density natural grass broom with sturdy grip handle for efficient indoor sweeping."
    },
    {
        id: 12,
        name: "Plastic Stick Broom",
        category: "Cleaning Tools",
        price: 150,
        mrp: 220,
        discount: "31% OFF",
        rating: 4.7,
        stock: "In Stock",
        image: "images/products/stick_broom.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80",
        description: "Water-resistant synthetic bristle stick broom ideal for wet and dry outdoor cleaning."
    },
    {
        id: 13,
        name: "Heavy Duty Plastic Bucket",
        category: "Housekeeping Products",
        price: 299,
        mrp: 450,
        discount: "33% OFF",
        rating: 4.8,
        stock: "In Stock",
        image: "images/products/bucket.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&auto=format&fit=crop&q=80",
        description: "Unbreakable virgin plastic bucket with strong iron handle support. Capacity: 20 Liters."
    },
    {
        id: 14,
        name: "Dustbin Small (Paddle)",
        category: "Housekeeping Products",
        price: 250,
        mrp: 399,
        discount: "37% OFF",
        rating: 4.6,
        stock: "In Stock",
        image: "images/products/dustbin_small.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&auto=format&fit=crop&q=80",
        description: "Pedal-operated hygienic dustbin for office desks, bathrooms, and washrooms."
    },
    {
        id: 15,
        name: "Dustbin Large (Industrial)",
        category: "Industrial Cleaning",
        price: 899,
        mrp: 1299,
        discount: "30% OFF",
        rating: 4.9,
        stock: "In Stock",
        image: "images/products/dustbin_large.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&auto=format&fit=crop&q=80",
        description: "Heavy-duty large wheel dustbin with lid for commercial establishments and housing societies."
    },
    {
        id: 16,
        name: "Garbage Bags (Pack of 30)",
        category: "Housekeeping Products",
        price: 149,
        mrp: 220,
        discount: "32% OFF",
        rating: 4.8,
        stock: "In Stock",
        image: "images/products/garbage_bag.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&auto=format&fit=crop&q=80",
        description: "Oxo-biodegradable trash bags with tie string. Leak-proof and durable."
    },
    {
        id: 17,
        name: "Garbage Tongs & Picker",
        category: "Cleaning Tools",
        price: 349,
        mrp: 500,
        discount: "30% OFF",
        rating: 4.5,
        stock: "In Stock",
        image: "images/products/garbage_tongs.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80",
        description: "Long-reach ergonomic garbage collection tongs for safe waste management."
    },
    {
        id: 18,
        name: "Telescopic Extension Pole",
        category: "Cleaning Tools",
        price: 799,
        mrp: 1199,
        discount: "33% OFF",
        rating: 4.8,
        stock: "In Stock",
        image: "images/products/extension_pole.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&auto=format&fit=crop&q=80",
        description: "Extendable aluminum pole up to 3 meters for high ceiling cleaning and window wiping."
    },
    {
        id: 19,
        name: "Window Glass Wiper",
        category: "Cleaning Tools",
        price: 220,
        mrp: 320,
        discount: "31% OFF",
        rating: 4.7,
        stock: "In Stock",
        image: "images/products/window_wiper.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80",
        description: "Professional rubber blade window wiper for spotless drying without scratches."
    },
    {
        id: 20,
        name: "Wet Floor Caution Sign",
        category: "Hotel Supplies",
        price: 399,
        mrp: 600,
        discount: "33% OFF",
        rating: 4.9,
        stock: "In Stock",
        image: "images/products/wet_floor_sign.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&auto=format&fit=crop&q=80",
        description: "Foldable high-visibility bilingual wet floor warning sign board."
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('harshit_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('harshit_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('harshit_user')) || null;

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 600);

    initSlider();
    renderProducts(productsData);
    updateBadges();
    initTheme();
    initEventListeners();
});

/* ==========================================
   Hero Image Slider Logic (3s auto-change)
   ================================---------- */
let currentSlide = 0;
let slideInterval;

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if(slides.length === 0) return;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlideFunc() {
        showSlide(currentSlide - 1);
    }

    slideInterval = setInterval(nextSlide, 3000);

    if(nextBtn) nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 3000);
    });

    if(prevBtn) prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlideFunc();
        slideInterval = setInterval(nextSlide, 3000);
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(idx);
            slideInterval = setInterval(nextSlide, 3000);
        });
    });
}

/* ==========================================
   Render Products Grid
   ========================================== */
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    if(!grid) return;

    if(products.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-light);">No products found matching your criteria.</p>`;
        return;
    }

    grid.innerHTML = products.map(p => {
        const isWishlisted = wishlist.some(item => item.id === p.id);
        return `
            <div class="product-card">
                <span class="product-badge">${p.discount}</span>
                <button class="wishlist-icon-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Add to Wishlist">
                    <i class="fa-solid fa-heart"></i>
                </button>
                <div class="product-img-box" onclick="openQuickView(${p.id})">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='${p.fallbackImg}'">
                </div>
                <div class="product-content">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-title" onclick="openQuickView(${p.id})">${p.name}</h3>
                    <p class="product-desc">${p.description}</p>
                    <div class="product-price-box">
                        <span class="current-price">₹${p.price}</span>
                        <span class="mrp-price">₹${p.mrp}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn-cart" onclick="addToCart(${p.id})"><i class="fa-solid fa-cart-plus"></i> Add</button>
                        <button class="btn-buy" onclick="buyNow(${p.id})">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* ==========================================
   Live Search & Filters
   ========================================== */
function initEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const priceVal = document.getElementById('priceVal');
    const sortFilter = document.getElementById('sortFilter');
    const categoryCards = document.querySelectorAll('.category-card');

    // Live search input
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if(query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }

            const filtered = productsData.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );

            if(filtered.length > 0) {
                searchResults.style.display = 'block';
                searchResults.innerHTML = filtered.map(p => `
                    <div class="search-result-item" onclick="selectSearchResult(${p.id})">
                        <img src="${p.image}" onerror="this.src='${p.fallbackImg}'">
                        <div>
                            <div style="font-weight:600; font-size:13px;">${p.name}</div>
                            <div style="color:var(--primary); font-size:12px;">₹${p.price}</div>
                        </div>
                    </div>
                `).join('');
            } else {
                searchResults.style.display = 'block';
                searchResults.innerHTML = `<div style="padding:10px 15px; font-size:13px; color:var(--text-light);">No products found</div>`;
            }
        });

        document.addEventListener('click', (e) => {
            if(!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    // Filter Logic Function
    function applyFilters() {
        const cat = categoryFilter ? categoryFilter.value : 'All';
        const maxPrice = priceFilter ? parseInt(priceFilter.value) : 5000;
        const sortType = sortFilter ? sortFilter.value : 'default';

        if(priceVal) priceVal.innerText = `₹${maxPrice}`;

        let result = productsData.filter(p => {
            const matchesCat = (cat === 'All' || p.category === cat);
            const matchesPrice = p.price <= maxPrice;
            return matchesCat && matchesPrice;
        });

        if(sortType === 'low-high') result.sort((a,b) => a.price - b.price);
        else if(sortType === 'high-low') result.sort((a,b) => b.price - a.price);
        else if(sortType === 'name') result.sort((a,b) => a.name.localeCompare(b.name));

        renderProducts(result);
    }

    if(categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if(priceFilter) priceFilter.addEventListener('input', applyFilters);
    if(sortFilter) sortFilter.addEventListener('change', applyFilters);

    // Category Card click filter
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const catName = card.getAttribute('data-category');
            if(categoryFilter) {
                categoryFilter.value = catName;
                applyFilters();
                document.getElementById('productsSection').scrollIntoView({behavior: 'smooth'});
            }
        });
    });

    // Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if(currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('harshit_theme', 'light');
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('harshit_theme', 'dark');
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        });
    }

    // Back to Top & Sticky Header
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    if(backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // Modals Control
    setupModals();
}

function initTheme() {
    const savedTheme = localStorage.getItem('harshit_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if(themeToggleBtn) {
        themeToggleBtn.innerHTML = savedTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i
