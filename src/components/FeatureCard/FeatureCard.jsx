import "./FeatureCard.css";

const FeatureCard = ({ spec, title, copy }) => {
  return (
    <div className="feature-card reg-frame">
      <span className="reg-tr" aria-hidden="true" />
      <span className="reg-br" aria-hidden="true" />
      <p className="spec-label">{spec}</p>
      <h4>{title}</h4>
      <p>{copy}</p>
    </div>
  );
};

export default FeatureCard;
