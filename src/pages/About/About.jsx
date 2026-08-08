import "./About.css";

const TEAM = [
  { name: "Ananya Krishnan", role: "Founder / Creative Direction" },
  { name: "Rohan Mehta", role: "Front-End Engineering" },
  { name: "Sofia Delgado", role: "Brand Strategy" },
];

const About = () => {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">The Studio</p>
          <h1>A small team that stays close to the work.</h1>
          <p className="hero-lede">
            Fieldstone Studio started in 2021 as a two-person shop taking on brand and web
            projects for local businesses. We've stayed intentionally small: three people,
            a handful of trusted collaborators, and a client roster we can actually keep
            track of.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>How we work</h2>
            <p>
              Every engagement runs through the same three stages: a discovery workshop to
              understand the business, a design phase with structured review points, and a
              build phase where design and engineering work side by side rather than
              handing off a static file.
            </p>
            <p>
              We keep projects scoped and timelines fixed. No open-ended retainers, no
              surprise invoices.
            </p>
          </div>
          <div>
            <h2>Values</h2>
            <ul className="values-list">
              <li>Production-ready over presentation-ready</li>
              <li>One accountable team from brief to launch</li>
              <li>Plain-language documentation, not jargon</li>
              <li>Small client roster, full attention</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Team</p>
          <h2>Who you'll work with</h2>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.name} className="team-card reg-frame">
                <span className="reg-tr" aria-hidden="true" />
                <span className="reg-br" aria-hidden="true" />
                <h4>{member.name}</h4>
                <p className="spec-label">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
