'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  {
    value: 'Aviation-Grade',
    label: 'Products & Standards',
    sublabel: 'Only Boeing & Airbus approved products',
  },
  {
    value: 'First in India',
    label: 'Dedicated Aircraft Detailer',
    sublabel: "India's specialized aviation care",
  },
  {
    value: 'COK · BOM · BLR',
    label: 'Airports Served',
    sublabel: 'Cochin International · Chhatrapati Shivaji Maharaj International · Kempegowda International',
  },
];

export default function WhyJetSana() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0B1623] overflow-hidden">
      {/* Subtle topographic/map pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 100 Q50 80 100 100 T200 100" fill="none" stroke="#C9A96E" strokeWidth="0.5"/>
            <path d="M0 60 Q50 40 100 60 T200 60" fill="none" stroke="#C9A96E" strokeWidth="0.3"/>
            <path d="M0 140 Q50 120 100 140 T200 140" fill="none" stroke="#C9A96E" strokeWidth="0.3"/>
            <path d="M0 180 Q50 165 100 180 T200 180" fill="none" stroke="#C9A96E" strokeWidth="0.4"/>
            <path d="M0 20 Q50 10 100 20 T200 20" fill="none" stroke="#C9A96E" strokeWidth="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#topo)"/>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-display text-3xl md:text-4xl lg:text-5xl text-[#C9A96E] mb-4"
        >
          Why JetSana
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto h-px w-16 bg-[#C9A96E] mb-16"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C9A96E] leading-none tracking-wide">
                  {stat.value}
                </p>
                <p className="mt-4 font-body text-sm md:text-base uppercase tracking-[0.15em] text-[#F5F0E8]">
                  {stat.label}
                </p>
                <p className="mt-2 font-body text-xs tracking-wider text-[#7A8FA3] font-light">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
