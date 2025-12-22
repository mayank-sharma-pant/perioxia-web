"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Folder, MousePointer2 } from "lucide-react";
import React from "react";

const items = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: ["Autonomous Logistics", "Neural CRM 2.0", "Fleet Orchestrater", "Edge Vision"][i],
  desc: "High-performance AI integration for mission-critical industrial automation systems.",
  thumb: `/assets/thumbnails/thumb-${(i % 4) + 1}.png`,
  category: i % 2 === 0 ? "Robotics" : "AI Software",
}));

function PortfolioCard({ it, i }: { it: any, i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative glass-card p-8 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useSpring(useTransform(
            [mouseX, mouseY],
            (input: any) => {
              const [x, y] = input;
              return `radial-gradient(800px circle at ${x}px ${y}px, rgba(251, 191, 36, 0.08), transparent 40%)`;
            }
          )),
        }}
      />

      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-10 border border-white/5 shadow-2xl">
        <motion.img
          src={it.thumb}
          alt={it.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
        />
        <div className="absolute top-8 left-8 hud-border bg-black/60 backdrop-blur-xl border-amber-500/30 text-amber-500">
          {it.category}
        </div>
      </div>

      <div className="relative space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold tracking-tight group-hover:text-amber-400 transition-colors duration-500">{it.title}</h3>
          <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-x-0 -translate-x-6 hover:bg-amber-500/10 hover:border-amber-500/30">
            <ExternalLink size={24} className="text-amber-500" />
          </div>
        </div>
        <p className="text-slate-400 text-lg leading-relaxed font-light">
          {it.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-amber-500/50" />
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">Research Arxhive</h2>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1]">
              Pioneering <span className="text-gradient itali">Benchmarks.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-xl font-light leading-relaxed">
            Case studies in fusing autonomy and high-level reasoning to solve
            limitless industrial challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((it, i) => (
            <PortfolioCard key={it.id} it={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
