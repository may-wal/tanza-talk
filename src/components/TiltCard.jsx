import { useRef, useState } from "react";

// ---------------------------------------------------------------------------
// TiltCard
// Wraps any card content and gives it a subtle 3D tilt that follows the
// cursor, plus a soft "shine" highlight that tracks the pointer. Used on
// speaker cards, episode cards, and event cards for a tactile feel.
// Pure CSS transforms (no 3D library needed) — cheap and works everywhere.
// On touch devices there's no pointermove, so cards simply stay flat.
// ---------------------------------------------------------------------------
export default function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
  }

  function handleLeave() {
    setTransform("rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  }

  return (
    <div className={`tilt-wrap ${className}`}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ transform, transition: "transform 0.35s cubic-bezier(.22,1,.36,1)" }}
        className="tilt-card relative rounded-2xl"
      >
        {children}
        <div className="tilt-shine absolute inset-0 rounded-2xl" />
      </div>
    </div>
  );
}
