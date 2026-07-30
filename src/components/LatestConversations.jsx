import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { conversations } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

// ---------------------------------------------------------------------------
// LatestConversations
// A seamless horizontally looping rail of episode cards with a continuous
// marquee-style motion.
// ---------------------------------------------------------------------------
export default function LatestConversations() {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedEpisodes = useMemo(
    () => [...conversations.episodes, ...conversations.episodes],
    [],
  );

  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14 relative">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <Reveal className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-cream">
          {conversations.eyebrow}
        </h2>
        <Link
          to="/shows"
          className="hidden sm:inline-flex items-center gap-1 text-sm text-cream/70 hover:text-accent transition-colors group"
        >
          {conversations.viewAll}
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </Reveal>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max gap-4 py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animation: isPaused ? "none" : "marquee 24s linear infinite",
            willChange: "transform",
          }}
        >
          {duplicatedEpisodes.map((ep, i) => (
            <Reveal
              key={`${ep.title}-${i}`}
              delay={(i % conversations.episodes.length) * 0.03}
              y={16}
              className="shrink-0 w-[220px] sm:w-[240px]"
            >
              <TiltCard max={6}>
                <article className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer">
                  <img
                    src={ep.image}
                    alt={`${ep.title} — ${ep.guest}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-bg/50 backdrop-blur flex items-center justify-center">
                    <Play
                      size={12}
                      fill="white"
                      className="text-white ml-0.5"
                    />
                  </span>
                  <span className="absolute top-3 right-3 text-[11px] text-cream/90 bg-bg/50 backdrop-blur px-2 py-0.5 rounded">
                    {ep.duration}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] tracking-[0.15em] text-accent font-medium">
                      {ep.tag}
                    </span>
                    <h3 className="text-sm font-medium text-cream mt-1 leading-snug">
                      {ep.title}
                    </h3>
                    <p className="text-xs text-cream/50 mt-1">{ep.guest}</p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <Link
        to="/shows"
        className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm text-cream/70"
      >
        {conversations.viewAll} <ArrowRight size={14} />
      </Link>
    </section>
  );
}
