"use client";

import Image from "next/image";
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
    image: "/assets/thumbnails/thumb-3.png",
    imageAlt: "Visiblo interface preview",
  },
  {
    name: "Custom CRM",
    status: "In Development",
    desc: "A focused CRM designed for product-led teams and reliable data foundations.",
    cta: "In Development",
    href: "#",
    image: "/assets/thumbnails/thumb-4.png",
    imageAlt: "Custom CRM interface concept",
  },
  {
    name: "Systems & Work",
    status: "Ongoing",
    desc: "System design, architecture, and integration work that supports our product roadmap.",
    cta: "See Approach",
    href: "#approach",
    image: "/assets/thumbnails/thumb-2.png",
    imageAlt: "System architecture overview",
  },
];

export default function TechConstellation() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panelsEls = gsap.utils.toArray<HTMLElement>(".product-panel");
      gsap.to(panelsEls, {
        xPercent: -100 * (panelsEls.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * panelsEls.length}`,
          invalidateOnRefresh: true,
        },
      });
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

      <div className="relative h-[260vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full w-[300vw]">
            {panels.map((panel) => (
              <div key={panel.name} className="product-panel w-screen h-full flex items-center px-6">
                <div className="w-full grid gap-10 lg:grid-cols-[1fr_0.9fr] items-center rounded-3xl border border-white/10 bg-surface p-10 md:p-14">
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
                  <div className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                    <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-surface)]">
                      <Image
                        src={panel.image}
                        alt={panel.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
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
