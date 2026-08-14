import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import AudienceRouter from "../components/AudienceRouter";
import WhatsNew from "../components/WhatsNew";
import About from "../components/About";
import FeaturedSpeakers from "../components/FeaturedSpeakers";
import LatestConversations from "../components/LatestConversations";
import HowItWorks from "../components/HowItWorks";
import FounderNote from "../components/FounderNote";
import ContactBand from "../components/ContactBand";

// ---------------------------------------------------------------------------
// Home ("/")
// Assembles the landing-page sections in order. Each section is its own
// component under src/components — this file only controls the order they
// appear in.
//
// Order: hero pitch → audience self-select (+ client logo strip) →
// what's new → what we do → whose voices → what we've published →
// how it works → why the founder started it → contact.
//
// The stats strip inside the Hero is the only one on this page — the
// separate lower StatsBar was removed as a duplicate. StatsBar itself is
// still used on /about and /sponsorship.
//
// The FeaturedEvent section (Career Point, Kota) was also removed from Home;
// that event still has its own page at /work, linked from the nav.
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AudienceRouter />
      <WhatsNew />
      <About />
      <FeaturedSpeakers />
      <LatestConversations />
      <HowItWorks />
      <FounderNote />
      <ContactBand />
    </PageTransition>
  );
}
