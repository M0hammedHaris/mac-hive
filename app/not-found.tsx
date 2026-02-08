'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center px-6">
            <div className="flex flex-col items-center gap-8 text-center max-w-lg">
                {/* 404 Typography */}
                <div className="relative">
                    <span className="text-[10rem] font-black leading-none text-slate-100 dark:text-slate-800/50 select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <span className="text-4xl font-black text-primary">?</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Page Not Found
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/">
                        <Button className="gap-2">
                            <Home className="h-4 w-4" />
                            Go Home
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
}
