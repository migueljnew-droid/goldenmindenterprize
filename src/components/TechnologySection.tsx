const capabilities = [
  { number: "01", title: "Intelligence that works together", description: "AI orchestration brings specialist agents, memory, and model routing into coordinated workflows. The Council is the foundation of this work.", detail: "AI orchestration · Persistent memory" },
  { number: "02", title: "Tools shaped around the task", description: "From a focused mobile routine to a demanding audio workflow, the experience starts with what the person using it needs to accomplish.", detail: "Mobile experiences · Creative software" },
  { number: "03", title: "Engineering with a purpose", description: "Rust for performance-sensitive systems. React Native for mobile experiences. Next.js for the web. The technology is chosen to serve the product.", detail: "Rust · React Native · Next.js" },
];
export default function TechnologySection() {
  return (
    <section id="technology" tabIndex={-1} className="section-space section-shell">
      <div className="section-heading"><div><p className="eyebrow">Our approach</p><h2>Built with<br /><span className="gold-text">intention.</span></h2></div><p>Thoughtful experiences on the surface. Purposeful engineering underneath.</p></div>
      <div className="technology-grid">{capabilities.map(item => <article className="technology-card" key={item.number}><span className="capability-number" aria-hidden="true">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><p className="technology-detail">{item.detail}</p></article>)}</div>
    </section>
  );
}
