import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";

// Φόρτωση Stripe Promise
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage: React.FC = () => {
  const cart = useAppSelector((state) => state.retailCart.retailCart);
  
  const totalPrice: number = cart.reduce(
    (total: number, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <div className="flex flex-col items-center bg-slate-50 min-h-screen py-16 px-4">
      {/* Header Section με έμφαση στην Τυπογραφία [cite: 83, 85] */}
      <div className="max-w-md w-full text-center mb-10">
        <h1 className="text-4xl font-black text-brand-primary mb-3 tracking-tight uppercase">
          Secure Checkout
        </h1>
        <div className="flex items-center justify-center gap-2 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-sm font-medium">Complete your purchase securely (Test Mode)</p>
        </div>
      </div>

      {/* Main Checkout Card [cite: 130] */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-retail overflow-hidden border border-slate-100 transform transition-all">
        
        {/* Header με Gradient για Premium Αίσθηση [cite: 93, 126] */}
        <div className="bg-linear-to-br from-brand-primary to-slate-800 p-8 text-white">
          <div className="flex justify-between items-center opacity-80 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest">Order Summary</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Secure SSL</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-slate-300 font-medium">Total Amount to Pay</span>
            <span className="text-3xl font-black tracking-tighter">
              {totalPrice.toFixed(2)} €
            </span>
          </div>
        </div>

        {/* Payment Form Area [cite: 145] */}
        <div className="p-8 bg-white">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px bg-slate-100 flex-1"></div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Payment Details</span>
            <div className="h-px bg-slate-100 flex-1"></div>
          </div>
          
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
          
          {/* Trust Indicators κάτω από τη φόρμα */}
          <div className="mt-8 pt-6 border-t border-slate-50">
            <div className="flex justify-center gap-4 grayscale opacity-40">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding [cite: 132, 133] */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 opacity-40">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
            alt="Stripe" 
            className="h-6" 
          />
          <div className="h-4 w-px bg-slate-400"></div>
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            Encrypted Connection
          </span>
        </div>
        <p className="text-[10px] text-slate-400 text-center max-w-62.5 leading-relaxed">
          Your payment information is processed securely. We do not store credit card details on our servers.
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;