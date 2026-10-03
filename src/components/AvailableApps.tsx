import Image from "next/image";
import { availableApps } from "@/data/products";
import "./available-apps.css";

export default function AvailableApps() {
  return (
    <div className="available-apps">
      {availableApps.map((app) => (
        <article className="available-app-card" key={app.name} aria-labelledby={`${app.name.toLowerCase()}-title`}>
          <div className="app-copy">
            <div className="app-heading">
              <Image src={app.logo} alt="" width={60} height={60} sizes="60px" className="app-icon" />
              <div>
                <p className="category">{app.category}</p>
                <h3 id={`${app.name.toLowerCase()}-title`}>{app.name}</h3>
              </div>
            </div>
            <span className="availability"><span aria-hidden="true">●</span> Available on the App Store</span>
            <h4>{app.tagline}</h4>
            <p>{app.description}</p>
            <ul className="feature-list">
              {app.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="app-links">
              <a href={app.appStore} className="btn-gold" aria-label={`Get ${app.name} on the App Store`}>
                Get {app.name} <span aria-hidden="true">↗</span>
              </a>
              <a href={app.website} className="text-link" aria-label={`Visit ${app.name} website`}>
                Visit website <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className={`app-preview ${app.name.toLowerCase()}-preview`}>
            <Image src={app.screenshot} alt={app.screenshotAlt} width={1290} height={2796} sizes="(max-width: 600px) 200px, 220px" className="preview-image" />
          </div>
        </article>
      ))}
    </div>
  );
}
