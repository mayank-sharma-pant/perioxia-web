"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-[rgba(10,14,39,0.95)] py-20"
    >
      <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT — CONTACT CTA */}
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-secondary">
            Initiate connection
          </p>

          <h2 className="mt-6 text-4xl font-display text-primary sm:text-5xl">
            Let&apos;s build something extraordinary.
          </h2>

          <p className="mt-4 max-w-xl text-lg text-secondary">
            Ready to transform your infrastructure? Send a signal and our
            systems will respond within one business day.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent-blue)] focus:outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950"
            >
              INITIATE CONTACT
            </button>
          </form>

          <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-secondary">
            {submitted ? "Signal received." : "Or email: hello@perioxia.tech"}
          </p>
        </div>

        {/* RIGHT — BRAND / STATUS */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-lg font-display text-primary">
            Perioxia Technology
          </div>

          <p className="mt-4 text-sm text-secondary">
            Building critical infrastructure for next-generation enterprises.
          </p>

          {/* SOCIAL */}
          <div className="mt-8 flex gap-4">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-secondary transition hover:border-[var(--accent-blue)] hover:text-primary"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>

          {/* STATUS */}
          <div className="mt-10 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-secondary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-lime)]" />
            All systems operational ● © 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
