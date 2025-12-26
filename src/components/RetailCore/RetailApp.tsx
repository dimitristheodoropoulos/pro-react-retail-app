import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailsPage from "./ProductDetailsPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ConfirmationPage from "./ConfirmationPage";
import Footer from "./components/Footer"; // Εισαγωγή του νέου Footer

const RetailApp: React.FC = () => {
  return (
    /* Το flex flex-col min-h-screen διασφαλίζει ότι το Footer θα μένει στο τέλος */
    <div className="flex flex-col min-h-screen">
      
      {/* Το main παίρνει όλο τον διαθέσιμο χώρο (flex-grow) */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Το id στην παράμετρο θα διαβαστεί από το ProductDetailsPage μέσω useParams */}
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
          
          {/* Senior Tip: Προσθήκη Catch-all route για 404 Error Handling */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Το Footer τοποθετείται έξω από το Routes για να είναι ορατό παντού */}
      <Footer />
      
    </div>
  );
};

export default RetailApp;