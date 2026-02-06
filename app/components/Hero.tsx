"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const metrics = [
  { label: "Latency", value: "12ms" },
  { label: "Uptime", value: "99.97%" },
  { label: "Agents", value: "150+" },
  { label: "Status", value: "Armed" },
];

const nodes = [
  { cx: 20, cy: 30, r: 3 },
  { cx: 40, cy: 20, r: 4 },
  { cx: 60, cy: 35, r: 3 },
  { cx: 80, cy: 18, r: 4 },
  { cx: 75, cy: 60, r: 3 },
  { cx: 55, cy: 70, r: 4 },
  { cx: 30, cy: 55, r: 3 },
];

const lines = [
  { x1: 20, y1: 30, x2: 40, y2: 20 },
  { x1: 40, y1: 20, x2: 60, y2: 35 },
  { x1: 60, y1: 35, x2: 80, y2: 18 },
  { x1: 60, y1: 35, x2: 75, y2: 60 },
  { x1: 55, y1: 70, x2: 30, y2: 55 },
  { x1: 30, y1: 55, x2: 20, y2: 30 },
];

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: -10, opacity: 0, duration: 0.6 })
        .from(".hero-word", { y: 32, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.3")
        .from(".hero-subcopy", { y: 24, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
        .from(".hero-visual", { opacity: 0, scale: 0.98, duration: 0.8 }, "-=0.6")
        .from(".hero-metric", { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.5");

      gsap.to(".hero-node", {
        scale: 1.2,
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      gsap.to(".hero-glow", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[95vh] overflow-hidden pt-12">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="hero-glow absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.24),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_60%)] blur-2xl" />
      </div>

      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-secondary">
          <div className="font-display text-lg tracking-[0.3em] text-primary">Perioxia</div>
          <div className="hidden md:flex items-center gap-10 font-mono-tech text-[11px]">
            <a href="#pillars" className="hover:text-primary transition-colors">Work</a>
            <a href="#visiblo" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center mt-20">
          <div>
            <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono-tech text-secondary">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              Systems online · 24/7 signal
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05]">
              {"Building the infrastructure that powers tomorrow's enterprises".split(" ").map((word, index) => (
                <span key={word + index} className="hero-word inline-block mr-2 text-primary">
                  {word}
                </span>
              ))}
              <span className="hero-word inline-block text-gradient">.</span>
            </h1>

            <p className="hero-subcopy mt-6 text-lg text-secondary max-w-xl">
              Perioxia Technology builds critical AI infrastructure across autonomous agents, predictive
              intelligence, and real-time robotic systems. Visiblo is the first product in a multi-division
              ecosystem built for the next era of enterprise.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="hero-cta group rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950">
                <span className="flex items-center gap-2">
                  Explore Systems <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="hero-cta rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-primary hover:border-white/30 hover:bg-white/10 transition">
                See Visiblo <ArrowUpRight size={16} className="inline-block ml-2" />
              </button>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="hero-metric glass-card rounded-2xl px-4 py-5">
                  <div className="text-2xl font-mono-tech text-primary">{metric.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.18),transparent_55%)]" />
            <div className="relative flex h-full flex-col gap-6">
              <div className="flex items-center justify-between text-xs font-mono-tech uppercase tracking-[0.3em] text-secondary">
                <span>Neural field</span>
                <span className="text-[10px] text-primary">Live sync</span>
              </div>
              <div className="relative flex-1">
                <svg viewBox="0 0 100 100" className="w-full h-[320px]">
                  <defs>
                    <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#FF0080" />
                    </linearGradient>
                  </defs>
                  {lines.map((line, index) => (
                    <line
                      key={`line-${index}`}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="url(#nodeGradient)"
                      strokeWidth="0.6"
                      strokeDasharray="2 3"
                      opacity="0.6"
                    />
                  ))}
                  {nodes.map((node, index) => (
                    <circle
                      key={`node-${index}`}
                      className="hero-node"
                      cx={node.cx}
                      cy={node.cy}
                      r={node.r}
                      fill="url(#nodeGradient)"
                    />
                  ))}
                </svg>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-secondary">
                  Autonomous data paths · Adaptive flow · Predictive routing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
