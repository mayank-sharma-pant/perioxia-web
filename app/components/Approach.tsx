"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "Product-first focus",
    desc: "We lead with outcomes and real product value, not speculative experimentation.",
  },
  {
    title: "Engineering clarity",
    desc: "We build systems that are understandable, maintainable, and easy to scale.",
  },
  {
    title: "Measured delivery",
    desc: "We ship in structured phases with clear checkpoints and transparent progress.",
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".method-step");
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 24, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="approach" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">How we think</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">Our approach</h2>
          <p className="mt-4 text-sm text-secondary">
            Perioxia is product-led. We focus on systems that solve real problems with clarity and long-term value.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="method-step rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
