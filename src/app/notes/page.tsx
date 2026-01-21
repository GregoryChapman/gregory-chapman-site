import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Writing from "@/components/Writing";

export const metadata: Metadata = {
    title: "Notes | Gregory Chapman",
    description: "Short reflections on public systems, technology, AI, and institutional decision-making.",
};

export default function NotesPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Header />
            <div className="pt-20">
                <Writing />
            </div>
            <Footer />
        </main>
    );
}
