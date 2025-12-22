"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle, Sparkles, MapPin, Radio } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-32 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

          {/* Form Header & Description */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-amber-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-10"
              >
                <Radio size={16} className="text-amber-500 animate-pulse" />
                Collaborations
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1] mb-10">
                Start a <br /><span className="text-gradient italic">conversation.</span>
              </h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-sm">
                Engineering the machines of tomorrow requires the right cognitive
                architects. Tell us about your challenge.
              </p>
            </div>

            <div className="space-y-10 pt-10 border-t border-white/5">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-amber-500/30 group-hover:bg-amber-500/5 transition-all duration-500">
                  <Mail size={24} className="text-amber-500" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-2">Direct Inquiries</div>
                  <div className="text-xl font-bold group-hover:text-amber-400 transition-colors">hello@perioxia.tech</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-orange-500/30 group-hover:bg-orange-600/5 transition-all duration-500">
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-2">Studio</div>
                  <div className="text-xl font-bold group-hover:text-orange-400 transition-colors">Global / Remote Operations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-orange-600/5 rounded-[3rem] blur-3xl opacity-20 pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-12 lg:p-16 rounded-[3.5rem] relative z-10"
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-2">Lead Name</label>
                          <input
                            required
                            placeholder="John Doe"
                            className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-amber-500/40 focus:bg-white/[0.04] outline-none transition-all duration-500 font-light text-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-2">Company</label>
                          <input
                            required
                            placeholder="Engineering Corp"
                            className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-amber-500/40 focus:bg-white/[0.04] outline-none transition-all duration-500 font-light text-lg"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-2">Secure Email</label>
                        <input
                          required
                          type="email"
                          placeholder="lead@engineering.tech"
                          className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-amber-500/40 focus:bg-white/[0.04] outline-none transition-all duration-500 font-light text-lg"
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-2">Transmission Details</label>
                        <textarea
                          required
                          placeholder="Tell us about the project requirements..."
                          className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-amber-500/40 focus:bg-white/[0.04] outline-none transition-all duration-500 min-h-[220px] resize-none font-light text-lg"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-premium w-full group py-6 text-xl"
                      >
                        Transmit Inquiry
                        <Send size={22} className="ml-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="glass-card p-16 lg:p-24 rounded-[3.5rem] text-center relative z-10 border border-amber-500/20"
                  >
                    <div className="w-28 h-28 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-12 overflow-hidden relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 10, stiffness: 150, delay: 0.2 }}
                        className="relative z-10"
                      >
                        <CheckCircle className="text-amber-500" size={56} />
                      </motion.div>
                      <div className="absolute inset-0 bg-amber-500/20 blur-2xl animate-pulse" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 tracking-tight">Transmission Received</h3>
                    <p className="text-slate-400 text-xl font-light leading-relaxed max-w-md mx-auto">
                      Your inquiry has been logged into our secure stack.
                      A lead architect will coordinate a response shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-12 text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] hover:text-amber-400 transition-colors"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
