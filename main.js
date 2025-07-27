// Sample food data
function debugImageLoading() {
    console.log('Checking image paths...');
    foodData.forEach(food => {
        const img = new Image();
        img.onload = function() {
            console.log(`✅ Image loaded: ${food.image}`);
        };
        img.onerror = function() {
            console.log(`❌ Image failed: ${food.image}`);
        };
        img.src = food.image;
    });
}

// Add this to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    debugImageLoading(); // Add this line
    updateCartCount();
    setupSearch();
    // ... rest of your code
});
const foodData = [
    {
        id: 1,
        name: "Pani Puri",
        description: "Crispy puris filled with spicy tangy water",
        price: 30,
        image: "images/foods/pani-puri.jpg",
        ingredients: ["Semolina puris", "Mint water", "Tamarind chutney", "Chickpeas", "Potatoes", "Onions", "Green chilies"],
        nutrition: {
            calories: 150,
            protein: "4g",
            carbs: "28g",
            fat: "3g"
        }
    },
    {
        id: 2,
        name: "Hakka Noodles",
        description: "Indo-Chinese stir-fried noodles with vegetables",
        price: 120,
        image: "images/foods/Hakka-Noodles.jpg",
        ingredients: ["Noodles", "Cabbage", "Carrots", "Bell peppers", "Onions", "Soy sauce", "Ginger-garlic"],
        nutrition: {
            calories: 280,
            protein: "8g",
            carbs: "45g",
            fat: "8g"
        }
    },
    {
        id: 3,
        name: "Bhel Puri",
        description: "Mumbai street food with puffed rice and chutneys",
        price: 40,
        image: "images/foods/Bhel_puri.jpg",
        ingredients: ["Puffed rice", "Sev", "Onions", "Tomatoes", "Green chutney", "Tamarind chutney"],
        nutrition: {
            calories: 120,
            protein: "3g",
            carbs: "22g",
            fat: "2g"
        }
    },
    {
        id: 4,
        name: "Vada Pav",
        description: "Mumbai's famous potato fritter burger",
        price: 25,
        image: "images/foods/VadaPav.jpg",
        ingredients: ["Potato vada", "Pav bread", "Green chutney", "Garlic chutney", "Fried green chilies"],
        nutrition: {
            calories: 250,
            protein: "6g",
            carbs: "35g",
            fat: "10g"
        }
    },
    {
        id: 5,
        name: "Momos",
        description: "Steamed dumplings with spicy filling",
        price: 80,
        image: "images/foods/veg-momos.jpg",
        ingredients: ["Refined flour", "Vegetables/Chicken", "Onions", "Ginger-garlic", "Spices"],
        nutrition: {
            calories: 200,
            protein: "8g",
            carbs: "30g",
            fat: "6g"
        }
    },
    {
        id: 6,
        name: "Chole Bhature",
        description: "Spicy chickpeas with fried bread",
        price: 150,
        image: "images/foods/Chole Bhature.jpeg",
        ingredients: ["Chickpeas", "Bhature bread", "Onions", "Tomatoes", "Spices", "Yogurt"],
        nutrition: {
            calories: 450,
            protein: "15g",
            carbs: "60g",
            fat: "18g"
        }
    },
    {
        id: 7,
        name: "Pav Bhaji",
        description: "Spicy vegetable mash with buttered bread",
        price: 100,
        image: "images/foods/Pav Bhaji.jpg",
        ingredients: ["Mixed vegetables", "Pav bread", "Butter", "Onions", "Tomatoes", "Pav bhaji masala"],
        nutrition: {
            calories: 350,
            protein: "10g",
            carbs: "50g",
            fat: "14g"
        }
    },
    {
        id: 8,
        name: "Dosa",
        description: "Crispy South Indian crepe with potato filling",
        price: 90,
        image: "images/foods/Dosa.jpg",
        ingredients: ["Rice batter", "Urad dal", "Potatoes", "Onions", "Curry leaves", "Mustard seeds"],
        nutrition: {
            calories: 220,
            protein: "6g",
            carbs: "40g",
            fat: "5g"
        }
    },
    {
        id: 9,
        name: "Samosa",
        description: "Deep-fried pastry with spiced filling",
        price: 15,
        image: "images/foods/Samosa.jpg",
        ingredients: ["Refined flour", "Potatoes", "Green peas", "Spices", "Oil"],
        nutrition: {
            calories: 180,
            protein: "4g",
            carbs: "25g",
            fat: "8g"
        }
    },
    {
        id: 10,
        name: "Manchurian",
        description: "Indo-Chinese fried balls in spicy sauce",
        price: 140,
        image: "images/foods/Manchurian.jpg",
        ingredients: ["Vegetables/Chicken", "Refined flour", "Cornflour", "Soy sauce", "Chili sauce"],
        nutrition: {
            calories: 300,
            protein: "12g",
            carbs: "35g",
            fat: "12g"
        }
    }
];

// Sample shops data
const shopsData = [
    {
        id: 1,
        name: "Sharma Ji's Street Food",
        rating: 4.5,
        distance: "0.5 km",
        price: 30,
        badges: ["premium", "fast"],
        deliveryTime: "15-20 min",
        phone: "+91 98765 43210"
    },
    {
        id: 2,
        name: "Delhi Chaat Corner",
        rating: 4.2,
        distance: "1.2 km",
        price: 35,
        badges: ["organic"],
        deliveryTime: "20-25 min",
        phone: "+91 98765 43211"
    },
    {
        id: 3,
        name: "Mumbai Express",
        rating: 4.7,
        distance: "0.8 km",
        price: 28,
        badges: ["premium", "fast", "organic"],
        deliveryTime: "10-15 min",
        phone: "+91 98765 43212"
    },
    {
        id: 4,
        name: "Spice Garden",
        rating: 4.0,
        distance: "2.0 km",
        price: 40,
        badges: ["organic"],
        deliveryTime: "25-30 min",
        phone: "+91 98765 43213"
    },
    {
        id: 5,
        name: "Quick Bites",
        rating: 4.3,
        distance: "1.5 km",
        price: 32,
        badges: ["fast"],
        deliveryTime: "15-25 min",
        phone: "+91 98765 43214"
    }
];

// Load food items on homepage
function loadFoodItems() {
    const foodItemsContainer = document.getElementById('food-items');
    if (!foodItemsContainer) return;

    foodItemsContainer.innerHTML = '';
    
    foodData.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.setAttribute('data-food-id', food.id);
        
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-card-content">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <div class="food-price">₹${food.price}</div>
            </div>
        `;
        
        foodCard.addEventListener('click', () => {
            localStorage.setItem('selectedFoodId', food.id);
            window.location.href = 'food-details.html';
        });
        
        foodItemsContainer.appendChild(foodCard);
    });
}

// Load food details page
function loadFoodDetails() {
    const foodId = localStorage.getItem('selectedFoodId');
    if (!foodId) {
        window.location.href = 'index.html';
        return;
    }
    
    const food = foodData.find(f => f.id == foodId);
    if (!food) {
        window.location.href = 'index.html';
        return;
    }
    
    document.getElementById('food-img').src = food.image;
    document.getElementById('food-img').alt = food.name;
    document.getElementById('food-name').textContent = food.name;
    document.querySelector('.food-info p').textContent = food.description;
    
    // Load ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    food.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Load nutrition info
    const nutritionDetails = document.getElementById('nutrition-details');
    nutritionDetails.innerHTML = `
        <p><strong>Calories:</strong> ${food.nutrition.calories}</p>
        <p><strong>Protein:</strong> ${food.nutrition.protein}</p>
        <p><strong>Carbohydrates:</strong> ${food.nutrition.carbs}</p>
        <p><strong>Fat:</strong> ${food.nutrition.fat}</p>
    `;
    
    // Find shops button
    document.getElementById('find-shops-btn').addEventListener('click', () => {
        window.location.href = 'shops.html';
    });
}

// Load shops page
function loadShops() {
    const foodId = localStorage.getItem('selectedFoodId');
    if (!foodId) {
        window.location.href = 'index.html';
        return;
    }
    
    const food = foodData.find(f => f.id == foodId);
    if (!food) {
        window.location.href = 'index.html';
        return;
    }
    
    document.getElementById('food-name-header').textContent = food.name;
    
    // Load shops
    const shopsGrid = document.getElementById('shops-grid');
    shopsGrid.innerHTML = '';
    
    shopsData.forEach(shop => {
        const shopCard = document.createElement('div');
        shopCard.className = 'shop-card';
        shopCard.setAttribute('data-shop-id', shop.id);
        
        const badges = shop.badges.map(badge => 
            `<span class="badge ${badge}">${badge.charAt(0).toUpperCase() + badge.slice(1)}</span>`
        ).join('');
        
        const stars = '★'.repeat(Math.floor(shop.rating)) + '☆'.repeat(5 - Math.floor(shop.rating));
        
        shopCard.innerHTML = `
            <div class="shop-header">
                <div class="shop-info">
                    <h3>${shop.name}</h3>
                    <p>${shop.deliveryTime}</p>
                </div>
                <div class="shop-rating">
                    <div class="rating-stars">${stars}</div>
                    <div class="rating-score">${shop.rating}</div>
                </div>
            </div>
            <div class="shop-badges">${badges}</div>
            <div class="shop-details">
                <div class="shop-price">₹${shop.price}</div>
                <div class="shop-distance">${shop.distance}</div>
            </div>
        `;
        
        shopCard.addEventListener('click', () => {
            // Remove selection from other cards
            document.querySelectorAll('.shop-card').forEach(card => {
                card.classList.remove('selected');
            });
            // Select current card
            shopCard.classList.add('selected');
            
            // Update payment sidebar
            updatePaymentSidebar(food, shop);
        });
        
        shopsGrid.appendChild(shopCard);
    });
    
    // Initialize with first shop selected
    if (shopsData.length > 0) {
        shopsGrid.children[0].click();
    }
    
    // Setup quantity controls
    setupQuantityControls();
    
    // Setup add to cart and buy now buttons
    setupShopButtons();
}

function updatePaymentSidebar(food, shop) {
    document.getElementById('selected-food-img').src = food.image;
    document.getElementById('selected-food-name').textContent = food.name;
    document.getElementById('selected-shop-name').textContent = shop.name;
    document.getElementById('selected-price').textContent = shop.price;
    
    updateTotal();
}

function setupQuantityControls() {
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantitySpan = document.getElementById('quantity');
    
    decreaseBtn.addEventListener('click', () => {
        let qty = parseInt(quantitySpan.textContent);
        if (qty > 1) {
            quantitySpan.textContent = qty - 1;
            updateTotal();
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        let qty = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = qty + 1;
        updateTotal();
    });
}

function updateTotal() {
    const price = parseInt(document.getElementById('selected-price').textContent);
    const quantity = parseInt(document.getElementById('quantity').textContent);
    const total = price * quantity;
    document.getElementById('total-amount').textContent = total;
}

function setupShopButtons() {
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
    document.getElementById('buy-now-btn').addEventListener('click', buyNow);
}

function addToCart() {
    const selectedShop = document.querySelector('.shop-card.selected');
    if (!selectedShop) {
        alert('Please select a shop first');
        return;
    }
    
    const foodId = localStorage.getItem('selectedFoodId');
    const food = foodData.find(f => f.id == foodId);
    const shopId = selectedShop.getAttribute('data-shop-id');
    const shop = shopsData.find(s => s.id == shopId);
    const quantity = parseInt(document.getElementById('quantity').textContent);
    
    const cartItem = {
        foodId: food.id,
        foodName: food.name,
        foodImage: food.image,
        shopId: shop.id,
        shopName: shop.name,
        price: shop.price,
        quantity: quantity,
        total: shop.price * quantity
    };
    
    // Get existing cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.foodId === cartItem.foodId && item.shopId === cartItem.shopId
    );
    
    if (existingItemIndex !== -1) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += quantity;
        cart[existingItemIndex].total = cart[existingItemIndex].price * cart[existingItemIndex].quantity;
    } else {
        // Add new item to cart
        cart.push(cartItem);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Item added to cart successfully!');
}

function buyNow() {
    addToCart(); // Add to cart first
    window.location.href = 'cart.html'; // Then redirect to cart
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const foodCards = document.querySelectorAll('.food-card');
    
    foodCards.forEach(card => {
        const foodName = card.querySelector('h3').textContent.toLowerCase();
        const foodDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (foodName.includes(searchTerm) || foodDesc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = searchTerm === '' ? 'block' : 'none';
        }
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupSearch();
    setupMobileMenu();
    
    // Check which page we're on and load appropriate content
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadFoodItems();
    } else if (window.location.pathname.includes('food-details.html')) {
        loadFoodDetails();
    } else if (window.location.pathname.includes('shops.html')) {
        loadShops();
    }
});
