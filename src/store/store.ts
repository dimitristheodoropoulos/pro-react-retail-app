import { configureStore } from '@reduxjs/toolkit';
import retailCartReducer from "./retailCartSlice";
// Εισαγωγή του middleware που δημιουργήσαμε
import { cartListenerMiddleware } from './middleware/cartListener';

export const store = configureStore({
  reducer: {
    retailCart: retailCartReducer,
  },
  // Προσθήκη του middleware στη ροή του Redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(cartListenerMiddleware.middleware),
});

// Τύποι για το Store - Απαραίτητοι για το useAppSelector και useAppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;