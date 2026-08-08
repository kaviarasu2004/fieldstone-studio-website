import { Link } from "react-router-dom";
import { SERVICES } from "../../utils/constants";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Scoped engagements, not open-ended retainers.</h1>
          <p className="hero-lede">
            Every project starts with a fixed scope and a clear deliverable list, so you know
            what you're getting and when.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-card reg-frame">
              <span className="reg-tr" aria-hidden="true" />
              <span className="reg-br" aria-hidden="true" />
              <div className="service-card-head">
                <h3>{service.title}</h3>
                <p className="spec-label">{service.price}</p>
              </div>
              <p>{service.summary}</p>
              <ul className="deliverables">
                {service.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Not sure which one fits?</h2>
          <p>Send a short brief and we'll recommend a scope in one business day.</p>
          <Link to="/contact" className="btn">
            Send a brief
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
