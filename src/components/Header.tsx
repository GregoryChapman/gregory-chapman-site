"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-navy-900/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white hover:text-sky-300 transition-colors"
                >
                    {siteConfig.header.title}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.header.navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={siteConfig.header.cta.href}
                        className="px-5 py-2 rounded-full bg-cobalt-500 hover:bg-cobalt-400 text-white text-sm font-medium transition-all shadow-md hover:shadow-cobalt-500/20"
                    >
                        {siteConfig.header.cta.label}
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900 border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
                    {siteConfig.header.navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={siteConfig.header.cta.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-5 py-3 rounded-md bg-cobalt-500 text-white text-center font-medium"
                    >
                        {siteConfig.header.cta.label}
                    </Link>
                </div>
            )}
        </header>
    );
}
