"use client";
import { useEffect, useRef, useState } from "react";
import { wedding, weddingDateLabel } from "@/data/wedding";
import { ScrollChoreography } from "./ScrollChoreography";
import { OpeningInvitation } from "./OpeningInvitation";
import { WelcomeInterlude } from "./WelcomeInterlude";
import { Navigation } from "./Navigation";
import { MusicControl, type MusicHandle } from "./MusicControl";

type InvitationStage = "closed" | "opening" | "welcome" | "open";
type AudioWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };

async function playInvitationChime() {
  const AudioContextClass = window.AudioContext || (window as AudioWindow).webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    const context = new AudioContextClass();
    await context.resume();
    const master = context.createGain();
    const delay = context.createDelay();
    const echo = context.createGain();
    master.gain.value = 0.62;
    delay.delayTime.value = 0.28;
    echo.gain.value = 0.13;
    master.connect(context.destination);
    delay.connect(echo);
    echo.connect(master);

    const notes = [
      { frequency: 523.25, offset: 0, level: 0.065, length: 2.7 },
      { frequency: 659.25, offset: 0.68, level: 0.052, length: 2.8 },
      { frequency: 783.99, offset: 1.38, level: 0.048, length: 3 },
      { frequency: 1046.5, offset: 2.18, level: 0.035, length: 2.65 },
    ];

    notes.forEach(note => {
      const start = context.currentTime + note.offset;
      const end = start + note.length;
      const tone = context.createOscillator();
      const overtone = context.createOscillator();
      const overtoneLevel = context.createGain();
      const envelope = context.createGain();
      const filter = context.createBiquadFilter();
      tone.type = "sine";
      overtone.type = "triangle";
      tone.frequency.setValueAtTime(note.frequency, start);
      overtone.frequency.setValueAtTime(note.frequency * 2, start);
      overtoneLevel.gain.value = 0.11;
      filter.type = "lowpass";
      filter.frequency.value = 3200;
      envelope.gain.setValueAtTime(0.0001, start);
      envelope.gain.exponentialRampToValueAtTime(note.level, start + 0.06);
      envelope.gain.exponentialRampToValueAtTime(0.0001, end);
      tone.connect(envelope);
      overtone.connect(overtoneLevel);
      overtoneLevel.connect(envelope);
      envelope.connect(filter);
      filter.connect(master);
      filter.connect(delay);
      tone.start(start);
      overtone.start(start);
      tone.stop(end + 0.05);
      overtone.stop(end + 0.05);
    });

    window.setTimeout(() => { void context.close(); }, 5400);
  } catch {
    // The visual welcome remains complete if a browser blocks Web Audio.
  }
}

export function InvitationExperience({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<InvitationStage>("closed");
  const mainRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<MusicHandle>(null);
  const welcomeTimer = useRef<number | null>(null);
  const openingStarted = useRef(false);
  useEffect(() => {
    const before = document.body.style.overflow;
    if (stage !== "open") document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = before; };
  }, [stage]);
  useEffect(() => {
    if (stage === "open") mainRef.current?.focus({ preventScroll: true });
  }, [stage]);
  useEffect(() => () => {
    if (welcomeTimer.current !== null) window.clearTimeout(welcomeTimer.current);
  }, []);
  function openInvitation() {
    if (stage !== "closed" || openingStarted.current) return;
    openingStarted.current = true;
    setStage("opening");
    void playInvitationChime();
    musicRef.current?.startOnOpen();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    welcomeTimer.current = window.setTimeout(() => {
      welcomeTimer.current = null;
      setStage("open");
    }, reduced ? 1300 : 5200);
  }
  const welcoming = stage === "opening" || stage === "welcome";
  return <>
    <ScrollChoreography enabled={stage === "open"} />
    <div className={`invitation-page${stage === "open" ? " invitation-page-open" : ""}`}
      inert={stage !== "open"} aria-hidden={stage !== "open"}>
      <Navigation />
      <div ref={mainRef} tabIndex={-1} className="main-focus">{children}</div>
    </div>
    <MusicControl ref={musicRef} visible={stage === "open"} />
    {welcoming && <WelcomeInterlude concealed={stage === "opening"} />}
    {(stage === "closed" || stage === "opening") && <OpeningInvitation opening={stage === "opening"} onOpen={openInvitation} onComplete={() => setStage(current => current === "opening" ? "welcome" : current)} />}
    <noscript><style>{`.opening,.welcome-interlude,.invitation-page{display:none!important}`}</style>
      <div className="noscript-invitation"><p>You are invited to the wedding of</p><h1>{wedding.groom} & {wedding.bride}</h1><p>{weddingDateLabel} · {wedding.venue}</p><p>Please enable JavaScript to open the animated invitation.</p></div>
    </noscript>
  </>;
}
