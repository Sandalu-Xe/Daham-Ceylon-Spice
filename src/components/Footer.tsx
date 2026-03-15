import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.985-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Footer = memo(() => (
  <footer className="bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-white pt-24 pb-12 px-6 border-t border-brand-dark/5 dark:border-white/5 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-auto flex items-center justify-center">
              <img 
              
                src="https://yqdppggiipjbpowzrhok.supabase.co/storage/v1/object/sign/Logo/WhatsApp_Image_2569-03-05_at_19.14.25-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNmE4YjRlNC1jMTY2LTQwMGEtYTI4Mi1mYWY0YjY3OGE1YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvL1doYXRzQXBwX0ltYWdlXzI1NjktMDMtMDVfYXRfMTkuMTQuMjUtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzM2MDQ0OTIsImV4cCI6MTgwNTE0MDQ5Mn0.HEpTKZPCs-DR82bkj6Mwm3A7PldZY_fAURzGVxC28Gw" 
                alt="Daham Ceylon Spice " 
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
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "https://www.facebook.com/share/1CMNTAxyEJ/" },
              { Icon: WhatsappIcon, href: "https://wa.me/64223104144" }
            ].map(({ Icon, href }, i) => (
              <motion.a 
                key={i} 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border border-brand-dark/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-muted dark:text-white/60">
            <li>
              <a href="mailto:dahamceylonspice@gmail.com" className="flex items-center gap-3 hover:text-brand-gold transition-colors cursor-pointer">
                <Mail size={16} className="shrink-0" /> <span className="break-all">dahamceylonspice@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+64223104144" className="flex items-center gap-3 hover:text-brand-gold transition-colors cursor-pointer">
                <Phone size={16} className="shrink-0" /> +64 22 310 4144
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=24A,+Totara+View,+Wellsford,+0900,+Auckland,+New+Zealand" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand-gold transition-colors cursor-pointer">
                <MapPin size={16} className="shrink-0 mt-1" /> <span>24A, Totara View, Wellsford, 0900, Auckland, New Zealand</span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted dark:text-white/60">
            <li><Link to="/" className="hover:text-brand-gold transition-colors block transform hover:translate-x-1 duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition-colors block transform hover:translate-x-1 duration-200">About Us</Link></li>
            <li><Link to="/collection" className="hover:text-brand-gold transition-colors block transform hover:translate-x-1 duration-200">The Collection</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors block transform hover:translate-x-1 duration-200">Gallery</Link></li>
            <li><Link to="/certification" className="hover:text-brand-gold transition-colors block transform hover:translate-x-1 duration-200">Certification</Link></li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="pt-12 border-t border-brand-dark/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted dark:text-white/30"
      >
        <p>© 2026 Daham Ceylon Spice (PVT) LTD. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms of Trade</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Sitemap</a>
        </div>
      </motion.div>
    </div>
  </footer>
));

export default Footer;
