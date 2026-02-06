"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Bot, Code2, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
    {
        icon: Database,
        title: "Nexus CRM Platform",
        desc: "High-velocity customer management powered by predictive AI. Built for scale, designed for speed.",
        features: ["360° Customer Intelligence", "Predictive Analytics", "Workflow Orchestration"],
        gradient: "from-blue-500/20 to-cyan-500/20",
        cta: "Explore Nexus"
    },
    {
        icon: Bot,
        title: "Neural Workforce",
        desc: "Autonomous AI agents handling documentation, data processing, and intelligent decision support.",
        features: ["Document Intelligence", "Anomaly Detection", "24/7 Autonomy"],
        gradient: "from-violet-500/20 to-fuchsia-500/20",
        cta: "See Agents"
    },
    {
        icon: Code2,
        title: "Bespoke Development",
        desc: "End-to-end custom software solutions tailored to your unique business challenges.",
        features: ["Web & Mobile Apps", "API Integration", "Legacy Modernization"],
        gradient: "from-emerald-500/20 to-teal-500/20",
        cta: "View Projects"
    }
];

export default function SolutionsGrid() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".solution-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative py-32 container mx-auto px-6">

            <div className="text-center w-full max-w-2xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Engineered for <span className="text-gradient-cyan">Impact.</span>
                </h2>
                <p className="text-text-secondary text-lg">
                    We don't just write code. We build intelligent ecosystems that transform how your enterprise operates.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((s, i) => (
                    <div key={i} className="solution-card group relative p-8 glass-card rounded-2xl hover:translate-y-[-8px] transition-all duration-300">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />

                        <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                            <s.icon size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                        <p className="text-text-secondary leading-relaxed mb-8 min-h-[80px]">
                            {s.desc}
                        </p>

                        <ul className="space-y-3 mb-8">
                            {s.features.map((f, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/50" />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-white/5 flex items-center text-accent-cyan font-medium text-sm group-hover:gap-4 transition-all gap-2 cursor-pointer">
                            {s.cta} <ArrowRight size={16} />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
