/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Read from CSS custom properties (src/index.css) so a single class
        // toggle on <html> re-themes the entire site — day (light) / night (dark).
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        panel2: "rgb(var(--color-panel2) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        accent: "#e8792c",
        accent2: "#f2994a",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Roboto'", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgb(232 121 44 / 0.35)",
      },
    },
  },
  plugins: [],
};
