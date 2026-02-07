"use client";

const capabilities = [
  "AI-powered internal tools",
  "Data dashboards and reporting",
  "Custom CRMs and workflow systems",
  "Automation and integrations",
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
        <div className="mt-12 grid gap-4">
          {capabilities.map((item) => (
            <div key={item} className="rounded-full border border-white/10 bg-surface px-6 py-4">
              <p className="text-sm font-semibold text-primary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
