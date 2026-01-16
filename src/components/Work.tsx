import { siteConfig } from "@/config/siteConfig";

export default function Work() {
    return (
        <section id="work" className="py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{siteConfig.work.title}</h2>
                    <p className="text-slate-400 max-w-2xl">
                        A mix of professional projects, experiments, and ideas I’ve been exploring lately.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.work.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl bg-navy-800 border border-white/5 hover:border-white/10 transition-all cursor-default"
                        >
                            <div className="p-8 h-full flex flex-col items-start justify-between min-h-[240px]">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cobalt-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
