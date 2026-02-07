"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function VisibloSpotlight() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Dashboard slide in
            gsap.from(".visiblo-dashboard", {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
            });

            // Content slide in
            gsap.from(".visiblo-content > *", {
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative bg-bg-elevated/30">
            <div className="container-precision">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyber-blue to-neon-violet rounded-full mb-12">
                    <div className="status-dot" />
                    <span className="text-sm font-bold text-bg-deep">LAUNCHING Q2 2025</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Dashboard */}
                    <div className="visiblo-dashboard relative">
                        <div className="glass-card p-6 relative overflow-hidden">

                            {/* Scan effect */}
                            <div className="scan-line" />

                            {/* Dashboard header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                                <span className="font-display text-lg">Visibility Score</span>
                                <div className="flex items-center gap-2">
                                    <div className="status-dot" />
                                    <span className="text-xs text-text-muted">LIVE</span>
                                </div>
                            </div>

                            {/* Big score */}
                            <div className="mb-8">
                                <div className="font-mono text-6xl gradient-text-cyan">84.2</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-lime-pulse font-mono text-sm">▲ 12.3%</span>
                                    <span className="text-xs text-text-muted">vs last week</span>
                                </div>
                            </div>

                            {/* Platform bars */}
                            <div className="space-y-4">
                                {[
                                    { name: "ChatGPT", value: 92, color: "var(--cyber-blue)" },
                                    { name: "Claude", value: 78, color: "var(--neon-violet)" },
                                    { name: "Perplexity", value: 85, color: "var(--plasma-pink)" },
                                    { name: "Gemini", value: 71, color: "var(--cyber-blue)" },
                                ].map((platform, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-text-secondary">{platform.name}</span>
                                            <span className="font-mono text-text-primary">{platform.value}%</span>
                                        </div>
                                        <div className="h-2 bg-bg-surface rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{ width: `${platform.value}%`, background: platform.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-3 -right-3 px-3 py-1.5 glass-card float text-xs font-mono text-cyber-blue">
                            📊 Real-time
                        </div>
                        <div className="absolute -bottom-3 -left-3 px-3 py-1.5 glass-card float text-xs font-mono text-plasma-pink" style={{ animationDelay: "-1s" }}>
                            🎯 AI-powered
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="visiblo-content">
                        <h2 className="font-display text-5xl md:text-6xl gradient-text mb-6">
                            VISIBLO
                        </h2>

                        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                            AI Visibility Intelligence. Track your brand presence across 150+ AI platforms.
                            Get real-time visibility scores and competitive intelligence.
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-4 gap-4 mb-10">
                            {[
                                { value: "10M+", label: "Queries" },
                                { value: "150+", label: "Platforms" },
                                { value: "94%", label: "Accuracy" },
                                { value: "50ms", label: "Response" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="font-mono text-2xl gradient-text-cyan">{stat.value}</div>
                                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <MagneticButton className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-plasma-pink text-bg-deep font-bold rounded-lg">
                            Join Waitlist →
                        </MagneticButton>
                    </div>

                </div>
            </div>
        </section>
    );
}
