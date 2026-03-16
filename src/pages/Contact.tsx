import React, { memo } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = memo(() => (
  <main className="py-32 px-6 bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-white min-h-screen flex items-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img 
        src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1920" 
        alt="Spice Background" 
        className="w-full h-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
            Partner with the Soul of Ceylon
          </h2>
          <p className="text-muted dark:text-white/70 text-lg mb-10 max-w-lg">
            For global B2B partnerships and bulk export inquiries, please provide your details and our export relations team will reach out within 24 hours.
          </p>
          <div className="flex flex-col gap-6">
            <motion.a 
              href="mailto:dahamceylonspice@gmail.com"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Mail className="text-brand-gold w-5 h-5" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest break-all">dahamceylonspice@gmail.com</span>
            </motion.a>
            <motion.a 
              href="https://wa.me/64223104144"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Phone className="text-brand-gold w-5 h-5" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">JOIN OUR WHATSAPP CHANNEL</span>
            </motion.a>
            <motion.a 
              href="https://www.google.com/maps/search/?api=1&query=24A,+Totara+View,+Wellsford,+0900,+Auckland,+New+Zealand"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                <MapPin className="text-brand-gold w-5 h-5" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest leading-relaxed">24A, Totara View, Wellsford, 0900, Auckland, New Zealand</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-brand-dark/5 dark:bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-brand-dark/10 dark:border-white/10 rounded-xl shadow-2xl"
        >
          <h3 className="text-2xl font-serif mb-8">Inquiries</h3>
          <form 
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements[0] as HTMLInputElement).value;
              const message = (form.elements[1] as HTMLTextAreaElement).value;
              window.location.href = `mailto:dahamceylonspice@gmail.com?subject=Export Inquiry from ${email}&body=${encodeURIComponent(message)}`;
            }}
          >
            <div>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-transparent border-b border-brand-dark/20 dark:border-white/20 py-3 text-brand-dark dark:text-white focus:border-brand-gold dark:focus:border-brand-gold outline-none transition-colors placeholder:text-brand-dark/50 dark:placeholder:text-white/50"
                required
              />
            </div>
            <div>
              <textarea 
                placeholder="Tell us about your requirements" 
                rows={4}
                className="w-full bg-transparent border-b border-brand-dark/20 dark:border-white/20 py-3 text-brand-dark dark:text-white focus:border-brand-gold dark:focus:border-brand-gold outline-none transition-colors placeholder:text-brand-dark/50 dark:placeholder:text-white/50"
                required
              />
            </div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-mustard transition-all rounded-full"
            >
              Submit Export Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </main>
));

export default Contact;
