"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(75,107,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(75,107,255,0.06), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Perioxia</p>
          <ThemeToggle />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
              Building systems for the AI-first internet.
            </h1>
            <p className="text-lg text-secondary max-w-xl">
              We design and engineer AI systems, data platforms, and custom software for teams building the next wave of
              intelligent products.
            </p>
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
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-elevated p-6 md:p-8">
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="uppercase tracking-[0.2em]">System visual</span>
              <span className="text-primary">Robotics + AI</span>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-6">
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/images/robotics_core.png"
                  alt="Robotics system visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="mt-4 text-xs text-secondary">
                Minimal system visualization for AI-driven infrastructure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
