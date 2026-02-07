"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const methodology = [
  {
    id: "01",
    title: "Deep research",
    desc: "We don’t build solutions looking for problems. We spend weeks understanding the actual challenge, the market gap, the user pain.",
    outcome: "Market analysis, user research, technical feasibility",
  },
  {
    id: "02",
    title: "Product design",
    desc: "Architecture first. We design the system, the data model, the API structure before writing a single line of code.",
    outcome: "Technical spec, system architecture, UI/UX prototypes",
  },
  {
    id: "03",
    title: "Engineering",
    desc: "Modern stack. Clean code. Automated testing. We build products that scale from day one, not technical debt disasters.",
    outcome: "Production-ready software, full test coverage, documentation",
  },
  {
    id: "04",
    title: "Continuous improvement",
    desc: "Launch is the beginning, not the end. We monitor, measure, iterate, and improve based on real usage data.",
    outcome: "Analytics integration, user feedback loops, feature iteration",
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
        const outcome = step.querySelector(".method-outcome");
        if (outcome) {
          gsap.fromTo(
            outcome,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.1,
              scrollTrigger: {
                trigger: step,
                start: "top 70%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="approach" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Our methodology</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">How we build.</h2>
          <p className="mt-4 text-sm text-secondary">
            Perioxia is product-led. We focus on systems that solve real problems with clarity and long-term value.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {methodology.map((item) => (
            <div key={item.title} className="method-step rounded-2xl border border-white/10 bg-surface p-6">
              <div className="text-sm font-semibold text-secondary/60">{item.id}</div>
              <h3 className="mt-4 text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-secondary">{item.desc}</p>
              <p className="method-outcome mt-6 text-[10px] uppercase tracking-[0.2em] text-secondary">
                Outcome: {item.outcome}
  return (
    <section id="approach" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            How we think
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Our approach
          </h2>
          <p className="mt-4 text-sm text-secondary">
            Product-led systems built with clarity, discipline, and long-term value.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
