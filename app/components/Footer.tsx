"use client";

import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
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
        </div>
      </div>
    </footer>
  );
}
