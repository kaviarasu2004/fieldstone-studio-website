import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../utils/constants";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-grid">
        <div>
          <p className="spec-label">Fieldstone Studio</p>
          <h3 className="footer-line">Design work that holds up under production.</h3>
        </div>

        <nav aria-label="Footer">
          <p className="spec-label">Sitemap</p>
          <ul className="footer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="spec-label">Contact</p>
          <ul className="footer-links">
            <li>
              <a href="mailto:hello@fieldstonestudio.example">hello@fieldstonestudio.example</a>
            </li>
            <li>
              <a href="tel:+18005550142">+1 (800) 555-0142</a>
            </li>
            <li>Chennai · Remote-first</li>
          </ul>
        </div>
      </div>

      <div className="container site-footer-bottom">
        <span className="spec-label">© {year} Fieldstone Studio</span>
        <span className="spec-label">Built with React</span>
      </div>
    </footer>
  );
};

export default Footer;
