"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  "AI-powered internal tools",
  "Data dashboards and reporting",
  "Custom CRMs and workflow systems",
  "Automation and integrations",
];

export default function ProcessAndStats() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".capability-row", {
      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 18,
        scale: 0.96,
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
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">What we can build</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Delivery-minded systems for real operations.
          </h2>
          <p className="mt-4 text-sm text-secondary">
            We take on scoped builds that require reliable engineering, clear communication, and measurable outcomes.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {capabilities.map((item, index) => (
            <div
              key={item}
              className={`capability-row rounded-2xl border border-white/10 bg-surface px-6 py-4 ${
                index % 2 === 0 ? "md:ml-0" : "md:ml-8"
              }`}
            >
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item} className="capability-card rounded-2xl border border-white/10 bg-surface p-6">
              <p className="text-sm font-semibold text-primary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
