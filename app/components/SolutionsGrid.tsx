"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Bot, Cloud, Code2, Database } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: "01",
    icon: Bot,
    label: "AI Agents",
    title: "Neural Workers",
    desc: "Autonomous AI agents that handle complex, multi-step workflows with minimal human oversight.",
    features: ["Multi-agent coordination", "Self-learning loops", "Task orchestration"],
    cta: "Explore Agents",
  },
  {
    id: "02",
    icon: Database,
    label: "Intelligence",
    title: "Nexus CRM",
    desc: "High-velocity customer intelligence with predictive AI-driven insights and real-time analytics.",
    features: ["Customer graph", "Predictive pipeline", "Signal routing"],
    cta: "See Platform",
  },
  {
    id: "03",
    icon: Code2,
    label: "Systems",
    title: "Cortex OS",
    desc: "Real-time operating systems bridging digital logic with physical hardware control.",
    features: ["Hardware orchestration", "Edge inference", "Robotics control"],
    cta: "View Docs",
  },
  {
    id: "04",
    icon: Cloud,
    label: "Infrastructure",
    title: "Perioxia Cloud",
    desc: "Enterprise-grade deployment infrastructure with global edge presence and 99.99% uptime.",
    features: ["Global CDN", "Auto-scaling", "Zero-downtime deploys"],
    cta: "Learn More",
  },
];

export default function SolutionsGrid() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".solution-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-secondary">
            Our capabilities
          </span>
          <h2 className="font-display text-5xl font-bold text-primary md:text-6xl">
            Enterprise solutions built for scale.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="solution-card rounded-3xl border border-white/10 bg-white/5 p-8 transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20">
                  <solution.icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-mono text-sm text-secondary">
                  {solution.id}
                </span>
              </div>

              {/* Content */}
              <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-secondary">
                {solution.label}
              </p>
              <h3 className="mb-4 font-display text-2xl text-primary">
                {solution.title}
              </h3>
              <p className="mb-6 text-secondary">{solution.desc}</p>

              {/* Features */}
              <ul className="mb-8 space-y-2">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-secondary"
                  >
                    <span className="text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <MagneticButton className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-primary transition-colors hover:border-white/30">
                {solution.cta}
                <ArrowRight size={14} />
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
