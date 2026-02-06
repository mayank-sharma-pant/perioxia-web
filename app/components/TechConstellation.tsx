"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Cloud, Code2, Database, Globe, Layers, Server, Cpu, Box } from "lucide-react";

export default function TechConstellation() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Core Pulse
            gsap.to(".core-pulse", { scale: 1.2, opacity: 0.5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            // Orbit Animations
            gsap.to(".orbit-ring-1", { rotation: 360, duration: 40, repeat: -1, ease: "linear" });
            gsap.to(".orbit-ring-2", { rotation: -360, duration: 60, repeat: -1, ease: "linear" });

            // Counter-rotate icons to keep upright
            gsap.to(".orbit-icon-1", { rotation: -360, duration: 40, repeat: -1, ease: "linear" });
            gsap.to(".orbit-icon-2", { rotation: 360, duration: 60, repeat: -1, ease: "linear" });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-24 relative overflow-hidden bg-[#0a0a0a]">

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                <div className="text-center max-w-2xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                        Powered by <span className="text-gradient-primary">Modern Architecture.</span>
                    </h2>
                    <p className="text-text-warm-gray text-lg">
                        We leverage the most advanced framework ecosystem to ensure your solutions are scalable, secure, and future-proof.
                    </p>
                </div>

                {/* ORBITAL SYSTEM */}
                <div className="relative w-[600px] h-[600px] flex items-center justify-center mt-10">

                    {/* Central Core */}
                    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple blur-[50px] opacity-20 core-pulse" />
                    <div className="relative z-20 w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-2xl">
                        <Cpu className="text-white" size={40} />
                    </div>

                    {/* Ring 1 (Inner) */}
                    <div className="orbit-ring-1 absolute w-[350px] h-[350px] border border-white/5 rounded-full">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-1 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Code2 size={20} className="text-white group-hover:text-accent-cyan" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-1 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Database size={20} className="text-white group-hover:text-accent-purple" />
                        </div>
                    </div>

                    {/* Ring 2 (Outer) */}
                    <div className="orbit-ring-2 absolute w-[550px] h-[550px] border border-dashed border-white/5 rounded-full">
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-2 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Cloud size={24} className="text-white group-hover:text-accent-amber" />
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-2 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Layers size={24} className="text-white group-hover:text-accent-emerald" />
                        </div>
                        <div className="absolute bottom-[15%] right-[15%] w-10 h-10 bg-bg-slate border border-white/10 rounded-full flex items-center justify-center orbit-icon-2 hover:scale-125 transition-transform duration-300 group cursor-pointer">
                            <Server size={18} className="text-white" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
