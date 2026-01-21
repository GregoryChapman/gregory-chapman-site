import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Header />
            <Hero />
            <About />
            <Writing />
            <Contact />
            <Footer />
        </main>
    );
}
