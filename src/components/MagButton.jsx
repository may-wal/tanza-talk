import { motion } from "framer-motion";

// Cache so we don't call motion.create() on the same component repeatedly.
const motionComponentCache = new Map();

// ---------------------------------------------------------------------------
// MagButton ("magnetic-feeling" button)
// A thin wrapper around framer-motion that gives every CTA in the site the
// same hover/tap micro-interaction: a slight scale up on hover and scale
// down on tap/click, with a spring feel. Renders as a real <a>/<button>, or
// wraps a custom component (like react-router-dom's <Link>) via
// motion.create() so it keeps working with to/href/onClick as normal.
//
// IMPORTANT: `motion[as]` only works when `as` is a plain string tag name
// ("a", "button", "div"...). Passing a component reference (e.g. `Link`)
// through that lookup silently breaks — this is why custom components go
// through `motion.create()` instead.
// ---------------------------------------------------------------------------
export default function MagButton({ as = "a", className = "", children, ...props }) {
  let Tag;

  if (typeof as === "string") {
    Tag = motion[as];
  } else {
    if (!motionComponentCache.has(as)) {
      motionComponentCache.set(as, motion.create(as));
    }
    Tag = motionComponentCache.get(as);
  }

  return (
    <Tag
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}