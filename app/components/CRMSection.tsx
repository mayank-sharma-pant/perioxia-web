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
        
        {/* Left: Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            In development
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Custom CRM
          </h2>
          <p className="mt-4 text-sm text-secondary max-w-xl">
            We are building a CRM designed for product-led teams that need clean
            data foundations, consistent workflow logic, and reliable reporting.
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
        <div className="rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-6">
          <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-secondary">
              <span>Pipeline model</span>
              <span className="normal-case tracking-normal text-secondary">Concept view</span>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                { label: "Stage architecture", value: "6 steps" },
                { label: "Data lineage", value: "Mapped" },
                { label: "Reporting layer", value: "Designing" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                  <div className="flex items-center justify-between text-xs text-secondary">
                    <span>{item.label}</span>
                    <span className="text-primary">{item.value}</span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/5">
                    <div className="h-full w-[60%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-secondary">
              A structured CRM foundation focused on clean inputs, not visual noise.
            </div>
          </div>

        {/* Right: Visuals */}
        <div className="space-y-6">
          
          {/* Pipeline model */}
          <div className="rounded-3xl border border-white/10 bg-elevated p-6">
            <div className="rounded-2xl border border-white/10 bg-surface p-5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-secondary">
                <span>Pipeline model</span>
                <span className="normal-case tracking-normal">
                  Concept view
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  { label: "Stage architecture", value: "6 steps" },
                  { label: "Data lineage", value: "Mapped" },
                  { label: "Reporting layer", value: "Designing" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-elevated p-4"
                  >
                    <div className="flex items-center justify-between text-xs text-secondary">
                      <span>{item.label}</span>
                      <span className="text-primary">{item.value}</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/5">
                      <div className="h-full w-[60%] rounded-full bg-[var(--accent)]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-secondary">
                A structured CRM foundation focused on clean inputs, not visual noise.
              </div>
            </div>
          </div>

          {/* Image preview */}
          <div className="rounded-3xl border border-white/10 bg-elevated p-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-surface">
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
      </div>
    </section>
  );
}
