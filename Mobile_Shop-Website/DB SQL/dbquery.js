To create the SQL database and necessary tables for your project, I'll walk you through the process. It looks like you're using MySQL to handle the database, and you need to set up the node_project database with the appropriate tables such as products, login, orders, etc.


CREATE DATABASE node_project;

USE node_project;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2),
    quantity INT NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL
);


CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cost DECIMAL(10, 2) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'not paid',
    city VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(15) NOT NULL,
    date DATETIME NOT NULL,
    products_ids TEXT NOT NULL
);



INSERT INTO products (name, price, sale_price, quantity, image) 
VALUES
('Product 1', 100.00, 80.00, 10, 'product1'),
('Product 2', 150.00, 120.00, 5, 'product2'),
('Product 3', 200.00, NULL, 8, 'product3');



INSERT INTO orders (cost, name, email, status, city, address, phone, date, products_ids)
VALUES
(200.00, 'John Doe', 'john@example.com', 'not paid', 'New York', '1234 Elm Street', '123-456-7890', NOW(), '1,2');

