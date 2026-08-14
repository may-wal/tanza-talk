import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ---------------------------------------------------------------------------
// ScrollToTop
// React Router does not reset scroll position between page navigations by
// default (unlike a traditional multi-page site). This tiny component
// scrolls the window back to the top whenever the route path changes.
// Mounted once, near the top of App.jsx.
//
// If the URL carries a hash (e.g. a Link to="/#whats-new" from another
// page), scroll to that element instead of the top. The target may not be
// in the DOM on the very first paint (the page is still mounting), so this
// retries for a few frames before giving up and falling back to top — a
// bare `document.getElementById` at mount time would silently no-op on a
// cold navigation.
// ---------------------------------------------------------------------------
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const behavior = "instant" in window ? "instant" : "auto";

    if (!hash) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const id = hash.slice(1);
    let attempts = 0;
    let frame;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 20) frame = requestAnimationFrame(tryScroll);
      else window.scrollTo({ top: 0, behavior });
    };

    tryScroll();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
