"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";

export function Gallery() {
  const photos = wedding.gallery.filter(photo => photo.src);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef<{x: number; y: number} | null>(null);
  const current = selected === null ? null : photos[selected];

  useEffect(() => {
    const modal = dialog.current;
    if (!modal || selected === null) return;
    if (!modal.open) modal.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; };
  }, [selected]);

  function close() { dialog.current?.close(); setSelected(null); }
  function move(direction: number) {
    if (photos.length > 1) setSelected(index => index === null ? null : (index + direction + photos.length) % photos.length);
  }

  const single = photos[0];
  return <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
    <header className="gallery-header" data-reveal="rise">
      <div><p className="eyebrow">A collection of us</p><h2 id="gallery-title">Together,<br /><em>in moments</em></h2></div>
      <p>A glimpse of the love that brings us to this celebration.</p>
    </header>

    {photos.length === 1 && single ? <div className="gallery-triptych" aria-label="Editorial portrait details">
      <div className="gallery-detail gallery-detail-one" data-reveal="photo" aria-hidden="true"><Image src={single.src} alt="" fill sizes="(max-width: 760px) 44vw, 290px" className="gallery-crop gallery-crop-top" /></div>
      <figure className="gallery-main" data-reveal="photo" data-delay="100">
        <button className="gallery-photo-button" onClick={() => setSelected(0)} aria-label={`View photograph: ${single.alt}`} aria-haspopup="dialog">
          <Image src={single.src} alt={single.alt} width={single.width} height={single.height} sizes="(max-width: 760px) 78vw, 620px" className="gallery-photo" />
        </button>
        <figcaption>{single.caption}</figcaption>
      </figure>
      <div className="gallery-detail gallery-detail-two" data-reveal="photo" data-delay="180" aria-hidden="true"><Image src={single.src} alt="" fill sizes="(max-width: 760px) 40vw, 260px" className="gallery-crop gallery-crop-bouquet" /></div>
    </div> : <div className="gallery-grid">
      {photos.map((photo, index) => <figure data-reveal="photo" data-delay={index % 2 * 140} className={`gallery-item gallery-item-${photo.orientation}`} key={`${photo.src}-${index}`}>
        <button className="gallery-photo-button" onClick={() => setSelected(index)} aria-label={`View photograph ${index + 1}: ${photo.alt}`} aria-haspopup="dialog">
          <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 760px) 86vw, 48vw" className="gallery-photo" />
        </button><figcaption>{photo.caption || `${wedding.groom} & ${wedding.bride}`}</figcaption>
      </figure>)}
    </div>}

    <dialog ref={dialog} className="photo-lightbox" aria-labelledby="lightbox-title" onClose={() => setSelected(null)}
      onClick={event => { if (event.target === event.currentTarget) close(); }}
      onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
      <div className="lightbox-top"><p id="lightbox-title">{wedding.groom} & {wedding.bride}</p><button autoFocus className="lightbox-text-button" onClick={close}>Close</button></div>
      {current && <figure className="lightbox-figure" onTouchStart={event => { const point = event.touches[0]; touch.current = {x: point.clientX, y: point.clientY}; }}
        onTouchEnd={event => { const start = touch.current; touch.current = null; if (!start) return; const end = event.changedTouches[0]; const dx = end.clientX - start.x; const dy = end.clientY - start.y; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1); }}>
        <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="100vw" className="lightbox-photo" />
        <figcaption aria-live="polite">{current.caption}{photos.length > 1 && ` · ${(selected ?? 0) + 1} / ${photos.length}`}</figcaption>
      </figure>}
      {photos.length > 1 && <div className="lightbox-navigation"><button className="lightbox-text-button" onClick={() => move(-1)}>Previous</button><button className="lightbox-text-button" onClick={() => move(1)}>Next</button></div>}
    </dialog>
  </section>;
}
