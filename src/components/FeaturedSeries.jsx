import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { featuredSeries as fs } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import MagButton from "./MagButton";

// ---------------------------------------------------------------------------
// FeaturedSeries ("Journey of Legacy")
// Two-column panel: 3D tilt image card on the left, copy + stats + CTAs on
// the right. Stacks to a single column on mobile.
// ---------------------------------------------------------------------------
export default function FeaturedSeries() {
  const [active] = useState(0);
  const dots = [0, 1, 2, 3];

  return (
    <section id="featured-series" className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="bg-panel rounded-3xl border border-line/10 p-4 sm:p-6 lg:p-8 theme-shadow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image card */}
          <div>
            <TiltCard max={5}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={fs.image}
                  alt="Journey of Legacy documentary series artwork"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] tracking-[0.3em] text-cream/60">JOURNEY OF</span>
                  <h3 className="font-display text-4xl sm:text-5xl text-cream mt-1">LEGACY</h3>
                </div>
              </div>
            </TiltCard>
            <div className="flex justify-center gap-2 mt-4">
              {dots.map((d) => (
                <span
                  key={d}
                  className={`h-1.5 rounded-full transition-all ${
                    d === active ? "w-6 bg-accent" : "w-1.5 bg-cream/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="text-accent text-xs tracking-[0.2em] font-medium">{fs.eyebrow}</span>
            <h2 className="font-display text-3xl sm:text-4xl mt-3 text-cream">{fs.title}</h2>
            <p className="text-cream/60 mt-4 max-w-md">{fs.description}</p>

            <div className="flex gap-10 mt-8">
              {fs.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl text-accent">{s.value}</div>
                  <div className="text-xs text-cream/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-9">
              <MagButton
                as="a"
                href="#featured-series"
                className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3.5 rounded-full hover:bg-accent2 transition-colors"
              >
                {fs.primaryCta}
                <span className="w-5 h-5 rounded-full bg-bg/20 flex items-center justify-center">
                  <Play size={9} fill="currentColor" />
                </span>
              </MagButton>
              <MagButton
                as={Link}
                to="/shows"
                className="inline-flex items-center gap-2 border border-cream/30 text-cream text-sm px-6 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                {fs.secondaryCta} <ArrowRight size={16} />
              </MagButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
