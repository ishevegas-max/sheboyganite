import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { CIVIC_MANIFESTO, CIVIC_STORIES, SERIES_SLUGS } from "@/lib/content/civic";

export const Route = createFileRoute("/civic/")({
  component: CivicIndex,
});

function CivicIndex() {
  const series = CIVIC_STORIES.filter((s) => SERIES_SLUGS.has(s.slug));
  const desk = CIVIC_STORIES.filter((s) => !SERIES_SLUGS.has(s.slug));

  return (
    <main>
      <header className="relative overflow-hidden">
        <img
          src="/images/chamber.jpg"
          alt="Empty city council chamber at night"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <Kicker>shevegas.org · civic desk</Kicker>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
            {CIVIC_MANIFESTO.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/85">
            {CIVIC_MANIFESTO.dek}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Kicker>Lakefront Series · August 2026</Kicker>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Four explainers. The packet, the apartments, the three ledgers, the
          arithmetic. Documents sit next to the sentences they support.
        </p>
        <ul className="mt-8">
          {series.map((story) => (
            <li key={story.slug} className="border-t border-border last:border-b">
              <Link
                to="/civic/$slug"
                params={{ slug: story.slug }}
                className="group grid min-h-24 gap-4 py-6 no-underline sm:grid-cols-[9rem_1fr_auto] sm:items-center"
              >
                {story.image ? (
                  <img
                    src={story.image}
                    alt=""
                    className="hidden aspect-[16/10] w-full rounded-sm object-cover sm:block"
                  />
                ) : (
                  <span />
                )}
                <div>
                  <Kicker>
                    {story.kicker} · {story.date}
                  </Kicker>
                  <h2 className="mt-2 font-display text-3xl tracking-tight group-hover:text-accent">
                    {story.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {story.dek}
                  </p>
                </div>
                <ArrowRight className="hidden size-4 shrink-0 text-subtle group-hover:text-accent sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <Kicker>The record</Kicker>
        <ul className="mt-6">
          {desk.map((story) => (
            <li key={story.slug} className="border-t border-border last:border-b">
              <Link
                to="/civic/$slug"
                params={{ slug: story.slug }}
                className="group flex min-h-24 flex-col gap-2 py-6 no-underline sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <Kicker>
                    {story.kicker} · {story.date}
                  </Kicker>
                  <h2 className="mt-2 font-display text-3xl tracking-tight group-hover:text-accent">
                    {story.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {story.dek}
                  </p>
                </div>
                <ArrowRight className="hidden size-4 shrink-0 text-subtle group-hover:text-accent sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
