import Image from "next/image";
import { wedding } from "@/data/wedding";
import { WeddingRings } from "./WeddingRings";

export function CouplePortrait() {
  return <section id="invitation" className="couple-section" aria-label="John Rey and Christine Ericka">
    <div className="portrait-composition">
      <p className="portrait-side portrait-side-left eyebrow" data-reveal="rise">The beginning</p>
      <figure className="portrait-frame" data-reveal="photo">
        <span className="portrait-inner-frame" aria-hidden="true" />
        <Image
          src={wedding.heroPhoto.src}
          alt={wedding.heroPhoto.alt}
          width={wedding.heroPhoto.width}
          height={wedding.heroPhoto.height}
          sizes="(max-width: 760px) 86vw, 680px"
          className="portrait-photo"
        />
      </figure>
      <p className="portrait-side portrait-side-right eyebrow" data-reveal="rise" data-delay="160">Of forever</p>
    </div>
    <div className="portrait-caption" data-reveal="rise">
      <WeddingRings />
      <p>With joyful hearts,<br /><em>we invite you.</em></p>
    </div>
  </section>;
}
