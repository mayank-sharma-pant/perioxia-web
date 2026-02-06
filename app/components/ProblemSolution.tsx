"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Problem Section Reveal
            gsap.from(".problem-text", {
                scrollTrigger: { trigger: ".problem-section", start: "top 60%" },
                y: 60, opacity: 0, duration: 1, stagger: 0.2
            });

            // Solution Section Color Shift
            gsap.to(".solution-section", {
                backgroundColor: "#0A1F1F", // Deep Forest
                scrollTrigger: { trigger: ".solution-section", start: "top 80%", toggleActions: "play none none reverse" }
            });

            // Feature Visuals Draw
            const feats = gsap.utils.toArray(".feature-card");
            feats.forEach((feat: any, i) => {
                gsap.from(feat, {
                    scrollTrigger: { trigger: feat, start: "top 80%" },
                    y: 40, opacity: 0, duration: 0.8
                });
            });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container}>

            {/* PART 1: THE PROBLEM (DARK) */}
            <section className="problem-section py-32 bg-bg-void text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="problem-text text-5xl md:text-7xl font-display text-accent-coral mb-8 leading-none">
                        YOUR BRAND IS INVISIBLE.
                    </h2>
                    <p className="problem-text text-xl md:text-2xl text-text-stone max-w-2xl mx-auto leading-relaxed">
                        Search is dead. ChatGPT, Perplexity, and Claude are how people find information now.
                        <span className="text-white block mt-4">But you have no idea if your brand even appears in their responses.</span>
                    </p>
                </div>
            </section>

            {/* PART 2: THE SOLUTION (FOREST) */}
            <section className="solution-section py-32 bg-bg-void text-bg-cream px-6 border-t border-white/5 transition-colors duration-1000">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-display text-accent-chartreuse mb-6">
                            VISIBLO MAKES AI VISIBLE.
                        </h2>
                        <p className="text-xl text-gray-400">The first analytics layer for the generative web.</p>
                    </div>

                    {/* FEATURE GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Feature 1: Brand Tracking */}
                        <div className="feature-card group">
                            <div className="h-64 mb-8 border border-white/10 bg-black/20 rounded-lg relative overflow-hidden flex items-center justify-center">
                                {/* SVG Graph */}
                                <svg viewBox="0 0 200 100" className="w-[80%] opacity-80 group-hover:opacity-100 transition-opacity">
                                    <path d="M0 80 Q 50 80, 70 50 T 140 30 T 200 10" fill="none" stroke="#CCFF00" strokeWidth="2" />
                                    <circle cx="200" cy="10" r="3" fill="#CCFF00" />
                                    <text x="10" y="20" fill="#666" fontSize="8" fontFamily="monospace">MENTIONS</text>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Track Presence</h3>
                            <p className="text-text-stone">Monitor how often your brand appears in AI responses across major LLMs.</p>
                        </div>

                        {/* Feature 2: Competitor Intel */}
                        <div className="feature-card group">
                            <div className="h-64 mb-8 border border-white/10 bg-black/20 rounded-lg relative overflow-hidden flex items-center justify-center">
                                {/* SVG Bars */}
                                <div className="flex items-end gap-4 h-[60%] w-[60%]">
                                    <div className="w-8 h-[40%] bg-gray-700 rounded-t-sm" />
                                    <div className="w-8 h-[60%] bg-gray-600 rounded-t-sm" />
                                    <div className="w-8 h-[100%] bg-accent-chartreuse rounded-t-sm relative">
                                        <div className="absolute -top-6 left-0 text-[10px] text-accent-chartreuse text-center w-full">YOU</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Benchmark Rivals</h3>
                            <p className="text-text-stone">See exactly how your visibility compares to competitors in the AI landscape.</p>
                        </div>

                        {/* Feature 3: Actions */}
                        <div className="feature-card group">
                            <div className="h-64 mb-8 border border-white/10 bg-black/20 rounded-lg relative overflow-hidden flex items-center justify-center">
                                <div className="border border-accent-chartreuse/30 p-4 rounded text-xs font-mono text-accent-chartreuse w-[60%] text-center">
                                    RECOMMENDATION: <br /> Optimize context window for "SaaS Pricing"
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Get Insights</h3>
                            <p className="text-text-stone">Receive specific, actionable recommendations to fix your AI invisibility.</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
