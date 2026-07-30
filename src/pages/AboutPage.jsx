import { Heart, Sparkles, TrendingUp } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { aboutPage } from "../data/content";

const valueIcons = { heart: Heart, sparkles: Sparkles, "trending-up": TrendingUp };

// ---------------------------------------------------------------------------
// AboutPage ("/about")
// The full company story: mission statement, a founding timeline, core
// values, and the team. The shorter "About" teaser on Home links here via
// "View All" style CTAs elsewhere in the site.
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.title} description={aboutPage.intro} />

      {/* Mission */}
      <section className="max-w-8xl mx-auto container-px py-10">
        <Reveal className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-12 theme-shadow max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">Our Mission</h2>
          <p className="text-cream/60 mt-4 leading-relaxed">{aboutPage.mission}</p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="max-w-8xl mx-auto container-px py-10">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-10">How we got here</h2>
        </Reveal>
        <div className="relative pl-8 border-l border-line/15 space-y-10">
          {aboutPage.timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08} className="relative">
              <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-bg" />
              <div className="font-display text-accent text-lg">{t.year}</div>
              <p className="text-cream/70 mt-1 max-w-xl">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-8xl mx-auto container-px py-10">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-10">What we believe</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {aboutPage.values.map((v, i) => {
            const Icon = valueIcons[v.icon];
            return (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="w-11 h-11 rounded-xl border border-accent/40 flex items-center justify-center text-accent mb-4 transition-transform hover:scale-110 hover:-rotate-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-cream font-medium">{v.title}</h3>
                <p className="text-cream/50 text-sm mt-2 leading-relaxed">{v.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-8xl mx-auto container-px py-10 pb-20">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-10">The team behind the stage</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPage.team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TiltCard max={6}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-cream font-medium">{m.name}</h3>
                    <p className="text-cream/50 text-xs mt-0.5">{m.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
