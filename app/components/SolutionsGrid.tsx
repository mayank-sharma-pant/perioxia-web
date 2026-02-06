"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
<<<<<<< HEAD
import { ArrowRight, Bot, Cloud, Code2, Database } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        key: "crm",
        size: "large", // 60%
        icon: Database,
        title: "Nexus CRM Platform",
        desc: "High-velocity customer management powered by predictive AI. Built for scale, designed for speed.",
        features: ["360° Customer Intelligence", "Predictive Analytics", "Workflow Orchestration"],
        cta: "Explore Nexus",
        color: "cyan"
    },
    {
        key: "agents",
        size: "small", // 40%
        icon: Bot,
        title: "Neural Workforce",
        desc: "Autonomous AI agents handling documentation & logic.",
        features: ["Document Intelligence", "Anomaly Detection"],
        cta: "See Agents",
        color: "purple"
    },
    {
        key: "custom",
        size: "small", // 40%
        icon: Code2,
        title: "Bespoke IT",
        desc: "End-to-end custom software solutions tailored to your challenges.",
        features: ["Web & Mobile", "Legacy Modernization"],
        cta: "View Projects",
        color: "amber"
    },
    {
        key: "cloud",
        size: "large", // 60%
        icon: Cloud,
        title: "Scalable Infrastructure",
        desc: "Enterprise-grade cloud solutions with 99.9% uptime and global deployment capabilities.",
        features: ["Multi-cloud Orchestration", "Auto-scaling", "Security & Compliance"],
        cta: "Learn More",
        color: "emerald"
    }
=======

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "01",
    title: "Neural Workers",
    desc: "Autonomous AI agent swarms for documentation, analysis, and orchestration at scale.",
    features: ["Intelligent automation", "Self-learning loops", "Multi-agent coordination"],
    status: "R&D",
    gradient: "from-[#00D4FF]/20 via-[#8B5CF6]/10 to-transparent",
  },
  {
    id: "02",
    title: "Nexus",
    desc: "High-velocity CRM infrastructure with predictive intelligence and real-time ingestion.",
    features: ["Unified customer graph", "Predictive pipeline", "Signal-driven routing"],
    status: "Prototype",
    gradient: "from-[#8B5CF6]/25 via-[#FF0080]/10 to-transparent",
  },
  {
    id: "03",
    title: "Cortex",
    desc: "Real-time robotic OS bridging digital logic with physical hardware control.",
    features: ["Latency-safe runtime", "Edge inference", "Hardware orchestration"],
    status: "Core research",
    gradient: "from-[#FF0080]/20 via-[#00D4FF]/10 to-transparent",
  },
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
];

export default function SolutionsGrid() {
  const container = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger Reveal
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);
=======
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".pillar-card");
      const totalScroll = track.current?.scrollWidth || 0;
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, container);

<<<<<<< HEAD
            <div className="mb-20">
                <span className="text-accent-cyan font-mono-tech text-sm tracking-[0.2em] uppercase block mb-4">Our Capabilities</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white max-w-3xl">
                    Engineered for <span className="text-gradient-primary">Impact.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className={`service-card group relative p-10 rounded-2xl bg-bg-slate border border-[#2A2D34] hover:border-accent-${s.color}/50 hover:shadow-2xl transition-all duration-500
                        ${s.size === 'large' ? 'md:col-span-7' : 'md:col-span-5'}
                    `}
                    >
                        {/* Inner Gradient Glow on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-accent-${s.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className={`w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-accent-${s.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                    <s.icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-text-warm-gray text-lg leading-relaxed mb-8">
                                    {s.desc}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {s.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-[#777] group-hover:text-[#AAA] transition-colors">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-accent-${s.color}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className={`text-accent-${s.color} font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300`}>
                                    {s.cta} <ArrowRight size={18} />
                                </span>
                            </div>
                        </div>
=======
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="pillars" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-mono-tech uppercase tracking-[0.4em] text-secondary">What we build</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">
            Technology pillars powering the Perioxia stack.
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Three divisions, one cohesive infrastructure engine. Each pillar is engineered to scale independently and
            integrate seamlessly across the enterprise.
          </p>
        </div>
      </div>

      <div ref={track} className="mt-16 flex w-[300vw]">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="pillar-card w-screen px-6">
            <div className="gradient-border mx-auto max-w-5xl">
              <div className="relative rounded-3xl glass-card p-10 sm:p-14">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-70`} />
                <div className="relative z-10 grid gap-10 lg:grid-cols-[auto_1fr]">
                  <div>
                    <div className="text-6xl font-display text-white/10">{pillar.id}</div>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent-lime)]" />
                      Status: {pillar.status}
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display text-primary">{pillar.title}</h3>
                    <p className="mt-4 text-lg text-secondary max-w-2xl">{pillar.desc}</p>
                    <ul className="mt-8 grid gap-3 text-sm text-secondary">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[var(--accent-blue)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
