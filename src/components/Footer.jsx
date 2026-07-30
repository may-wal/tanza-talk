import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { footer, nav } from "../data/content";
import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// Footer
// Newsletter panel + 3-column link grid + social icons + legal line.
// Internal links use react-router `Link`; external ones (mailto/tel) use a
// plain <a>. Shared across every page via components/Layout.jsx.
// ---------------------------------------------------------------------------
export default function Footer() {
  return (
    <footer className="max-w-8xl mx-auto container-px pb-10 pt-4">
      <Reveal className="border-t border-line/10 pt-14 grid md:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr] gap-10">
        {/* Brand + tagline + socials */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 font-display leading-none group"
          >
            {nav.logo.image ? (
              <img
                src={nav.logo.image}
                alt={nav.logo.alt ?? "Tanza Talks"}
                className="w-40 h-40 object-contain"
              />
            ) : (
              <span className="text-cream">
                {nav.logo.alt ?? "Tanza Talks"}
              </span>
            )}
          </Link>
          <p className="text-cream/50 text-sm mt-4 max-w-[220px]">
            {footer.tagline}
          </p>
          <div className="flex gap-4 mt-6">
            <FaInstagram
              size={16}
              className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
            />
            <FaYoutube
              size={16}
              className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
            />
            <FaLinkedin
              size={16}
              className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
            />
            <Mail
              size={16}
              className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
            />
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-cream text-sm font-medium mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) =>
                l.external ? (
                  <li key={l.label}>
                    <a
                      href={l.to}
                      className="text-cream/50 text-sm hover:text-accent transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-cream/50 text-sm hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="text-cream text-sm font-medium mb-3">
            {footer.newsletter.title}
          </h4>
          <p className="text-cream/50 text-sm mb-4">
            {footer.newsletter.subtitle}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-panel2 rounded-full pl-4 pr-1.5 py-1.5 border border-line/15 focus-within:border-accent transition-colors"
          >
            <input
              type="email"
              required
              placeholder={footer.newsletter.placeholder}
              className="bg-transparent text-sm text-cream placeholder:text-cream/40 flex-1 outline-none min-w-0"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-8 h-8 shrink-0 rounded-full bg-accent text-bg flex items-center justify-center hover:bg-accent2 transition-colors hover:scale-105 active:scale-95"
            >
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </Reveal>

      <div className="border-t border-line/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/40">
        <span>{footer.copyright}</span>
        <span>{footer.designedBy}</span>
      </div>
    </footer>
  );
}
