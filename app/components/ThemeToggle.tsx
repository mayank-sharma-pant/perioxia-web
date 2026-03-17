"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "perioxia-theme";

type ThemeMode = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-primary transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
    </button>
  );
}
