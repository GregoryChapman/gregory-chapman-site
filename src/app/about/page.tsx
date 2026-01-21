import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata: Metadata = {
    title: "About | Gregory Chapman",
    description: "Background in public sector modernization, AI-enabled systems, and working within regulated environments.",
};

export default function AboutPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Header />
            <div className="pt-20">
                <About />
            </div>
            <Footer />
        </main>
    );
}
