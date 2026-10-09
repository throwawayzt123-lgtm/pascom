"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Extract prefix, number, suffix
    // Examples: "$2M+", "50+", "1,000+", "4.5x"
    const prefixMatch = value.match(/^[^\d.]+/);
    const prefix = prefixMatch ? prefixMatch[0] : "";
    
    const suffixMatch = value.match(/[^\d.,]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";

    const numClean = value.replace(/^[^\d.]+/, "").replace(/[^\d.,]+$/, "").replace(/,/g, "");
    const targetNum = parseFloat(numClean);

    if (isNaN(targetNum)) {
      el.textContent = value;
      return;
    }

    const isFloat = numClean.includes(".");
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: targetNum,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          const formatted = isFloat
            ? obj.val.toFixed(1)
            : Math.floor(obj.val).toLocaleString();
          el.textContent = `${prefix}${formatted}${suffix}`;
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [value]);

  return (
    <span ref={containerRef} className={className}>
      {value}
    </span>
  );
}
