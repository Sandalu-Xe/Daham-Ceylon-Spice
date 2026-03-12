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
        href={`https://wa.me/64223104144?text=Inquiry about ${title}`}
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

export default ProductCard;
