ShopCart: Ecommerce Site
Seamless shopping, easy product search, quick checkout, and seller tools for managing products and sales.
About
ShopCart is a MERN (MongoDB, Express.js, React, Node.js) stack-based ecommerce platform providing a smooth shopping experience for customers and essential tools for sellers to manage products and sales.

Features
User Registration: Register as a customer or seller for a personalized experience.
Cart System: Add products to your cart for easy management and checkout.
Product Search: Find products by name or category (Electronics, Clothes, Kitchen, etc.).
Reviews & Ratings: Leave product feedback to help other customers and sellers.
Seller Dashboard: Manage products, track sales, and view store performance insights.
Product Management: Sellers can add products, set prices, and view customer interactions.
Order Tracking: Sellers can track orders and fulfill them efficiently.
Technologies
Frontend: React.js, Material UI, Redux Toolkit, Styled Components
Backend: Node.js, Express.js, JWT Token
Database: MongoDB
Data Visualization: React Apexcharts
Installation
Terminal 1: Backend Setup
bash
Copy code
cd backend
npm install
npm start
Create a .env file in the backend folder with the following:

bash
Copy code
MONGO_URL = mongodb://127.0.0.1/ecommerce
SECRET_KEY = 'secret-key'
Terminal 2: Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Visit localhost:3000 in your browser. The Backend API runs at localhost:5000.

Error Solution (Network Issue during Signup)
If you encounter a network error while signing up:

In src > redux > userHandle.js, add:
javascript
Copy code
const REACT_APP_BASE_URL = "http://localhost:5000";
Replace all instances of process.env.REACT_APP_BASE_URL with REACT_APP_BASE_URL.
This should resolve the error. Contact me if the issue persists.

