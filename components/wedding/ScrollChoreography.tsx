"use client";
import { useEffect } from "react";

/** Reveals run only after opening; static content remains visible without JS support. */
export function ScrollChoreography({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;
    const reveal = (element: HTMLElement) => { element.classList.add("is-revealed"); observer?.unobserve(element); };
    const setup = () => {
      observer?.disconnect();
      if (preference.matches) { elements.forEach(el => el.classList.remove("scroll-ready", "is-revealed")); return; }
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement);
      }), { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      elements.forEach(el => {
        el.style.setProperty("--reveal-delay", `${Number(el.dataset.delay || 0)}ms`);
        el.classList.add("scroll-ready"); observer?.observe(el);
      });
    };
    const focus = (event: FocusEvent) => {
      if (event.target instanceof HTMLElement) {
        const el = event.target.closest<HTMLElement>("[data-reveal]"); if (el) reveal(el);
      }
    };
    setup(); preference.addEventListener("change", setup); document.addEventListener("focusin", focus);
    return () => {
      observer?.disconnect(); preference.removeEventListener("change", setup); document.removeEventListener("focusin", focus);
      elements.forEach(el => { el.classList.remove("scroll-ready", "is-revealed"); el.style.removeProperty("--reveal-delay"); });
    };
  }, [enabled]);
  return null;
}
