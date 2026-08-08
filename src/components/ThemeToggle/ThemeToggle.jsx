import "./ThemeToggle.css";

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-text">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
