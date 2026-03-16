'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/ui/TypewriterText';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

// Deterministic pseudo-random for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export default function HeroSection() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        left: seededRandom(i * 3 + 1) * 100,
        top: seededRandom(i * 3 + 2) * 100,
        duration: 3 + seededRandom(i * 3 + 3) * 4,
        delay: seededRandom(i * 3 + 4) * 3,
      })),
    [],
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0B1623]">
      {/* Subtle particle/star background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px rounded-full bg-[#C9A96E]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Ambient gold orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C9A96E] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#D4B87A] opacity-[0.03] blur-[100px]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise-texture" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display tracking-[0.3em] text-[#C9A96E]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          JETSANA
        </motion.h1>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ duration: 1.2, delay: 3, ease: 'easeOut' }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.4 }}
        >
          <TypewriterText
            text="Aircraft Detailing Specialists"
            speed={60}
            className="text-lg md:text-xl font-body font-light tracking-widest text-[#F5F0E8]"
          />
        </motion.div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent mt-2"
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 1, delay: 5, ease: 'easeOut' }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
