import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export function Portfolio() {
    const projects = [
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

    return (
        <section id="portfolio" className="w-full py-24 px-6 lg:px-20 max-w-[1440px] overflow-hidden">
            <div className="mb-12 flex items-end justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold tracking-widest text-primary uppercase">
                        Our Portfolio
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                        The Hive Fleet
                    </h2>
                </div>
                <div className="hidden sm:flex gap-2">
                    <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                        <ChevronLeft className="h-6 w-6 text-slate-900 dark:text-white" />
                    </button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                        <ChevronRight className="h-6 w-6 text-slate-900 dark:text-white" />
                    </button>
                </div>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
                {projects.map((project, index) => (
                    <div key={index} className="min-w-[320px] md:min-w-[480px] snap-center group">
                        <div className="relative overflow-hidden rounded-3xl glass-card p-4 transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-2xl">
                            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 mb-6 relative">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    unoptimized
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-bold ${project.tagColor}`}
                                    >
                                        {project.tag}
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    {project.description}
                                </p>
                                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 gap-2">
                                        Visit Project
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
