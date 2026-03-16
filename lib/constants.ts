// ──────────────────────────────────────────────
// JetSana - Brand Constants & Configuration
// ──────────────────────────────────────────────

// Brand Colors
export const COLORS = {
  midnightNavy: "#0B1623",
  antiqueGold: "#C9A96E",
  warmCream: "#F5F0E8",
  slateGray: "#7A8FA3",
  deepNavy: "#1A2B3D",
  lightGold: "#D4B87A",
  white: "#FFFFFF",
  black: "#000000",
} as const;

// Airport Codes (India)
export const AIRPORT_CODES = [
  { code: "BOM", name: "Mumbai International" },
  { code: "COK", name: "Kochi International" },
  { code: "BLR", name: "Bangalore International" },
] as const;

// Service Categories & Sub-Services
export interface SubService {
  name: string;
  description: string;
  duration: string;
  priceRange: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  subServices: SubService[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "interior",
    title: "Interior Detailing",
    tagline: "Cabin perfection, down to every stitch",
    icon: "interior",
    subServices: [
      {
        name: "Leather Deep Clean & Conditioning",
        description:
          "Full restoration of leather seating, armrests, and trim using aerospace-grade conditioners that preserve suppleness and prevent cracking.",
        duration: "4-6 hours",
        priceRange: "$2,500 - $8,000",
      },
      {
        name: "Carpet & Upholstery Extraction",
        description:
          "Deep extraction cleaning of all carpet, headliner, and fabric surfaces using pH-neutral solutions safe for aviation-grade textiles.",
        duration: "3-5 hours",
        priceRange: "$1,800 - $5,500",
      },
      {
        name: "Cabin Sanitization & Odor Elimination",
        description:
          "Hospital-grade disinfection with ozone treatment and antimicrobial application for a pristine, allergen-free cabin environment.",
        duration: "2-3 hours",
        priceRange: "$1,200 - $3,000",
      },
      {
        name: "Wood & Metal Trim Restoration",
        description:
          "Hand polishing and protective coating of woodgrain veneers, brushed metals, and chrome accents to factory-fresh brilliance.",
        duration: "3-4 hours",
        priceRange: "$2,000 - $6,000",
      },
    ],
  },
  {
    id: "exterior",
    title: "Exterior Detailing",
    tagline: "A mirror finish at 40,000 feet",
    icon: "exterior",
    subServices: [
      {
        name: "Full Fuselage Wash & Decontamination",
        description:
          "Comprehensive hand wash with aviation-approved soaps, clay bar decontamination, and removal of exhaust residue, bug splatter, and hydraulic stains.",
        duration: "6-10 hours",
        priceRange: "$4,000 - $15,000",
      },
      {
        name: "Brightwork Polishing",
        description:
          "Restoration of all chrome, stainless steel, and polished aluminum surfaces including leading edges, exhaust shrouds, and landing gear components.",
        duration: "4-8 hours",
        priceRange: "$3,000 - $10,000",
      },
      {
        name: "Paint Correction & Compounding",
        description:
          "Multi-stage machine polishing to remove oxidation, swirl marks, and micro-scratches, restoring depth and clarity to the paint finish.",
        duration: "8-16 hours",
        priceRange: "$6,000 - $20,000",
      },
      {
        name: "Window & Windshield Clarity Treatment",
        description:
          "Optical-grade polishing of all windshields and cabin windows, removing hazing, mineral deposits, and light scratches for crystal-clear visibility.",
        duration: "2-4 hours",
        priceRange: "$1,500 - $4,500",
      },
    ],
  },
  {
    id: "protection",
    title: "Protection Services",
    tagline: "Shield your investment, preserve its legacy",
    icon: "shield",
    subServices: [
      {
        name: "Ceramic Coating Application",
        description:
          "Aviation-grade ceramic nano-coating providing a hydrophobic, UV-resistant barrier that protects paint for up to 24 months against environmental damage.",
        duration: "12-20 hours",
        priceRange: "$10,000 - $35,000",
      },
      {
        name: "Paint Protection Film (PPF)",
        description:
          "Self-healing thermoplastic urethane film applied to high-impact zones including leading edges, nose cone, and engine nacelles.",
        duration: "16-24 hours",
        priceRange: "$15,000 - $50,000",
      },
      {
        name: "Anti-Corrosion Treatment",
        description:
          "Application of corrosion inhibitors on critical metal surfaces, wheel wells, and undercarriage areas to extend structural integrity.",
        duration: "4-6 hours",
        priceRange: "$3,500 - $8,000",
      },
      {
        name: "Interior Fabric & Leather Protection",
        description:
          "Nano-sealant treatment for all interior soft surfaces, providing stain resistance, UV protection, and extended wear life.",
        duration: "3-5 hours",
        priceRange: "$2,000 - $6,500",
      },
    ],
  },
  {
    id: "specialized",
    title: "Specialized Services",
    tagline: "Beyond detailing, an art form",
    icon: "star",
    subServices: [
      {
        name: "Pre-Purchase Cosmetic Assessment",
        description:
          "Comprehensive cosmetic evaluation and report for aircraft buyers, documenting paint condition, interior wear, and restoration recommendations.",
        duration: "4-6 hours",
        priceRange: "$3,000 - $7,000",
      },
      {
        name: "Hangar Rash Repair & Touch-Up",
        description:
          "Precision paint matching and repair of minor dents, scuffs, and blemishes from ground handling and hangar contact.",
        duration: "4-12 hours",
        priceRange: "$2,500 - $12,000",
      },
      {
        name: "Show Preparation & Detailing",
        description:
          "Competition-grade detailing for airshows, corporate events, and sales presentations. Every surface polished to concours-level perfection.",
        duration: "16-24 hours",
        priceRange: "$12,000 - $40,000",
      },
      {
        name: "Scheduled Maintenance Wash Programs",
        description:
          "Custom recurring wash and detail packages tailored to your fleet schedule, with priority booking and dedicated service teams.",
        duration: "Ongoing",
        priceRange: "Custom quote",
      },
    ],
  },
];

// Navigation Links
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
    xSlow: 1.5,
    pageTransition: 0.8,
    stagger: 0.1,
  },
  easings: {
    smooth: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
    easeOut: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
    easeIn: [0.4, 0.0, 1.0, 1.0] as [number, number, number, number],
    easeInOut: [0.4, 0.0, 0.2, 1.0] as [number, number, number, number],
    luxury: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  },
  gsap: {
    ease: "power3.out",
    luxuryEase: "power4.inOut",
    snapEase: "back.out(1.7)",
  },
} as const;

// Company Information
export const COMPANY_INFO = {
  name: "JetSana",
  legalName: "JetSana Aviation Detailing",
  tagline: "Where Precision Meets Prestige",
  description:
    "Premium aircraft detailing services across India. We deliver meticulous craftsmanship and concours-level finishes for private jets, corporate fleets, and charter aircraft.",
  phone: "+91 94005 80020",
  email: "hello@jetsana.com",
  whatsapp: "+919400580020",
  address: {
    line1: "Mumbai",
    line2: "",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pin: "",
  },
  social: {
    instagram: "https://instagram.com/jetsana",
    linkedin: "https://linkedin.com/company/jetsana",
    youtube: "https://youtube.com/@jetsana",
  },
  hours: {
    weekdays: "7:00 AM - 7:00 PM IST",
    weekends: "8:00 AM - 5:00 PM IST",
    note: "Emergency services available 24/7",
  },
  founded: 2024,
} as const;
