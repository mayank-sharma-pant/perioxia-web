"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
<<<<<<< HEAD
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);
=======
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
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal
      const words = gsap.utils.toArray<HTMLElement>(".hero-word");
      gsap.from(words, {
        y: 100,
        opacity: 0,
        rotateX: -15,
        duration: 0.8,
        stagger: 0.06,
        ease: "power4.out",
        delay: 0.3,
      });

<<<<<<< HEAD
      // Tagline
      gsap.from(".hero-tagline", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power3.out",
      });

      // CTA
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 1.0,
        ease: "power3.out",
      });

      // Data viz
      gsap.from(".data-viz", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Metrics bar
      gsap.from(".metrics-bar", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "power3.out",
      });

    }, containerRef);
=======
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
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91

    return () => ctx.revert();
  }, []);

  return (
<<<<<<< HEAD
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20">
      <div className="container-precision relative z-10">

        {/* Nav */}
        <nav className="flex items-center justify-between mb-20">
          <div className="font-display text-2xl gradient-text">PERIOXIA</div>
          <div className="flex items-center gap-8 text-sm text-text-secondary">
            <a href="#work" className="hover:text-text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
          </div>
        </nav>

        {/* Main content - 60/40 split */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left: Headline (60%) */}
          <div className="lg:col-span-3">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8" style={{ perspective: "1000px" }}>
              <span className="hero-word block text-text-primary">BUILDING THE</span>
              <span className="hero-word block gradient-text">INFRASTRUCTURE</span>
              <span className="hero-word block text-text-primary">THAT POWERS</span>
              <span className="hero-word block text-text-primary">TOMORROW'S</span>
              <span className="hero-word block gradient-text">ENTERPRISES</span>
            </h1>

            <p className="hero-tagline text-lg md:text-xl text-text-secondary mb-8 max-w-xl">
              AI Agents • Custom CRM • Neural Operating Systems
            </p>

            <div className="hero-cta">
              <MagneticButton className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-neon-violet text-bg-deep font-bold rounded-lg">
                Explore Systems ↓
              </MagneticButton>
            </div>
=======
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
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
          </div>
        </nav>

<<<<<<< HEAD
          {/* Right: Data Visualization (40%) */}
          <div className="lg:col-span-2 data-viz">
            <DataVisualization />
=======
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
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
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
<<<<<<< HEAD

        {/* Metrics Bar */}
        <div className="metrics-bar mt-20 glass-card p-4 flex items-center justify-between flex-wrap gap-4">
          {[
            { value: "12ms", label: "Latency" },
            { value: "99.9%", label: "Uptime" },
            { value: "150+", label: "Agents" },
            { value: "ARMED", label: "Status" },
          ].map((metric, i) => (
            <div key={i} className="flex items-center gap-3 px-4">
              <div className="font-mono text-xl text-cyber-blue">{metric.value}</div>
              <div className="text-xs text-text-muted uppercase">{metric.label}</div>
            </div>
          ))}
        </div>

=======
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
      </div>
    </section>
  );
}

function DataVisualization() {
  return (
    <div className="relative h-80 w-full">
      <svg viewBox="0 0 300 300" className="w-full h-full">

        {/* Nodes */}
        {[
          { cx: 150, cy: 150, r: 12, fill: "url(#gradientCyan)" },
          { cx: 80, cy: 100, r: 8, fill: "url(#gradientViolet)" },
          { cx: 220, cy: 80, r: 8, fill: "url(#gradientPink)" },
          { cx: 60, cy: 200, r: 6, fill: "url(#gradientCyan)" },
          { cx: 240, cy: 180, r: 6, fill: "url(#gradientViolet)" },
          { cx: 120, cy: 250, r: 5, fill: "url(#gradientPink)" },
          { cx: 200, cy: 240, r: 5, fill: "url(#gradientCyan)" },
        ].map((node, i) => (
          <g key={i}>
            <circle {...node} className="float" style={{ animationDelay: `${i * 0.3}s` }}>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
            <circle cx={node.cx} cy={node.cy} r={node.r * 2.5} fill={node.fill} opacity="0.1">
              <animate attributeName="r" values={`${node.r * 2};${node.r * 3};${node.r * 2}`} dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
          </g>
        ))}

        {/* Connections */}
        {[
          { x1: 150, y1: 150, x2: 80, y2: 100 },
          { x1: 150, y1: 150, x2: 220, y2: 80 },
          { x1: 150, y1: 150, x2: 60, y2: 200 },
          { x1: 150, y1: 150, x2: 240, y2: 180 },
          { x1: 80, y1: 100, x2: 60, y2: 200 },
          { x1: 220, y1: 80, x2: 240, y2: 180 },
          { x1: 60, y1: 200, x2: 120, y2: 250 },
          { x1: 240, y1: 180, x2: 200, y2: 240 },
        ].map((line, i) => (
          <line key={i} {...line} stroke="url(#gradientLine)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </line>
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradientCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#0099CC" />
          </linearGradient>
          <linearGradient id="gradientViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="gradientPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0080" />
            <stop offset="100%" stopColor="#CC0066" />
          </linearGradient>
          <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#FF0080" />
          </linearGradient>
        </defs>

      </svg>

      {/* Scan line */}
      <div className="scan-line" />
    </div>
  );
}
