import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema, PersonSchema } from "@/components/seo/JsonLd";
import { SpeedInsights } from "@vercel/speed-insights/next";

const alfaSlabOne = localFont({
  src: "../public/fonts/AlfaSlabOne-Regular.ttf",
  variable: "--font-alfa",
  display: "swap",
});

const anticSlab = localFont({
  src: "../public/fonts/AnticSlab-Regular.ttf",
  variable: "--font-antic",
  display: "swap",
});

const siteUrl = "https://machive.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Machive | Business Software & Automation That Helps You Grow",
    template: "%s | Machive",
  },
  description:
    "Machive builds lead-generation websites, custom business software, automation systems, and AI-powered solutions that help businesses reduce manual work and scale efficiently.",
  keywords: [
    "business software development",
    "lead generation website",
    "business automation",
    "custom software India",
    "CRM integration",
    "WhatsApp automation",
    "AI business solutions",
    "web development Coimbatore",
    "process automation",
    "Machive",
  ],
  authors: [{ name: "Mohammed Haris", url: siteUrl }],
  creator: "Mohammed Haris",
  publisher: "Machive",
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Machive",
    title: "Machive | Business Software & Automation That Helps You Grow",
    description:
      "Lead generation, business software, automation, and AI solutions for growing businesses. Built by a senior engineer who owns every project end-to-end.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machive | Business Software & Automation That Helps You Grow",
    description:
      "Lead generation, business software, automation, and AI solutions for growing businesses.",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alfaSlabOne.variable} ${anticSlab.variable} antialiased scroll-smooth`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <PersonSchema />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 mt-20 flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
