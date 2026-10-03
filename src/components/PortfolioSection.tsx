import Image from "next/image";
import { availableApps, portfolioProjects } from "@/data/products";

export default function PortfolioSection() {
  return (
    <section id="portfolio" tabIndex={-1} className="section-space section-shell">
      <div className="section-heading">
        <div><p className="eyebrow">The portfolio</p><h2>Ideas you can<br /><span className="gold-text">put to use.</span></h2></div>
        <p>Start with BioPoint and Omni, available now for iPhone. Then explore the systems and creative tools behind the wider Golden Mind portfolio.</p>
      </div>
      <div className="app-grid">
        {availableApps.map(app => (
          <article className="app-card" key={app.name} aria-labelledby={`${app.name.toLowerCase()}-title`}>
            <div className="app-copy">
              <div className="app-heading">
                <Image src={app.logo} alt="" width={60} height={60} sizes="60px" className="app-icon" />
                <div><p className="category">{app.category}</p><h3 id={`${app.name.toLowerCase()}-title`}>{app.name}</h3></div>
              </div>
              <span className="availability"><span aria-hidden="true">●</span> Available on the App Store</span>
              <h4>{app.tagline}</h4><p>{app.description}</p>
              <ul className="feature-list">{app.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
              <div className="app-links">
                <a href={app.appStore} className="btn-gold" aria-label={`Get ${app.name} on the App Store`}>Get {app.name} <span aria-hidden="true">↗</span></a>
                <a href={app.website} className="text-link" aria-label={`Visit ${app.name} website`}>Visit website <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className={`app-preview ${app.name.toLowerCase()}-preview`}>
              <Image src={app.screenshot} alt={app.screenshotAlt} width={1290} height={2796} sizes="(max-width: 600px) 200px, 220px" className="preview-image" />
            </div>
          </article>
        ))}
      </div>
      <div className="portfolio-subheading"><h3>The wider portfolio</h3><p>AI infrastructure, creative tools, and specialist platforms.</p></div>
      <div className="product-grid">
        {portfolioProjects.map(product => (
          <article key={product.name} className="card product-card">
            <div className="product-heading"><Image src={product.logo} alt="" width={52} height={52} sizes="52px" className="app-icon" /><div><p className="category">{product.category}</p><h3>{product.name}</h3></div></div>
            <p className="product-tagline">{product.tagline}</p><p>{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
