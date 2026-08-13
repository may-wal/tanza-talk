import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Landmark,
  Eye,
  MapPin,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { hero, stats, social } from "../data/content";

// ---------------------------------------------------------------------------
// IMAGE REFERENCES
// Drop these files into src/images/ — the component picks them up automatically.
//
//  heroimg.png        → full auditorium / stage background  (Layer 1)
//  speaker-cutout.png → speaker PNG, ideally with transparent BG (Layer 6)
//
// Until speaker-cutout.png is available, the hero image is reused as a
// masked right-panel composite (still looks great with the gradient mask).
// ---------------------------------------------------------------------------
import heroimg from "../images/stage.png";
import speakerImg from "../images/speaker.png";

// When you have a dedicated speaker cut-out, replace the line below with:
// import speakerImg from "../images/speaker-cutout.png";

// ---------------------------------------------------------------------------
// CONSTANTS — generated outside component to avoid per-render recreation
// ---------------------------------------------------------------------------

// Dust motes: scattered through the frame (not spawned at the bottom edge),
// each with its own gentle rise distance + horizontal sway so they read as
// suspended particles drifting in light, not bubbles rising from below.
const DUST = Array.from({ length: 50 }, (_, i) => {
  const seed = i * 37 + 11;
  return {
    id: i,
    left: (seed * 5) % 100, // horizontal position, %
    top: 6 + ((seed * 9) % 84), // vertical position, % — spread through the frame
    size: 1.8 + ((i * 4) % 4) * 0.5, // px
    rise: 60 + ((i * 11) % 80), // total vertical drift, px
    sway: 14 + ((i * 17) % 28) * (i % 2 === 0 ? 1 : -1), // horizontal sway, px
    dur: 10 + ((i * 5) % 8), // seconds
    delay: (i * 1.8) % 12, // seconds
    opacity: 0.16 + ((i * 3) % 24) / 100,
  };
});

// Bokeh: large, slow, out-of-focus circles for lens depth
const BOKEH = [
  { w: 320, h: 320, x: 8, y: 15, dur: 18, delay: 0, blur: 55 },
  { w: 210, h: 210, x: 73, y: 8, dur: 23, delay: 3, blur: 46 },
  { w: 160, h: 160, x: 46, y: 64, dur: 15, delay: 6, blur: 40 },
  { w: 260, h: 260, x: 84, y: 50, dur: 20, delay: 2, blur: 58 },
  { w: 150, h: 150, x: 26, y: 74, dur: 17, delay: 8, blur: 42 },
];

// Camera flashes: sporadic starburst bursts from the audience area. Timing
// mixes several unrelated periods (delay, cycle, duration) per flash so
// they never settle into a visible loop, and each gets its own tint,
// rotation and blur so no two flashes look identical.
const FLASH_TINTS = [
  "rgba(255,244,222,0.55)", // warm white
  "rgba(226,238,255,0.5)", // cool white
  "rgba(255,232,196,0.5)", // amber white
];

const FLASHES = Array.from({ length: 14 }, (_, i) => {
  const seed = i * 53 + 7;
  const seed2 = i * 29 + 3;
  return {
    id: i,
    left: (seed * 7) % 100,
    top: 38 + ((seed * 13) % 40), // raised — mid-to-upper crowd band, not the very bottom
    size: 2.4 + ((i * 5) % 5) * 0.6, // px, core flash size
    tint: FLASH_TINTS[i % FLASH_TINTS.length],
    rot: (seed2 * 11) % 180, // starburst spike angle
    blur: 1 + (i % 3) * 0.6,
    delay: (i * 2.3 + (i % 3) * 1.4) % 15, // irregular first-fire offset
    burstDur: 0.22 + ((i * 7) % 5) * 0.06, // 0.22–0.46s, varies per flash
    cycle: 5.5 + ((i * 11) % 9) + (i % 2 === 0 ? 2.8 : 0), // irregular repeat gap
  };
});

const iconMap = {
  users: Users,
  landmark: Landmark,
  eye: Eye,
  "map-pin": MapPin,
};

// ---------------------------------------------------------------------------
// StatItem — animated counter
// ---------------------------------------------------------------------------
function splitValue(v) {
  const m = v.match(/^([\d.]+)(.*)$/);
  if (!m) return { number: 0, suffix: v };
  return { number: parseFloat(m[1]), suffix: m[2] };
}

function StatItem({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const Icon = iconMap[stat.icon];
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
// Local keyframes for the atmosphere layer. Scoped to this component so the
// hero doesn't depend on (possibly stale) global keyframes living elsewhere.
// ---------------------------------------------------------------------------
function AtmosphereStyles() {
  return (
    <style>{`
      @keyframes heroDustFloat {
        0%   { transform: translate(0, 0) scale(0.85); opacity: 0; }
        12%  { opacity: var(--dust-o); }
        50%  { transform: translate(calc(var(--dust-sway) * 1px), calc(var(--dust-rise) * -0.55px)) scale(1); }
        88%  { opacity: var(--dust-o); }
        100% { transform: translate(0, calc(var(--dust-rise) * -1px)) scale(0.85); opacity: 0; }
      }
    `}</style>
  );
}

// ---------------------------------------------------------------------------
// Layer 1 — cinematic background image with overlays
// ---------------------------------------------------------------------------
function CinematicBackground({ bgY }) {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0"
      style={{ y: bgY, willChange: "transform" }}
    >
      {/* Stage / auditorium image — slow continuous zoom */}
      <motion.img
        src={heroimg}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="w-full h-full object-cover object-center"
        animate={{ scale: [1, 1.022, 1] }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
        style={{ willChange: "transform" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(11,10,9,0.72)" }}
      />

      {/* Warm orange radial glow rising from the stage floor */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 52% 88%, rgba(232,121,44,0.2) 0%, rgba(180,80,20,0.09) 45%, transparent 75%)",
        }}
      />

      {/* Vignette — darkens the edges like a cinema lens */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 100% at 50% 50%, transparent 28%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* Colour grade — warm shadows top and bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,6,2,0.42) 0%, transparent 28%, transparent 68%, rgba(5,3,1,0.65) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Layer 2 — audience depth blur strip along the bottom
// ---------------------------------------------------------------------------
function AudienceDepth() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 pointer-events-none z-[1]"
      style={{ height: "36%", filter: "blur(1.5px)" }}
      animate={{ x: [0, 6, 0, -6, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,3,1,0.65) 0%, rgba(10,5,2,0.25) 45%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Layer 2b — camera flashes scattered through the audience (visual only)
// ---------------------------------------------------------------------------
function CameraFlashes() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-[2]"
    >
      {FLASHES.map((f) => (
        <motion.div
          key={f.id}
          style={{
            position: "absolute",
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size * 16,
            height: f.size * 16,
            marginLeft: -(f.size * 8),
            marginTop: -(f.size * 8),
          }}
          animate={{
            opacity: [0, 1, 0.35, 0],
            scale: [0.35, 1.2, 0.85, 0.5],
          }}
          transition={{
            duration: f.burstDur,
            delay: f.delay,
            repeat: Infinity,
            repeatDelay: f.cycle,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.16, 0.55, 1],
          }}
        >
          {/* Core glow — soft radial, tinted per-flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255,255,255,0.95) 0%, ${f.tint} 32%, transparent 68%)`,
              filter: `blur(${f.blur}px)`,
            }}
          />
          {/* Starburst spikes — two crossed light streaks give it a real
              camera-flash flare instead of a flat blurred dot */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: f.size * 22,
              height: 1.2,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)",
              transform: `translate(-50%, -50%) rotate(${f.rot}deg)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: f.size * 22,
              height: 1.2,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)",
              transform: `translate(-50%, -50%) rotate(${f.rot + 90}deg)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Layer 3 — spotlight beams
// Rebuilt as soft, rotated, heavily-blurred light columns that fade to a
// pool of light where they meet the stage — reads as a real beam of light
// rather than a flat clipped triangle.
// ---------------------------------------------------------------------------
function SpotlightBeam({ side, opacity, duration, rotateFrom, rotateTo }) {
  const isLeft = side === "left";
  return (
    <motion.div
      className="absolute top-[-18%] pointer-events-none"
      style={{
        [isLeft ? "left" : "right"]: "12%",
        width: 200,
        height: "150%",
        opacity,
        transformOrigin: "top center",
      }}
      animate={{
        rotate: isLeft
          ? [rotateFrom, rotateTo + 4, rotateFrom - 2, rotateFrom]
          : [-rotateFrom, -(rotateTo + 4), -(rotateFrom - 2), -rotateFrom],
        x: isLeft ? [0, 10, -6, 0] : [0, -10, 6, 0],
        opacity: [opacity, opacity + 0.12, opacity - 0.05, opacity],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "linear-gradient(180deg, rgba(255,222,160,0.5) 0%, rgba(255,196,120,0.24) 32%, rgba(255,170,90,0.08) 58%, transparent 82%)",
          filter: "blur(30px)",
        }}
      />
    </motion.div>
  );
}

function Spotlights({ scrollYProgress }) {
  // Brightness increases slightly as the user scrolls — the show is starting
  const opacity1 = useTransform(scrollYProgress, [0, 0.45], [0.28, 0.5]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.45], [0.22, 0.42]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.45], [0.2, 0.38]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-[2]"
    >
      <SpotlightBeam
        side="left"
        opacity={opacity1}
        duration={5}
        rotateFrom={6}
        rotateTo={18}
      />
      <SpotlightBeam
        side="right"
        opacity={opacity2}
        duration={6}
        rotateFrom={8}
        rotateTo={13}
      />

      {/* Ground pools — where each beam lands on the stage floor */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: "10%",
          bottom: "8%",
          width: 280,
          height: 100,
          opacity: opacity1,
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,200,120,0.34) 0%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          right: "12%",
          bottom: "6%",
          width: 240,
          height: 92,
          opacity: opacity2,
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,190,110,0.3) 0%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />

      {/* Centre halo — warm pool of light on the main stage area */}
      <motion.div
        style={{ opacity: haloOpacity }}
        className="absolute inset-0 flex items-end justify-center"
      >
        <div
          style={{
            width: "58%",
            height: "46%",
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,190,80,0.16) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Layer 4 — bokeh (large defocused circles, cinema lens emulation)
// ---------------------------------------------------------------------------
function BokehEffects() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-[3]"
    >
      {BOKEH.map((c, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: c.w,
            height: c.h,
            left: `${c.x}%`,
            top: `${c.y}%`,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,121,44,0.07) 0%, rgba(255,175,60,0.04) 50%, transparent 72%)",
            filter: `blur(${c.blur}px)`,
            willChange: "transform",
          }}
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -14, 10, 0],
          }}
          transition={{
            duration: c.dur,
            delay: c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Layer 5 — ambient floating dust, suspended through the frame
// ---------------------------------------------------------------------------
function DustParticles() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-[4]"
    >
      {DUST.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "rgba(245,214,158,1)",
            filter: "blur(0.3px)",
            "--dust-o": p.opacity,
            "--dust-rise": p.rise,
            "--dust-sway": p.sway,
            animation: `heroDustFloat ${p.dur}s ${p.delay}s ease-in-out infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Layer 6 — speaker, anchored large and clean to the right side of the stage
// ---------------------------------------------------------------------------
function SpeakerLayer({ springX, springY, speakerScrollY }) {
  return (
    // Hidden below lg: on a single-column mobile layout a full-height cutout
    // behind the headline just competes with the text, so it drops out and
    // the auditorium background carries the scene instead.
    <motion.div
      aria-hidden="true"
      className="hidden lg:block absolute inset-y-0 right-0 w-[60%] xl:w-[64%] pointer-events-none z-[5]"
      style={{ y: speakerScrollY, willChange: "transform" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ x: springX, y: springY, willChange: "transform" }}
      >
        {/* Ambient glow behind the speaker — slow breathing pulse */}
        <motion.div
          className="absolute"
          style={{
            right: "2%",
            top: "2%",
            width: "96%",
            height: "96%",
            background:
              "radial-gradient(ellipse 62% 68% at 58% 55%, rgba(232,121,44,0.22) 0%, rgba(200,80,20,0.09) 46%, transparent 72%)",
          }}
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grounding shadow where the speaker meets the stage floor */}
        <div
          className="absolute rounded-full"
          style={{
            right: "4%",
            bottom: "3%",
            width: "56%",
            height: "6%",
            background:
              "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 75%)",
            filter: "blur(6px)",
          }}
        />

        {/* Speaker image — fills the column, anchored bottom-right, soft
            left + bottom mask so it blends into the scene instead of reading
            as a pasted cutout with an exposed base. The bottom fade lives in
            the mask itself (not a separate overlay), so it travels correctly
            with the image under scroll parallax instead of detaching from it. */}
        <img
          src={speakerImg}
          alt="Speaker on stage"
          className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom translate-x-[10%]"
          style={{
            filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.4))",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,1) 11%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,1) 11%, rgba(0,0,0,1) 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Layer 6b — stage floor blend, pinned to the section's true bottom edge.
// Deliberately NOT nested inside SpeakerLayer's parallax transform: it used
// to move together with the speaker on scroll, which detached its hard
// bottom edge from the real section bottom and left a visible floating
// rectangle. Kept as a static sibling instead, so it always sits flush with
// the actual bottom of the hero regardless of scroll position.
// ---------------------------------------------------------------------------
function StageFloorBlend() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 pointer-events-none z-[6]"
      style={{
        height: "9%",
        background:
          "linear-gradient(to top, rgba(11,10,9,0.95) 0%, rgba(11,10,9,0.55) 45%, rgba(11,10,9,0.15) 78%, transparent 100%)",
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Scroll indicator — simple outlined button with a bouncing chevron
// ---------------------------------------------------------------------------
function ScrollIndicator() {
  const handleClick = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 select-none group"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.2, duration: 0.8 }}
      aria-label="Scroll to explore"
    >
      <span className="text-cream/35 group-hover:text-cream/60 text-[10px] tracking-[0.22em] uppercase font-medium transition-colors duration-300">
        Scroll
      </span>

      <span className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 group-hover:border-accent/60 transition-colors duration-300">
        <motion.svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
          className="text-accent/70 group-hover:text-accent transition-colors duration-300"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </span>
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// First-visit intro overlay — near-dark → spotlight sweep → scene revealed
// ---------------------------------------------------------------------------
function IntroOverlay({ onComplete }) {
  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        className="absolute inset-0 z-30 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.4, delay: 1.6, ease: "easeOut" }}
        onAnimationComplete={onComplete}
        style={{ background: "rgba(0,0,0,0.94)" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "220%", opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,215,130,0.12) 38%, rgba(255,215,130,0.28) 50%, rgba(255,215,130,0.12) 62%, transparent 100%)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Social rail — desktop only
// ---------------------------------------------------------------------------
function SocialRail() {
  return (
    <div className="hidden lg:flex flex-col items-center gap-5 absolute left-6 top-1/2 -translate-y-1/2 z-10">
      <span
        className="text-[10px] tracking-[0.3em] text-cream/35 uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        {hero.followLabel}
      </span>
      <div className="w-px h-8 bg-cream/15" />
      <a
        href={social.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="text-cream/35 hover:text-accent transition-colors duration-300"
      >
        <FaInstagram size={15} />
      </a>
      <a
        href={social.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
        className="text-cream/35 hover:text-accent transition-colors duration-300"
      >
        <FaYoutube size={15} />
      </a>
      <a
        href={social.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-cream/35 hover:text-accent transition-colors duration-300"
      >
        <FaLinkedin size={15} />
      </a>
    </div>
  );
}

// ===========================================================================
// HERO — main export
// ===========================================================================
export default function Hero() {
  const sectionRef = useRef(null);

  // ── Intro sequence state ──────────────────────────────────────────────────
  const hasSeenIntro =
    typeof localStorage !== "undefined"
      ? !!localStorage.getItem("tt-intro-seen")
      : true;
  const [introComplete, setIntroComplete] = useState(hasSeenIntro);
  const [showIntro, setShowIntro] = useState(!hasSeenIntro);

  const handleIntroComplete = useCallback(() => {
    localStorage.setItem("tt-intro-seen", "1");
    setIntroComplete(true);
    setShowIntro(false);
  }, []);

  // ── Cursor parallax ───────────────────────────────────────────────────────
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 48, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 48, damping: 22 });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
      rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 12);
    },
    [rawX, rawY],
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  // ── Scroll-driven parallax + spotlight brightness ─────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const speakerScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  const d = introComplete && !hasSeenIntro ? 0.05 : 0.15;
  const mk = (offset) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 22 },
    transition: { duration: 0.7, delay: d + offset, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden min-h-[78vh] flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ background: "#0B0A09" }}
    >
      <AtmosphereStyles />

      {/* ── LAYER 1 — Cinematic auditorium background ── */}
      <CinematicBackground bgY={bgY} />

      {/* ── LAYER 2 — Audience depth (blurred floor strip) ── */}
      <AudienceDepth />

      {/* ── LAYER 2b — Camera flashes from the crowd ── */}
      <CameraFlashes />

      {/* ── LAYER 3 — Spotlight beams ── */}
      <Spotlights scrollYProgress={scrollYProgress} />

      {/* ── LAYER 4 — Bokeh / cinema-lens defocus circles ── */}
      <BokehEffects />

      {/* ── LAYER 5 — Ambient floating dust ── */}
      <DustParticles />

      {/* ── LAYER 6 — Speaker, right side, cursor + scroll parallax ── */}
      <SpeakerLayer
        springX={springX}
        springY={springY}
        speakerScrollY={speakerScrollY}
      />

      {/* ── LAYER 6b — Stage floor blend, pinned (doesn't scroll with speaker) ── */}
      <StageFloorBlend />

      {/* ── LAYER 7 — UI: nav rail, headline, CTA, stats ── */}
      <SocialRail />

      <motion.div
        className="relative z-10 flex-1 flex items-center"
        style={{ y: contentY }}
      >
        <div className="max-w-8xl mx-auto container-px w-full py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* ── LEFT COLUMN — text + CTA ── */}
            <div className="max-w-xl">
              {/* Eyebrow */}
              <motion.div {...mk(0)} className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent shrink-0" />
                <p className="text-accent text-[11px] font-semibold tracking-[0.28em] uppercase">
                  Stories that move. Ideas that stay.
                </p>
              </motion.div>

              {/* Headline — revealed line by line */}
              <h1 className="font-display text-[2.6rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.88] tracking-tight overflow-visible z-20">
                {hero.heading.map((line, i) => {
                  const isItalicAccent =
                    line.fontVariant === "italic" || line.accent;
                  const isBold = line.fontVariant === "bold";

                  return (
                    <motion.span
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 32,
                        clipPath: "inset(0 0 100% 0)",
                      }}
                      animate={
                        introComplete
                          ? { opacity: 1, y: 0, clipPath: "inset(0 0 -20% 0)" }
                          : {}
                      }
                      transition={{
                        duration: 0.78,
                        delay: d + 0.14 + i * 0.13,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`block ${
                        isItalicAccent
                          ? "hero-word--italic text-accent"
                          : isBold
                            ? "hero-word--bold text-cream"
                            : "text-cream"
                      }`}
                    >
                      {line.text}
                    </motion.span>
                  );
                })}
              </h1>

              {/* Paragraph */}
              <motion.p
                {...mk(0.6)}
                className="mt-6 text-cream/58 text-base sm:text-lg max-w-md leading-relaxed"
              >
                {hero.paragraph}
              </motion.p>

              {/* CTA buttons — primary with light sweep on hover, secondary outlined */}
              <motion.div {...mk(0.82)} className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  id="hero-cta"
                  className="hero-cta-btn group inline-flex items-center gap-3 bg-accent text-bg font-semibold text-sm px-8 py-4 rounded-full"
                >
                  <span className="relative z-10">{hero.primaryCta}</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                  <span className="hero-cta-sweep" aria-hidden="true" />
                </Link>
                <Link
                  to="/media"
                  className="inline-flex items-center gap-2 border border-cream/30 text-cream text-sm font-medium px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {hero.secondaryCta}
                </Link>
              </motion.div>

              {/* Stats strip */}
              <motion.div {...mk(1.04)} className="mt-10 w-full max-w-xl">
                <div className="bg-panel/35 backdrop-blur-md border border-white/[0.07] rounded-2xl px-4 sm:px-6 py-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 14 }}
                        animate={
                          introComplete
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 14 }
                        }
                        transition={{
                          duration: 0.55,
                          delay: d + 1.12 + i * 0.09,
                          ease: "easeOut",
                        }}
                      >
                        <StatItem stat={s} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            {/* RIGHT COLUMN — reserved for the speaker layer (absolute, Layer 6) */}
          </div>
        </div>
      </motion.div>

      {/* Microphone-style scroll indicator */}
      <ScrollIndicator />

      {/* First-visit intro overlay */}
      {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
    </section>
  );
}