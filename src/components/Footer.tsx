import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-navy-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} {siteConfig.header.title}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
