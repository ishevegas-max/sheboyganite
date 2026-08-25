import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
import { CIVIC_STORIES } from "@/lib/content/civic";
import { ORIGIN } from "@/lib/content/origin";
import { CITY_HOOKS, PILLARS, SITE } from "@/lib/content/site";
import { NIGHT_NOTES, todayInSheboygan } from "@/lib/content/venues";
import { ORIGIN_VIDEO, VIDEOS } from "@/lib/content/videos";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Sheboyganite — SheVegas" }],
  }),
});

function mastheadDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Chicago",
  });
}

function Home() {
  const day = todayInSheboygan();
  const night = NIGHT_NOTES.find((n) => n.day === day) ?? NIGHT_NOTES[0];
  const latestCivic = CIVIC_STORIES[0];
  const latestVideo = VIDEOS[0];

  return (
    <SiteShell overHero>
      <section className="relative min-h-[88dvh] overflow-hidden">
        <img
          src="/images/harbor.jpg"
          alt="Sheboygan harbor at night on Lake Michigan"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
        <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <Kicker>
            {SITE.domain} · {mastheadDate()}
          </Kicker>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.03em] text-fg">
            Sheboyganite.
          </h1>
          <p className="mt-5 max-w-xl text-base text-fg/80 sm:text-lg">
            {SITE.dek} {SITE.house} is the nickname. This is the funnel — archive,
            civic desk, and night guide, one front door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/archive" className="no-underline">
                How it started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/night" className="no-underline">
                Tonight in town
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CITY_HOOKS.map((hook) => (
            <article key={hook.title} className="bg-bg px-5 py-6 sm:px-6">
              <Kicker>{hook.kicker}</Kicker>
              <h2 className="mt-2 font-display text-2xl tracking-tight">{hook.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{hook.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <Link
            key={pillar.to}
            to={pillar.to}
            className="group overflow-hidden rounded-xl bg-surface no-underline shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={pillar.image}
                alt=""
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <Kicker>{pillar.kicker}</Kicker>
              <h2 className="mt-2 font-display text-3xl tracking-tight">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <Kicker>From the archive</Kicker>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              {ORIGIN.title}
            </h2>
            <p className="mt-4 text-sm text-muted">
              {ORIGIN.date} · {ORIGIN.author}
            </p>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-fg/90">
              {ORIGIN.lede}
            </p>
            <Button asChild variant="ghost" className="mt-6">
              <Link to="/archive" className="no-underline">
                Full origin story
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <VideoEmbed id={ORIGIN_VIDEO.id} title={ORIGIN_VIDEO.title} />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <article className="rounded-lg bg-bg p-6 shadow-[var(--shadow-border)] lg:col-span-1">
            <Kicker>Night desk · {night.day}</Kicker>
            <h2 className="mt-3 font-display text-3xl tracking-tight">Tonight</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{night.line}</p>
            <Button asChild variant="quiet" className="mt-6 px-0">
              <Link to="/night" className="no-underline">
                Open the night guide
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </article>
          <article className="rounded-lg bg-bg p-6 shadow-[var(--shadow-border)]">
            <Kicker>Civic</Kicker>
            <h2 className="mt-3 font-display text-3xl tracking-tight">{latestCivic.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{latestCivic.dek}</p>
            <Button asChild variant="quiet" className="mt-6 px-0">
              <Link to="/civic/$slug" params={{ slug: latestCivic.slug }} className="no-underline">
                Read the desk
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </article>
          <article className="rounded-lg bg-bg p-6 shadow-[var(--shadow-border)]">
            <Kicker>Video reel</Kicker>
            <h2 className="mt-3 font-display text-3xl tracking-tight">{latestVideo.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ten tapes on a stack — the old shevegas.com, rebuilt so it can actually be updated.
            </p>
            <Button asChild variant="quiet" className="mt-6 px-0">
              <Link to="/videos" className="no-underline">
                Watch the reel
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <p className="font-display text-4xl italic tracking-tight text-fg sm:text-5xl">
          {SITE.tagline}
        </p>
        <p className="mt-4 text-sm text-muted">{SITE.mission}</p>
      </section>
    </SiteShell>
  );
}
