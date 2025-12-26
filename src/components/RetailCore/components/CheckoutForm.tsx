import React, { useState, FormEvent } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useAppDispatch } from "../../../store/hooks";
import { clearRetailCart } from "../../../store/retailCartSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMessage(null);

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setErrorMessage(error.message || "An unexpected error occurred.");
        setIsProcessing(false);
      } else {
        console.log("Stripe Payment Method Created:", paymentMethod.id);
        
        // UX αίσθηση επεξεργασίας
        setTimeout(() => {
          setIsProcessing(false);
          dispatch(clearRetailCart());
          navigate("/confirmation");
        }, 2000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">
          Card Information
        </label>
        
        {/* Επαγγελματικό Container για το Stripe Element */}
        <div className={`
          p-4 rounded-xl border transition-all duration-300 bg-slate-50
          ${errorMessage ? "border-red-300 ring-2 ring-red-50" : "border-slate-200 focus-within:border-brand-secondary focus-within:ring-4 focus-within:ring-brand-secondary/10 focus-within:bg-white"}
        `}>
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#0f172a', // brand-primary
                  fontFamily: '"Inter", sans-serif',
                  '::placeholder': { color: '#94a3b8' }, // slate-400
                },
                invalid: {
                  color: '#dc2626', // red-600
                  iconColor: '#dc2626',
                },
              },
            }}
          />
        </div>
      </div>

      {/* Pay Button με Loading State */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`
          w-full py-4 rounded-retail text-white font-bold tracking-wide
          transition-all duration-300 flex items-center justify-center gap-3
          ${isProcessing 
            ? "bg-slate-400 cursor-not-allowed opacity-70" 
            : "bg-brand-primary hover:bg-brand-secondary shadow-lg hover:shadow-brand-secondary/30 active:scale-[0.98] cursor-pointer"
          }
        `}
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>🔒</span>
            <span>Complete Payment</span>
          </>
        )}
      </button>

      {/* Error Message Section */}
      {errorMessage && (
        <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <span className="text-red-500">⚠️</span>
            <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
          </div>
        </div>
      )}
      
      <p className="text-[10px] text-slate-400 text-center mt-6 font-medium uppercase tracking-tighter">
        Your data is encrypted and secure
      </p>
    </form>
  );
};

export default CheckoutForm;