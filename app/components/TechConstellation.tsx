"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Cloud, Code2, Database, Globe, Layers, Server } from "lucide-react";

export default function TechConstellation() {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Orbit Animations
            gsap.to(".orbit-1", { rotation: 360, duration: 20, repeat: -1, ease: "linear" });
            gsap.to(".orbit-2", { rotation: -360, duration: 30, repeat: -1, ease: "linear" });

            // Counter-rotate icons to keep them upright
            gsap.to(".orbit-icon", { rotation: -360, duration: 20, repeat: -1, ease: "linear" });
            gsap.to(".orbit-icon-rev", { rotation: 360, duration: 30, repeat: -1, ease: "linear" });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 relative bg-navy-light/30 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <div>
                    <span className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-4 block">Our Foundation</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Powered by <br />
                        <span className="text-gradient">Modern Architecture.</span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                        We leverage the most advanced framework ecosystem to ensure your solutions are scalable, secure, and future-proof.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                            <div className="text-2xl font-bold text-white mb-1">Next.js 14</div>
                            <div className="text-sm text-gray-400">App Router Framework</div>
                        </div>
                        <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                            <div className="text-2xl font-bold text-white mb-1">Python API</div>
                            <div className="text-sm text-gray-400">FastAPI Backend</div>
                        </div>
                    </div>
                </div>

                {/* Visual - Constellation */}
                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Center */}
                    <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full blur-[60px] opacity-50" />
                    <div className="relative z-10 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                        <Layers className="text-white" size={32} />
                    </div>

                    {/* Orbit 1 */}
                    <div className="orbit-1 absolute w-[280px] h-[280px] border border-white/5 rounded-full">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center orbit-icon z-10 hover:scale-110 transition-transform cursor-pointer shadow-lg text-blue-400">
                            <Globe size={20} />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center orbit-icon z-10 hover:scale-110 transition-transform cursor-pointer shadow-lg text-green-400">
                            <Server size={20} />
                        </div>
                    </div>

                    {/* Orbit 2 */}
                    <div className="orbit-2 absolute w-[450px] h-[450px] border border-dashed border-white/5 rounded-full">
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center orbit-icon-rev z-10 hover:scale-110 transition-transform cursor-pointer shadow-lg text-yellow-400">
                            <Database size={24} />
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center orbit-icon-rev z-10 hover:scale-110 transition-transform cursor-pointer shadow-lg text-pink-400">
                            <Code2 size={24} />
                        </div>
                        <div className="absolute bottom-0 right-1/4 w-10 h-10 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center orbit-icon-rev z-10 text-cyan-400">
                            <Cloud size={18} />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
