import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
import Reveal from "./Reveal";
import PersonAvatar from "./PersonAvatar";

// ---------------------------------------------------------------------------
// FounderNote
// Replaces the old three-card Testimonials grid, whose quotes were all
// invented and attributed to made-up people. tanzatalks.com publishes
// exactly one attributed statement — the founder's — and one unattributed
// listener note. Both are here, and a single large pull-quote carries far
// more weight than three placeholder cards did.
// ---------------------------------------------------------------------------
export default function FounderNote() {
  const { founder, note } = testimonials;

  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="mb-10">
        <span className="text-accent text-xs tracking-[0.2em] font-medium">
          {testimonials.eyebrow}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl mt-3 text-cream max-w-xl">
          {testimonials.title}
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
        {/* Founder pull-quote */}
        <Reveal>
          <figure className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-10 lg:p-12 theme-shadow h-full flex flex-col">
            <Quote size={30} className="text-accent/50 shrink-0" />
            <blockquote className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-cream/90 leading-snug mt-6 flex-1">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4 mt-8 pt-6 border-t border-line/10">
              <PersonAvatar
                name={founder.name}
                className="w-12 h-12 rounded-full shrink-0"
              />
              <div>
                <div className="text-cream text-sm font-medium">
                  {founder.name}
                </div>
                <div className="text-cream/50 text-xs mt-0.5">
                  {founder.role}
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        {/* Listener note */}
        <Reveal delay={0.1}>
          <figure className="bg-panel rounded-3xl border border-line/10 p-8 theme-shadow h-full flex flex-col justify-center">
            <Quote size={22} className="text-accent/40" />
            <blockquote className="text-cream/70 text-sm sm:text-base leading-relaxed mt-5">
              &ldquo;{note.quote}&rdquo;
            </blockquote>
            <figcaption className="text-cream/40 text-xs mt-6">
              {note.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
