"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

<<<<<<< HEAD
const features = [
  "AI VISIBILITY TRACKING",
  "NEURAL WORKER SWARMS",
  "CRM INTELLIGENCE",
  "ROBOTIC OS",
  "ENTERPRISE SCALE",
  "REAL-TIME ANALYTICS",
  "API INTEGRATION",
  "COMPETITOR INTEL",
  "AI MENTIONS",
  "CITATION MAPPING",
=======
const baseMetrics = [
  { label: "Latency", value: 12, suffix: "ms", variance: 4 },
  { label: "Throughput", value: 2.4, suffix: "M/s", variance: 0.4 },
  { label: "Agents online", value: 150, suffix: "+", variance: 8 },
  { label: "Security", value: 1, suffix: "Active", variance: 0 },
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
];

export default function FeatureTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState(baseMetrics);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
<<<<<<< HEAD
      gsap.to(tickerRef.current, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
=======
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(tickerRef.current, { opacity: 0.9 });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          tickerRef.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            ease: "none",
            duration: 28,
            repeat: -1,
          }
        );
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          if (metric.label === "Security") {
            return metric;
          }
          const delta = (Math.random() * metric.variance * 2 - metric.variance) || 0;
          const nextValue = Math.max(0, metric.value + delta);
          return { ...metric, value: Number(nextValue.toFixed(1)) };
        })
      );
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const repeatedMetrics = [...metrics, ...metrics, ...metrics];

  return (
<<<<<<< HEAD
    <section className="py-4 bg-bg-elevated/50 border-y border-border-subtle overflow-hidden">
      <div ref={tickerRef} className="flex w-max gap-12 px-4">
        {[...features, ...features].map((feature, i) => (
          <span
            key={i}
            className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary whitespace-nowrap flex items-center gap-3"
          >
            <span className="text-cyber-blue">●</span>
            {feature}
          </span>
=======
    <section className="relative overflow-hidden border-y border-white/10 bg-white/5 py-4">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-navy)] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-navy)] to-transparent" />
      <div ref={tickerRef} className="flex w-max items-center gap-10 px-6">
        {repeatedMetrics.map((metric, index) => (
          <div
            key={`${metric.label}-${index}`}
            className="flex items-center gap-4 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary"
          >
            <span className="text-primary">{metric.label}</span>
            <span className="text-primary">
              {metric.label === "Security" ? metric.suffix : `${metric.value}${metric.suffix}`}
            </span>
          </div>
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
        ))}
      </div>
    </section>
  );
}
