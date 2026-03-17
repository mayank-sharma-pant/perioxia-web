"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTextReveal from "./ui/SplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: "AI-powered internal tools",
    desc: "Focused systems that reduce manual work and surface decision-ready context.",
  },
  {
    title: "Data dashboards and reporting",
    desc: "Calm, consistent visibility into performance without noisy dashboards.",
  },
  {
    title: "Custom CRMs and workflow systems",
    desc: "Reliable pipelines and relationship context built for product teams.",
  },
  {
    title: "Automation and integrations",
    desc: "Workflow glue that keeps systems aligned and teams moving fast.",
  },
];

export default function ProcessAndStats() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
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
            What we can build
          </p>
          <SplitTextReveal className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-primary">
            Delivery-minded systems for real operations.
          </SplitTextReveal>
          <p className="mt-4 text-sm text-secondary">
            We take on scoped builds that require reliable engineering, clear
            communication, and measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="capability-card rounded-3xl border border-white/10 bg-[var(--bg-surface)] p-8 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_50px_rgba(75,107,255,0.08)] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-4 text-base text-secondary/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
