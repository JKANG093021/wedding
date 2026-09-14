"use client";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { wedding } from "@/data/wedding";
export type MusicHandle = { startOnOpen: () => void };
export const MusicControl = forwardRef<MusicHandle, { visible: boolean }>(function MusicControl({ visible }, ref) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const pending = useRef(false);
  async function play() {
    if (!audio.current || pending.current || failed) return;
    pending.current = true;
    try { audio.current.volume = 0.3; await audio.current.play(); }
    catch { setPlaying(false); }
    finally { pending.current = false; }
  }
  useImperativeHandle(ref, () => ({ startOnOpen() {
    if (wedding.music.enabled && wedding.music.playOnOpen) void play();
  } }));
  if (!wedding.music.enabled) return null;
  return <>
    <audio ref={audio} src={wedding.music.src} loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setFailed(true); setPlaying(false); }} />
    {visible && <button className="music-control" aria-pressed={playing} disabled={failed}
      aria-label={failed ? "Music unavailable" : playing ? "Pause wedding music" : "Play wedding music"}
      onClick={() => { if (playing) audio.current?.pause(); else void play(); }}>
      <span aria-hidden="true">♪</span> {failed ? "Music unavailable" : playing ? "Music on" : "Music off"}
    </button>}
  </>;
});
