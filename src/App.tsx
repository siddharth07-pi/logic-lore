import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { StoryPage } from './pages/StoryPage';
import { ForSchoolsPage } from './pages/ForSchoolsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#071426] text-[#F8FAFC]">
          {/* Main Global Header */}
          <Navbar />

          {/* Page Body */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/the-last-spark" element={<ProductDetailsPage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/for-schools" element={<ForSchoolsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* Catch-all route redirecting to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Interactive Toasts & Global Footer */}
          <NotificationToast />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
