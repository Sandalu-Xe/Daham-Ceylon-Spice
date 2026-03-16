import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Award, MessageSquare, Truck, ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Hero = memo(() => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Ceylon Spices"
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
            The Purest <span className="italic text-brand-gold">Ceylon Soul</span> <br /> in Every Grain.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Directly sourced from the heart of Sri Lankan hills. We deliver premium grade, ethically grown spices to the global market with unmatched purity standards.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/collection" className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-mustard transition-all transform hover:scale-105 flex items-center justify-center gap-2 rounded-full">
              Explore Collection <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center rounded-full">
              Bulk Quote (B2B)
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
});

const Features = memo(() => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-brand-gold" />,
      title: "More for Less",
      desc: "Our spices have a concentrated flavor that is more intense than other brands, meaning you use less and still achieve rich, authentic taste."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-gold" />,
      title: "Customer Service",
      desc: "Service is essential to our brand ethos. Our team is committed to quick responses and providing personalized services to meet specific needs."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-gold" />,
      title: "On-time Delivery",
      desc: "We know that timely delivery is crucial for our customers, which is why we have a reliable shipping and logistics system in place."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-brand-gold" />,
      title: "Bulk Options",
      desc: "We offer bulk pricing options for larger quantities, ideal for players in the F&B industry looking to control costs without sacrificing quality."
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-cream dark:bg-brand-dark/40">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Why Choose us?</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const CTA = memo(() => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  return (
  <section className="py-24 px-6 bg-brand-cream text-brand-dark relative overflow-hidden">
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
          <p className="text-muted text-lg mb-10 max-w-lg">
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
          className="bg-brand-dark/5 backdrop-blur-xl p-8 md:p-12 border border-brand-dark/10 rounded-xl shadow-2xl relative"
        >
          <h3 className="text-2xl font-serif mb-8">Inquiries</h3>
          
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center"
            >
              <h4 className="text-xl font-serif font-bold mb-2">Inquiry Sent Successfully!</h4>
              <p className="text-sm">Thank you for reaching out. Our export relations team will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form 
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus('submitting');
                const form = e.target as HTMLFormElement;
                const email = (form.elements[0] as HTMLInputElement).value;
                const message = (form.elements[1] as HTMLTextAreaElement).value;
                
                try {
                  const response = await fetch("https://formsubmit.co/ajax/dahamceylonspice@gmail.com", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        message,
                        _subject: "New Export Inquiry from Daham Ceylon Spice Website"
                    })
                  });
                  
                  if (response.ok) {
                    setStatus('success');
                    form.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                  } else {
                    setStatus('error');
                  }
                } catch (error) {
                  setStatus('error');
                }
              }}
            >
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:border-brand-gold outline-none transition-colors"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Tell us about your requirements" 
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:border-brand-gold outline-none transition-colors"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
              )}
              
              <motion.button 
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-mustard transition-all rounded-full disabled:opacity-70 flex justify-center items-center"
              >
                {status === 'submitting' ? (
                  <span className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Submit Export Request"
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  </section>
  );
});

const FeaturedProducts = memo(() => {
  const products = [
    {
      title: "Chilli Powder",
      tag: "Organic Certified",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?",
      description: "Fine vibrant red powder sourced from the central province, sun-dried and cold-ground to preserve essential oils."
    },
    {
      title: "Chilli Pieces",
      tag: "Premium Grade",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?",
      description: "Coarsely crushed sun-dried chillies from Matale. Balanced heat with exceptional texture for culinary exports."
    },
    {
      title: "Curry Powder",
      tag: "Heritage Blend",
      image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?",
      description: "A complex heritage blend of 12 hand-selected spices, slow-roasted to a deep aromatic profile."
    },
    {
      title: "Turmeric Powder",
      tag: "High Curcumin",
      image: "https://images.unsplash.com/photo-1532336414038-cb11d7c50218?",
      description: "Bright golden-yellow powder with high curcumin content, traditionally processed for pure potency."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-cream/50 dark:bg-brand-dark/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Featured Collection</h2>
            <p className="text-muted max-w-xl">
              A glimpse into our premium spice range, crafted for global culinary excellence.
            </p>
          </div>
          <Link to="/collection" className="inline-flex items-center gap-2 text-brand-dark dark:text-white font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
            View All Products <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((p, i) => (
            <ProductCard 
              key={i} 
              title={p.title}
              image={p.image}
              tag={p.tag}
              description={p.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Features />
      <CTA />
    </main>
  );
};

export default Home;
