import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// ---------------------------------------------------------------------------
// ThemeToggle
// Flips the whole site between night (dark) and day (light) layouts. The
// icon itself animates — rotating/fading between sun and moon — as a small
// piece of delight rather than an instant swap.
// ---------------------------------------------------------------------------
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to night mode" : "Switch to day mode"}
      title={isLight ? "Switch to night mode" : "Switch to day mode"}
      className={`relative w-10 h-10 shrink-0 rounded-full border border-line/15 flex items-center justify-center text-cream overflow-hidden hover:border-accent hover:text-accent transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isLight ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isLight ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
