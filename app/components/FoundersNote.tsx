"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FoundersNote() {
    return (
        <section className="bg-bg-cream text-black py-32 relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                <div className="absolute -top-10 -left-10 text-accent-chartreuse opacity-100">
                    <Quote size={120} fill="#CCFF00" color="#CCFF00" />
                </div>

                <div className="text-center mb-16 relative">
                    <h2 className="text-5xl md:text-6xl font-display text-black mb-4">WHY WE'RE BUILDING THIS</h2>
                    <div className="h-1 w-20 bg-accent-chartreuse mx-auto" />
                </div>

                <div className="prose prose-lg md:prose-xl mx-auto text-black/80 font-serif leading-relaxed">
                    <p className="mb-8">
                        Six months ago, we noticed something strange.
                    </p>
                    <p className="mb-8">
                        Our clients were getting great SEO rankings, but their traffic was dropping.
                        People weren't clicking through from Google anymore. <strong>They were asking ChatGPT instead.</strong>
                    </p>
                    <p className="mb-8">
                        And when we tested it, we found something alarming: these AI platforms rarely mentioned our clients' brands,
                        even when they were the best solution.
                    </p>
                    <p className="mb-8">
                        The internet is changing. Search engines are dying. AI is the new front door to information.
                        And businesses have zero visibility into this new world.
                    </p>
                    <p className="mb-12 font-bold text-black border-l-4 border-accent-chartreuse pl-6 py-2">
                        So we're building Visiblo.
                    </p>
                    <p className="mb-8">
                        We're a small team. This is our first product. But we're obsessed with solving this problem because
                        we believe it's one of the most important shifts in digital marketing history.
                    </p>
                    <p>
                        If you're an early adopter, if you see what's coming, if you want to be ahead of the curve — join us.
                    </p>

                    <div className="mt-16 pt-8 border-t border-black/10 text-right font-display text-xl uppercase tracking-widest">
                        — The Perioxia Team
                    </div>
                </div>

            </div>
        </section>
    );
}
