'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Plane, Sparkles, Star, ChevronDown, Clock, DollarSign } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import GoldButton from '@/components/ui/GoldButton';

const iconMap: Record<string, React.ElementType> = {
  interior: Plane,
  exterior: Sparkles,
  shield: Shield,
  star: Star,
};

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B1623] overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#C9A96E] opacity-[0.03] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C9A96E] leading-tight"
          >
            Precision care for every surface
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 h-px w-20 bg-[#C9A96E]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 font-body text-base font-light text-[#7A8FA3] tracking-wide max-w-2xl mx-auto"
          >
            From quick turnaround cabin refreshes to comprehensive ceramic coating programs,
            every service is tailored to aviation&apos;s exacting standards.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[#0B1623]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-12">
            {SERVICES.map((category, catIndex) => {
              const Icon = iconMap[category.icon] || Star;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <Icon size={28} strokeWidth={1.2} className="text-[#C9A96E]" />
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-[#C9A96E]">{category.title}</h2>
                      <p className="font-body text-sm font-light text-[#7A8FA3] tracking-wide mt-1">{category.tagline}</p>
                    </div>
                  </div>

                  {/* Sub-services */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {category.subServices.map((service) => {
                      const serviceKey = `${category.id}-${service.name}`;
                      const isExpanded = expandedService === serviceKey;

                      return (
                        <motion.div
                          key={service.name}
                          layout
                          className="rounded-lg border border-[#C9A96E]/10 bg-[#1A2B3D]/20 overflow-hidden transition-colors duration-300 hover:border-[#C9A96E]/25"
                        >
                          <button
                            type="button"
                            onClick={() => setExpandedService(isExpanded ? null : serviceKey)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <h3 className="font-body text-sm md:text-base font-medium text-[#F5F0E8] pr-4">
                              {service.name}
                            </h3>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={18} className="text-[#C9A96E] shrink-0" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 space-y-4">
                                  <p className="font-body text-sm font-light text-[#7A8FA3] leading-relaxed">
                                    {service.description}
                                  </p>
                                  <div className="flex flex-wrap gap-4 text-xs font-body text-[#7A8FA3]">
                                    <span className="flex items-center gap-1.5">
                                      <Clock size={14} className="text-[#C9A96E]" />
                                      {service.duration}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                      <DollarSign size={14} className="text-[#C9A96E]" />
                                      {service.priceRange}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 text-center"
          >
            <p className="font-display text-2xl md:text-3xl text-[#C9A96E] mb-6">
              Need a custom package?
            </p>
            <GoldButton href="/contact" size="lg">
              Request a Quote
            </GoldButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
