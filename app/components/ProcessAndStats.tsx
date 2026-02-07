"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    <section ref={container} id="capabilities" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            What we can build
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Delivery-minded systems for real operations.
          </h2>
          <p className="mt-4 text-sm text-secondary">
            We take on scoped builds that require reliable engineering, clear
            communication, and measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="capability-card rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-6"
            >
              <h3 className="text-base font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
