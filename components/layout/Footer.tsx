import Link from "next/link"
import Image from "next/image"

const linkClass =
    "inline-flex min-h-12 min-w-11 items-center text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline active:text-pencil"

export function Footer() {
    return (
        <footer className="w-full border-t border-ink bg-pad px-6 py-12 lg:px-20">
            <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8"
                    />
                    <span className="text-lg font-normal text-ink font-display">
                        Machive
                    </span>
                </div>
                <nav aria-label="Footer">
                    <ul className="flex flex-wrap gap-x-8 text-sm font-medium">
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/mohammed-haris-k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                LinkedIn
                                <span className="sr-only"> (opens in a new tab)</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/M0hammedHaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                GitHub
                                <span className="sr-only"> (opens in a new tab)</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className={linkClass}>
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className={linkClass}>
                                Terms
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p className="text-sm text-ink-soft">
                    © {new Date().getFullYear()} Machive. Built for growing businesses.
                </p>
            </div>
        </footer>
    )
}
