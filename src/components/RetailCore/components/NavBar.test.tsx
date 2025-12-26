import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { HelmetProvider } from 'react-helmet-async';
import retailCartReducer from '../../../store/retailCartSlice';
import Navbar from './NavBar';
import { describe, it, expect } from 'vitest';
import '../../../i18n'; 
import { Product } from '../../../types/product.schema';

// Ορίζουμε ένα interface για το αντικείμενο στο καλάθι
// Αν έχεις ήδη CartItem type στο slice σου, κάνε το import από εκεί.
interface CartItem extends Product {
  quantity: number;
}

// Αντικατάσταση του any[] με CartItem[]
const createMockStore = (items: CartItem[]) => configureStore({
  reducer: { retailCart: retailCartReducer },
  preloadedState: { 
    retailCart: { 
      retailCart: items 
    } 
  }
});

describe('Navbar Badge Logic', () => {
  it('υπολογίζει το συνολικό quantity', () => {
    const mockItems: CartItem[] = [
      { id: "1", name: 'A', price: 10, quantity: 3, image: 'a.jpg' },
      { id: "2", name: 'B', price: 20, quantity: 2, image: 'b.jpg' }
    ];

    render(
      <HelmetProvider>
        <Provider store={createMockStore(mockItems)}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </Provider>
      </HelmetProvider>
    );

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});