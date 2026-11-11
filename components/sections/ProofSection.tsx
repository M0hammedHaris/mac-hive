import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const record = [
    { figure: "6+ years", label: "building production software" },
    {
        figure: "300+",
        label: "live client environments run software I helped ship",
    },
];

const products = [
    {
        name: "BillHive",
        what: "Billing and invoicing for small businesses and freelancers.",
        url: "https://bill.machive.in",
        host: "bill.machive.in",
        image: "/portfolio/billhive.jpg",
        alt: "BillHive invoice list on a phone, showing paid, pending, overdue and draft invoices",
    },
    {
        name: "SalaryMan",
        what: "Income, expenses and savings goals in one view.",
        url: "https://salary-man.machive.in",
        host: "salary-man.machive.in",
        image: "/portfolio/salaryman.jpg",
        alt: "SalaryMan dashboard with an income versus expenses chart and recent transactions",
    },
    {
        name: "Snapchat Organizer",
        what: "Sorts and manages a Snapchat media library.",
        url: "https://snapchat-organizer.machive.in",
        host: "snapchat-organizer.machive.in",
        image: "/portfolio/snapchat-organizer.jpg",
        alt: "Snapchat Organizer media library grid with select, download and tag controls",
    },
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
];

export function ProofSection() {
    const [lead, ...rest] = products;

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

                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
                    <li className="col-span-2 lg:row-span-2">
                        <ProductFigure product={lead} sizes="(min-width: 1024px) 45vw, 100vw" large />
                    </li>
                    {rest.map((product) => (
                        <li key={product.name}>
                            <ProductFigure product={product} sizes="(min-width: 1024px) 22vw, 50vw" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function ProductFigure({
    product,
    sizes,
    large = false,
}: {
    product: (typeof products)[number];
    sizes: string;
    large?: boolean;
}) {
    return (
        <figure className="flex flex-col gap-3">
            <div className="border border-ink bg-pad">
                <Image
                    src={product.image}
                    alt={product.alt}
                    width={640}
                    height={640}
                    sizes={sizes}
                    className="aspect-square w-full object-cover"
                />
            </div>
            <figcaption className="flex flex-col gap-1">
                <span
                    className={`font-semibold text-ink ${large ? "text-2xl" : "text-lg"}`}
                >
                    {product.name}
                </span>
                <span className="text-sm leading-snug text-ink-soft text-pretty md:text-base">
                    {product.what}
                </span>
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
            </figcaption>
        </figure>
    );
}
