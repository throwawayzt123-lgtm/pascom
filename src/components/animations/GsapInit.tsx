"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Progressive GSAP reveal on scroll for elements with data-gsap-reveal
    const elements = document.querySelectorAll<HTMLElement>("[data-gsap-reveal]");
    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const direction = el.getAttribute("data-direction") || "up";

        let y = 35;
        let x = 0;
        if (direction === "down") y = -35;
        if (direction === "left") {
          x = 35;
          y = 0;
        }
        if (direction === "right") {
          x = -35;
          y = 0;
        }

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y,
            x,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.85,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
