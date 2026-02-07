"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  {
    title: "AI Systems",
    desc: "Applied AI infrastructure for automation, decision support, and intelligent product experiences.",
  },
  {
    title: "Data Platforms",
    desc: "Reliable data pipelines, observability layers, and scalable analytics foundations.",
  },
  {
    title: "Custom Engineering",
    desc: "Purpose-built software for internal operations, workflows, and client-facing tools.",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="what-we-do" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">What we do</p>
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".focus-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
        x: -24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="what-we-do" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            What we do
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Focused capabilities for AI-first products.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="float-card rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6"
              style={{ animationDelay: `${index * 1.4}s` }}
            >
              <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
              <p className="mt-3 text-sm text-secondary">{area.desc}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="focus-card rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_30px_rgba(10,15,25,0.45)] hover:border-[rgba(91,124,250,0.4)]"
            >
              <h3 className="text-lg font-semibold text-primary">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-secondary">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
