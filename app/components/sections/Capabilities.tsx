"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Shield, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benchmarks = [
    { metric: "Response Time", value: 50, unit: "ms", max: 100 },
    { metric: "Query Throughput", value: 2.4, unit: "M/sec", max: 3 },
    { metric: "Accuracy", value: 94.2, unit: "%", max: 100 },
    { metric: "Uptime", value: 99.97, unit: "%", max: 100 },
];

const certifications = [
    "AES-256 Encryption",
    "SOC 2 Compliant",
    "GDPR Compliant",
    "99.97% Uptime SLA",
];

export default function Capabilities() {
    const containerRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate bars on scroll
            ScrollTrigger.create({
                trigger: ".benchmarks-panel",
                start: "top 70%",
                onEnter: () => {
                    setAnimated(true);

                    gsap.from(".benchmark-bar", {
                        scaleX: 0,
                        transformOrigin: "left",
                        stagger: 0.15,
                        duration: 1.2,
                        ease: "power3.out",
                    });
                },
                once: true,
            });

            // Certifications
            gsap.from(".cert-badge", {
                scrollTrigger: {
                    trigger: ".cert-grid",
                    start: "top 75%",
                },
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-near-black border-t border-charcoal">
            <div className="container-custom">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-almost-white mb-6">
                        ENGINEERING EXCELLENCE
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Performance that earns trust. Security that protects value.
                    </p>
                </div>

                {/* Performance Benchmarks Panel */}
                <div className="benchmarks-panel max-w-4xl mx-auto mb-20">
                    <div className="bg-charcoal border-2 border-indigo/20 rounded-lg p-8 relative overflow-hidden">

                        {/* Terminal-style header */}
                        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-zinc-600/30">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red" />
                                <div className="w-3 h-3 rounded-full bg-amber" />
                                <div className="w-3 h-3 rounded-full bg-emerald" />
                            </div>
                            <span className="text-xs font-mono-tech text-zinc-500 uppercase ml-4">
                                ╔═══════════════════════════════════════════════════════════════╗
                                <br />
                                ║ PERFORMANCE BENCHMARKS
                                <br />
                                ╚═══════════════════════════════════════════════════════════════╝
                            </span>
                        </div>

                        {/* Benchmark Bars */}
                        <div className="space-y-8">
                            {benchmarks.map((bench, i) => (
                                <div key={i}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-mono-tech text-zinc-400 text-sm uppercase">
                                            {bench.metric}
                                        </span>
                                        <span className="font-mono-tech text-2xl text-cyan">
                                            {animated ? bench.value : 0}{bench.unit}
                                        </span>
                                    </div>
                                    <div className="h-3 bg-charcoal/50 border border-zinc-600/30 rounded overflow-hidden">
                                        <div
                                            className="benchmark-bar h-full bg-gradient-to-r from-indigo via-violet to-cyan relative"
                                            style={{ width: `${(bench.value / bench.max) * 100}%` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Certifications */}
                <div className="cert-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, i) => (
                        <div
                            key={i}
                            className="cert-badge flex flex-col items-center justify-center p-6 bg-charcoal border border-emerald/20 rounded text-center group hover:border-emerald/60 transition-colors"
                        >
                            <CheckCircle2 className="text-emerald mb-3 group-hover:scale-110 transition-transform" size={32} />
                            <span className="text-sm text-zinc-400 font-semibold">
                                {cert}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
