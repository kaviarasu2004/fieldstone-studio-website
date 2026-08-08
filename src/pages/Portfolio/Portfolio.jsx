import { useMemo, useState } from "react";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { PORTFOLIO } from "../../utils/constants";
import { classNames } from "../../utils/helpers";
import "./Portfolio.css";

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "brand", label: "Brand Identity" },
  { id: "web", label: "Web Design" },
  { id: "system", label: "Design Systems" },
  { id: "print", label: "Print" },
];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return PORTFOLIO;
    return PORTFOLIO.filter((item) => item.category === active);
  }, [active]);

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">Selected Work</p>
          <h1>Case studies from the last three years.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-row" role="tablist" aria-label="Filter work by discipline">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active === f.id}
                className={classNames("filter-pill", active === f.id && "filter-pill-active")}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="portfolio-grid">
              {filtered.map((item) => (
                <PortfolioCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <p className="empty-state">Nothing filed under this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
