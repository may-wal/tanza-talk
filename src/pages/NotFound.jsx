import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import MagButton from "../components/MagButton";

// ---------------------------------------------------------------------------
// NotFound ("*")
// Catch-all route for any URL that doesn't match a real page.
// ---------------------------------------------------------------------------
export default function NotFound() {
  return (
    <PageTransition>
      <section className="max-w-8xl mx-auto container-px py-32 text-center flex flex-col items-center">
        <span className="font-display text-7xl sm:text-8xl text-accent">404</span>
        <h1 className="font-display text-2xl sm:text-3xl text-cream mt-4">This story hasn't been told yet.</h1>
        <p className="text-cream/60 mt-3 max-w-md">
          The page you're looking for doesn't exist — but there's plenty more to explore.
        </p>
        <MagButton
          as={Link}
          to="/"
          className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3.5 rounded-full hover:bg-accent2 transition-colors mt-8"
        >
          Back to Home <ArrowRight size={16} />
        </MagButton>
      </section>
    </PageTransition>
  );
}
