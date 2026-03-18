'use client';

import { motion } from 'framer-motion';
import GoldButton from '@/components/ui/GoldButton';

const milestones = [
  {
    year: '2026',
    title: 'Foundation',
    description: 'JetSana launches as India\'s first dedicated aircraft detailing brand, based in Kochi.',
  },
  {
    year: '2026–27',
    title: 'Initial Operations',
    description: 'Full-service operations across COK, BOM, and BLR airports with a growing team of trained specialists.',
  },
  {
    year: '2027–28',
    title: 'Pan-India Expansion',
    description: 'Expanding to major airports across India — Delhi, Chennai, Hyderabad.',
  },
  {
    year: '2028+',
    title: 'Gulf & Beyond',
    description: 'Bridging India and the Gulf region, bringing JetSana\'s standard to the Middle East aviation market.',
  },
];

const certifications = [
  'Boeing & Airbus approved product protocols',
  'Aviation-grade chemical safety training',
  'Aircraft surface science & materials handling',
  'Corrosion prevention & protection techniques',
  'WHO-compliant disinsection procedures',
  'Environmental compliance & waste handling',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B1623] overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A96E] opacity-[0.03] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C9A96E] leading-tight"
          >
            The JetSana Story
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 h-px w-20 bg-[#C9A96E]"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-[#0B1623]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="font-body text-base md:text-lg font-light leading-relaxed text-[#F5F0E8]/90">
              In an industry where aircraft worth crores receive the same care as a weekend car wash,
              JetSana was built to change the standard. We believe every cabin deserves the precision
              and reverence its engineering commands.
            </p>

            <div className="rounded-lg border border-[#C9A96E]/15 bg-[#1A2B3D]/20 p-8">
              <h3 className="font-display text-xl text-[#C9A96E] mb-4">The Name</h3>
              <p className="font-body text-sm font-light leading-relaxed text-[#7A8FA3]">
                <span className="text-[#C9A96E]">JetSana</span> — &ldquo;Sana&rdquo; means brilliance in Arabic
                and praise in Hindi. It&apos;s a name that bridges India and the Gulf, reflecting both our
                roots in India and our vision to serve the wider aviation world. In every detail we
                deliver, we aim to bring brilliance to aviation.
              </p>
            </div>

            <p className="font-body text-base font-light leading-relaxed text-[#F5F0E8]/80">
              Founded by aviation enthusiasts with deep expertise in surface care science,
              JetSana brings together aerospace-grade products, meticulous processes, and a team
              trained to understand not just how to care for aircraft surfaces — but why each
              material demands a specific approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training & Certifications */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0B1623] via-[#0f1c2e] to-[#0B1623]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl text-[#C9A96E] text-center mb-12"
          >
            Training & Standards
          </motion.h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-[#C9A96E]/8 bg-[#1A2B3D]/10"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A96E]" />
                </span>
                <span className="font-body text-sm font-light text-[#F5F0E8]/80">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 bg-[#0B1623]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl text-[#C9A96E] text-center mb-16"
          >
            The Road Ahead
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#C9A96E]/15 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-[#C9A96E] bg-[#0B1623] -translate-x-1.5 mt-1.5 md:-translate-x-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="font-display text-sm text-[#C9A96E]/60 tracking-wider">{milestone.year}</span>
                    <h3 className="font-display text-xl text-[#F5F0E8] mt-1">{milestone.title}</h3>
                    <p className="font-body text-sm font-light text-[#7A8FA3] mt-2 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 text-center"
          >
            <p className="font-body text-base font-light text-[#7A8FA3] mb-6">
              Be part of aviation&apos;s new standard of care.
            </p>
            <GoldButton href="/contact" size="lg">
              Get in Touch
            </GoldButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
