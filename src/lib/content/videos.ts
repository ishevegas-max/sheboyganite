export type Video = {
  id: string;
  title: string;
  date: string;
  kind: "desk" | "civic" | "field" | "personal";
};

/** Canonical ten-video reel from the Geode / shevegas.com stack, plus the origin cut. */
export const VIDEOS: Video[] = [
  {
    id: "jKm6aCxZRQI",
    title: "August 6, 2026",
    date: "2026-08-06",
    kind: "desk",
  },
  {
    id: "Q_hoByvnpdc",
    title: "Junkyard on the Water — Sheboygan Marina",
    date: "2026-08-04",
    kind: "field",
  },
  {
    id: "0wrOER_hDH0",
    title: "True Fine Love for Sheboygan?",
    date: "2026-08-04",
    kind: "field",
  },
  {
    id: "ilQ3Mnjl8HQ",
    title: "August 2, 2026",
    date: "2026-08-02",
    kind: "desk",
  },
  {
    id: "1OWs9Cj5l4I",
    title: "July 28, 2026",
    date: "2026-07-28",
    kind: "desk",
  },
  {
    id: "NSZaOFsh_e8",
    title: "July 24, 2026",
    date: "2026-07-24",
    kind: "desk",
  },
  {
    id: "PRkanhezTXg",
    title: "Park, Rec & Forestry Board — May 5, 2026",
    date: "2026-05-05",
    kind: "civic",
  },
  {
    id: "uttirViaSmA",
    title: "July 6, 2026",
    date: "2026-07-06",
    kind: "desk",
  },
  {
    id: "eEerZIXtMY8",
    title: "911, theft, and an arrest in Sheboygan",
    date: "2026-07-01",
    kind: "field",
  },
  {
    id: "3ZxtJ0VxqY8",
    title: "Mike, police, Sheboygan",
    date: "2026-06-20",
    kind: "field",
  },
];

export const ORIGIN_VIDEO: Video = {
  id: "4bimxhKu3bU",
  title: "My Life",
  date: "2026-08-20",
  kind: "personal",
};

export function youtubeEmbed(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`;
}

export function youtubeWatch(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}
