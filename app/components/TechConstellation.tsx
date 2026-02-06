"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

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
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".visiblo-panel", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.utils.toArray<HTMLElement>(".visiblo-metric").forEach((metric) => {
          const target = Number(metric.dataset.value || 0);
          const suffix = metric.dataset.suffix || "";
          metric.textContent = `${target}${suffix}`;
        });
      });
<<<<<<< HEAD
=======

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".visiblo-panel", {
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>(".visiblo-metric").forEach((metric) => {
          const target = Number(metric.dataset.value || 0);
          const suffix = metric.dataset.suffix || "";
          gsap.fromTo(
            metric,
            { textContent: 0 },
            {
              textContent: target,
              duration: 1.8,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: metric,
                start: "top 85%",
              },
              onUpdate: function () {
                metric.textContent = `${Math.round(Number(metric.textContent))}${suffix}`;
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
<<<<<<< HEAD
              <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4">
                <div className="flex items-center justify-between text-xs text-text-secondary">
=======
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 relative">
                <div className="flex items-center justify-between text-xs text-secondary">
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
                  <span>Visibility score</span>
                  <span className="text-text-primary">+18.2%</span>
                </div>
                <div className="mt-4 h-24 w-full rounded-xl bg-gradient-to-r from-cyber-blue/25 to-neon-violet/10 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-r from-cyber-blue/40 to-plasma-pink/20" />
                  <div className="scan-line" />
                </div>
                <button
                  className="absolute right-6 top-10 h-3 w-3 rounded-full bg-[var(--accent-blue)] shadow-[0_0_12px_rgba(0,212,255,0.6)] transition hover:scale-125"
                  aria-label="Highlight visibility score"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
<<<<<<< HEAD
                <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4">
                  <div className="text-xs text-text-secondary">Platform coverage</div>
                  <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-neon-violet/35 to-cyber-blue/15" />
                </div>
                <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4">
                  <div className="text-xs text-text-secondary">Signal heatmap</div>
                  <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-plasma-pink/35 to-neon-violet/15" />
=======
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 relative">
                  <div className="text-xs text-secondary">Platform coverage</div>
                  <div className="mt-3 h-20 rounded-xl bg-[linear-gradient(140deg,rgba(139,92,246,0.35),rgba(0,212,255,0.15))]" />
                  <button
                    className="absolute right-6 top-12 h-3 w-3 rounded-full bg-[var(--accent-pink)] shadow-[0_0_12px_rgba(255,0,128,0.6)] transition hover:scale-125"
                    aria-label="Highlight platform coverage"
                  />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 relative">
                  <div className="text-xs text-secondary">Signal heatmap</div>
                  <div className="mt-3 h-20 rounded-xl bg-[linear-gradient(140deg,rgba(255,0,128,0.35),rgba(139,92,246,0.15))]" />
                  <button
                    className="absolute right-6 top-12 h-3 w-3 rounded-full bg-[var(--accent-lime)] shadow-[0_0_12px_rgba(0,255,136,0.6)] transition hover:scale-125"
                    aria-label="Highlight signal heatmap"
                  />
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="visiblo-panel">
<<<<<<< HEAD
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-text-secondary">Launching Q2 2025</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display gradient-text">VISIBLO</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl">
            The first product inside the Perioxia ecosystem. Visiblo monitors brand presence across 150+ AI platforms,
            scoring visibility and surfacing competitive intelligence for AI-first discoverability.
=======
          <p className="text-xs font-mono-tech uppercase tracking-[0.4em] text-secondary">Launching Q2 2025</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">Visiblo</h2>
          <p className="mt-4 text-lg text-secondary max-w-xl">
            AI does not see brands. It infers them. Visiblo monitors brand presence across 150+ AI platforms, scoring
            visibility and surfacing competitive intelligence for AI-first discoverability.
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
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
