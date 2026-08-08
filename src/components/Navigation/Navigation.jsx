import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../utils/constants";
import { classNames } from "../../utils/helpers";
import "./Navigation.css";

const Navigation = ({ open, onLinkClick }) => {
  return (
    <nav aria-label="Primary">
      <ul className={classNames("nav-links", open && "nav-links-open")}>
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              onClick={onLinkClick}
              className={({ isActive }) => classNames("nav-link", isActive && "nav-link-active")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
