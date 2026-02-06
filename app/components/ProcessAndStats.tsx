"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedCounter from "./ui/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, suffix: "+", label: "AI platforms" },
  { value: 10, suffix: "M+", label: "Queries daily" },
  { value: 99.97, suffix: "%", label: "System uptime" },
  { value: 50, suffix: "ms", label: "Average latency" },
];

export default function ProcessAndStats() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative py-24">
      <div className="container-precision">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-text-secondary">The numbers speak</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-text-primary">Proven infrastructure.</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Operational metrics that reinforce Perioxia as an enterprise-grade infrastructure partner.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card gradient-border">
              <div className="rounded-2xl glass-card p-6 text-center">
                <div className="text-4xl font-mono text-text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-text-secondary">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
