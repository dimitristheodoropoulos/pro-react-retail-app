import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { 
  addToRetailCart, 
  removeFromRetailCart, 
  updateRetailQuantity, 
  clearRetailCart 
} from '../retailCartSlice';
import type { RootState } from '../store';

export const cartListenerMiddleware = createListenerMiddleware();

cartListenerMiddleware.startListening({
  // Ακούει οποιοδήποτε από αυτά τα actions
  matcher: isAnyOf(addToRetailCart, removeFromRetailCart, updateRetailQuantity, clearRetailCart),
  effect: (action, listenerApi) => {
    // Παίρνουμε το τρέχον state του καλαθιού
    const state = listenerApi.getState() as RootState;
    const cartData = state.retailCart.retailCart;
    
    // Ενημερώνουμε το localStorage σε ένα κεντρικό σημείο
    localStorage.setItem("retailCart", JSON.stringify(cartData));
    
    console.log(`Auto-sync: Cart updated by ${action.type}`);
  },
});