"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTextReveal from "./ui/SplitTextReveal";
import { Zap, Layers, BarChart3, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: "AI Internal Tools",
    desc: "Focused systems that reduce manual work and surface decision-ready context.",
    icon: Zap,
  },
  {
    title: "Intelligence Dashboards",
    desc: "Calm, consistent visibility into performance without noisy metrics.",
    icon: BarChart3,
  },
  {
    title: "Product Workflows",
    desc: "Reliable pipelines and relationship context built for product teams.",
    icon: Layers,
  },
  {
    title: "Logic Integrations",
    desc: "Workflow glue that keeps systems aligned and products moving fast.",
    icon: Activity,
  },
];

export default function ProcessAndStats() {
  const [mounted, setMounted] = useState(false);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="process">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="inline-block px-3 py-1 rounded-full border border-[var(--accent)]/30 text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] bg-[var(--accent)]/5 mb-6">
            Development Lifecycle
          </p>
          <SplitTextReveal className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-primary">
            Delivery-minded systems for real operations.
          </SplitTextReveal>
          <p className="mt-4 text-sm text-secondary">
            Our development lifecycle is optimized for software reliability, performance at scale, and long-term product longevity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="capability-card rounded-3xl border border-white/10 bg-[var(--bg-surface)] p-8 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_50px_rgba(75,107,255,0.08)] transition-all duration-300"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-secondary/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
