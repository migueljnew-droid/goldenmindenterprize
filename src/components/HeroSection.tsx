import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" tabIndex={-1} className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Golden Mind Enterprize LLC</p>
        <h1>Technology for<br /><span className="gold-text">a fuller life.</span></h1>
        <p className="hero-description">We build apps for everyday wellbeing, tools for creators, and AI systems that turn ambitious ideas into useful products.</p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn-gold">Explore our apps <span aria-hidden="true">↗</span></a>
          <a href="#about" className="text-link">Meet the company <span aria-hidden="true">→</span></a>
        </div>
        <p className="hero-note">BioPoint &amp; Omni · Available on the App Store</p>
      </div>
      <Image src="/logos/GME-hero.png" alt="Golden Mind Enterprize shield" width={560} height={560} sizes="(max-width: 767px) 100px, (max-width: 1100px) 36vw, 460px" preload className="hero-mark" />
    </section>
  );
}
