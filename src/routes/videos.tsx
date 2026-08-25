import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Kicker } from "@/components/kicker";
import { SiteShell } from "@/components/site-shell";
import { VideoEmbed } from "@/components/video-embed";
import { cn } from "@/lib/cn";
import { ORIGIN_VIDEO, VIDEOS, type Video } from "@/lib/content/videos";

export const Route = createFileRoute("/videos")({
  component: Videos,
  head: () => ({
    meta: [{ title: "Video reel — SheVegas" }],
  }),
});

function Videos() {
  const stack = useMemo(() => [ORIGIN_VIDEO, ...VIDEOS], []);
  const [active, setActive] = useState<Video>(stack[0]);

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Kicker>shevegas.com · the reel</Kicker>
        <h1 className="mt-3 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
          Ten tapes and the origin cut.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          This is the page Claude could not keep live: a video stack that actually
          plays. Pick a tape. The old site dumped ten iframes on a black page. This
          one names them.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_20rem]">
          <div>
            <VideoEmbed id={active.id} title={active.title} />
            <div className="mt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {active.kind} · {active.date}
              </p>
              <h2 className="mt-1 font-display text-3xl tracking-tight">{active.title}</h2>
            </div>
          </div>

          <ol className="flex flex-col gap-1">
            {stack.map((video, i) => {
              const on = video.id === active.id;
              return (
                <li key={video.id}>
                  <button
                    type="button"
                    onClick={() => setActive(video)}
                    className={cn(
                      "flex w-full min-h-14 items-start gap-3 rounded-md px-3 py-3 text-left transition-colors duration-150",
                      on ? "bg-elevated text-fg" : "text-muted hover:bg-surface hover:text-fg",
                    )}
                  >
                    <span className="mt-0.5 font-mono text-[11px] tabular-nums text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-sm text-fg">{video.title}</span>
                      <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
                        {video.kind} · {video.date}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </main>
    </SiteShell>
  );
}
