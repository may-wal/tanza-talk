// ---------------------------------------------------------------------------
// Monogram
//
// A typographic stand-in used wherever the site names a real person we don't
// have a licensed photograph of — the influencer roster, past guests, the
// founder card, episode artwork.
//
// This exists deliberately. The previous build filled those slots with
// unrelated Unsplash stock portraits captioned with real people's names,
// which presents a stranger's face as, say, Jaya Kishori. A monogram says
// "no photo yet" honestly and still gives the card a designed, intentional
// look. Swap in a real licensed image per person as they become available.
//
// The hue is derived from the name so each person keeps a stable colour
// across the site, kept inside a warm amber→ember band so the grid reads as
// one palette rather than a bag of random colours.
// ---------------------------------------------------------------------------

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0; // force 32-bit
  }
  return Math.abs(h);
}

// First letter of the first two words — "Dr. Abhinit Gupta" -> "AG",
// skipping honorifics so the initials identify the person, not the title.
const HONORIFICS = new Set(["dr", "dr.", "col", "col.", "mr", "mr.", "ms", "ms.", "rj"]);

export function initialsOf(name) {
  const words = name
    .split(/\s+/)
    .filter((w) => w && !HONORIFICS.has(w.toLowerCase()));
  const source = words.length ? words : name.split(/\s+/);
  return source
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Monogram({ name, className = "", label }) {
  const hash = hashString(name);
  // Warm band: 18°–44° covers ember red through the brand's amber.
  const hue = 18 + (hash % 27);
  const hue2 = hue + 14;
  const tilt = -20 + (hash % 40);

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(${135 + tilt}deg, hsl(${hue} 62% 17%) 0%, hsl(${hue2} 48% 9%) 62%, hsl(${hue} 30% 6%) 100%)`,
        // Lets the initials scale with the card rather than the viewport, so
        // the same component works in a 4-col grid and a full-width panel.
        containerType: "inline-size",
      }}
    >
      {/* Soft off-centre glow so the tile has depth rather than reading flat */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at ${34 + (hash % 32)}% 28%, hsl(${hue} 78% 52% / 0.28) 0%, transparent 68%)`,
        }}
      />
      <span
        className="relative font-display font-semibold text-cream/85 select-none"
        style={{ fontSize: "clamp(1.75rem, 22cqw, 4rem)", letterSpacing: "0.02em" }}
      >
        {initialsOf(label ?? name)}
      </span>
    </div>
  );
}
