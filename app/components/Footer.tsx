import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[--obsidian] border-t border-[--graphite]/30 pt-20 pb-10">
            <div className="container-custom">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">

                    {/* Left: Logo + Tagline */}
                    <div className="md:w-1/3">
                        <h3 className="font-display text-4xl text-[--ivory] mb-4 tracking-tight">
                            PERIOXIA
                        </h3>
                        <p className="text-[--silver] leading-relaxed mb-4">
                            Building the software that doesn't exist yet.
                        </p>
                        <p className="text-[--silver]/60 text-sm">
                            Based in India. Building globally.
                        </p>
                    </div>

                    {/* Center: Links */}
                    <div className="md:w-1/3">
                        <nav className="flex flex-col gap-4">
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Work
                            </Link>
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Capabilities
                            </Link>
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Company
                            </Link>
                            <Link href="#" className="text-[--silver] hover:text-[--lime] transition-colors text-lg">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Right: Social + Email */}
                    <div className="md:w-1/3">
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-12 h-12 border border-[--silver]/30 rounded-full flex items-center justify-center text-[--silver] hover:bg-[--lime] hover:text-[--obsidian] hover:border-[--lime] transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 border border-[--silver]/30 rounded-full flex items-center justify-center text-[--silver] hover:bg-[--lime] hover:text-[--obsidian] hover:border-[--lime] transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 border border-[--silver]/30 rounded-full flex items-center justify-center text-[--silver] hover:bg-[--lime] hover:text-[--obsidian] hover:border-[--lime] transition-all">
                                <Github size={20} />
                            </a>
                        </div>
                        <a href="mailto:hello@perioxia.tech" className="text-[--ivory] hover:text-[--lime] transition-colors">
                            hello@perioxia.tech
                        </a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[--graphite]/30 flex flex-col md:flex-row justify-between items-center text-sm text-[--silver]/60">
                    <div>&copy; 2024 Perioxia Technology</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-[--lime] transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-[--lime] transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-[--lime] transition-colors">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
