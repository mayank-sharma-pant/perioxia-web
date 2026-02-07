"use client";

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
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
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

            phases.forEach((_, i) => {
                gsap.from(`.phase-${i}`, {
                    scrollTrigger: {
                        trigger: `.phase-${i}`,
                        start: "top 75%",
                        once: true,
                    },
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="approach" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-20 text-center mx-auto">
                    <p className="text-xs uppercase tracking-[0.4em] text-secondary">Our methodology</p>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">
                        How we build.
                    </h2>
                </div>

                <div className="approach-timeline relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <svg className="absolute left-[30px] lg:left-[50px] top-0 bottom-0 w-1 h-full hidden md:block" style={{ zIndex: 0 }}>
                        <path
                            ref={lineRef}
                            d="M 0 0 L 0 100%"
                            stroke="var(--accent)"
                            strokeWidth="2"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                            opacity="0.2"
                        />
                    </svg>

                    <div className="space-y-24">
                        {phases.map((phase, i) => (
                            <div key={i} className={`phase-${i} flex flex-col md:flex-row gap-8 md:gap-16 items-start relative`}>
                                <div className="flex-shrink-0 flex flex-col items-center md:items-start group">
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                        {phase.number}
                                    </div>
                                    <div className="p-4 rounded-2xl bg-[var(--accent)]/5 text-[var(--accent)] border border-[var(--accent)]/10">
                                        <phase.icon size={32} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl font-semibold text-primary mb-4">
                                        {phase.title}
                                    </h3>
                                    <p className="text-base text-secondary leading-relaxed mb-6 max-w-2xl">
                                        {phase.description}
                                    </p>
                                    <div className="inline-block px-4 py-1.5 bg-surface border border-white/5 rounded-full">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                                            Outcome: {phase.deliverable}
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
