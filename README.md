# Quality Food - Quality Life

A full-featured, responsive web application that helps users discover, order, and enjoy the best quality fast food from trusted shops nearby. Built as a hackathon project focusing on food quality, user experience, and smooth functionality.

🌐 **Live Demo:** [https://qualityfood-qualitylife.netlify.app/](https://qualityfood-qualitylife.netlify.app/)

## Table of Contents

- Overview
- Features
- Project Structure
- Technology Stack
- Setup & Installation
- Usage
- Image Management
- Deployment
- Future Enhancements
- License
- Credits

## Overview

**Quality Food - Quality Life** is a user-friendly platform where customers can browse through a curated list of 30+ popular fast food items, view detailed ingredient and nutritional information, select the best shops based on ratings and badges, add items to their shopping cart, and complete their orders using multiple payment options.

The website supports user registration and login, ensuring personalized experiences and order tracking. The design is fully responsive, working seamlessly on desktop, tablets, and mobile devices.

## Features

- **User Authentication:**
  - Secure registration and login system storing user details (name, email, phone, address)
  
- **Extensive Food Catalog:**
  - Displays over 30 delicious food items with images, descriptions, prices
  - Each item includes ingredient lists and nutritional info (calories, protein, carbs, fat)
  
- **Shop Listings:**
  - Multiple shops per food item with detailed ratings, badges (Premium, Organic, Fast Delivery), delivery distance, and estimated times
  
- **Shopping Cart:**
  - Add, remove, and update quantities of items from selected shops
  - Real-time pricing updates including tax and delivery fees
  
- **Search Functionality:**
  - Quickly find food items by name or description
  
- **Multiple Payment Methods:**
  - Supports UPI payment through QR code scanning
  - Credit/Debit card payments with input validation
  - Cash on Delivery option
  
- **Order Confirmation and Tracking:**
  - Displays order status updates (Order Confirmed → Preparing → Out for Delivery → Delivered)
  - Shows delivery partner information with contact details
  
- **Responsive Design:**
  - Fully functional and visually appealing across all device sizes
  
- **Data Persistence:**
  - Uses browser localStorage to simulate a backend database for users, cart, and orders

## Project Structure

quality-food-website/
├── index.html # Homepage showing popular food items
├── login.html # User login page
├── register.html # User registration page
├── food-details.html # Detailed food info with ingredients and nutrition
├── shops.html # Shops selling selected food with ratings and badges
├── cart.html # Shopping cart and order summary
├── payment.html # Payment page with multiple methods and QR code
├── order-confirmation.html # Order placed confirmation and tracking
├── css/
│ ├── style.css # Main styles
│ ├── login.css # Styles for login and registration pages
│ └── responsive.css # Responsive design styles
├── js/
│ ├── main.js # Main JavaScript logic for foods, shops, and UI
│ ├── auth.js # Authentication system (login/register/logout)
│ ├── cart.js # Shopping cart management
│ └── payment.js # Payment handling and order processing
├── images/
│ ├── foods/ # Food item images (all 30)
│ ├── shops/ # Shop images (optional)
│ ├── qr-codes/ # QR code images for payments
│ └── icons/ # Logos, delivery icons etc.
├── data/ # Optional JSON data files
│ ├── users.json
│ ├── foods.json
│ └── shops.json
└── README.md # This file

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Data Storage:** Browser LocalStorage (simulates database)
- **Libraries:** Font Awesome for icons
- **Deployment:** Netlify (Static hosting)

## Setup & Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/yourusername/quality-food-website.git
    cd quality-food-website
    ```

2. **Run a local server (recommended):**

    - Using VSCode Live Server extension (recommended)
    - Or using Python:
    
      ```
      python -m http.server 8000
      ```
      
    - Or Node.js serve:
    
      ```
      npx serve .
      ```

3. **Open the site in your browser:**

    ```
    http://localhost:8000/index.html
    ```

4. **Ensure the `images/foods` folder contains all required images properly named.**

## Usage

1. **Register or log in** with your details to access personalized features
2. **Browse the homepage** for popular foods
3. **Click on any food item** to see detailed ingredients and nutritional info
4. **Explore available shops** selling the selected food, compare ratings and badges
5. **Select your preferred shop and quantity**, then add items to cart or buy immediately
6. **Manage your shopping cart**, adjust quantities or remove items
7. **Proceed to payment**, choose your payment method (UPI, Card, COD)
8. **Confirm payment and place order**
9. **Track your order** with live status updates and delivery partner details

## Image Management

- Store all food item images in `/images/foods/` folder
- Filenames should be lowercase and use hyphens instead of spaces, e.g., `pani-puri.jpg`
- QR code images for UPI payments in `/images/qr-codes/`
- Ensure images are web-optimized (~200KB, recommended dimensions 300x200)

## Deployment

The project is deployed on Netlify and can be accessed at: [https://qualityfood-qualitylife.netlify.app/](https://qualityfood-qualitylife.netlify.app/)

Can also be deployed on other static hosting platforms:
- **GitHub Pages**
- **Vercel**
- **Firebase Hosting**
- Just upload the whole project maintaining the folder structure

## Future Enhancements

- Integration with real backend database (e.g., MongoDB, Firebase)
- Real payment gateway integration
- Real-time delivery tracking with maps
- User profile and order history management
- Reviews and ratings for foods and shops
- Multilingual support
- Push notifications for order updates
- Admin panel for shop owners

## License

This project is licensed under the MIT License.

## Credits

- Developed as a hackathon project
- Icons by Font Awesome
- Placeholder images from Unsplash, Pexels
- Inspired by Indian street food culture and global fast food trends

---

**Live Site:** [https://qualityfood-qualitylife.netlify.app/](https://qualityfood-qualitylife.netlify.app/)

Feel free to explore the features and provide feedback!
