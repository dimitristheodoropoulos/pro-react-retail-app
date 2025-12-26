import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeFromRetailCart, clearRetailCart } from "../../store/retailCartSlice";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const cart = useAppSelector((state) => state.retailCart.retailCart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRemove = (id: string | number) => {
    dispatch(removeFromRetailCart({ id }));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center bg-slate-50 min-h-screen py-16 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-black text-brand-primary mb-10 tracking-tight">Shopping Bag</h1>

        {cart.length === 0 ? (
          <div className="bg-white shadow-premium p-16 rounded-retail text-center border border-slate-100">
            <div className="text-7xl mb-6 opacity-20">🛒</div>
            <p className="text-slate-400 text-xl mb-8 font-medium">Your bag is currently empty.</p>
            <button
              className="px-10 py-4 bg-brand-primary text-white font-bold rounded-retail hover:bg-brand-secondary transition-all shadow-lg active:scale-95 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* List of Items (Left Side) */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center bg-white p-5 rounded-retail border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-xl bg-slate-50 border border-slate-50" 
                  />
                  
                  <div className="flex-1 ml-6">
                    <h3 className="text-lg font-bold text-brand-primary leading-tight">{item.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">Qty: {item.quantity}</p>
                    <p className="text-brand-secondary font-bold mt-2">{item.price.toFixed(2)} €</p>
                  </div>

                  <button
                    className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
              
              <button 
                onClick={() => dispatch(clearRetailCart())}
                className="text-slate-400 hover:text-red-500 text-sm font-medium transition-colors ml-2 cursor-pointer"
              >
                Clear all items
              </button>
            </div>

            {/* Summary Sidebar (Right Side) */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-retail border border-slate-100 shadow-premium sticky top-8">
                <h2 className="text-xl font-bold text-brand-primary mb-6">Order Summary</h2>
                
                <div className="space-y-4 border-b border-slate-50 pb-6 mb-6">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>{totalPrice.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-brand-primary">Total</span>
                  <span className="text-2xl font-black text-brand-primary">{totalPrice.toFixed(2)} €</span>
                </div>

                <div className="space-y-4">
                  <button
                    className="w-full py-4 bg-brand-primary text-white font-bold rounded-retail shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] hover:bg-brand-secondary hover:-translate-y-1 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </button>
                  
                  <button
                    className="w-full py-4 bg-white border-2 border-slate-100 text-slate-500 font-bold rounded-retail hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Keep Shopping
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;