"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        status: "IN DEVELOPMENT",
        title: "NEURAL CRM",
        description: "Next-generation customer relationship management powered by predictive AI. Currently in private beta.",
        tech: ["Next.js", "Python", "TensorFlow"],
        cta: "Join Waitlist →",
    },
    {
        status: "COMING SOON",
        title: "AUTOMATION STUDIO",
        description: "No-code workflow automation for technical teams. Connect APIs, trigger actions, build complex logic without writing code.",
        tech: ["React", "Node.js", "Redis"],
        cta: "Request Early Access →",
    },
];

export default function MoreProjects() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".more-projects-card", {
                scrollTrigger: {
                    trigger: ".more-projects-grid",
                    start: "top 70%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-[--obsidian] border-t border-[--graphite]/30">
            <div className="container-custom">

                <h2 className="font-display text-center text-[clamp(3rem,8vw,5rem)] text-[--ivory] mb-8">
                    MORE PROJECTS
                </h2>

                <p className="text-center text-xl text-[--silver] max-w-2xl mx-auto mb-20">
                    We're building multiple products simultaneously. Here's what else we're working on.
                </p>

                <div className="more-projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="more-projects-card group bg-[--graphite] p-12 hover:-translate-y-2 hover:border hover:border-[--lime] transition-all duration-300"
                        >
                            {/* Status Badge */}
                            <div className="inline-block px-4 py-1 bg-[--magenta] rounded-full mb-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-white">
                                    {project.status}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-4xl text-[--ivory] mb-6">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-[--silver] leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, j) => (
                                    <span
                                        key={j}
                                        className="font-mono-tech text-xs text-[--lime] border border-[--lime]/30 px-3 py-1 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <a href="#" className="group/cta text-[--lime] font-bold flex items-center gap-3 hover:gap-5 transition-all">
                                {project.cta}
                                <ArrowRight size={20} className="group-hover/cta:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
