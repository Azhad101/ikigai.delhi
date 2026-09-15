/**
 * IKIGAI.DELHI V3 — Ecosystem & Partner Alliances
 * 
 * Strict protocol: Unannounced commercial tiers strictly display placeholders.
 * Zero fictional sponsors or fabricated logos.
 *
 * `openSlots: true` renders an "SLOTS OPEN" invitation tile beside the
 * confirmed logos, so every category keeps visibly recruiting sponsors.
 */

export const partnerCategories = [
  {
    label: "VENUE PARTNER",
    japanese: "会場",
    status: "SLOT OPEN",
    description: "Hosts the 2-day offline sanctuary where every squad builds, ships, and sleeps very little.",
    openSlots: true,
    openSlotsNote: "Be the first venue partner on this wall."
  },
  {
    label: "TECHNOLOGY PARTNER",
    japanese: "技術",
    status: "CONFIRMED",
    description: "Powers the stack — compute, APIs, and developer tooling builders reach for under pressure.",
    logos: [
      { name: "gen.xyz", src: "/partners/gen-xyz.png" }
    ],
    openSlots: true,
    openSlotsNote: "More technology partners welcome — APIs, cloud credits, dev tooling."
  },
  {
    label: "COMMUNITY PARTNER",
    japanese: "地域",
    status: "CONFIRMED",
    description: "Brings campus networks and builder collectives that widen who walks through the door.",
    logos: [
      { name: "German Crab", src: "/partners/german-crab.jpeg" }
    ],
    openSlots: true,
    openSlotsNote: "More communities welcome — societies, collectives, campus chapters."
  },
  {
    label: "PRIZE PARTNER",
    japanese: "賞",
    status: "CONFIRMED",
    description: "Backs the stakes — funding, credits, or hardware that make 2 days worth the odyssee.",
    logos: [
      { name: "CodeCrafters", src: "/partners/codecrafters.jpg" },
      { name: "Azka Creation", src: "/partners/azka-creation.jpeg" }
    ],
    openSlots: true,
    openSlotsNote: "More prize partners welcome — cash, credits, subscriptions, hardware."
  },
  {
    label: "FOOD PARTNER",
    japanese: "食",
    status: "SLOT OPEN",
    description: "Keeps the room fed through the night so focus never breaks for a hungry squad.",
    openSlots: true,
    openSlotsNote: "Feed the builders — meals, midnight snacks, coffee, beverages."
  }
];
