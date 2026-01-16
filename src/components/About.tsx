import { siteConfig } from "@/config/siteConfig";

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cobalt-500 pl-4">
                    {siteConfig.about.title}
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                    {siteConfig.about.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
