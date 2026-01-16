import { siteConfig } from "@/config/siteConfig";

export default function Credibility() {
    return (
        <section className="py-12 border-y border-white/5 bg-navy-900/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {siteConfig.credibility.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center">
                            <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base text-slate-500 font-medium mt-1">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
