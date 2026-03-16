'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JetSilhouette } from '@/components/svg/JetSilhouette';

export default function AircraftScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Aircraft horizontal position: enters from left, moves to center
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['-100%', '0%', '0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7], [0.8, 1, 1.1, 1]);

  // Trail opacity
  const trailOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5], [0, 0.6, 0]);
  const trailWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '60%']);

  // Text fade
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.2], [40, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0B1623]">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A96E] opacity-[0.03] blur-[150px]" />

      {/* Golden trail behind aircraft */}
      <motion.div
        className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent -translate-y-1/2"
        style={{ opacity: trailOpacity, width: trailWidth }}
      />

      {/* Aircraft */}
      <motion.div
        className="relative z-10"
        style={{ x, opacity, scale }}
      >
        <JetSilhouette className="w-64 md:w-96 lg:w-[500px] h-auto" />
      </motion.div>

      {/* Accompanying text */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-10"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-display text-[#C9A96E] tracking-wide">
          Where brilliance meets aviation
        </p>
        <p className="mt-3 text-sm font-body font-light text-[#7A8FA3] tracking-widest uppercase">
          India&apos;s first specialized aircraft detailing service
        </p>
      </motion.div>
    </section>
  );
}
