"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 150, suffix: "+", label: "Platforms Tracked" },
  { target: 10, suffix: "M+", label: "Queries Analyzed" },
  { target: 99.97, suffix: "%", label: "Uptime Target", decimals: 2 },
  { target: 50, prefix: "<", suffix: "ms", label: "Response Time" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
          onEnter: () => setHasAnimated(true),
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            By the numbers
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-primary">
            The numbers speak.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} animate={hasAnimated} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  target,
  suffix,
  prefix,
  label,
  decimals = 0,
  animate,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(target * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(tick);
  }, [animate, target]);

  const displayValue =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <div className="stat-card rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-8 text-center hover:-translate-y-2 transition-transform cursor-pointer">
      <div className="text-4xl md:text-5xl font-semibold text-[var(--accent)] mb-3">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-secondary">
        {label}
      </div>
    </div>
  );
}
