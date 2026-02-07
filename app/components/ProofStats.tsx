"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedCounter from "./ui/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { target: 150, suffix: "+", label: "AI Platforms", gradient: "from-cyber-blue to-neon-violet" },
    { target: 10, suffix: "M+", label: "Queries Daily", gradient: "from-neon-violet to-plasma-pink" },
    { target: 99.97, suffix: "%", label: "System Uptime", gradient: "from-plasma-pink to-cyber-blue", decimals: 2 },
    { target: 50, prefix: "<", suffix: "ms", label: "Avg Latency", gradient: "from-cyber-blue to-lime-pulse" },
];

export default function ProofStats() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-card", {
                scale: 0.9,
                opacity: 0,
                y: 40,
                stagger: 0.1,
                duration: 0.7,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".stats-grid",
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative">
            <div className="container-precision">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-4">
                        PROVEN INFRASTRUCTURE
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-plasma-pink to-cyber-blue rounded mx-auto" />
                </div>

                {/* Stats Grid */}
                <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card glass-card p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            <div className={`text-4xl md:text-5xl font-display bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                                <AnimatedCounter
                                    target={stat.target}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix}
                                    decimals={stat.decimals}
                                />
                            </div>
                            <div className="text-sm text-text-muted uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
