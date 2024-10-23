import express from 'express';
import { addToCart, updateCartItem, removeFromCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add item to cart
router.post('/', protect, addToCart);

// Update cart item quantity
router.put('/:id', protect, updateCartItem);

// Remove item from cart
router.delete('/:id', protect, removeFromCart);

export default router;