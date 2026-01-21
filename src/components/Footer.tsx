import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-navy-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} {siteConfig.header.title}. All rights reserved.
                    <span className="mx-2">|</span>
                    <a
                        href="https://www.chapmandigitalservices.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-400 transition-colors"
                    >
                        Built by Chapman Digital Services
                    </a>
                </p>
            </div>
        </footer>
    );
}
