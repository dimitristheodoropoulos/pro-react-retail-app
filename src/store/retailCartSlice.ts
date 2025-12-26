import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';
import { ProductSchema, type Product } from '../types/product.schema';

const RetailCartItemSchema = ProductSchema.extend({
  quantity: z.number().int().positive(),
});

export type RetailCartItem = z.infer<typeof RetailCartItemSchema>;
const CartArraySchema = z.array(RetailCartItemSchema);

interface RetailCartState {
  retailCart: RetailCartItem[];
}

const loadCartFromStorage = (): RetailCartItem[] => {
  try {
    const cartData = localStorage.getItem("retailCart");
    if (!cartData) return [];
    const parsedData = JSON.parse(cartData);
    const result = CartArraySchema.safeParse(parsedData);
    return result.success ? result.data : [];
  } catch {
    return [];
  }
};

const initialState: RetailCartState = {
  retailCart: loadCartFromStorage(),
};

const retailCartSlice = createSlice({
  name: 'retailCart',
  initialState,
  reducers: {
    addToRetailCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.retailCart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.retailCart.push({ ...action.payload, quantity: 1 });
      }
      // Senior Note: Το localStorage.setItem αφαιρέθηκε από εδώ!
    },
    removeFromRetailCart: (state, action: PayloadAction<{ id: number | string }>) => {
      state.retailCart = state.retailCart.filter((item) => item.id !== action.payload.id);
    },
    updateRetailQuantity: (state, action: PayloadAction<{ id: number | string; quantity: number }>) => {
      const item = state.retailCart.find((i) => i.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },
    clearRetailCart: (state) => {
      state.retailCart = [];
    },
  },
});

export const { 
  addToRetailCart, 
  removeFromRetailCart, 
  updateRetailQuantity, 
  clearRetailCart 
} = retailCartSlice.actions;

export default retailCartSlice.reducer;