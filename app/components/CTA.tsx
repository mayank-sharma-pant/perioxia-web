"use client";

import MagneticButton from "./ui/MagneticButton";

export default function CTA() {
    return (
        <section className="py-32 bg-gradient-to-br from-[--lime] via-[--magenta] to-[--electric-blue] relative overflow-hidden">

            {/* Animated Blob Shapes (CSS-only) */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[--obsidian] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--obsidian] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[--obsidian] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container-custom max-w-5xl mx-auto text-center relative z-10">

                {/* Headline */}
                <h2 className="font-display text-[clamp(3.5rem,10vw,6.25rem)] text-[--obsidian] leading-[0.95] mb-12">
                    READY TO BUILD
                    <br />
                    SOMETHING
                    <br />
                    EXCEPTIONAL?
                </h2>

                {/* Subheadline */}
                <p className="text-[clamp(1.25rem,2.5vw,1.375rem)] text-[--obsidian]/80 max-w-3xl mx-auto leading-relaxed mb-16">
                    We're selective about the projects we take on. If you're working on something ambitious
                    and need a partner who thinks long-term, let's talk.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                    <MagneticButton className="bg-[--obsidian] text-[--lime] px-12 py-6 text-xl font-bold uppercase tracking-wide hover:shadow-[0_0_60px_rgba(11,11,15,0.4)] transition-shadow">
                        Start a Conversation
                    </MagneticButton>

                    <a href="mailto:hello@perioxia.tech" className="text-[--obsidian] text-xl font-bold underline hover:no-underline transition-all">
                        hello@perioxia.tech
                    </a>
                </div>

            </div>
        </section>
    );
}
