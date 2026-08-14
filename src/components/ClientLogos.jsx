import { useMemo, useState } from "react";
import { clientLogos } from "../data/content";
import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// ClientLogos
//
// A single strip of real brand/institute logos, auto-scrolling right to
// left in an unbroken loop. Rendered inside AudienceRouter, directly below
// the three audience cards, as a second section of that same block rather
// than a standalone page section — "who we work with" (the pitch)
// immediately followed by "who we've actually worked with" (the proof),
// without a new panel breaking up the page between them.
//
// Tripled + translated -33.333%, the same seamless-loop technique used by
// the episode rail in LatestConversations.jsx, so the strip never shows a
// visible jump when it wraps. Pauses on hover/focus so a name can actually
// be read without chasing it.
//
// Logos render bare — no per-logo card/border/background box. A boxed tile
// around each mark was boxing IN the logo rather than presenting it, and
// reads as a UI chrome element rather than the brand itself; a plain
// "as-seen-in" strip is the standard, unboxed treatment for a client-logo
// rail. Sizing is height-only (`max-h`, `w-auto`), so a compact mark (an
// icon-style logo like AORUS or TEDx) naturally renders smaller than a long
// wordmark at the same height — expected, not a bug.
// ---------------------------------------------------------------------------
export default function ClientLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const list = clientLogos.list;
  const tripled = useMemo(() => [...list, ...list, ...list], [list]);

  if (!list.length) return null;

  return (
    <Reveal className="mt-14 pt-6 border-t border-line/10">
      <style>{`
        @keyframes clientLogoMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
      `}</style>

      <p className="text-center text-cream/55 text-sm sm:text-base mb-16">
        {clientLogos.title}
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max items-center gap-10 sm:gap-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animation: isPaused
              ? "none"
              : "clientLogoMarquee 36s linear infinite",
            willChange: "transform",
          }}
        >
          {tripled.map((c, i) => (
            <img
              key={`${c.name}-${i}`}
              src={c.logo}
              alt={c.name}
              title={c.name}
              loading="lazy"
              tabIndex={0}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              className="shrink-0 h-11 sm:h-14 w-auto object-contain opacity-55 hover:opacity-100 hover:scale-105 focus:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50 focus-visible:outline-offset-4 rounded-sm transition-all duration-300 outline-none"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
