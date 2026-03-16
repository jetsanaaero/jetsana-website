'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClasses = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignmentClasses} ${className}`}
    >
      <h2 className="font-cormorant-garamond text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#C9A96E] leading-tight">
        {title}
      </h2>

      {/* Animated gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 mb-4 h-px w-16 md:w-24 bg-[#C9A96E]"
        style={{ originX: alignment === 'center' ? 0.5 : 0 }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="max-w-2xl font-montserrat text-sm md:text-base font-light leading-relaxed text-[#7A8FA3] tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
