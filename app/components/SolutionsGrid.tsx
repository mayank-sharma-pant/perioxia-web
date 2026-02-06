"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "03",
    title: "Cortex",
    desc: "Real-time robotic OS bridging digital logic with physical hardware control.",
    features: ["Latency-safe runtime", "Edge inference", "Hardware orchestration"],
    status: "Core research",
    gradient: "from-[#FF0080]/20 via-[#00D4FF]/10 to-transparent",
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
    id: "01",
    title: "Neural Workers",
    desc: "Autonomous AI agent swarms for documentation, analysis, and orchestration at scale.",
    features: ["Intelligent automation", "Self-learning loops", "Multi-agent coordination"],
    status: "R&D",
    gradient: "from-[#00D4FF]/20 via-[#8B5CF6]/10 to-transparent",
  },
];

export default function SolutionsGrid() {
  const container = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const totalScroll = track.current?.scrollWidth || 0;
      const getMaxX = () => (track.current?.scrollWidth || 0) - window.innerWidth;

      gsap.set(track.current, { x: () => -getMaxX() });
      gsap.to(track.current, {
        x: 0,
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
