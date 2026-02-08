import React from "react";
import Image from "next/image";
import { ExternalLink, Globe, Layout, Smartphone, Code, Database, CheckCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

// Data from links.md
const PORTFOLIO_ITEMS = [
    {
        title: "Mohammed Haris",
        description: "Personal portfolio showcasing full-stack development projects and skills.",
        image: "/portfolio/mh-portfolio.png", // Placeholder path
        link: "https://mh.machive.in",
        tags: ["Next.js", "React", "Tailwind CSS"],
        category: "Personal Portfolio"
    },
    {
        title: "Mac Hive",
        description: "Corporate website for Mac Hive, a software development agency.",
        image: "/portfolio/mac-hive.png", // Placeholder path
        link: "https://machive.in",
        tags: ["Agency", "Corporate", "SaaS"],
        category: "Corporate"
    },
    {
        title: "Loom Video Downloader",
        description: "A tool to download Loom videos directly.",
        image: "/portfolio/loom-downloader.png", // Placeholder path
        link: "https://loom-video-downloader-v2.vercel.app",
        tags: ["Utility", "Tool", "Video"],
        category: "SaaS Tool"
    },
    {
        title: "AdHive",
        description: "Ad management and analytics platform.",
        image: "/portfolio/adhive.png", // Placeholder path
        link: "https://adhive.in",
        tags: ["AdTech", "Analytics", "SaaS"],
        category: "SaaS Product"
    },
    {
        title: "BillHive",
        description: "Invoicing and billing solution for businesses.",
        image: "/portfolio/billhive.png", // Placeholder path
        link: "https://billhive.in",
        tags: ["FinTech", "Billing", "SaaS"],
        category: "SaaS Product"
    },
    {
        title: "DevHive",
        description: "Developer tools and resources hub.",
        image: "/portfolio/devhive.png", // Placeholder path
        link: "https://devhive.in",
        tags: ["DevTools", "Resources", "Community"],
        category: "Developer Tools"
    }
];

export default function PortfolioPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Navbar />

            {/* Header */}
            <section className="px-6 lg:px-40 py-20 lg:py-32 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-[1200px] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                        Our Work
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
                        Built with <span className="text-primary">Precision.</span> <br />
                        Deployed with <span className="text-primary">Speed.</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our portfolio of high-performance applications, SaaS products, and digital experiences delivered for our clients and internal ventures.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="px-6 lg:px-40 py-24">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <div key={index} className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Image Placeholder area since we don't have actual images yet */}
                            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                {/* Use a pattern or icon instead of actual image for now to avoid 404s on build/runtime if images missing */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                                <Layout className="text-gray-300 dark:text-gray-600 size-16 group-hover:scale-110 transition-transform duration-500" />

                                {/* Overlay Link */}
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity backdrop-blur-sm"
                                >
                                    <div className="bg-white text-slate-900 rounded-full p-3 font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        Visit Site <ExternalLink size={16} />
                                    </div>
                                </a>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.category}</span>
                                    <div className="flex gap-2">
                                        <div className="size-2 rounded-full bg-red-400"></div>
                                        <div className="size-2 rounded-full bg-yellow-400"></div>
                                        <div className="size-2 rounded-full bg-green-400"></div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[10px] font-bold uppercase rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 lg:px-40 py-24 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-3xl font-black mb-6">Have an idea? Let's build it.</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                        We transform concepts into production-ready software. Whether you need a simple MVP or a complex enterprise platform, we have the expertise to deliver.
                    </p>
                    <Button className="h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/20">
                        Start Your Project <ArrowRight className="ml-2" size={20} />
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
