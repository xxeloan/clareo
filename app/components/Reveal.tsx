// app/components/Reveal.tsx
"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("is-revealed");
            // Si tu veux que ça ne se rejoue pas en scroll back :
            io.unobserve(el);
          }
        }
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}