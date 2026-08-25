import {
  PACKET_URL,
  stories as lakefront,
  sources,
  TIP_MAIL,
  type Block,
} from "../series";

export type CivicBlock = Block;

export type CivicStory = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  date: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  body: CivicBlock[] | string[];
  documents: { label: string; href?: string }[];
};

export const CIVIC_MANIFESTO = {
  headline: "Change systems, not people.",
  dek: "Sheboygan does not have a people problem. It has a coverage problem, a documents problem, and a habit of hoping City Hall will explain itself. The civic desk exists so it doesn't have to.",
};

const SERIES_DOCS = [
  {
    label: "Public Works Committee packet, July 27, 2026 (PDF)",
    href: PACKET_URL,
  },
  ...sources
    .filter((s) => s.href)
    .map((s) => ({ label: s.label, href: s.href })),
  { label: "Tip line — ishevegas@gmail.com", href: TIP_MAIL },
];

const LAKEFRONT_STORIES: CivicStory[] = lakefront.map((s) => ({
  slug: s.id,
  kicker: `Lakefront Series · ${s.num}`,
  title: s.title,
  dek: s.dek,
  date: "August 2026",
  image: s.image,
  imageAlt: s.imageAlt,
  imageCredit: s.imageCredit,
  body: s.body,
  documents: SERIES_DOCS,
}));

const DESK_STORIES: CivicStory[] = [
  {
    slug: "how-the-desk-works",
    kicker: "Method",
    title: "How the civic desk works",
    dek: "Each story is a small site of its own: a claim, the documents, and a record of who said what. No spin, including ours.",
    date: "August 2026",
    body: [
      "shevegas.org is the daily civic explainer. It is meant to be stateless: a story you can send to someone who has never read us, with the source sitting next to the sentence.",
      "Information must be free. Original source documents and verified first-hand accounts come before anyone's narrative. If we cannot show the paper, we say so.",
      "The old blog worked because it showed up on Tuesday nights when nobody else did. The new desk has the same job with better lighting: meetings, budgets, land, water, and the systems that outlast whoever is mayor.",
      "Tips go to ishevegas@gmail.com. Primary sources beat rumors. Rumors still get written down — as rumors.",
    ],
    documents: [
      { label: "Tip line — ishevegas@gmail.com", href: "mailto:ishevegas@gmail.com" },
      { label: "SheVegas ledger (public accounting)", href: "https://github.com/ishevegas-max/shevegas-ledger" },
    ],
  },
  {
    slug: "armory",
    kicker: "Record",
    title: "The Armory is still standing",
    dek: "It was slated for demolition. Coverage, pressure, and a city that had to look at the building in public kept it up.",
    date: "2007–2010 · updated 2026",
    body: [
      "In the mid-2000s the Sheboygan Armory was rotting in plain sight. The easy move was to tear it down and call it progress. Easy moves look better when nobody is in the room with a camera.",
      "SheVegas covered the fight the way a small-city desk is supposed to: go to the meeting, publish the document, take the picture at 10 PM. The building is still there. That is not nostalgia. It is a receipt.",
      "Civic wins in a town this size are usually unglamorous. They look like a structure that did not become a parking plan. They look like a nickname that outlived the people who hated it.",
    ],
    documents: [
      { label: "Sheboygan Armory Preservation II — video", href: "https://www.youtube.com/watch?v=X0vZDOb_FH4" },
    ],
  },
  {
    slug: "quarry-beach",
    kicker: "Record",
    title: "Quarry Beach, for a summer",
    dek: "The quarry was fenced off. For one season the public got in. The point was never a beach. The point was who the land is for.",
    date: "2007–2010 · updated 2026",
    body: [
      "Sheboygan's quarry sat behind a fence while the city sold itself as a water town. Opening it, even for a summer, was a test of whether 'public' meant anything besides a press release.",
      "The beach did not become a permanent institution. That is part of the record too. Civic coverage is not a highlight reel. It is a log of what the city tried, what it allowed, and what it took back.",
      "If you grew up here you already have a version of this story. Send the version with dates.",
    ],
    documents: [{ label: "Submit a primary source", href: "mailto:ishevegas@gmail.com" }],
  },
  {
    slug: "eight-candidates",
    kicker: "Elections",
    title: "Eight names on a mayoral race",
    dek: "The most competitive mayor's race in Sheboygan history did not come from a party. It came from a town that finally had somewhere to argue in public.",
    date: "2007–2010 · updated 2026",
    body: [
      "At the peak there were eight mayoral candidates. That is not normal for a city of 50,000 with one newspaper. It is what happens when meetings get covered and rumors have a URL.",
      "A 'bloggers casino rumor' ate an entire election cycle. Whether you loved that or hated it, the newspaper had to start covering City Hall like it mattered. That was the job.",
      "Competitive races are not entertainment. They are a sign the system still has friction. Friction is how a small city stays honest.",
    ],
    documents: [{ label: "Origin story — How SheVegas Was Born", href: "/archive" }],
  },
  {
    slug: "systems",
    kicker: "Desk",
    title: "Change systems, not people",
    dek: "A slogan only works if it is also a method. We do not need better personalities in Sheboygan. We need records that outlast them.",
    date: "August 2026",
    body: [
      "shevegas.org used to be a stub that said this out loud and then stopped. The civic desk is the rest of the sentence.",
      "People cycle through council seats, newsrooms, and nicknames. Systems — how meetings are noticed, how land is fenced, how a budget is published — are what a resident actually lives inside.",
      "The ledger project is public accounting for Sheboygan: follow the money the way a reporter follows a meeting. The archive keeps the tape. Night keeps the city human after dark. Civic is the middle, where the paper is.",
    ],
    documents: [
      { label: "shevegas-ledger on GitHub", href: "https://github.com/ishevegas-max/shevegas-ledger" },
      { label: "Geode — foundation repo", href: "https://github.com/ishevegas-max/Geode" },
    ],
  },
];

export const CIVIC_STORIES: CivicStory[] = [...LAKEFRONT_STORIES, ...DESK_STORIES];

export const SERIES_SLUGS = new Set(lakefront.map((s) => s.id));

export function getStory(slug: string) {
  return CIVIC_STORIES.find((s) => s.slug === slug);
}

export function storyBlocks(story: CivicStory): CivicBlock[] {
  if (story.body.length === 0) return [];
  if (typeof story.body[0] === "string") {
    return (story.body as string[]).map((text) => ({ kind: "p" as const, text }));
  }
  return story.body as CivicBlock[];
}
