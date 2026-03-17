"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SplitTextReveal from "./ui/SplitTextReveal";

const highlights = [
  "Product-led AI systems and data platforms",
  "Developing a suite of intelligent AI products",
  "Infrastructure designed for long-term product stability",
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
    <section ref={container} className="relative pt-6 pb-16 overflow-hidden">
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
        <div className="mt-2 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* Left: Copy */}
          <div className="space-y-4">
            <SplitTextReveal className="hero-item text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary leading-[1.05] tracking-tight">
              Engineering the next generation of AI products.
            </SplitTextReveal>

            <p className="hero-item text-lg text-secondary max-w-xl leading-relaxed">
              We design and develop high-performance software products, AI platforms, and intelligent systems built for scale and reliability.
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
                className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)] px-8 py-3 min-w-[160px] text-sm font-semibold text-primary hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
              >
                Explore Products
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

          {/* Right: Product Ecosystem Panel */}
          <div className="hero-item rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-5 md:p-6">
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="uppercase tracking-[0.2em]">Our products</span>
              <span className="inline-flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Live
              </span>
            </div>

            {/* Product cards */}
            <div className="mt-4 space-y-2.5">
              <a href="https://visiblo.in/" target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-4 hover:border-[var(--accent)]/40 transition-all group">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-primary group-hover:text-[var(--accent)] transition-colors">Visiblo</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">Live</span>
                </div>
                <p className="mt-1.5 text-xs text-secondary leading-relaxed">AI visibility analytics — track your brand across AI-powered search surfaces.</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "PostgreSQL"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-secondary">{t}</span>
                  ))}
                </div>
              </a>

              <a href="https://crm.perioxia.com" target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-4 hover:border-[var(--accent)]/40 transition-all group">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-primary group-hover:text-[var(--accent)] transition-colors">Custom CRM</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">Live</span>
                </div>
                <p className="mt-1.5 text-xs text-secondary leading-relaxed">Purpose-built CRM for product-led teams with clean data foundations.</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Next.js", "SQLite", "Drizzle ORM"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-secondary">{t}</span>
                  ))}
                </div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-primary">Infrastructure & R&D</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary bg-white/5 px-2 py-0.5 rounded-full">Ongoing</span>
                </div>
                <p className="mt-1.5 text-xs text-secondary leading-relaxed">Foundational systems, architecture, and R&D powering the product ecosystem.</p>
              </div>
            </div>

            <div className="mt-4 text-xs text-secondary italic">
              Building the software tools for the AI-first economy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
