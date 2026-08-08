import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            ⊹
          </span>
          Fieldstone Studio
        </Link>

        <div className="site-header-right">
          <Navigation open={menuOpen} onLinkClick={() => setMenuOpen(false)} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
