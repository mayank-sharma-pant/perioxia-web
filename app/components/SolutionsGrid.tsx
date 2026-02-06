"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Bot, Cloud, Code2, Database } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        key: "crm",
        size: "large", // 60%
        icon: Database,
        title: "Nexus CRM Platform",
        desc: "High-velocity customer management powered by predictive AI. Built for scale, designed for speed.",
        features: ["360° Customer Intelligence", "Predictive Analytics", "Workflow Orchestration"],
        cta: "Explore Nexus",
        color: "cyan"
    },
    {
        key: "agents",
        size: "small", // 40%
        icon: Bot,
        title: "Neural Workforce",
        desc: "Autonomous AI agents handling documentation & logic.",
        features: ["Document Intelligence", "Anomaly Detection"],
        cta: "See Agents",
        color: "purple"
    },
    {
        key: "custom",
        size: "small", // 40%
        icon: Code2,
        title: "Bespoke IT",
        desc: "End-to-end custom software solutions tailored to your challenges.",
        features: ["Web & Mobile", "Legacy Modernization"],
        cta: "View Projects",
        color: "amber"
    },
    {
        key: "cloud",
        size: "large", // 60%
        icon: Cloud,
        title: "Scalable Infrastructure",
        desc: "Enterprise-grade cloud solutions with 99.9% uptime and global deployment capabilities.",
        features: ["Multi-cloud Orchestration", "Auto-scaling", "Security & Compliance"],
        cta: "Learn More",
        color: "emerald"
    }
];

export default function SolutionsGrid() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger Reveal
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative py-32 container mx-auto px-6">

            <div className="mb-20">
                <span className="text-accent-cyan font-mono-tech text-sm tracking-[0.2em] uppercase block mb-4">Our Capabilities</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white max-w-3xl">
                    Engineered for <span className="text-gradient-primary">Impact.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className={`service-card group relative p-10 rounded-2xl bg-bg-slate border border-[#2A2D34] hover:border-accent-${s.color}/50 hover:shadow-2xl transition-all duration-500
                        ${s.size === 'large' ? 'md:col-span-7' : 'md:col-span-5'}
                    `}
                    >
                        {/* Inner Gradient Glow on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-accent-${s.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className={`w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-accent-${s.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                    <s.icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-text-warm-gray text-lg leading-relaxed mb-8">
                                    {s.desc}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {s.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-[#777] group-hover:text-[#AAA] transition-colors">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-accent-${s.color}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className={`text-accent-${s.color} font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300`}>
                                    {s.cta} <ArrowRight size={18} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
