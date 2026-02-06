"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      });

      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          backgroundPosition: "80% 20%",
          duration: 18,
          ease: "none",
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-16 pb-20">
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(91,124,250,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(91,124,250,0.08), transparent 50%)",
          backgroundSize: "120% 120%",
          backgroundPosition: "20% 20%",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
        <div className="space-y-6">
          <p className="hero-item text-xs uppercase tracking-[0.4em] text-secondary">Perioxia</p>
          <h1 className="hero-item text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
            Building systems for the AI-first internet.
          </h1>
          <p className="hero-item text-lg text-secondary max-w-xl">
            We design and engineer AI systems, data platforms, and custom software for teams building the next wave of
            intelligent products.
          </p>
          <div className="hero-item flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-primary hover:bg-[var(--accent)] hover:text-white transition"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-primary hover:border-white/30 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-item rounded-3xl border border-white/10 bg-surface p-8">
          <h2 className="text-xl font-semibold text-primary">What we deliver</h2>
          <p className="mt-3 text-sm text-secondary">
            Clear scope, disciplined engineering, and production-ready systems that ship on schedule.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-secondary">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Strategic discovery and technical planning.
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Focused delivery for AI products, platforms, and tooling.
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Long-term support with measurable outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
