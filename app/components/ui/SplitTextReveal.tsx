"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SplitTextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-word", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        yPercent: 100,
        duration: 0.8,
        stagger: 0.05,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, [children]);

  const words = children.split(" ");

  return (
    <h2 ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <span className="reveal-word inline-block">
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
}
