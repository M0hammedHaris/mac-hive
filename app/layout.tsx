import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  OrganizationSchema,
  WebSiteSchema,
  PersonSchema,
} from "@/components/seo/JsonLd";
import { SpeedInsights } from "@vercel/speed-insights/next";

const alfaSlabOne = localFont({
  src: "../public/fonts/AlfaSlabOne-Regular.ttf",
  variable: "--font-alfa",
  display: "swap",
});

// Archivo: words (variable weight + width axes, so bold is real, not synthetic).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// JetBrains Mono: figures and measurements only.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://machive.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Machive | Websites, Dashboards, Automation & Business Software",
    template: "%s | Machive",
  },
  description:
    "Machive helps growing businesses worldwide improve lead generation, operations, and internal workflows with websites, dashboards, automation, and business software built end-to-end by a senior engineer.",
  keywords: [
    "business software",
    "lead generation website",
    "construction website",
    "dashboard development",
    "workflow automation",
    "internal tools",
    "operations dashboard",
    "internal automation",
    "SaaS MVP development",
    "admin panel development",
    "reporting automation",
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
    title: "Machive | Websites, Dashboards, Automation & Business Software",
    description:
      "Lead-generation websites, dashboards, automation, and business software for growing businesses worldwide. Founder-direct delivery from strategy through launch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machive | Websites, Dashboards, Automation & Business Software",
    description:
      "Lead-generation websites, dashboards, automation, and business software for growing teams.",
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
    <html
      lang="en"
      className={`${alfaSlabOne.variable} ${archivo.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <PersonSchema />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans">
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
