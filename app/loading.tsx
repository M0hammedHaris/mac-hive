export default function Loading() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Animated Hexagon Loader */}
                <div className="relative h-16 w-16">
                    <div className="absolute inset-0 animate-ping rounded-xl bg-primary/20" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                        <div className="h-8 w-8 animate-spin rounded-lg border-2 border-primary border-t-transparent" />
                    </div>
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
