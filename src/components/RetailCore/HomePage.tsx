import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts"; 
import ProductCard from "./components/ProductCard";
import Navbar from "./components/NavBar";

const HomePage: React.FC = () => {
  // Χρήση του Custom Hook
  const { products, loading, error } = useFetchProducts();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-12 mt-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Premium Collection
          </h1>
          {loading && <p className="text-indigo-600 font-medium mt-4 animate-pulse">Loading amazing gadgets...</p>}
          {error && <p className="text-red-500 mt-4 font-bold underline">{error}</p>}
        </header>

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;