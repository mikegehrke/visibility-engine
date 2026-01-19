import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-signal-muted flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold text-signal">404</span>
        </div>
        <h2 className="text-2xl font-semibold text-ink mb-4">
          Page not found
        </h2>
        <p className="text-slate mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/en"
            className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-6 text-[15px] rounded-lg bg-signal-bg text-white hover:bg-signal-bg-hover transition-all"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
