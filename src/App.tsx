import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Εισαγωγή Provider
import RetailApp from './components/RetailCore/RetailApp';
import './index.css';
import './i18n';

const App: React.FC = () => {
  return (
    <HelmetProvider> {/* Senior Tip: Wrap στη ρίζα για SEO management */}
      <Router>
        <div className="App min-h-screen bg-slate-50">
          <RetailApp />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;