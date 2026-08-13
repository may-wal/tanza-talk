import { Link } from "react-router-dom";
import { Calendar, MapPin, Building2, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import PersonAvatar from "../components/PersonAvatar";
import { workPage } from "../data/content";

// ---------------------------------------------------------------------------
// Events ("/work")
//
// tanzatalks.com documents exactly one live event in detail — Career Point,
// Kota, 7 August 2022 — so this page features that one properly rather than
// padding a three-column grid with invented case studies and made-up
// attendance numbers, which is what it used to do.
//
// When more events are documented, add them to `workPage` and this becomes
// a featured-plus-grid layout.
// ---------------------------------------------------------------------------
export default function Work() {
  const ev = workPage.featured;

  return (
    <PageTransition>
      <PageHeader
        eyebrow={workPage.eyebrow}
        title={workPage.title}
        description={workPage.description}
      />

      <section className="max-w-8xl mx-auto container-px pb-12">
        <Reveal className="bg-panel rounded-3xl border border-line/10 overflow-hidden theme-shadow">
          {/* Event header band */}
          <div className="p-8 sm:p-10 lg:p-12 border-b border-line/10">
            <span className="inline-block text-[10px] tracking-[0.2em] bg-accent text-bg font-semibold px-3 py-1 rounded-full">
              {ev.type}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream mt-5 leading-tight max-w-2xl">
              {ev.title}
            </h2>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-7 text-cream/60 text-sm">
              <span className="inline-flex items-center gap-2">
                <Calendar size={15} className="text-accent" /> {ev.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-accent" /> {ev.city}
              </span>
              <span className="inline-flex items-center gap-2">
                <Building2 size={15} className="text-accent" /> {ev.client}
              </span>
            </div>

            <p className="text-cream/60 mt-7 leading-relaxed max-w-2xl">
              {ev.blurb}
            </p>
          </div>

          {/* Lineup */}
          <div className="p-8 sm:p-10 lg:p-12">
            <h3 className="text-cream font-medium mb-6">Who was on stage</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {ev.lineup.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.07}>
                  <TiltCard max={6}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                      <PersonAvatar name={p.name} className="absolute inset-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-cream font-medium leading-tight">
                          {p.name}
                        </div>
                        <div className="text-accent text-xs mt-1.5">
                          {p.reach ?? p.role}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-8xl mx-auto container-px pb-20">
        <Reveal className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-12 theme-shadow text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">
            {workPage.ctaTitle}
          </h2>
          <p className="text-cream/60 mt-3 max-w-md mx-auto">
            {workPage.ctaDescription}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-7 py-3.5 rounded-full hover:bg-accent2 transition-colors mt-7"
          >
            {workPage.cta} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
