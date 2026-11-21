"use client";

import { useEffect } from "react";

// Animates every element with the "reveal" class each time it scrolls into view,
// and resets it when it leaves, so the animation plays again on the next pass.
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting));
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
