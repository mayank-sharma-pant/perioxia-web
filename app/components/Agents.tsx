"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Workflow, Sparkles, Server, Zap, Cpu } from "lucide-react";

const agents = [
  {
    title: "Intelligence Hub",
    desc: "Multi-agent systems that autonomously parse documentation and manage customer engagement with surgical precision.",
    icon: MessageSquare,
    color: "amber",
  },
  {
    title: "Logic Orchestrators",
    desc: "Sub-second anomaly detection and automated decision frameworks powered by proprietary LLM kernels.",
    icon: BarChart3,
    color: "orange",
  },
  {
    title: "Kinetic Automators",
    desc: "Software-to-hardware bridges that trigger physical actions across distributed manufacturing fleets.",
    icon: Workflow,
    color: "yellow",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="relative py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-amber-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-8"
            >
              <Cpu size={14} className="animate-pulse" />
              Cognitive Architecture
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
              The Sovereign <br />
              <span className="text-gradient">Digital Workforce.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-xl font-light leading-relaxed">
            Specialized agents that act as a force multiplier for your technical
            infrastructure—automating the non-routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-12 group relative border-b-2 border-b-transparent hover:border-b-amber-500/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-10 group-hover:bg-amber-500/10 transition-all duration-700 relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <agent.icon className="text-amber-500 relative z-10" size={32} />
              </div>

              <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-amber-400 transition-colors duration-300">{agent.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-10">
                {agent.desc}
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Autonomous: Ready</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
