import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // Initialize items as an empty array
  },
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from payload
      const existingItem = state.items.find(item => item.name === name); // Check if item exists
      if (existingItem) {
        existingItem.quantity++; // Increase quantity if exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new with quantity 1
      }
    },

    // ✅ Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // ✅ Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;
