import { Link } from "react-router-dom";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { FEATURES, TESTIMONIALS } from "../../utils/constants";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Brand & Web Design Studio</p>
          <h1 className="hero-title">
            We design the parts of your business people actually remember.
          </h1>
          <p className="hero-lede">
            Fieldstone is a small studio building brand identities and web products for
            founders who care about the details as much as they do. Strategy, design, and
            production, handled by one team from brief to launch.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn">
              Start a project
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Four disciplines, one accountable team.</h2>
          <div className="features-grid">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <p className="eyebrow">Client notes</p>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="testimonial reg-frame">
                <span className="reg-tr" aria-hidden="true" />
                <span className="reg-br" aria-hidden="true" />
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span className="spec-label">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Have a project in mind?</h2>
          <p>We take on a small number of engagements each quarter. Tell us where you're headed.</p>
          <Link to="/contact" className="btn">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
