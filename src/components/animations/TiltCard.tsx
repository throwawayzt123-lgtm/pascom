"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees (e.g. 8)
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const rotXTo = gsap.quickTo(card, "rotationX", { duration: 0.35, ease: "power2.out" });
    const rotYTo = gsap.quickTo(card, "rotationY", { duration: 0.35, ease: "power2.out" });
    const zTo = gsap.quickTo(card, "z", { duration: 0.35, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = (x / rect.width) * 2 - 1; // -1 to 1
      const py = (y / rect.height) * 2 - 1; // -1 to 1

      rotXTo(-py * maxTilt);
      rotYTo(px * maxTilt);
      zTo(15);

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: 0.16,
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 65%)`,
          duration: 0.2,
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.015,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        z: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: 0,
          duration: 0.4,
        });
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, glare]);

  return (
    <div
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={`relative h-full ${className}`}
    >
      <div
        ref={cardRef}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity"
            style={{ zIndex: 10 }}
          />
        )}
      </div>
    </div>
  );
}
