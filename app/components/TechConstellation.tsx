"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="visiblo" className="relative overflow-hidden py-24 bg-[rgba(20,27,61,0.5)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_55%)]" />
      <div className="container mx-auto px-6 relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="visiblo-panel relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-10">
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(160deg,rgba(0,212,255,0.16),transparent_60%)]" />
          <div className="relative">
            <div className="flex items-center justify-between text-xs font-mono-tech uppercase tracking-[0.3em] text-secondary">
              <span>Visiblo dashboard</span>
              <span className="text-[10px] text-primary">Live telemetry</span>
            </div>
            <div className="mt-6 grid gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 relative">
                <div className="flex items-center justify-between text-xs text-secondary">
                  <span>Visibility score</span>
                  <span className="text-primary">+18.2%</span>
                </div>
                <div className="mt-4 h-24 w-full rounded-xl bg-[linear-gradient(120deg,rgba(0,212,255,0.25),rgba(139,92,246,0.1))] relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(90deg,rgba(0,212,255,0.4),rgba(255,0,128,0.2))]" />
                  <div className="absolute inset-0 scan-line bg-[linear-gradient(180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.3),rgba(255,255,255,0.0))]" />
                </div>
                <button
                  className="absolute right-6 top-10 h-3 w-3 rounded-full bg-[var(--accent-blue)] shadow-[0_0_12px_rgba(0,212,255,0.6)] transition hover:scale-125"
                  aria-label="Highlight visibility score"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="visiblo-panel">
          <p className="text-xs font-mono-tech uppercase tracking-[0.4em] text-secondary">Launching Q2 2025</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">Visiblo</h2>
          <p className="mt-4 text-lg text-secondary max-w-xl">
            AI does not see brands. It infers them. Visiblo monitors brand presence across 150+ AI platforms, scoring
            visibility and surfacing competitive intelligence for AI-first discoverability.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div
                  className="visiblo-metric text-2xl font-mono-tech text-primary"
                  data-value={metric.value}
                  data-suffix={metric.suffix}
                >
                  0
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
          <button className="mt-10 rounded-full border border-white/10 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950">
            Join waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
