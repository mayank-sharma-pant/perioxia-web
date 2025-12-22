"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, ShieldCheck, ChevronRight } from "lucide-react";

const stats = [
  { label: "Systems Deployed", value: "24+", color: "text-amber-400" },
  { label: "Industry Partners", value: "15", color: "text-orange-400" },
  { label: "AI Patents Pending", value: "12", color: "text-yellow-500" },
  { label: "Global Reach", value: "8", color: "text-amber-600" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-amber-500/50" />
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">The Core Mission</h2>
            </div>

            <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tighter">
              Crafting logic that <br />
              <span className="text-gradient italic">moves world.</span>
            </h3>

            <p className="text-slate-400 text-xl leading-relaxed font-light mb-16 max-w-xl">
              Perioxia is not just another AI company. We are a specialized engineering
              forge building the next generation of hardware-aware intelligence.
              Deterministic, reliable, and fundamentally human-aligned.
            </p>

            <div className="grid grid-cols-2 gap-16 border-t border-white/5 pt-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className={`text-5xl md:text-6xl font-bold ${stat.color} tracking-tighter tabular-nums`}>{stat.value}</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-panel p-12 md:p-16 rounded-[4rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Decorative inner corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] pointer-events-none" />

              <div className="relative space-y-16">
                {[
                  { icon: ShieldCheck, title: "Deterministic Safety", color: "text-amber-400", desc: "Rigorous testing and proprietary safety stacks for high-stakes environments." },
                  { icon: Rocket, title: "Operational Velocity", color: "text-orange-400", desc: "Guiding systems from concept to edge deployment with academic-grade precision." },
                  { icon: Cpu, title: "Neural Hardware", color: "text-yellow-500", desc: "Custom accelerators and low-latency kernels for efficient local inference." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-10 group/item">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-amber-500/30 group-hover/item:bg-amber-500/5 transition-all duration-500">
                      <item.icon className={item.color} size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover/item:text-amber-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
