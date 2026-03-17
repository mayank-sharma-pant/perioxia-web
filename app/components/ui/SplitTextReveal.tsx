"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SplitTextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Manual splitting for simpler implementation without external libraries
      const words = textRef.current?.innerText.split(" ");
      if (textRef.current && words) {
        textRef.current.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="reveal-word inline-block">${word}</span></span>`
          )
          .join(" ");
      }

      gsap.from(".reveal-word", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        yPercent: 100,
        duration: 0.8,
        stagger: 0.05,
        ease: "power4.out",
      });
    }, textRef);

    return () => ctx.revert();
  }, [children]);

  return (
    <h2 ref={textRef} className={className}>
      {children}
    </h2>
  );
}
