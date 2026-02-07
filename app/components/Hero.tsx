"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

const highlights = [
  "Product-led AI systems and data platforms",
  "Clarity on how intelligent products perform",
  "Infrastructure designed for long-term trust",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-14 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(75,107,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(75,107,255,0.06), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative">
        <div className="hero-item flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Perioxia</p>
          <ThemeToggle />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-6">
            <h1 className="hero-item text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
              Perioxia builds trusted AI infrastructure.
            </h1>
            <p className="hero-item text-lg text-secondary max-w-xl">
              We partner with teams to design data platforms, intelligent workflows, and product systems that keep AI
              experiences measurable and reliable.
            </p>
            <ul className="hero-item space-y-2 text-sm text-secondary">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="hero-item flex flex-wrap gap-4">
              <a
                href="#visiblo"
                className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-primary hover:bg-[var(--accent)] hover:text-white transition"
              >
                View Visiblo
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-primary hover:border-white/30 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="hero-item rounded-3xl border border-white/10 bg-elevated p-6 md:p-8">
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="uppercase tracking-[0.2em]">Visiblo preview</span>
              <span className="text-primary">Live product</span>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-secondary">
                <span>Visibility overview</span>
                <span className="normal-case tracking-normal text-secondary">Last 30 days</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">Coverage</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">72%</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/5">
                    <div className="h-full w-[72%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">Sentiment</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">+18%</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/5">
                    <div className="h-full w-[62%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">Top surfaces</p>
                <div className="mt-3 grid gap-2 text-xs text-secondary">
                  <div className="flex items-center justify-between">
                    <span>Assistant results</span>
                    <span className="text-primary">41%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Search summaries</span>
                    <span className="text-primary">33%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Marketplace answers</span>
                    <span className="text-primary">26%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-secondary">
                Snapshot of visibility health, surfaced with calm, measurable signals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
