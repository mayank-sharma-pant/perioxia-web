"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Monitor, Cpu, Rocket, GitMerge, Radio, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "CRM ARCHITECTURE",
    desc: "Bespoke customer relationship mainframes designed for high-velocity data ingestion and retrieval.",
  },
  {
    id: "02",
    title: "AI AGENT SWARMS",
    desc: "Autonomous logic kernels capable of executing complex workflows without human intervention.",
  },
  {
    id: "03",
    title: "MOBILE KINETICS",
    desc: "High-performance native applications optimized for low-latency user interaction loops.",
  },
  {
    id: "04",
    title: "SYSTEM INTEGRATION",
    desc: "Unifying disparate legacy stacks into a singular, cohesive operational layer.",
  },
  {
    id: "05",
    title: "IOT INFRASTRUCTURE",
    desc: "Hardware-software bridges enabling real-time telemetry and physical device control.",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const list = document.querySelector(".services-list") as HTMLElement;
      const pin = document.querySelector(".services-pin") as HTMLElement;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${list.offsetHeight - pin.offsetHeight}`,
        pin: pin,
        pinSpacing: false, // 🔥 THIS removes the huge gap
      });

      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-void pt-24 pb-24"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4">
          <div className="services-pin">
            <span className="text-accent-signal font-mono-tech text-xs tracking-widest block mb-4">
              // LOGIC LAYERS
            </span>

            <h2 className="text-6xl font-black text-white leading-[0.9] mb-8">
              CORE <br /> SYSTEMS.
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed max-w-sm">
              We deploy varied stacks of digital infrastructure. From interfaces
              to intelligence, our engineering is absolute.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-8 services-list space-y-4">
          {services.map((s) => (
            <div
              key={s.id}
              className="service-item group relative p-10 border border-white/10 hover:border-accent-signal/50 bg-white/[0.01] transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-signal/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="font-mono-tech text-2xl text-white/20 group-hover:text-accent-signal transition-colors">
                  {s.id}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary max-w-lg">
                    {s.desc}
                  </p>
                </div>

                <ArrowUpRight className="text-accent-signal opacity-0 group-hover:opacity-100 transition-all" size={32} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
