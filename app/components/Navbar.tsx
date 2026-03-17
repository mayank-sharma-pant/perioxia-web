"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2, // Slight delay to let hero elements load first if desired
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--bg)]/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link 
          href="/" 
          onClick={(e) => handleScroll(e, "body")}
          className="text-sm uppercase tracking-[0.3em] text-primary font-semibold hover:text-[var(--accent)] transition-colors"
        >
          Perioxia
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="/"
            onClick={(e) => handleScroll(e, "body")}
            className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
          >
            Home
          </a>
          <a
            href="#approach"
            onClick={(e) => handleScroll(e, "#approach")}
            className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
          >
            About Us
          </a>
          <a
            href="#what-we-do"
            onClick={(e) => handleScroll(e, "#what-we-do")}
            className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
          >
            Projects
          </a>
          <a
            href="#process"
            onClick={(e) => handleScroll(e, "#process")}
            className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
          >
            Process
          </a>
          <a
            href="#stats"
            onClick={(e) => handleScroll(e, "#stats")}
            className="text-sm font-medium text-secondary hover:text-[var(--accent)] transition-colors"
          >
            Stats
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-semibold text-white hover:bg-[var(--accent)]/90 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
