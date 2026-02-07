"use client";

import ThemeToggle from "./ThemeToggle";

const highlights = [
  "Visibility analytics for AI-first brands",
  "Reliable data foundations",
  "Product-led systems built to scale",
];

const systemLines = [
  "M10 25 C 35 10, 55 40, 85 20",
  "M5 55 C 30 45, 60 65, 92 50",
  "M12 80 C 40 70, 70 90, 90 75",
];

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
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-elevated p-6 md:p-8">
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="uppercase tracking-[0.2em]">System view</span>
              <span className="text-primary">AI + Robotics</span>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-6">
              <svg viewBox="0 0 100 100" className="w-full h-44 text-[var(--accent)] opacity-60">
                {systemLines.map((path) => (
                  <path key={path} d={path} stroke="currentColor" strokeWidth="1.2" fill="none" />
                ))}
                <circle cx="20" cy="25" r="2" fill="currentColor" />
                <circle cx="50" cy="35" r="2" fill="currentColor" />
                <circle cx="75" cy="20" r="2" fill="currentColor" />
                <circle cx="35" cy="60" r="2" fill="currentColor" />
                <circle cx="70" cy="70" r="2" fill="currentColor" />
              </svg>
              <div className="mt-4 text-xs text-secondary">
                A minimal system map showing how signals move through AI infrastructure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
