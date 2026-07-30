import { Calendar, MapPin, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { eventsPage } from "../data/content";

// ---------------------------------------------------------------------------
// Events ("/events")
// Upcoming live talks, screenings and campus tours. Each card is a TiltCard
// for the same tactile 3D hover used elsewhere in the site.
// ---------------------------------------------------------------------------
export default function Events() {
  return (
    <PageTransition>
      <PageHeader eyebrow={eventsPage.eyebrow} title={eventsPage.title} description={eventsPage.description} />

      <section className="max-w-8xl mx-auto container-px pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsPage.list.map((ev, i) => (
            <Reveal key={ev.title} delay={(i % 3) * 0.08}>
              <TiltCard max={5}>
                <article className="rounded-2xl overflow-hidden bg-panel border border-line/10 theme-shadow h-full flex flex-col">
                  <div className="relative aspect-[16/10]">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] bg-accent text-bg font-semibold px-3 py-1 rounded-full">
                      {ev.type}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg text-cream leading-snug">{ev.title}</h3>
                    <div className="flex items-center gap-2 text-cream/50 text-xs mt-3">
                      <Calendar size={13} /> {ev.date}
                    </div>
                    <div className="flex items-center gap-2 text-cream/50 text-xs mt-1.5">
                      <MapPin size={13} /> {ev.venue}, {ev.city}
                    </div>
                    <a
                      href="#rsvp"
                      className="mt-auto pt-5 inline-flex items-center gap-1 text-accent text-sm hover:gap-2 transition-all"
                    >
                      Reserve a spot <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
