"use client";

import { useRef, useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { target: 150, suffix: "+", label: "Platforms Tracked", gradient: "from-neon-blue to-future-purple" },
    { target: 10, suffix: "M+", label: "Queries Analyzed", gradient: "from-future-purple to-cyber-pink" },
    { target: 99.97, suffix: "%", label: "Uptime Target", gradient: "from-cyber-pink to-energy-orange", decimals: 2 },
    { target: 50, prefix: "<", suffix: "ms", label: "Response Time", gradient: "from-energy-orange to-sunset-yellow" },
];

export default function Stats() {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Cards pop in
            gsap.from(".stat-card", {
                scrollTrigger: {
                    trigger: ".stats-grid",
                    start: "top 80%",
                    onEnter: () => setHasAnimated(true),
                },
                y: 60,
                opacity: 0,
                scale: 0.9,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative">
            <div className="container-candy">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl text-text-dark mb-4">
                        THE NUMBERS SPEAK
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyber-pink to-energy-orange rounded-full mx-auto" />
                </div>

                {/* Stats Grid */}
                <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} animate={hasAnimated} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function StatCard({ target, suffix, prefix, label, gradient, decimals = 0, animate }: any) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!animate) return;

        const duration = 2000;
        const startTime = Date.now();

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            setCount(target * eased);

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(tick);
    }, [animate, target]);

    const displayValue = decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString();

    return (
        <div className="stat-card gradient-border-card p-8 text-center hover:-translate-y-2 transition-transform cursor-pointer">
            <div className={`text-5xl md:text-6xl font-display bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3`}>
                {prefix}{displayValue}{suffix}
            </div>
            <div className="text-sm text-text-light uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}
