import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, MapPin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Kicker } from "@/components/kicker";
import { SiteShell } from "@/components/site-shell";
import { cn } from "@/lib/cn";
import {
  NIGHT_NOTES,
  VENUE_FILTERS,
  VENUES,
  todayInSheboygan,
  type Venue,
  type VenueKind,
} from "@/lib/content/venues";

export const Route = createFileRoute("/night")({
  component: Night,
  head: () => ({
    meta: [{ title: "Night — SheVegas" }],
  }),
});

const SAVED_KEY = "shevegas-saved-rooms";

function Night() {
  const day = todayInSheboygan();
  const note = NIGHT_NOTES.find((n) => n.day === day) ?? NIGHT_NOTES[0];
  const [filter, setFilter] = useState<"all" | VenueKind>("all");
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVED_KEY);
      if (raw) setSaved(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  const rooms = useMemo(
    () => (filter === "all" ? VENUES : VENUES.filter((v) => v.kind === filter)),
    [filter],
  );

  function toggleSave(slug: string) {
    setSaved((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      } catch {
        /* ignore quota */
      }
      return next;
    });
  }

  return (
    <SiteShell>
      <main>
        <header className="relative overflow-hidden">
          <img
            src="/images/downtown.jpg"
            alt="Downtown Sheboygan street at night after rain"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/25" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <Kicker>sheboygannight.com · night desk</Kicker>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
              After dark in Sheboygan.
            </h1>
            <p className="mt-5 max-w-xl text-base text-fg/85">
              Written for people from here. Not a tourism brochure. Hours change —
              walk in, or call the room.
            </p>
          </div>
        </header>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[18rem_1fr]">
            <div>
              <Kicker>Desk note · {note.day}</Kicker>
              <h2 className="mt-3 font-display text-3xl tracking-tight">Tonight</h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-fg/90">{note.line}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {VENUE_FILTERS.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setFilter(chip.id)}
                className={cn(
                  "h-11 rounded-full px-4 text-sm transition-colors duration-150",
                  filter === chip.id
                    ? "bg-fg text-bg"
                    : "bg-transparent text-muted shadow-[var(--shadow-border)] hover:text-fg",
                )}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {rooms.map((venue) => (
              <VenueCard
                key={venue.slug}
                venue={venue}
                saved={saved.includes(venue.slug)}
                onToggle={() => toggleSave(venue.slug)}
              />
            ))}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-subtle">
            Desk notes, not listings bought by the house. If a room closed, changed
            hands, or deserves a better line — mail the desk.
          </p>
        </section>

        <section className="relative overflow-hidden border-t border-border">
          <img
            src="/images/tavern.jpg"
            alt="Quiet tavern interior at night"
            className="absolute inset-0 size-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-bg/70" />
          <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <Kicker>The old strip</Kicker>
            <h2 className="mt-3 font-display text-4xl tracking-tight">
              There was a nightclub called SheVegas.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fg/85">
              Michigan Avenue still carries that memory. This desk is not that club.
              It is the city after dark — the rooms that are still open, and the
              nickname that outlived the sign.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function VenueCard({
  venue,
  saved,
  onToggle,
}: {
  venue: Venue;
  saved: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
            {venue.kind} · {venue.neighborhood}
          </p>
          <h3 className="mt-1 font-display text-2xl tracking-tight">{venue.name}</h3>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="flex size-11 shrink-0 items-center justify-center rounded-xs text-muted hover:text-fg"
          aria-pressed={saved}
          aria-label={saved ? `Remove ${venue.name}` : `Save ${venue.name}`}
        >
          {saved ? <BookmarkCheck className="size-4 text-accent" /> : <Bookmark className="size-4" />}
        </button>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{venue.note}</p>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-subtle">
        <MapPin className="size-3.5" />
        {venue.address}
      </p>
      {venue.url ? (
        <a
          href={venue.url}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex min-h-11 items-center text-sm text-accent no-underline"
        >
          House site
        </a>
      ) : null}
    </li>
  );
}
