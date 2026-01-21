import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

export default function GalleryPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Header />

            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{siteConfig.gallery.title}</h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            {siteConfig.gallery.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {siteConfig.gallery.images.map((image, idx) => (
                            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-800">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-opacity duration-700 opacity-90 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
