'use client';

import { motion } from 'framer-motion';
import GoldButton from '@/components/ui/GoldButton';
import { JetSilhouette } from '@/components/svg/JetSilhouette';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0B1623] overflow-hidden">
      {/* Aircraft taking off */}
      <motion.div
        initial={{ x: '-20%', y: '10%', opacity: 0.3, rotate: 0 }}
        whileInView={{ x: '120%', y: '-40%', opacity: 0, rotate: -15 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-0 pointer-events-none"
      >
        <JetSilhouette className="w-48 md:w-72 h-auto opacity-20" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A96E] opacity-[0.03] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C9A96E] leading-tight"
        >
          Ready for cabin perfection?
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 h-px w-16 bg-[#C9A96E]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 font-body text-base font-light text-[#7A8FA3] tracking-wide max-w-lg mx-auto"
        >
          Let us elevate your aircraft to the standard it deserves. Request a quote and experience the JetSana difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <GoldButton href="/contact" size="lg">
            Request a Quote
          </GoldButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 space-y-2"
        >
          <p className="font-body text-sm text-[#7A8FA3] font-light">
            <a href="tel:+919400580020" className="transition-colors hover:text-[#C9A96E]">+91 94005 80020</a>
            <span className="mx-3 text-[#7A8FA3]/30">|</span>
            <a href="mailto:hello@jetsana.com" className="transition-colors hover:text-[#C9A96E]">hello@jetsana.com</a>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 font-display text-lg tracking-[0.4em] text-[#C9A96E]/50"
        >
          BOM &middot; COK &middot; BLR
        </motion.p>
      </div>
    </section>
  );
}
