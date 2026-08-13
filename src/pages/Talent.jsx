import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import PersonAvatar from "../components/PersonAvatar";
import ContactBand from "../components/ContactBand";
import { talentPage } from "../data/content";

// ---------------------------------------------------------------------------
// Talent / Influencers ("/talent")
//
// Two tiers, because the source site publishes two tiers of information:
//   1. `featured` — people tanzatalks.com documents with a role and/or a
//      follower count. Full cards.
//   2. `roster`   — the remaining names from the published influencer list,
//      shown as a name grid. The site says nothing else about them, so the
//      page says nothing else about them.
//
// The previous version of this page had a category filter over invented
// categories, invented follower counts and stock-photo headshots labelled
// with real people's names. All three are gone. Cards now render through
// PersonAvatar — a real photo where one's on file, a Monogram tile
// otherwise — see data/content.js `personPhotos` and components/PersonAvatar.jsx.
// ---------------------------------------------------------------------------
export default function Talent() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow={talentPage.eyebrow}
        title={talentPage.title}
        description={talentPage.description}
      />

      {/* Featured — documented role and/or reach */}
      <section className="max-w-8xl mx-auto container-px pb-10">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-8">
            {talentPage.featuredTitle}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {talentPage.featured.map((s, i) => (
            <Reveal key={s.name} delay={(i % 5) * 0.07}>
              <TiltCard max={7}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
                  <PersonAvatar
                    name={s.name}
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
                  {s.reach && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] text-cream bg-bg/50 backdrop-blur px-2 py-0.5 rounded-full">
                      <Users size={10} /> {s.reach}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-cream font-medium leading-tight">{s.name}</h3>
                    <p className="text-cream/50 text-xs mt-1">{s.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wider roster — names only, as published */}
      <section className="max-w-8xl mx-auto container-px pb-16">
        <Reveal className="mb-6">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">
            {talentPage.rosterTitle}
          </h2>
          <p className="text-cream/50 text-sm mt-3 max-w-xl leading-relaxed">
            {talentPage.rosterNote}
          </p>
        </Reveal>

        <Reveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-1">
            {talentPage.roster.map((name) => (
              <li
                key={name}
                className="flex items-center gap-3 py-2.5 border-b border-line/10 text-cream/70 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-7 py-3.5 rounded-full hover:bg-accent2 transition-colors"
          >
            Enquire about a name <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <ContactBand />
    </PageTransition>
  );
}
