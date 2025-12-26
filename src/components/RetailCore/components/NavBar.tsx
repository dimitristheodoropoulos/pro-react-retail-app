import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks"; // Χρήση του Typed Hook
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";

const Navbar: React.FC = () => {
  // Χρησιμοποιούμε το useAppSelector: πλέον το 'state' έχει αυτόματο auto-complete!
  const cartItemCount = useAppSelector((state) =>
    state.retailCart.retailCart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="sticky top-0 left-0 w-full bg-slate-900 text-white py-4 shadow-lg z-50 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        {/* Left Section: Branding */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
             <div className="w-6 h-6 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            APEX<span className="text-indigo-400">RETAIL</span>
          </span>
        </Link>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-6">
          {/* Cart Icon & Counter */}
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 group p-2 rounded-md hover:bg-slate-800 transition"
          >
            <FaShoppingCart size={20} className="group-hover:text-indigo-400" />
            <span className="font-medium text-sm">Cart</span>
            
            {/* Badge: Εμφανίζεται μόνο αν το count > 0 */}
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-slate-900">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Checkout Action */}
          {cartItemCount > 0 && (
            <Link 
              to="/checkout" 
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold text-sm transition shadow-md shadow-indigo-900/20"
            >
              <FaCreditCard size={18} />
              <span>Checkout</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;