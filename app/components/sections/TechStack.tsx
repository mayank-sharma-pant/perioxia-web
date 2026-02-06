"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Users, Database, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        icon: Users,
        title: "NEURAL WORKERS",
        description: "Autonomous AI agents for document generation and workflow orchestration at enterprise scale.",
        status: "IN DEVELOPMENT",
        color: "indigo",
    },
    {
        icon: Database,
        title: "NEXUS CRM",
        description: "High-velocity data ingestion with predictive intelligence. Turn customer data into competitive advantage.",
        status: "IN DEVELOPMENT",
        color: "violet",
    },
    {
        icon: Cpu,
        title: "CORTEX OS",
        description: "Real-time kernels for hardware orchestration. The nervous system for distributed AI infrastructure.",
        status: "RESEARCH",
        color: "cyan",
    },
];

export default function TechStack() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Card entrance
            gsap.from(".tech-card", {
                scrollTrigger: {
                    trigger: ".tech-grid",
                    start: "top 70%",
                },
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
            });

            // 3D tilt effect
            document.querySelectorAll(".tech-card").forEach((card) => {
                const element = card as HTMLElement;

                element.addEventListener("mousemove", (e: MouseEvent) => {
                    const rect = element.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;

                    gsap.to(element, {
                        rotateY: x * 5,
                        rotateX: -y * 5,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                });

                element.addEventListener("mouseleave", () => {
                    gsap.to(element, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.3)",
                    });
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-pure-black border-t border-charcoal">
            <div className="container-custom">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-almost-white mb-6">
                        THE PERIOXIA STACK
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        Three-pillar architecture powering next-gen enterprises.
                        <br />
                        Visiblo is the first product in our neural intelligence suite.
                    </p>
                </div>

                {/* Tech Cards Grid */}
                <div className="tech-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pillars.map((pillar, i) => (
                        <div
                            key={i}
                            className="tech-card card-3d group bg-charcoal border border-zinc-600/30 p-8 hover:border-indigo/60 transition-colors duration-300 relative overflow-hidden"
                            style={{ perspective: "1000px" }}
                        >
                            {/* Gradient border glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className={`absolute inset-0 border-2 border-${pillar.color} blur-xl`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`text-${pillar.color} mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                                    <pillar.icon size={48} strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-2xl text-almost-white mb-4">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {pillar.description}
                                </p>

                                {/* Status Badge */}
                                <div className="inline-block">
                                    <div className={`px-3 py-1 border border-${pillar.color}/40 bg-${pillar.color}/10 rounded-full`}>
                                        <span className={`text-xs font-mono-tech text-${pillar.color} uppercase tracking-wider`}>
                                            {pillar.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
