"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="products" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Our products
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Real products, built with restraint.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card rounded-2xl border border-white/10 bg-[rgba(15,17,21,0.6)] p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primary">
                  {product.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                  {product.status}
                </span>
              </div>

              <p className="mt-4 text-sm text-secondary">
                {product.desc}
              </p>

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
          ))}
        </div>
      </div>
    </section>
  );
}
