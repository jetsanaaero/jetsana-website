'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, Plane, Droplets } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    icon: Plane,
    title: 'Aircraft Interior Cabin Detailing',
    description: 'Every leather surface conditioned. Every carpet fiber restored. Your cabin, returned to its first-flight standard.',
  },
  {
    icon: Droplets,
    title: 'Aircraft Exterior Wash & Polish',
    description: 'Aviation-grade products and meticulous technique deliver a mirror finish worthy of the skies.',
  },
  {
    icon: Shield,
    title: 'Aircraft Ceramic Coating & Protection',
    description: 'Advanced nano-ceramic shields that guard against UV, corrosion, and the elements for up to 24 months.',
  },
  {
    icon: Sparkles,
    title: 'Aircraft Sanitization & Disinsection',
    description: 'WHO-compliant disinsection and hospital-grade sanitization for a pristine, allergen-free cabin.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0B1623] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A96E] opacity-[0.02] blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          title="Precision Care for Every Surface"
          subtitle="From cockpit to cabin, nose to tail — every detail receives the attention it deserves."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative rounded-lg border border-[#C9A96E]/10 bg-[#1A2B3D]/30 backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#C9A96E]/30 hover:shadow-[0_8px_30px_rgba(201,169,110,0.08)]"
            >
              <service.icon
                size={32}
                strokeWidth={1.2}
                className="text-[#C9A96E] mb-5 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="font-display text-xl text-[#F5F0E8] mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-[#7A8FA3]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
