"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);

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

    return () => ctx.revert();
  }, []);

  return (
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
          </div>

          {/* Right: Data Visualization (40%) */}
          <div className="lg:col-span-2 data-viz">
            <DataVisualization />
          </div>

        </div>

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
