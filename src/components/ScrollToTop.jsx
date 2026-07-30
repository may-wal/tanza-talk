import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ---------------------------------------------------------------------------
// ScrollToTop
// React Router does not reset scroll position between page navigations by
// default (unlike a traditional multi-page site). This tiny component
// scrolls the window back to the top whenever the route path changes.
// Mounted once, near the top of App.jsx.
// ---------------------------------------------------------------------------
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return null;
}
