"use client";

import { useRef, useState } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";
import { Twitter, Linkedin, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTAFooter() {
    const sectionRef = useRef(null);
    const [email, setEmail] = useState("");

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cta-content > *", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="relative">

            {/* CTA */}
            <div className="py-32 bg-bg-elevated/30 relative overflow-hidden">

                {/* Background gradient */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-neon-violet/10 via-transparent to-transparent rounded-full blur-3xl" />
                </div>

                <div className="container-precision relative z-10">
                    <div className="cta-content max-w-3xl mx-auto text-center">

                        <h2 className="font-display text-4xl md:text-6xl text-text-primary mb-6">
                            LET'S BUILD SOMETHING
                            <br />
                            <span className="gradient-text">EXTRAORDINARY</span>
                        </h2>

                        <p className="text-lg text-text-secondary mb-12">
                            Ready to transform your infrastructure?
                        </p>

                        {/* Email Form */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <div className="relative group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-80 px-6 py-4 bg-bg-surface border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyber-blue transition-colors"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-blue to-neon-violet opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity pointer-events-none" />
                            </div>

                            <MagneticButton className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-plasma-pink text-bg-deep font-bold rounded-lg whitespace-nowrap">
                                Get Started →
                            </MagneticButton>
                        </div>

                        <p className="text-text-muted text-sm">
                            Or email:{" "}
                            <a href="mailto:hello@perioxia.tech" className="text-cyber-blue hover:underline">
                                hello@perioxia.tech
                            </a>
                        </p>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-10 bg-bg-deep border-t border-border-subtle">
                <div className="container-precision">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <span className="font-display text-xl gradient-text">PERIOXIA</span>
                            <span className="text-text-muted">|</span>
                            <span className="text-sm text-text-secondary">Building tomorrow's infrastructure</span>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-cyber-blue hover:border-cyber-blue transition-colors"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2">
                            <div className="status-dot" />
                            <span className="text-sm text-text-muted">All systems operational</span>
                        </div>

                    </div>

                    <div className="mt-8 text-center text-text-muted text-xs">
                        © 2025 Perioxia Technology. All rights reserved.
                    </div>
                </div>
            </footer>

        </section>
    );
}
