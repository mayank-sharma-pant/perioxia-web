"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="focus" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">What we work on</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">
            Focus areas grounded in real delivery.
          </h2>
          <p className="mt-4 text-secondary leading-relaxed">
            We specialize in bridging the gap between raw technology and production-ready systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="focus-card group rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <div className="h-2 w-12 bg-[var(--accent)]/10 rounded-full mb-6 group-hover:bg-[var(--accent)]/30 transition-colors" />
              <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
              <p className="mt-4 text-sm text-secondary leading-relaxed">{area.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Learn more <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
