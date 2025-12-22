import { Linkedin, Twitter, Github, ArrowUpRight, Radio } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 py-32 border-t border-white/5 bg-[#030303]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-24">
                    <div className="md:col-span-2 space-y-10">
                        <div className="text-4xl font-extrabold tracking-tighter text-gradient">Perioxia.</div>
                        <p className="text-slate-400 text-xl font-light leading-relaxed max-w-sm">
                            Engineering the machines of tomorrow. We build the physical
                            cognitive stacks that define the boundaries of intelligence.
                        </p>
                        <div className="flex items-center gap-8">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-500"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">Capabilities</h4>
                        <ul className="space-y-5">
                            {["Custom CRM", "Robotics OS", "AI Agents", "Web Systems"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-lg text-slate-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-3 group">
                                        {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">Company</h4>
                        <ul className="space-y-5">
                            {["Our Research", "Case Studies", "Contact", "Careers"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-lg text-slate-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-3 group">
                                        {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                        NODE: PROD_SERVER_01 // © {new Date().getFullYear()} Perioxia Tech
                    </div>
                    <div className="flex items-center gap-10">
                        <a href="#" className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy Stack</a>
                        <a href="#" className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-colors">Terms of Op</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
