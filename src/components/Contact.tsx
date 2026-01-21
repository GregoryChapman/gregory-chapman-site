import { siteConfig } from "@/config/siteConfig";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Elsewhere</h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold transition-all shadow-lg hover:shadow-cobalt-500/25"
                    >
                        <Mail size={20} />
                        Send an Email
                    </Link>
                    <Link
                        href={siteConfig.contact.linkedin}
                        target="_blank"
                        className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-navy-800 border border-white/10 hover:bg-navy-700 text-white font-medium transition-all"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    );
}
