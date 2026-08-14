import { Users } from "lucide-react";
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
// One grid, one card per name — all 34 published on tanzatalks.com/influencer
// (see the sourcing note on `talentPage` in data/content.js). There used to
// be a second "wider roster" section below this one, a plain text list for
// names without a photo — removed, since every card now renders an image
// through PersonAvatar (a real photo where one's on file, a Monogram
// initials tile otherwise), so there's no longer a tier that needs a
// different, text-only treatment.
// ---------------------------------------------------------------------------
export default function Talent() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow={talentPage.eyebrow}
        title={talentPage.title}
        description={talentPage.description}
      />

      <section className="max-w-8xl mx-auto container-px pb-16">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-8">
            {talentPage.featuredTitle}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {talentPage.featured.map((s, i) => (
            <Reveal key={s.name} delay={(i % 10) * 0.04}>
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
                    <h3 className="text-cream font-medium leading-tight text-sm sm:text-base">
                      {s.name}
                    </h3>
                    {s.role && (
                      <p className="text-cream/50 text-xs mt-1">{s.role}</p>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}
