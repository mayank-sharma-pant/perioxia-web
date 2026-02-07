"use client";

import MagneticButton from "../ui/MagneticButton";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-32 bg-pure-black border-t border-charcoal relative overflow-hidden">

            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 gradient-mesh" />
            </div>

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container-custom max-w-5xl text-center relative z-10">

                {/* Headline */}
                <h2 className="font-display text-[clamp(3rem,8vw,6rem)] text-almost-white mb-8 leading-[0.95]">
                    READY TO DOMINATE
                    <br />
                    <span className="text-gradient-primary text-glow">AI SEARCH?</span>
                </h2>

                {/* Subheadline */}
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Get early access to Visiblo and gain unfair visibility
                    <br />
                    in the AI-powered internet
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-32">
                    <MagneticButton className="bg-gradient-to-r from-indigo to-violet text-white px-12 py-6 text-xl font-bold uppercase tracking-wide glow-indigo">
                        Request Demo →
                    </MagneticButton>

                    <button className="text-almost-white border border-zinc-600 px-12 py-6 text-xl font-bold uppercase tracking-wide hover:border-indigo transition-colors">
                        View Pricing
                    </button>
                </div>

                {/* Footer */}
                <footer className="pt-16 border-t border-charcoal">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-12">

                        {/* Left: Logo + tagline */}
                        <div>
                            <h3 className="font-display text-3xl text-almost-white mb-3">
                                PERIOXIA
                            </h3>
                            <p className="text-zinc-600 text-sm">
                                Building critical infrastructure for the AI-first enterprise.
                            </p>
                        </div>

                        {/* Center: Contact */}
                        <div>
                            <div className="text-xs text-zinc-600 uppercase tracking-wider mb-3">
                                Contact
                            </div>
                            <a
                                href="mailto:hello@perioxia.tech"
                                className="text-indigo hover:text-violet transition-colors"
                            >
                                hello@perioxia.tech
                            </a>
                        </div>

                        {/* Right: Social */}
                        <div>
                            <div className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
                                Connect
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 border border-zinc-600 rounded-full flex items-center justify-center text-zinc-400 hover:bg-indigo hover:text-white hover:border-indigo transition-all"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 border border-zinc-600 rounded-full flex items-center justify-center text-zinc-400 hover:bg-indigo hover:text-white hover:border-indigo transition-all"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 border border-zinc-600 rounded-full flex items-center justify-center text-zinc-400 hover:bg-indigo hover:text-white hover:border-indigo transition-all"
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom bar */}
                    <div className="pt-8 border-t border-charcoal/50 text-center">
                        <p className="text-zinc-600 text-sm">
                            © 2025 Perioxia Technology. All systems operational.
                        </p>
                    </div>
                </footer>

            </div>
        </section>
    );
}
