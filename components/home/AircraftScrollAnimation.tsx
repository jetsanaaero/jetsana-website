'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JetSilhouette } from '@/components/svg/JetSilhouette';

export default function AircraftScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end start'],
  });

  // Aircraft flies straight through from left to right
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['-120%', '120%']
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1, 0.85]
  );

  // Golden trail behind aircraft — follows the jet
  const trailOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 0.5, 0.3, 0]);
  const trailWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '60%']);

  // Jet blast / engine exhaust
  const blastOpacity = useTransform(scrollYProgress, [0, 0.08, 0.85, 1], [0, 0.7, 0.5, 0]);
  const blastScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  // Text fades in as jet passes through center
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.15, 0.3], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0B1623]"
    >
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A96E] opacity-[0.03] blur-[150px]" />

      {/* Golden trail behind aircraft */}
      <motion.div
        className="absolute top-[45%] left-0 h-[2px] -translate-y-1/2"
        style={{
          opacity: trailOpacity,
          width: trailWidth,
          background: 'linear-gradient(90deg, transparent 0%, #C9A96E40 40%, #C9A96E 100%)',
        }}
      />

      {/* Aircraft with jet blast */}
      <motion.div
        className="relative z-10"
        style={{ x, opacity, scale }}
      >
        {/* Single engine exhaust / jet blast — positioned behind the engines (left side since jet is flipped) */}
        <motion.div
          className="absolute top-[42%] right-[85%] -translate-y-1/2 pointer-events-none"
          style={{ opacity: blastOpacity, scaleX: blastScale }}
        >
          {/* Main blast stream */}
          <div
            className="absolute top-0 right-0 w-[120px] md:w-[180px] lg:w-[220px] h-[6px] md:h-[8px] rounded-full origin-right"
            style={{
              background: 'linear-gradient(270deg, #C9A96E 0%, #C9A96E80 25%, #C9A96E30 60%, transparent 100%)',
              filter: 'blur(2px)',
            }}
          />
          {/* Glow core */}
          <div
            className="absolute -top-[1px] right-0 w-[60px] md:w-[90px] lg:w-[110px] h-[8px] md:h-[10px] rounded-full origin-right"
            style={{
              background: 'linear-gradient(270deg, #FFF5E0 0%, #C9A96E 40%, transparent 100%)',
              filter: 'blur(3px)',
            }}
          />
          {/* Heat haze */}
          <div
            className="absolute -top-[12px] right-0 w-[80px] md:w-[120px] lg:w-[150px] h-[30px] md:h-[36px] rounded-full origin-right"
            style={{
              background: 'radial-gradient(ellipse at right, #C9A96E15 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>

        <JetSilhouette className="w-72 md:w-[420px] lg:w-[520px] h-auto" />
      </motion.div>

      {/* Accompanying text */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 text-center z-10 w-full px-6"
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
