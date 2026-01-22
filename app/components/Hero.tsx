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
            Building
            <br />
            <span className="text-text-secondary">Autonomous</span>
            <br />
            Systems.
          </h1>

          <p className="hero-text text-lg md:text-xl text-text-secondary max-w-xl font-light leading-relaxed mb-10">
            We engineer intelligent agents and cognitive architectures.
            Reliable, scalable, and human-aligned.
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

        {/* RIGHT: Abstract Schematic Visual */}
        <div className="lg:col-span-4 relative h-full flex items-center justify-center">
          <div className="hero-visual w-full max-w-[500px] aspect-square relative flex items-center justify-center">
            {/* Main Visual - Robotics Core */}
            <div className="absolute inset-0 z-10">
              <img
                src="/abstract_robotics.png"
                alt="Autonomous Core"
                className="w-full h-full object-contain drop-shadow-2xl opacity-90 mix-blend-lighten"
              />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full z-0 animate-pulse" />

            {/* Rotating Rings (Overlay) */}
            <div className="absolute inset-0 border border-white/10 rounded-full scale-110 border-dashed animate-[spin_60s_linear_infinite]" />
          </div>
        </div>

      </div>
    </section>
  );
}
