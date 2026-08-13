import { howItWorks } from "../data/content";
import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// HowItWorks
// A 4-step strip that answers "is booking talent complicated?" before the
// visitor has to ask. Reused on Home and /services.
// ---------------------------------------------------------------------------
export default function HowItWorks() {
  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="mb-10">
        <span className="text-accent text-xs tracking-[0.2em] font-medium">
          {howItWorks.eyebrow}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl mt-3 text-cream max-w-xl">
          {howItWorks.title}
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorks.steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <div className="relative">
              <span className="font-display text-4xl text-accent/30">{s.step}</span>
              <h3 className="text-cream font-medium mt-3">{s.title}</h3>
              <p className="text-cream/50 text-sm mt-2 leading-relaxed">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
