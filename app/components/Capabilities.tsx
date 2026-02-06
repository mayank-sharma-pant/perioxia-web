"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Brain, Database, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        icon: Brain,
        title: "AI-POWERED PRODUCTS",
        description: "We build software that uses AI not as a feature, but as the foundation. Products that couldn't exist without modern machine learning.",
        tech: ["GPT-4", "Claude", "Custom Models", "Vector Databases"],
        height: "tall", // Spans 2 rows
    },
    {
        icon: Database,
        title: "INTELLIGENT CRM SYSTEMS",
        description: "CRMs that predict, automate, and actually help your team work faster. Not just contact management — true business intelligence.",
        tech: ["Next.js", "Python", "PostgreSQL", "Redis"],
        height: "standard",
    },
    {
        icon: Code2,
        title: "ENTERPRISE SOLUTIONS",
        description: "Full-stack applications built for scale. Web, mobile, cloud infrastructure. Modern architecture, future-proof engineering.",
        tech: ["React", "TypeScript", "AWS", "Kubernetes"],
        height: "standard",
    },
];

export default function Capabilities() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Headline reveal
            gsap.from(".capabilities-headline", {
                scrollTrigger: {
                    trigger: ".capabilities-headline",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
            });

            // Cards stagger
            gsap.from(".capability-card", {
                scrollTrigger: {
                    trigger: ".capabilities-grid",
                    start: "top 70%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-[--obsidian] border-t border-[--graphite]/30">
            <div className="container-custom">

                {/* Headline */}
                <h2 className="capabilities-headline font-display text-center text-[clamp(3rem,8vw,5rem)] text-[--ivory] mb-20">
                    OUR CAPABILITIES
                </h2>

                {/* Grid */}
                <div className="capabilities-grid grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {capabilities.map((cap, i) => (
                        <div
                            key={i}
                            className={`capability-card group bg-[--graphite] p-12 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(212,255,0,0.1)] ${cap.height === "tall" ? "lg:row-span-2" : ""
                                }`}
                        >
                            {/* Icon */}
                            <div className="mb-8 text-[--lime] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                <cap.icon size={80} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-2xl text-[--ivory] mb-6 leading-tight">
                                {cap.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[--silver] text-lg leading-relaxed mb-8">
                                {cap.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {cap.tech.map((t, j) => (
                                    <span
                                        key={j}
                                        className="font-mono-tech text-xs text-[--lime] border border-[--lime]/30 px-3 py-1 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
