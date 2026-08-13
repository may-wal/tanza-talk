import { Link } from "react-router-dom";
import { GraduationCap, Sparkles, Handshake, Mic, ArrowRight } from "lucide-react";
import { audienceRouter } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

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

      <div className="grid sm:grid-cols-3 gap-5">
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

      {/* Client logo strip.
          Entries with a `logo` render the image; entries with only a `name`
          render as a text wordmark, so a client can be listed before its
          logo file exists. See data/content.js for how to add one. */}
      {audienceRouter.clients?.length > 0 && (
        <Reveal className="mt-12 pt-10 border-t border-line/10">
          <p className="text-center text-cream/40 text-xs tracking-[0.18em] uppercase">
            {audienceRouter.clientsTitle}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mt-8">
            {audienceRouter.clients.map((c) => (
              <li key={c.name}>
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className="h-9 sm:h-10 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                  />
                ) : (
                  <span className="font-display text-lg sm:text-xl text-cream/40 hover:text-cream/70 whitespace-nowrap transition-colors duration-300">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  );
}
