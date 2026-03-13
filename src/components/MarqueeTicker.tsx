"use client";

/**
 * Infinite marquee ticker — the kind of element that separates
 * agency sites from templates. Runs between hero and about.
 */
const items = [
  "SOVEREIGN Engine",
  "400+ AI Agents",
  "Mercury Studio",
  "Rust-First Architecture",
  "Aligned",
  "Omni",
  "NeoBrain",
  "LANCE Framework",
  "SPEAR Methodology",
  "Council Cloud",
  "10 LLM Providers",
  "24/7 Operations",
];

export default function MarqueeTicker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative py-8 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050a18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050a18] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 whitespace-nowrap"
          >
            <span
              className="text-[0.65rem] md:text-[0.75rem] tracking-[0.35em] uppercase text-[#e8c547]"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              {item}
            </span>
            <span className="text-[#c9a227]/40 text-xs">&loz;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
