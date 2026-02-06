"use client";

import MagneticButton from "./ui/MagneticButton";

export default function EarlyAccess() {
    return (
        <section className="flex flex-col md:flex-row min-h-[600px]">

            {/* LEFT: DARK */}
            <div className="w-full md:w-1/2 bg-bg-void p-12 md:p-24 flex flex-col justify-center">
                <h2 className="text-5xl md:text-7xl font-display text-accent-chartreuse mb-6 leading-[0.9]">
                    GET EARLY <br /> ACCESS
                </h2>
                <p className="text-xl text-white mb-12">
                    Join 12 companies on our exclusive waitlist. <br /> Launching Q2 2024.
                </p>

                <ul className="space-y-4 text-text-stone font-mono-tech text-sm">
                    <li className="flex items-center gap-3">
                        <span className="text-accent-chartreuse">✓</span> Priority Onboarding
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-accent-chartreuse">✓</span> Lifetime Discount (40% OFF)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-accent-chartreuse">✓</span> Direct Founder Access
                    </li>
                </ul>
            </div>

            {/* RIGHT: LIGHT */}
            <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
                <form className="max-w-md w-full space-y-8">

                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-black/50">Work Email</label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full border-b-2 border-black/10 py-4 text-2xl font-bold bg-transparent focus:outline-none focus:border-accent-chartreuse transition-colors placeholder:text-black/20 text-black"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-black/50">Company Name</label>
                        <input
                            type="text"
                            placeholder="Acme Corp"
                            className="w-full border-b-2 border-black/10 py-4 text-xl font-medium bg-transparent focus:outline-none focus:border-accent-chartreuse transition-colors placeholder:text-black/20 text-black"
                        />
                    </div>

                    <div className="pt-8">
                        <button type="button" className="w-full bg-accent-chartreuse py-5 text-black font-display text-xl uppercase tracking-wider hover:bg-black hover:text-accent-chartreuse transition-colors duration-300">
                            Join Waitlist
                        </button>
                    </div>

                    <p className="text-center text-xs text-black/40 pt-4">
                        Strict no-spam policy. Unsubscribe anytime.
                    </p>

                </form>
            </div>

        </section>
    );
}
