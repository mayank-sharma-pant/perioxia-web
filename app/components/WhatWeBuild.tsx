"use client";

import { useRef, MouseEvent } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Database, Users, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        icon: Database,
        title: "NEXUS CRM",
        description: "Lightning-fast customer data platform with predictive AI that turns insights into action.",
        gradient: "from-neon-blue to-future-purple",
        borderColor: "border-neon-blue",
    },
    {
        icon: Users,
        title: "NEURAL WORKERS",
        description: "AI agents that think and act autonomously. Automate the complex, focus on what matters.",
        gradient: "from-future-purple to-cyber-pink",
        borderColor: "border-future-purple",
    },
    {
        icon: Cpu,
        title: "CORTEX OS",
        description: "Real-time operating system for smart machines and robots. The brain for your hardware.",
        gradient: "from-cyber-pink to-energy-orange",
        borderColor: "border-cyber-pink",
    },
];

export default function WhatWeBuild() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger cards on scroll
            gsap.from(".capability-card", {
                scrollTrigger: {
                    trigger: ".cards-grid",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                scale: 0.9,
                rotation: 5,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
            });

            // Header animation
            gsap.from(".section-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative">
            <div className="container-candy">

                {/* Header */}
                <div className="section-header mb-16">
                    <h2 className="font-display text-5xl md:text-7xl text-text-dark mb-4">
                        WHAT WE BUILD
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-full" />
                    <p className="text-xl text-text-gray mt-6">
                        Creating the future, one system at a time
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <MagneticCard key={i} {...card} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function MagneticCard({ icon: Icon, title, description, gradient, borderColor }: any) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(cardRef.current, {
            x: x * 0.12,
            y: y * 0.12,
            rotation: x * 0.015,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`capability-card magnetic-card gradient-border-card p-8 cursor-pointer`}
        >
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-4 mb-6 text-white`}>
                <Icon className="w-full h-full" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl text-text-dark mb-4">
                {title}
            </h3>

            {/* Description */}
            <p className="text-text-gray leading-relaxed mb-6">
                {description}
            </p>

            {/* CTA */}
            <button className="text-neon-blue font-semibold hover:underline underline-offset-4">
                Learn More →
            </button>
        </div>
    );
}
