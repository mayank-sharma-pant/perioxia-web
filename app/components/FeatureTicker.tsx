"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const features = [
  "AI VISIBILITY TRACKING",
  "NEURAL WORKER SWARMS",
  "CRM INTELLIGENCE",
  "ROBOTIC OS",
  "ENTERPRISE SCALE",
  "REAL-TIME ANALYTICS",
  "API INTEGRATION",
  "COMPETITOR INTEL",
  "AI MENTIONS",
  "CITATION MAPPING",
];

export default function FeatureTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-4 bg-bg-elevated/50 border-y border-border-subtle overflow-hidden">
      <div ref={tickerRef} className="flex w-max gap-12 px-4">
        {[...features, ...features].map((feature, i) => (
          <span
            key={i}
            className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary whitespace-nowrap flex items-center gap-3"
          >
            <span className="text-cyber-blue">●</span>
            {feature}
          </span>
        ))}
      </div>
    </section>
  );
}
