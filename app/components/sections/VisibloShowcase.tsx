"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Search, BarChart3, TrendingUp, Zap } from "lucide-react";
import ScanLine from "../animations/ScanLine";
import MagneticButton from "../ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        icon: Search,
        title: "Brand Mention Tracking",
        description: "Monitor your presence in AI-generated responses across 150+ platforms in real-time.",
    },
    {
        icon: BarChart3,
        title: "Visibility Score Analytics",
        description: "Quantify your AI discoverability with proprietary metrics that matter to revenue.",
    },
    {
        icon: TrendingUp,
        title: "Competitive Intelligence",
        description: "Track competitor AI presence and identify gaps before your market does.",
    },
    {
        icon: Zap,
        title: "Optimization Insights",
        description: "Actionable recommendations to dominate AI search results systematically.",
    },
];

const metrics = [
    { value: "10M+", label: "Queries Analyzed" },
    { value: "150+", label: "AI Platforms" },
    { value: "94%", label: "Accuracy Rate" },
    { value: "<500ms", label: "Response Time" },
];

export default function VisibloShowcase() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Capabilities stagger
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

            // Metrics counter
            gsap.from(".metric-card", {
                scrollTrigger: {
                    trigger: ".metrics-grid",
                    start: "top 75%",
                },
                scale: 0.8,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-near-black border-t border-charcoal relative overflow-hidden">

            {/* Scan Line */}
            <ScanLine duration={4} />

            <div className="container-custom">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-2 border border-violet/30 text-xs font-mono-tech text-violet uppercase tracking-wider mb-6">
                        Product Spotlight
                    </div>

                    <h2 className="font-display text-[clamp(3rem,8vw,7rem)] text-gradient-primary mb-6">
                        VISIBLO
                    </h2>

                    <p className="text-2xl text-zinc-400 font-semibold mb-4">
                        AI Visibility Intelligence
                    </p>

                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                        Master AI search before your competitors do. Visiblo quantifies your exact visibility
                        across every AI platform and gives you the intelligence to dominate.
                    </p>
                </div>

                {/* Dashboard Mockup */}
                <div className="relative max-w-5xl mx-auto mb-20">
                    <div className="relative bg-charcoal border border-indigo/20 rounded-lg p-8 glow-border overflow-hidden">
                        <DashboardMockup />
                        {/* Scan effect over dashboard */}
                        <ScanLine duration={3} delay={1} />
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
                    {capabilities.map((cap, i) => (
                        <div
                            key={i}
                            className="capability-card group bg-charcoal border border-zinc-600/30 p-8 hover:border-indigo/50 transition-all duration-300 glow-border"
                        >
                            <div className="text-indigo mb-4 group-hover:scale-110 transition-transform">
                                <cap.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-almost-white mb-3">
                                {cap.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Metrics */}
                <div className="metrics-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                    {metrics.map((metric, i) => (
                        <div
                            key={i}
                            className="metric-card text-center p-6 border border-cyan/20 bg-charcoal/50"
                        >
                            <div className="font-mono-tech text-4xl text-cyan mb-2">
                                {metric.value}
                            </div>
                            <div className="text-xs text-zinc-600 uppercase tracking-wider">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <MagneticButton className="bg-gradient-to-r from-indigo to-violet text-white px-12 py-6 text-xl font-bold uppercase tracking-wide glow-indigo">
                        Request Access →
                    </MagneticButton>
                </div>

            </div>
        </section>
    );
}

// Dashboard Mockup Component
function DashboardMockup() {
    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-almost-white">Visibility Dashboard</h3>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald animate-pulse" />
                    <span className="text-xs text-zinc-500 font-mono-tech">LIVE</span>
                </div>
            </div>

            {/* Visibility Score */}
            <div className="bg-near-black border border-indigo/30 rounded p-6">
                <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Visibility Score</div>
                <div className="flex items-end gap-4">
                    <div className="text-6xl font-mono-tech text-indigo">84.2</div>
                    <div className="text-sm text-emerald mb-2">▲ 12.3%</div>
                </div>
            </div>

            {/* Mock Chart */}
            <div className="bg-near-black border border-violet/20 rounded p-6">
                <div className="text-sm text-zinc-500 uppercase tracking-wider mb-4">Platform Coverage</div>
                <div className="space-y-3">
                    {[
                        { name: "ChatGPT", value: 92 },
                        { name: "Claude", value: 78 },
                        { name: "Perplexity", value: 85 },
                        { name: "Gemini", value: 71 },
                    ].map((platform, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-24 text-sm text-zinc-400 font-mono-tech">{platform.name}</div>
                            <div className="flex-1 h-2 bg-charcoal rounded overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo to-violet"
                                    style={{ width: `${platform.value}%` }}
                                />
                            </div>
                            <div className="w-12 text-right text-sm text-cyan font-mono-tech">{platform.value}%</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
