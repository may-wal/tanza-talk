import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/content";
import Reveal from "./Reveal";
import MagButton from "./MagButton";

// ---------------------------------------------------------------------------
// ContactBand
// Closing CTA panel shown at the bottom of Home — every prior section on
// the funnel leads here. Full segmented form lives on /contact.
// ---------------------------------------------------------------------------
export default function ContactBand() {
  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-12 lg:p-16 theme-shadow text-center">
        <span className="text-accent text-xs tracking-[0.2em] font-medium">
          {contact.eyebrow}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl mt-3 text-cream max-w-xl mx-auto leading-tight">
          {contact.title}
        </h2>
        <p className="text-cream/60 mt-4 max-w-md mx-auto">{contact.description}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <MagButton
            as={Link}
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-7 py-3.5 rounded-full hover:bg-accent2 transition-colors"
          >
            {contact.submitCta} <ArrowRight size={16} />
          </MagButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-cream/50 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail size={14} /> {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone size={14} /> {contact.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} /> {contact.location}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
