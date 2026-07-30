import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Landmark, Eye, MapPin } from "lucide-react";
import { stats } from "../data/content";
import Reveal from "./Reveal";

const icons = { users: Users, landmark: Landmark, eye: Eye, "map-pin": MapPin };

// Splits "100K+" into a numeric part to count up (100) and a suffix ("K+").
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
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      <motion.div whileHover={{ scale: 1.15, rotate: 6 }} transition={{ type: "spring", stiffness: 300 }}>
        <Icon size={22} className="text-accent" />
      </motion.div>
      <div className="font-display text-2xl sm:text-3xl text-cream tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-cream/50">{stat.label}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// StatsBar
// A 4-up strip of headline numbers that count up from 0 the first time they
// scroll into view. Wraps to a 2x2 grid on mobile.
// ---------------------------------------------------------------------------
export default function StatsBar() {
  return (
    <section className="max-w-8xl mx-auto container-px py-10 md:py-14">
      <Reveal className="bg-panel rounded-3xl border border-line/10 py-10 px-6 sm:px-10 theme-shadow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
