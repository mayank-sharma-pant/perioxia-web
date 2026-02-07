"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Feature List Stagger
            gsap.from(".prod-feature", {
                scrollTrigger: { trigger: ".active-features", start: "top 70%" },
                x: -30, opacity: 0, stagger: 0.1, duration: 0.8
            });

            // Dashboard Parallax
            gsap.to(".mockup-layer", {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: ".mockup-container",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="bg-bg-void py-32 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT: FEATURES LIST */}
                    <div className="lg:w-[40%] active-features">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent-chartreuse" />
                            <span className="text-accent-chartreuse font-mono-tech text-xs tracking-[0.2em] font-bold uppercase">Product</span>
                        </div>

                        <h2 className="text-5xl font-display text-white mb-16 leading-tight">
                            BUILT FOR <br /> <span className="text-transparent text-outline-chartreuse">AI-FIRST TEAMS</span>
                        </h2>

                        <div className="space-y-12">
                            {[
                                { title: "REAL-TIME MONITORING", desc: "Track brand mentions across AI platforms 24/7. Get instant alerts when visibility changes." },
                                { title: "VISIBILITY SCORING", desc: "Proprietary algorithm scores your AI discoverability on a 0-100 scale." },
                                { title: "COMPETITOR ANALYSIS", desc: "See how you stack up. Identify the keywords where competitors dominate." },
                                { title: "CITATION MAPPING", desc: "Understand which sources AI platforms cite when mentioning your brand." },
                                { title: "STRATEGIC INSIGHTS", desc: "AI-powered suggestions on how to increase your visibility in generative results." }
                            ].map((item, i) => (
                                <div key={i} className="prod-feature border-l-2 border-white/10 pl-6 hover:border-accent-chartreuse transition-colors group">
                                    <div className="text-lg font-bold text-white mb-2 group-hover:text-accent-chartreuse transition-colors">
                                        <span className="text-accent-chartreuse font-mono mr-3">0{i + 1}</span> {item.title}
                                    </div>
                                    <p className="text-text-stone leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: DASHBOARD MOCKUP */}
                    <div className="lg:w-[60%] mockup-container relative perspective-[1500px]">
                        {/* Abstract SVG UI Layers */}
                        <div className="mockup-layer relative z-10">
                            <svg viewBox="0 0 600 400" className="w-full h-auto drop-shadow-2xl">
                                <rect x="0" y="0" width="600" height="400" rx="6" fill="#0A1F1F" stroke="#333" />
                                {/* Header */}
                                <rect x="20" y="20" width="560" height="40" rx="3" fill="#000" />
                                {/* Sidebar */}
                                <rect x="20" y="70" width="100" height="310" rx="3" fill="#051010" />
                                {/* Main Content */}
                                <rect x="130" y="70" width="450" height="310" rx="3" fill="#051010" />

                                {/* Charts */}
                                <rect x="150" y="90" width="130" height="80" rx="2" fill="#1A2E2E" />
                                <rect x="290" y="90" width="130" height="80" rx="2" fill="#1A2E2E" />
                                <rect x="430" y="90" width="130" height="80" rx="2" fill="#1A2E2E" />

                                {/* Big Graph */}
                                <rect x="150" y="190" width="410" height="170" rx="2" fill="#000" />
                                <path d="M150 340 Q 250 340, 300 280 T 450 250 T 560 220" fill="none" stroke="#CCFF00" strokeWidth="2" strokeDasharray="5,5" />
                            </svg>
                        </div>

                        {/* Floating Element 2 */}
                        <div className="mockup-layer absolute -right-10 -bottom-20 w-80 z-20">
                            <svg viewBox="0 0 300 200" className="w-full h-auto drop-shadow-2xl">
                                <rect x="0" y="0" width="300" height="200" rx="4" fill="#000" stroke="#CCFF00" strokeWidth="1" />
                                <text x="20" y="40" fill="#CCFF00" fontFamily="monospace" fontSize="14">LIVE ALERT</text>
                                <text x="20" y="80" fill="#fff" fontFamily="sans-serif" fontSize="18" fontWeight="bold">New Citation Found</text>
                                <text x="20" y="110" fill="#999" fontFamily="sans-serif" fontSize="14">Source: TechCrunch Article</text>
                                <rect x="20" y="140" width="100" height="30" rx="2" fill="#CCFF00" />
                                <text x="45" y="160" fill="#000" fontSize="12" fontWeight="bold">View</text>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
