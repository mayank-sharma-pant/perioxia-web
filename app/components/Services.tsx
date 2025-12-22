"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Monitor, Cpu, Rocket, GitMerge, ArrowUpRight, Radio } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Mission Systems",
    icon: Monitor,
    desc: "Custom-built ERP and CRM architectures engineered for reliability in high-stakes enterprise scaling.",
    color: "amber",
  },
  {
    title: "Edge Platforms",
    icon: Rocket,
    desc: "Next-gen web and mobile infrastructure with built-in edge compute for near-zero latency.",
    color: "orange",
  },
  {
    title: "Autonomous Agents",
    icon: Cpu,
    desc: "Self-optimizing AI agents that integrate into existing pipelines to automate complex reasoning tasks.",
    color: "yellow",
  },
  {
    title: "Perception Stacks",
    icon: GitMerge,
    desc: "Real-time sensor fusion and control software for the next wave of industrial automation.",
    color: "amber",
  },
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="glass-card p-12 relative group perspective-1000"
    >
      <div
        style={{ transform: "translateZ(60px)" }}
        className="mb-10 inline-flex p-6 rounded-3xl bg-white/[0.03] border border-white/5 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-700 shadow-inner"
      >
        <Icon className="w-10 h-10 text-amber-500" />
      </div>

      <h3 style={{ transform: "translateZ(50px)" }} className="text-3xl font-bold mb-6 tracking-tight group-hover:text-amber-400 transition-colors duration-500">{service.title}</h3>
      <p style={{ transform: "translateZ(40px)" }} className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
        {service.desc}
      </p>

      <div
        style={{ transform: "translateZ(30px)" }}
        className="flex items-center text-[10px] font-bold text-amber-500 gap-3 tracking-[0.3em] uppercase transition-all duration-500 group-hover:gap-5"
      >
        <span>View Deployment</span> <ArrowUpRight size={16} />
      </div>

      {/* Decorative inner light */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Radio size={16} className="text-amber-500 animate-pulse" />
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">The Capability Stack</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold leading-[1] tracking-tighter">
              Engineering <br />
              <span className="text-gradient">the impossible.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-xl font-light leading-relaxed">
            Design-led systems that bridge the gap between high-level logic
            and rugged physical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
