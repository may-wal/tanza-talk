import { Clapperboard, Mic, Handshake } from "lucide-react";
import { about } from "../data/content";
import Reveal from "./Reveal";

const icons = { clapperboard: Clapperboard, mic: Mic, handshake: Handshake };

// ---------------------------------------------------------------------------
// About (Home teaser)
// Short "who we are" panel shown on the Home page. The fuller story, team
// and timeline live on the dedicated /about page (see pages/AboutPage.jsx).
// ---------------------------------------------------------------------------
export default function About() {
  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="bg-panel rounded-3xl border border-line/10 p-6 sm:p-10 lg:p-14 theme-shadow">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-accent text-xs tracking-[0.2em] font-medium">{about.eyebrow}</span>
            <h2 className="font-display text-3xl sm:text-4xl mt-3 text-cream leading-tight">
              {about.title}
            </h2>
            <p className="text-cream/60 mt-5 max-w-md">{about.description}</p>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5 sm:gap-4 lg:pt-8">
            {about.pillars.map((p, i) => {
              const Icon = icons[p.icon];
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="w-20 h-20 rounded-2xl border border-accent/40 flex items-center justify-center text-accent mb-4 transition-transform hover:scale-110 hover:rotate-3">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-cream font-medium">{p.title}</h3>
                  <p className="text-cream/50 text-sm mt-2 leading-relaxed">{p.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
