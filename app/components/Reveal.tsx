"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      // Fallback: si l’API n’existe pas, on montre tout
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target); // on ne rejoue pas l’anim
          }
        }
      },
      {
        root: null,
        threshold: 0.12, // déclenche dès que ~12% visible
        rootMargin: "0px 0px -4% 0px",
      }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}