'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import GoldButton from '@/components/ui/GoldButton';

const aircraftTypes = [
  'Light Jet',
  'Mid-Size Jet',
  'Large Cabin Jet',
  'Turboprop',
  'Helicopter',
  'Other',
];

const serviceOptions = [
  'Interior Detailing',
  'Exterior Detailing',
  'Protection & Coating',
  'Specialized Services',
  'Custom Package',
];

const airports = [
  'BOM - Mumbai International',
  'COK - Kochi International',
  'BLR - Bangalore International',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aircraftType: '',
    service: '',
    airport: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request - ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAircraft Type: ${formData.aircraftType}\nService: ${formData.service}\nAirport: ${formData.airport}\n\nNotes:\n${formData.notes}`
    );
    window.location.href = `mailto:hello@jetsana.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0B1623] overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A96E] opacity-[0.03] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C9A96E] leading-tight"
          >
            Request a Quote
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 h-px w-20 bg-[#C9A96E]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 font-body text-base font-light text-[#7A8FA3] tracking-wide"
          >
            Tell us about your aircraft and we&apos;ll craft a tailored detailing program.
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-12 md:py-20 bg-[#0B1623]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Form */}
            <motion.form
              id="quote"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="form-input"
                />
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="form-input-wrapper">
                  <select
                    name="aircraftType"
                    value={formData.aircraftType}
                    onChange={handleChange}
                    className="form-input appearance-none bg-transparent"
                  >
                    <option value="" disabled className="bg-[#1A2B3D] text-[#7A8FA3]">Aircraft Type</option>
                    {aircraftTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#1A2B3D] text-[#F5F0E8]">{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-input-wrapper">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input appearance-none bg-transparent"
                  >
                    <option value="" disabled className="bg-[#1A2B3D] text-[#7A8FA3]">Service Needed</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#1A2B3D] text-[#F5F0E8]">{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-input-wrapper">
                  <select
                    name="airport"
                    value={formData.airport}
                    onChange={handleChange}
                    className="form-input appearance-none bg-transparent"
                  >
                    <option value="" disabled className="bg-[#1A2B3D] text-[#7A8FA3]">Airport Location</option>
                    {airports.map((a) => (
                      <option key={a} value={a} className="bg-[#1A2B3D] text-[#F5F0E8]">{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="form-input-wrapper">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Additional details about your aircraft or specific requirements..."
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

              <GoldButton type="submit" size="lg" variant="solid">
                Send Quote Request
              </GoldButton>
            </motion.form>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="rounded-lg border border-[#C9A96E]/10 bg-[#1A2B3D]/20 p-8 space-y-8">
                <h3 className="font-display text-xl text-[#C9A96E]">Direct Contact</h3>

                <div className="space-y-5">
                  <a href="tel:+919400580020" className="flex items-center gap-4 group">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/20 transition-colors group-hover:border-[#C9A96E]/50 group-hover:bg-[#C9A96E]/5">
                      <Phone size={16} className="text-[#C9A96E]" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-body text-sm text-[#F5F0E8]/80 group-hover:text-[#C9A96E] transition-colors">+91 94005 80020</p>
                      <p className="font-body text-xs text-[#7A8FA3]">Mon–Sat, 7AM–7PM IST</p>
                    </div>
                  </a>

                  <a href="mailto:hello@jetsana.com" className="flex items-center gap-4 group">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/20 transition-colors group-hover:border-[#C9A96E]/50 group-hover:bg-[#C9A96E]/5">
                      <Mail size={16} className="text-[#C9A96E]" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-body text-sm text-[#F5F0E8]/80 group-hover:text-[#C9A96E] transition-colors">hello@jetsana.com</p>
                      <p className="font-body text-xs text-[#7A8FA3]">We respond within 4 hours</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919400580020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/20 transition-colors group-hover:border-[#C9A96E]/50 group-hover:bg-[#C9A96E]/5">
                      <MessageCircle size={16} className="text-[#C9A96E]" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-body text-sm text-[#F5F0E8]/80 group-hover:text-[#C9A96E] transition-colors">WhatsApp</p>
                      <p className="font-body text-xs text-[#7A8FA3]">Quick quotes & scheduling</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Airports */}
              <div className="rounded-lg border border-[#C9A96E]/10 bg-[#1A2B3D]/20 p-8">
                <h3 className="font-display text-xl text-[#C9A96E] mb-6">Airports We Serve</h3>
                <div className="space-y-4">
                  {[
                    { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport' },
                    { code: 'COK', name: 'Cochin International Airport' },
                    { code: 'BLR', name: 'Kempegowda International Airport' },
                  ].map((airport) => (
                    <div key={airport.code} className="flex items-center gap-3">
                      <MapPin size={14} className="text-[#C9A96E] shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-display text-base text-[#C9A96E] tracking-wider">{airport.code}</span>
                        <span className="font-body text-xs text-[#7A8FA3] ml-2">{airport.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className="rounded-lg border border-[#C9A96E]/20 bg-[#C9A96E]/5 p-6 text-center">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-1">Emergency Services</p>
                <p className="font-body text-xs text-[#7A8FA3]">Available 24/7 for urgent detailing needs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
