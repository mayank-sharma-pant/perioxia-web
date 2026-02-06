<<<<<<< HEAD
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[--obsidian] border-t border-[--graphite]/30 pt-20 pb-10">
            <div className="container-custom">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">

                    {/* Left: Logo + Tagline */}
                    <div className="md:w-1/3">
                        <h3 className="font-display text-4xl text-[--ivory] mb-4 tracking-tight">
                            PERIOXIA
                        </h3>
                        <p className="text-[--silver] leading-relaxed mb-4">
                            Building the software that doesn't exist yet.
                        </p>
                        <p className="text-[--silver]/60 text-sm">
                            Based in India. Building globally.
                        </p>
                    </div>

                    {/* Center: Links */}
                    <div className="md:w-1/3">
                        <nav className="flex flex-col gap-4">
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Work
                            </Link>
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Capabilities
                            </Link>
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Company
                            </Link>
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Right: Social + Email */}
                    <div className="md:w-1/3">
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-12 h-12 border border-[--silver]/30 rounded-full flex items-center justify-center text-[--silver] hover:bg-[--lime] hover:text-[--obsidian] hover:border-[--lime] transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 border border-[--silver]/30 rounded-full flex items-center justify-center text-[--silver] hover:bg-[--lime] hover:text-[--obsidian] hover:border-[--lime] transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 border border-[--silver]/30 rounded-full flex items-center justify-center text-[--silver] hover:bg-[--lime] hover:text-[--obsidian] hover:border-[--lime] transition-all">
                                <Github size={20} />
                            </a>
                        </div>
                        <a href="mailto:hello@perioxia.tech" className="text-[--ivory] hover:text-[--lime] transition-colors">
                            hello@perioxia.tech
                        </a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[--graphite]/30 flex flex-col md:flex-row justify-between items-center text-sm text-[--silver]/60">
                    <div>&copy; 2024 Perioxia Technology</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-[--lime] transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-[--lime] transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-[--lime] transition-colors">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
=======
"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[rgba(10,14,39,0.95)] py-20">
      <div className="container mx-auto px-6 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <p className="text-xs font-mono-tech uppercase tracking-[0.4em] text-secondary">Initiate connection</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-display text-primary">
            Let&apos;s build something extraordinary.
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-xl">
            Ready to transform your infrastructure? Send a signal and our systems will respond within one business day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent-blue)] focus:outline-none"
            />
            <button className="rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950">
              Get started
            </button>
          </div>
          <p className="mt-4 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
            Or email: hello@perioxia.tech
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-lg font-display text-primary">Perioxia Technology</div>
          <p className="mt-4 text-sm text-secondary">
            Building critical infrastructure for next-generation enterprises. All systems operational.
          </p>
          <div className="mt-8 flex items-center gap-4">
            {[{ icon: Linkedin, href: "#" }, { icon: Twitter, href: "#" }, { icon: Github, href: "#" }].map(
              (social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              )
            )}
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
            All systems operational · © 2025
          </div>
        </div>
      </div>
    </footer>
  );
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
}
