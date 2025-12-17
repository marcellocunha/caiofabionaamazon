import React from 'react';
import { motion } from 'framer-motion';

export const LoadingOverlay: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-purple-300 border-l-transparent rounded-full animate-spin"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-white/70 font-light tracking-widest uppercase text-sm"
        >
          Carregando
        </motion.p>
      </div>
    </motion.div>
  );
};
