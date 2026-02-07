"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Visiblo",
    status: "Live",
    desc: "Visibility analytics for brands navigating the AI-first internet. Track presence, measure reach, and respond with clarity.",
    cta: "View Product",
    href: "https://visiblo.vercel.app/",
    meta: ["Brand coverage", "AI platform presence", "Competitive visibility"],
  },
  {
    name: "Custom CRM",
    status: "In development",
    desc: "A focused CRM built for high-signal sales teams with smarter workflows and reliable data foundations.",
    cta: "In Development",
    href: "#",
    meta: ["Pipeline clarity", "Relationship context", "Reliable data"],
  },
];

export default function TechConstellation() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (trackRef.current && sectionRef.current) {
        gsap.to(trackRef.current, {
          x: () => -(trackRef.current?.scrollWidth || 0) + window.innerWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${trackRef.current?.scrollWidth || 0}`,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="relative bg-surface overflow-hidden">
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Our products</p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">
          Real products, built with restraint.
        </h2>
      </div>

      <div className="relative mt-8">
        <div ref={trackRef} className="flex h-[75vh] w-max items-center px-6 gap-8">
          {products.map((product) => (
            <div key={product.name} className="flex h-full w-[90vw] md:w-[70vw] lg:w-[60vw] items-center">
              <div className="w-full h-[80%] rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-md p-10 md:p-14 flex flex-col justify-between group hover:border-[var(--accent)]/20 transition-colors">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-primary">{product.name}</h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent)]/10">{product.status}</span>
                  </div>
                  <p className="mt-6 text-base text-secondary max-w-xl leading-relaxed">{product.desc}</p>
                  <ul className="mt-8 space-y-3 text-sm text-secondary">
                    {product.meta.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <a
                    href={product.href}
                    className={`inline-flex items-center rounded-full border px-8 py-3 text-sm font-semibold transition ${product.status === "Live"
                        ? "border-[var(--accent)] text-primary hover:bg-[var(--accent)] hover:text-white"
                        : "border-white/10 text-secondary cursor-not-allowed"
                      }`}
                  >
                    {product.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for horizontal scroll feel */}
          <div className="w-[10vw]" />
        </div>
      </div>
    </section>
  );
}
