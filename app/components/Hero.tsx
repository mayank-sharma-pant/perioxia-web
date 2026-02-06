"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  // MOUSE PARALLAX EFFECT
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scanRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(scanRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // INTRO ANIMATION
      // 1. Grid Reveal
      tl.from(".grid-cell", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: { amount: 0.5, from: "random" },
        ease: "power2.out"
      })
        // 2. Text Reveal
        .from(".hero-char", {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
          ease: "expo.out"
        }, "-=0.4")
        // 3. Interface Elements
        .from(".ui-element", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1
        }, "-=0.8");

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-20">

      {/* 1. BACKGROUND: DYNAMIC GRID SUBSTRATE */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-void pointer-events-none" />

      {/* 2. MAIN CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">

        {/* LEFT COLUMN: TYPOGRAPHY ASSAULT */}
        <div className="lg:col-span-12 xl:col-span-8 flex flex-col justify-center">

          {/* Badge */}
          <div className="ui-element mb-6 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-accent-signal" />
            <span className="text-accent-signal font-mono text-xs tracking-[0.2em] font-bold">CRITICAL INFRASTRUCTURE</span>
          </div>

          <h1 ref={textRef} className="text-display-giant text-white uppercase mb-8 relative z-20">
            <span className="hero-char inline-block">R</span>
            <span className="hero-char inline-block">o</span>
            <span className="hero-char inline-block">b</span>
            <span className="hero-char inline-block">o</span>
            <span className="hero-char inline-block">t</span>
            <span className="hero-char inline-block">i</span>
            <span className="hero-char inline-block">c</span>
            <br />
            <span className="text-text-dim">
              <span className="hero-char inline-block">I</span>
              <span className="hero-char inline-block">n</span>
              <span className="hero-char inline-block">t</span>
              <span className="hero-char inline-block">e</span>
              <span className="hero-char inline-block">l</span>
              <span className="hero-char inline-block">l</span>
              <span className="hero-char inline-block">i</span>
              <span className="hero-char inline-block">g</span>
              <span className="hero-char inline-block">e</span>
              <span className="hero-char inline-block">n</span>
              <span className="hero-char inline-block">c</span>
              <span className="hero-char inline-block">e</span>
            </span>
          </h1>

          <p className="ui-element text-xl text-text-secondary max-w-2xl leading-relaxed font-light mb-12 border-l-2 border-white/10 pl-6">
            We build the neural pathways for autonomous enterprises.
            <span className="text-white font-medium"> A fusion of Agentic AI, Custom CRM, and Robotics.</span>
          </p>

          <div className="ui-element flex flex-wrap gap-6">
            <button className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-accent-cyan transition-colors overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Initialize System <ArrowUpRight size={18} />
              </span>
              <div className="absolute inset-0 bg-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            <button className="group px-8 py-4 border border-white/20 text-white font-mono text-sm tracking-widest uppercase hover:border-white transition-colors flex items-center gap-3">
              <Terminal size={16} />
              <span>Read Protocols</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: THE LIDAR SCAN (Abstract Visual) */}
        {/* We place this absolutely on large screens to overlap/create depth */}
        <div ref={scanRef} className="lg:absolute lg:right-[-10%] lg:top-[15%] lg:w-[60%] lg:h-[70%] opacity-50 lg:opacity-100 pointer-events-none z-0">
          {/* The "Eye" or "Core" */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* 1. Radar Sweep */}
            <div className="absolute w-[800px] h-[800px] rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite_reverse]" />

            {/* 2. Abstract Image Glitch */}
            <div className="relative w-[500px] h-[500px] mix-blend-lighten opacity-80 filter brightness-125 contrast-125">
              <img
                src="/abstract_robotics.png"
                alt="Core"
                className="w-full h-full object-contain animate-pulse-signal"
              />
              {/* Overlay Scanlines */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>
          </div>
        </div>

      </div>

      {/* 3. DECORATIVE ELEMENTS */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 ui-element">
        <div className="text-6xl font-black text-white/5">01</div>
        <div className="h-[2px] w-20 bg-accent-signal" />
      </div>

    </section>
  );
}
