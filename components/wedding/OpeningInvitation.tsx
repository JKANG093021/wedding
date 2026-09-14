"use client";

import { motion, useReducedMotion } from "motion/react";
import { wedding, weddingDateLabel } from "@/data/wedding";
import { Monogram } from "./Monogram";
import { WeddingRings } from "./WeddingRings";

export function OpeningInvitation({ opening, onOpen, onComplete }: {
  opening: boolean; onOpen: () => void; onComplete: () => void;
}) {
  const reduced = useReducedMotion();
  const reveal = (delay: number, distance = 12) => ({
    initial: { opacity: 0, y: reduced ? 0 : distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 1.05, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  const panelTransition = { duration: reduced ? 0.12 : 1.75, delay: reduced ? 0 : 0.12, ease: [0.76, 0, 0.24, 1] as const };

  return <section className={`opening${opening ? " is-opening" : ""}`} aria-label="Your wedding invitation" aria-busy={opening}>
    <motion.div className="paper-panel paper-left" aria-hidden="true" initial={false} animate={{ x: opening ? "-101%" : "0%" }} transition={panelTransition}>
      <span className="cover-panel-image" />
    </motion.div>
    <motion.div className="paper-panel paper-right" aria-hidden="true" initial={false} animate={{ x: opening ? "101%" : "0%" }} transition={panelTransition}
      onAnimationComplete={() => { if (opening) onComplete(); }}>
      <span className="cover-panel-image" />
    </motion.div>

    <motion.span className="cover-rule cover-rule-top" aria-hidden="true" initial={{ scaleX: reduced ? 1 : 0 }} animate={{ scaleX: 1, opacity: opening ? 0 : 1 }} transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 0.3 }} />
    <motion.span className="cover-rule cover-rule-bottom" aria-hidden="true" initial={{ scaleX: reduced ? 1 : 0 }} animate={{ scaleX: 1, opacity: opening ? 0 : 1 }} transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 0.45 }} />
    <motion.span className="cover-rule cover-rule-left" aria-hidden="true" initial={{ scaleY: reduced ? 1 : 0 }} animate={{ scaleY: 1, opacity: opening ? 0 : 1 }} transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 0.55 }} />
    <motion.span className="cover-rule cover-rule-right" aria-hidden="true" initial={{ scaleY: reduced ? 1 : 0 }} animate={{ scaleY: 1, opacity: opening ? 0 : 1 }} transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 0.7 }} />

    <motion.div className="opening-content" initial={false} animate={{ opacity: opening ? 0 : 1, scale: opening && !reduced ? 0.985 : 1 }} transition={{ duration: reduced ? 0.1 : 0.5 }}>
      <motion.div className="opening-monogram" {...reveal(0.15, 0)}><Monogram large />
        <motion.div animate={reduced ? undefined : { rotate: [0, 2.5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}><WeddingRings /></motion.div>
      </motion.div>
      <motion.p className="eyebrow invitation-eyebrow" {...reveal(0.6)}>You are invited</motion.p>
      <motion.div {...reveal(1.02)}>
        <p className="opening-kicker">to the wedding of</p>
        <h1 className="opening-names"><span>{wedding.groom}</span><em>&</em><span>{wedding.bride}</span></h1>
      </motion.div>
      <motion.div className="opening-details" {...reveal(1.52)}>
        <p>{weddingDateLabel}</p>
        <p className="eyebrow opening-venue">{wedding.venue}</p>
      </motion.div>
      <motion.div className="opening-action" {...reveal(2.02)}>
        <button className="text-button open-button" onClick={onOpen} disabled={opening}>{opening ? "Opening invitation" : "Open invitation"}</button>
        <p className="opening-sound-note">A soft chime accompanies the opening.</p>
      </motion.div>
    </motion.div>
    <motion.p className="opening-footnote eyebrow" initial={{ opacity: 0 }} animate={{ opacity: opening ? 0 : 1 }} transition={{ delay: opening || reduced ? 0 : 2.35, duration: 0.7 }}>With love, always</motion.p>
  </section>;
}
