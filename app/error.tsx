'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[60vh] items-center justify-center px-6">
            <div className="flex flex-col items-center gap-6 text-center max-w-md">
                {/* Error Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/20">
                    <AlertTriangle className="h-10 w-10 text-red-500" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Something went wrong!
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        We encountered an unexpected error. Please try again or contact support if the problem persists.
                    </p>
                </div>

                <Button onClick={() => reset()} className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Try Again
                </Button>
            </div>
        </div>
    );
}
