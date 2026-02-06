"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const features = [
    "AI VISIBILITY TRACKING",
    "GENERATIVE SEARCH",
    "BRAND MONITORING",
    "COMPETITOR INTEL",
    "AI MENTIONS",
    "CITATION MAPPING",
    // Duplicates
    "AI VISIBILITY TRACKING",
    "GENERATIVE SEARCH",
    "BRAND MONITORING",
    "COMPETITOR INTEL",
    "AI MENTIONS",
    "CITATION MAPPING",
];

export default function FeatureTicker() {
    const tickerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(tickerRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 30, // Slow loop
                repeat: -1
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-bg-void border-y border-white/5 py-8 overflow-hidden relative z-20">

            {/* Gradients to fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-void to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-void to-transparent z-10" />

            <div ref={tickerRef} className="flex w-max gap-16 items-center">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <span className="text-4xl md:text-5xl font-display font-bold text-transparent text-outline-chartreuse whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-300">
                            {f}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-accent-chartreuse opacity-40" />
                    </div>
                ))}
            </div>
        </div>
    );
}
