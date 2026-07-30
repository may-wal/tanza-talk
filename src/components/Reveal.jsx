import { motion } from "framer-motion";

// ---------------------------------------------------------------------------
// Reveal
// Fades + slides content up into place the first time it scrolls into view.
// Wrap any section/element: <Reveal><h2>...</h2></Reveal>. `delay` staggers
// multiple Reveals in the same section for a cascading effect.
// ---------------------------------------------------------------------------
export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
