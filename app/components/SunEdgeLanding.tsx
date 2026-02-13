'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    title: 'CRM Software',
    description:
      'Enterprise-grade customer intelligence platforms engineered for automation, scale, and precision decision-making.',
  },
  {
    title: 'IT Projects',
    description:
      'Full-cycle digital transformation programs spanning architecture, development, cloud migration, and systems integration.',
  },
  {
    title: 'Hardware Solutions',
    description:
      'Mission-critical infrastructure, edge systems, and secure hardware ecosystems for resilient high-performance operations.',
  },
];

const projects = [
  'Autonomous CRM Intelligence Suite',
  'Smart Operations Command Dashboard',
  'Cloud Security Mesh Deployment',
  'Predictive Hardware Monitoring Platform',
  'Enterprise API Fusion Layer',
  'AI-Assisted Service Delivery Core',
];

export default function SunEdgeLanding() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card as Element,
        {
          x: index % 2 === 0 ? -80 : 80,
          y: 30,
          opacity: 0,
          filter: 'blur(10px)',
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 88%',
            end: 'top 40%',
            scrub: 0.9,
          },
        },
      );
    });

    gsap.to('.parallax-glow', {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#07070A] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(56,182,255,0.22),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(255,79,216,0.16),transparent_40%)]" />

      <section className="relative flex min-h-screen items-center px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-blue-200 backdrop-blur-md">
              SunEdge IT Solution
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Powering the Future of Intelligent Technology
            </h1>
            <p className="text-sm tracking-[0.3em] text-zinc-300 md:text-base">
              CRM Software • IT Projects • Hardware Infrastructure
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="rounded-full border border-[#7B5CFF]/40 bg-[#7B5CFF]/20 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(123,92,255,0.45)] transition hover:-translate-y-0.5 hover:bg-[#7B5CFF]/35">
                Explore Solutions
              </button>
              <button className="rounded-full border border-white/25 bg-white/8 px-7 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-xl transition hover:border-[#38B6FF]/70 hover:text-white">
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur-2xl"
          >
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Realtime Intelligence Layer</p>
              <div className="h-44 rounded-2xl border border-[#38B6FF]/25 bg-gradient-to-br from-[#38B6FF]/15 via-transparent to-[#FF4FD8]/15" />
              <p className="text-sm leading-relaxed text-zinc-300">
                Architecting premium digital ecosystems where software, infrastructure, and intelligent automation converge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Core Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.article
                whileHover={{ y: -8 }}
                key={service.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-[#7B5CFF]/70 hover:shadow-[0_0_40px_rgba(123,92,255,0.2)]"
              >
                <h3 className="mb-4 text-2xl font-medium">{service.title}</h3>
                <p className="text-zinc-300">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1 }}
          className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/12 bg-white/[0.03] p-10 backdrop-blur-2xl md:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-blue-200">About SunEdge</p>
            <h2 className="mb-4 text-3xl font-semibold">Built for trust, engineered for scale.</h2>
            <p className="text-zinc-300">
              We partner with modern enterprises to launch secure, scalable, and futuristic technology products with measurable business outcomes.
            </p>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p>• 10+ years combined enterprise technology delivery expertise.</p>
            <p>• Multi-domain capability across product, infrastructure, and intelligent systems.</p>
            <p>• Placeholder for certifications, clients, and strategic proof points.</p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#38B6FF]/35 bg-gradient-to-r from-white/[0.05] to-[#38B6FF]/[0.08] p-8 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-300">Affiliate Company</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Perioxia Technologies</h3>
          <p className="mt-3 max-w-3xl text-zinc-300">Focused on next-generation digital products, automation frameworks, and future-ready enterprise innovation systems.</p>
        </div>
      </section>

      <section ref={projectsRef} className="relative px-6 py-24 md:px-12 lg:px-20">
        <div className="parallax-glow pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7B5CFF]/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Projects Showcase</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project}
                className="project-card rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <p className="text-lg font-medium text-zinc-100">{project}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-10 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#FF4FD8]/30 bg-gradient-to-r from-[#7B5CFF]/15 to-[#FF4FD8]/10 p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-semibold md:text-5xl">Let&apos;s Build the Future Together</h2>
          <button className="mt-7 rounded-full border border-[#FF4FD8]/40 bg-[#FF4FD8]/20 px-8 py-3 font-semibold shadow-[0_0_35px_rgba(255,79,216,0.45)] transition hover:-translate-y-0.5 hover:bg-[#FF4FD8]/35">
            Start a Project
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SunEdge IT Solution. All rights reserved.</p>
          <p className="text-zinc-500">Intelligence. Infrastructure. Innovation.</p>
        </div>
      </footer>
    </main>
  );
}
