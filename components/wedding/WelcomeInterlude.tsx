import Image from "next/image";
import { wedding, weddingDateLabel } from "@/data/wedding";
import { BotanicalOrnament } from "./BotanicalOrnament";
import { WeddingRings } from "./WeddingRings";

export function WelcomeInterlude({ concealed }: { concealed: boolean }) {
  return <section
    className="welcome-interlude"
    aria-label="Welcome to the wedding invitation"
    aria-hidden={concealed}
    aria-live="polite"
  >
    <div className="welcome-photo" aria-hidden="true">
      <Image
        src={wedding.heroPhoto.src}
        alt=""
        fill
        sizes="100vw"
        className="welcome-photo-image"
      />
    </div>
    <BotanicalOrnament position="left" />
    <BotanicalOrnament position="right" />
    <span className="welcome-frame" aria-hidden="true" />
    <span className="welcome-frame-inner" aria-hidden="true" />
    <div className="welcome-content">
      <div className="welcome-copy">
        <p className="eyebrow welcome-overline">Welcome to</p>
        <WeddingRings />
        <h2 className="welcome-heading">
          <span>The beginning</span>
          <em>of forever</em>
        </h2>
        <span className="welcome-rule" aria-hidden="true" />
        <p className="welcome-couple">{wedding.groom} <em>&</em> {wedding.bride}</p>
        <p className="eyebrow welcome-date">{weddingDateLabel}</p>
        <span className="welcome-progress" aria-hidden="true"><i /></span>
      </div>
    </div>
  </section>;
}
