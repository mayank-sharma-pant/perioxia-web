"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Queries analyzed", value: 10, suffix: "M+" },
  { label: "Platforms tracked", value: 150, suffix: "+" },
  { label: "Accuracy rate", value: 94, suffix: "%" },
  { label: "Response time", value: 50, suffix: "ms" },
];

export default function TechConstellation() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* Reduced motion */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".visiblo-panel", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.utils.toArray<HTMLElement>(".visiblo-metric").forEach((el) => {
          const value = el.dataset.value || "0";
          const suffix = el.dataset.suffix || "";
          el.textContent = `${value}${suffix}`;
        });
      });

      /* Full animation */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".visiblo-panel", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>(".visiblo-metric").forEach((el) => {
          const target = Number(el.dataset.value || 0);
          const suffix = el.dataset.suffix || "";

          gsap.fromTo(
            el,
            { textContent: 0 },
            {
              textContent: target,
              duration: 1.8,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
              onUpdate: () => {
                el.textContent = `${Math.round(
                  Number(el.textContent)
                )}${suffix}`;
              },
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="visiblo"
      className="relative overflow-hidden py-24 bg-white/5"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_55%)]" />

      <div className="relative z-10 container mx-auto px-6 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* LEFT — DASHBOARD MOCK */}
        <div className="visiblo-panel relative rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(160deg,rgba(0,212,255,0.16),transparent_60%)]" />

          <div className="relative space-y-6">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-secondary">
              <span>Visiblo dashboard</span>
              <span className="text-primary text-[10px]">Live telemetry</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 relative">
              <div className="flex items-center justify-between text-xs text-secondary">
                <span>Visibility score</span>
                <span className="text-primary">+18.2%</span>
              </div>
              <div className="mt-4 h-24 w-full rounded-xl bg-gradient-to-r from-cyber-blue/30 to-plasma-pink/20 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-r from-cyber-blue/50 to-plasma-pink/30" />
                <div className="scan-line" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-secondary">Platform coverage</div>
                <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-neon-violet/35 to-cyber-blue/15" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-secondary">Signal heatmap</div>
                <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-plasma-pink/35 to-neon-violet/15" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — COPY + METRICS */}
        <div className="visiblo-panel">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-secondary">
            Launching Q2 2025
          </p>

          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">
            Visiblo
          </h2>

          <p className="mt-4 text-lg text-secondary max-w-xl">
            AI does not see brands. It infers them. Visiblo monitors brand
            presence across 150+ AI platforms, scoring visibility and surfacing
            competitive intelligence for AI-first discoverability.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div
                  className="visiblo-metric text-2xl font-mono text-primary"
                  data-value={metric.value}
                  data-suffix={metric.suffix}
                >
                  0
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <MagneticButton className="mt-10 rounded-lg bg-gradient-to-r from-cyber-blue to-plasma-pink px-8 py-4 font-bold text-bg-deep">
            Join waitlist →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
