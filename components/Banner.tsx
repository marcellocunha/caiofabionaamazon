import React from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  imageUrl: string;
}

export const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl border border-white/10 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 pointer-events-none" />
      <img 
        src={imageUrl} 
        alt="Banner Promocional" 
        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
};
