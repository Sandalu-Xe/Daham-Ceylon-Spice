import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Leaf } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = memo(({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'The Collection', href: '/collection' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled || location.pathname !== '/' ? "bg-brand-dark/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-12 w-auto flex items-center justify-center">
            <img 
              src="https://yqdppggiipjbpowzrhok.supabase.co/storage/v1/object/sign/Logo/WhatsApp_Image_2569-03-05_at_19.14.25-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNmE4YjRlNC1jMTY2LTQwMGEtYTI4Mi1mYWY0YjY3OGE1YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvL1doYXRzQXBwX0ltYWdlXzI1NjktMDMtMDVfYXRfMTkuMTQuMjUtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzI5OTMwNDAsImV4cCI6MTgwNDUyOTA0MH0.8ZPHZShHp45DGGR8Btb5g-fS3M5Ktp2f7O3EFDtyh8Y" 
              alt="Daham Ceylon Spice Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-bold tracking-tighter text-brand-gold uppercase hidden sm:block">
            Daham Ceylon <span className="text-white">Spice</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors",
                location.pathname === link.href ? "text-brand-gold" : "text-white/80 hover:text-brand-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hidden sm:block px-6 py-2 bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-brand-mustard transition-all transform hover:scale-105">
            Inquire
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "text-lg font-medium transition-colors",
                  location.pathname === link.href ? "text-brand-gold" : "text-white/80 hover:text-brand-gold"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full py-3 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest">
              Inquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default Navbar;
