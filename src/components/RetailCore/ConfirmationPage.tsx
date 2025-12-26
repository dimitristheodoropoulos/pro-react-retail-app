import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-50 min-h-screen px-6 py-10">
      {/* Container με Premium Shadow και Rounded-Retail */}
      <div className="bg-white shadow-2xl rounded-retail p-12 text-center max-w-lg w-full border border-slate-100 animate-in fade-in zoom-in duration-500">
        
        {/* Success Icon με Animation */}
        <div className="mb-8 flex justify-center">
          <div className="bg-green-100 p-5 rounded-full animate-bounce">
            <svg 
              className="w-16 h-16 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Τυπογραφία χρησιμοποιώντας το Brand-Primary */}
        <h1 className="text-4xl font-black text-brand-primary mb-4 tracking-tight">
          Payment Successful!
        </h1>
        
        <div className="w-16 h-1 bg-brand-secondary mx-auto mb-6 rounded-full opacity-20"></div>
        
        <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
          Thank you for your purchase. Your order has been placed successfully and is now being processed by our team.
        </p>

        <div className="flex flex-col gap-4">
          {/* Αναβαθμισμένο Κουμπί με Brand Colors */}
          <Link
            to="/"
            className="px-8 py-4 bg-brand-primary text-white font-bold rounded-retail hover:bg-brand-secondary transition-all shadow-xl shadow-brand-secondary/10 active:scale-95 flex items-center justify-center gap-3"
          >
            <span>🛍️</span>
            Continue Shopping
          </Link>
          
          <div className="mt-8 pt-8 border-t border-slate-50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Order Details Sent
            </p>
            <p className="text-sm text-slate-400">
              A confirmation email is on its way to your inbox.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements (Προαιρετικά) */}
      <p className="mt-8 text-slate-300 text-xs font-medium">
        Order ID: #REC-{Math.floor(Math.random() * 1000000)}
      </p>
    </div>
  );
};

export default ConfirmationPage;