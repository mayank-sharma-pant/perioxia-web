"use client";

const focusAreas = [
  {
    title: "AI Systems",
    desc: "Applied AI infrastructure for automation, decision support, and intelligent product experiences.",
  },
  {
    title: "Data Platforms",
    desc: "Reliable data pipelines, observability layers, and scalable analytics foundations.",
  },
  {
    title: "Custom Engineering",
    desc: "Purpose-built software for internal operations, workflows, and client-facing tools.",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="what-we-do" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">What we do</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Focused capabilities for AI-first products.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6">
              <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
              <p className="mt-3 text-sm text-secondary">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
