import React from 'react';
import { motion } from 'framer-motion';
import { SocialItem } from '../types';

interface SocialFooterProps {
  items: SocialItem[];
}

export const SocialFooter: React.FC<SocialFooterProps> = ({ items }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex justify-center space-x-6 mt-12 mb-8"
    >
      {items.map((social, idx) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};
