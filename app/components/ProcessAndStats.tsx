"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ClipboardCheck, Code, Rocket, Search } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { icon: Search, title: "Discovery", desc: "We deep dive into your operational bottlenecks and requirements." },
    { icon: ClipboardCheck, title: "Design", desc: "Architecting a scalable solution that fits your long-term vision." },
    { icon: Code, title: "Develop", desc: "Agile sprints with bi-weekly updates and continuous integration." },
    { icon: Rocket, title: "Deploy", desc: "Seamless rollover to production with 24/7 hypercare support." },
];

export default function ProcessAndStats() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                x: -40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });

            // Draw the line
            gsap.from(".timeline-line", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1
                },
                height: 0,
                ease: "none"
            });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Timeline */}
            <div>
                <span className="text-accent-blue font-bold uppercase tracking-widest mb-8 block text-sm">How We Work</span>
                <div className="relative pl-12 space-y-16">

                    {/* Vertical Line */}
                    <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-white/5">
                        <div className="timeline-line w-full bg-gradient-to-b from-blue-500 to-purple-500" />
                    </div>

                    {steps.map((s, i) => (
                        <div key={i} className="process-step relative">
                            {/* Icon Node */}
                            <div className="absolute -left-[44px] w-10 h-10 rounded-full bg-navy border border-white/20 flex items-center justify-center z-10 text-white">
                                <s.icon size={16} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                            <p className="text-text-secondary">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Card in the corner */}
            <div className="relative bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-12 flex flex-col justify-between overflow-hidden text-center lg:text-left">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-[60px]" />

                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform?</h3>
                    <p className="text-blue-100 text-lg mb-10">
                        Join 50+ enterprise clients who have automated their future with Perioxia.
                    </p>
                    <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors w-full lg:w-auto shadow-xl">
                        Schedule Consultation
                    </button>
                </div>
            </div>

        </section>
    );
}
