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
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${trackRef.current!.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 bg-surface">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">
          Coming soon
        </p>
        <h2 className="mt-6 text-4xl sm:text-5xl font-semibold text-primary">
          Scroll to explore the roadmap.
        </h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          Visiblo leads the Perioxia lineup. The next wave expands the ecosystem
          across agents, CRM intelligence, and robotic infrastructure.
        </p>
      </div>

      <div className="relative h-[70vh] overflow-hidden">
        <div ref={trackRef} className="flex h-full items-center gap-8 px-6 w-max">
          {projects.map((project) => (
            <div key={project.id} className="w-[460px] h-full">
              <div
                className={`h-full rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-10 flex flex-col justify-between ${project.highlight ? "" : "opacity-70"
                  }`}
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-secondary">
                    {project.label}
                  </div>
                  <h3 className="mt-6 text-3xl sm:text-4xl font-semibold text-primary">
                    {project.id}
                  </h3>
                  <p className="mt-4 text-lg text-secondary">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-secondary">
                    <span
                      className={`h-2 w-2 rounded-full ${project.highlight ? "bg-[var(--accent)]" : "bg-white/30"
                        }`}
                    />
                    {project.status}
                  </span>

                  {project.highlight && (
                    <button className="rounded-full border border-white/10 bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white">
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
