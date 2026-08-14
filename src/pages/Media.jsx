import { Link } from "react-router-dom";
import { Play, ArrowUpRight, ArrowRight, Clapperboard } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import PersonAvatar from "../components/PersonAvatar";
import ContactBand from "../components/ContactBand";
import { showsPage, social, whatsNew } from "../data/content";

// ---------------------------------------------------------------------------
// Watch ("/media")
//
// The published episode catalogue plus the list of past guests. The old
// category-filter row was removed along with the invented episodes it
// filtered — with a handful of real episodes there is nothing to filter,
// and the categories themselves were made up.
//
// Episode cards use each video's real YouTube thumbnail and link straight
// to that video — see the sourcing note on `conversations` in
// data/content.js for how every entry was verified. Past-guest cards (below
// the episode grid) still go through PersonAvatar, since those are name +
// role listings rather than links to a specific upload.
//
// A small strip below the header cross-promotes Journey of Legacy — the
// upcoming JioHotstar series — pulling its copy from the same `whatsNew`
// data as the full card on Home rather than duplicating it, so the two
// never drift out of sync. It links to "/#whats-new", which ScrollToTop.jsx
// resolves to that card on landing.
// ---------------------------------------------------------------------------
const journeyOfLegacy = whatsNew.items.find((i) => i.id === "journey-of-legacy");

export default function Media() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow={showsPage.eyebrow}
        title={showsPage.title}
        description={showsPage.description}
      />

      {/* Journey of Legacy — small cross-promo, full card lives on Home */}
      {journeyOfLegacy && (
        <section className="max-w-8xl mx-auto container-px pt-2 pb-10">
          <Reveal>
            <Link
              to="/#whats-new"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 bg-panel rounded-2xl border border-line/10 theme-shadow px-6 py-5 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-11 h-11 rounded-xl border border-accent/40 flex items-center justify-center text-accent shrink-0">
                  <Clapperboard size={20} />
                </div>
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 text-accent text-[11px] tracking-[0.18em] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {journeyOfLegacy.eyebrow}
                  </span>
                  <p className="text-cream text-sm sm:text-base font-medium mt-1 truncate">
                    {journeyOfLegacy.title}
                    <span className="text-cream/45 font-normal">
                      {" "}
                      — {journeyOfLegacy.note}
                    </span>
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-accent text-sm shrink-0 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Episodes */}
      <section className="max-w-8xl mx-auto container-px pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showsPage.episodes.map((ep, i) => (
            <Reveal key={ep.title} delay={(i % 3) * 0.08}>
              <TiltCard max={6}>
                <a
                  href={ep.to}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block rounded-2xl overflow-hidden aspect-video group"
                >
                  <img
                    src={ep.image}
                    alt={`${ep.title} — ${ep.subtitle}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent" />
                  <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-bg/50 backdrop-blur flex items-center justify-center">
                    <Play size={13} fill="white" className="text-white ml-0.5" />
                  </span>
                  <span className="absolute top-3 right-3 text-[11px] text-cream/90 bg-bg/50 backdrop-blur px-2 py-0.5 rounded">
                    {ep.duration}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] tracking-[0.15em] text-accent font-medium">
                      {ep.tag}
                    </span>
                    <h3 className="text-base font-medium text-cream mt-1 leading-snug">
                      {ep.title}
                    </h3>
                    <p className="text-xs text-cream/50 mt-1">{ep.subtitle}</p>
                    <p className="text-[11px] text-cream/35 mt-2">{ep.date}</p>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a
            href={social.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-cream/25 text-cream text-sm px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Watch every episode on YouTube <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>

      {/* Past guests */}
      <section className="max-w-8xl mx-auto container-px pb-16">
        <Reveal className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">
            {showsPage.pastGuestsTitle}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {showsPage.pastGuests.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 0.06}>
              <div className="flex items-center gap-4 bg-panel rounded-2xl border border-line/10 p-4 theme-shadow">
                <PersonAvatar
                  name={g.name}
                  className="w-14 h-14 rounded-xl shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-cream text-sm font-medium">{g.name}</div>
                  <div className="text-cream/50 text-xs mt-0.5">{g.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}
