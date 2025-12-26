import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-black text-brand-primary tracking-tighter mb-4">
            PRO RETAIL<span className="text-brand-secondary">.</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Premium gadgets and technology for the modern professional. Quality and style in every piece.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-6">Shop</h3>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li><Link to="/" className="hover:text-brand-secondary transition-colors">All Products</Link></li>
            <li><Link to="/" className="hover:text-brand-secondary transition-colors">New Arrivals</Link></li>
            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Discounts</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-6">Support</h3>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-brand-secondary transition-colors">Shipping Info</Link></li>
            <li><Link to="/returns" className="hover:text-brand-secondary transition-colors">Returns</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-6">Newsletter</h3>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 w-full"
            />
            <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-secondary transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 font-medium">
          © 2025 Pro Retail App. All rights reserved. Built with Tailwind v4.
        </p>
        <div className="flex gap-6 opacity-40 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;