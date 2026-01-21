import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for clean, modern look
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Gregory Chapman",
        default: "Gregory Chapman | Public Sector Systems & AI",
    },
    description: "Work at the intersection of public systems, technology, and decision-making.",
    metadataBase: new URL("https://gregorychapman.ca"),
    openGraph: {
        type: "website",
        locale: "en_CA",
        url: "https://gregorychapman.ca",
        siteName: "Gregory Chapman",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
