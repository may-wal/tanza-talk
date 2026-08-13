import { Heart, Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import PersonAvatar from "../components/PersonAvatar";
import StatsBar from "../components/StatsBar";
import ContactBand from "../components/ContactBand";
import { aboutPage } from "../data/content";

const valueIcons = { heart: Heart, sparkles: Sparkles, "trending-up": TrendingUp };

// ---------------------------------------------------------------------------
// AboutPage ("/about")
//
// Mission, values, the founder, and the published numbers.
//
// The invented founding timeline (2019 hostel-room podcast, 2021 five-city
// series, 2023 pivot, 2025 milestone) has been removed — none of it appears
// on tanzatalks.com, and the only dated fact in it, the 2022 Career Point
// event, now lives on the Events page. The team grid's three placeholder
// members are gone too; the site names one person, so the page shows one.
// ---------------------------------------------------------------------------
export default function AboutPage() {
  const { founder } = aboutPage;

  return (
    <PageTransition>
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.title} description={aboutPage.intro} />

      {/* Mission */}
      <section className="max-w-8xl mx-auto container-px py-6">
        <Reveal className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-12 theme-shadow max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl text-cream">Our Mission</h2>
          <p className="text-cream/60 mt-4 leading-relaxed">{aboutPage.mission}</p>
        </Reveal>
      </section>

      {/* Published numbers */}
      <StatsBar />

      {/* Values */}
      <section className="max-w-8xl mx-auto container-px py-10">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-10">What we believe</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {aboutPage.values.map((v, i) => {
            const Icon = valueIcons[v.icon];
            return (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="w-11 h-11 rounded-xl border border-accent/40 flex items-center justify-center text-accent mb-4 transition-transform hover:scale-110 hover:-rotate-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-cream font-medium">{v.title}</h3>
                <p className="text-cream/50 text-sm mt-2 leading-relaxed">{v.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-8xl mx-auto container-px py-10 pb-16">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-10">
            Who started it
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="bg-panel rounded-3xl border border-line/10 p-8 sm:p-10 lg:p-12 theme-shadow">
            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
              <PersonAvatar
                name={founder.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl shrink-0"
              />
              <div>
                <h3 className="font-display text-2xl text-cream">{founder.name}</h3>
                <p className="text-accent text-sm mt-1">{founder.role}</p>
                <blockquote className="text-cream/65 mt-6 leading-relaxed max-w-2xl">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-cream/50 hover:text-accent text-sm mt-6 transition-colors"
                >
                  @tanzaxmanishkr <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactBand />
    </PageTransition>
  );
}
