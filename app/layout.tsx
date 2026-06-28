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
    default: "Machive | Workflow Audits, Automation Sprints & Internal Tools",
    template: "%s | Machive",
  },
  description:
    "Machive helps founders and operations teams worldwide fix manual workflows with workflow audits, automation sprints, internal tools, dashboards, and ongoing optimization.",
  keywords: [
    "workflow automation",
    "internal tools",
    "workflow consultant",
    "operations dashboard",
    "automation sprint",
    "workflow audit",
    "lead capture systems",
    "admin panel development",
    "reporting automation",
    "founder operations systems",
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
    title: "Machive | Workflow Audits, Automation Sprints & Internal Tools",
    description:
      "Workflow audits, automation sprints, internal tools, dashboards, and ongoing optimization for founders and operations teams worldwide. Built end-to-end by a senior engineer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machive | Workflow Audits, Automation Sprints & Internal Tools",
    description:
      "Workflow audits, automation sprints, internal tools, dashboards, and ongoing optimization for growing teams.",
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
