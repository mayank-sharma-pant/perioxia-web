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
}
