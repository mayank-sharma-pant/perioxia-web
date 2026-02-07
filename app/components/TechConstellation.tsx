"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    name: "Visiblo",
    status: "Live",
    desc: "Visibility analytics for AI-first brands with clear, actionable signals.",
    cta: "View Product",
    href: "https://visiblo.vercel.app/",
    previewTitle: "Signal coverage",
    previewRows: [
      { label: "Tracked surfaces", value: "152" },
      { label: "Coverage score", value: "84%" },
      { label: "Visibility delta", value: "+12%" },
    ],
  },
  {
    name: "Custom CRM",
    status: "In Development",
    desc: "A focused CRM designed for product-led teams and reliable data foundations.",
    cta: "In Development",
    href: "#",
    previewTitle: "Pipeline model",
    previewRows: [
      { label: "Lifecycle stages", value: "6" },
      { label: "Data readiness", value: "In build" },
      { label: "Reporting grid", value: "Scoping" },
    ],
  },
  {
    name: "Systems & Work",
    status: "Ongoing",
    desc: "System design, architecture, and integration work that supports our product roadmap.",
    cta: "See Approach",
    href: "#approach",
    previewTitle: "Delivery flow",
    previewRows: [
      { label: "Architecture maps", value: "Quarterly" },
      { label: "Integration audits", value: "Monthly" },
      { label: "Reliability reviews", value: "Weekly" },
    ],
  },
];

export default function TechConstellation() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panelsEls = gsap.utils.toArray<HTMLElement>(".product-panel");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () =>
            `+=${window.innerWidth * (panelsEls.length - 1) + window.innerHeight * 0.6}`,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        stageRef.current,
        { scale: 0.96 },
        { scale: 1, duration: 0.2, ease: "none" }
      ).to(
        panelsEls,
        {
          xPercent: -100 * (panelsEls.length - 1),
          duration: 0.8,
          ease: "none",
        },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative py-20">
      <div className="container mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Products & work</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
          Scroll to explore what we&apos;ve built and what&apos;s next.
        </h2>
      </div>

      <div className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={stageRef} className="flex h-full w-[300vw] origin-center">
            {panels.map((panel, index) => (
              <div key={panel.name} className="product-panel w-screen h-full flex items-center px-6">
                <div
                  className="float-card w-full grid gap-10 lg:grid-cols-[1fr_0.9fr] items-center rounded-3xl border border-white/10 bg-surface p-10 md:p-14"
                  style={{ animationDelay: `${index * 1.5}s` }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl sm:text-4xl font-semibold text-primary">{panel.name}</h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-secondary">{panel.status}</span>
                    </div>
                    <p className="mt-4 text-sm text-secondary max-w-xl">{panel.desc}</p>
                    <div className="mt-8">
                      <a
                        href={panel.href}
                        className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold transition ${
                          panel.status === "Live"
                            ? "border-[var(--accent)] text-primary hover:bg-[var(--accent)] hover:text-white"
                            : "border-white/10 text-secondary hover:border-[var(--accent)] hover:text-primary"
                        }`}
                      >
                        {panel.cta}
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6">
                    <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-secondary">
                        <span>{panel.previewTitle}</span>
                        <span className="normal-case tracking-normal text-secondary">Current view</span>
                      </div>
                      <div className="mt-5 space-y-3">
                        {panel.previewRows.map((row) => (
                          <div key={row.label} className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                            <div className="flex items-center justify-between text-xs text-secondary">
                              <span>{row.label}</span>
                              <span className="text-primary">{row.value}</span>
                            </div>
                            <div className="mt-3 h-1.5 rounded-full bg-white/5">
                              <div className="h-full w-[70%] rounded-full bg-[var(--accent)]" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-xs text-secondary">
                        Clear status indicators without decorative visuals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
