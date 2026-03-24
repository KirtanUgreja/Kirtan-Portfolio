import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kirtan Ugreja — Creative Developer × AI",
    description:
        "Portfolio of Kirtan Ugreja — Creative Developer specializing in AI-powered automation, intelligent systems, and cutting-edge web experiences. Where code meets creativity and AI.",
    keywords: [
        "Kirtan Ugreja",
        "Creative Developer",
        "AI Developer",
        "Portfolio",
        "Business Automation",
        "Next.js",
        "GSAP",
    ],
    authors: [{ name: "Kirtan Ugreja" }],
    openGraph: {
        title: "Kirtan Ugreja — Creative Developer × AI",
        description:
            "Where code meets creativity and AI. Building intelligent systems and stunning digital experiences.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
