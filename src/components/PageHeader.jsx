import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// PageHeader
// A consistent eyebrow + title + description banner used at the top of every
// inner page (Shows, Speakers, Events, About, Journal) so they share one
// visual language instead of each page inventing its own header.
// ---------------------------------------------------------------------------
export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="max-w-8xl mx-auto container-px pt-16 pb-8 md:pt-24 md:pb-12">
      <Reveal>
        <span className="text-accent text-xs tracking-[0.2em] font-medium">{eyebrow}</span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3 text-cream max-w-3xl leading-tight">
          {title}
        </h1>
        {description && <p className="text-cream/60 mt-5 max-w-xl">{description}</p>}
      </Reveal>
    </section>
  );
}
