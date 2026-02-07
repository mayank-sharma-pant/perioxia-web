"use client";

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
        <div className="rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-6">
          <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-secondary">
              <span>Brand coverage</span>
              <span className="normal-case tracking-normal text-secondary">Weekly summary</span>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                <div className="flex items-center justify-between text-xs text-secondary">
                  <span>Visibility score</span>
                  <span className="text-primary">84</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/5">
                  <div className="h-full w-[84%] rounded-full bg-[var(--accent)]" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Owned presence", value: "62%", width: "w-[62%]" },
                  { label: "Partner coverage", value: "48%", width: "w-[48%]" },
                  { label: "Share of voice", value: "29%", width: "w-[29%]" },
                  { label: "Top mentions", value: "14", width: "w-[70%]" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-primary">{item.value}</p>
                    <div className="mt-3 h-1.5 rounded-full bg-white/5">
                      <div className={`h-full rounded-full bg-[var(--accent)] ${item.width}`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4 text-xs text-secondary">
                Last indexed updates: 2 hours ago • Coverage rising across trusted sources.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
