import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Talent from "./pages/Talent";
import Work from "./pages/Work";
import Sponsorship from "./pages/Sponsorship";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

// ---------------------------------------------------------------------------
// App
// Defines every route in the site. `Layout` (Navbar + Footer) wraps all of
// them so it never remounts between page navigations. `AnimatePresence` +
// the `key={pathname}` on <Routes> lets each page's <PageTransition> play
// its exit/enter animation when the URL changes.
//
// Old URLs (/shows, /speakers, /events, /journal) redirect to their renamed
// replacements so any existing links/bookmarks still resolve.
// See INFORMATION.md for which file renders which route.
// ---------------------------------------------------------------------------
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="talent" element={<Talent />} />
          <Route path="work" element={<Work />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutPage />} />

          {/* Redirects from the old media-site URL structure */}
          <Route path="shows" element={<Navigate to="/media" replace />} />
          <Route path="speakers" element={<Navigate to="/talent" replace />} />
          <Route path="events" element={<Navigate to="/work" replace />} />
          <Route path="journal" element={<Navigate to="/media" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
