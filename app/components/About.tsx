"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">About Perioxia</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">Why we exist</h2>
          <p className="mt-4 text-sm text-secondary">
            Perioxia is an early-stage product company focused on building the systems that help AI-first teams ship
            faster and see more clearly. We are small, deliberate, and committed to real products over hype.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-6">
          <div className="space-y-4 text-sm text-secondary">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-secondary">Focus</div>
              <p className="mt-2 text-primary">Product-led systems for AI visibility and data-driven workflow clarity.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-secondary">Stage</div>
              <p className="mt-2 text-primary">Early-stage, building for serious customers and long-term scale.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-secondary">Operating style</div>
              <p className="mt-2 text-primary">Lean team, clear scope, and a focus on shipping reliable systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
