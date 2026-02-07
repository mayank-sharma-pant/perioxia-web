"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

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
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative pt-16 pb-20 overflow-hidden"
    >
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
        {/* Top bar */}
        <div className="hero-item flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Perioxia
          </p>
          <ThemeToggle />
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left: Copy */}
          <div className="space-y-6">
            <h1 className="hero-item text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
              Building trusted systems for the AI-first internet.
            </h1>

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
                href="#products"
                className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-primary hover:bg-[var(--accent)] hover:text-white transition"
              >
                View Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-primary hover:border-white/30 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-item rounded-3xl border border-white/10 bg-elevated p-6 md:p-8">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-surface">
              <Image
                src="/images/robotics_core.png"
                alt="Abstract AI system visualization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="mt-4 text-xs text-secondary">
              Minimal system visualization — focused on structure, not decoration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
