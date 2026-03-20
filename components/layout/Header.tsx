'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import JetSanaLogo from '@/components/svg/JetSanaLogo';
import GoldButton from '@/components/ui/GoldButton';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Handle smooth scroll for hash links on the homepage
      if (href.startsWith('/#') && pathname === '/') {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
      }
    },
    [pathname],
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#0B1623]/95 backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            isScrolled ? 'py-3' : 'py-5 lg:py-6'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="JetSana Home"
            className="relative z-10 shrink-0"
          >
            <motion.div
              animate={{
                scale: isScrolled ? 0.85 : 1,
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="origin-left"
            >
              <JetSanaLogo
                variant="mark"
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-14 lg:h-16' : 'h-20 lg:h-22'
                }`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" role="navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`font-body relative text-sm tracking-[0.12em] uppercase transition-colors duration-300 ${
                  pathname === href
                    ? 'text-[#C9A96E]'
                    : 'text-[#F5F0E8]/80 hover:text-[#C9A96E]'
                }`}
              >
                {label}
                {pathname === href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-[#C9A96E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <GoldButton href="/contact#quote" size="sm">
              Request a Quote
            </GoldButton>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 6, backgroundColor: '#C9A96E' }
                  : { rotate: 0, y: 0, backgroundColor: '#F5F0E8' }
              }
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-full"
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-6 rounded-full bg-[#F5F0E8]"
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -6, backgroundColor: '#C9A96E' }
                  : { rotate: 0, y: 0, backgroundColor: '#F5F0E8' }
              }
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-full"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B1623]/98 backdrop-blur-lg lg:hidden"
          >
            <nav
              className="flex h-full flex-col items-center justify-center gap-8"
              role="navigation"
            >
              {NAV_LINKS.map(({ label, href }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: 0.08 * index,
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                >
                  <Link
                    href={href}
                    onClick={(e) => {
                      handleNavClick(e, href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-display text-3xl tracking-wider transition-colors duration-300 ${
                      pathname === href
                        ? 'text-[#C9A96E]'
                        : 'text-[#F5F0E8]/90 hover:text-[#C9A96E]'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  delay: 0.08 * NAV_LINKS.length,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className="mt-4"
              >
                <GoldButton
                  href="/contact#quote"
                  size="md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request a Quote
                </GoldButton>
              </motion.div>

              {/* Airport codes in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-12 text-center"
              >
                <p className="font-body text-xs tracking-[0.3em] text-[#7A8FA3]/60 uppercase">
                  COK &middot; BOM &middot; BLR
                </p>
                <p className="font-body mt-1 text-[10px] tracking-wider text-[#7A8FA3]/40">
                  Cochin Intl &middot; Mumbai Intl &middot; Bangalore Intl
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
