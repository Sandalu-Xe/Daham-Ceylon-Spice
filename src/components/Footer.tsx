import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageSquare, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = memo(() => (
  <footer className="bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-white pt-24 pb-12 px-6 border-t border-brand-dark/5 dark:border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-auto flex items-center justify-center">
              <img 
                src="https://yqdppggiipjbpowzrhok.supabase.co/storage/v1/object/sign/Logo/WhatsApp_Image_2569-03-05_at_19.14.25-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNmE4YjRlNC1jMTY2LTQwMGEtYTI4Mi1mYWY0YjY3OGE1YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvL1doYXRzQXBwX0ltYWdlXzI1NjktMDMtMDVfYXRfMTkuMTQuMjUtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzI5OTMwNDAsImV4cCI6MTgwNDUyOTA0MH0.8ZPHZShHp45DGGR8Btb5g-fS3M5Ktp2f7O3EFDtyh8Y" 
                alt="Daham Ceylon Spice Logo" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-brand-gold uppercase">
              Daham Ceylon <span className="text-white">Spice</span>
            </span>
          </div>
          <p className="text-muted dark:text-white/50 max-w-md mb-8 leading-relaxed">
            Redefining the spice trade through ethical sourcing and uncompromising luxury. Your premium partner for Ceylon's finest exports.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-dark/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-muted dark:text-white/60">
            <li className="flex items-center gap-3"><Mail size={16} /> hello@dahamceylon.com</li>
            <li className="flex items-center gap-3"><Phone size={16} /> +94 11 234 5678</li>
            <li className="flex items-center gap-3"><MapPin size={16} /> Colombo, Sri Lanka</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted dark:text-white/60">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link to="/collection" className="hover:text-brand-gold transition-colors">The Collection</Link></li>
            <li><Link to="/certification" className="hover:text-brand-gold transition-colors">Certification</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-brand-dark/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted dark:text-white/30">
        <p>© 2026 Daham Ceylon Spice (PVT) LTD. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-dark dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-dark dark:hover:text-white transition-colors">Terms of Trade</a>
          <a href="#" className="hover:text-brand-dark dark:hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
));

export default Footer;
