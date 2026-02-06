"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
<<<<<<< HEAD

const features = [
    "AI VISIBILITY TRACKING",
    "GENERATIVE SEARCH",
    "BRAND MONITORING",
    "COMPETITOR INTEL",
    "AI MENTIONS",
    "CITATION MAPPING",
    // Duplicates
    "AI VISIBILITY TRACKING",
    "GENERATIVE SEARCH",
    "BRAND MONITORING",
    "COMPETITOR INTEL",
    "AI MENTIONS",
    "CITATION MAPPING",
=======
import { Activity, ShieldCheck, SignalHigh, Zap } from "lucide-react";

const metrics = [
  { icon: Zap, label: "Latency", value: "12ms" },
  { icon: Activity, label: "Throughput", value: "2.4M/s" },
  { icon: ShieldCheck, label: "Uptime", value: "99.97%" },
  { icon: SignalHigh, label: "Security", value: "Active" },
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
];

const repeatedMetrics = [...metrics, ...metrics, ...metrics];

export default function FeatureTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(tickerRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 30, // Slow loop
                repeat: -1
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-bg-void border-y border-white/5 py-8 overflow-hidden relative z-20">

            {/* Gradients to fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-void to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-void to-transparent z-10" />

            <div ref={tickerRef} className="flex w-max gap-16 items-center">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <span className="text-4xl md:text-5xl font-display font-bold text-transparent text-outline-chartreuse whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-300">
                            {f}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-accent-chartreuse opacity-40" />
                    </div>
                ))}
            </div>
        </div>
    );
=======
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
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
}
