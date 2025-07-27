// Cart management functions

// Load cart items
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items-list');
    
    if (!cartItemsList) return;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 50px 20px;">
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
                <a href="index.html" class="btn-primary" style="display: inline-block; margin-top: 20px;">Browse Food Items</a>
            </div>
        `;
        updateCartSummary(); // Update summary even for empty cart
        return;
    }
    
    cartItemsList.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.foodImage}" alt="${item.foodName}">
            <div class="cart-item-details">
                <h4>${item.foodName}</h4>
                <p>From: ${item.shopName}</p>
                <div class="cart-item-price">₹${item.price} each</div>
                <div class="cart-item-controls">
                    <button onclick="updateCartItemQuantity(${index}, -1)" style="width: 30px; height: 30px; margin: 0 5px;">-</button>
                    <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${index}, 1)" style="width: 30px; height: 30px; margin: 0 5px;">+</button>
                    <button onclick="removeCartItem(${index})" class="remove-btn" style="margin-left: 15px; background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            </div>
            <div class="cart-item-total">
                <strong>₹${item.total}</strong>
            </div>
        `;
        cartItemsList.appendChild(cartItemElement);
    });
    
    updateCartSummary();
}

// Update cart item quantity
function updateCartItemQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index]) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].total = cart[index].price * cart[index].quantity;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount();
    }
}

// Remove cart item
function removeCartItem(index) {
    if (confirm('Are you sure you want to remove this item?')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount();
    }
}

// Update cart summary
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const deliveryFee = subtotal > 0 ? 50 : 0;
    const tax = Math.round(subtotal * 0.05); // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    // Update DOM elements safely
    const subtotalElement = document.getElementById('subtotal');
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = subtotal;
    if (deliveryFeeElement) deliveryFeeElement.textContent = deliveryFee;
    if (taxElement) taxElement.textContent = tax;
    if (totalElement) totalElement.textContent = total;
    
    // Store total for payment page
    localStorage.setItem('orderTotal', total.toString());
    
    // Enable/disable checkout button based on cart content
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        if (cart.length === 0) {
            checkoutBtn.disabled = true;
            checkoutBtn.textContent = 'Cart is Empty';
            checkoutBtn.style.backgroundColor = '#ccc';
            checkoutBtn.style.cursor = 'not-allowed';
        } else {
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = 'Proceed to Checkout';
            checkoutBtn.style.backgroundColor = '#e74c3c';
            checkoutBtn.style.cursor = 'pointer';
        }
    }
}

// Check if user is logged in (add this function if not present)
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Setup checkout button
function setupCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        // Remove any existing event listeners
        checkoutBtn.replaceWith(checkoutBtn.cloneNode(true));
        const newCheckoutBtn = document.getElementById('checkout-btn');
        
        newCheckoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            console.log('Checkout button clicked'); // Debug log
            
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            if (cart.length === 0) {
                alert('Your cart is empty! Please add some items before checkout.');
                return;
            }
            
            if (!isLoggedIn()) {
                alert('Please login to continue with checkout');
                window.location.href = 'login.html';
                return;
            }
            
            console.log('Redirecting to payment...'); // Debug log
            window.location.href = 'payment.html';
        });
    }
}

// Update cart count in navigation
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        if (element) {
            element.textContent = totalItems;
        }
    });
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, current page:', window.location.pathname); // Debug log
    
    // Update cart count on all pages
    updateCartCount();
    
    // Load cart specific functionality only on cart page
    if (window.location.pathname.includes('cart.html') || window.location.pathname.endsWith('/cart.html')) {
        console.log('Loading cart page...'); // Debug log
        loadCartItems();
        setupCheckout();
    }
});
