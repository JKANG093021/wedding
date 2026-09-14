import { wedding, weddingDateLabel } from "@/data/wedding";
import { BotanicalOrnament } from "./BotanicalOrnament";
import { Monogram } from "./Monogram";
import { WeddingRings } from "./WeddingRings";

export function FinalMessage() {
  return <footer className="final-cover" aria-label="Wedding invitation closing">
    <BotanicalOrnament position="left" />
    <BotanicalOrnament position="right" />
    <div className="final-cover-inner" data-reveal="rise">
      <Monogram large />
      <WeddingRings />
      <p className="final-names"><span>{wedding.groom}</span><em>&</em><span>{wedding.bride}</span></p>
      <span className="final-rule" aria-hidden="true" />
      <p className="final-date">{weddingDateLabel}</p>
      <p className="final-signoff">With love, always.</p>
    </div>
  </footer>;
}
