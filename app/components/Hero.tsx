"use client";

import ThemeToggle from "./ThemeToggle";

const metrics = [
  { label: "Live product", value: "Visiblo" },
  { label: "In development", value: "Custom CRM" },
  { label: "Focus", value: "AI systems" },
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
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-surface px-4 py-3">
                  <div className="text-xs text-secondary uppercase tracking-[0.2em]">{metric.label}</div>
                  <div className="mt-2 text-sm font-semibold text-primary">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-elevated p-6 md:p-8">
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="uppercase tracking-[0.2em]">Visiblo preview</span>
              <span className="text-primary">Live</span>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-4">
                <div className="flex items-center justify-between text-xs text-secondary">
                  <span>Visibility coverage</span>
                  <span className="text-primary">150 platforms</span>
                </div>
                <div className="mt-3 h-20 rounded-xl bg-[linear-gradient(90deg,rgba(75,107,255,0.18),rgba(75,107,255,0.02))]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-4">
                  <div className="text-xs text-secondary">Brand snapshot</div>
                  <div className="mt-3 h-16 rounded-xl bg-[rgba(75,107,255,0.08)]" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-4">
                  <div className="text-xs text-secondary">AI channel mix</div>
                  <div className="mt-3 h-16 rounded-xl bg-[rgba(75,107,255,0.08)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
