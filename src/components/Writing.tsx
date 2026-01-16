import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { MoveUpRight } from "lucide-react";

export default function Writing() {
    return (
        <section id="writing" className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">{siteConfig.writing.title}</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {siteConfig.writing.description}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href={siteConfig.writing.substackUrl}
                                target="_blank"
                                className="px-6 py-3 rounded-full bg-white text-navy-900 font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
                            >
                                Read on Substack
                                <MoveUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {siteConfig.writing.posts.map((post, idx) => (
                            <Link
                                key={idx}
                                href={post.href}
                                className="block p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-slate-200 group-hover:text-white">
                                        {post.title}
                                    </h3>
                                    <span className="text-slate-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        Read &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
