"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { wedding } from "@/data/wedding";

export type MusicHandle = { startOnOpen: () => void };
type PlayerCommand = "addEventListener" | "mute" | "playVideo" | "setVolume" | "unMute";

export const MusicControl = forwardRef<MusicHandle, { visible: boolean }>(function MusicControl({ visible }, ref) {
  const player = useRef<HTMLIFrameElement>(null);
  const playRequested = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [origin, setOrigin] = useState("");

  function command(func: PlayerCommand, args: (number | string)[] = []) {
    player.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "https://www.youtube.com",
    );
  }

  function play() {
    playRequested.current = true;
    command("setVolume", [24]);
    command("playVideo");
  }

  function startFromMusicButton() {
    playRequested.current = true;
    setMuted(false);
    setPlaying(true);
    // Assigning autoplay during this button press preserves the browser's user
    // activation, so guests still hear the track when autoplay is restricted.
    if (player.current) {
      player.current.src = `https://www.youtube.com/embed/${wedding.music.youtubeId}?autoplay=1&loop=1&playlist=${wedding.music.youtubeId}&controls=0&enablejsapi=1&playsinline=1&rel=0${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`;
    }
    play();
  }

  useEffect(() => {
    setOrigin(window.location.origin);
    function handlePlayerEvent(event: MessageEvent) {
      if (event.origin !== "https://www.youtube.com") return;
      let data = event.data;
      if (typeof data === "string") {
        try { data = JSON.parse(data); }
        catch { return; }
      }
      if (data?.event === "onReady") {
        command("addEventListener", ["onStateChange"]);
        command("setVolume", [24]);
        if (playRequested.current) play();
      }
      if (data?.event === "onStateChange") {
        setPlaying(data.info === 1);
      }
    }
    window.addEventListener("message", handlePlayerEvent);
    return () => window.removeEventListener("message", handlePlayerEvent);
  }, []);

  useImperativeHandle(ref, () => ({
    startOnOpen() {
      if (wedding.music.enabled && wedding.music.playOnOpen) play();
    },
  }));

  if (!wedding.music.enabled) return null;

  const controlLabel = !playing ? "Play piano music" : muted ? "Music muted" : "Mute music";
  const accessibleLabel = !playing ? "Play Angels Brought Me Here piano music" : muted ? "Unmute wedding music" : "Mute wedding music";

  return <>
    <iframe
      ref={player}
      className="music-player"
      title={wedding.music.title}
      src={`https://www.youtube.com/embed/${wedding.music.youtubeId}?autoplay=0&loop=1&playlist=${wedding.music.youtubeId}&controls=0&enablejsapi=1&playsinline=1&rel=0${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`}
      allow="autoplay; encrypted-media"
      onLoad={() => {
        command("addEventListener", ["onStateChange"]);
        command("setVolume", [24]);
      }}
    />
    {visible && <button
      className="music-control"
      aria-pressed={playing ? muted : undefined}
      aria-label={accessibleLabel}
      onClick={() => {
        if (!playing) {
          startFromMusicButton();
          return;
        }
        const next = !muted;
        setMuted(next);
        command(next ? "mute" : "unMute");
      }}
    >
      <span aria-hidden="true">♪</span> {controlLabel}
    </button>}
  </>;
});
