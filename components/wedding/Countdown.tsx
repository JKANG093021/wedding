"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import { getWeddingCountdown, type WeddingCountdown } from "@/data/countdown";

export function Countdown() {
  const [countdown, setCountdown] = useState<WeddingCountdown | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => setCountdown(getWeddingCountdown(Date.now(), wedding.date, wedding.timeZone));
    const sync = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
      if (!document.hidden) { update(); timer = setInterval(update, 1000); }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => { if (timer) clearInterval(timer); document.removeEventListener("visibilitychange", sync); };
  }, []);

  const status = countdown?.status;
  const isClock = !countdown || status === "counting";
  const units = ["days", "hours", "minutes", "seconds"] as const;
  return <section className="countdown-section" aria-labelledby="countdown-heading">
    <p className="eyebrow">Every moment brings us closer</p>
    <h2 data-reveal="rise" id="countdown-heading">{status === "today" ? "Today is the day." : status === "married" ? "Our forever has begun." : "Until our wedding day"}</h2>
    {isClock ? <div data-reveal="rise" data-delay="120" className="countdown-numbers" role="timer" aria-label="Time until our wedding celebration begins in the Philippines" aria-live="off">
      {units.map(unit => <div className="countdown-unit" key={unit}>
        <span className="countdown-value">{countdown?.status === "counting" ? String(countdown[unit]).padStart(2, "0") : "—"}</span><span className="eyebrow">{unit}</span>
      </div>)}
    </div> : <p className="countdown-message" role="status">{status === "today" ? "We can’t wait to celebrate with you." : status === "married" ? <>{wedding.groom} & {wedding.bride}<br />are officially married.</> : "[WEDDING DATE]"}</p>}
    {isClock && <p className="countdown-note">Counting down to our 10:00 AM celebration in the Philippines.</p>}
  </section>;
}
