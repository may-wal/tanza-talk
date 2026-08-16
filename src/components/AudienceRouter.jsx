import { Link } from "react-router-dom";
import { GraduationCap, Sparkles, Handshake, Mic, ArrowRight } from "lucide-react";
import { audienceRouter } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import ClientLogos from "./ClientLogos";

const icons = {
  "graduation-cap": GraduationCap,
  sparkles: Sparkles,
  handshake: Handshake,
  mic: Mic,
};

// ---------------------------------------------------------------------------
// AudienceRouter
// Three self-selecting cards shown right under the Hero so a brand, a college
// and a prospective guest can each land on the right place in one click.
// The guest card points off-site to the real "Be a Tanza Talks Speaker"
// signup form, so cards support an `external` flag.
//
// The client logo strip (ClientLogos) renders as a second section within
// this same component, below the cards, rather than as its own page
// section — see ClientLogos.jsx.
// ---------------------------------------------------------------------------
export default function AudienceRouter() {
  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="mb-8">
        <span className="text-accent text-xs tracking-[0.2em] font-medium">
          {audienceRouter.eyebrow}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl mt-3 text-cream max-w-xl">
          {audienceRouter.title}
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {audienceRouter.cards.map((card, i) => {
          const Icon = icons[card.icon];
          const cardClass =
            "group block h-full bg-panel rounded-2xl border border-line/10 p-6 sm:p-7 theme-shadow hover:border-accent/40 transition-colors";
          const inner = (
            <>
              <div className="w-12 h-12 rounded-xl border border-accent/40 flex items-center justify-center text-accent mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg text-cream">{card.title}</h3>
              <p className="text-cream/55 text-sm mt-3 leading-relaxed">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-1 text-accent text-sm mt-5 group-hover:gap-2 transition-all">
                {card.cta} <ArrowRight size={14} />
              </span>
            </>
          );

          return (
            <Reveal key={card.title} delay={i * 0.1}>
              <TiltCard max={5}>
                {card.external ? (
                  <a
                    href={card.to}
                    target="_blank"
                    rel="noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link to={card.to} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <ClientLogos />
    </section>
  );
}
