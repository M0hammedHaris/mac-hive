import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Portfolio() {
    const projects = [
        {
            title: "BillHive",
            tag: "Automation",
            tagColor: "text-primary bg-primary/10",
            description:
                "A glassmorphic SaaS product for effortless billing automation and revenue forecasting.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLYiHCJu4jDrPkX4IOlyR9ack2m7-drP8OIm4GALmootl7a0DI5kK_cyg4xzWa20JoMG_nmgzPAuPKkdWYckDq1tsOp5-32AHTpISQQqJl7n0fRJVSLouFvJv64XZbygce_6h_hpJPslnl6Y5BGHRxeJ0LPybDGt2xJXxM_3Dw5CtqgIW0IReuC7LEN-Q6gstn4-IJnYY_yVPRge3X8FebBd7s8VLvnLzM1LByczAN42IUNR2ArZ4kShDRSkEi-yASa2KCcCgi1x7",
            alt: "SaaS dashboard with sleek charts and billing data",
        },
        {
            title: "AdHive",
            tag: "AI Managed",
            tagColor: "text-emerald-600 bg-emerald-500/10",
            description:
                "Next-gen AI ad management platform optimizing multi-channel spends in real-time.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDIzKmELBU2Of0S8FalIIkciVAKx7OKmIRBMIT6AOJemGwnNv6EmG4XKHHnw1SyqUjSofnHwYOfmHFIIsJK0AsiEiqaPmMdrORqGQOak8CnmOoXhHuIGB8dvLQqvlnU3hN4_RTx-fQCL7rzVpLSqqEDfeKCDbgxWLp5UFtrHF_YZPraFu3hmKeQHlOrOfTyv3Gk_jAjC8FxfvuX1vFEut8KYef8jLxhzHS0aXfEUd1wnBD1cFvfrMp7d65vuCRdsfnEIGbNW3Tg9Hq4",
            alt: "Digital marketing interface with AI campaign insights",
        },
        {
            title: "DevHive",
            tag: "Infrastructure",
            tagColor: "text-orange-600 bg-orange-500/10",
            description:
                "Autoscaling serverless framework designed for agentic application workflows.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQFyWX96LwcHWFgsIZa_Z39R89xIuA9-XnF4oqZRwHURy448Vossefi_1DRUNKwgqN82xVn7wZ0sDB-4Qqm29IuGUkLEvVy2lYq8BJzqWHi2R7pVx1YMVeZ27AGG6Xg8SjFbji36Dv9SWUMeJQaKSdYrgOE6vKuE8q0KRROiuJIvQjCj98vOjtjVxWfRgxQtrFAqSXGrEKz1MvW1wml7QYcI4eOingqky_6h1_VK8jdcUzOoOj0SoVGOSjUmYu0kDIB5h4S70_rwN",
            alt: "Code editor showing automated AI script generation",
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
                    {/* Navigation controls could be functional here */}
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
                            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 mb-6">
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
                                <Button variant="outline" className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                                    Case Study
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
