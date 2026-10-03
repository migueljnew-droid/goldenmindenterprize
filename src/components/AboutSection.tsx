import { availableApps, portfolioProjects } from "@/data/products";

export default function AboutSection() {
  return (
    <section id="about" tabIndex={-1} className="section-space section-shell">
      <div className="about-layout">
        <div><p className="eyebrow">The company</p><h2>Art. Intelligence.<br /><span className="gold-text">Engineering.</span></h2></div>
        <div className="about-body">
          <p>Golden Mind Enterprize LLC is an independent technology holding company building consumer apps, AI infrastructure, and creative tools.</p>
          <p>Founded by <strong>Miguel Louis Jiminez</strong>, the company brings a creator&apos;s perspective to software: make complex capabilities approachable, and give people more room to think, create, and grow.</p>
          <a href="#contact" className="text-link">Connect with Golden Mind <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="company-facts">
        <div><strong>{availableApps.length + portfolioProjects.length}</strong><span>Products &amp; platforms</span></div>
        <div><strong>{availableApps.length}</strong><span>Apps on the App Store</span></div>
        <div><strong>One</strong><span>Independent vision</span></div>
      </div>
    </section>
  );
}
