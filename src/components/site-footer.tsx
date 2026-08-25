import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-fg">{SITE.name}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            {SITE.house} · {SITE.domain}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {SITE.dek} {SITE.city}. Founded {SITE.since} by {SITE.founder}.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Desks
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg no-underline hover:text-accent">
                  {item.label}
                  {item.domain ? (
                    <span className="ml-2 font-mono text-[11px] text-subtle">
                      {item.domain}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/videos" className="text-fg no-underline hover:text-accent">
                Video reel
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Desk
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-fg no-underline hover:text-accent">
                Submit a tip
              </a>
            </li>
            <li>
              <a
                href={SITE.youtube}
                className="text-fg no-underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={`https://x.com/${SITE.xHandle}`}
                className="text-fg no-underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                X @{SITE.xHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-border px-4 py-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {SITE.tagline}
        </p>
        <p className="font-mono text-[11px] text-subtle">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
