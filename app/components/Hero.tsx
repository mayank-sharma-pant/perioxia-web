"use client";

import Image from "next/image";

const flowLines = [
  "M10 20 C 40 10, 60 30, 90 20",
  "M5 50 C 35 40, 65 60, 95 50",
  "M10 80 C 45 70, 70 90, 92 75",
];

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(111,134,255,0.14), transparent 45%), radial-gradient(circle at 80% 0%, rgba(111,134,255,0.08), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Perioxia</p>
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

        <div className="rounded-3xl border border-white/10 bg-elevated p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/abstract_neural.png"
              alt="Abstract network visualization"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="relative">
            <h2 className="text-xl font-semibold text-primary">Subtle technical focus</h2>
            <p className="mt-3 text-sm text-secondary">
              An abstract representation of systems in motion — quiet, precise, and intentional.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[rgba(15,17,21,0.5)] p-4">
              <svg viewBox="0 0 100 100" className="w-full h-40 opacity-10">
                {flowLines.map((path) => (
                  <path key={path} d={path} stroke="var(--accent)" strokeWidth="1.2" fill="none" />
                ))}
                <circle cx="20" cy="20" r="2" fill="var(--accent)" />
                <circle cx="60" cy="30" r="2" fill="var(--accent)" />
                <circle cx="80" cy="50" r="2" fill="var(--accent)" />
                <circle cx="45" cy="70" r="2" fill="var(--accent)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
