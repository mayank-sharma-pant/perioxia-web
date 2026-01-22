"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const comp = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial States
      gsap.set(".hero-text", { y: 40, opacity: 0 });
      gsap.set(".hero-visual", { opacity: 0, scale: 0.98 });
      gsap.set(".grid-line", { scaleX: 0, transformOrigin: "left" });

      // Orchestrated Reveal
      tl.to(".grid-line", {
        scaleX: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out"
      })
        .to(".hero-text", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
        }, "-=1.0")
        .to(".hero-visual", {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out"
        }, "-=1.5");

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative h-screen w-full flex items-center bg-transparent overflow-hidden"
      aria-label="Engineering Hero"
    >
      {/* SCHEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none" ref={gridRef}>
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/10 grid-line" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-white/10 grid-line" />
        <div className="absolute top-0 left-[25%] w-[1px] h-full bg-white/5 grid-line origin-top" />
        <div className="absolute top-0 right-[25%] w-[1px] h-full bg-white/5 grid-line origin-top" />

        {/* Subtle Radial Gradient to focus center */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-bg-void opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: Typography & Command */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">

          {/* Status Badge */}
          <div className="hero-text mb-8 flex items-center gap-3 px-3 py-1.5 border border-white/10 bg-white/5 rounded-sm backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">System Active // v3.0</span>
          </div>

          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary leading-[1.1] mb-8">
            Robotic
            <br />
            <span className="text-text-secondary">Intelligence</span>
            <br />
            & Enterprise AI.
          </h1>

          <p className="hero-text text-lg md:text-xl text-text-secondary max-w-xl font-light leading-relaxed mb-10">
            Pioneering the convergence of <strong>Custom CRM</strong>, <strong>Agentic AI</strong>, and <strong>Robotic Operating Systems</strong>.
            We build the brain and the body of next-gen enterprises.
          </p>

          <div className="hero-text flex flex-wrap gap-4">
            <button className="group relative px-6 py-3 bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors flex items-center gap-2">
              Start Configuration
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group px-6 py-3 border border-white/20 text-text-primary font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
              <Terminal size={16} className="text-text-secondary" />
              View Documentation
            </button>
          </div>
        </div>

        {/* RIGHT: Abstract Schematic Visual - HUD Interface */}
        <div className="lg:col-span-4 relative h-full flex items-center justify-center">
          <div className="hero-visual w-full max-w-[500px] aspect-square relative flex items-center justify-center bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">

            {/* HUD UI Elements */}
            <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
              <div className="w-5 h-5 border border-current text-emerald-400 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-3 h-0.5 bg-current" />
                <div className="h-3 w-0.5 bg-current absolute" />
              </div>
              <span className="text-xs font-mono text-emerald-400/80 tracking-widest font-semibold">TARGET_LOCK: AUTOMATION</span>
            </div>

            <div className="absolute bottom-6 right-6 text-right z-20">
              <div className="text-[10px] font-mono text-text-secondary opacity-60 mb-1">SCHEMATIC_V.04</div>
              <div className="text-xl font-bold text-white tracking-wider">ROBOTIC OS</div>
            </div>

            {/* Main Visual - Robotics Core */}
            <div className="absolute inset-0 z-10 p-12 flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src="/abstract_robotics.png"
                  alt="Autonomous Core"
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                />
              </div>
            </div>

            {/* Rotating Glowing Rings */}
            {/* Ring 1 - Outer Dashed */}
            <div className="absolute inset-8 border border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />

            {/* Ring 2 - Middle Glow */}
            <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] shadow-[0_0_20px_rgba(255,255,255,0.05)]" />

            {/* Ring 3 - Inner Tech */}
            <div className="absolute inset-24 border-2 border-transparent border-t-cyan-500/20 border-b-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent z-30 opacity-20 animate-scan pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  );
}
