"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    label: "Enterprise Intelligence",
    title: "Nexus CRM",
    desc: "Next-generation customer relationship management driven by predictive AI agents.",
    status: " deployed",
    color: "from-cyan-500/10 to-blue-600/10"
  },
  {
    id: "02",
    label: "Robotic OS",
    title: "Cortex Core",
    desc: "Real-time operating system kernel for autonomous mobile robots and industrial arms.",
    status: "v2.0 Beta",
    color: "from-violet-500/10 to-purple-600/10"
  },
  {
    id: "03",
    label: "AI Force",
    title: "Swarm Agents",
    desc: "Collaborative multi-agent systems that autonomously execute complex enterprise workflows.",
    status: "Active",
    color: "from-amber-500/10 to-orange-600/10"
  },
  {
    id: "04",
    label: "Hardware",
    title: "Kinetic One",
    desc: "Advanced robotic chassis integration with onboard neural inference units.",
    status: "R&D",
    color: "from-emerald-500/10 to-teal-600/10"
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".project-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          // Add padding to end to prevent overlap with next section
          end: () => "+=" + sliderRef.current!.scrollWidth,
          invalidateOnRefresh: true,
        }
      });

      // Parallax Image Effect
      panels.forEach((panel: any) => {
        gsap.to(panel.querySelectorAll(".parallax-bg"), {
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.getById("sliderTween"),
            start: "left center",
            end: "right center",
            scrub: true
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="bg-bg-void relative">

      <div ref={triggerRef} className="overflow-hidden h-screen flex relative">
        <div ref={sliderRef} className="flex h-full w-[300vw]">

          {projects.map((p, i) => (
            <div key={i} className="project-panel w-screen h-screen flex-none relative flex items-center justify-center overflow-hidden">

              {/* Abstract Visual Background - Restored Visual Richness */}
              <div className="absolute inset-0 z-0 opacity-40">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} mix-blend-screen`} />
                <img
                  src="/abstract_neural.png"
                  alt="Abstract Engineering"
                  className="parallax-bg absolute w-[120%] h-[120%] object-cover -left-[10%] opacity-30 mix-blend-plus-lighter"
                />
                <div className="absolute inset-0 bg-bg-void/60 backdrop-blur-[2px]" />
              </div>

              <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Number & Status */}
                <div className="md:order-2 border-l border-white/20 pl-8 py-4">
                  <span className="block text-9xl font-black text-white/5 leading-[0.8] mb-4">{p.id}</span>
                  <div className="inline-block px-3 py-1 border border-white/10 bg-white/5 rounded-full text-xs font-mono tracking-widest text-text-secondary uppercase">
                    {p.status}
                  </div>
                </div>

                {/* Content */}
                <div className="md:order-1 space-y-6">
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-[0.2em]">{p.label}</span>
                  <h2 className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.1]">
                    {p.title}
                  </h2>
                  <p className="text-lg text-text-secondary font-light max-w-md border-l-2 border-white/10 pl-4">
                    {p.desc}
                  </p>

                  <div className="pt-8">
                    <button className="group flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all rounded-sm backdrop-blur-md">
                      <span className="text-sm font-medium">View Schematics</span>
                      <ArrowUpRight size={16} className="text-white/60 group-hover:text-white transition-colors" />
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