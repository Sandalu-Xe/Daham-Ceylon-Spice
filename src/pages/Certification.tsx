import React, { memo } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Award, Leaf } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Certification = memo(() => {
  const certifications = [
    { name: "Organic Certified", icon: <ShieldCheck className="w-10 h-10 text-brand-gold" />, desc: "Certified by international organic standards for purity and sustainability." },
    { name: "Fair Trade", icon: <Globe className="w-10 h-10 text-brand-gold" />, desc: "Ensuring fair compensation and ethical treatment for all our farming partners." },
    { name: "ISO 22000", icon: <Award className="w-10 h-10 text-brand-gold" />, desc: "Global food safety management standards strictly followed in our facilities." },
    { name: "Non-GMO", icon: <Leaf className="w-10 h-10 text-brand-gold" />, desc: "Pure, natural seeds with no genetic modification, preserving original Ceylon flavor." }
  ];

  return (
    <main className="py-32 px-6 bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Quality Guaranteed</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Our Certifications</h2>
          <p className="text-muted dark:text-white/50 max-w-2xl mx-auto">
            We hold ourselves to the highest global standards to ensure that every grain of spice leaving our facility is of the utmost quality and safety.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-8 border border-brand-dark/10 dark:border-white/10 rounded-xl hover:border-brand-gold/50 transition-colors group text-center shadow-sm hover:shadow-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-brand-gold">{cert.name}</h3>
              <p className="text-muted dark:text-white/40 text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
});

export default Certification;
