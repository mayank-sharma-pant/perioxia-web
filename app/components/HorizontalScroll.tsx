"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "VISIBLO",
        subtitle: "AI Visibility Analytics",
        description: "Track your brand presence across 150+ AI platforms. Get real-time visibility scores and competitive intelligence.",
        status: "Launching Q2 2025",
        isFeatured: true,
        gradient: "from-cyber-blue via-neon-violet to-plasma-pink",
    },
    {
        title: "PROJECT ATLAS",
        subtitle: "Neural Documentation",
        description: "Intelligent document processing and knowledge extraction at enterprise scale.",
        status: "Coming 2025",
        isFeatured: false,
        gradient: "from-neon-violet to-plasma-pink",
    },
    {
        title: "PROJECT HORIZON",
        subtitle: "Predictive CRM",
        description: "Next-generation customer intelligence with autonomous agent workflows.",
        status: "Coming 2025",
        isFeatured: false,
        gradient: "from-plasma-pink to-cyber-blue",
    },
    {
        title: "MORE COMING",
        subtitle: "The Future",
        description: "We're just getting started. Join the waitlist for early access to everything we build.",
        status: "Stay Tuned",
        isFeatured: false,
        gradient: "from-cyber-blue to-lime-pulse",
    },
];

export default function HorizontalScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const scrollWidth = track.scrollWidth - window.innerWidth + 100;

        const ctx = gsap.context(() => {
            // Horizontal scroll
            gsap.to(track, {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Cards entrance
            gsap.from(".scroll-card", {
                opacity: 0,
                y: 50,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                },
            });

        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen overflow-hidden bg-bg-elevated/50 relative">

            {/* Header */}
            <div className="absolute top-12 left-8 z-10">
                <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-2">
                    COMING SOON
                </h2>
                <p className="text-sm text-text-muted font-mono">Scroll to explore →</p>
            </div>

            {/* Cards Track */}
            <div
                ref={trackRef}
                className="flex gap-8 h-full items-center px-8 pt-24"
                style={{ width: "fit-content" }}
            >
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`scroll-card flex-shrink-0 h-[480px] rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden ${project.isFeatured
                                ? "w-[550px] bg-gradient-to-br from-cyber-blue/10 via-neon-violet/10 to-plasma-pink/10 border-2 border-cyber-blue/30"
                                : "w-[400px] glass-card"
                            }`}
                    >
                        {/* Scan line on featured */}
                        {project.isFeatured && <div className="scan-line" />}

                        {/* Content */}
                        <div>
                            <h3 className={`font-display text-3xl md:text-4xl mb-2 ${project.isFeatured ? "gradient-text" : "text-text-primary"}`}>
                                {project.title}
                            </h3>
                            <p className="font-mono text-sm text-text-muted uppercase mb-6">
                                {project.subtitle}
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Footer */}
                        <div>
                            {project.isFeatured ? (
                                <MagneticButton className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-plasma-pink text-bg-deep font-bold rounded-lg">
                                    Join Waitlist →
                                </MagneticButton>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <span className="font-mono text-sm text-text-muted">{project.status}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-violet/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyber-blue/5 to-transparent" />
            </div>

        </section>
    );
}
