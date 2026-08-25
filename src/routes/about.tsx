import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker } from "@/components/kicker";
import { SiteShell } from "@/components/site-shell";
import { SITE } from "@/lib/content/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [{ title: "About — Sheboyganite" }],
  }),
});

function About() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Kicker>sheboyganite.com</Kicker>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.03em]">
          The funnel for people from here.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-fg/90">
          {SITE.founder} launched SheVegas.com around 2005 from South 26th Street after
          an MFA in journalism at the University of Iowa. Sheboyganite is the front
          door: everything Sheboygan, for people from Sheboygan. SheVegas is the
          nickname that stuck.
        </p>
        <p className="mt-4 text-base leading-relaxed text-fg/90">
          Three desks sit behind this masthead —{" "}
          <Link to="/archive" className="text-accent">
            archive
          </Link>
          ,{" "}
          <Link to="/civic" className="text-accent">
            civic
          </Link>
          , and{" "}
          <Link to="/night" className="text-accent">
            night
          </Link>
          . Tell the desk what to add. The copy lives in one place. No session
          burned to put a paragraph on the internet.
        </p>

        <section className="mt-14 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
            <Kicker>Method</Kicker>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Original source documents and verified first-hand accounts come before
              anyone's spin, including ours. Fun with a purpose.
            </p>
          </div>
          <div className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]">
            <Kicker>Tip line</Kicker>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Mail{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent">
                {SITE.email}
              </a>{" "}
              with a document, a correction, or a room that should be on the night
              desk.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <Kicker>Elsewhere</Kicker>
          <ul className="mt-4 divide-y divide-border border-y border-border text-sm">
            <li>
              <a
                href={SITE.youtube}
                className="flex min-h-12 items-center text-fg no-underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                YouTube — mike brunette (SheVegas)
              </a>
            </li>
            <li>
              <a
                href={SITE.medium}
                className="flex min-h-12 items-center text-fg no-underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Medium — @shevegas
              </a>
            </li>
            <li>
              <a
                href={`https://x.com/${SITE.xHandle}`}
                className="flex min-h-12 items-center text-fg no-underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                X — @{SITE.xHandle}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ishevegas-max"
                className="flex min-h-12 items-center text-fg no-underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                GitHub — ishevegas-max
              </a>
            </li>
          </ul>
        </section>

        <p className="mt-16 font-display text-3xl italic tracking-tight">{SITE.tagline}</p>
        <p className="mt-2 text-sm text-muted">{SITE.mission}</p>
      </main>
    </SiteShell>
  );
}
