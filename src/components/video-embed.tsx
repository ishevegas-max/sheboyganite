import { youtubeEmbed } from "@/lib/content/videos";

export function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-md bg-elevated shadow-[var(--shadow-border)]">
      <div className="relative aspect-video w-full bg-surface">
        <iframe
          src={youtubeEmbed(id)}
          title={title}
          className="absolute inset-0 size-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
