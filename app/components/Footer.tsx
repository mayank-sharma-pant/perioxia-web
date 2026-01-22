"use client";

import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 py-20 border-t border-white/10 bg-void">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
                    <div className="md:col-span-2 space-y-8">
                        <div className="text-4xl font-black tracking-tighter text-white">PERIOXIA.</div>
                        <p className="text-text-secondary text-lg font-light leading-relaxed max-w-sm">
                            Engineering the machines of tomorrow. We are building the physical
                            cognitive stacks that define the boundaries of intelligence.
                        </p>
                        <div className="flex items-center gap-6">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent-signal hover:border-accent-signal transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[10px] font-mono-tech text-white/50 uppercase tracking-widest">CAPABILITIES</h4>
                        <ul className="space-y-4">
                            {["CRM Architecture", "Mobile Kinetics", "System Integration", "AI Agent Swarms", "Robotic OS"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors duration-300 flex items-center gap-2 group font-mono-tech cursor-pointer">
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-accent-signal transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[10px] font-mono-tech text-white/50 uppercase tracking-widest">COMPANY</h4>
                        <ul className="space-y-4">
                            {["Research Papers", "Case Studies", "Global Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors duration-300 flex items-center gap-2 group font-mono-tech cursor-pointer">
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-accent-signal transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 text-[10px] font-mono-tech text-white/30 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        SYSTEM_STATUS: NOMINAL // © {new Date().getFullYear()} PERIOXIA
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-[10px] font-mono-tech text-white/30 hover:text-white uppercase tracking-widest transition-colors">PRIVACY_PROTOCOL</a>
                        <a href="#" className="text-[10px] font-mono-tech text-white/30 hover:text-white uppercase tracking-widest transition-colors">TERMS_OF_OP</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
