"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ChevronRight, Layers, Box, Cpu } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const heroText = useRef<HTMLDivElement>(null);
  const visuals = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staggered Text Reveal
      tl.from(".hero-fade-up", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      })
        // Visuals Entrance
        .from(".visual-card", {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }, "-=0.8");

      // Continuous Floating
      gsap.to(".visual-float-1", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".visual-float-2", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT: TEXT CONTENT */}
        <div ref={heroText} className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Badge */}
          <div className="hero-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            <span className="text-sm font-medium text-blue-200">v4.0 Platform Live</span>
            <ChevronRight size={14} className="text-white/40" />
          </div>

          <h1 className="hero-fade-up text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Building Intelligence for <br />
            <span className="text-gradient">Modern Enterprises.</span>
          </h1>

          <p className="hero-fade-up text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-10 font-light">
            We engineer <strong>AI-Agent Swarms</strong>, <strong>Custom CRM Systems</strong>, and <strong>High-Scale IT Solutions</strong> that drive operational velocity.
          </p>

          <div className="hero-fade-up flex flex-wrap gap-4">
            {/* Primary Button */}
            <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            {/* Secondary Button */}
            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="hero-fade-up mt-16 flex items-center gap-12 border-t border-white/5 pt-8 w-full max-w-lg">
            <div>
              <div className="text-3xl font-tech font-bold text-white mb-1">500+</div>
              <div className="text-sm text-text-secondary">Projects Shipped</div>
            </div>
            <div>
              <div className="text-3xl font-tech font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime Guaranteed</div>
            </div>
          </div>

        </div>

        {/* RIGHT: 3D ABSTRACTION (CSS COMPOSITION) */}
        <div ref={visuals} className="lg:col-span-5 relative h-[600px] flex items-center justify-center perspective-[1000px] hidden lg:flex">

          {/* Center Core */}
          <div className="visual-card relative z-20 w-64 h-64 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-2xl flex items-center justify-center visual-float-1">
            <div className="absolute inset-0 bg-accent-blue/10 rounded-3xl blur-xl -z-10" />
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
                <Cpu size={32} />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -right-12 top-12 px-4 py-2 glass-card rounded-lg flex items-center gap-2 animate-float-delayed">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-white">Neural Engine Active</span>
            </div>
          </div>

          {/* Floating Card 1 (Back Left) */}
          <div className="visual-card absolute top-20 left-10 w-48 h-56 rounded-2xl glass-card z-10 visual-float-2 opacity-60 transform -rotate-6">
            <div className="p-4 border-b border-white/5">
              <div className="w-8 h-8 rounded-full bg-white/10" />
            </div>
            <div className="p-4 space-y-2">
              <div className="w-full h-2 bg-white/10 rounded" />
              <div className="w-2/3 h-2 bg-white/10 rounded" />
            </div>
          </div>

          {/* Floating Card 2 (Bottom Right) */}
          <div className="visual-card absolute bottom-32 right-0 w-52 h-40 rounded-2xl bg-slate-800/80 border border-white/10 z-30 visual-float-1 transform rotate-3 shadow-xl backdrop-blur-md">
            <div className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                <Layers size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Full Stack</div>
                <div className="text-xs text-text-secondary">Integration Ready</div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="px-5 mt-2">
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              </div>
            </div>
          </div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 pointer-events-none z-0 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M40 40 L60 60" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="2 2" />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

        </div>

      </div>
    </section>
  );
}
