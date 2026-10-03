// Destinations verified against the public App Store listings on 2026-10-03.
// A missing destination does not imply a product's release or development status.
export const availableApps = [
  {
    name: "BioPoint", category: "Personal wellness", tagline: "Your routines. One clear picture.",
    description: "Bring supplement tracking, wellness routines, fasting, and health logs together in one place.",
    features: ["Daily tracking", "Wellness routines", "Progress over time"],
    logo: "/logos/apps/biopoint.png", screenshot: "/products/biopoint-preview.png",
    screenshotAlt: "BioPoint App Store preview showing fasting routines and progress tracking",
    website: "https://biopointapp.com", appStore: "https://apps.apple.com/us/app/biopoint/id6761347601",
  },
  {
    name: "Omni", category: "Spiritual wellbeing", tagline: "Make room for a daily moment of meaning.",
    description: "Explore spiritual teachings, build a meditation practice, and reflect through journaling and an AI wisdom companion.",
    features: ["Daily wisdom", "Meditation", "Guided reflection"],
    logo: "/logos/apps/omni.png", screenshot: "/products/omni-preview.jpg",
    screenshotAlt: "Omni App Store preview showing its daily wisdom screen",
    website: "https://omnispiritual.com", appStore: "https://apps.apple.com/us/app/omni-spiritual-teachings/id6760213371",
  },
];

export const portfolioProjects = [
  { name: "The Council", category: "AI infrastructure", tagline: "Coordinated intelligence", description: "A Rust-based orchestration engine for coordinating AI agents, managing memory, and routing work across language models.", logo: "/logos/apps/council.png" },
  { name: "Mercury Studio", category: "Creative technology", tagline: "A workspace for sound", description: "A digital audio workstation bringing recording, composition, and production into a focused creative environment.", logo: "/logos/apps/mercury.png" },
  { name: "Aligned", category: "Connection", tagline: "Compatibility with a different perspective", description: "A dating platform exploring astrological compatibility and AI-assisted matching to support meaningful connections.", logo: "/logos/apps/aligned.png" },
  { name: "NeoBrain", category: "Productivity", tagline: "Make knowledge useful", description: "AI-assisted knowledge management for capturing ideas, organizing information, and finding connections between your thoughts.", logo: "/logos/apps/neobrain-v2.png" },
  { name: "LANCE", category: "Legal technology", tagline: "Structure for complex information", description: "An AI-assisted framework for organizing legal research, tracking proceedings, and preparing documents for review.", logo: "/logos/apps/lance.svg" },
  { name: "SPEAR", category: "Development framework", tagline: "From specification to verification", description: "A development methodology connecting clear specifications, phased implementation, and quality checks throughout a project.", logo: "/logos/apps/spear.svg" },
];
