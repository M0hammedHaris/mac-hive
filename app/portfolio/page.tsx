import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadProduct, type Product } from "@/components/sections/ProofSection";
import { PageIntro } from "@/components/sections/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Machive — Workflow Systems & Automation Projects",
    description: "Explore Machive's portfolio of business software, automation systems, internal tools, and product builds delivered for growing teams worldwide.",
    alternates: {
        canonical: "https://machive.in/portfolio",
    },
    openGraph: {
        title: "Portfolio | Machive — Our Work",
        description: "Business software, internal tools, automation systems, and workflow-focused product builds for growing teams.",
    },
};

// Machive's own products (also shown on the home page, components/sections/ProofSection.tsx).
// Same order and screenshots as the home page; the descriptions are this page's own.
const PORTFOLIO_ITEMS: Product[] = [
    {
        name: "BillHive",
        category: "Business",
        what: "Mobile billing and invoicing application for small businesses and freelancers.",
        url: "https://bill.machive.in",
        host: "bill.machive.in",
        image: "/portfolio/billhive.jpg",
        alt: "BillHive invoice list on a phone, showing paid, pending, overdue and draft invoices",
    },
    {
        name: "SalaryMan",
        category: "Finance",
        what: "Personal finance management app to track income, expenses, and achieve your financial goals.",
        url: "https://salary-man.machive.in",
        host: "salary-man.machive.in",
        image: "/portfolio/salaryman.jpg",
        alt: "SalaryMan dashboard with an income versus expenses chart and recent transactions",
    },
    {
        name: "Ad Manager",
        category: "Marketing",
        what: "AI-powered ad poster generator for creating stunning marketing visuals instantly.",
        url: "https://ad.machive.in",
        host: "ad.machive.in",
        image: "/portfolio/ad-manager.jpg",
        alt: "Ad Manager poster editor with generation controls and a layer panel",
    },
    {
        name: "Mud Pottery",
        category: "E-commerce",
        what: "Artisan pottery e-commerce platform showcasing handcrafted ceramic pieces.",
        url: "https://mud-potter.machive.in",
        host: "mud-potter.machive.in",
        image: "/portfolio/mud-pottery.jpg",
        alt: "Mud Pottery storefront with a product grid of vases, bowls and planters",
    },
    {
        name: "Snapchat Organizer",
        category: "Social Media",
        what: "A powerful tool for organizing and managing your Snapchat content efficiently.",
        url: "https://snapchat-organizer.machive.in",
        host: "snapchat-organizer.machive.in",
        image: "/portfolio/snapchat-organizer.jpg",
        alt: "Snapchat Organizer media library grid with select, download and tag controls",
    },
];

export default function PortfolioPage() {
    return (
        <div className="flex w-full flex-col items-center">
            <PageIntro
                title={
                    <>
                        Built with Precision. <br className="hidden md:block" />
                        Deployed with Speed.
                    </>
                }
                lead="Explore selected builds across internal tools, automation systems, SaaS products, and digital experiences delivered for clients and internal ventures."
            />

            <div className="mt-12 w-full border-y border-ink bg-pad-deep">
                <div className="mx-auto w-full max-w-[1440px] px-6 py-18 md:py-24 lg:px-20">
                    <ul className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                        {PORTFOLIO_ITEMS.map((product) => (
                            <li key={product.name}>
                                <LeadProduct product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <FinalCTA
                title="Have a workflow bottleneck? Let's fix it."
                body="Whether you need a focused automation sprint, a clearer dashboard, or a larger internal tool, Machive can help scope the right next step."
                label="Book a Discovery Call"
            />
        </div>
    );
}
