'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Inspect',
    description: 'Every surface assessed before we begin',
  },
  {
    number: '02',
    title: 'Protect',
    description: 'Critical sensors and instruments masked',
  },
  {
    number: '03',
    title: 'Detail',
    description: 'Aviation-grade products, meticulous technique',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Final inspection, photographic documentation',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1623] via-[#0f1c2e] to-[#0B1623]" />

      {/* Subtle diagonal lines (fuselage panel line aesthetic) */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#C9A96E" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#diag)"/>
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
          Our Process
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto h-px w-16 bg-[#C9A96E] mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center p-8"
            >
              {/* Large number */}
              <span className="font-display text-7xl md:text-8xl text-[#C9A96E]/15 leading-none block transition-colors duration-300 group-hover:text-[#C9A96E]/25">
                {step.number}
              </span>

              <h3 className="mt-4 font-display text-2xl text-[#C9A96E] tracking-wide">
                {step.title}
              </h3>

              <p className="mt-3 font-body text-sm font-light text-[#7A8FA3] leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-px bg-[#C9A96E]/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
