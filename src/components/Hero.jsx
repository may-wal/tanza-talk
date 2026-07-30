import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Landmark, Eye, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { hero, stats } from "../data/content";
import MagButton from "./MagButton";

// ---------------------------------------------------------------------------
// Inline stat counter — counts up from 0 on first viewport entry.
// ---------------------------------------------------------------------------
const icons = { users: Users, landmark: Landmark, eye: Eye, "map-pin": MapPin };

function splitValue(value) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

function StatItem({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const Icon = icons[stat.icon];
  const { number, suffix } = splitValue(stat.value);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    let frame;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(number * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, number]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-accent"
      >
        <Icon size={20} />
      </motion.div>
      <div>
        <div className="font-display text-xl sm:text-2xl text-cream tabular-nums leading-none">
          {display}
          {suffix}
        </div>
        <div className="text-xs text-cream/50 mt-0.5">{stat.label}</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// Two-column layout: left = headline + CTA, right = portrait photo.
// Stats strip is embedded at the very bottom of the hero.
// Background is a full-bleed image with dark gradient overlay.
// The "Watch Showreel" button has been removed per design.
// ---------------------------------------------------------------------------
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Full-bleed background image + overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={hero.image}
          alt="Speaker addressing an audience on stage"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* stronger left-to-right gradient so left text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/10" />
      </div>

      {/* Vertical "Follow Us" rail — desktop only */}
      <div className="hidden lg:flex flex-col items-center gap-5 absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-xs tracking-[0.3em] text-cream/50"
          style={{ writingMode: "vertical-rl" }}
        >
          {hero.followLabel}
        </span>
        <div className="w-px h-8 bg-cream/20" />
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram
            size={16}
            className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube
            size={16}
            className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin
            size={16}
            className="text-cream/60 hover:text-accent cursor-pointer transition-colors"
          />
        </a>
      </div>

      {/* ── Main two-column content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-8xl mx-auto container-px w-full py-18 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
            {/* LEFT — text + CTA */}
            <div className="max-w-xl">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              >
                Stories that move. Ideas that stay.
              </motion.p>

              {/* Headline */}
              <h1 className="font-display text-[calc(1.5*1rem)] sm:text-[calc(1.5*2.5rem)] md:text-[calc(1.5*3.75rem)] leading-[0.9] tracking-tight">
                {hero.heading.map((line, i) => {
                  const styleClass =
                    line.fontVariant === "italic"
                      ? "block hero-word--italic text-accent"
                      : line.fontVariant === "bold"
                        ? "block hero-word--bold text-cream"
                        : line.accent
                          ? "block text-accent italic font-semibold"
                          : "block text-cream";

                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.2 + i * 0.09,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={styleClass}
                    >
                      {line.text}
                    </motion.span>
                  );
                })}
              </h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 text-cream/65 text-base sm:text-lg max-w-md leading-relaxed"
              >
                {hero.paragraph}
              </motion.p>

              {/* CTA — only "Explore Our Stories" */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <MagButton
                  as={Link}
                  to="/shows"
                  className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-accent2 transition-colors"
                >
                  {hero.primaryCta} <ArrowRight size={16} />
                </MagButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-10 w-full max-w-xl"
              >
                <div className="bg-panel/60 backdrop-blur-md border border-line/15 rounded-2xl px-4 sm:px-6 py-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.05 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <StatItem stat={s} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
