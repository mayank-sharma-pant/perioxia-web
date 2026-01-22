"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    client: "CORE_PLATFORM",
    title: "Perioxia Prime",
    desc: "The central nervous system of your enterprise. Orchestrating intelligence across all operational layers.",
    year: "2025",
    status: "ONLINE",
    gradient: "from-cyan-500/20 via-blue-900/10 to-transparent",
    accent: "text-cyan-400",
    border: "border-cyan-500/20"
  },
  {
    id: "02",
    client: "NEURAL_LAYER",
    title: "Neural Fabric",
    desc: "Distributed AI architecture handling millions of inference/sec for real-time decision making.",
    year: "EST. 2025",
    status: "SYSTEM_CHECK",
    gradient: "from-violet-500/20 via-purple-900/10 to-transparent",
    accent: "text-violet-400",
    border: "border-violet-500/20"
  },
  {
    id: "03",
    client: "KINETIC_GRID",
    title: "Kinetic Core",
    desc: "Hardware abstraction layer bridging digital commands to physical robotic actuation.",
    year: "EST. 2026",
    status: "BUILDING",
    gradient: "from-amber-500/20 via-orange-900/10 to-transparent",
    accent: "text-amber-400",
    border: "border-amber-500/20"
  },
  {
    id: "04",
    client: "INFRASTRUCTURE",
    title: "Sovereign Cloud",
    desc: "Air-gapped computation clusters ensuring absolute data dominance and security.",
    year: "PENDING",
    status: "QUEUED",
    gradient: "from-emerald-500/20 via-teal-900/10 to-transparent",
    accent: "text-emerald-400",
    border: "border-emerald-500/20"
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Robust calculation for horizontal scroll
      const scrollWidth = slideContainerRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;

      // The Core Horizontal Scroll Animation
      gsap.to(slideContainerRef.current, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // Calculate exact end point based on width to ensuring dragging/swiping feels natural
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      // Playful: Float animations for background orbs
      gsap.to(".floating-orb", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black">
      <section
        ref={sectionRef}
        id="portfolio"
        className="relative bg-black overflow-hidden h-screen"
      >
        {/* Background label */}
        <div className="absolute top-10 left-10 text-white/20 font-mono text-xs tracking-widest z-10 mix-blend-difference">
          // SYSTEM_ARCHITECTURE_V1.0
        </div>

        {/* Width MUST be total items * 100vw */}
        <div ref={slideContainerRef} className="flex h-screen w-[400vw]">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-slide w-screen h-screen flex-none flex items-center justify-center relative px-4 md:px-20 border-r border-white/5 overflow-hidden group perspective-1000"
            >
              {/* Dynamic Gradient Background & Playful Elements */}
              <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-radial ${p.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-1000 transform scale-150`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Floating Orbs for Playfulness */}
                <div className={`floating-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r ${p.gradient} blur-[120px] opacity-20`} />
                <div className={`floating-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${p.gradient} blur-[100px] opacity-20 delay-1000`} />
              </div>

              <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end transform transition-transform duration-700 hover:scale-[1.01]">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`px-4 py-1.5 rounded-full border bg-black/50 backdrop-blur-md ${p.border} ${p.accent}`}>
                      <span className="font-mono text-xs tracking-[0.2em] font-bold">
                        {p.status}
                      </span>
                    </div>
                    <span className={`font-mono text-xs tracking-widest opacity-70 ${p.accent}`}>
                      {p.client} // {p.year}
                    </span>
                  </div>

                  <h2 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-8 uppercase tracking-tighter drop-shadow-2xl">
                    {p.title}
                  </h2>
                </div>

                <div className="lg:col-span-4 lg:border-l border-white/10 lg:pl-10 pb-4">
                  <div className="text-6xl text-white/5 font-black mb-6 select-none" >
                    /{p.id}
                  </div>
                  <p className="text-gray-300 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-sm">
                    {p.desc}
                  </p>

                  <button
                    className={`group/btn relative overflow-hidden inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md rounded-lg`}
                  >
                    <span className={`text-xs font-mono-tech tracking-[0.2em] uppercase transition-colors ${p.accent}`}>
                      {p.status === "ONLINE" ? "Initialize" : "System_Locked"} <ArrowUpRight className="inline ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" size={14} />
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full bg-current animate-pulse absolute top-4 right-4 ${p.accent}`} />
                    <div className={`absolute bottom-0 left-0 h-[2px] w-full bg-current transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left ${p.accent}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}