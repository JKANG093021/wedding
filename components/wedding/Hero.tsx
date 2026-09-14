import { wedding, weddingDateLabel } from "@/data/wedding";
import { BotanicalOrnament } from "./BotanicalOrnament";
import { WeddingRings } from "./WeddingRings";

export function Hero() {
  return <section id="home" className="invitation-hero" aria-labelledby="invitation-title">
    <BotanicalOrnament position="left" />
    <BotanicalOrnament position="right" />
    <div className="invitation-hero-inner">
      <div className="hero-ornament" data-reveal="rings"><WeddingRings /></div>
      <p className="eyebrow hero-kicker" data-reveal="rise">Together with their families</p>
      <h1 id="invitation-title" className="invitation-names">
        <span data-reveal="rise" data-delay="80">{wedding.groom}</span>
        <span className="name-ampersand" data-reveal="line" data-delay="130"><i /><em>&</em><i /></span>
        <span className="bride-name" data-reveal="rise" data-delay="180">{wedding.bride}</span>
      </h1>
      <p className="invitation-request eyebrow" data-reveal="rise" data-delay="230">Request the honour of your presence<br />as they celebrate their wedding</p>
      <span className="vertical-gold-rule" data-reveal="line" aria-hidden="true" />
      <p className="invitation-date" data-reveal="rise">{weddingDateLabel}</p>
      <div className="invitation-place" data-reveal="rise" data-delay="100">
        <p>{wedding.venue}</p><p>{wedding.venueAddress}</p><p className="invitation-time">{wedding.ceremonyTime}</p>
      </div>
    </div>
  </section>;
}
