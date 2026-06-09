"use client";

import { useEffect, useState } from "react";
import { HeroYouTubePlayer } from "@/components/home/HeroYouTubePlayer";
import { heroVideo } from "@/lib/home-content";
import { cn } from "@/lib/utils";

/**
 * Background video for the home hero. Uses a CSS gradient until the stream is
 * ready — never flashes the poster image on load.
 */
export function HeroBackgroundVideo() {
  /** Start true so we never paint the poster on first paint / hydration */
  const [reduceMotion, setReduceMotion] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [fileFailed, setFileFailed] = useState(false);

  const youtubeId = heroVideo.youtubeId;
  const useYouTube = Boolean(youtubeId);
  const useFile = !useYouTube || fileFailed;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || !heroVideo.enabled || useYouTube) return;
    const onVisibility = () => {
      const el = document.getElementById("home-hero-video") as HTMLVideoElement | null;
      if (!el) return;
      if (document.hidden) el.pause();
      else void el.play().catch(() => undefined);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [reduceMotion, useYouTube]);

  if (!heroVideo.enabled) return null;

  if (reduceMotion) {
    return <div className="home-hero-video-scrim absolute inset-0 z-0" aria-hidden />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-[900ms] ease-out",
          videoReady ? "opacity-100" : "opacity-0",
        )}
      >
        {useYouTube && youtubeId ? (
          <HeroYouTubePlayer videoId={youtubeId} onReady={() => setVideoReady(true)} />
        ) : useFile && !fileFailed ? (
          <video
            id="home-hero-video"
            className="home-hero-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
            onError={() => setFileFailed(true)}
          >
            {heroVideo.webm ? <source src={heroVideo.webm} type="video/webm" /> : null}
            <source src={heroVideo.mp4} type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className="home-hero-video-scrim absolute inset-0" />
    </div>
  );
}
