"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Logo from "./Logo";

const footerLinks = [
  { label: "About Us", href: "#approach" },
  { label: "Services", href: "#what-we-do" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/917042701064" },
  { label: "Email", href: "mailto:info@perioxia.com" },
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "LinkedIn", href: "https://linkedin.com/company/perioxia" },
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
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
            Building critical infrastructure for the AI-first internet.
          </h2>
          <p className="mt-4 text-sm text-secondary max-w-xl">
            Ready to transform your infrastructure? We&apos;ll respond within
            one business day.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:max-w-xs rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent)] focus:outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent)]/90 transition-colors"
            >
              {submitted ? "Sent ✓" : "Send Signal"}
            </button>
          </form>
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-xs text-secondary">
              {submitted
                ? "Thanks! We'll get back to you shortly."
                : "Or email: info@perioxia.com"}
            </p>
          </div>
        </div>

        {/* Right: Company info */}
        <div className="rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-10">
          <Logo className="mb-6" />
          <p className="mt-3 text-sm text-secondary leading-relaxed">
            Developing the software products and intelligent systems that lead the AI-first economy.
          </p>

          {/* Connect (Social & Links) */}
          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-3">
              Connect
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
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
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-secondary/80">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]" />
            All systems operational
          </div>
          <p className="text-xs text-secondary/60">
            © {new Date().getFullYear()} Perioxia Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
