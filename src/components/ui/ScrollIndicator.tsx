'use client';

import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-white/50 text-xs uppercase tracking-[0.3em]">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1"
      >
        <motion.div
          animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-2 bg-white/60 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
