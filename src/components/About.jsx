import { Link } from "react-router-dom";
import {
  Star,
  Calendar,
  Megaphone,
  Handshake,
  Mic,
  Newspaper,
  ArrowRight,
} from "lucide-react";
import { services } from "../data/content";
import Reveal from "./Reveal";

const icons = {
  star: Star,
  calendar: Calendar,
  megaphone: Megaphone,
  handshake: Handshake,
  mic: Mic,
  newspaper: Newspaper,
};

// ---------------------------------------------------------------------------
// About (Home services teaser)
// Renders the first four `services` entries — the four services the source
// site names outright. The full six (including offline events and
// sponsorship) are on the dedicated /services page.
// ---------------------------------------------------------------------------
export default function About() {
  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="bg-panel rounded-3xl border border-line/10 p-6 sm:p-10 lg:p-14 theme-shadow">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-accent text-xs tracking-[0.2em] font-medium">{services.eyebrow}</span>
            <h2 className="font-display text-3xl sm:text-4xl mt-3 text-cream leading-tight">
              {services.title}
            </h2>
            <p className="text-cream/60 mt-5 max-w-md">{services.description}</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-accent text-sm mt-6 hover:gap-2 transition-all"
            >
              See all services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5 sm:gap-4 lg:pt-2">
            {services.list.slice(0, 4).map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="w-14 h-14 rounded-2xl border border-accent/40 flex items-center justify-center text-accent mb-4 transition-transform hover:scale-110 hover:rotate-3">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-cream font-medium">{s.title}</h3>
                  <p className="text-cream/50 text-sm mt-2 leading-relaxed">{s.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
