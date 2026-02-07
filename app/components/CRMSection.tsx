"use client";

import Image from "next/image";

export default function CRMSection() {
  return (
    <section id="crm" className="py-20 bg-surface">
      <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">In development</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">Custom CRM</h2>
          <p className="mt-4 text-sm text-secondary max-w-xl">
            We are building a CRM designed for product-led teams that need clean data foundations, consistent workflow
            logic, and reliable reporting.
          </p>
          <div className="mt-6 space-y-2 text-sm text-secondary">
            <p>• Unified pipeline and relationship context</p>
            <p>• Workflow automation without heavy overhead</p>
            <p>• Built for internal and client-facing teams</p>
          </div>
          <span className="mt-8 inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-secondary">
            In Development
          </span>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-4">
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-surface)]">
            <Image
              src="/assets/thumbnails/thumb-2.png"
              alt="CRM interface concept"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
