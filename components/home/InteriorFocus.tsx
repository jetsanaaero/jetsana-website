'use client';

import { motion } from 'framer-motion';

const interiorServices = [
  'Leather conditioning & restoration',
  'Carpet extraction & deep cleaning',
  'Cockpit instrument panel care',
  'Wood veneer treatment',
  'Galley & lavatory sanitization',
  'Odor elimination',
];

export default function InteriorFocus() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient suggesting cabin warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1623] via-[#1A2B3D] to-[#0B1623]" />

      {/* Warm ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A96E] opacity-[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Leather texture visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            {/* SVG leather grain pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a1f12] via-[#3d2e1c] to-[#1a1208]">
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <filter id="leather">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="5" stitchTiles="stitch"/>
                  <feDiffuseLighting in="noise" lightingColor="#C9A96E" surfaceScale="1.5">
                    <feDistantLight azimuth="45" elevation="55"/>
                  </feDiffuseLighting>
                </filter>
                <rect width="100%" height="100%" filter="url(#leather)" opacity="0.4"/>
              </svg>
            </div>
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl text-[#C9A96E]/80 tracking-wide">Interior</p>
                <p className="font-display text-4xl md:text-5xl text-[#C9A96E]/60 tracking-wide">Excellence</p>
              </div>
            </div>
            {/* Gold border */}
            <div className="absolute inset-0 border border-[#C9A96E]/20 rounded-lg" />
          </motion.div>

          {/* Right: Service list */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-[#C9A96E] leading-tight mb-4"
            >
              The Art of Cabin Care
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-sm font-light text-[#7A8FA3] tracking-wide mb-10 max-w-md"
            >
              Every surface inside your aircraft receives the reverence its engineering commands.
            </motion.p>

            <div className="space-y-5">
              {interiorServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-display transition-all duration-300 group-hover:bg-[#C9A96E]/10 group-hover:border-[#C9A96E]/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-sm md:text-base font-light text-[#F5F0E8]/90 tracking-wide">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
