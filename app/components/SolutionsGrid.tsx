"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Bot, Cloud, Code2, Database } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
<<<<<<< HEAD
    id: "01",
    icon: Bot,
    label: "AI Agents",
    title: "Neural Workers",
    desc: "Autonomous AI agents that handle complex, multi-step workflows with minimal human oversight.",
    features: ["Multi-agent coordination", "Self-learning loops", "Task orchestration"],
    cta: "Explore Agents",
    color: "cyan"
=======
    id: "03",
    title: "Cortex",
    desc: "Real-time robotic OS bridging digital logic with physical hardware control.",
    features: ["Latency-safe runtime", "Edge inference", "Hardware orchestration"],
    status: "Core research",
    gradient: "from-[#FF0080]/20 via-[#00D4FF]/10 to-transparent",
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
  },
  {
    id: "02",
    icon: Database,
    label: "Intelligence",
    title: "Nexus CRM",
    desc: "High-velocity customer intelligence with predictive AI-driven insights and real-time analytics.",
    features: ["Customer graph", "Predictive pipeline", "Signal routing"],
    cta: "See Platform",
    color: "violet"
  },
  {
<<<<<<< HEAD
    id: "03",
    icon: Code2,
    label: "Systems",
    title: "Cortex OS",
    desc: "Real-time operating systems bridging digital logic with physical hardware control.",
    features: ["Hardware orchestration", "Edge inference", "Robotics control"],
    cta: "View Docs",
    color: "pink"
=======
    id: "01",
    title: "Neural Workers",
    desc: "Autonomous AI agent swarms for documentation, analysis, and orchestration at scale.",
    features: ["Intelligent automation", "Self-learning loops", "Multi-agent coordination"],
    status: "R&D",
    gradient: "from-[#00D4FF]/20 via-[#8B5CF6]/10 to-transparent",
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
  },
  {
    id: "04",
    icon: Cloud,
    label: "Infrastructure",
    title: "Perioxia Cloud",
    desc: "Enterprise-grade deployment infrastructure with global edge presence and 99.99% uptime.",
    features: ["Global CDN", "Auto-scaling", "Zero-downtime deploys"],
    cta: "Learn More",
    color: "emerald"
  }
];

export default function SolutionsGrid() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
<<<<<<< HEAD
      gsap.from(".solution-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
=======
      const totalScroll = track.current?.scrollWidth || 0;
      const getMaxX = () => (track.current?.scrollWidth || 0) - window.innerWidth;

      gsap.set(track.current, { x: () => -getMaxX() });
      gsap.to(track.current, {
        x: 0,
        ease: "none",
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
        scrollTrigger: {
          trigger: ".solutions-grid",
          start: "top 75%",
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative py-32 container-precision">

      <div className="mb-20">
        <span className="text-cyber-blue font-mono text-sm tracking-[0.2em] uppercase block mb-4">Our Capabilities</span>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-white max-w-3xl">
          Enterprise solutions built for scale
        </h2>
      </div>

      <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="solution-card glass-card p-8 hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-neon-violet/20 p-3">
                <solution.icon className="w-full h-full text-cyber-blue" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-sm text-text-muted">{solution.id}</span>
            </div>

            {/* Content */}
            <p className="text-xs font-mono text-cyber-blue uppercase tracking-[0.2em] mb-2">{solution.label}</p>
            <h3 className="text-2xl font-display text-text-primary mb-4">{solution.title}</h3>
            <p className="text-text-secondary mb-6">{solution.desc}</p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {solution.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="text-cyber-blue">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <MagneticButton className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg text-sm text-text-primary hover:border-cyber-blue transition-colors">
              {solution.cta}
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        ))}
      </div>

    </section>
  );
}
