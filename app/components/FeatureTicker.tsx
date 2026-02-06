"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Activity, ShieldCheck, SignalHigh, Zap } from "lucide-react";

const metrics = [
  { icon: Zap, label: "Latency", value: "12ms" },
  { icon: Activity, label: "Throughput", value: "2.4M/s" },
  { icon: ShieldCheck, label: "Uptime", value: "99.97%" },
  { icon: SignalHigh, label: "Security", value: "Active" },
];

const repeatedMetrics = [...metrics, ...metrics, ...metrics];

export default function FeatureTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 26,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/5 py-4">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-navy)] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-navy)] to-transparent" />
      <div ref={tickerRef} className="flex w-max items-center gap-10 px-6">
        {repeatedMetrics.map((metric, index) => (
          <div key={`${metric.label}-${index}`} className="flex items-center gap-4 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
            <metric.icon size={16} className="text-[var(--accent-lime)]" />
            <span className="text-primary">{metric.label}</span>
            <span className="text-primary">{metric.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
