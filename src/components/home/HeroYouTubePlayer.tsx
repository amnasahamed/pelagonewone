"use client";

import { useEffect, useRef } from "react";

type YTPlayer = {
  destroy: () => void;
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getDuration: () => number;
  getCurrentTime: () => number;
  getPlayerState: () => number;
};

type YTNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      host?: string;
      videoId: string;
      width?: string | number;
      height?: string | number;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (event: { target: YTPlayer }) => void;
        onStateChange?: (event: { data: number; target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
};

/** Jump back before the end so YouTube never shows the end/pause overlay */
const LOOP_LEAD_SECONDS = 0.65;

function loadYouTubeIframeAPI(): Promise<YTNamespace> {
  const w = window as Window & {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  };

  if (w.YT?.Player) return Promise.resolve(w.YT);

  return new Promise((resolve, reject) => {
    const finish = () => {
      if (w.YT?.Player) resolve(w.YT);
      else reject(new Error("YouTube iframe API unavailable"));
    };

    const previous = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      previous?.();
      finish();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => reject(new Error("YouTube iframe API failed to load"));
      document.head.appendChild(script);
    } else {
      const interval = window.setInterval(() => {
        if (w.YT?.Player) {
          window.clearInterval(interval);
          resolve(w.YT);
        }
      }, 40);
      window.setTimeout(() => {
        window.clearInterval(interval);
        if (!w.YT?.Player) reject(new Error("YouTube iframe API timeout"));
      }, 12_000);
    }
  });
}

function isNearEnd(player: YTPlayer) {
  try {
    const duration = player.getDuration();
    const current = player.getCurrentTime();
    return duration > 0 && current >= duration - LOOP_LEAD_SECONDS;
  } catch {
    return false;
  }
}

function resumePlayback(player: YTPlayer) {
  requestAnimationFrame(() => {
    player.playVideo();
    requestAnimationFrame(() => player.playVideo());
  });
}

function restartLoop(player: YTPlayer) {
  player.seekTo(0, true);
  resumePlayback(player);
}

type Props = {
  videoId: string;
  onReady?: () => void;
};

export function HeroYouTubePlayer({ videoId, onReady }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const loopTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;

    void loadYouTubeIframeAPI()
      .then((YT) => {
        if (cancelled) return;

        const player = new YT.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          videoId,
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            playsinline: 1,
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            cc_load_policy: 0,
            disablekb: 1,
            fs: 0,
            enablejsapi: 1,
            origin: typeof window !== "undefined" ? window.location.origin : "",
          },
          events: {
            onReady: ({ target }) => {
              target.mute();
              target.playVideo();
              onReady?.();

              loopTimerRef.current = window.setInterval(() => {
                if (isNearEnd(target)) restartLoop(target);
              }, 40);

              resumeTimerRef.current = window.setInterval(() => {
                try {
                  const state = target.getPlayerState();
                  if (
                    state === YT.PlayerState.PAUSED ||
                    state === YT.PlayerState.ENDED ||
                    state === YT.PlayerState.CUED
                  ) {
                    if (isNearEnd(target) || state === YT.PlayerState.ENDED) {
                      restartLoop(target);
                    } else {
                      resumePlayback(target);
                    }
                  }
                } catch {
                  /* tearing down */
                }
              }, 120);
            },
            onStateChange: ({ data, target }) => {
              if (data === YT.PlayerState.ENDED || (data === YT.PlayerState.PAUSED && isNearEnd(target))) {
                restartLoop(target);
                return;
              }
              if (data === YT.PlayerState.PAUSED) {
                resumePlayback(target);
              }
            },
          },
        });

        playerRef.current = player;
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      if (loopTimerRef.current !== null) {
        window.clearInterval(loopTimerRef.current);
        loopTimerRef.current = null;
      }
      if (resumeTimerRef.current !== null) {
        window.clearInterval(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [videoId, onReady]);

  return (
    <div className="home-hero-youtube absolute inset-0">
      <div ref={mountRef} className="home-hero-youtube-player" />
      <div className="home-hero-youtube-veil" aria-hidden />
      <div className="home-hero-youtube-guard" aria-hidden />
    </div>
  );
}
