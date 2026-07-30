import { useState } from "react";
import { Play } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { showsPage } from "../data/content";

// ---------------------------------------------------------------------------
// Shows ("/shows")
// Full episode catalogue with a category filter row. `activeCategory` is
// local UI state — clicking a pill filters `showsPage.episodes` client-side,
// no network round-trip needed since it's all static content.
// ---------------------------------------------------------------------------
export default function Shows() {
  const [activeCategory, setActiveCategory] = useState("All");

  const episodes =
    activeCategory === "All"
      ? showsPage.episodes
      : showsPage.episodes.filter((ep) => ep.category === activeCategory);

  return (
    <PageTransition>
      <PageHeader eyebrow={showsPage.eyebrow} title={showsPage.title} description={showsPage.description} />

      <section className="max-w-8xl mx-auto container-px pb-20">
        {/* Category filter pills */}
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {showsPage.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-bg border-accent"
                  : "border-line/15 text-cream/70 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <Reveal key={ep.title} delay={(i % 3) * 0.08}>
              <TiltCard max={6}>
                <article className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer">
                  <img
                    src={ep.image}
                    alt={`${ep.title} — ${ep.guest}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent" />
                  <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-bg/50 backdrop-blur flex items-center justify-center">
                    <Play size={13} fill="white" className="text-white ml-0.5" />
                  </span>
                  <span className="absolute top-3 right-3 text-[11px] text-cream/90 bg-bg/50 backdrop-blur px-2 py-0.5 rounded">
                    {ep.duration}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] tracking-[0.15em] text-accent font-medium">{ep.tag}</span>
                    <h3 className="text-base font-medium text-cream mt-1 leading-snug">{ep.title}</h3>
                    <p className="text-xs text-cream/50 mt-1">{ep.guest}</p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {episodes.length === 0 && (
          <p className="text-cream/50 text-sm mt-10">No episodes in this category yet.</p>
        )}
      </section>
    </PageTransition>
  );
}
