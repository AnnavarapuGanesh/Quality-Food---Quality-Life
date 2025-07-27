// Authentication functions

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Get current user data
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

// Update auth link based on login status
function updateAuthLink() {
    const authLink = document.getElementById('auth-link');
    if (authLink) {
        if (isLoggedIn()) {
            const user = getCurrentUser();
            authLink.textContent = `Hello, ${user.fullname}`;
            authLink.href = '#';
            authLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Do you want to logout?')) {
                    logout();
                }
            });
        } else {
            authLink.textContent = 'Login';
            authLink.href = 'login.html';
        }
    }
}

// Login function
function login(email, password) {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store current user data (without password)
        const currentUser = {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            address: user.address
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        return { success: true, message: 'Login successful!' };
    } else {
        return { success: false, message: 'Invalid email or password!' };
    }
}

// Register function
function register(userData) {
    // Get existing users
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
        return { success: false, message: 'Email already registered!' };
    }
    
    // Create new user with unique ID
    const newUser = {
        id: Date.now().toString(),
        fullname: userData.fullname,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        password: userData.password,
        registeredAt: new Date().toISOString()
    };
    
    // Add to users array
    users.push(newUser);
    
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, message: 'Registration successful! Please login.' };
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Show message function
function showMessage(elementId, message, isSuccess = false) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `message ${isSuccess ? 'success' : 'error'}`;
        messageElement.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

// Setup login form
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                showMessage('login-message', 'Please fill in all fields!');
                return;
            }
            
            const result = login(email, password);
            
            if (result.success) {
                showMessage('login-message', result.message, true);
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showMessage('login-message', result.message);
            }
        });
    }
}

// Setup register form
function setupRegisterForm() {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Validation
            if (!fullname || !email || !phone || !address || !password || !confirmPassword) {
                showMessage('register-message', 'Please fill in all fields!');
                return;
            }
            
            if (password !== confirmPassword) {
                showMessage('register-message', 'Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                showMessage('register-message', 'Password must be at least 6 characters long!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('register-message', 'Please enter a valid email address!');
                return;
            }
            
            // Phone validation (basic)
            if (phone.length < 10) {
                showMessage('register-message', 'Please enter a valid phone number!');
                return;
            }
            
            const userData = {
                fullname,
                email,
                phone,
                address,
                password
            };
            
            const result = register(userData);
            
            if (result.success) {
                showMessage('register-message', result.message, true);
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                showMessage('register-message', result.message);
            }
        });
    }
}

// Initialize authentication
document.addEventListener('DOMContentLoaded', () => {
    updateAuthLink();
    setupLoginForm();
    setupRegisterForm();
});
