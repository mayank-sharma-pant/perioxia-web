"use client";

const capabilities = [
  {
    title: "AI-powered internal tools",
    desc: "Focused systems that reduce manual work and surface decision-ready context.",
  },
  {
    title: "Data dashboards and reporting",
    desc: "Calm, consistent visibility into performance without noisy dashboards.",
  },
  {
    title: "Custom CRMs and workflow systems",
    desc: "Reliable pipelines and relationship context built for product teams.",
  },
  {
    title: "Automation and integrations",
    desc: "Workflow glue that keeps systems aligned and teams moving fast.",
  },
];

export default function ProcessAndStats() {
  return (
    <section id="capabilities" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Delivery-minded systems</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Built for real operations.
          </h2>
          <p className="mt-4 text-sm text-secondary">
            We take on scoped builds that require reliable engineering, clear communication, and measurable outcomes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-surface p-6">
              <h3 className="text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
