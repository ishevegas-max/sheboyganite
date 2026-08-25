import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { getStory, storyBlocks, type CivicBlock } from "@/lib/content/civic";

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

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-medium text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function BlockView({ block, i }: { block: CivicBlock; i: number }) {
  switch (block.kind) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-3xl tracking-tight sm:text-4xl">
          {block.text}
        </h2>
      );
    case "pull":
      return (
        <blockquote className="mt-10 border-l-2 border-accent pl-5 font-display text-2xl leading-snug text-fg sm:text-3xl">
          {block.text}
        </blockquote>
      );
    case "opine":
      return (
        <aside className="mt-10 rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]">
          <Kicker>Opinion, labeled</Kicker>
          <p className="mt-3 text-base leading-relaxed text-fg/90">
            <RichText text={block.text.replace(/^Opinion, labeled\.\s*/i, "")} />
          </p>
        </aside>
      );
    case "ul":
      return (
        <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-fg/90">
          {block.items.map((item) => (
            <li key={item.slice(0, 48)}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p
          key={i}
          className="mt-6 text-base leading-relaxed text-fg/90"
        >
          <RichText text={block.text} />
        </p>
      );
  }
}

function CivicStory() {
  const { story } = Route.useLoaderData();
  const blocks = storyBlocks(story);

  return (
    <article>
      {story.image ? (
        <header className="relative overflow-hidden">
          <img
            src={story.image}
            alt={story.imageAlt ?? ""}
            className="absolute inset-0 size-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35" />
          <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12">
            <Link
              to="/civic"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-fg/80 no-underline hover:text-fg"
            >
              <ArrowLeft className="size-4" />
              Civic desk
            </Link>
            <Kicker className="mt-8 text-fg/70">
              {story.kicker} · {story.date}
            </Kicker>
            <h1 className="mt-3 font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.95] tracking-[-0.03em]">
              {story.title}
            </h1>
            <p className="mt-5 font-display text-xl leading-snug text-fg/80 sm:text-2xl">
              {story.dek}
            </p>
            {story.imageCredit ? (
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                {story.imageCredit}
              </p>
            ) : null}
          </div>
        </header>
      ) : (
        <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
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
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        {blocks.map((block, i) => (
          <BlockView key={`${block.kind}-${i}`} block={block} i={i} />
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
      </div>
    </article>
  );
}
