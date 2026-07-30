import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
import ThemeToggle from "./ThemeToggle";

// ---------------------------------------------------------------------------
// Navbar
// Sticky top navigation shared by every page (see components/Layout.jsx).
// - Uses react-router `NavLink` so the active page is highlighted automatically.
// - Gains a stronger blur/shadow once the page is scrolled (micro-interaction
//   that adds depth without being distracting).
// - Mobile menu is a slide-down panel animated with framer-motion.
// ---------------------------------------------------------------------------
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line/10 theme-shadow"
          : "bg-bg/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto container-px flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-display leading-none select-none group"
        >
          {nav.logo.image ? (
            <img
              src={nav.logo.image}
              alt={nav.logo.alt ?? "Tanza Talks"}
              className="w-24 h-24 object-contain"
            />
          ) : (
            <span className="text-cream">{nav.logo.alt ?? "Tanza Talks"}</span>
          )}
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-9">
          {nav.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative text-sm py-1 transition-colors group ${
                  isActive ? "text-accent" : "text-cream/80 hover:text-accent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:hello@tanzatalks.com"
            className="border border-accent text-accent text-sm px-5 py-2.5 rounded-full hover:bg-accent hover:text-bg transition-colors"
          >
            {nav.cta}
          </a>
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <button
            className="text-cream"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-bg border-t border-line/10"
          >
            <div className="px-6 pb-8 pt-4 flex flex-col gap-5">
              {nav.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base ${isActive ? "text-accent" : "text-cream/80"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="mailto:hello@tanzatalks.com"
                onClick={() => setOpen(false)}
                className="mt-2 border border-accent text-accent text-sm text-center px-5 py-3 rounded-full"
              >
                {nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
