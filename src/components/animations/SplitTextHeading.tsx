"use client";

import React, {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  isValidElement,
  cloneElement,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SplitTextHeadingProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  isHero?: boolean;
  delay?: number;
  stagger?: number;
  duration?: number;
};

function splitTextToNodes(text: string, keyPrefix: string): ReactNode[] {
  const tokens = text.split(/(\s+)/);
  return tokens.map((token, tokenIdx) => {
    // Preserve whitespace
    if (/^\s+$/.test(token)) {
      return (
        <span key={`${keyPrefix}-space-${tokenIdx}`} className="inline">
          {" "}
        </span>
      );
    }
    if (!token) return null;

    // Word wrapper with characters
    const chars = Array.from(token).map((char, charIdx) => (
      <span
        key={`${keyPrefix}-w${tokenIdx}-c${charIdx}`}
        className="char-split inline-block will-change-transform will-change-opacity"
      >
        {char}
      </span>
    ));

    return (
      <span
        key={`${keyPrefix}-word-${tokenIdx}`}
        className="inline-block whitespace-nowrap"
      >
        {chars}
      </span>
    );
  });
}

function processNode(node: ReactNode, keyPrefix: string): ReactNode {
  if (typeof node === "string") {
    return splitTextToNodes(node, keyPrefix);
  }
  if (typeof node === "number") {
    return splitTextToNodes(String(node), keyPrefix);
  }
  if (Array.isArray(node)) {
    return node.map((child, idx) => processNode(child, `${keyPrefix}-${idx}`));
  }
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    if (props && props.children) {
      return cloneElement(
        node,
        { key: node.key || keyPrefix },
        processNode(props.children, `${keyPrefix}-el`)
      );
    }
    return node;
  }
  return node;
}

export function SplitTextHeading({
  as: Component = "h2",
  children,
  className = "",
  isHero = false,
  delay = 0.2,
  stagger = 0.02,
  duration = 0.65,
}: SplitTextHeadingProps) {
  const headingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const chars = el.querySelectorAll<HTMLElement>(".char-split");
    if (!chars.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 35,
          rotateX: -45,
          scale: 0.92,
          filter: "blur(3px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          stagger,
          ease: "power3.out",
          delay: isHero ? delay : 0,
          scrollTrigger: isHero
            ? undefined
            : {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [duration, stagger, isHero, delay]);

  const parsedContent = processNode(children, "split-heading");

  return (
    <Component
      ref={headingRef}
      className={`${className} [perspective:1000px]`}
    >
      {parsedContent}
    </Component>
  );
}
