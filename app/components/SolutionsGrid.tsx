"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlowFollower from "./ui/GlowFollower";
import SplitTextReveal from "./ui/SplitTextReveal";
import { Cpu, Database, Boxes } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  {
    title: "AI Systems",
    desc: "Applied AI infrastructure for automation, decision support, and intelligent product experiences.",
    icon: Cpu,
  },
  {
    title: "Data Platforms",
    desc: "Reliable data pipelines, observability layers, and scalable analytics foundations.",
    icon: Database,
  },
  {
    title: "Product Engineering",
    desc: "Purpose-built software for internal operations, workflows, and intelligent tools.",
    icon: Boxes,
  },
];

export default function SolutionsGrid() {
  const [mounted, setMounted] = useState(false);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Favoring Framer Motion for entry reliability
  
  return (
    <section ref={container} id="what-we-do" className="bg-transparent py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="inline-block px-3 py-1 rounded-full border border-[var(--accent)]/30 text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] bg-[var(--accent)]/5 mb-6">
            Product DNA
          </p>
          <SplitTextReveal className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-primary">
            Focused capabilities for AI-first products.
          </SplitTextReveal>
          <p className="mt-4 text-base text-secondary/80 max-w-xl leading-relaxed">
            We build the specialized engines that power predictable AI workflows and high-performance data architecture.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {mounted && focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowFollower
                className="focus-card float-card rounded-3xl glass-panel h-full"
              >
                <div className="p-8">
                  {area.icon && (
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <area.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
                  <p className="mt-4 text-base text-secondary/80 leading-relaxed">{area.desc}</p>
                </div>
              </GlowFollower>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
