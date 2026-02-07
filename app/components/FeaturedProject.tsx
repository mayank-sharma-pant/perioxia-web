"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(".project-title .char", {
                scrollTrigger: {
                    trigger: ".project-content",
                    start: "top 70%",
                },
                x: -20,
                opacity: 0,
                stagger: 0.03,
                duration: 0.8,
                ease: "power3.out",
            });

            // Content stagger
            gsap.from(".project-detail", {
                scrollTrigger: {
                    trigger: ".project-content",
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
            });

            // Dashboard entrance
            gsap.from(".project-dashboard", {
                scrollTrigger: {
                    trigger: ".project-dashboard",
                    start: "top 70%",
                },
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Metric counters
            gsap.utils.toArray(".metric-counter").forEach((counter: any) => {
                const target = parseInt(counter.dataset.target);
                gsap.from(counter, {
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 80%",
                    },
                    textContent: 0,
                    duration: 2,
                    snap: { textContent: 1 },
                    ease: "power1.out",
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-gradient-to-br from-[--obsidian] via-[#0A0A0E] to-[--obsidian] border-t border-[--graphite]/30 relative overflow-hidden">

            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[--lime]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[--magenta]/20 to-transparent" />
            </div>

            <div className="container-custom relative z-10">

                {/* Section Label */}
                <div className="mb-12">
                    <span className="text-[--lime] text-sm uppercase tracking-[0.2em] font-mono-tech font-bold">
                        Featured Project
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* LEFT: Content */}
                    <div className="lg:w-1/2 project-content">

                        {/* Project Name */}
                        <h2 className="project-title font-display text-[clamp(4rem,12vw,7.5rem)] text-[--ivory] leading-none mb-6"
                            style={{
                                WebkitTextStroke: "2px var(--ivory)",
                                color: "transparent"
                            } as any}>
                            {"VISIBLO".split("").map((char, i) => (
                                <span key={i} className="char inline-block">{char}</span>
                            ))}
                        </h2>

                        {/* Tagline */}
                        <p className="project-detail text-2xl text-[--silver] mb-12">
                            AI Visibility Analytics Platform
                        </p>

                        {/* Description */}
                        <div className="space-y-6 text-lg text-[--silver] leading-relaxed mb-12">
                            <p className="project-detail">
                                Visiblo tracks how your brand appears in AI-powered search and generative responses.
                            </p>
                            <p className="project-detail">
                                As search engines die and AI becomes the primary way people discover information,
                                traditional SEO is becoming obsolete. Visiblo gives you visibility into this new paradigm.
                            </p>
                            <p className="project-detail text-[--ivory]">
                                Track brand mentions, measure AI visibility scores, analyze competitor presence across
                                ChatGPT, Claude, Perplexity, and emerging AI platforms.
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="project-detail grid grid-cols-3 gap-8 mb-12">
                            <div>
                                <div className="metric-counter font-display text-5xl text-[--lime] font-mono-tech" data-target="12">0</div>
                                <div className="text-sm text-[--silver] mt-2 uppercase tracking-wider">Early Customers</div>
                            </div>
                            <div>
                                <div className="metric-counter font-display text-5xl text-[--lime] font-mono-tech" data-target="5">0</div>
                                <div className="text-sm text-[--silver] mt-2 uppercase tracking-wider">AI Platforms</div>
                            </div>
                            <div>
                                <div className="font-display text-5xl text-[--lime] font-mono-tech">24/7</div>
                                <div className="text-sm text-[--silver] mt-2 uppercase tracking-wider">Monitoring</div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="project-detail flex flex-col sm:flex-row gap-6">
                            <a href="#" className="group text-[--lime] text-lg font-bold flex items-center gap-3 hover:gap-5 transition-all">
                                Visit Visiblo.ai
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#" className="text-[--silver] text-lg hover:text-[--ivory] transition-colors">
                                Read Case Study
                            </a>
                        </div>

                    </div>

                    {/* RIGHT: Dashboard Mockup */}
                    <div className="lg:w-1/2 project-dashboard">
                        <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-2xl">
                            {/* Main Dashboard Frame */}
                            <rect x="0" y="0" width="600" height="500" rx="12" fill="#0A0A0E" stroke="var(--graphite)" strokeWidth="2" />

                            {/* Header */}
                            <rect x="20" y="20" width="560" height="60" rx="6" fill="#151518" />
                            <circle cx="50" cy="50" r="8" fill="var(--lime)" opacity="0.8" />
                            <rect x="80" y="42" width="120" height="16" rx="4" fill="var(--graphite)" />

                            {/* Visibility Score (Large) */}
                            <rect x="40" y="100" width="260" height="180" rx="8" fill="#151518" />
                            <text x="60" y="130" fill="var(--silver)" fontSize="12" fontFamily="monospace">VISIBILITY SCORE</text>
                            <text x="60" y="180" fill="var(--lime)" fontSize="72" fontFamily="monospace" fontWeight="bold">84.2</text>
                            <text x="60" y="210" fill="var(--lime)" fontSize="16" fontFamily="monospace">+12% ↑</text>

                            {/* Competitor Bars */}
                            <rect x="320" y="100" width="260" height="180" rx="8" fill="#151518" />
                            <text x="340" y="130" fill="var(--silver)" fontSize="12" fontFamily="monospace">VS COMPETITORS</text>

                            {/* Bars */}
                            <rect x="340" y="150" width="180" height="20" rx="4" fill="var(--lime)" opacity="0.8" />
                            <rect x="340" y="180" width="140" height="20" rx="4" fill="var(--graphite)" />
                            <rect x="340" y="210" width="120" height="20" rx="4" fill="var(--graphite)" />
                            <rect x="340" y="240" width="100" height="20" rx="4" fill="var(--graphite)" />

                            {/* Live Mentions Feed */}
                            <rect x="40" y="300" width="540" height="180" rx="8" fill="#151518" />
                            <text x="60" y="330" fill="var(--silver)" fontSize="12" fontFamily="monospace">LIVE MENTIONS</text>

                            {/* Feed Items */}
                            <rect x="60" y="350" width="500" height="30" rx="4" fill="var(--obsidian)" />
                            <circle cx="80" cy="365" r="4" fill="var(--electric-blue)" />
                            <text x="100" y="370" fill="var(--ivory)" fontSize="10">ChatGPT mentioned your brand in...</text>

                            <rect x="60" y="390" width="500" height="30" rx="4" fill="var(--obsidian)" />
                            <circle cx="80" cy="405" r="4" fill="var(--lime)" />
                            <text x="100" y="410" fill="var(--ivory)" fontSize="10">Claude cited your product as...</text>

                            <rect x="60" y="430" width="500" height="30" rx="4" fill="var(--obsidian)" />
                            <circle cx="80" cy="445" r="4" fill="var(--magenta)" />
                            <text x="100" y="450" fill="var(--ivory)" fontSize="10">Perplexity AI included you in...</text>
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}
