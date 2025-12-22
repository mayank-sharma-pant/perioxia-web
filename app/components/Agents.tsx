"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MessageSquare, BarChart3, Workflow, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const agents = [
  {
    title: "Intelligence Hub",
    desc: "Autonomous parsing of documentation and customer engagement.",
    icon: MessageSquare,
    id: "A_01"
  },
  {
    title: "Logic Orchestrator",
    desc: "Sub-second anomaly detection powered by proprietary kernels.",
    icon: BarChart3,
    id: "A_02"
  },
  {
    title: "Kinetic Bridge",
    desc: "Software-to-hardware triggers for manufacturing fleets.",
    icon: Workflow,
    id: "A_03"
  },
];

export default function Agents() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".agent-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="agents" className="relative py-32 bg-void">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 text-accent-signal font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
              <Activity size={14} className="animate-pulse" />
              Neural_Workers
            </div>
            <h2 className="text-6xl font-black text-white leading-[0.9]">
              CUSTOM <br /> AGENTS.
            </h2>
          </div>
          <p className="text-text-secondary text-right max-w-md mt-8 md:mt-0 font-light">
            Sovereign digital workers designed to automate non-routine tasks across your technical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card group relative p-10 bg-white/[0.02] border border-white/10 hover:bg-accent-signal/5 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-signal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-10 text-white group-hover:text-accent-signal transition-colors">
                <agent.icon size={32} />
              </div>

              <div className="absolute top-6 right-6 font-mono-tech text-xs text-white/30">{agent.id}</div>

              <h3 className="text-2xl font-bold text-white mb-4 uppercase">{agent.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {agent.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono-tech text-accent-signal opacity-0 group-hover:opacity-100 transition-opacity">
                  STATUS: ONLINE
                </span>
                <div className="w-2 h-2 rounded-full bg-accent-signal animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
