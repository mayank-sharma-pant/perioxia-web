"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  "AI-powered internal tools",
  "Data dashboards and reporting",
  "Custom CRMs and workflow systems",
  "Automation and integrations",
];

export default function ProcessAndStats() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="capabilities" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">What we can build</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
            Delivery-minded systems for real operations.
          </h2>
          <p className="mt-6 text-secondary leading-relaxed">
            We take on scoped builds that require reliable engineering, clear communication, and measurable outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={item}
              className="capability-card rounded-2xl border border-white/5 bg-surface p-8 flex flex-col justify-between group hover:border-[var(--accent)]/30 transition-all duration-300"
            >
              <div className="text-[var(--accent)]/40 font-mono text-sm mb-6 group-hover:text-[var(--accent)] transition-colors">0{index + 1}</div>
              <p className="text-base font-semibold text-primary leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
