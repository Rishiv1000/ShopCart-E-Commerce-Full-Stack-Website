<h1 align="center">
    SHOPCART: Ecommerce Site
</h1>

<br>

# About

ShopCart is an ecommerce site developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It offers a user-friendly and efficient shopping experience for customers, while providing sellers with essential tools to manage their products and sales.

## Features

- **User Registration:** ShopCart allows users to register as customers or sellers, enabling a tailored shopping experience.

- **Cart System:** Customers can add products to their cart for easy checkout. The cart allows them to review and manage their selections before completing the purchase.

- **Product Search:** ShopCart offers a search functionality where customers can find products by name or browse through categories such as Electronics, Clothes, Kitchen, and more.

- **Reviews and Ratings:** Customers can leave reviews and ratings (out of 5) for products they've purchased, providing valuable feedback for sellers and building trust within the community.

- **Seller Dashboard:** Sellers have access to a dedicated dashboard where they can manage their products, view sales data, and gain insights into their store's performance through data visualization.

- **Product Management:** Sellers can add products with detailed information and set their prices. They can also check which customers have added their products to their carts.

- **Order Tracking:** Sellers can monitor the products ordered by customers, helping them stay organized and fulfill orders efficiently.

## Technologies Used

- Frontend: React.js, Material UI, Redux Toolkit, Styled Components
- Backend: Node.js, Express.js, JWT Token
- Database: MongoDB
- Data Visualization: React Apexcharts

<br>

# ENV FILE FOR BACKEND 

MONGO_URL = mongodb+srv://rishiv1000:1221@cluster0.wx5el.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
SECRET_KEY = 'secret-key'

# Error Solution

If you encounter a network error while signing up, follow these steps to resolve it:

1. Navigate to the src > redux > userHandle.js file.

2. Add the following line after the import statements:

javascript
const REACT_APP_BASE_URL = "http://localhost:5000";


3. Replace all instances of process.env.REACT_APP_BASE_URL with REACT_APP_BASE_URL.

The issue arises because the .env file in the frontend may not work for all users, while it works for me.
