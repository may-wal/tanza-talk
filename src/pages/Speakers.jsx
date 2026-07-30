import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { speakersPage } from "../data/content";

// ---------------------------------------------------------------------------
// Speakers ("/speakers")
// Full speaker directory with a category filter, mirroring the Shows page
// pattern for consistency.
// ---------------------------------------------------------------------------
export default function Speakers() {
  const [activeCategory, setActiveCategory] = useState("All");

  const list =
    activeCategory === "All"
      ? speakersPage.directory
      : speakersPage.directory.filter((s) => s.category === activeCategory);

  return (
    <PageTransition>
      <PageHeader
        eyebrow={speakersPage.eyebrow}
        title={speakersPage.title}
        description={speakersPage.description}
      />

      <section className="max-w-8xl mx-auto container-px pb-20">
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {speakersPage.categories.map((cat) => (
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.07}>
              <TiltCard max={7}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-cream font-medium">{s.name}</h3>
                    <p className="text-cream/50 text-xs mt-0.5">{s.role}</p>
                    <a href="#watch" className="inline-flex items-center gap-1 text-accent text-xs mt-3 hover:gap-2 transition-all">
                      Watch Talk <ArrowRight size={12} />
                    </a>
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
