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
  },
  {
    name: "Custom CRM",
    status: "In Development",
    desc: "Internal and client-facing CRM systems with reliable data foundations and deliberate workflows.",
    cta: "In Development",
    href: "#",
  },
];

export default function TechConstellation() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current?.scrollWidth || 0) + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${trackRef.current?.scrollWidth || 0}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="relative bg-surface">
      <div className="container mx-auto px-6 pt-16">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Our products</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
          Real products, built with restraint.
        </h2>
      </div>

      <div className="relative h-[240vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div ref={trackRef} className="flex h-full w-max">
            {products.map((product) => (
              <div key={product.name} className="flex h-full w-screen items-center px-6">
                <div className="w-full rounded-3xl border border-white/10 bg-[rgba(15,17,21,0.6)] p-10 md:p-14">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-primary">{product.name}</h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">{product.status}</span>
                  </div>
                  <p className="mt-4 text-sm text-secondary max-w-2xl">{product.desc}</p>
                  {product.status === "Live" && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-[rgba(15,17,21,0.5)] p-6 text-sm text-secondary">
                      Product preview available on request. For now, explore the live platform.
                    </div>
                  )}
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
              </div>
            ))}
          </div>

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
