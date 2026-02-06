"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Brain, Cloud, Database, Globe, Smartphone, Zap } from "lucide-react";

const features = [
    { icon: Brain, label: "AI Automation" },
    { icon: Database, label: "Custom CRM" },
    { icon: Cloud, label: "Cloud Solutions" },
    { icon: Zap, label: "API Integration" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Globe, label: "Web Platforms" },
    // Duplicate for loop
    { icon: Brain, label: "AI Automation" },
    { icon: Database, label: "Custom CRM" },
    { icon: Cloud, label: "Cloud Solutions" },
    { icon: Zap, label: "API Integration" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Globe, label: "Web Platforms" },
];

export default function FeatureTicker() {
    const tickerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(tickerRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-navy-light/50 border-y border-white/5 py-4 overflow-hidden relative">
            {/* Gradients to fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-navy to-transparent z-10" />

            <div ref={tickerRef} className="flex w-max gap-12 items-center px-6">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                        <f.icon size={20} className="text-accent-blue" />
                        <span className="text-sm font-medium tracking-wide text-white whitespace-nowrap">{f.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
