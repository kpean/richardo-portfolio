import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";
import { CategoryFilterProvider } from "@/components/CategoryFilterProvider";
import { ConditionalNavbar } from "@/components/layout/ConditionalNavbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Richardo Kevin | Video Editor Portfolio",
    template: "%s | Richardo Kevin",
  },
  description: "Video editor based in Bali creating cinematic stories for brands, businesses, and creators. Specializing in commercial, YouTube, and wedding video editing.",
  keywords: ["video editor", "Bali", "cinematic", "commercial video", "YouTube editor", "wedding video", "Premiere Pro", "DaVinci Resolve", "After Effects"],
  authors: [{ name: "Richardo Kevin" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richardokvn.com",
    siteName: "Richardo Kevin Portfolio",
    title: "Richardo Kevin | Video Editor Portfolio",
    description: "Video editor based in Bali creating cinematic stories for brands, businesses, and creators.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richardo Kevin - Video Editor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richardo Kevin | Video Editor Portfolio",
    description: "Video editor based in Bali creating cinematic stories for brands, businesses, and creators.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://richardokvn.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <CategoryFilterProvider>
          <ConditionalNavbar />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <StructuredData />
        </CategoryFilterProvider>
      </body>
    </html>
  );
}