"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Building2, Network, Rocket, ScanSearch } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
    {
        title: "ENTERPRISE BRANDS",
        icon: Building2,
        problem: "Your brand gets mentioned in AI responses, but you have no data on frequency or sentiment.",
        solution: "Executive dashboards showing exactly how AI platforms present your brand to users.",
        cta: "Learn More"
    },
    {
        title: "DIGITAL AGENCIES",
        icon: Network,
        problem: "Clients ask about 'AI SEO' and you have no tools to deliver insights.",
        solution: "White-label Visiblo to offer cutting-edge AI visibility reporting as a service.",
        cta: "Partner With Us"
    },
    {
        title: "SAAS COMPANIES",
        icon: Rocket,
        problem: "Potential customers search for solutions using AI chat, but your product is missing.",
        solution: "Optimize content strategy based on what AI platforms value.",
        cta: "Get Early Access"
    },
    {
        title: "RESEARCH TEAMS",
        icon: ScanSearch,
        problem: "You publish groundbreaking research, but AI models cite competitors.",
        solution: "Track citation patterns and identify opportunities to increase visibility.",
        cta: "Request Demo"
    }
];

export default function UseCases() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".use-case-card");

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + sliderRef.current!.scrollWidth,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="use-cases" className="bg-bg-void relative border-t border-white/5">

            <div className="py-12 border-b border-white/5">
                <h2 className="text-4xl font-display text-white text-center">WHO IS THIS FOR?</h2>
            </div>

            <div ref={triggerRef} className="overflow-hidden h-[90vh] flex relative">
                <div ref={sliderRef} className="flex h-full w-[300vw]">

                    {audiences.map((a, i) => (
                        <div key={i} className="use-case-card w-screen h-full flex-none flex items-center justify-center p-6 md:p-20 bg-bg-void border-r border-white/5">

                            <div className="w-full max-w-2xl bg-bg-forest border-t-[4px] border-accent-chartreuse p-12 md:p-16 relative group hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
                                <div className="absolute top-8 right-8 text-accent-chartreuse opacity-20 group-hover:opacity-100 transition-opacity">
                                    <a.icon size={64} />
                                </div>

                                <h3 className="text-4xl md:text-5xl font-display text-white mb-12">{a.title}</h3>

                                <div className="space-y-8">
                                    <div>
                                        <div className="text-xs font-mono text-accent-coral uppercase mb-2">The Problem</div>
                                        <p className="text-text-stone text-lg leading-relaxed">{a.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-accent-chartreuse uppercase mb-2">The Solution</div>
                                        <p className="text-white text-xl leading-relaxed">{a.solution}</p>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <button className="flex items-center gap-3 text-accent-chartreuse font-bold hover:gap-6 transition-all uppercase tracking-wider">
                                        {a.cta} <ArrowRight />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
