import { MediaVisual } from "@/components/MediaVisual";
import { CheckCircle2, Shield } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <MediaVisual
        imageKey="hero"
        priority
        overlay="light"
        className="aspect-[4/5] min-h-[400px] rounded-[1.35rem] shadow-[0_28px_64px_-32px_rgba(18,29,64,0.2)] ring-1 ring-ink/6 sm:aspect-[5/6] lg:min-h-[500px]"
      />
      <div className="absolute -bottom-5 -left-3 w-[min(100%,260px)] rounded-2xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:-left-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
            <Shield size={20} />
          </span>
          <div>
            <p className="text-xs font-medium text-muted">Incorporation</p>
            <p className="font-semibold text-ink">Certificate issued</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-1 top-10 hidden rounded-2xl border border-white/15 bg-navy/95 px-4 py-3 text-paper shadow-lg backdrop-blur sm:block">
        <p className="text-xs text-paper/60">GST filing</p>
        <p className="flex items-center gap-1.5 text-sm font-semibold">
          <CheckCircle2 size={16} className="text-accent-light" />
          On track
        </p>
      </div>
    </div>
  );
}
