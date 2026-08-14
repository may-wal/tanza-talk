import { Heart, Sparkles, TrendingUp } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import PersonAvatar from "../components/PersonAvatar";
import StatsBar from "../components/StatsBar";
import ContactBand from "../components/ContactBand";
import { aboutPage } from "../data/content";

const valueIcons = { heart: Heart, sparkles: Sparkles, "trending-up": TrendingUp };
const socialIcons = { linkedin: FaLinkedin, facebook: FaFacebook, instagram: FaInstagram };

// ---------------------------------------------------------------------------
// AboutPage ("/about")
//
// Mission, values, the team, and the published numbers.
//
// The invented founding timeline (2019 hostel-room podcast, 2021 five-city
// series, 2023 pivot, 2025 milestone) has been removed — none of it appears
// on tanzatalks.com, and the only dated fact in it, the 2022 Career Point
// event, now lives on the Events page. The old three-placeholder team grid
// is gone too — this now shows the two real people, Manish Kumar (Founder &
// CEO) and Anuj Kumar (Co-Founder & COO), with no quote for either: the
// founder's statement already has its own home as a pull-quote in Home's
// FounderNote section, so this is just who they are, not what they said.
// ---------------------------------------------------------------------------
export default function AboutPage() {
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

      {/* Founders */}
      <section className="max-w-8xl mx-auto container-px py-10 pb-16">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-10">
            Who started it
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {aboutPage.team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="bg-panel rounded-3xl border border-line/10 p-6 sm:p-8 theme-shadow flex items-center gap-5 sm:gap-6 h-full">
                <PersonAvatar
                  name={m.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-xl text-cream">{m.name}</h3>
                  <p className="text-accent text-sm mt-1">{m.role}</p>
                  {m.social && (
                    <div className="flex items-center gap-3 mt-3">
                      {Object.entries(m.social).map(([platform, href]) => {
                        const Icon = socialIcons[platform];
                        return (
                          <a
                            key={platform}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${m.name} on ${platform}`}
                            className="text-cream/50 hover:text-accent transition-colors"
                          >
                            <Icon size={16} />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}
