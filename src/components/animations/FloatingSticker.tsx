"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

interface FloatingStickerProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
  rotationAngle?: number;
  delay?: number;
}

export function FloatingSticker({
  children,
  className = "",
  duration = 4,
  yOffset = 8,
  rotationAngle = 3,
  delay = 0,
}: FloatingStickerProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(el, {
      y: -yOffset,
      rotation: rotationAngle,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tween.kill();
    };
  }, [duration, yOffset, rotationAngle, delay]);

  return (
    <div ref={elementRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
