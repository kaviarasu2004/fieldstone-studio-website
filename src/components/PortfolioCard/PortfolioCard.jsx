import "./PortfolioCard.css";

const CATEGORY_LABEL = {
  brand: "Brand Identity",
  web: "Web Design",
  system: "Design System",
  print: "Print",
};

const PortfolioCard = ({ client, category, year, summary }) => {
  return (
    <article className="portfolio-card reg-frame">
      <span className="reg-tr" aria-hidden="true" />
      <span className="reg-br" aria-hidden="true" />
      <div className="portfolio-card-top">
        <p className="spec-label">{CATEGORY_LABEL[category] ?? category}</p>
        <p className="spec-label">{year}</p>
      </div>
      <h4>{client}</h4>
      <p>{summary}</p>
    </article>
  );
};

export default PortfolioCard;
