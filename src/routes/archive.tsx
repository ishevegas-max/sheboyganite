import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
import { ORIGIN, SOURCES, TIMELINE } from "@/lib/content/origin";
import { ORIGIN_VIDEO } from "@/lib/content/videos";

export const Route = createFileRoute("/archive")({
  component: Archive,
  head: () => ({
    meta: [{ title: "Archive — SheVegas" }],
  }),
});

function Archive() {
  return (
    <SiteShell>
      <article>
        <header className="relative overflow-hidden">
          <img
            src="/images/archive.jpg"
            alt="Archival papers and photographs on a desk"
            className="absolute inset-0 size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/50" />
          <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
            <Kicker>{ORIGIN.kicker} · shevegas.com</Kicker>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
              {ORIGIN.title}
            </h1>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {ORIGIN.date} · by {ORIGIN.author}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <p className="font-display text-2xl leading-snug text-fg sm:text-3xl">
            {ORIGIN.lede}
          </p>

          {ORIGIN.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="font-display text-3xl tracking-tight">{section.heading}</h2>
              {section.body.split("\n\n").map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-fg/90">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <blockquote className="mt-12 border-l border-border-strong pl-5">
            <p className="font-display text-2xl italic leading-snug text-fg">
              {ORIGIN.quote}
            </p>
          </blockquote>

          <section className="mt-12">
            <h2 className="font-display text-3xl tracking-tight">What happened next</h2>
            <ul className="mt-6 space-y-3">
              {ORIGIN.results.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-3 text-base leading-relaxed text-fg/90 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-fg/90">{ORIGIN.close}</p>
          </section>
        </div>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
            <Kicker>The tape</Kicker>
            <h2 className="mt-3 font-display text-4xl tracking-tight">The video</h2>
            <p className="mt-3 mb-6 text-sm text-muted">
              Added August 20, 2026. {ORIGIN_VIDEO.title}.
            </p>
            <VideoEmbed id={ORIGIN_VIDEO.id} title={ORIGIN_VIDEO.title} />
            <Button asChild variant="ghost" className="mt-6">
              <Link to="/videos" className="no-underline">
                Open the ten-tape reel
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <section>
            <h2 className="font-display text-3xl tracking-tight">What SheVegas means now</h2>
            <p className="mt-4 text-base leading-relaxed text-fg/90">{ORIGIN.now}</p>
            <p className="mt-6 font-display text-3xl italic">SheVegas Baby.</p>
          </section>

          <section className="mt-16">
            <Kicker>Record</Kicker>
            <h2 className="mt-3 font-display text-3xl tracking-tight">Timeline</h2>
            <ol className="mt-8 space-y-0">
              {TIMELINE.map((row) => (
                <li
                  key={row.year}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-border py-5 sm:grid-cols-[9rem_1fr]"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {row.year}
                  </span>
                  <span className="text-sm leading-relaxed text-fg/90">{row.text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 mb-8">
            <Kicker>Paper</Kicker>
            <h2 className="mt-3 font-display text-3xl tracking-tight">Source documents</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {SOURCES.map((src) => (
                <li key={src.label}>
                  <a
                    href={src.href}
                    className="flex min-h-14 items-center justify-between gap-4 py-3 no-underline"
                    target={src.href.startsWith("http") ? "_blank" : undefined}
                    rel={src.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="text-sm text-fg">{src.label}</span>
                    <span className="shrink-0 font-mono text-[11px] text-subtle">
                      {src.meta}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
