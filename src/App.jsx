import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Speakers from "./pages/Speakers";
import Events from "./pages/Events";
import AboutPage from "./pages/AboutPage";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";

// ---------------------------------------------------------------------------
// App
// Defines every route in the site. `Layout` (Navbar + Footer) wraps all of
// them so it never remounts between page navigations. `AnimatePresence` +
// the `key={pathname}` on <Routes> lets each page's <PageTransition> play
// its exit/enter animation when the URL changes.
// See INFORMATION.md for which file renders which route.
// ---------------------------------------------------------------------------
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shows" element={<Shows />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="events" element={<Events />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
