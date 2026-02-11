import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
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
    default: "Mac Hive | Building SaaS at Agentic Speed",
    template: "%s | Mac Hive",
  },
  description:
    "Mac Hive is a high-speed web and mobile development agency leveraging AI agentic workflows to build production-ready SaaS products in weeks, not months.",
  keywords: [
    "SaaS development",
    "web development agency",
    "mobile app development",
    "Next.js development",
    "Flutter development",
    "AI-powered development",
    "fast software delivery",
    "agentic development",
    "Mac Hive",
  ],
  authors: [{ name: "Mac Hive", url: siteUrl }],
  creator: "Mac Hive",
  publisher: "Mac Hive",
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
    siteName: "Mac Hive",
    title: "Mac Hive | Building SaaS at Agentic Speed",
    description:
      "High-speed web and mobile development agency. Ship your SaaS in weeks, not months.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Mac Hive - Building SaaS at Agentic Speed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mac Hive | Building SaaS at Agentic Speed",
    description:
      "High-speed web and mobile development agency. Ship your SaaS in weeks, not months.",
    images: ["/icon.png"],
    creator: "@machive",
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
