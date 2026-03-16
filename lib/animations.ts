// GSAP ScrollTrigger configurations for the JetSana website
// These are applied client-side only

export const SCROLL_CONFIG = {
  aircraft: {
    trigger: '.aircraft-scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    pin: false,
  },
  fadeIn: {
    trigger: '.fade-trigger',
    start: 'top 80%',
    end: 'top 20%',
    scrub: false,
    toggleActions: 'play none none reverse' as const,
  },
  horizontalScroll: {
    trigger: '.horizontal-scroll-section',
    start: 'top top',
    end: () => '+=300%',
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
};

// Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

export const goldGlow = {
  initial: { boxShadow: '0 0 0 rgba(201, 169, 110, 0)' },
  hover: {
    boxShadow: '0 0 30px rgba(201, 169, 110, 0.3)',
    transition: { duration: 0.3 },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 0 0 rgba(201, 169, 110, 0)',
  },
  hover: {
    y: -4,
    boxShadow: '0 8px 30px rgba(201, 169, 110, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Viewport trigger settings for Framer Motion
export const viewportOnce = {
  once: true,
  margin: '-100px',
};

export const viewportRepeat = {
  once: false,
  margin: '-50px',
};
