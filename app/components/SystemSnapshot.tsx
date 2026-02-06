"use client";

import { Activity, Cpu, Globe, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function SystemSnapshot() {
    const [latency, setLatency] = useState(12);
    const [requests, setRequests] = useState(8420);

    // Simulate live data
    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(prev => Math.max(8, Math.min(45, prev + (Math.random() > 0.5 ? 2 : -2))));
            setRequests(prev => prev + Math.floor(Math.random() * 10));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full border-y border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-6 text-[10px] md:text-xs font-mono tracking-wider text-text-secondary uppercase">

                {/* LEFT: SYSTEM IDENT */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-emerald-500">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-signal" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                    <span className="text-white/20">|</span>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={12} />
                        <span>SECURE_CONNECTION: TLS_1.3</span>
                    </div>
                </div>

                {/* CENTER: LIVE METRICS */}
                <div className="hidden md:flex items-center gap-8 text-text-dim hover:text-text-primary transition-colors cursor-crosshair">
                    <div className="flex items-center gap-2">
                        <Globe size={12} className="text-accent-cyan" />
                        <span>GRID: <span className="text-white">{latency}ms</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Cpu size={12} />
                        <span>CORE_LOAD: <span className="text-white">12%</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Activity size={12} />
                        <span>RPS: <span className="text-white">{requests}</span></span>
                    </div>
                </div>

                {/* RIGHT: BUILD INFO */}
                <div className="flex items-center gap-2 opacity-50">
                    <span>V.3.0.1-BETA</span>
                    <span className="w-2 h-2 border border-white/30" />
                </div>

            </div>
        </div>
    );
}
