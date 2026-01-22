"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Terminal, Shield, Cpu, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Stat Entry
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Feature Row Entry
      gsap.from(".feature-row", {
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 80%",
        },
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="about" className="relative py-24 md:py-32 bg-bg-void border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <img
          src="/abstract_neural.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-void via-transparent to-bg-void" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Header & Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-2 py-1 border border-white/10 bg-white/5 rounded text-xs font-mono text-text-secondary">
              <Terminal size={12} />
              <span>CAPABILITY_MATRIX</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Bridging Digital <br />
              <span className="text-text-secondary">&& Physical.</span>
            </h2>

            <p className="text-text-secondary text-lg font-light leading-relaxed">
              From <strong className="text-white">intelligent CRMs</strong> that predict market shifts to <strong className="text-white">robotic operating systems</strong> that actuate in the real world.
              We engineer the complete cognitive loop for modern industry.
            </p>
          </div>

          {/* Stats Grid - Clean, Bordered */}
          <div ref={statsRef} className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4 about-stats">
            {[
              { val: "CRM", label: "Intelligence" },
              { val: "ROS", label: "Robotic OS" },
              { val: "AI", label: "Agents" },
              { val: "App", label: "Ecosystems" },
            ].map((s, i) => (
              <div key={i} className="stat-item p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col justify-between aspect-square">
                <span className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">{s.val}</span>
                <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Principles - Horizontal Strip */}
        <div className="mt-24 feature-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "Robotic OS Kernel", desc: "Real-time, deterministic operating systems for autonomous machines and industrial robotics." },
            { icon: Activity, title: "Agentic CRM", desc: "Self-evolving customer relationship systems that autonomously manage leads and support." },
            { icon: Shield, title: "Mobile & Web Architectures", desc: "High-performance, scalable applications that serve as the interface for your AI workforce." }
          ].map((item, i) => (
            <div key={i} className="feature-row group flex flex-col items-start gap-4 p-8 border-l border-white/10 hover:border-white/40 transition-colors">
              <item.icon className="text-text-secondary group-hover:text-white transition-colors" size={24} />
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-text-secondary font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
