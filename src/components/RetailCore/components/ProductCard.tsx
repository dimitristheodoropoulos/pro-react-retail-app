import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { addToRetailCart } from "../../../store/retailCartSlice";
import { type Product } from "../../../types/product.schema";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    dispatch(addToRetailCart(product));
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleViewDetails}
      className="bg-white rounded-retail shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-primary/10 overflow-hidden flex flex-col group cursor-pointer"
    >
      <div className="h-52 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy" // Senior Tip: Καθυστερεί το φόρτωμα για εικόνες που δεν φαίνονται ακόμα (Performance)
        />
        <div className="absolute top-2 right-2 bg-brand-accent text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
          NEW
        </div>
      </div>
      
      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-bold text-brand-primary mb-1 group-hover:text-brand-secondary transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">
          {product.description || "High-quality product selected for your needs."}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-black text-brand-secondary">{product.price} €</span>
          
          <button 
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`} // Accessibility (A11y)
            className="bg-brand-primary hover:bg-brand-secondary text-white p-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer z-10"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;