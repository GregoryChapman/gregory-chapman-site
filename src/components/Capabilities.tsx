import { siteConfig } from "@/config/siteConfig";
import { Cpu, Presentation, BarChart3, Landmark } from "lucide-react";

const iconMap: Record<string, any> = {
    Cpu,
    Presentation,
    BarChart3,
    Landmark,
};

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 bg-navy-800/30">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-cobalt-400 font-semibold tracking-wider uppercase text-sm">Focus Areas</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">How I Think About Work</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteConfig.capabilities.map((cap, idx) => {
                        const Icon = iconMap[cap.icon] || Cpu;
                        return (
                            <div key={idx} className="bg-navy-900 border border-white/5 p-6 rounded-2xl hover:border-cobalt-500/30 transition-all group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-cobalt-500/10 rounded-lg flex items-center justify-center text-cobalt-400 mb-6 group-hover:bg-cobalt-500 group-hover:text-white transition-colors">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
