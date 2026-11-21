import type { WidgetComponentProps } from "./index";
import { WidgetFrost } from "./tile";

function spotifyEmbedUrl(input: string): string | null {
  const value = input.trim();
  const match = value.match(/(?:open\.spotify\.com\/(track|album|playlist)\/|spotify:(track|album|playlist):)([A-Za-z0-9]+)/i);
  if (!match) return null;
  const kind = (match[1] || match[2]).toLowerCase();
  const id = match[3];
  return `https://open.spotify.com/embed/${kind}/${id}?utm_source=generator&theme=0`;
}

export function SpotifyWidget({ config, glass }: WidgetComponentProps) {
  const src = spotifyEmbedUrl(config.url ?? "");
  if (!src) return null;
  return (
    <section className="relative col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-3 shadow-xl backdrop-blur-xl">
      <WidgetFrost glass={glass} radius={16} />
      <div className="relative z-10 mb-2 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-white/85">
          <span className="grid size-6 place-items-center rounded-full bg-[#1ed760] text-sm font-black text-black">♫</span>
          Spotify
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/40">Music player</span>
      </div>
      <iframe
        title="Spotify music player"
        src={src}
        width="100%"
        height="152"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="relative z-10 block w-full overflow-hidden rounded-xl border-0"
      />
    </section>
  );
}
