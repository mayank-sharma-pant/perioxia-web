"use client";

const products = [
  {
    name: "Visiblo",
    status: "Live",
    desc: "AI visibility analytics platform for the AI-first internet. Track presence, measure reach, and respond with clarity.",
    cta: "View Product",
    href: "https://visiblo.vercel.app/",
    meta: ["Brand coverage", "AI platform presence", "Competitive visibility"],
  },
  {
    name: "Custom CRM",
    status: "In Development",
    desc: "Internal and client-facing CRM systems with reliable data foundations and deliberate workflows.",
    cta: "In Development",
    href: "#",
    meta: ["Pipeline clarity", "Relationship context", "Reliable data"],
  },
];

export default function TechConstellation() {
  return (
    <section id="products" className="relative bg-surface">
      <div className="container mx-auto px-6 pt-16">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Our products</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
          Real products, built with restraint.
        </h2>
      </div>

      <div className="mt-10 pb-20">
        <div className="flex gap-8 overflow-x-auto px-6 snap-x snap-mandatory scroll-pl-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="min-w-[90vw] lg:min-w-[80vw] snap-start rounded-3xl border border-white/10 bg-[rgba(15,17,21,0.6)] p-10 md:p-14"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-center">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-primary">{product.name}</h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">{product.status}</span>
                  </div>
                  <p className="mt-4 text-sm text-secondary max-w-xl">{product.desc}</p>
                  <ul className="mt-6 space-y-2 text-sm text-secondary">
                    {product.meta.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href={product.href}
                      className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold transition ${
                        product.status === "Live"
                          ? "border-[var(--accent)] text-primary hover:bg-[var(--accent)] hover:text-white"
                          : "border-white/10 text-secondary cursor-not-allowed"
                      }`}
                    >
                      {product.cta}
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary">Product interface</div>
                  <div className="mt-4 grid gap-4">
                    <div className="h-24 rounded-xl border border-white/10 bg-[rgba(75,107,255,0.08)]" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="h-16 rounded-xl border border-white/10 bg-[rgba(75,107,255,0.08)]" />
                      <div className="h-16 rounded-xl border border-white/10 bg-[rgba(75,107,255,0.08)]" />
                    </div>
                    <div className="h-12 rounded-xl border border-white/10 bg-[rgba(75,107,255,0.08)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
