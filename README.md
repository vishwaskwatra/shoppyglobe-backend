# ShoppyGlobe

ShoppyGlobe is a full-stack application for managing products and user carts. It allows users to register, log in, create products, and manage their shopping cart.

## Features

- User Registration and Login
- Product Creation and Management
- Add/Update/Remove Products from Cart
- JWT Authentication for secure routes

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Argon2 for password hashing
- JSON Web Tokens (JWT)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vishwaskwatra/shoppyglobe-backend
   ```
2. Navigate to the project directory:
    ```bash
    cd shoppyglobe-backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a .env file in the root directory and add your environment variables (like database URI, JWT secret).
5. Start the server
    ```bash
    npm start
    ```
## Usage
You can use tools like Postman/ThunderClient to test the API endpoints. Ensure you have the server running before making requests.

## API Endpoints

### User Routes
POST /api/auth/register - Register a new user
POST /api/auth/login - Login an existing user

### Product Routes
POST /api/products - Create a new product
GET /api/products - Get all products
GET /api/products/:id - Get a product by ID

### Cart Routes
POST /api/cart - Add a product to the cart
PUT /api/cart/:id - Update cart item quantity
DELETE /api/cart/:id - Remove item from the cart
