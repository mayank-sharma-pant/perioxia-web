"use client";

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
  return (
    <section id="approach" className="py-20">
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
            <div key={item.title} className="rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Search, Pen, Code2, Infinity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const phases = [
    {
        number: "01",
        icon: Search,
        title: "DEEP RESEARCH",
        description: "We don't build solutions looking for problems. We spend weeks understanding the actual challenge, the market gap, the user pain.",
        deliverable: "Market analysis, user research, technical feasibility",
    },
    {
        number: "02",
        icon: Pen,
        title: "PRODUCT DESIGN",
        description: "Architecture first. We design the system, the data model, the API structure before writing a single line of code.",
        deliverable: "Technical spec, system architecture, UI/UX prototypes",
    },
    {
        number: "03",
        icon: Code2,
        title: "ENGINEERING",
        description: "Modern stack. Clean code. Automated testing. We build products that scale from day one, not technical debt disasters.",
        deliverable: "Production-ready software, full test coverage, documentation",
    },
    {
        number: "04",
        icon: Infinity,
        title: "CONTINUOUS IMPROVEMENT",
        description: "Launch is the beginning, not the end. We monitor, measure, iterate, and improve based on real usage data.",
        deliverable: "Analytics integration, user feedback loops, feature iteration",
    },
];

export default function Approach() {
    const containerRef = useRef(null);
    const lineRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline line drawing
            if (lineRef.current) {
                const pathLength = lineRef.current.getTotalLength();
                lineRef.current.style.strokeDasharray = `${pathLength}`;
                lineRef.current.style.strokeDashoffset = `${pathLength}`;

                gsap.to(lineRef.current, {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: ".approach-timeline",
                        start: "top 60%",
                        end: "bottom 20%",
                        scrub: 1,
                    },
                });
            }

            // Phase entrance animations
            phases.forEach((_, i) => {
                gsap.from(`.phase-${i}`, {
                    scrollTrigger: {
                        trigger: `.phase-${i}`,
                        start: "top 75%",
                    },
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                });

                gsap.from(`.phase-${i} .phase-number`, {
                    scrollTrigger: {
                        trigger: `.phase-${i}`,
                        start: "top 75%",
                    },
                    scale: 0,
                    rotation: 360,
                    duration: 1,
                    ease: "back.out(1.7)",
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-[--obsidian] border-t border-[--graphite]/30 relative overflow-hidden">
            <div className="container-custom">

                {/* Headline */}
                <h2 className="font-display text-center text-[clamp(3rem,8vw,5rem)] text-[--ivory] mb-32">
                    HOW WE BUILD
                </h2>

                {/* Timeline */}
                <div className="approach-timeline relative max-w-5xl mx-auto">

                    {/* Vertical Line (SVG for precise drawing) */}
                    <svg className="absolute left-[80px] top-0 bottom-0 w-1 h-full hidden lg:block" style={{ zIndex: 0 }}>
                        <path
                            ref={lineRef}
                            d="M 0 0 L 0 100%"
                            stroke="var(--lime)"
                            strokeWidth="3"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* Phases */}
                    <div className="space-y-40">
                        {phases.map((phase, i) => (
                            <div key={i} className={`phase-${i} flex gap-12 items-start relative`}>

                                {/* Left: Number + Icon */}
                                <div className="flex-shrink-0 w-40 flex flex-col items-center lg:items-start">
                                    <div
                                        className="phase-number font-display text-[8rem] leading-none text-transparent mb-4"
                                        style={{
                                            WebkitTextStroke: "2px var(--lime)",
                                            textStroke: "2px var(--lime)",
                                        }}
                                    >
                                        {phase.number}
                                    </div>
                                    <div className="text-[--lime]">
                                        <phase.icon size={60} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="flex-1 pt-8">
                                    <h3 className="font-display text-4xl text-[--ivory] mb-6">
                                        {phase.title}
                                    </h3>
                                    <p className="text-lg text-[--silver] leading-relaxed mb-6">
                                        {phase.description}
                                    </p>
                                    <div className="inline-block px-4 py-2 border border-[--lime]/30 rounded">
                                        <span className="text-sm font-mono-tech text-[--lime] lowercase">
                                            {phase.deliverable}
                                        </span>
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
