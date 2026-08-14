import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, Clapperboard } from "lucide-react";
import { whatsNew } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import MagButton from "./MagButton";

const artIcons = { clapperboard: Clapperboard };

// ---------------------------------------------------------------------------
// WhatsNew
//
// The announcement slot on Home, built as the two-column feature panel the
// old FeaturedSeries component used: typographic art card on the left, copy
// + optional stats + CTA(s) on the right, dots underneath.
//
// Data-driven over `whatsNew.items` — currently just the one Journey of
// Legacy card, but built to carry more without a rewrite. Dots only render
// once there's more than one item, and only appear when there's something
// to switch between (they drive the carousel; they're not decorative).
// Slides cross-fade via AnimatePresence with `mode="wait"` so the outgoing
// panel clears before the next arrives. `stats`, `note` and `secondaryCta`
// are all optional per item and simply don't render when absent.
//
// The art card is typographic rather than photographic — there's no
// artwork for the announcements this renders yet.
// ---------------------------------------------------------------------------

// Left-hand art card — a warm gradient panel with the slide's own wordmark.
function ArtCard({ art }) {
  const Icon = artIcons[art.icon];

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-panel2">
      {/* Base gradient + warm glow, echoing the Monogram tiles used elsewhere */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, hsl(28 45% 14%) 0%, hsl(24 38% 8%) 58%, hsl(20 30% 5%) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 62% 26%, rgba(232,121,44,0.26) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />

      {Icon && (
        <Icon
          size={30}
          className="absolute top-6 right-6 text-accent/40"
          aria-hidden="true"
        />
      )}

      <div className="absolute bottom-6 left-6 right-6">
        <span className="text-[11px] tracking-[0.3em] text-cream/60">
          {art.overline}
        </span>
        <h3 className="font-display text-4xl sm:text-5xl text-cream mt-1 leading-none">
          {art.word}
        </h3>
      </div>
    </div>
  );
}

export default function WhatsNew() {
  const [active, setActive] = useState(0);
  const items = whatsNew.items;
  const item = items[active];

  const go = useCallback((i) => setActive(i), []);

  return (
    <section id="whats-new" className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="bg-panel rounded-3xl border border-line/10 p-4 sm:p-6 lg:p-8 theme-shadow">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Art card */}
            <div>
              <TiltCard max={5}>
                <ArtCard art={item.art} />
              </TiltCard>
            </div>

            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-accent text-xs tracking-[0.2em] font-medium">
                {item.upcoming && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}
                {item.eyebrow}
              </span>

              <h2 className="font-display text-3xl sm:text-4xl mt-3 text-cream">
                {item.title}
              </h2>
              <p className="text-cream/60 mt-4 max-w-md leading-relaxed">
                {item.description}
              </p>

              {/* Stats row — omitted entirely when a slide has no figures,
                  rather than rendering an empty strip. */}
              {item.stats && (
                <div className="flex gap-10 mt-8">
                  {item.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-2xl text-accent">
                        {s.value}
                      </div>
                      <div className="text-xs text-cream/50 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {item.note && (
                <p className="text-cream/40 text-sm mt-8">{item.note}</p>
              )}

              <div className="flex flex-wrap gap-4 mt-9">
                <MagButton
                  as={item.primaryCta.external ? "a" : Link}
                  {...(item.primaryCta.external
                    ? {
                        href: item.primaryCta.to,
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : { to: item.primaryCta.to })}
                  className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3.5 rounded-full hover:bg-accent2 transition-colors"
                >
                  {item.primaryCta.label}
                  {item.primaryCta.icon === "play" ? (
                    <span className="w-5 h-5 rounded-full bg-bg/20 flex items-center justify-center">
                      <Play size={9} fill="currentColor" />
                    </span>
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </MagButton>

                {item.secondaryCta && (
                  <MagButton
                    as={Link}
                    to={item.secondaryCta.to}
                    className="inline-flex items-center gap-2 border border-cream/30 text-cream text-sm px-6 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors"
                  >
                    {item.secondaryCta.label} <ArrowRight size={16} />
                  </MagButton>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots — one per item, and they actually navigate */}
        {items.length > 1 && (
          <div
            className="flex justify-center gap-2 mt-8"
            role="tablist"
            aria-label={whatsNew.eyebrow}
          >
            {items.map((it, i) => (
              <button
                key={it.id}
                role="tab"
                aria-selected={i === active}
                aria-label={it.title}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-300 hover:bg-accent/70 ${
                  i === active ? "w-6 bg-accent" : "w-1.5 bg-cream/20"
                }`}
              />
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
