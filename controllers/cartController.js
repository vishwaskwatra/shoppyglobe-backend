import Cart from '../models/cartModel.js';

// Add a product to the cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id; 

    
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: 'Cart item updated', cartItem });
    }

    // Create new cart item
    cartItem = await Cart.create({ userId, productId, quantity });
    return res.status(201).json({ message: 'Product added to cart', cartItem });
  } catch (error) {
    return res.status(500).json({ message: 'Error adding product to cart', error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const cartItem = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    return res.status(200).json({ message: 'Cart item updated', cartItem });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating cart item', error: error.message });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params; 

    const cartItem = await Cart.findByIdAndDelete(id);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    return res.status(200).json({ message: 'Cart item removed' });
  } catch (error) {
    return res.status(500).json({ message: 'Error removing cart item', error: error.message });
  }
};
