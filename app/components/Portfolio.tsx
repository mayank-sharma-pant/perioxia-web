"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    label: "Enterprise Intelligence",
    title: "Nexus CRM",
    desc: "Next-generation customer relationship management driven by predictive AI agents.",
    status: "Deployed",
    color: "from-cyber-blue/10 to-blue-600/10"
  },
  {
    id: "02",
    label: "Robotic OS",
    title: "Cortex Core",
    desc: "Real-time operating system kernel for autonomous mobile robots and industrial arms.",
    status: "v2.0 Beta",
    color: "from-neon-violet/10 to-purple-600/10"
  },
  {
    id: "03",
    label: "AI Force",
    title: "Swarm Agents",
    desc: "Collaborative multi-agent systems that autonomously execute complex enterprise workflows.",
    status: "Active",
    color: "from-plasma-pink/10 to-orange-600/10"
  },
  {
    id: "04",
    label: "Hardware",
    title: "Kinetic One",
    desc: "Advanced robotic chassis integration with onboard neural inference units.",
    status: "R&D",
    color: "from-lime-pulse/10 to-teal-600/10"
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
<<<<<<< HEAD
      const panels = gsap.utils.toArray(".project-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
=======
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current?.scrollWidth || 0) + window.innerWidth,
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderRef.current!.scrollWidth,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="bg-bg-charcoal relative">

<<<<<<< HEAD
      <div ref={triggerRef} className="overflow-hidden h-screen flex relative">
        <div ref={sliderRef} className="flex h-full w-[300vw]">

          {projects.map((p, i) => (
            <div key={i} className="project-panel w-screen h-screen flex-none relative flex items-center justify-center overflow-hidden">

              {/* Background Gradient */}
              <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20`} />
              </div>

              <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Number & Status */}
                <div className="md:order-2 border-l border-white/10 pl-8 py-4">
                  <span className="block text-9xl font-display font-bold text-white/5 leading-[0.8] mb-4">{p.id}</span>
                  <div className="inline-block px-3 py-1 border border-white/10 bg-white/5 rounded-full text-xs font-mono tracking-widest text-text-muted uppercase">
                    {p.status}
                  </div>
                </div>

                {/* Content */}
                <div className="md:order-1 space-y-6">
                  <span className="text-xs font-mono text-cyber-blue uppercase tracking-[0.2em]">{p.label}</span>
                  <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1]">
                    {p.title}
                  </h2>
                  <p className="text-lg text-text-secondary font-light max-w-md border-l-2 border-white/10 pl-4">
                    {p.desc}
                  </p>

                  <div className="pt-8">
                    <button className="group flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all rounded-sm backdrop-blur-md">
                      <span className="text-sm font-medium text-white">View Schematics</span>
                      <ArrowUpRight size={16} className="text-white/60 group-hover:text-white transition-colors" />
=======
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
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
