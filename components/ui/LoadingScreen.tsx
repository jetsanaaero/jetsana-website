'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B1623]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1
              className="text-4xl md:text-5xl tracking-[0.3em] font-display text-transparent bg-clip-text shimmer-gold"
              style={{
                backgroundImage:
                  'linear-gradient(110deg, #C9A96E 0%, #D4B87A 30%, #F5F0E8 50%, #D4B87A 70%, #C9A96E 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s ease-in-out infinite',
              }}
            >
              JETSANA
            </h1>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            />
            <motion.p
              className="text-[10px] tracking-[0.25em] uppercase text-[#7A8FA3] font-body font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Aircraft Detailing Specialists
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
