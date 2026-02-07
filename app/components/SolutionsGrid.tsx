"use client";

const focusAreas = [
  {
    title: "AI Systems",
    desc: "Applied AI infrastructure for automation, decision support, and intelligent product experiences.",
    detail: "We help teams operationalize models with measurable impact.",
  },
  {
    title: "Data Platforms",
    desc: "Reliable data pipelines, observability layers, and scalable analytics foundations.",
    detail: "Built for long-term data quality and easy access.",
  },
  {
    title: "Custom Engineering",
    desc: "Purpose-built software for internal operations, workflows, and client-facing tools.",
    detail: "Designed for clarity, speed, and maintainability.",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="focus" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">What we work on</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Focus areas grounded in real delivery.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_30px_rgba(10,15,25,0.45)] hover:border-[rgba(111,134,255,0.4)]"
            >
              <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
              <p className="mt-3 text-sm text-secondary">{area.desc}</p>
              <p className="mt-4 text-xs text-secondary opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {area.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
