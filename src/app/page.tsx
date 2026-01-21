import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Gregory Chapman | Public Sector Systems & AI",
    description: "Work at the intersection of public systems, technology, and decision-making. Focused on AI, governance, and institutional design in Canada.",
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Gregory Chapman",
        url: "https://gregorychapman.ca",
        sameAs: ["https://www.linkedin.com/in/gregory-chapman-a69a8919a/"],
        jobTitle: "Senior Solutions Engineer",
        description: "Focused on public sector systems, AI, and decision-making",
    };

    return (
        <main className="bg-navy-900 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <Hero />
            <About />
            <Writing />
            <Contact />
            <Footer />
        </main>
    );
}
