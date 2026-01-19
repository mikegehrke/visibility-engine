'use client';

import Link from 'next/link';
import { useEffect } from 'react';

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
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-danger-muted flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-ink mb-4">
          Something went wrong
        </h2>
        <p className="text-slate mb-8">
          An unexpected error occurred. Please try again or go back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-6 text-[15px] rounded-lg bg-signal-bg text-white hover:bg-signal-bg-hover transition-all"
          >
            Try again
          </button>
          <Link 
            href="/en"
            className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-6 text-[15px] rounded-lg border border-border bg-canvas text-ink hover:bg-mist transition-all"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
