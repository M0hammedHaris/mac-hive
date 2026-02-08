import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-12 px-6 md:px-20">
            <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                        <span className="material-symbols-outlined text-lg font-icon">hive</span>
                    </div>
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                        Mac Hive
                    </span>
                </div>
                <div className="flex gap-8 text-sm font-medium text-slate-500">
                    <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                </div>
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Mac Hive Agency. Built with speed.
                </p>
            </div>
        </footer>
    )
}
