// =====================================================================================
// CENTRAL CONTENT FILE
// Every piece of text, stat, and image URL used across the site lives here.
// To change copy (headlines, names, numbers, links) — edit this file only.
// See INFORMATION.md at the project root for a full section-by-section map.
// =====================================================================================

import logoImage from "../images/Tanza Logo WT.png";
import heroimg from "../images/speaker.png";

export const nav = {
  logo: {
    image: logoImage,
    alt: "Tanza Talks",
  },
  links: [
    { label: "Home", to: "/" },
    { label: "Shows", to: "/shows" },
    { label: "Speakers", to: "/speakers" },
    { label: "Events", to: "/events" },
    { label: "About", to: "/about" },
    { label: "Journal", to: "/journal" },
  ],
  cta: "Partner With Us",
};

export const hero = {
  heading: [
    { text: "Stories", accent: false, fontVariant: "regular" },
    { text: "that deserve", accent: false, fontVariant: "regular" },
    { text: "a stage.", accent: true, fontVariant: "italic" },
  ],
  paragraph:
    "Tanza Talks brings together powerful conversations, inspiring individuals and the untold legacy of institutions across India.",
  primaryCta: "Explore Our Stories",
  secondaryCta: "Watch Showreel",
  followLabel: "Follow Us",
  image: heroimg,
};

export const featuredSeries = {
  eyebrow: "FEATURED ORIGINAL SERIES",
  title: "Journey of Legacy",
  description:
    "A documentary series capturing the people, campuses and stories that shape India's institutions.",
  stats: [
    { label: "Colleges", value: "20+" },
    { label: "Cities", value: "15+" },
    { label: "Episodes", value: "50+" },
  ],
  primaryCta: "Watch Trailer",
  secondaryCta: "Explore the Series",
  // image:
  //   "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
};

// ---------------------------------------------------------------------------
// Shows / episodes. `conversations` is the short list used on the Home page
// ("Latest Conversations"). `showsPage` is the fuller catalogue with
// categories, used on the /shows page.
// ---------------------------------------------------------------------------
export const conversations = {
  eyebrow: "Latest Conversations",
  viewAll: "View All Episodes",
  episodes: [
    {
      tag: "TEST",
      title: "test",
      guest: "test",
      duration: "45:21",
      // image:
      //   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      title: "test",
      guest: "test",
      duration: "38:47",
      // image:
      //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      title: "test",
      guest: "test",
      duration: "41:09",
      // image:
      //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      title: "test",
      guest: "test",
      duration: "32:16",
      // image:
      //   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      title: "test",
      guest: "test",
      duration: "40:33",
      // image:
      //   "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

export const showsPage = {
  eyebrow: "OUR SHOWS",
  title: "Every conversation, series and documentary in one place.",
  description:
    "From founder journeys to campus documentaries — explore the full Tanza Talks catalogue and filter by the topics you care about.",
  categories: [
    "All",
    "Entrepreneurship",
    "Education",
    "Creators",
    "Student Stories",
    "Sports",
  ],
  episodes: [...conversationsEpisodesForShowsPage()],
};

// Builds the fuller /shows catalogue: the 5 Home episodes plus new titles,
// each tagged with a `category` field the Shows page filters on.
function conversationsEpisodesForShowsPage() {
  const base = [
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "45:21",
      // image:
      //   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "38:47",
      // image:
      //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "41:09",
      // image:
      //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "32:16",
      // image:
      //   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "40:33",
      // image:
      //   "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop",
    },
  ];
  const extra = [
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "36:04",
      // image:
      //   "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "29:58",
      // image:
      //   "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "27:41",
      // image:
      //   "https://images.unsplash.com/photo-1610631683407-8409ad2b1c95?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "TEST",
      category: "Test",
      title: "test",
      guest: "test",
      duration: "31:12",
      // image:
      //   "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    },
  ];
  return [...base, ...extra];
}

export const about = {
  eyebrow: "ABOUT TANZA TALKS",
  title: "We create stages for stories that can inspire a generation.",
  description:
    "Tanza Talks is a media and storytelling platform that produces talks, podcasts, documentaries and live experiences. We collaborate with institutions, brands and changemakers to tell stories that create impact and build lasting legacies.",
  pillars: [
    {
      title: "Original Content",
      description:
        "Talks, podcasts and documentaries that highlight ideas, people and real stories.",
      icon: "clapperboard",
    },
    {
      title: "Live Experiences",
      description:
        "Events, campus talks and conversations that bring communities together.",
      icon: "mic",
    },
    {
      title: "Institutional Collaborations",
      description:
        "Partnering with colleges and organizations to document legacies and create impact.",
      icon: "handshake",
    },
  ],
};

// ---------------------------------------------------------------------------
// Full About page content (mission, timeline, team, values) — used on /about.
// The Home page only shows the shorter `about` block above.
// ---------------------------------------------------------------------------
export const aboutPage = {
  eyebrow: "OUR STORY",
  title: "Documenting the people and institutions shaping India.",
  intro:
    "Tanza Talks started as a single campus podcast and grew into a nationwide storytelling platform — one honest conversation at a time.",
  mission:
    "Our mission is simple: give real stories a stage they deserve. Whether it's a founder's hardest year, a professor's life work, or a college's hundred-year legacy, we believe these stories build the culture the next generation grows up in.",
  timeline: [
    {
      year: "2019",
      text: "Tanza Talks began as a weekend podcast recorded in a college hostel room.",
    },
    {
      year: "2021",
      text: "Launched our first live campus event series across 5 cities.",
    },
    {
      year: "2023",
      text: "Started 'Journey of Legacy' — our flagship institutional documentary series.",
    },
    {
      year: "2025",
      text: "Crossed 100K+ viewers and partnered with 20+ institutions nationwide.",
    },
    {
      year: "2026",
      text: "Expanding into long-form founder and creator conversations across India.",
    },
  ],
  values: [
    {
      title: "Authenticity First",
      description: "We chase real answers over rehearsed soundbites.",
      icon: "heart",
    },
    {
      title: "Craft Over Speed",
      description: "Every episode is produced, not just recorded.",
      icon: "sparkles",
    },
    {
      title: "Impact That Lasts",
      description: "We build content institutions and creators keep for years.",
      icon: "trending-up",
    },
  ],
  team: [
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop",
    },
  ],
};

// ---------------------------------------------------------------------------
// Speakers — short list for Home, full directory for /speakers.
// ---------------------------------------------------------------------------
export const speakers = {
  eyebrow: "Featured Speakers",
  viewAll: "View All Speakers",
  featured: {
    badge: "FEATURED",
    name: "test",
    role: "test",
    quote: "test",
    cta: "test",
    // image:
    //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=900&auto=format&fit=crop",
  },
  list: [
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      // image:
      //   "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=700&auto=format&fit=crop",
    },
  ],
};

export const speakersPage = {
  eyebrow: "SPEAKER DIRECTORY",
  title: "The voices behind every Tanza Talks conversation.",
  description:
    "Founders, educators, athletes and creators who've shared their journey on our stage.",
  categories: [
    "All",
    "Business",
    "Education",
    "Creators",
    "Sports",
    "Entertainment",
  ],
  directory: [
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=700&auto=format&fit=crop",
    },
    {
      name: "test",
      role: "test",
      category: "Test",
      // image:
      //   "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=700&auto=format&fit=crop",
    },
  ],
};

// ---------------------------------------------------------------------------
// Events — used on /events.
// ---------------------------------------------------------------------------
export const eventsPage = {
  eyebrow: "UPCOMING EVENTS",
  title: "Meet us in person — live talks, campus tours and screenings.",
  description:
    "Tanza Talks on the road: campus conversations, documentary premieres and live recordings across India.",
  list: [
    {
      title: "test",
      date: "test",
      city: "test",
      venue: "test",
      type: "test",
      // image:
      //   "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      date: "test",
      city: "test",
      venue: "test",
      type: "test",
      // image:
      //   "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      date: "test",
      city: "test",
      venue: "test",
      type: "test",
      // image:
      //   "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      date: "test",
      city: "test",
      venue: "test",
      type: "test",
      // image:
      //   "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      date: "test",
      city: "test",
      venue: "test",
      type: "test",
      // image:
      //   "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=900&auto=format&fit=crop",
    },
  ],
};

// ---------------------------------------------------------------------------
// Journal — articles used on /journal.
// ---------------------------------------------------------------------------
export const journalPage = {
  eyebrow: "THE JOURNAL",
  title: "Notes, essays and behind-the-scenes from the Tanza Talks team.",
  description:
    "Longer reads on the stories, people and craft behind our conversations.",
  articles: [
    {
      title: "test",
      excerpt: "test",
      category: "Test",
      date: "test",
      readTime: "test",
      // image:
      //   "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      excerpt: "test",
      category: "Test",
      date: "test",
      readTime: "test",
      // image:
      //   "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      excerpt: "test",
      category: "Test",
      date: "test",
      readTime: "test",
      // image:
      //   "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      excerpt: "test",
      category: "Test",
      date: "test",
      readTime: "test",
      // image:
      //   "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      excerpt: "test",
      category: "Test",
      date: "test",
      readTime: "test",
      // image:
      //   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "test",
      excerpt: "test",
      category: "Test",
      date: "test",
      readTime: "test",
      // image:
      //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop",
    },
  ],
};

export const stats = [
  { icon: "users", value: "50+", label: "Speakers" },
  { icon: "landmark", value: "20+", label: "Institutions" },
  { icon: "eye", value: "100K+", label: "Viewers" },
  { icon: "map-pin", value: "10+", label: "Cities" },
];

export const footer = {
  tagline: "Documenting stories. Building legacies. Inspiring generations.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Shows", to: "/shows" },
        { label: "Speakers", to: "/speakers" },
        { label: "Events", to: "/events" },
        { label: "Journal", to: "/journal" },
        { label: "Journey of Legacy", to: "/shows" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Partner With Us", to: "/about" },
        { label: "Careers", to: "/about" },
        { label: "Privacy Policy", to: "/about" },
        { label: "Terms & Conditions", to: "/about" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          label: "hello@tanzatalks.com",
          to: "mailto:hello@tanzatalks.com",
          external: true,
        },
        { label: "+91 98765 43210", to: "tel:+919876543210", external: true },
        { label: "Mumbai, India", to: "#", external: true },
      ],
    },
  ],
  newsletter: {
    title: "Stories worth carrying forward.",
    subtitle:
      "Subscribe to get the latest conversations, series updates and event announcements.",
    placeholder: "Enter your email",
  },
  copyright: "© 2026 Tanza Talks. All rights reserved.",
  designedBy: "Designed with passion, built for stories.",
};
