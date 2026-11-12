import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { navCta, navLinks } from "./nav-links";
import { MobileNav } from "./MobileNav";

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full glass-nav px-6 py-3 lg:px-20">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label="Machive home"
                >
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={48}
                        height={48}
                        priority
                        className="h-12 w-12"
                    />
                    <span className="text-xl font-normal text-ink font-display">
                        Machive
                    </span>
                </Link>

                <nav
                    aria-label="Main"
                    className="hidden items-center gap-6 lg:flex xl:gap-8"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex min-h-12 min-w-11 items-center justify-center text-sm font-semibold text-ink-soft transition-colors hover:text-ink active:text-pencil"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href={navCta.href}
                        className="inline-flex min-h-12 items-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil"
                    >
                        {navCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </nav>

                <MobileNav />
            </div>
        </header>
    );
}
