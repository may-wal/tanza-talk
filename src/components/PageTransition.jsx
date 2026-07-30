import { motion } from "framer-motion";

// ---------------------------------------------------------------------------
// PageTransition
// Wraps each page's top-level content so navigating between routes fades
// and slides the new page in, instead of an abrupt swap. Used at the top of
// every file in src/pages/.
// ---------------------------------------------------------------------------
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
