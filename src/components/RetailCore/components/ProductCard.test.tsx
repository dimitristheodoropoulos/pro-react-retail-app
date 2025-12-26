import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import retailCartReducer from '../../../store/retailCartSlice';
import { cartListenerMiddleware } from '../../../store/middleware/cartListener';
import ProductCard from './ProductCard';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Product } from '../../../types/product.schema';

const createMockStore = () => configureStore({
  reducer: { retailCart: retailCartReducer },
  middleware: (gDM) => gDM().prepend(cartListenerMiddleware.middleware),
});

describe('ProductCard Integration', () => {
  const mockProduct: Product = {
    id: "1",
    name: 'Premium Laptop',
    price: 1500,
    image: '/laptop.jpg'
  };

  beforeEach(() => {
    // Καθαρισμός των mocks πριν από κάθε test
    vi.clearAllMocks();
    window.localStorage.clear();
  });

  it('εμφανίζει τα στοιχεία και το A11y label', () => {
    render(
      <Provider store={createMockStore()}>
        <MemoryRouter>
          <ProductCard product={mockProduct} />
        </MemoryRouter>
      </Provider>
    );
    
    expect(screen.getByText('Premium Laptop')).toBeInTheDocument();
    expect(screen.getByLabelText(/Add Premium Laptop to cart/i)).toBeInTheDocument();
  });

  it('ενεργοποιεί το LocalStorage sync μέσω του Middleware στο click', async () => {
    // 1. Δημιουργούμε ένα mock function για το setItem
    const setItemSpy = vi.fn();
    
    // 2. Αντικαθιστούμε το localStorage με ένα ελεγχόμενο mock object
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: setItemSpy,
        getItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });

    render(
      <Provider store={createMockStore()}>
        <MemoryRouter>
          <ProductCard product={mockProduct} />
        </MemoryRouter>
      </Provider>
    );

    // 3. Εκτέλεση του Click
    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addButton);
    
    // 4. Χρήση waitFor για να προλάβει το middleware να ολοκληρώσει το side-effect
    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith(
        'retailCart', 
        expect.stringContaining('Premium Laptop')
      );
    }, { timeout: 2000 });
  });
});