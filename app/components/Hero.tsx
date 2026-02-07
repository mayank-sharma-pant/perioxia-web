"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

<<<<<<< HEAD
gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Live product", value: "Visiblo" },
  { label: "In development", value: "Custom CRM" },
  { label: "Focus", value: "AI systems" },
];

const flowLines = [
  "M10 20 C 40 10, 60 30, 90 20",
  "M5 50 C 35 40, 65 60, 95 50",
  "M10 80 C 45 70, 70 90, 92 75",
];

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
          duration: 22,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      }

      gsap.to(".hero-visual", {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: -8,
        ease: "none",
      });
    }, container);

    return () => ctx.revert();
  }, []);
=======
const highlights = [
  "Product-led AI systems and data platforms",
  "Clear visibility into how intelligent products perform",
  "Infrastructure designed for long-term trust",
];
>>>>>>> 945e42af58a5077e1ed49bd887de9759d2a39263

  return (
<<<<<<< HEAD
    <section ref={container} className="relative pt-16 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(91,124,250,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(91,124,250,0.08), transparent 50%)",
          backgroundSize: "120% 120%",
          backgroundPosition: "20% 20%",
=======
    <section className="relative pt-16 pb-20 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(75,107,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(75,107,255,0.06), transparent 50%)",
>>>>>>> 945e42af58a5077e1ed49bd887de9759d2a39263
        }}
        aria-hidden="true"
      />

<<<<<<< HEAD
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          <p className="hero-item text-xs uppercase tracking-[0.4em] text-secondary">Perioxia</p>
          <div className="hero-item">
            <ThemeToggle />
=======
      <div className="container mx-auto px-6 relative">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Perioxia
          </p>
          <ThemeToggle />
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left: Copy */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
              Building trusted systems for the AI-first internet.
            </h1>

            <p className="text-lg text-secondary max-w-xl">
              We design and engineer AI systems, data platforms, and internal
              tools that make intelligent products measurable, reliable, and
              maintainable.
            </p>

            <ul className="space-y-2 text-sm text-secondary">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
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
          <div className="rounded-3xl border border-white/10 bg-elevated p-6 md:p-8">
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
>>>>>>> 945e42af58a5077e1ed49bd887de9759d2a39263
          </div>

<<<<<<< HEAD
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-6">
            <h1 className="hero-item text-4xl sm:text-5xl lg:text-7xl font-semibold text-primary leading-[1.1]">
              Building systems for the AI-first internet.
            </h1>
            <p className="hero-item text-lg text-secondary max-w-xl leading-relaxed">
              We design and engineer AI systems, data platforms, and custom software for teams building the next wave of
              intelligent products.
            </p>
            <div className="hero-item flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                View Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-primary hover:bg-white/5 transition"
              >
                Contact Us
              </a>
            </div>

            <div className="hero-item grid gap-4 sm:grid-cols-3 pt-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/5 bg-surface/50 backdrop-blur-sm px-4 py-3">
                  <div className="text-[10px] text-secondary uppercase tracking-[0.2em]">{metric.label}</div>
                  <div className="mt-2 text-sm font-semibold text-primary">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-item hero-visual space-y-6">
            <div className="rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent pointer-events-none" />
              <h2 className="text-xl font-semibold text-primary relative z-10">Subtle technical focus</h2>
              <p className="mt-3 text-sm text-secondary relative z-10">
                An abstract representation of systems in motion — quiet, precise, and intentional.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-[rgba(15,17,21,0.4)] p-4 relative z-10">
                <svg viewBox="0 0 100 100" className="w-full h-40 opacity-20">
                  {flowLines.map((path, i) => (
                    <path key={i} d={path} stroke="var(--accent)" strokeWidth="1.2" fill="none" />
                  ))}
                  <circle cx="20" cy="20" r="2" fill="var(--accent)" />
                  <circle cx="60" cy="30" r="2" fill="var(--accent)" />
                  <circle cx="80" cy="50" r="2" fill="var(--accent)" />
                  <circle cx="45" cy="70" r="2" fill="var(--accent)" />
                </svg>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-md p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-primary">What we deliver</h2>
              <div className="mt-4 grid gap-3 text-sm text-secondary">
                {[
                  "Strategic discovery and technical planning.",
                  "Focused delivery for AI products and platforms.",
                  "Long-term support with measurable outcomes."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
=======
>>>>>>> 945e42af58a5077e1ed49bd887de9759d2a39263
        </div>
      </div>
    </section>
  );
}
