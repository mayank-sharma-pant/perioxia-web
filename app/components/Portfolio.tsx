"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "Visiblo",
    label: "AI Visibility Analytics",
    desc: "Visibility intelligence for AI-first discoverability across 150+ platforms.",
    status: "First product",
    highlight: true,
  },
  {
    id: "Project Helios",
    label: "Coming 2025",
    desc: "High-velocity customer intelligence network built on the Nexus core.",
    status: "Coming soon",
  },
  {
    id: "Project Vector",
    label: "Coming 2025",
    desc: "Autonomous workflow fabric powered by neural worker swarms.",
    status: "Coming soon",
  },
  {
    id: "Project Lattice",
    label: "Coming 2025",
    desc: "Real-time robotic OS layer for Cortex-driven operations.",
    status: "Coming soon",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current?.scrollWidth || 0) + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${trackRef.current?.scrollWidth || 0}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-xs font-mono-tech uppercase tracking-[0.4em] text-secondary">Coming soon</p>
        <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">Scroll to explore the roadmap.</h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          Visiblo leads the Perioxia lineup. The next wave expands the ecosystem across agents, CRM intelligence, and
          robotic infrastructure.
        </p>
      </div>

      <div className="relative h-[70vh] overflow-hidden">
        <div ref={trackRef} className="flex h-full items-center gap-8 px-6 w-max">
          {projects.map((project) => (
            <div key={project.id} className="project-panel w-[460px] h-full">
              <div
                className={`h-full rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col justify-between ${
                  project.highlight ? "" : "opacity-70"
                }`}
              >
                <div>
                  <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-secondary">{project.label}</div>
                  <h3 className="mt-6 text-3xl sm:text-4xl font-display text-primary">{project.id}</h3>
                  <p className="mt-4 text-lg text-secondary">{project.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
                    <span className={`h-2 w-2 rounded-full ${project.highlight ? "bg-[var(--accent-lime)]" : "bg-white/30"}`} />
                    {project.status}
                  </span>
                  {project.highlight && (
                    <button className="rounded-full border border-white/10 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-5 py-2 text-sm font-semibold text-slate-950">
                      Explore →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
