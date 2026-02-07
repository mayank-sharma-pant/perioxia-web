"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Database, Cloud, Code2, Cpu, Network, Zap, Lock, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tech = [
    { icon: Code2, title: "Next.js 14", desc: "App Router performance" },
    { icon: Code2, title: "Python FastAPI", desc: "High-speed backend" },
    { icon: Database, title: "PostgreSQL", desc: "Scalable storage" },
    { icon: Cloud, title: "AWS Infra", desc: "Global edge network" },
    { icon: Cpu, title: "OpenAI API", desc: "LLM Integration" },
    { icon: Network, title: "Anthropic", desc: "Claude analysis" },
    { icon: Zap, title: "WebSockets", desc: "Real-time streaming" },
    { icon: Database, title: "Vector DB", desc: "Semantic search" }, // Using Database as placeholder for Vector
];

export default function Technology() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tech-card", {
                scrollTrigger: { trigger: ".tech-grid", start: "top 80%" },
                y: 20, opacity: 0, stagger: 0.05, duration: 0.6
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="bg-bg-void py-32 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display text-white">
                        BUILT WITH MODERN INFRASTRUCTURE
                    </h2>
                </div>

                <div className="tech-grid grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
                    {tech.map((t, i) => (
                        <div key={i} className="tech-card border-r border-b border-white/10 p-10 hover:bg-white/5 transition-colors group">
                            <div className="text-text-stone mb-6 group-hover:text-accent-chartreuse transition-colors">
                                <t.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{t.title}</h3>
                            <p className="text-sm text-text-stone/60 font-mono-tech">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
