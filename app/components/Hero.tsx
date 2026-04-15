"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SplitTextReveal from "./ui/SplitTextReveal";

function AICoreAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden mix-blend-screen opacity-50">
      <div className="relative w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]">
        {/* Core Glow */}
        <div className="absolute inset-0 m-auto w-[200px] h-[200px] bg-[var(--accent)] rounded-full blur-[100px] animate-pulse opacity-60" />
        {/* Orbital Rings */}
        <div className="absolute inset-0 m-auto w-[400px] h-[400px] rounded-full border border-[var(--accent)]/30 animate-[spin_15s_linear_infinite] border-dashed" />
        <div className="absolute inset-0 m-auto w-[550px] h-[550px] rounded-full border border-cyan-500/20 animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute inset-0 m-auto w-[700px] h-[700px] rounded-full border border-purple-500/20 animate-[spin_35s_linear_infinite] border-dotted" />
      </div>
    </div>
  );
}

const highlights = [
  "Product-led AI systems and data platforms",
  "Developing a suite of intelligent AI products",
  "Infrastructure designed for long-term product stability",
];

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });

      // Magnetic Buttons
      const buttons = document.querySelectorAll(".magnetic-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mousemove", (e: any) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-6 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(75,107,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(75,107,255,0.06), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <AICoreAnimation />
      
      {/* Structural Grid lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-20">
        <div className="w-px h-full bg-[var(--accent)]" />
        <div className="absolute top-1/3 w-full h-px bg-[var(--accent)]" />
      </div>

      <div className="container mx-auto px-6 relative mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Massive Text */}
        <div className="lg:col-span-8 space-y-6 z-10 pt-10">
          <SplitTextReveal className="hero-item text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Intelligent Software Infrastructure.
          </SplitTextReveal>
          
          <p className="hero-item text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Developing the products and foundational systems that lead the AI-first economy. Built for scale, security, and absolute precision.
          </p>
          
          <div className="hero-item flex flex-wrap gap-4 pt-6">
            <a
              href="#products"
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 min-w-[160px] text-sm font-bold text-white hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Explore Ecosystem
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-8 py-3.5 min-w-[160px] text-sm font-semibold text-white hover:border-white transition-all duration-300"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Right Side: Dense Data Grid */}
        <div className="lg:col-span-4 z-10 mt-10 lg:mt-0 flex flex-col justify-end space-y-4">
          <div className="text-xs text-white/50 uppercase tracking-[0.4em] font-medium border-b border-white/10 pb-4 mb-2">
             Active Modules
          </div>
          
          <a href="https://visiblo.in/" target="_blank" rel="noopener noreferrer" className="block p-5 border border-white/10 bg-black/40 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 group">
             <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Visiblo</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-cyan-400 px-2 py-0.5 rounded-sm">Live</span>
             </div>
             <p className="text-xs text-white/60 leading-relaxed">AI visibility analytics — track your brand globally.</p>
          </a>

          <a href="https://crm.perioxia.com" target="_blank" rel="noopener noreferrer" className="block p-5 border border-white/10 bg-black/40 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300 group">
             <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Perioxia CRM</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-purple-400 px-2 py-0.5 rounded-sm">Live</span>
             </div>
             <p className="text-xs text-white/60 leading-relaxed">Modular CRM architecture for product-led teams.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
