import { z } from "zod";

// Ορισμός του Schema σε ένα μέρος (Single Source of Truth)
export const ProductSchema = z.object({
  id: z.union([z.string(), z.number()]), 
  name: z.string().min(1),
  price: z.coerce.number().min(0),
  image: z.string().min(1).catch("/images/placeholder.jpg"), 
  description: z.string().optional(),
  category: z.string().optional(),
});

// Εξαγωγή του Type για χρήση παντού
export type Product = z.infer<typeof ProductSchema>;