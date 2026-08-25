export const SITE = {
  name: "Sheboyganite",
  house: "SheVegas",
  tagline: "SheVegas Baby.",
  mission: "Best Future Now & Forever.",
  dek: "Everything Sheboygan, for people from Sheboygan.",
  city: "Sheboygan, Wisconsin",
  domain: "sheboyganite.com",
  email: "ishevegas@gmail.com",
  founder: "Mike Brunette",
  since: 2005,
  xHandle: "optimikeb",
  youtube: "https://www.youtube.com/user/mikebrunette",
  medium: "https://medium.com/@shevegas",
} as const;

export const NAV = [
  { to: "/archive" as const, label: "Archive", domain: "shevegas.com" },
  { to: "/civic" as const, label: "Civic", domain: "shevegas.org" },
  { to: "/night" as const, label: "Night", domain: "sheboygannight.com" },
  { to: "/about" as const, label: "About", domain: null },
];

export const PILLARS = [
  {
    to: "/archive" as const,
    kicker: "shevegas.com",
    title: "Archive",
    body: "The permanent record. Origin, video, source documents. Intergalactic on purpose: longevity, knowledge, communication.",
    image: "/images/archive.jpg",
  },
  {
    to: "/civic" as const,
    kicker: "shevegas.org",
    title: "Civic",
    body: "The daily explainer. How the city actually works. Original documents first, including ours. Change systems, not people.",
    image: "/images/chamber.jpg",
  },
  {
    to: "/night" as const,
    kicker: "sheboygannight.com",
    title: "Night",
    body: "The city after dark. Bars, rooms, and the lake. Written for people from here, not a tourism brochure.",
    image: "/images/tavern.jpg",
  },
] as const;

export const CITY_HOOKS = [
  {
    kicker: "Water",
    title: "The lake",
    body: "Harbor, quarry, breakwater. The reason the town faces east.",
  },
  {
    kicker: "Paper",
    title: "City Hall",
    body: "Meetings, land, money. The civic desk lives here.",
  },
  {
    kicker: "Night",
    title: "8th Street",
    body: "The walk. Rooms that are still open when the shift ends.",
  },
  {
    kicker: "Origin",
    title: "South 26th",
    body: "Where the liquor store was. Where SheVegas started.",
  },
] as const;
