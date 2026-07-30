import { ArrowRight, Clock } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { journalPage } from "../data/content";

// ---------------------------------------------------------------------------
// Journal ("/journal")
// A simple articles/blog listing — no filtering needed since the list is
// short; each card is a TiltCard for visual consistency with other pages.
// ---------------------------------------------------------------------------
export default function Journal() {
  return (
    <PageTransition>
      <PageHeader eyebrow={journalPage.eyebrow} title={journalPage.title} description={journalPage.description} />

      <section className="max-w-8xl mx-auto container-px pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {journalPage.articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <TiltCard max={5}>
                <article className="rounded-2xl overflow-hidden bg-panel border border-line/10 theme-shadow h-full flex flex-col cursor-pointer group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] bg-accent text-bg font-semibold px-3 py-1 rounded-full">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg text-cream leading-snug">{a.title}</h3>
                    <p className="text-cream/50 text-sm mt-2 leading-relaxed">{a.excerpt}</p>
                    <div className="mt-auto pt-5 flex items-center justify-between text-xs text-cream/40">
                      <span>{a.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} /> {a.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-accent text-sm mt-3 group-hover:gap-2 transition-all">
                      Read article <ArrowRight size={14} />
                    </span>
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
