import { createContext, useContext, useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// ThemeContext
// Holds the current theme ("dark" | "light") and a `toggleTheme` function.
// On mount it checks localStorage first, then falls back to the visitor's
// OS-level color scheme preference, then defaults to "dark".
// Whenever the theme changes, it adds/removes the "light" class on the root
// <html> element — every color in tailwind.config.js is wired to CSS
// variables that flip based on that class (see src/index.css).
// ---------------------------------------------------------------------------

const ThemeContext = createContext(null);

const STORAGE_KEY = "tanza-talks-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook — components call `const { theme, toggleTheme } = useTheme()`
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
