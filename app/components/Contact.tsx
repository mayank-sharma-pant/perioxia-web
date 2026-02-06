"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLElement | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        xPercent: 12,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={container} id="contact" className="relative py-20 border-t border-white/10">
      <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="contact-item">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Contact us</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">Start a conversation.</h2>
          <p className="mt-4 text-sm text-secondary max-w-xl">
            If you are building AI systems or data platforms and need a reliable engineering partner, we would love to
            hear from you.
          </p>
        </div>

        <div className="contact-item rounded-2xl border border-white/10 bg-surface p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-secondary">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent)] focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-secondary">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent)] focus:outline-none"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-secondary">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[var(--accent)] focus:outline-none h-32 resize-none"
                placeholder="Tell us what you're building"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {submitted && <p className="text-sm text-secondary">Thanks. We will get back to you shortly.</p>}
            {error && <p className="text-sm text-red-400">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
