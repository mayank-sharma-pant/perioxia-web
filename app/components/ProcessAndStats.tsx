"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ClipboardCheck, Code, Rocket, Search, Box, Building2, ShieldCheck, Headphones } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { icon: Search, title: "Discovery", desc: "Deep dive into operational bottlenecks." },
    { icon: ClipboardCheck, title: "Design", desc: "Architecting a scalable solution for long-term vision." },
    { icon: Code, title: "Develop", desc: "Agile sprints with bi-weekly updates." },
    { icon: Rocket, title: "Deploy", desc: "Seamless rollover with 24/7 hypercare." },
];

const stats = [
    { label: "Projects Shipped", val: "500+", icon: Box },
    { label: "Enterprise Clients", val: "50+", icon: Building2 },
    { label: "System Uptime", val: "99.9%", icon: ShieldCheck },
    { label: "Support Coverage", val: "24/7", icon: Headphones },
];

export default function ProcessAndStats() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Timeline Line Draw
            gsap.from(".timeline-track", {
                scrollTrigger: {
                    trigger: ".process-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                },
                height: 0,
                ease: "none"
            });

            // Step Reveal
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: ".process-section",
                    start: "top 70%",
                },
                x: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });

            // Stats Reveal
            gsap.from(".stat-card", {
                scrollTrigger: {
                    trigger: ".stats-section",
                    start: "top 80%"
                },
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8
            });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container}>

            {/* PROCESS SECTION */}
            <section className="process-section py-32 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <span className="text-accent-cyan font-mono-tech text-sm tracking-widest uppercase mb-8 block">How We Work</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
                        <span className="text-gradient-primary">Precision</span> in every step.
                    </h2>

                    <div className="relative pl-12 space-y-16">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-white/5">
                            <div className="timeline-track w-full bg-gradient-to-b from-accent-cyan to-accent-purple h-full origin-top" />
                        </div>

                        {steps.map((s, i) => (
                            <div key={i} className="process-step relative">
                                {/* Icon Node */}
                                <div className="absolute -left-[45px] top-0 w-12 h-12 rounded-full bg-bg-charcoal border border-white/20 flex items-center justify-center z-10 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                    <s.icon size={18} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-text-warm-gray leading-relaxed max-w-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA CARD */}
                <div className="flex items-center">
                    <div className="relative w-full bg-gradient-to-br from-accent-purple/20 to-bg-slate border border-white/10 rounded-3xl p-12 overflow-hidden text-center lg:text-left group">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                        <div className="absolute -right-20 -top-20 w-60 h-60 bg-accent-purple/20 rounded-full blur-[80px] group-hover:bg-accent-purple/30 transition-colors duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-4xl font-display font-bold text-white mb-6">Ready to Transform?</h3>
                            <p className="text-text-off-white text-lg mb-10 opacity-80">
                                Join elite enterprises automating their future with Perioxia.
                            </p>
                            <MagneticButton className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-accent-cyan hover:text-black transition-colors shadow-lg w-full lg:w-auto">
                                Schedule Consultation
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats-section py-24 bg-bg-slate relative border-y border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((s, i) => (
                        <div key={i} className="stat-card text-center">
                            <div className="inline-flex p-3 bg-white/5 rounded-xl mb-4 text-accent-cyan">
                                <s.icon size={24} />
                            </div>
                            <div className="text-4xl md:text-5xl font-mono-tech font-bold text-white mb-2 tracking-tighter">
                                {s.val}
                            </div>
                            <div className="text-text-warm-gray text-sm uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
