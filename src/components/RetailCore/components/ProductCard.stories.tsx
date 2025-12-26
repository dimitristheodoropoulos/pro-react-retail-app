import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import retailCartReducer from '../../../store/retailCartSlice';
import ProductCard from './ProductCard';

const store = configureStore({
  reducer: { retailCart: retailCartReducer }
});

const meta = {
  title: 'RetailApp/Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <div style={{ width: '350px' }}>
            <Story />
          </div>
        </MemoryRouter>
      </Provider>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "1",
      name: "High-End Laptop",
      price: 1299.99,
      image: "/images/laptop.jpg",
      description: "Powerful professional laptop for demanding tasks."
    },
  },
};

export const Discounted: Story = {
  args: {
    product: {
      id: "2",
      name: "Smart Watch",
      price: 199.00,
      image: "/images/smart-watch.jpg",
      description: "Track your fitness and notifications."
    },
  },
};