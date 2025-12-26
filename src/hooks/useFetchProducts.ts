import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { z } from "zod";
// Εισαγωγή από το νέο αρχείο
import { ProductSchema, type Product } from "../types/product.schema"; 

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "products"));
        
        const rawData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, 
        }));

        // Runtime Validation χρησιμοποιώντας το array schema
        const result = z.array(ProductSchema).safeParse(rawData);

        if (result.success) {
          setProducts(result.data);
          setError(null);
        } else {
          console.error("Zod Validation Error:", result.error.flatten());
          setError("Data format is invalid.");
        }
      } catch {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};