import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const record = [
    { figure: "6+ years", label: "building production software" },
    {
        figure: "300+",
        label: "live client environments run software I helped ship",
    },
];

export type Product = {
    name: string;
    what: string;
    url: string;
    host: string;
    image: string;
    alt: string;
    /** Lead products only: what the product shows about how Machive builds,
     *  taken from its own description and screenshot, nothing more. */
    shows?: string;
    /** Optional kind of product (e.g. Finance), shown quietly beside the name. Not set on the home page. */
    category?: string;
};

// Led by the two closest to an operations-heavy business: a billing tool and a
// numbers dashboard. The rest follow as a quieter list.
const leadProducts: Product[] = [
    {
        name: "BillHive",
        what: "Billing and invoicing for small businesses and freelancers.",
        shows: "I build business tools that track work by status. Here, every invoice is paid, pending, overdue or draft.",
        url: "https://bill.machive.in",
        host: "bill.machive.in",
        image: "/portfolio/billhive.jpg",
        alt: "BillHive invoice list on a phone, showing paid, pending, overdue and draft invoices",
    },
    {
        name: "SalaryMan",
        what: "Income, expenses and savings goals in one view.",
        shows: "I build dashboards that put the numbers in one view. Here, income, expenses and recent transactions.",
        url: "https://salary-man.machive.in",
        host: "salary-man.machive.in",
        image: "/portfolio/salaryman.jpg",
        alt: "SalaryMan dashboard with an income versus expenses chart and recent transactions",
    },
];

const otherProducts: Product[] = [
    {
        name: "Ad Manager",
        what: "Generates ad posters for marketing campaigns.",
        url: "https://ad.machive.in",
        host: "ad.machive.in",
        image: "/portfolio/ad-manager.jpg",
        alt: "Ad Manager poster editor with generation controls and a layer panel",
    },
    {
        name: "Mud Pottery",
        what: "Online shop for handmade ceramics.",
        url: "https://mud-potter.machive.in",
        host: "mud-potter.machive.in",
        image: "/portfolio/mud-pottery.jpg",
        alt: "Mud Pottery storefront with a product grid of vases, bowls and planters",
    },
    {
        name: "Snapchat Organizer",
        what: "Sorts and manages a Snapchat media library.",
        url: "https://snapchat-organizer.machive.in",
        host: "snapchat-organizer.machive.in",
        image: "/portfolio/snapchat-organizer.jpg",
        alt: "Snapchat Organizer media library grid with select, download and tag controls",
    },
];

export function ProofSection() {
    return (
        <section
            id="work"
            aria-labelledby="work-title"
            className="w-full border-y border-ink bg-pad-deep"
        >
            <div className="mx-auto w-full max-w-[1440px] px-6 py-18 md:py-24 lg:px-20">
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                    <h2
                        id="work-title"
                        className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl lg:col-span-5"
                    >
                        The record, and products running today
                    </h2>
                    <dl className="grid grid-cols-1 border-t border-ink sm:grid-cols-2 lg:col-span-7">
                        {record.map((item) => (
                            <div
                                key={item.figure}
                                className="flex flex-col-reverse justify-end gap-1 border-b border-rule py-6 sm:pr-6"
                            >
                                <dt className="text-base leading-snug text-ink-soft text-pretty">
                                    {item.label}
                                </dt>
                                <dd className="font-mono text-3xl font-semibold tabular-nums text-ink">
                                    {item.figure}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <p className="mt-12 max-w-[40rem] text-lg leading-relaxed text-ink-soft text-pretty">
                    Machive&apos;s own shipped products. Each one is live:
                    open it and use it.
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
                    {leadProducts.map((product) => (
                        <li key={product.name}>
                            <LeadProduct product={product} />
                        </li>
                    ))}
                </ul>

                <div className="mt-12 flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-ink">
                        Also running
                    </h3>
                    <ul className="border-t border-ink">
                        {otherProducts.map((product) => (
                            <li key={product.name}>
                                <ProductRow product={product} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-[40rem] text-lg leading-relaxed text-ink text-pretty">
                        Need a tool like these for your business? Start with a
                        call.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 w-fit shrink-0 items-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil"
                        >
                            Request a Discovery Call
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex min-h-12 items-center text-base font-semibold text-ink underline decoration-rule transition-colors hover:decoration-ink active:text-pencil"
                        >
                            More about each product
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HostLink({ product }: { product: Product }) {
    return (
        <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 w-fit py-3 font-mono text-sm text-ink underline decoration-rule transition-colors hover:decoration-ink active:text-pencil"
        >
            {product.host.split(/(?<=[.-])/).map((part, i) => (
                <span key={i}>
                    {part}
                    <wbr />
                </span>
            ))}
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
        </a>
    );
}

export function LeadProduct({ product }: { product: Product }) {
    return (
        <figure className="flex flex-col gap-3">
            <div className="border border-ink bg-pad">
                <Image
                    src={product.image}
                    alt={product.alt}
                    width={640}
                    height={640}
                    sizes="(min-width: 1440px) 620px, (min-width: 768px) 45vw, 100vw"
                    className="aspect-square w-full object-cover"
                />
            </div>
            <figcaption className="flex flex-col gap-2">
                <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-2xl font-semibold text-ink">
                        {product.name}
                    </span>
                    {product.category ? (
                        <span className="text-sm text-ink-soft">
                            {product.category}
                        </span>
                    ) : null}
                </span>
                <span className="text-base leading-snug text-ink-soft text-pretty">
                    {product.what}
                </span>
                {product.shows ? (
                    <span className="max-w-[36rem] text-base leading-relaxed text-ink-soft text-pretty">
                        <span className="font-semibold text-ink">
                            What it shows:
                        </span>{" "}
                        {product.shows}
                    </span>
                ) : null}
                <HostLink product={product} />
            </figcaption>
        </figure>
    );
}

function ProductRow({ product }: { product: Product }) {
    return (
        <div className="grid grid-cols-[4.5rem_1fr] items-center gap-x-6 border-b border-rule py-3 md:grid-cols-[4.5rem_12rem_1fr_auto]">
            <div className="border border-ink bg-pad">
                <Image
                    src={product.image}
                    alt={product.alt}
                    width={72}
                    height={72}
                    sizes="72px"
                    className="aspect-square w-full object-cover"
                />
            </div>
            <div className="flex flex-col md:contents">
                <span className="text-lg font-semibold text-ink">
                    {product.name}
                </span>
                <span className="text-sm leading-snug text-ink-soft text-pretty md:text-base">
                    {product.what}
                </span>
                <HostLink product={product} />
            </div>
        </div>
    );
}
