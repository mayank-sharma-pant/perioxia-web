"use client";

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
  },
  {
    name: "Custom CRM",
    status: "In development",
    desc: "A focused CRM built for high-signal sales teams with smarter workflows and reliable data foundations.",
    cta: "In Development",
    href: "#",
  },
];

export default function TechConstellation() {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="products" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Our products</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Built for real teams, shipping with discipline.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <div key={product.name} className="product-card rounded-2xl border border-white/10 bg-[rgba(15,17,21,0.6)] p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primary">{product.name}</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-secondary">{product.status}</span>
              </div>
              <p className="mt-4 text-sm text-secondary">{product.desc}</p>
              <div className="mt-6">
                <a
                  href={product.href}
                  className={`inline-flex items-center rounded-full border px-5 py-2 text-sm font-semibold transition ${
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
