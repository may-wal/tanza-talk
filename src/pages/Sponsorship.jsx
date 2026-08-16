import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import StatsBar from "../components/StatsBar";
import ContactBand from "../components/ContactBand";
import { sponsorshipPage } from "../data/content";

// ---------------------------------------------------------------------------
// Sponsorship ("/sponsorship")
//
// The page a brand or sponsorship team lands on. The invented audience
// breakdown that used to head this page — average footfall, core age
// bracket, impressions per event — has been replaced by StatsBar, which
// renders the figures tanzatalks.com actually publishes. The tiers below
// describe what's on offer rather than asserting results.
// ---------------------------------------------------------------------------
export default function Sponsorship() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow={sponsorshipPage.eyebrow}
        title={sponsorshipPage.title}
        description={sponsorshipPage.description}
      />

      {/* Published audience figures */}
      <StatsBar />

      {/* Sponsorship tiers */}
      <section className="max-w-8xl mx-auto container-px py-10">
        <Reveal className="mb-10">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">Ways to partner</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsorshipPage.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <TiltCard max={4}>
                <div className="bg-panel rounded-2xl border border-line/10 p-7 theme-shadow h-full flex flex-col">
                  <h3 className="font-display text-xl text-cream">{tier.name}</h3>
                  <p className="text-cream/55 text-sm mt-2 leading-relaxed">{tier.description}</p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {tier.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-cream/60 text-sm">
                        <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Media kit CTA */}
      <section className="max-w-8xl mx-auto container-px py-10 pb-20">
        <Reveal className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-12 theme-shadow text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">{sponsorshipPage.mediaKit.title}</h2>
          <p className="text-cream/60 mt-3 max-w-md mx-auto">{sponsorshipPage.mediaKit.description}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-7 py-3.5 rounded-full hover:bg-accent2 transition-colors mt-6"
          >
            {sponsorshipPage.mediaKit.cta} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <ContactBand />
    </PageTransition>
  );
}
