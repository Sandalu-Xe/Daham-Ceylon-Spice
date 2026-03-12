/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-gold selection:text-brand-dark">
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        
        <AnimatedRoutes />

        <Footer />

        {/* Floating WhatsApp */}
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] overflow-hidden"
        >
          <img 
            src="https://yqdppggiipjbpowzrhok.supabase.co/storage/v1/object/sign/Logo/download%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNmE4YjRlNC1jMTY2LTQwMGEtYTI4Mi1mYWY0YjY3OGE1YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvL2Rvd25sb2FkICgxKS5wbmciLCJpYXQiOjE3NzMwMzQwNDYsImV4cCI6MTgwNDU3MDA0Nn0.aifPg_cE-GXJvNNByBQ-Yk9sAg73a0vc50TgXy0uL28" 
            alt="WhatsApp" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </a>
      </div>
    </Router>
  );
}
