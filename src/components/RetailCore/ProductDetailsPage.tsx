import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../../store/hooks";
import { addToRetailCart } from "../../store/retailCartSlice";
import { toast } from "react-toastify";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Navbar from "./components/NavBar";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const { products, loading } = useFetchProducts();
  const product = products.find((p) => String(p.id) === id);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex justify-center mt-20" role="status" aria-live="polite">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="text-center mt-10">
          <h2 className="text-red-500 text-xl font-bold">Product not found</h2>
          <button onClick={() => navigate("/")} className="mt-4 text-brand-secondary underline cursor-pointer">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToRetailCart(product));
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>{`${product.name} | Premium Retail Store`}</title>
        <meta name="description" content={product.description || `Discover the best deals on ${product.name}.`} />
      </Helmet>

      <Navbar />
      <div className="flex flex-col items-center px-4 py-12">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-retail p-8 max-w-4xl w-full border border-slate-200/50">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              loading="eager"
              className="w-80 h-80 object-cover rounded-retail shadow-md border border-slate-100 transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:pl-10">
            <span className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-2">
              Premium Collection
            </span>
            <h1 className="text-4xl font-extrabold text-brand-primary mb-4">{product.name}</h1>
            <p className="text-3xl font-black text-brand-primary/90 mb-6">{product.price} €</p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {product.description || `Experience the best in technology with the ${product.name}.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                aria-label={`Add ${product.name} to cart`}
                className={`w-full md:w-auto px-10 py-4 flex items-center justify-center gap-3 rounded-retail font-semibold tracking-wide transition-all duration-300 ease-out border border-white/10 ${
                  isAdded ? "bg-green-600 text-white scale-95 shadow-inner" : "bg-brand-primary text-white hover:bg-brand-secondary hover:-translate-y-0.5 shadow-lg active:scale-95"
                } cursor-pointer disabled:cursor-default`}
              >
                {isAdded ? "Added!" : "Add to Cart"}
              </button>

              <button 
                onClick={() => navigate(-1)} 
                className="flex items-center justify-center gap-2 text-slate-400 hover:text-brand-primary font-medium transition-colors cursor-pointer"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;