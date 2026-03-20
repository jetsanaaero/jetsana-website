import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import JetSanaLogo from '@/components/svg/JetSanaLogo';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Custom X (Twitter) icon
const XIcon = ({ size = 18, className = '', strokeWidth: _sw }: { size?: number; className?: string; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Pinterest icon
const PinterestIcon = ({ size = 18, className = '', strokeWidth: _sw }: { size?: number; className?: string; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jetsana.aviation',
    icon: Instagram,
  },
  {
    label: 'X',
    href: 'https://x.com/jetsana_',
    icon: XIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/jetsana-aircraft-detailing',
    icon: Linkedin,
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/jetsanaaviation',
    icon: PinterestIcon,
  },
];

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
              className="h-18 opacity-90 transition-opacity duration-300 hover:opacity-100 lg:h-20"
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
