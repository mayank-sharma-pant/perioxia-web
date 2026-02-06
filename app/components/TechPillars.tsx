"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Database, Users, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        number: "01",
        title: "NEURAL WORKERS",
        description: "Autonomous AI agent swarms for documentation, anomaly detection, and orchestration",
        bullets: ["Intelligent automation", "Self-learning systems", "Multi-agent coordination"],
        status: "R&D",
        gradient: "from-cyber-blue to-neon-violet",
        icon: Users,
    },
    {
        number: "02",
        title: "NEXUS CRM",
        description: "High-velocity data ingestion with predictive AI-driven intelligence at scale",
        bullets: ["Real-time analytics", "Predictive insights", "Enterprise integrations"],
        status: "R&D",
        gradient: "from-neon-violet to-plasma-pink",
        icon: Database,
    },
    {
        number: "03",
        title: "CORTEX OS",
        description: "Real-time operating systems bridging digital logic with physical hardware",
        bullets: ["Hardware orchestration", "Robotic control", "Edge computing"],
        status: "R&D",
        gradient: "from-plasma-pink to-cyber-blue",
        icon: Cpu,
    },
];

export default function TechPillars() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;
        if (!section || !cards) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".pillars-header", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            });

            // Card animations on scroll
            gsap.from(".pillar-card", {
                y: 80,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".pillars-grid",
                    start: "top 75%",
                },
            });

        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="work" className="py-32 relative">
            <div className="container-precision">

                {/* Header */}
                <div className="pillars-header mb-16">
                    <h2 className="font-display text-4xl md:text-6xl text-text-primary mb-4">
                        WHAT WE BUILD
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-plasma-pink rounded" />
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="pillars-grid grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, i) => (
                        <div
                            key={i}
                            className="pillar-card gradient-border p-8 hover:-translate-y-2 transition-transform duration-500"
                        >
                            {/* Number */}
                            <div className={`font-mono text-sm text-transparent bg-gradient-to-r ${pillar.gradient} bg-clip-text mb-6`}>
                                {pillar.number}
                            </div>

                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} p-3 mb-6`}>
                                <pillar.icon className="w-full h-full text-bg-deep" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-2xl text-text-primary mb-4">
                                {pillar.title}
                            </h3>

                            {/* Description */}
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                {pillar.description}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-2 mb-6">
                                {pillar.bullets.map((bullet, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-text-muted">
                                        <span className="text-cyber-blue">•</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            {/* Status */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-surface rounded-full">
                                <div className="status-dot" style={{ background: "#F59E0B" }} />
                                <span className="font-mono text-xs text-text-muted">STATUS: {pillar.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
