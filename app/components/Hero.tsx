"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SplitTextReveal from "./ui/SplitTextReveal";

const highlights = [
  "Product-led AI systems and data platforms",
  "Clear visibility into how intelligent products perform",
  "Infrastructure designed for long-term trust",
];

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });

      // Magnetic Buttons
      const buttons = document.querySelectorAll(".magnetic-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mousemove", (e: any) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-16 pb-2 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(75,107,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(75,107,255,0.06), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative">
        {/* Main content */}
        <div className="mt-12 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* Left: Copy */}
          <div className="space-y-6">
            <SplitTextReveal className="hero-item text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1]">
              Building trusted systems for the AI-first internet.
            </SplitTextReveal>

            <p className="hero-item text-lg text-secondary max-w-xl">
              We design and engineer AI systems, data platforms, and internal
              tools that make intelligent products measurable, reliable, and
              maintainable.
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
                href="#projects"
                className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)] px-8 py-3 min-w-[160px] text-sm font-semibold text-primary hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
              >
                View Work
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#contact"
                className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-subtle)] px-8 py-3 min-w-[160px] text-sm font-semibold text-primary hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                Contact
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Right: Operational Snapshot */}
          <div className="hero-item rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-6 md:p-8">
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="uppercase tracking-[0.2em]">Company snapshot</span>
              <span className="inline-flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Active
              </span>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-secondary/80">
                <span>Operational overview</span>
                <span className="normal-case tracking-normal text-secondary">Last 30 days</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">Delivery cadence</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">92%</p>
                  <div className="mt-3 h-1 rounded-full bg-white/5 shimmer-active">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/60" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">Reliability</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">99.2%</p>
                  <div className="mt-3 h-1 rounded-full bg-white/5 shimmer-active">
                    <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/60" />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">Focus areas</p>
                <div className="mt-3 grid gap-2 text-xs text-secondary">
                  <div className="flex items-center justify-between">
                    <span>AI systems</span>
                    <span className="text-primary">Primary</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data platforms</span>
                    <span className="text-primary">Core</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Custom engineering</span>
                    <span className="text-primary">Selective</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-secondary italic">
                A calm operational snapshot of our current focus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
