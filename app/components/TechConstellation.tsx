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
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".visiblo-panel", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="visiblo" className="relative overflow-hidden py-24 bg-bg-elevated/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_55%)]" />
      <div className="container-precision relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="visiblo-panel relative rounded-3xl border border-border-subtle glass-card p-8 sm:p-10">
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(160deg,rgba(0,212,255,0.16),transparent_60%)]" />
          <div className="relative">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-text-secondary">
              <span>Visiblo dashboard</span>
              <span className="text-[10px] text-text-primary">Live telemetry</span>
            </div>
            <div className="mt-6 grid gap-6">
              <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>Visibility score</span>
                  <span className="text-text-primary">+18.2%</span>
                </div>
                <div className="mt-4 h-24 w-full rounded-xl bg-gradient-to-r from-cyber-blue/25 to-neon-violet/10 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-r from-cyber-blue/40 to-plasma-pink/20" />
                  <div className="scan-line" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4">
                  <div className="text-xs text-text-secondary">Platform coverage</div>
                  <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-neon-violet/35 to-cyber-blue/15" />
                </div>
                <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4">
                  <div className="text-xs text-text-secondary">Signal heatmap</div>
                  <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-plasma-pink/35 to-neon-violet/15" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="visiblo-panel">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-text-secondary">Launching Q2 2025</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display gradient-text">VISIBLO</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl">
            The first product inside the Perioxia ecosystem. Visiblo monitors brand presence across 150+ AI platforms,
            scoring visibility and surfacing competitive intelligence for AI-first discoverability.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-border-subtle glass-card p-4">
                <div className="text-2xl font-mono text-text-primary">
                  {metric.value}{metric.suffix}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
          <MagneticButton className="mt-10 px-8 py-4 bg-gradient-to-r from-cyber-blue to-plasma-pink text-bg-deep font-bold rounded-lg">
            Join waitlist →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
