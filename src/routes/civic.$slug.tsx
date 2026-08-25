import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { getStory } from "@/lib/content/civic";

export const Route = createFileRoute("/civic/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  component: CivicStory,
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.story.title ?? "Civic"} — SheVegas` }],
  }),
});

function CivicStory() {
  const { story } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        to="/civic"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted no-underline hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Civic desk
      </Link>
      <Kicker className="mt-8">
        {story.kicker} · {story.date}
      </Kicker>
      <h1 className="mt-3 font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.95] tracking-[-0.03em]">
        {story.title}
      </h1>
      <p className="mt-5 font-display text-xl leading-snug text-muted sm:text-2xl">
        {story.dek}
      </p>
      {story.body.map((p) => (
        <p key={p.slice(0, 48)} className="mt-6 text-base leading-relaxed text-fg/90">
          {p}
        </p>
      ))}

      <section className="mt-14 border-t border-border pt-8">
        <Kicker>Documents</Kicker>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {story.documents.map((doc) => (
            <li key={doc.label}>
              <a
                href={doc.href}
                className="flex min-h-12 items-center text-sm text-fg no-underline hover:text-accent"
                target={doc.href?.startsWith("http") ? "_blank" : undefined}
                rel={doc.href?.startsWith("http") ? "noreferrer" : undefined}
              >
                {doc.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
