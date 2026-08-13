import { Outlet, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { nav } from "../data/content";

// ---------------------------------------------------------------------------
// Layout
// Wraps every route: Navbar + page content (<Outlet/>) + Footer. This is
// mounted once in App.jsx around the <Routes>, so Navbar/Footer never
// unmount or re-render between page navigations — only the page content
// inside <Outlet/> changes.
//
// A sticky mobile CTA bar is added at the bottom since the Navbar's "Work
// With Us" button is desktop-only — mobile visitors otherwise have to open
// the hamburger menu to find it.
// ---------------------------------------------------------------------------
export default function Layout() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />

      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-bg/95 backdrop-blur-md border-t border-line/10 p-3">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3 rounded-full"
        >
          {nav.cta} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
