import React, { memo } from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

interface ProductCardProps {
  title: string;
  image: string;
  tag: string;
  description: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ProductCard = memo(({ title, image, tag, description }: ProductCardProps) => (
  <motion.div 
    variants={itemVariants}
    className="group"
  >
    <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-brand-dark/5 rounded-lg">
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-brand-gold text-brand-dark text-[9px] font-bold uppercase tracking-widest rounded-sm shadow-md">
          {tag}
        </span>
      </div>
      <img 
        src={`${image}&auto=format&fit=crop&q=80&w=600`} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500" />
    </div>
    <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-gold transition-colors">{title}</h3>
    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
      {description}
    </p>
    <div className="flex flex-col gap-3">
      <a 
        href={`https://wa.me/yournumber?text=Inquiry about ${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-mustard transition-colors rounded-md shadow-sm hover:shadow-md"
      >
        <MessageSquare size={14} /> Whatsapp for Quote
      </a>
      <button className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-brand-gold transition-colors text-center">
        Inquire for Bulk
      </button>
    </div>
  </motion.div>
));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Collection = memo(() => {
  const products = [
    {
      title: "Organic Chilli Powder",
      tag: "Organic Certified",
      image: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?",
      description: "Fine vibrant red powder sourced from the central province, sun-dried and cold-ground to preserve essential oils."
    },
    {
      title: "Dry Chilli Pieces",
      tag: "Premium Grade",
      image: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?",
      description: "Coarsely crushed sun-dried chillies from Matale. Balanced heat with exceptional texture for culinary exports."
    },
    {
      title: "Roasted Curry Powder",
      tag: "Heritage Blend",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?",
      description: "A complex heritage blend of 12 hand-selected spices, slow-roasted to a deep aromatic profile."
    },
    {
      title: "Organic Turmeric",
      tag: "High Curcumin",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d019cb5?",
      description: "Bright golden-yellow powder with high curcumin content, traditionally processed for pure potency."
    }
  ];

  return (
    <main className="py-32 px-6 bg-brand-cream/50 dark:bg-brand-dark/20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Signature Collection</h2>
            <p className="text-muted max-w-xl">
              Curated organic spices processed with traditional methods and modern precision.
            </p>
          </div>
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
    </main>
  );
});

export default Collection;
