"use client";

import Image from "next/image";

export default function ProductSpotlight() {
  return (
    <section id="visiblo" className="py-20 bg-surface">
      <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Product spotlight</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">Visiblo</h2>
          <p className="mt-4 text-sm text-secondary max-w-xl">
            Visiblo is our live AI visibility analytics platform. It shows how brands appear across AI systems and gives
            teams a clear, actionable path to improve presence.
          </p>
          <div className="mt-6 space-y-2 text-sm text-secondary">
            <p>• Track brand presence across AI platforms</p>
            <p>• Understand competitive positioning and sentiment</p>
            <p>• Prioritize fixes that improve AI discoverability</p>
          </div>
          <a
            href="https://visiblo.vercel.app/"
            className="mt-8 inline-flex items-center rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-primary hover:bg-[var(--accent)] hover:text-white transition"
          >
            View Visiblo
          </a>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-4">
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-surface)]">
            <Image
              src="/assets/thumbnails/thumb-1.png"
              alt="Visiblo product interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
