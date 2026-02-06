"use client";

<<<<<<< HEAD
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
=======
import type { FormEvent } from "react";
import { useState } from "react";
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
<<<<<<< HEAD
    <footer className="py-10 bg-bg-deep border-t border-border-subtle">
      <div className="container-precision">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <span className="font-display text-xl gradient-text">PERIOXIA</span>
            <span className="text-text-muted">|</span>
            <span className="text-sm text-text-secondary">Building tomorrow&apos;s infrastructure</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-cyber-blue hover:border-cyber-blue transition-colors"
              >
                <social.icon size={18} />
              </Link>
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
=======
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
          <form className="mt-10 flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent-blue)] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950"
            >
              INITIATE CONTACT
            </button>
          </form>
          <p className="mt-4 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
            {submitted ? "Signal received." : "Or email: hello@perioxia.tech"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-lg font-display text-primary">Perioxia Technology</div>
          <p className="mt-4 text-sm text-secondary">
            Building critical infrastructure for next-generation enterprises. All systems operational.
          </p>
          <div className="mt-8 grid gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
            <a href="#" className="hover:text-primary transition">LinkedIn</a>
            <a href="#" className="hover:text-primary transition">Twitter</a>
            <a href="#" className="hover:text-primary transition">GitHub</a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-secondary">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
            All systems operational ● © 2025
          </div>
>>>>>>> a0f7e15e6b63523bfe89b36df0621caa0c2fa918
        </div>
      </div>
    </footer>
  );
}
