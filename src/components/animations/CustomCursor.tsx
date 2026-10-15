"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Initially hide cursor until first movement
    gsap.set([dot, ring], { opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power2.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power2.out" });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseEnterInteractive = () => {
      gsap.to(ring, {
        scale: 1.8,
        borderColor: "rgba(18, 176, 226, 0.85)",
        backgroundColor: "rgba(18, 176, 226, 0.12)",
        duration: 0.25,
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: "#ffffff",
        duration: 0.2,
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(18, 176, 226, 0.5)",
        backgroundColor: "transparent",
        duration: 0.25,
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "#12b0e2",
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "a, button, input, select, textarea, [role='button'], .card, .interactive-hover"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const updatedElements = document.querySelectorAll<HTMLElement>(
        "a, button, input, select, textarea, [role='button'], .card, .interactive-hover"
      );
      updatedElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Center dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-9999 -ml-1 -mt-1 size-2 rounded-full bg-accent-500 shadow-[0_0_8px_#12b0e2] opacity-0 hidden md:block"
      />
      {/* Outer aura ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-9998 -ml-4 -mt-4 size-8 rounded-full border border-accent-500/50 backdrop-blur-[1px] opacity-0 transition-transform hidden md:block"
      />
    </>
  );
}
