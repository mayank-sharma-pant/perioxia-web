"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/", target: "body" },
  { label: "About Us", href: "#what-we-do", target: "#what-we-do" },
  { label: "What We Build", href: "#what-we-do", target: "#what-we-do" },
  { label: "Products", href: "#products", target: "#products" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);


  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--glass-border)] bg-[var(--bg-dark)]/60 backdrop-blur-xl"
            : "bg-[var(--bg-dark)]/40 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6 h-20 pt-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            onClick={(e) => handleScroll(e, "body")}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.target)}
                className="nav-link text-sm font-medium text-primary hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-semibold text-white hover:bg-[var(--accent)]/90 transition-colors"
            >
              Contact
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg border border-white/10 text-primary hover:border-[var(--accent)] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              className="absolute top-16 left-0 right-0 border-b border-white/10 bg-[var(--bg-dark)]/95 backdrop-blur-md py-6 px-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.target)}
                    className="nav-link w-fit text-base font-medium text-primary hover:text-[var(--accent)] transition-colors py-2 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent)]/90 transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
