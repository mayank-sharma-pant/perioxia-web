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
    desc: "AI visibility analytics platform for tracking brand presence across AI systems.",
    cta: "View Product",
    href: "https://visiblo.vercel.app/",
    image: "/assets/thumbnails/thumb-1.png",
    imageAlt: "Visiblo interface preview",
    points: ["Brand presence map", "Share-of-voice signals", "Actionable visibility insights"],
  },
  {
    name: "Custom CRM",
    status: "In Development",
    desc: "A CRM built for product-led teams that need clean data foundations and dependable workflows.",
    cta: "In Development",
    href: "#",
    image: "/assets/thumbnails/thumb-2.png",
    imageAlt: "Custom CRM interface concept",
    points: ["Pipeline clarity", "Reliable reporting", "Internal + client-facing workflows"],
  },
];

export default function TechConstellation() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".product-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * panels.length}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="relative py-20">
      <div className="container mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Products</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
          Visiblo today, CRM next.
        </h2>
      </div>

      <div className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full w-[200vw]">
            {products.map((product) => (
              <div key={product.name} className="product-panel w-screen h-full flex items-center px-6">
                <div className="w-full grid gap-10 lg:grid-cols-[1fr_0.9fr] items-center rounded-3xl border border-white/10 bg-surface p-10 md:p-14">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl sm:text-4xl font-semibold text-primary">{product.name}</h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-secondary">{product.status}</span>
                    </div>
                    <p className="mt-4 text-sm text-secondary max-w-xl">{product.desc}</p>
                    <ul className="mt-6 space-y-2 text-sm text-secondary">
                      {product.points.map((item) => (
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
                  <div className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-4">
                    <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-surface)]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
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
