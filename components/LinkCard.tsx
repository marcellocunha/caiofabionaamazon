import React from 'react';
import { motion } from 'framer-motion';
import { LinkItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const Icon = item.icon;

  /* Helper to determine styles based on variant or fallback to featured/default */
  const getCardStyles = () => {
    switch (item.variant) {
      case 'book':
        return 'bg-amber-900/30 border-amber-500/40 hover:bg-amber-900/50 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]';
      case 'store':
        return 'bg-sky-900/30 border-sky-500/40 hover:bg-sky-900/50 hover:border-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.15)]';
      default:
        return item.featured
          ? 'bg-purple-600/20 border-purple-500/50 hover:bg-purple-600/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-lg';
    }
  };

  const getIconStyles = () => {
    switch (item.variant) {
      case 'book':
        return 'bg-amber-600 text-white';
      case 'store':
        return 'bg-sky-600 text-white';
      default:
        return item.featured ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-200 group-hover:bg-white/20';
    }
  };

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative flex items-center p-4 w-full max-w-xl mx-auto mb-4 rounded-xl backdrop-blur-md transition-all duration-300 group
        ${getCardStyles()}
        border
      `}
    >
      {/* Icon Area */}
      {Icon && (
        <div className={`
          p-3 rounded-lg mr-4 transition-colors
          ${getIconStyles()}
        `}>
          <Icon size={24} />
        </div>
      )}

      {/* Text Area */}
      <div className="flex-1 text-left">
        <h3 className="text-white font-medium text-lg leading-tight">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-gray-300 text-xs sm:text-sm font-light mt-1">
            {item.subtitle}
          </p>
        )}
      </div>

      {/* Arrow Indicator (Desktop mainly, but good visual cue) */}
      <div className="ml-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        <ArrowRight className="text-white" size={20} />
      </div>
    </motion.a>
  );
};
