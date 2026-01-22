"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ShieldCheck, Rocket, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="about" className="relative py-32 bg-void overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div className="space-y-12">
          <div>
            <span className="text-accent-signal font-mono-tech text-xs tracking-[0.3em] block mb-6">
                    // COGNITIVE_MATRIX
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] text-transform-uppercase">
              Pioneering <br />
              <span className="text-stroke-white text-transparent">Logic.</span>
            </h2>
          </div>

          <p className="text-text-secondary text-xl font-light leading-relaxed max-w-xl border-l-2 border-white/10 pl-8">
            Perioxia is an innovation hub where <span className="text-white font-medium">CRM Architecture</span>,
            <span className="text-white font-medium"> AI Agents</span>, and <span className="text-white font-medium">Robotic OS</span> converge.
            Systems are being set up for active development.
          </p>

          <div className="about-stats grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
            {[
              { val: "INITIALIZING", label: "MODE" },
              { val: "BUILDING & EXECUTION", label: "FOCUS" },
              { val: "ACTIVE", label: "STATE" },
              { val: "SETUP", label: "SYSTEM" },
            ].map((s, i) => (
              <div key={i} className="about-stat">
                <div className="text-2xl font-black text-white mb-2">{s.val}</div>
                <div className="text-[10px] font-mono-tech text-accent-signal">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Decorative technical graphic */}
          <div className="absolute inset-0 bg-accent-signal/5 blur-3xl rounded-full opacity-20" />
          <div className="relative z-10 grid grid-cols-1 gap-6">
            {[
              { icon: ShieldCheck, title: "Deterministic Safety", desc: "Rigorous testing stacks for high-stakes edge environments." },
              { icon: Rocket, title: "Operational Velocity", desc: "Concept to deployment with academic-grade precision." },
              { icon: Cpu, title: "Neural Hardware", desc: "Custom accelerators for efficient local inference." }
            ].map((item, i) => (
              <div key={i} className="group flex items-start gap-6 p-8 border border-white/10 hover:border-accent-signal/50 bg-white/[0.02] transition-colors duration-300">
                <item.icon className="text-accent-signal shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-text-secondary font-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
