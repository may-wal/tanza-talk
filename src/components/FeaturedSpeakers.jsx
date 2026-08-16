import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { speakers } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import PersonAvatar from "./PersonAvatar";

// ---------------------------------------------------------------------------
// FeaturedSpeakers (Home influencer rail)
// One large featured card beside a row of smaller ones, each with a 3D
// tilt-on-hover. The full roster lives on /talent (see pages/Talent.jsx).
//
// Cards render through PersonAvatar, which shows a real photo when one's on
// file (see data/content.js `personPhotos`) and falls back to a Monogram
// initials tile otherwise. `reach` is only rendered when the source site
// actually publishes a follower count for that person, so most cards simply
// omit it.
// ---------------------------------------------------------------------------
export default function FeaturedSpeakers() {
  const f = speakers.featured;

  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-cream">{speakers.eyebrow}</h2>
        <Link
          to="/talent"
          className="hidden sm:inline-flex items-center gap-1 text-sm text-cream/70 hover:text-accent transition-colors group"
        >
          {speakers.viewAll}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-4">
        <Reveal>
          <TiltCard max={4}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[420px] group">
              <PersonAvatar name={f.name} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] bg-accent text-bg font-semibold px-3 py-1 rounded-full">
                {f.badge}
              </span>
              {f.reach && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[11px] text-cream bg-bg/50 backdrop-blur px-2.5 py-1 rounded-full">
                  <Users size={11} /> {f.reach}
                </span>
              )}
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-display text-2xl text-cream">{f.name}</h3>
                <p className="text-cream/60 text-sm mt-0.5">{f.role}</p>
                <p className="text-cream/80 text-sm italic mt-3 leading-relaxed">&ldquo;{f.quote}&rdquo;</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-bg text-xs font-medium px-4 py-2.5 rounded-full mt-4 hover:bg-accent2 transition-colors"
                >
                  {f.cta} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {speakers.list.map((s, i) => (
          <Reveal key={s.name} delay={0.1 + i * 0.08}>
            <TiltCard max={6}>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:min-h-[420px] group">
                <PersonAvatar
                  name={s.name}
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                {s.reach && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] text-cream bg-bg/50 backdrop-blur px-2 py-0.5 rounded-full">
                    <Users size={10} /> {s.reach}
                  </span>
                )}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-cream font-medium">{s.name}</h3>
                  <p className="text-cream/50 text-xs mt-0.5">{s.role}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-accent text-xs mt-3 hover:gap-2 transition-all">
                    Work With Us <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Link to="/talent" className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm text-cream/70">
        {speakers.viewAll} <ArrowRight size={14} />
      </Link>
    </section>
  );
}
