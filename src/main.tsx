import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async"; // Προσθήκη για SEO
import store from "./store/store";
import "./i18n"; 
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!); 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider> {/* Wrap γύρω από το App */}
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);