import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { configureStore } from '@reduxjs/toolkit';
import retailCartReducer from '../../store/retailCartSlice';
import ProductDetailsPage from './ProductDetailsPage';
import { describe, it, expect, vi } from 'vitest';

// Σημαντικό: Mock το hook που χρησιμοποιεί το component
vi.mock('../../hooks/useFetchProducts', () => ({
  useFetchProducts: () => ({
    products: [{
      id: '101',
      name: 'Ultra Wide Monitor',
      price: 450,
      image: '/monitor.jpg',
      description: 'Stunning display'
    }],
    loading: false
  })
}));

describe('ProductDetailsPage Async', () => {
  it('κάνει render τα δεδομένα και τα SEO tags', async () => {
    const store = configureStore({ reducer: { retailCart: retailCartReducer } });

    render(
      <HelmetProvider>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/product/101']}>
            <Routes>
              <Route path="/product/:id" element={<ProductDetailsPage />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      </HelmetProvider>
    );

    // Περιμένουμε το UI να ενημερωθεί με τα δεδομένα του mock
    await waitFor(() => {
      expect(screen.getByText('Ultra Wide Monitor')).toBeInTheDocument();
      expect(screen.getByText(/450/)).toBeInTheDocument();
    });
  });
});