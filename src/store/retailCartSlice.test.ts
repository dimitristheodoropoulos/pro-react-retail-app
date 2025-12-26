import { describe, it, expect } from 'vitest';
import reducer, { addToRetailCart } from './retailCartSlice';
import { ProductSchema } from '../types/product.schema';

describe('retailCartSlice Logic', () => {
  it('πρέπει να δέχεται μόνο έγκυρα προϊόντα βάσει Schema', () => {
    const validProduct = {
      id: "prod-1",
      name: "Valid Product",
      price: 50,
      image: "image.jpg"
    };

    // Έλεγχος αν το mock μας περνάει το Zod validation (Senior Practice)
    const result = ProductSchema.safeParse(validProduct);
    expect(result.success).toBe(true);

    const state = reducer({ retailCart: [] }, addToRetailCart(validProduct));
    expect(state.retailCart[0].name).toBe("Valid Product");
  });
});