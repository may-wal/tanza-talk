import {
  Star,
  Calendar,
  Megaphone,
  Handshake,
  Mic,
  Newspaper,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import HowItWorks from "../components/HowItWorks";
import ContactBand from "../components/ContactBand";
import { services } from "../data/content";

const icons = {
  star: Star,
  calendar: Calendar,
  megaphone: Megaphone,
  handshake: Handshake,
  mic: Mic,
  newspaper: Newspaper,
};

// ---------------------------------------------------------------------------
// Services ("/services")
// What a client is actually buying, in full. Home shows a teaser of this
// same `services` data (see components/About.jsx); this page is the
// complete breakdown, followed by the How It Works steps and a contact CTA.
// ---------------------------------------------------------------------------
export default function Services() {
  return (
    <PageTransition>
      <PageHeader eyebrow={services.eyebrow} title={services.title} description={services.description} />

      <section className="max-w-8xl mx-auto container-px pb-10">
        <div className="grid sm:grid-cols-2 gap-6">
          {services.list.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 2) * 0.1}>
                <TiltCard max={4}>
                  <div className="bg-panel rounded-2xl border border-line/10 p-7 sm:p-8 theme-shadow h-full">
                    <div className="w-14 h-14 rounded-2xl border border-accent/40 flex items-center justify-center text-accent mb-5">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display text-xl text-cream">{s.title}</h3>
                    <p className="text-cream/55 text-sm mt-3 leading-relaxed">{s.description}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <HowItWorks />
      <ContactBand />
    </PageTransition>
  );
}
