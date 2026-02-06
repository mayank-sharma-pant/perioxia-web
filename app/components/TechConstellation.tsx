"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
<<<<<<< HEAD
import { Cloud, Code2, Database, Globe, Layers, Server, Cpu, Box } from "lucide-react";
=======
import ScrollTrigger from "gsap/ScrollTrigger";

const metrics = [
  { label: "Queries analyzed", value: 10, suffix: "M+" },
  { label: "Platforms tracked", value: 150, suffix: "+" },
  { label: "Accuracy rate", value: 94, suffix: "%" },
  { label: "Response time", value: 50, suffix: "ms" },
];

gsap.registerPlugin(ScrollTrigger);
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91

export default function TechConstellation() {
  const container = useRef<HTMLElement>(null);

<<<<<<< HEAD
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Core Pulse
            gsap.to(".core-pulse", { scale: 1.2, opacity: 0.5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            // Orbit Animations
            gsap.to(".orbit-ring-1", { rotation: 360, duration: 40, repeat: -1, ease: "linear" });
            gsap.to(".orbit-ring-2", { rotation: -360, duration: 60, repeat: -1, ease: "linear" });

            // Counter-rotate icons to keep upright
            gsap.to(".orbit-icon-1", { rotation: -360, duration: 40, repeat: -1, ease: "linear" });
            gsap.to(".orbit-icon-2", { rotation: 360, duration: 60, repeat: -1, ease: "linear" });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-24 relative overflow-hidden bg-[#0a0a0a]">

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                <div className="text-center max-w-2xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                        Powered by <span className="text-gradient-primary">Modern Architecture.</span>
                    </h2>
                    <p className="text-text-warm-gray text-lg">
                        We leverage the most advanced framework ecosystem to ensure your solutions are scalable, secure, and future-proof.
                    </p>
                </div>

                {/* ORBITAL SYSTEM */}
                <div className="relative w-[600px] h-[600px] flex items-center justify-center mt-10">

                    {/* Central Core */}
                    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple blur-[50px] opacity-20 core-pulse" />
                    <div className="relative z-20 w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-2xl">
                        <Cpu className="text-white" size={40} />
                    </div>

                    {/* Ring 1 (Inner) */}
                    <div className="orbit-ring-1 absolute w-[350px] h-[350px] border border-white/5 rounded-full">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-1 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Code2 size={20} className="text-white group-hover:text-accent-cyan" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-1 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Database size={20} className="text-white group-hover:text-accent-purple" />
                        </div>
                    </div>

                    {/* Ring 2 (Outer) */}
                    <div className="orbit-ring-2 absolute w-[550px] h-[550px] border border-dashed border-white/5 rounded-full">
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-2 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Cloud size={24} className="text-white group-hover:text-accent-amber" />
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-2 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Layers size={24} className="text-white group-hover:text-accent-emerald" />
                        </div>
                        <div className="absolute bottom-[15%] right-[15%] w-10 h-10 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-2 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Server size={18} className="text-white" />
                        </div>
                    </div>

                </div>
=======
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
    }, container);

    return () => ctx.revert();
  }, []);
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91

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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs text-secondary">
                  <span>Visibility score</span>
                  <span className="text-primary">+18.2%</span>
                </div>
                <div className="mt-4 h-24 w-full rounded-xl bg-[linear-gradient(120deg,rgba(0,212,255,0.25),rgba(139,92,246,0.1))] relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(90deg,rgba(0,212,255,0.4),rgba(255,0,128,0.2))]" />
                  <div className="absolute inset-0 scan-line bg-[linear-gradient(180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.3),rgba(255,255,255,0.0))]" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-secondary">Platform coverage</div>
                  <div className="mt-3 h-20 rounded-xl bg-[linear-gradient(140deg,rgba(139,92,246,0.35),rgba(0,212,255,0.15))]" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-secondary">Signal heatmap</div>
                  <div className="mt-3 h-20 rounded-xl bg-[linear-gradient(140deg,rgba(255,0,128,0.35),rgba(139,92,246,0.15))]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="visiblo-panel">
          <p className="text-xs font-mono-tech uppercase tracking-[0.4em] text-secondary">Launching Q2 2025</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">Visiblo</h2>
          <p className="mt-4 text-lg text-secondary max-w-xl">
            The first product inside the Perioxia ecosystem. Visiblo monitors brand presence across 150+ AI platforms,
            scoring visibility and surfacing competitive intelligence for AI-first discoverability.
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
