import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// ---------------------------------------------------------------------------
// Layout
// Wraps every route: Navbar + page content (<Outlet/>) + Footer. This is
// mounted once in App.jsx around the <Routes>, so Navbar/Footer never
// unmount or re-render between page navigations — only the page content
// inside <Outlet/> changes.
// ---------------------------------------------------------------------------
export default function Layout() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
