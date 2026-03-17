"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlowFollower from "./ui/GlowFollower";
import SplitTextReveal from "./ui/SplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  {
    title: "AI Systems",
    desc: "Applied AI infrastructure for automation, decision support, and intelligent product experiences.",
  },
  {
    title: "Data Platforms",
    desc: "Reliable data pipelines, observability layers, and scalable analytics foundations.",
  },
  {
    title: "Custom Engineering",
    desc: "Purpose-built software for internal operations, workflows, and client-facing tools.",
  },
];

export default function SolutionsGrid() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".focus-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="what-we-do" className="bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="inline-block px-3 py-1 rounded-full border border-[var(--accent)]/30 text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] bg-[var(--accent)]/5 mb-6">
            What we do
          </p>
          <SplitTextReveal className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-primary">
            Focused capabilities for AI-first products.
          </SplitTextReveal>
          <p className="mt-4 text-base text-secondary/80 max-w-xl leading-relaxed">
            We deliver specialized engineering for companies that rely on predictable AI workflows and high-performance data architecture.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <GlowFollower
              key={area.title}
              className="focus-card float-card rounded-3xl border border-white/10 bg-[var(--bg-elevated)]"
            >
              <div className="p-8" style={{ animationDelay: `${index * 1.4}s` }}>
                <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
                <p className="mt-4 text-base text-secondary/80 leading-relaxed">{area.desc}</p>
              </div>
            </GlowFollower>
          ))}
        </div>
      </div>
    </section>
  );
}
