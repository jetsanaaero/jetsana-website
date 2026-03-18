import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import JetSanaLogo from '@/components/svg/JetSanaLogo';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/jetsana',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/jetsana',
    icon: Linkedin,
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1623]" role="contentinfo">
      {/* Gold gradient line at top */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #C9A96E20 20%, #C9A96E 50%, #C9A96E20 80%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="JetSana Home">
            <JetSanaLogo
              variant="full"
              className="h-10 opacity-90 transition-opacity duration-300 hover:opacity-100 lg:h-12"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm tracking-[0.12em] text-[#7A8FA3] uppercase transition-colors duration-300 hover:text-[#C9A96E]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#7A8FA3]/20 transition-all duration-300 hover:border-[#C9A96E]/50 hover:bg-[#C9A96E]/10"
            >
              <Icon
                size={18}
                className="text-[#7A8FA3] transition-colors duration-300 group-hover:text-[#C9A96E]"
                strokeWidth={1.5}
              />
            </a>
          ))}
        </div>

        {/* Airport Codes */}
        <div className="mt-10 text-center">
          <p className="font-display text-lg tracking-[0.4em] text-[#C9A96E]/70 lg:text-xl">
            COK &middot; BOM &middot; BLR
          </p>
          <p className="font-body mt-2 text-xs tracking-wider text-[#7A8FA3]/50">
            Cochin International &middot; Chhatrapati Shivaji Maharaj International &middot; Kempegowda International
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="mailto:hello@jetsana.com"
            className="font-body group inline-flex items-center gap-2 text-sm text-[#7A8FA3] transition-colors duration-300 hover:text-[#C9A96E]"
          >
            <Mail
              size={15}
              strokeWidth={1.5}
              className="transition-colors duration-300 group-hover:text-[#C9A96E]"
            />
            hello@jetsana.com
          </a>
          <a
            href="tel:+919400580020"
            className="font-body group inline-flex items-center gap-2 text-sm text-[#7A8FA3] transition-colors duration-300 hover:text-[#C9A96E]"
          >
            <Phone
              size={15}
              strokeWidth={1.5}
              className="transition-colors duration-300 group-hover:text-[#C9A96E]"
            />
            +91 94005 80020
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px max-w-xs bg-[#7A8FA3]/10" />

        {/* Copyright */}
        <p className="font-body mt-6 text-center text-xs tracking-wide text-[#7A8FA3]/50">
          &copy; 2026 JetSana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
