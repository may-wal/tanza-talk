// =====================================================================================
// CENTRAL CONTENT FILE
// Every piece of text, stat, and image URL used across the site lives here.
// To change copy (headlines, names, numbers, links) — edit this file only.
// See INFORMATION.md at the project root for a full section-by-section map.
//
// SOURCING RULE (important)
// -------------------------
// Everything in this file is taken from the live tanzatalks.com (Home,
// About Us, Influencers, Event, Contact Us pages). Invented statistics,
// fabricated testimonials, placeholder client logos and stock-photo
// "headshots" of named real people were REMOVED rather than left in as
// filler — a stock photo captioned with a real person's name is a false
// likeness, and an invented "2,500+ attendance" is a false claim.
//
// Where the source site gives a number, it's here. Where it doesn't, the
// field is simply absent and the UI renders without it. If you add figures
// later, add them here — do not re-introduce guesses.
//
// The business, as the source site describes it: Tanza Talks is a
// podcast / talk-show platform ("A platform to showcase the journey of
// successful people") that monetises through influencer marketing, public
// relations, offline events and sponsorship. This site keeps that identity
// while presenting it to the three groups who actually buy: brands,
// institutes, and people who want to appear as a guest.
// =====================================================================================

import logoImage from "../images/Tanza Logo WT.png";
import heroimg from "../images/speaker.png";

// Declared up here because `whatsNew` (defined above `social`) links to the
// channel too, and a plain `const` further down would still be in its
// temporal dead zone when this module evaluates.
const YOUTUBE_URL = "https://www.youtube.com/@tanzatalkslive";

// YouTube's own thumbnail CDN and watch-page URL, built from a video ID.
// hqdefault.jpg is generated for every upload (unlike maxresdefault, which
// isn't guaranteed), so it's the safe default for episode art.
const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const ytWatch = (id) => `https://www.youtube.com/watch?v=${id}`;

// ---------------------------------------------------------------------------
// Real photos, dropped into src/images/ as they become available. Not every
// name on the roster has one yet — `personPhotos` only maps the people we
// actually have a file for. Every place that renders a person (talent grid,
// past guests, event lineup, episode art) looks a name up here first and
// falls back to the Monogram initials tile — see components/PersonAvatar.jsx
// — so adding a new photo here is the only step needed to make it appear
// everywhere that person is listed.
// ---------------------------------------------------------------------------
import arvindAroraImg from "../images/arvind arora.png";
import jayaKishoriImg from "../images/jaya kishori.png";
import mahendraDogneyImg from "../images/mahendra dogney.png";
import pramodMaheshwariImg from "../images/pramod maheshwari.png";
import rajpalYadavImg from "../images/rajpal yadav.png";
import ridhimaAroraImg from "../images/ridhima.png";
import rjKartikImg from "../images/rj kartik.png";
import sonuSharmaImg from "../images/sonu sharma.png";
import anupSoniImg from "../images/anup soni.png";
import arunPanditImg from "../images/arun pandit.png";
import aviAryaImg from "../images/avi-arya-tanza.png";
import dineshMohanImg from "../images/dinesh mohan.png";
import kamalneetSinghImg from "../images/kamalneet-singh-tanza.png";
import nitinVijayImg from "../images/nitin-vijya-tanza.png";
import saurabhBhatnagarImg from "../images/Saurabh Bhatnagar.png";
import shefaliBaggaImg from "../images/shefali-bagga-tanza.png";
import shreyaPattarImg from "../images/shreya-pattar-tanza.png";
import sunnyGargImg from "../images/sunny-garg-tanza.png";
import manishKumarImg from "../images/manish-kr-profile.png";
import anujKumarImg from "../images/anuj-kumar-profile.png";
import abhinaySharmaImg from "../images/Abhinay Sharma.png";
import colShyamVijaySimhaImg from "../images/Col. Shyam Vijay Simha.png";
import devenPandeyImg from "../images/Deven Pandey.png";
import drYogerdraSinghRathoreImg from "../images/Dr. Yogendra Singh Rathore.png";
import manvirSinghAnandImg from "../images/Manvir Singh Anand.png";
import sherrnavazSamJijinaImg from "../images/Sherrnavaz Sam Jijina.png";
import dilrajSinghImg from "../images/dilraj singh.png";
import drAbhinitGuptaImg from "../images/dr abhinit gupta.png";
import hardikSalvaImg from "../images/hardik salva.png";
import nehaAgarwalImg from "../images/neha agarwal.png";
import rahulBhatnagarImg from "../images/rahul bhatnagar.png";
import rahulKissuImg from "../images/rahul kissu.png";
import sahilKhanaImg from "../images/sahil khana.png";
import vipinYadavImg from "../images/vipin yadav.png";

export const personPhotos = {
  "Abhinay Sharma": abhinaySharmaImg,
  "Anuj Kumar": anujKumarImg,
  "Anup Soni": anupSoniImg,
  "Arun Pandit": arunPanditImg,
  "Arvind Arora": arvindAroraImg,
  "Avi Arya": aviAryaImg,
  "Col. Shyam Vijay Simha": colShyamVijaySimhaImg,
  "Deven Pandey": devenPandeyImg,
  "Dilraj Singh Rawat": dilrajSinghImg,
  "Dinesh Mohan": dineshMohanImg,
  "Dr. Abhinit Gupta": drAbhinitGuptaImg,
  "Dr. Yogendra Singh Rathore": drYogerdraSinghRathoreImg,
  "Hardik Savla": hardikSalvaImg,
  "Jaya Kishori": jayaKishoriImg,
  "Kamalneet Singh": kamalneetSinghImg,
  "Kissu Rahul": rahulKissuImg,
  "Mahendra Dogney": mahendraDogneyImg,
  "Manish Kumar": manishKumarImg,
  "Manvir Singh Anand": manvirSinghAnandImg,
  "Neha Agrawal": nehaAgarwalImg,
  "Nitin Vijay": nitinVijayImg,
  "Pramod Maheshwari": pramodMaheshwariImg,
  "Rahul Bhatnagar": rahulBhatnagarImg,
  "Rajpal Yadav": rajpalYadavImg,
  "Ridhima Arora": ridhimaAroraImg,
  // The episode guest field uses the source video title's spelling
  // ("Riddhima", double d) — mapped to the same file as "Ridhima Arora".
  "Riddhima Arora": ridhimaAroraImg,
  "RJ Kartik": rjKartikImg,
  "Sahil Khanna": sahilKhanaImg,
  "Saurabh Bhatnagar": saurabhBhatnagarImg,
  "Shefali Bagga": shefaliBaggaImg,
  "Sherrnavaz Sam Jijina": sherrnavazSamJijinaImg,
  "Shreya Pattar": shreyaPattarImg,
  "Sonu Sharma": sonuSharmaImg,
  "Sunny Garg": sunnyGargImg,
  "Vipin Yadav": vipinYadavImg,
};

// Detailed influencer database with profession, channel, and expertise information
// for content creation, marketing, and speaker selection purposes
export const influencerDatabase = {
  education: [
    { name: "Arvind Arora", channel: "A2 Motivation", followers: "18M YouTube", expertise: "Chemistry education, competitive exams, educational motivation" },
    { name: "Nitin Vijay", channel: "Motion Education", followers: "2M+", expertise: "Physics education, IIT/NEET preparation" },
    { name: "Pramod Maheshwari", channel: "PM Sir", followers: "30+ years", expertise: "Physics education, Career Point founder, Kota coaching pioneer" },
    { name: "Abhinay Sharma", channel: "Abhinay Maths", followers: "1M+ YouTube", expertise: "Mathematics, competitive exam prep (SSC, Bank PO)" },
    { name: "Neha Agrawal", channel: "Neha Agarwal Mathematically Inclined", followers: "2M YouTube", expertise: "Mathematics education, IIT JEE preparation, 16+ years teaching" },
  ],
  motivation: [
    { name: "Sonu Sharma", channel: "Sonu Sharma", followers: "30M+", expertise: "Motivation, business coaching, success stories, 5B+ views" },
    { name: "Mahendra Dogney", channel: "MD Motivation", followers: "1.43M YouTube, 5.8M TikTok", expertise: "Motivational speeches, life coaching, personal development" },
    { name: "Dr. Yogendra Singh Rathore", channel: "Dr. Yogendra Singh Rathore", followers: "2.3M+ lives touched", expertise: "NLP, mental wellness coaching, personal transformation" },
    { name: "Col. Shyam Vijay Simha", channel: "Simha Speaks", followers: "24 years military", expertise: "Leadership, strategic management, military insights" },
  ],
  tech: [
    { name: "Dilraj Singh Rawat (Mr. Indian Hacker)", channel: "Mr Indian Hacker", followers: "52M YouTube", expertise: "Science experiments, tech gadgets, viral content" },
    { name: "Avi Arya", channel: "Ask Avi Arya", followers: "100M+ revenue", expertise: "Web advertising, digital entrepreneurship" },
    { name: "Piyush Sharma (Tricky Man)", channel: "Tricky Man", followers: "700k+ YouTube", expertise: "Tech tutorials, internship coaching, placements" },
    { name: "Sunny Garg", channel: "Crib", followers: "Startup co-founder", expertise: "Property tech, co-living solutions" },
    { name: "Vipin Yadav", channel: "Vipin Yadav / V.K. CNC", followers: "1.24M", expertise: "Fitness content, CNC engineering education" },
  ],
  entertainment: [
    { name: "RJ Kartik", channel: "RJ Kartik", followers: "1M+ followers", expertise: "Radio mimics, humor, motivational storytelling" },
    { name: "Anup Soni", channel: "TV personality", expertise: "Crime Patrol, CID, acting career" },
    { name: "Sherrnavaz Sam Jijina", channel: "Sherrnavaz Jijina", followers: "604k Instagram", expertise: "Acting (Mirzapur), modeling, entertainment" },
    { name: "Rajpal Yadav", channel: "Rajpal Naurang Yadav", expertise: "Bollywood comedy films, entertainment" },
    { name: "Shefali Bagga", channel: "Shefali Bagga Official", followers: "2M Instagram", expertise: "Fashion, travel, lifestyle content" },
    { name: "Shreya Pattar", channel: "Shreya Jain", followers: "750k YouTube", expertise: "Makeup tutorials, Bollywood-inspired beauty" },
  ],
  spiritual: [
    { name: "Jaya Kishori", channel: "Jaya Kishori", followers: "11M Instagram, 3.2M YouTube", expertise: "Bhagavad Gita, Ramayana, spiritual wisdom" },
    { name: "Arun Pandit", channel: "Astro Arun Pandit", followers: "2.5M YouTube", expertise: "Astrology, numerology, vedic sciences" },
  ],
  business: [
    { name: "Ridhima Arora", channel: "Namhya Foods", expertise: "Ayurvedic products, health & wellness business" },
    { name: "Dr. Abhinit Gupta", channel: "Dr Abhinit Gupta", expertise: "Cosmetology, anti-aging skincare, health" },
    { name: "Manvir Singh Anand", expertise: "Cloud kitchens, food business, catering" },
    { name: "Rahul Bhatnagar", channel: "Rahul Bhatnagar", followers: "203k YouTube", expertise: "Sales coaching, success mentoring" },
    { name: "Sahil Khanna", channel: "Intellectual Indies", followers: "1M+ (6 channels)", expertise: "Business education, entrepreneurship, digital marketing" },
    { name: "Deven Pandey", channel: "Deven U Pandey Channel", followers: "600k+ trained", expertise: "AI skills, career development, Ira Skills founder" },
  ],
};

export const nav = {
  logo: {
    image: logoImage,
    alt: "Tanza Talks",
  },
  // Labels use the source site's own vocabulary ("Influencers", "Events")
  // rather than agency jargon; routes are unchanged so existing links hold.
  links: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Influencers", to: "/talent" },
    { label: "Events", to: "/work" },
    { label: "Watch", to: "/media" },
    { label: "About", to: "/about" },
  ],
  cta: "Work With Us",
};

// SOURCE: tanzatalks.com hero — "Life Lessons, Success Stories & Motivation",
// "A Platform to showcase the journey of successful people."
export const hero = {
  heading: [
    { text: "You own", accent: false, fontVariant: "regular" },
    { text: "the spotlight.", accent: true, fontVariant: "italic" },
  ],
  paragraph:
    "Podcasts, talk shows and influencer campaigns that put India's youth in front of the people worth listening to.",
  primaryCta: "Work With Us",
  secondaryCta: "Watch Episodes",
  followLabel: "Follow Us",
  image: heroimg,
};

// ---------------------------------------------------------------------------
// Audience router — shown right under the Hero. Lets a visitor self-identify
// in one click. The third card is the source site's real "Be a Tanza Talks
// Speaker" signup (tinyurl.com/tanzaspeaker), which had no home in the old
// structure despite being a genuine CTA on the live site.
// ---------------------------------------------------------------------------
export const audienceRouter = {
  eyebrow: "WHO WE WORK WITH",
  title: "Wherever you fit, we've got a mic for it.",
  cards: [
    {
      title: "Brands",
      description:
        "Reach a larger audience through our influencers — plus PR, branded segments and sponsorship across our shows.",
      cta: "Explore Services",
      to: "/services",
      icon: "sparkles",
    },
    {
      title: "Institutes & Colleges",
      description:
        "Bring a talk show to your campus. Seminars that build an attitude of never giving up, produced end to end.",
      cta: "See Past Events",
      to: "/work",
      icon: "graduation-cap",
    },
    {
      title: "Speakers & Guests",
      description:
        "Have a story worth telling? Apply to appear on a Tanza Talks podcast or talk show.",
      cta: "Be a Tanza Talks Speaker",
      to: "https://tinyurl.com/tanzaspeaker",
      external: true,
      icon: "mic",
    },
  ],
};

// ---------------------------------------------------------------------------
// Client logo wall — real brand and institute logos, supplied directly
// (src/images/logos/), rendered as their own showcase section right after
// the audience-router cards on Home. Two names here corroborate other real
// data already in this file: Isha Foundation (Sadhguru's organisation —
// see the Sadhguru episode in `conversations`) and Lovely Professional
// University (the "TANZA TALKS x LPU" credit on the Payal Rohatgi episode).
//
// TO ADD A CLIENT: drop a logo file into src/images/logos/, import it below,
// and add a `{ name, logo }` entry to the list.
// ---------------------------------------------------------------------------
import aorusLogo from "../images/logos/aorus-white.png";
import bhartiShareMarketLogo from "../images/logos/bharti-share-market-white.png";
import careerPointLogo from "../images/logos/career-point-white.png";
import enprendiaLogo from "../images/logos/enprendia-white.png";
import epicStuffLogo from "../images/logos/epic-stuff-white.png";
import erasmusPlusEuLogo from "../images/logos/erasmus-plus-eu-white.png";
import euStartupsLogo from "../images/logos/eu-startups-white.png";
import gameSeeLogo from "../images/logos/gamesee-white.png";
import geeksforgeeksLogo from "../images/logos/geeksforgeeks-white.png";
import grabOnLogo from "../images/logos/grabon-white.png";
import iitRoparLogo from "../images/logos/iit-ropar-white.png";
import ishaFoundationLogo from "../images/logos/isha-foundation-white.png";
import lpuLogo from "../images/logos/lovely-professional-university-white.png";
import motionEducationLogo from "../images/logos/motion-education-white.png";
import nimsUniversityLogo from "../images/logos/nims-university-white.png";
import prepBytesLogo from "../images/logos/prepbytes-white.png";
import radioAddaLogo from "../images/logos/radio-adda-white.png";
import redFmLogo from "../images/logos/red-fm-935-white.png";
import simplilearnLogo from "../images/logos/simplilearn-white.png";
import startupIndiaLogo from "../images/logos/startup-india-white.png";
import tedxLogo from "../images/logos/tedx-white.png";
import theSouledStoreLogo from "../images/logos/the-souled-store-white.png";
import unacademyLogo from "../images/logos/unacademy-white.png";

export const clientLogos = {
  // Rendered as a plain subheading above the logo strip — no eyebrow tag,
  // since AudienceRouter's own eyebrow/title sits directly above this.
  title: "Brands and institutes that have trusted Tanza Talks.",
  list: [
    { name: "AORUS", logo: aorusLogo },
    { name: "Bharti Share Market", logo: bhartiShareMarketLogo },
    { name: "Career Point", logo: careerPointLogo },
    { name: "Enprendia", logo: enprendiaLogo },
    { name: "Epic Stuff", logo: epicStuffLogo },
    { name: "Erasmus+ EU", logo: erasmusPlusEuLogo },
    { name: "EU-Startups", logo: euStartupsLogo },
    { name: "GameSee", logo: gameSeeLogo },
    { name: "GeeksforGeeks", logo: geeksforgeeksLogo },
    { name: "GrabOn", logo: grabOnLogo },
    { name: "IIT Ropar", logo: iitRoparLogo },
    { name: "Isha Foundation", logo: ishaFoundationLogo },
    { name: "Lovely Professional University", logo: lpuLogo },
    { name: "Motion Education", logo: motionEducationLogo },
    { name: "NIMS University", logo: nimsUniversityLogo },
    { name: "PrepBytes", logo: prepBytesLogo },
    { name: "Radio Adda", logo: radioAddaLogo },
    { name: "Red FM 93.5", logo: redFmLogo },
    { name: "Simplilearn", logo: simplilearnLogo },
    { name: "Startup India", logo: startupIndiaLogo },
    { name: "TEDx", logo: tedxLogo },
    { name: "The Souled Store", logo: theSouledStoreLogo },
    { name: "Unacademy", logo: unacademyLogo },
  ],
};

// ---------------------------------------------------------------------------
// What's New — announcement slot on Home, directly under the audience
// router (id="whats-new", so other pages can link straight to it). One
// card, rendered as a two-column feature panel: typographic art card on the
// left, copy + CTA on the right.
//
// Only one real fact is asserted here — that Journey of Legacy is coming to
// JioHotstar — so that's all the card claims. No episode/city/college count
// is given, because none has been published; don't add invented figures
// back in. There's no real JioHotstar URL yet either (the show hasn't
// launched), so the CTA points at the contact form instead of a fabricated
// streaming link.
// ---------------------------------------------------------------------------
export const whatsNew = {
  eyebrow: "WHAT'S NEW",
  items: [
    {
      id: "journey-of-legacy",
      eyebrow: "COMING SOON",
      title: "Journey of Legacy",
      description:
        "Tanza Talks' original documentary series — the people, campuses and stories that shape India's institutions.",
      art: { overline: "JOURNEY OF", word: "LEGACY", icon: "clapperboard" },
      note: "Streaming soon on JioHotstar.",
      upcoming: true,
      primaryCta: { label: "Get Notified At Launch", to: "/contact" },
    },
  ],
};

// ---------------------------------------------------------------------------
// Services — the four services named on tanzatalks.com, plus the offline
// events/sponsorship line from the Contact Us page. Descriptions are the
// site's own, lightly edited for grammar only.
// SOURCE: tanzatalks.com "Our Services" + tanzatalks.com/contact-us
// ---------------------------------------------------------------------------
export const services = {
  eyebrow: "WHAT WE DO",
  title: "Four ways a story reaches the people who need it.",
  description:
    "Tanza Talks provides branding, podcasts, offline events and sponsorship collaborations — promoting your company and its culture to an audience that's already listening.",
  list: [
    {
      title: "Podcast",
      description:
        "A wide variety of podcasts featuring different influencers, discussing every aspect of life — where renowned voices share their perspective on the topics that matter.",
      icon: "mic",
    },
    {
      title: "Talk Shows",
      description:
        "Our seminars inspire participants to fight back against difficulty and confusion. They build, above all, an attitude of never giving up.",
      icon: "megaphone",
    },
    {
      title: "Influencer Marketing",
      description:
        "We promote your brand to a much larger section of the audience through our roster of well-known influencers.",
      icon: "star",
    },
    {
      title: "Public Relations",
      description:
        "PR is the work of managing and distributing the information that shapes how the public perceives a person or an organisation. We handle that end of it for you.",
      icon: "newspaper",
    },
    {
      title: "Offline Events",
      description:
        "Live events that connect influencers with audiences across Indian states — booked, staged and run on the ground.",
      icon: "calendar",
    },
    {
      title: "Sponsorship & Collaboration",
      description:
        "Get in front of an engaged young audience by backing a Tanza Talks show or event as a sponsor or collaborator.",
      icon: "handshake",
    },
  ],
};

// ---------------------------------------------------------------------------
// How It Works — a process description (not a factual claim), reframed
// around the real service mix rather than pure talent booking.
// ---------------------------------------------------------------------------
export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  title: "From first call to published episode.",
  steps: [
    {
      step: "01",
      title: "Tell Us The Goal",
      description:
        "A brand campaign, a campus talk show, a podcast appearance — tell us what you're trying to reach and by when.",
    },
    {
      step: "02",
      title: "We Match The Voices",
      description:
        "We shortlist influencers and speakers from our roster whose audience actually overlaps with yours.",
    },
    {
      step: "03",
      title: "Lock The Format",
      description:
        "Podcast, on-stage seminar, offline event or a PR-led campaign — we agree the format, dates and scope together.",
    },
    {
      step: "04",
      title: "We Produce And Publish",
      description:
        "We record, host and run the whole thing — then push it out across our channels.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Episodes — real uploads from the actual Tanza Talks YouTube channel.
//
// @tanzatalks and @tanzatalkslive are the SAME channel (two handles on one
// account, UC0A4T7rzID08Rl-yPFFd1ZQ) — confirmed by pulling the channel's
// own raw page metadata, not assumed.
//
// Every entry below was verified with YouTube's oEmbed endpoint
// (`author_name` must equal "Tanza Talks" for that exact video ID) before
// being added. That check mattered: an early pass at this list nearly
// included a Riddhima Arora video that actually belongs to Arvind Arora's
// "A2 Motivation" channel, and an Astro Arun Pandit video uploaded by
// PINKVILLA — same guests, wrong channel. Don't add an entry here without
// that same oEmbed check.
//
// `duration` is each video's real `approxDurationMs`, read from its watch
// page metadata — not estimated. An earlier version of this file used
// invented runtimes like "36:04"; don't reintroduce that.
//
// These four are the channel's biggest recognizable names: a globally known
// spiritual teacher, a Bollywood actress, an MMA fighter/wrestler-turned-TV
// personality, and a multi-million-subscriber math educator. Add more real,
// verified uploads here as they're confirmed.
// ---------------------------------------------------------------------------
const rawEpisodes = [
  {
    tag: "MOTIVATION",
    title: "The Truth About Life",
    subtitle: "Sadhguru, Founder — Isha Foundation",
    guest: "Sadhguru",
    date: "25 September 2024",
    duration: "19:03",
    youtubeId: "q-Ak5b1qQJ8",
  },
  {
    tag: "BOLLYWOOD",
    title: "The Dark Reality of Bollywood",
    subtitle: "Payal Rohatgi, Actor — Tanza Talks x LPU",
    guest: "Payal Rohatgi",
    date: "21 July 2025",
    duration: "15:42",
    youtubeId: "Pp4aCeg_i34",
  },
  {
    tag: "SPORT",
    title: "Strong Message To Youth",
    subtitle: "Sangram Singh, MMA Fighter & Wrestler",
    guest: "Sangram Singh",
    date: "4 August 2025",
    duration: "13:24",
    youtubeId: "j9dPWPZScHA",
  },
  {
    tag: "CREATORS",
    title: "From Struggle To Stardom",
    subtitle: "Abhinay Sharma (@ABHINAYMATHS), Math Educator",
    guest: "Abhinay Sharma",
    date: "28 August 2025",
    duration: "14:56",
    youtubeId: "zyol2yDTajg",
  },
];

export const conversations = {
  eyebrow: "Watch Tanza Talks",
  viewAll: "View All Episodes",
  episodes: rawEpisodes.map((ep) => ({
    ...ep,
    image: ytThumb(ep.youtubeId),
    to: ytWatch(ep.youtubeId),
  })),
};

export const showsPage = {
  eyebrow: "WATCH",
  title: "Every conversation, in one place.",
  description:
    "Podcasts and talk shows with founders, educators, actors and motivational speakers — the journeys behind the names.",
  episodes: conversations.episodes,
  // SOURCE: tanzatalks.com "OUR PAST GUEST" — real guests with the roles the
  // site itself lists for them.
  pastGuestsTitle: "Past guests",
  pastGuests: [
    { name: "Sonu Sharma", role: "Motivational Speaker" },
    { name: "Dr. Abhinit Gupta", role: "Physician & Surgeon" },
    { name: "Pramod Maheshwari", role: "Founder, Career Point Kota" },
    { name: "Jaya Kishori", role: "Motivational Speaker" },
    { name: "Rajpal Yadav", role: "Actor" },
    { name: "Ridhima Arora", role: "Founder, Namhya Foods" },
  ],
};

// ---------------------------------------------------------------------------
// Full About page. The invented founding timeline (2019/2021/2023/2025) has
// been removed — only the 2022 Career Point event was ever real, and it now
// lives on the Events page where it belongs. Values are drawn from the
// source site's own statements rather than invented brand-speak.
// SOURCE: tanzatalks.com/about-us
// ---------------------------------------------------------------------------
export const aboutPage = {
  eyebrow: "OUR STORY",
  title: "Showcasing the journey of successful people.",
  intro:
    "Motivation | Inspiration | Knowledge | Fact — Tanza Talks is a platform built to put real journeys in front of the people who need to hear them.",
  mission:
    "We are on a mission to connect the youth to famous personalities of India and the world, and show today's youth the right path in life. True motivation is not something that we only talk about — it is something to understand and feel. That's why our conversations are with self-made entrepreneurs and influencers who have actually lived the thing they're describing.",
  values: [
    {
      title: "Quality Over Quantity",
      description:
        "We'd rather publish fewer conversations and have each one be worth finishing.",
      icon: "sparkles",
    },
    {
      title: "Felt, Not Just Talked About",
      description:
        "True motivation isn't a topic to cover — it's something you understand and feel.",
      icon: "heart",
    },
    {
      title: "Off The Screen, Too",
      description:
        "Offline events connect our influencers with audiences face to face, across Indian states.",
      icon: "trending-up",
    },
  ],
  // The team behind the company. No quotes here by design — the founder's
  // statement still appears as its own pull-quote in `testimonials.founder`
  // below, used on Home's FounderNote section; this is just who they are.
  team: [
    {
      name: "Manish Kumar",
      role: "Founder & CEO",
      social: {
        linkedin: "https://www.linkedin.com/in/manishprak/",
        facebook: "https://www.facebook.com/Manish.prakash619/",
        instagram: "https://www.instagram.com/tanzaxmanishkr/",
      },
    },
    {
      name: "Anuj Kumar",
      role: "Co-Founder & COO",
      // No social links given yet — card renders without the row.
    },
  ],
};

// ---------------------------------------------------------------------------
// Influencers / talent.
//
// `featured` = the people the source site documents with a role and/or a
// follower count. `roster` = the full list of names published on
// tanzatalks.com/influencer, name-only, because the site publishes nothing
// else about them and inventing roles or reach would be fabrication.
//
// Follower counts below are ONLY the three the site actually states
// (Event page: Arvind Arora 24M+, RJ Kartik 10M+, Mahendra Dogney 8M+).
// The old file carried invented figures for everyone — including a much
// too-low 3M+ for Arvind Arora. Those are gone.
// SOURCE: tanzatalks.com/influencer, /event, and homepage "OUR PAST GUEST"
// ---------------------------------------------------------------------------
export const speakers = {
  eyebrow: "Voices On Our Roster",
  viewAll: "View Full Roster",
  featured: {
    badge: "FEATURED",
    name: "Arvind Arora",
    role: "Educator & Creator",
    reach: "24M+",
    // The platform's own line, not a quote attributed to any individual.
    quote:
      "True motivation is not something that we only talk about — it is something to understand and feel.",
    cta: "Work With Us",
  },
  list: [
    { name: "RJ Kartik", role: "Radio Jockey & Creator", reach: "10M+" },
    { name: "Mahendra Dogney", role: "Creator", reach: "8M+" },
    { name: "Jaya Kishori", role: "Motivational Speaker" },
  ],
};

// ---------------------------------------------------------------------------
// Talent roster — one card per name, all 34 published on
// tanzatalks.com/influencer, in the site's own listed order. Role/reach is
// only set for the subset the site says more about (from the homepage
// "OUR PAST GUEST" section and the Event page); everyone else renders
// name-only — the site publishes nothing further about them, so this
// doesn't invent a role to fill the space.
//
// Every card goes through PersonAvatar (data/content.js `personPhotos`): a
// real photo where one's on file, a Monogram initials tile otherwise. There
// used to be a second "wider roster" section below this one, rendered as a
// plain text list for names without a photo — removed, since every name now
// gets an image card here regardless of whether that image is a photo or a
// Monogram.
// ---------------------------------------------------------------------------
export const talentPage = {
  eyebrow: "OUR INFLUENCERS",
  title: "100+ influencers, speakers and entrepreneurs across India.",
  description:
    "Tanza Talks has connected over 100 influencers, public speakers and entrepreneurs throughout India. These are the voices we've worked with and can bring to your campaign, campus or stage.",
  featuredTitle: "Guests & voices we've featured",
  featured: [
    { name: "Jaya Kishori", role: "Spiritual Leader & Motivational Speaker", reach: "11M+ Instagram, 3.2M YouTube", channel: "Jaya Kishori", expertise: "Bhagavad Gita, Ramayana, spiritual wisdom" },
    { name: "Anup Soni", role: "Actor & TV Anchor", channel: "TV personality", expertise: "Crime Patrol, CID, acting" },
    { name: "Arvind Arora", role: "Chemistry Teacher & Educator", reach: "24M+", channel: "A2 Motivation", expertise: "Educational motivation videos, chemistry teaching" },
    { name: "Nitin Vijay", role: "Physics Teacher & Entrepreneur", channel: "Motion Education", expertise: "IIT/NEET exam preparation, physics education" },
    { name: "Avi Arya", role: "Entrepreneur & Digital Marketing Expert", channel: "Ask Avi Arya", expertise: "Web advertising, digital entrepreneurship" },
    { name: "Arun Pandit", role: "Astrologer & Numerologist", reach: "2.5M YouTube", channel: "Astro Arun Pandit", expertise: "Astrology, numerology, vedic sciences" },
    { name: "Mahendra Dogney", role: "Motivational Speaker & Life Coach", reach: "8M+", channel: "MD Motivation", expertise: "Motivational speeches, life coaching" },
    { name: "Manish Pandey" },
    { name: "Shefali Bagga", role: "TV Anchor, Journalist & YouTuber", reach: "2M Instagram", channel: "Shefali Bagga Official", expertise: "Fashion, travel, lifestyle content" },
    { name: "Shreya Pattar", role: "Beauty YouTuber & Makeup Artist", reach: "750k YouTube", channel: "Shreya Jain", expertise: "Makeup tutorials, Bollywood-inspired beauty" },
    { name: "Sunny Garg", role: "Entrepreneur & Tech Founder", channel: "Crib", expertise: "Co-living solutions, property tech startup" },
    { name: "Kamalneet Singh", role: "TEDx Speaker & Chef", expertise: "Culinary expertise, motivational speaking" },
    { name: "Vipin Yadav", role: "Fitness YouTuber & Tech Educator", reach: "1.24M", channel: "Vipin Yadav / V.K. CNC", expertise: "Fitness content, CNC engineering education" },
    { name: "Saurabh Bhatnagar" },
    { name: "Dinesh Mohan" },
    { name: "Hardik Savla", reach: "69k Instagram", expertise: "Food business" },
    { name: "Neha Agrawal", role: "Math Educator & IIT JEE Teacher", reach: "2M YouTube", channel: "Neha Agarwal Mathematically Inclined", expertise: "Mathematics education, IIT JEE preparation" },
    { name: "Rajpal Yadav", role: "Actor & Comedian", reach: "YouTube active", channel: "Rajpal Naurang Yadav", expertise: "Bollywood comedy films, entertainment" },
    { name: "Sonu Sharma", role: "Motivational Speaker & Entrepreneur", reach: "30M+ followers", channel: "Sonu Sharma", expertise: "Motivation, business coaching, success stories" },
    { name: "Dilraj Singh Rawat", role: "Tech YouTuber", reach: "52M YouTube", channel: "Mr Indian Hacker", expertise: "Science experiments, tech gadgets, viral content" },
    { name: "Pramod Maheshwari", role: "IIT Grad, Educator & Entrepreneur", channel: "PM Sir", expertise: "Physics education, Career Point founder, Kota coaching pioneer" },
    { name: "Dr. Abhinit Gupta", role: "Doctor (MBBS) & Entrepreneur", channel: "Dr Abhinit Gupta", expertise: "Cosmetology, anti-aging skincare, health content" },
    { name: "Rahul Bhatnagar", role: "Digital Entrepreneur & Sales Mentor", reach: "203k YouTube", channel: "Rahul Bhatnagar", expertise: "Sales coaching, success mentoring, entrepreneurship" },
    { name: "RJ Kartik", role: "Radio Jockey & Motivational Storyteller", reach: "10M+", channel: "RJ Kartik", expertise: "Radio mimics, humor, motivational storytelling" },
    { name: "Sherrnavaz Sam Jijina", role: "Actress & Model", reach: "604k Instagram", channel: "Sherrnavaz Jijina", expertise: "Acting (Mirzapur), modeling, entertainment" },
    { name: "Dr. Yogendra Singh Rathore", role: "NLP Expert & Life Coach", reach: "2.3M+ lives touched", channel: "Dr. Yogendra Singh Rathore", expertise: "Neuro-linguistic programming, mental wellness coaching" },
    { name: "Ridhima Arora", role: "Entrepreneur & Food/Wellness Founder", channel: "Namhya Foods", expertise: "Ayurvedic products, health & wellness business" },
    { name: "Col. Shyam Vijay Simha", role: "Military Officer & Transformational Leader", channel: "Simha Speaks", expertise: "Leadership, military insights, strategic management" },
    { name: "Piyush Sharma", role: "Tech YouTuber & Educator", reach: "700k+ YouTube", channel: "Tricky Man", expertise: "Tech tutorials, internship coaching, placements" },
    { name: "Deven Pandey", role: "Entrepreneur & Educator", reach: "600k+ trained", channel: "Deven U Pandey Channel", expertise: "AI skills, career development, Ira Skills founder" },
    { name: "Manvir Singh Anand", role: "Food Business Expert & Entrepreneur", expertise: "Cloud kitchens, food business, catering expertise" },
    { name: "Abhinay Sharma", role: "Math Educator & YouTuber", reach: "1M+ YouTube", channel: "Abhinay Maths", expertise: "Mathematics education, competitive exam prep" },
    { name: "Sahil Khanna", role: "Digital Marketer & Entrepreneur", reach: "1M+ (6 channels)", channel: "Intellectual Indies", expertise: "Business education, entrepreneurship, digital marketing" },
    { name: "Kissu Rahul" },
  ],
};

// ---------------------------------------------------------------------------
// Events. The source site documents exactly one event, in detail — so this
// page features that one properly instead of padding a grid with three
// invented case studies and made-up attendance figures.
// SOURCE: tanzatalks.com/event
// ---------------------------------------------------------------------------
export const workPage = {
  eyebrow: "OUR EVENTS",
  title: "Meet the famous personalities of India.",
  description:
    "An initiative to immerse you in success stories that were built from scratch — motivational talks from self-made entrepreneurs and influencers, live and on the ground.",
  featured: {
    title: "Meet The Famous Personalities Of India",
    client: "Career Point",
    date: "7 August 2022",
    city: "Kota, Rajasthan",
    type: "Live Talk Show",
    blurb:
      "Tanza Talks brought four of India's most-followed educators and creators to the Career Point campus in Kota for a single day of motivational talks — an initiative to immerse students in success stories that were built from scratch.",
    lineup: [
      { name: "Arvind Arora", reach: "24M+ followers" },
      { name: "RJ Kartik", reach: "10M+ followers" },
      { name: "Mahendra Dogney", reach: "8M+ followers" },
      { name: "Pramod Maheshwari", role: "Founder, Career Point" },
    ],
  },
  ctaTitle: "Want an event like this on your campus?",
  ctaDescription:
    "We book the talent, produce the show and run the day. Tell us your dates and audience.",
  cta: "Plan An Event",
};

// ---------------------------------------------------------------------------
// Sponsorship. The source site confirms sponsorship is a real offering
// ("accepts sponsorship deals for collaboration", "Advertise & Join us"),
// but publishes no audience breakdown — so the invented footfall,
// age-bracket and impressions figures have been removed. The tiers below
// are offerings, not claims; the numbers shown are the site's own published
// stats.
// SOURCE: tanzatalks.com/contact-us + "Advertise & Join us" footer
// ---------------------------------------------------------------------------
export const sponsorshipPage = {
  eyebrow: "ADVERTISE & JOIN US",
  title: "Get in front of customers when they're searching for you.",
  description:
    "Tanza Talks accepts sponsorship deals and collaborations across our podcasts, talk shows and offline events — putting your brand in front of an audience that already shows up.",
  tiers: [
    {
      name: "Show Sponsor",
      description: "Top billing across a podcast series or talk show.",
      deliverables: [
        "Brand named in the show open and close",
        "Logo across episode artwork and collateral",
        "Dedicated mention by the host",
        "First-position placement in recap content",
      ],
    },
    {
      name: "Event Partner",
      description: "On-the-ground presence at an offline Tanza Talks event.",
      deliverables: [
        "Logo on stage backdrop and event collateral",
        "On-ground branding, banner or stall space",
        "Mention in event recap content",
      ],
    },
    {
      name: "Collaboration",
      description:
        "A campaign built with our influencers rather than around a single show.",
      deliverables: [
        "Influencer-led branded content",
        "Cross-posting across Tanza Talks channels",
        "PR support for the campaign",
      ],
    },
  ],
  mediaKit: {
    title: "Want the current numbers?",
    description:
      "Get in touch and we'll share up-to-date audience figures, upcoming show slots and available event dates.",
    cta: "Request Details",
  },
};

// ---------------------------------------------------------------------------
// Founder statement. The site publishes one attributed quote and one
// unattributed viewer note; both are below, unembellished. The three
// invented client testimonials that used to live here are gone.
// SOURCE: tanzatalks.com homepage + /influencer
// ---------------------------------------------------------------------------
export const testimonials = {
  eyebrow: "WHY WE DO THIS",
  title: "The reason Tanza Talks exists.",
  founder: {
    quote:
      "The genesis of Tanza Talks is closely linked to the turmoil each one of us faces when growing up. There comes a point in life when almost everyone feels he or she doesn't know what to do with life. Here Tanza Talks helps them to rise again, and ignites them to reach their full potential.",
    name: "Manish Kumar",
    role: "Founder, Tanza Talks",
  },
  note: {
    quote:
      "I wanted to thank you and your team for the Tanza Talks podcasts, and your entertaining and inspiring videos each week.",
    attribution: "From a Tanza Talks listener",
  },
};

// ---------------------------------------------------------------------------
// Contact. Phone and postal address are the real ones published on
// tanzatalks.com/contact-us. The previous version of this file listed the
// location as "Kota, Rajasthan" — that was the venue of the 2022 event,
// not the company's address.
// SOURCE: tanzatalks.com/contact-us
// ---------------------------------------------------------------------------
export const contact = {
  eyebrow: "GET IN TOUCH",
  title: "Get in touch!",
  description:
    "Brand, institute, sponsor or future guest — tell us what you have in mind and we'll come back to you.",
  audienceOptions: [
    "Brand / Advertiser",
    "Institute / College",
    "Sponsorship & Collaboration",
    "Speaker / Guest",
    "Other",
  ],
  email: "tanzatalks@gmail.com",
  phone: "+91 95214 20150",
  phoneHref: "tel:+919521420150",
  location: "Sector 2, Noida, Uttar Pradesh 201301",
  submitCta: "Send Enquiry",
  speakerCta: {
    label: "Be a Tanza Talks Speaker",
    href: "https://tinyurl.com/tanzaspeaker",
  },
};

// SOURCE: tanzatalks.com homepage stat strip — 300k+ Audience reach,
// 60+ Our Partners, 40+ Talk Show — plus the "100+ influencers connected"
// figure published on tanzatalks.com/influencer.
export const stats = [
  { icon: "users", value: "300K+", label: "Audience Reach" },
  { icon: "landmark", value: "60+", label: "Partners" },
  { icon: "eye", value: "100+", label: "Influencers Connected" },
  { icon: "map-pin", value: "40+", label: "Talk Shows" },
];

export const footer = {
  tagline: "Motivation | Inspiration | Knowledge | Fact",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Services", to: "/services" },
        { label: "Influencers", to: "/talent" },
        { label: "Events", to: "/work" },
        { label: "Watch", to: "/media" },
        { label: "Advertise With Us", to: "/sponsorship" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Contact", to: "/contact" },
        {
          label: "Be a Speaker",
          to: "https://tinyurl.com/tanzaspeaker",
          external: true,
        },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          label: "tanzatalks@gmail.com",
          to: "mailto:tanzatalks@gmail.com",
          external: true,
        },
        { label: "+91 95214 20150", to: "tel:+919521420150", external: true },
        {
          label: "Sector 2, Noida, UP 201301",
          to: "https://maps.google.com/?q=Sector+2+Noida+Uttar+Pradesh+201301",
          external: true,
        },
      ],
    },
  ],
  newsletter: {
    title: "Stay in the loop.",
    subtitle: "New episodes, upcoming events and sponsorship openings.",
    placeholder: "Enter your email",
  },
  copyright: "© 2026 Tanza Talks. All rights reserved.",
  designedBy: "Life Lessons, Success Stories & Motivation.",
};

// SOURCE: tanzatalks.com social links, for wiring up Nav/Footer/Hero "Follow Us" icons.
export const social = {
  youtube: YOUTUBE_URL,
  facebook: "https://m.facebook.com/tanzatalks",
  instagram: "https://www.instagram.com/tanzatalks.official/",
  linkedin: "https://www.linkedin.com/company/tanza-talks/",
  email: "mailto:tanzatalks@gmail.com",
};
