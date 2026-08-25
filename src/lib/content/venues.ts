export type VenueKind = "cocktails" | "beer" | "dive" | "pub" | "lakefront" | "live";

export type Venue = {
  slug: string;
  name: string;
  kind: VenueKind;
  neighborhood: string;
  address: string;
  note: string;
  url?: string;
};

export const VENUE_FILTERS: { id: "all" | VenueKind; label: string }[] = [
  { id: "all", label: "All rooms" },
  { id: "cocktails", label: "Cocktails" },
  { id: "beer", label: "Beer" },
  { id: "dive", label: "Dive" },
  { id: "pub", label: "Pub" },
  { id: "lakefront", label: "Lakefront" },
  { id: "live", label: "Live" },
];

export const VENUES: Venue[] = [
  {
    slug: "urbane",
    name: "Urbane",
    kind: "cocktails",
    neighborhood: "Downtown",
    address: "Sheboygan",
    note: "The cocktail room people actually name when you ask where to drink. Tight list, not a sports bar.",
  },
  {
    slug: "3-sheeps",
    name: "3 Sheeps Brewing",
    kind: "beer",
    neighborhood: "South side",
    address: "1837 S 17th St",
    note: "House beer, taproom, sometimes a food truck in the lot. Not downtown — worth the drive.",
    url: "https://3sheepsbrewing.com",
  },
  {
    slug: "8th-street-ale-haus",
    name: "8th Street Ale Haus",
    kind: "beer",
    neighborhood: "8th Street",
    address: "N 8th St",
    note: "Downtown beer room. Regulars put it next to Craft 30 when the question is 'where is the beer.'",
  },
  {
    slug: "craft-30",
    name: "Craft 30",
    kind: "beer",
    neighborhood: "Downtown",
    address: "Sheboygan",
    note: "Serious tap list. Pair with Ale Haus if you are walking 8th.",
  },
  {
    slug: "gms",
    name: "GM's",
    kind: "dive",
    neighborhood: "8th Street",
    address: "N 8th St",
    note: "Downtown dive with a following. Thirsty Thursday is a local habit. Prices and bartenders are the point.",
  },
  {
    slug: "downtown-925",
    name: "Downtown 925",
    kind: "live",
    neighborhood: "8th Street",
    address: "925 N 8th St",
    note: "Wisconsin dining, Old Fashioneds, live music. A room that still feels like a night out.",
    url: "https://www.downtown925.com",
  },
  {
    slug: "harbor-lights",
    name: "Harbor Lights",
    kind: "lakefront",
    neighborhood: "Harbor",
    address: "Sheboygan",
    note: "By the water. Go when the lake is the reason you left the house.",
  },
  {
    slug: "hops-haven",
    name: "Hop's Haven",
    kind: "pub",
    neighborhood: "Downtown",
    address: "Sheboygan",
    note: "Pool, beer, a place to stay a while. Not trying to be a scene.",
  },
  {
    slug: "frankies",
    name: "Frankie's Pub & Grill",
    kind: "pub",
    neighborhood: "Sheboygan",
    address: "Sheboygan",
    note: "Pub-and-grill standby. Food if the night started as dinner.",
  },
  {
    slug: "brennans",
    name: "Brennan's",
    kind: "pub",
    neighborhood: "Michigan Avenue",
    address: "Michigan Ave",
    note: "Michigan Avenue regular. Named whenever someone is mapping bars near the old nightclub strip.",
  },
  {
    slug: "long-house",
    name: "Long House Axe Bar",
    kind: "cocktails",
    neighborhood: "Sheboygan",
    address: "Sheboygan",
    note: "Locals will tell you the drinks are among the best in town. Not a downtown tourist stop.",
  },
  {
    slug: "prohibition",
    name: "Prohibition Bistro",
    kind: "live",
    neighborhood: "River",
    address: "Sheboygan",
    note: "Pizza on the river. A night that can still be dinner.",
  },
  {
    slug: "penn-ave",
    name: "Penn Avenue Pub",
    kind: "pub",
    neighborhood: "Penn Ave",
    address: "Penn Ave",
    note: "Sports hangout, Wisconsin teams, classic pub fare. For the game, not the scene.",
  },
  {
    slug: "nzs",
    name: "NZ's",
    kind: "pub",
    neighborhood: "Sheboygan",
    address: "Sheboygan",
    note: "Named, unprompted, as some of the best bar food in town.",
  },
  {
    slug: "suschas",
    name: "Suscha's",
    kind: "dive",
    neighborhood: "Sheboygan",
    address: "Sheboygan",
    note: "Old-school townie bar. If you are from here, you already know.",
  },
  {
    slug: "scenic",
    name: "Scenic Bar & Restaurant",
    kind: "lakefront",
    neighborhood: "Lakefront",
    address: "Sheboygan",
    note: "A sit-down night by the water. Not a club. Still counts.",
  },
];

export type NightNote = {
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  line: string;
};

export const NIGHT_NOTES: NightNote[] = [
  {
    day: "Sunday",
    line: "Quiet rooms. Harbor if the weather holds. 3 Sheeps if you want beer without downtown.",
  },
  {
    day: "Monday",
    line: "Industry night energy, not a show. Dive stools and a short walk on 8th.",
  },
  {
    day: "Tuesday",
    line: "8th Streatery season is done for 2026. Treat Tuesday as a cocktail night — Urbane or Long House.",
  },
  {
    day: "Wednesday",
    line: "Midweek beer. Ale Haus or Craft 30, then see who is still open on 8th.",
  },
  {
    day: "Thursday",
    line: "Thirsty Thursday still pulls people to GM's. If you want a cleaner pour, start at Urbane.",
  },
  {
    day: "Friday",
    line: "The actual night. Downtown 925 for music and an Old Fashioned. Harbor Lights if the lake is the plan.",
  },
  {
    day: "Saturday",
    line: "Walk 8th, then Michigan. Brennan's, Frankie's, or stay on the water. Do not overthink it.",
  },
];

export function todayInSheboygan(): NightNote["day"] {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "America/Chicago",
  }) as NightNote["day"];
}
