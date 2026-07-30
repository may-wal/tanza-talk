import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import FeaturedSeries from "../components/FeaturedSeries";
import LatestConversations from "../components/LatestConversations";
import About from "../components/About";
import FeaturedSpeakers from "../components/FeaturedSpeakers";


// ---------------------------------------------------------------------------
// Home ("/")
// Assembles all the landing-page sections in order. Each section is its own
// component under src/components — this file only controls the order they
// appear in. See INFORMATION.md for a full breakdown of every section.
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedSeries />
      <LatestConversations />
      <About />
      <FeaturedSpeakers />

    </PageTransition>
  );
}
