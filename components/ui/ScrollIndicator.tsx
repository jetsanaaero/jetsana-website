'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollIndicatorProps {
  text?: string;
  className?: string;
}

export default function ScrollIndicator({
  text = 'Scroll to explore',
  className = '',
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-center gap-3 ${className}`}
        >
          {/* Mouse icon */}
          <motion.div
            className="relative w-6 h-10 rounded-full border-2 border-[#C9A96E] flex items-start justify-center pt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[#C9A96E]"
              animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Chevron */}
          <motion.svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            className="text-[#C9A96E]"
            animate={{ y: [0, 3, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            <path
              d="M1 1L8 8L15 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          {/* Text label */}
          <span className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]/70">
            {text}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
