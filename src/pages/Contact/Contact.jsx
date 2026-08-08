import { useState } from "react";
import { isValidEmail } from "../../utils/helpers";
import "./Contact.css";

const INITIAL_FORM = { name: "", email: "", budget: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitted

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!isValidEmail(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) {
      next.message = "Tell us a bit about the project.";
    } else if (form.message.trim().length < 20) {
      next.message = "Add a little more detail (20 characters minimum).";
    }
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setStatus("submitted");
      setForm(INITIAL_FORM);
    }
  };

  return (
    <section className="section contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Tell us where you're headed.</h1>
          <p className="hero-lede">
            Share a bit about your business and what you need. We reply within one
            business day with next steps or a few clarifying questions.
          </p>

          <dl className="contact-details">
            <div>
              <dt className="spec-label">Email</dt>
              <dd>hello@fieldstonestudio.example</dd>
            </div>
            <div>
              <dt className="spec-label">Phone</dt>
              <dd>+1 (800) 555-0142</dd>
            </div>
            <div>
              <dt className="spec-label">Studio</dt>
              <dd>Chennai · Remote-first, working across time zones</dd>
            </div>
          </dl>
        </div>

        <form className="contact-form reg-frame" onSubmit={handleSubmit} noValidate>
          <span className="reg-tr" aria-hidden="true" />
          <span className="reg-br" aria-hidden="true" />

          {status === "submitted" && (
            <p className="form-success" role="status">
              Thanks — your message is in. We'll be in touch within one business day.
            </p>
          )}

          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="field-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="field-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="budget">Approximate budget (optional)</label>
            <select id="budget" value={form.budget} onChange={handleChange("budget")}>
              <option value="">Select a range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5-15k">$5,000 – $15,000</option>
              <option value="15k-plus">$15,000+</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className="field-error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
