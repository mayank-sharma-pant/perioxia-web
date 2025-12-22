"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Send, MapPin, Mail, Radio } from "lucide-react";

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
    let ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
      setForm({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      setError("Transmission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section ref={container} id="contact" className="relative py-32 bg-void overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">

        <div className="lg:col-span-5 space-y-12">
          <div className="contact-reveal">
            <div className="flex items-center gap-3 text-accent-signal font-mono-tech text-xs tracking-widest mb-6">
              <Radio size={14} className="animate-pulse" />
              SECURE_CHANNEL
            </div>
            <h2 className="text-6xl font-black text-white leading-[0.9] uppercase">
              Initialise <br /> Uplink.
            </h2>
          </div>

          <p className="contact-reveal text-text-secondary text-lg font-light leading-relaxed max-w-sm">
            Engineering the machines of tomorrow requires the right cognitive architects. Transmit your coordinates.
          </p>

          <div className="contact-reveal space-y-8 pt-8 border-t border-white/10">
            <div className="flex items-start gap-4">
              <Mail className="text-accent-signal mt-1" size={20} />
              <div>
                <div className="text-[10px] font-mono-tech text-white/50 uppercase mb-1">DIRECT_INQUIRY</div>
                <div className="text-xl text-white font-bold">hello@perioxia.tech</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-accent-signal mt-1" size={20} />
              <div>
                <div className="text-[10px] font-mono-tech text-white/50 uppercase mb-1">GLOBAL_HQ</div>
                <div className="text-xl text-white font-bold">Remote Operations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 contact-reveal">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/[0.02] border border-white/5 p-12 backdrop-blur-sm relative blueprint-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech text-white/50 uppercase">IDENTITY</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name / Callsign"
                    className="w-full bg-void border-b border-white/10 focus:border-accent-signal py-4 text-white outline-none transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech text-white/50 uppercase">ORG_ID</label>
                  <input
                    required
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full bg-void border-b border-white/10 focus:border-accent-signal py-4 text-white outline-none transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono-tech text-white/50 uppercase">COMMS_ADDRESS</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-void border-b border-white/10 focus:border-accent-signal py-4 text-white outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono-tech text-white/50 uppercase">PACKET_DATA</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Project Parameters..."
                  className="w-full bg-void border-b border-white/10 focus:border-accent-signal py-4 text-white outline-none transition-colors h-32 resize-none placeholder:text-white/20"
                />
              </div>

              <button type="submit" className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-mono-tech text-xs tracking-widest uppercase hover:bg-accent-signal hover:text-white transition-colors duration-300 w-full justify-center">
                TRANSMIT DATA <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Decorators */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-20 border border-white/10 bg-white/[0.02] text-center">
              <div className="text-accent-signal mb-6">
                <Radio size={48} className="animate-pulse mx-auto" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">TRANSMISSION RECEIVED</h3>
              <p className="text-text-secondary max-w-sm mx-auto mb-8">
                Your packet has been logged in our secure stack. Stand by for response.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-white/50 hover:text-white font-mono-tech text-xs underline decoration-accent-signal underline-offset-4">
                RESET_CONNECTION
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
