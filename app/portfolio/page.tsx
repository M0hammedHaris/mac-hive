import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe, Layout, Smartphone, Code, Database, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Mac Hive - Our Work",
    description: "Explore our portfolio of high-performance SaaS applications, websites, and mobile apps. See how we deliver production-ready solutions at agentic speed.",
    openGraph: {
        title: "Portfolio | Mac Hive",
        description: "High-performance applications built with precision and deployed with speed.",
    },
};

// Data from components/sections/Portfolio.tsx
const PORTFOLIO_ITEMS = [
    {
        title: "Snapchat Organizer",
        tag: "Social Media",
        tagColor: "text-yellow-600 bg-yellow-500/10",
        description:
            "A powerful tool for organizing and managing your Snapchat content efficiently.",
        url: "https://snapchat-organizer.machive.in",
        image: "/portfolio/snapchat-organizer.png",
        alt: "Snapchat Organizer - Social media content management tool",
    },
    {
        title: "SalaryMan",
        tag: "Finance",
        tagColor: "text-emerald-600 bg-emerald-500/10",
        description:
            "Personal finance management app to track income, expenses, and achieve your financial goals.",
        url: "https://salary-man.machive.in",
        image: "/portfolio/salaryman.png",
        alt: "SalaryMan - Personal finance management dashboard",
    },
    {
        title: "Mud Pottery",
        tag: "E-commerce",
        tagColor: "text-orange-600 bg-orange-500/10",
        description:
            "Artisan pottery e-commerce platform showcasing handcrafted ceramic pieces.",
        url: "https://mud-pottery.machive.in",
        image: "/portfolio/mud-pottery.png",
        alt: "Mud Pottery - Artisan ceramics e-commerce platform",
    },
    {
        title: "Ad Manager",
        tag: "Marketing",
        tagColor: "text-purple-600 bg-purple-500/10",
        description:
            "AI-powered ad poster generator for creating stunning marketing visuals instantly.",
        url: "https://ad.machive.in",
        image: "/portfolio/ad-manager.png",
        alt: "Ad Manager - AI-powered marketing poster generator",
    },
    {
        title: "BillHive",
        tag: "Business",
        tagColor: "text-primary bg-primary/10",
        description:
            "Mobile billing and invoicing application for small businesses and freelancers.",
        url: "https://bill.machive.in",
        image: "/portfolio/billhive.png",
        alt: "BillHive - Mobile billing and invoicing application",
    },
];

export default function PortfolioPage() {
    return (
        <div className="w-full">
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
                            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-10"></div>
                                {/* Use next/image with unoptimized for external Google images */}
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    unoptimized
                                />

                                {/* Overlay Link */}
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity backdrop-blur-sm"
                                >
                                    <div className="bg-white text-slate-900 rounded-full p-3 font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        Visit Site <ExternalLink size={16} />
                                    </div>
                                </a>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.tag}</span>
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
                                    <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md ${item.tagColor}`}>
                                        {item.tag}
                                    </span>
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
                    <Link href="/contact">
                        <Button className="h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/20">
                            Start Your Project <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
