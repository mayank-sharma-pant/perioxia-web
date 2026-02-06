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
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".stat-card", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.utils.toArray<HTMLElement>(".stat-value").forEach((node) => {
          const target = Number(node.dataset.value || 0);
          const suffix = node.dataset.suffix || "";
          node.textContent = `${target}${suffix}`;
        });
      });
<<<<<<< HEAD
=======

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stat-card", {
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });

        gsap.utils.toArray<HTMLElement>(".stat-value").forEach((node) => {
          const target = Number(node.dataset.value || 0);
          const suffix = node.dataset.suffix || "";
          gsap.fromTo(
            node,
            { textContent: 0 },
            {
              textContent: target,
              duration: 1.8,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: node,
                start: "top 85%",
              },
              onUpdate: function () {
                const current = Number(node.textContent);
                const formatted = target % 1 === 0 ? Math.round(current) : current.toFixed(2);
                node.textContent = `${formatted}${suffix}`;
              },
              onComplete: () => {
                gsap.fromTo(
                  node,
                  { x: -2 },
                  { x: 2, duration: 0.08, repeat: 3, yoyo: true, ease: "power1.inOut" }
                );
              },
            }
          );
        });
      });
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
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
<<<<<<< HEAD
              <div className="rounded-2xl glass-card p-6 text-center">
                <div className="text-4xl font-mono text-text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
=======
              <div className="rounded-2xl glass-card p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div
                  className="stat-value text-4xl font-mono-tech text-primary"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                >
                  0
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
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
