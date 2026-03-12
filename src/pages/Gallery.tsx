import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import { fetchImages, ImageItem } from '../services/imageService';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Gallery = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImages();
        setImages(data);
      } catch (err) {
        setError('Failed to load images from the server.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark">
        <Loader2 className="w-10 h-10 text-brand-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-brand-gold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Explore our collection of premium Ceylon spices, captured directly from our plantations and processing facilities.
          </motion.p>
        </header>

        {error ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {images.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/3]"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-serif text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {images.length === 0 && !loading && !error && (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <ImageIcon className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <p className="text-white/40">No images found in the gallery.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
