"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Send, Mail, Terminal, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLElement | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
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
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
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
      setForm({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      setError("Transmission failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={container} id="contact" className="relative py-24 bg-bg-void border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

        {/* LEFT: Context */}
        <div className="lg:col-span-5 space-y-10 contact-item">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-1 mb-6 border border-white/10 bg-white/5 rounded text-xs font-mono text-text-secondary">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span>CHANNEL_OPEN</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Initiate <br /> Protocol.
            </h2>
          </div>

          <p className="text-text-secondary text-lg font-light leading-relaxed max-w-md">
            Whether you are scaling an existing cognitive layer or architecting a new one from scratch.
            Direct communication ensures clarity.
          </p>

          <div className="pt-8 border-t border-white/10">
            <div className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 border border-white/10 bg-white/5 rounded-full flex items-center justify-center group-hover:border-white/30 transition-colors">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-wider opacity-60">Secure Transmission</span>
                <span className="font-medium">contact@perioxia.tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="lg:col-span-7 contact-item">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-secondary ml-1 uppercase">Identify</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Subject Name"
                    className="w-full bg-bg-panel border border-white/10 rounded-none px-4 py-3 text-text-primary placeholder:text-white/10 focus:border-white/30 focus:bg-white/5 outline-none transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-secondary ml-1 uppercase">Organization</label>
                  <input
                    required
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Entity Name"
                    className="w-full bg-bg-panel border border-white/10 rounded-none px-4 py-3 text-text-primary placeholder:text-white/10 focus:border-white/30 focus:bg-white/5 outline-none transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-text-secondary ml-1 uppercase">Return Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className="w-full bg-bg-panel border border-white/10 rounded-none px-4 py-3 text-text-primary placeholder:text-white/10 focus:border-white/30 focus:bg-white/5 outline-none transition-all font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-text-secondary ml-1 uppercase">Parameters</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Outline operational requirements..."
                  className="w-full bg-bg-panel border border-white/10 rounded-none px-4 py-3 text-text-primary placeholder:text-white/10 focus:border-white/30 focus:bg-white/5 outline-none transition-all font-light h-32 resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-white text-black px-8 py-3 font-semibold text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Execute Send"}
                  {!loading && <ArrowRight size={16} />}
                </button>
                {error && <p className="mt-4 text-red-400 text-sm font-mono">{error}</p>}
              </div>

            </form>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 border border-white/10 bg-white/[0.02]">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Terminal size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Acknowledged.</h3>
              <p className="text-text-secondary text-center mb-8 font-light">
                Your transmission has been logged. Expect a response sequence shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-xs font-mono text-text-secondary border-b border-transparent hover:border-text-secondary transition-all pb-0.5">
                RESET_FORM
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
