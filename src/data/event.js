/**
 * IKIGAI.DELHI V3 — Central Event Configuration
 * 
 * Single source of truth for event logistics, dates, links, and status.
 * Any unconfirmed information is strictly marked with placeholders.
 */

export const eventConfig = {
  name: "Ikigai.delhi",
  shortName: "IKIGAI.DELHI",
  edition: "Cycle 2026",
  japaneseAnchor: "生き甲斐",
  tagline: "Find what drives you. Build what matters.",
  subTagline: "A 2-day odyssee where an ancient idea transforms into the work only you could make — in code, design, words, or art.",
  philosophyStatement: "Ikigai isn't something you find in 2 days. It is something you begin discovering.",

  // Logistics
  dateDisplay: "[DATE TO BE ANNOUNCED]",
  dateIso: null,
  duration: "2 Days",
  location: "Delhi NCR, India",
  venue: "[VENUE TO BE ANNOUNCED]",
  mode: "Offline (In-Person / Delhi NCR)",
  teamSize: "2 – 4 Builders",
  eligibility: "Open to enrolled university students — developers, designers, writers, artists, and every other kind of creator with something worth making",
  registrationFee: "100% Free (Zero Registration Fee)",
  whatToBring: "Laptop, charger, government or student ID, hardware prototypes (if applicable), and your personal curiosity. Meals, beverages, power, and high-speed Wi-Fi are provided on-site.",
  whatCanBuild: "Software applications, written works, visual art, designs, films, AI systems, open-source infrastructure, or hardware interfaces aligned with any of the 4 challenge domains. Pre-existing work is disqualified; everything must be created during the 2-day odyssee.",
  judgingCriteria: "Evaluated on four pillars: Craft & Execution, Originality of Thought, Alignment with Human Need, and a Working Final Showcase.",
  prizes: "Prize tracks, grants, compute credits, and hardware access will be announced alongside partner reveals.",

  // External Links & CTAs
  registrationStatus: "ANNOUNCING SOON", // "OPEN" | "ANNOUNCING SOON" | "CLOSED"
  registrationUrl: "[REGISTRATION LINK]",
  partnerDossierUrl: "mailto:contact@ikigai.delhi?subject=Partnership%20Inquiry%20-%20IKIGAI.DELHI",
  sponsorBrochureUrl: "mailto:contact@ikigai.delhi?subject=Sponsorship%20Inquiry%20-%20IKIGAI.DELHI",

  /**
   * "Ping me when the date drops" — where the FŪRIN date-alert form submits.
   * Paste a form endpoint here (Formspree / Getform / Basin / your own API)
   * that forwards to ikigainational@gmail.com. Example:
   *   alertFormEndpoint: "https://formspree.io/f/abcdwxyz"
   * While this stays as a placeholder, the form falls back to opening the
   * visitor's mail client instead. Nothing breaks either way.
   */
  alertFormEndpoint: "[PASTE FORM ENDPOINT URL HERE]",

  // Socials & Ecosystem (Verified links)
  socials: {
    github: "https://github.com",
    twitter: "https://x.com",
    discord: "https://discord.com/invite/CjEMBXRADP",
    instagram: "https://www.instagram.com/ikigai.delhi?stkn=emJyMGVpMXczdzlv",
    linkedin: "#",
    whatsapp: "https://chat.whatsapp.com/C89H6vaI9iD4rw0JieNUdk"
  },

  // Contact
  contactEmail: "ikigainational@gmail.com",
  pressEmail: "press@ikigai.delhi",
  contactPhoneDisplay: "+91 80763 73562",
  contactPhoneHref: "tel:+918076373562"
};
