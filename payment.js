// Payment processing functions

// Check if user is logged in (add this function if not present)
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Get current user data
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

// Load payment page
function loadPaymentPage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderTotal = localStorage.getItem('orderTotal') || '0';
    
    console.log('Loading payment page, cart:', cart, 'total:', orderTotal); // Debug log
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        window.location.href = 'cart.html';
        return;
    }
    
    if (!isLoggedIn()) {
        alert('Please login to continue');
        window.location.href = 'login.html';
        return;
    }
    
    // Update total amounts in all sections
    const totalElements = [
        'payment-total',
        'card-total', 
        'cod-total',
        'final-total'
    ];
    
    totalElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = orderTotal;
        }
    });
    
    // Load order items
    loadPaymentOrderItems(cart);
    
    // Setup payment method switching
    setupPaymentMethods();
    
    // Setup payment confirmation buttons
    setupPaymentButtons();
}

// Load order items in payment summary
function loadPaymentOrderItems(cart) {
    const orderItemsContainer = document.getElementById('payment-order-items');
    if (!orderItemsContainer) return;
    
    orderItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'payment-order-item';
        itemElement.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee;">
                <div>
                    <strong>${item.foodName}</strong><br>
                    <small>From: ${item.shopName}</small><br>
                    <small>Qty: ${item.quantity} × ₹${item.price}</small>
                </div>
                <div>
                    <strong>₹${item.total}</strong>
                </div>
            </div>
        `;
        orderItemsContainer.appendChild(itemElement);
    });
}

// Setup payment method switching
function setupPaymentMethods() {
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const paymentSections = document.querySelectorAll('.payment-section');
    
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Payment method changed to:', this.value); // Debug log
            
            // Hide all sections
            paymentSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            const selectedSection = document.getElementById(`${this.value}-section`);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        });
    });
    
    // Initialize with UPI selected
    const upiSection = document.getElementById('upi-section');
    if (upiSection) {
        upiSection.style.display = 'block';
    }
}

// Setup payment confirmation buttons
function setupPaymentButtons() {
    console.log('Setting up payment buttons...'); // Debug log
    
    // UPI Payment
    const upiButton = document.getElementById('confirm-upi-payment');
    if (upiButton) {
        upiButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('UPI payment button clicked'); // Debug log
            processPayment('UPI', this);
        });
    }
    
    // Card Payment
    const cardButton = document.getElementById('confirm-card-payment');
    if (cardButton) {
        cardButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Card payment button clicked'); // Debug log
            if (validateCardDetails()) {
                processPayment('Card', this);
            }
        });
    }
    
    // Cash on Delivery
    const codButton = document.getElementById('confirm-cod-payment');
    if (codButton) {
        codButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('COD payment button clicked'); // Debug log
            processPayment('COD', this);
        });
    }
}

// Validate card details
function validateCardDetails() {
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvv = document.getElementById('card-cvv').value;
    
    if (!cardNumber || cardNumber.length < 13) {
        alert('Please enter a valid card number (minimum 13 digits)');
        return false;
    }
    
    if (!cardExpiry || !/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        alert('Please enter a valid expiry date (MM/YY format)');
        return false;
    }
    
    if (!cardCvv || cardCvv.length < 3) {
        alert('Please enter a valid CVV (3-4 digits)');
        return false;
    }
    
    return true;
}

// Process payment
function processPayment(method, button) {
    console.log('Processing payment with method:', method); // Debug log
    
    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Processing...';
    button.disabled = true;
    button.style.backgroundColor = '#ccc';
    
    // Simulate payment processing
    setTimeout(() => {
        try {
            // Create order record
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const orderTotal = localStorage.getItem('orderTotal') || '0';
            const user = getCurrentUser();
            
            if (!user) {
                alert('User not found. Please login again.');
                window.location.href = 'login.html';
                return;
            }
            
            const order = {
                id: 'QF' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                userId: user.id,
                customerName: user.fullname,
                items: cart,
                total: orderTotal,
                paymentMethod: method,
                status: 'confirmed',
                createdAt: new Date().toISOString(),
                deliveryAddress: user.address,
                customerPhone: user.phone,
                estimatedDelivery: new Date(Date.now() + 45 * 60000).toISOString() // 45 minutes from now
            };
            
            console.log('Created order:', order); // Debug log
            
            // Save order to localStorage
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Store current order for confirmation page
            localStorage.setItem('currentOrder', JSON.stringify(order));
            
            // Clear cart
            localStorage.removeItem('cart');
            
            console.log('Redirecting to confirmation page...'); // Debug log
            
            // Redirect to confirmation page
            window.location.href = 'order-confirmation.html';
            
        } catch (error) {
            console.error('Payment processing error:', error);
            alert('Payment processing failed. Please try again.');
            
            // Reset button
            button.textContent = originalText;
            button.disabled = false;
            button.style.backgroundColor = '#e74c3c';
        }
    }, 2000);
}

// Format card number input (optional enhancement)
function formatCardNumber() {
    const cardInput = document.getElementById('card-number');
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue !== e.target.value) {
                e.target.value = formattedValue;
            }
        });
    }
}

// Format expiry date input (optional enhancement)
function formatExpiryDate() {
    const expiryInput = document.getElementById('card-expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
}

// Generate QR code (placeholder - in real app, you'd use a QR code library)
function generateQRCode() {
    const orderTotal = localStorage.getItem('orderTotal') || '0';
    
    // Create a simple QR-like placeholder
    const qrImg = document.querySelector('.qr-code img');
    if (qrImg) {
        qrImg.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="white" stroke="#ddd" stroke-width="2"/>
                <!-- QR code pattern simulation -->
                <rect x="20" y="20" width="20" height="20" fill="black"/>
                <rect x="60" y="20" width="20" height="20" fill="black"/>
                <rect x="100" y="20" width="20" height="20" fill="black"/>
                <rect x="140" y="20" width="20" height="20" fill="black"/>
                <rect x="20" y="60" width="20" height="20" fill="black"/>
                <rect x="100" y="60" width="20" height="20" fill="black"/>
                <rect x="160" y="60" width="20" height="20" fill="black"/>
                <rect x="40" y="100" width="20" height="20" fill="black"/>
                <rect x="80" y="100" width="20" height="20" fill="black"/>
                <rect x="120" y="100" width="20" height="20" fill="black"/>
                <rect x="160" y="100" width="20" height="20" fill="black"/>
                <rect x="20" y="140" width="20" height="20" fill="black"/>
                <rect x="60" y="140" width="20" height="20" fill="black"/>
                <rect x="140" y="140" width="20" height="20" fill="black"/>
                <text x="100" y="180" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold">₹${orderTotal}</text>
                <text x="100" y="195" text-anchor="middle" font-family="Arial" font-size="10">Scan to Pay</text>
            </svg>
        `);
    }
}

// Initialize payment page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Payment page DOM loaded'); // Debug log
    
    if (window.location.pathname.includes('payment.html')) {
        console.log('Loading payment page functionality...'); // Debug log
        loadPaymentPage();
        generateQRCode();
        formatCardNumber();
        formatExpiryDate();
    }
});
