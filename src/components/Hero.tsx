import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-cobalt-500 blur-[120px]" />
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-300 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-slide-up">
                    <div className="inline-block px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-cobalt-400 text-xs font-semibold tracking-wide uppercase">
                        Building / Teaching / Learning
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {siteConfig.hero.headline}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                        {siteConfig.hero.subheadline}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {siteConfig.hero.ctas.map((cta, idx) => (
                            <Link
                                key={idx}
                                href={cta.href}
                                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${cta.primary
                                    ? "bg-cobalt-500 hover:bg-cobalt-400 text-white shadow-lg shadow-cobalt-500/25"
                                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                    }`}
                            >
                                {cta.label}
                                {cta.primary && (
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Hero Visual / Headshot */}
                <div className="relative animate-fade-in delay-200 hidden md:block">
                    {/* Geometric Decoration */}
                    <div className="absolute inset-0 border-2 border-white/5 rounded-2xl rotate-3 scale-105 z-0" />
                    <div className="relative z-10 bg-navy-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src={siteConfig.hero.headshot}
                            alt="Gregory Chapman"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
