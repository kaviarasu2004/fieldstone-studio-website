import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("fieldstone-theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("fieldstone-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const NotFound = () => (
  <section className="section">
    <div className="container">
      <p className="eyebrow">404</p>
      <h1>This page hasn't been specced yet.</h1>
      <p>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </p>
    </div>
  </section>
);

export default App;
