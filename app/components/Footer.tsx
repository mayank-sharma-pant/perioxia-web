"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const footerLinks = [
  { label: "About Us", href: "#approach" },
  { label: "Services", href: "#what-we-do" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[var(--bg-surface)]">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
        {/* Left: CTA + email */}
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Let&apos;s build something extraordinary.
          </h2>
          <p className="mt-4 text-sm text-secondary max-w-xl">
            Ready to transform your infrastructure? We&apos;ll respond within
            one business day.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm text-primary placeholder:text-secondary/60 focus:border-[var(--accent)] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent)]/90 transition-colors"
            >
              {submitted ? "Sent ✓" : "Send Signal"}
            </button>
          </form>
          <p className="mt-3 text-xs text-secondary">
            {submitted
              ? "Thanks! We'll get back to you shortly."
              : "Or email: hello@perioxia.tech"}
          </p>
        </div>

        {/* Right: Company info */}
        <div className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-8">
          <div className="text-lg font-semibold text-primary">
            Perioxia Technology
          </div>
          <p className="mt-3 text-sm text-secondary">
            Building critical infrastructure for next-generation enterprises.
          </p>

          {/* Navigation */}
          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-xs text-secondary hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-3">
              Connect
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-secondary hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            All systems operational
          </div>
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} Perioxia Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
